import React, { useState } from "react";
import PageBanner from "../components/PageBanner";
import { Heart, ShieldCheck, FileText, CreditCard } from "lucide-react";
import { toast } from "../hooks/use-toast";
import { brand } from "../data/mock";

const amounts = [500, 1000, 2500, 5000, 10000, 25000];

const Donate = () => {
  const [amount, setAmount] = useState(1000);
  const [custom, setCustom] = useState("");
  const [freq, setFreq] = useState("one-time");
  const [donor, setDonor] = useState({ name: "", email: "", phone: "", pan: "" });

  const onChange = (e) => setDonor({ ...donor, [e.target.name]: e.target.value });
  const finalAmount = custom ? Number(custom) : amount;

  const onDonate = (e) => {
    e.preventDefault();
    if (!finalAmount || finalAmount < 100) {
      toast({ title: "Please enter a valid amount", description: "Minimum donation is ₹100" });
      return;
    }
    toast({
      title: "Thank you for your donation!",
      description: `Your ${freq} donation of ₹${finalAmount.toLocaleString()} has been recorded. Payment gateway will open next.`
    });
  };

  return (
    <>
      <PageBanner title="Donate Now" breadcrumbs={[{ label: "Donate" }]} />

      <section className="py-16">
        <div className="container-x grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Your Contribution Creates Change</h2>
              <p className="text-gray-600 mb-6">Every rupee goes directly toward our programs. {brand.taxNote}</p>

              <form onSubmit={onDonate} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Donation Frequency</label>
                  <div className="grid grid-cols-2 gap-3">
                    {["one-time", "monthly"].map((f) => (
                      <button key={f} type="button" onClick={() => setFreq(f)} className={`py-3 rounded-md font-medium capitalize border-2 transition-colors ${freq === f ? "bg-[#ec008c] text-white border-[#ec008c]" : "bg-white text-gray-700 border-gray-300 hover:border-[#ec008c]"}`}>
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Select an Amount (₹)</label>
                  <div className="grid grid-cols-3 gap-3">
                    {amounts.map((a) => (
                      <button key={a} type="button" onClick={() => { setAmount(a); setCustom(""); }} className={`py-3 rounded-md font-semibold border-2 transition-colors ${!custom && amount === a ? "bg-[#ec008c] text-white border-[#ec008c]" : "bg-white text-gray-700 border-gray-300 hover:border-[#ec008c]"}`}>
                        ₹{a.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <input type="number" value={custom} onChange={(e) => setCustom(e.target.value)} placeholder="Or enter custom amount" className="mt-3 w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#ec008c] outline-none" />
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Details</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input required name="name" value={donor.name} onChange={onChange} placeholder="Full Name *" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#ec008c] outline-none" />
                    <input required type="email" name="email" value={donor.email} onChange={onChange} placeholder="Email *" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#ec008c] outline-none" />
                    <input required name="phone" value={donor.phone} onChange={onChange} placeholder="Phone *" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#ec008c] outline-none" />
                    <input name="pan" value={donor.pan} onChange={onChange} placeholder="PAN (for 80G receipt)" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#ec008c] outline-none" />
                  </div>
                </div>

                <button type="submit" className="w-full bg-[#ec008c] hover:bg-[#c70074] transition-colors text-white py-4 rounded-full font-bold text-lg shadow-md flex items-center justify-center gap-2">
                  Donate ₹{(finalAmount || 0).toLocaleString()} <Heart className="w-5 h-5 fill-white" />
                </button>

                <div className="flex items-center justify-center gap-6 text-xs text-gray-500 pt-3">
                  <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-green-500" /> Secure Payment</span>
                  <span className="flex items-center gap-1"><FileText className="w-4 h-4 text-[#ec008c]" /> Instant 80G Receipt</span>
                  <span className="flex items-center gap-1"><CreditCard className="w-4 h-4 text-[#ec008c]" /> All Cards Accepted</span>
                </div>
              </form>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-[#faf6f2] rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Where Your Money Goes</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-[#ec008c] font-bold">₹988</span> Complete school kit (bag + notebooks + stationery) for one girl</li>
                <li className="flex items-start gap-2"><span className="text-[#ec008c] font-bold">₹2,500</span> Monthly ration kit for a family of 4</li>
                <li className="flex items-start gap-2"><span className="text-[#ec008c] font-bold">₹5,000</span> One month of tuition support for a girl child</li>
                <li className="flex items-start gap-2"><span className="text-[#ec008c] font-bold">₹25,000</span> Full-year skill training scholarship for a woman</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Prefer Bank Transfer?</h3>
              <p className="text-sm text-gray-600 mb-3">Contact us for our bank details or write to <a href={`mailto:${brand.email}`} className="text-[#ec008c] font-medium">{brand.email}</a></p>
              <p className="text-xs text-gray-500">All donations are eligible for tax deduction under Section 80G of the Income Tax Act, 1961.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Donate;
