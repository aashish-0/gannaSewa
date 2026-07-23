import { useEffect } from "react";
import { useDoc } from "../hooks/useContent";

/**
 * DynamicHead — reads content/settings from Firestore and syncs:
 *  - <link rel="icon">   (favicon)
 *  - <title>             (site title)
 *  - <meta name=description>
 *  - <meta name=theme-color>
 *
 * Runs client-side after mount; falls back to whatever is in public/index.html.
 */
const DynamicHead = () => {
  const settings = useDoc("content/settings", {});

  useEffect(() => {
    if (!settings) return;

    // Favicon
    if (settings.favicon) {
      let iconLink = document.querySelector("link[rel~='icon']");
      if (!iconLink) {
        iconLink = document.createElement("link");
        iconLink.setAttribute("rel", "icon");
        document.head.appendChild(iconLink);
      }
      // append cache-buster so browser picks up new file immediately
      const url = settings.favicon.includes("?") ? settings.favicon : `${settings.favicon}?v=${Date.now()}`;
      iconLink.setAttribute("href", url);

      // Apple touch icon
      let appleIcon = document.querySelector("link[rel='apple-touch-icon']");
      if (!appleIcon) {
        appleIcon = document.createElement("link");
        appleIcon.setAttribute("rel", "apple-touch-icon");
        document.head.appendChild(appleIcon);
      }
      appleIcon.setAttribute("href", url);
    }

    // Site title
    if (settings.siteTitle) document.title = settings.siteTitle;

    // Meta description
    if (settings.metaDescription) {
      let desc = document.querySelector("meta[name='description']");
      if (!desc) {
        desc = document.createElement("meta");
        desc.setAttribute("name", "description");
        document.head.appendChild(desc);
      }
      desc.setAttribute("content", settings.metaDescription);
    }

    // Theme color
    if (settings.themeColor) {
      let tc = document.querySelector("meta[name='theme-color']");
      if (!tc) {
        tc = document.createElement("meta");
        tc.setAttribute("name", "theme-color");
        document.head.appendChild(tc);
      }
      tc.setAttribute("content", settings.themeColor);
    }
  }, [settings]);

  return null;
};

export default DynamicHead;
