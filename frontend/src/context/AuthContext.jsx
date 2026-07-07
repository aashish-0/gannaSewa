import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db, SUPER_ADMIN_EMAILS } from "../lib/firebase";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (u) {
        setUser(u);
        // Load or create user profile
        const ref = doc(db, "users", u.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setProfile({ id: u.uid, ...snap.data() });
        } else {
          // First-time login: create profile. Assign super_admin if email is in list.
          const role = SUPER_ADMIN_EMAILS.includes(u.email) ? "super_admin" : "viewer";
          const newProfile = {
            email: u.email,
            name: u.displayName || u.email.split("@")[0],
            role,
            createdAt: serverTimestamp()
          };
          await setDoc(ref, newProfile);
          setProfile({ id: u.uid, ...newProfile });
        }
      } else {
        setUser(null);
        setProfile(null);
      }
      setLoading(false);
    });
    return unsub;
  }, []);

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);
  const createUser = async (email, password, role, name) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", cred.user.uid), {
      email, name: name || email.split("@")[0], role, createdAt: serverTimestamp()
    });
    return cred;
  };

  const isSuperAdmin = profile?.role === "super_admin";
  const isEditor = profile?.role === "editor" || isSuperAdmin;
  const canAccessAdmin = isSuperAdmin || isEditor;

  return (
    <AuthContext.Provider value={{ user, profile, loading, login, logout, createUser, isSuperAdmin, isEditor, canAccessAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
