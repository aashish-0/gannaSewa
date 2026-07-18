import React, { useState } from "react";
import PageBanner from "../components/PageBanner";
import { QrCode, Copy, CheckCircle2, Heart, ShieldCheck } from "lucide-react";
import { toast } from "../hooks/use-toast";

// ============================================================
// ⚠️  UPDATE THESE VALUES WITH YOUR ACTUAL UPI DETAILS
// ============================================================
const UPI_DETAILS = {
  // 1. Replace this with your UPI QR code image.
  //    Option A: Upload your QR image to /frontend/public/images/upi-qr.png
  //              then set: qrImage: "/images/upi-qr.png"
  //    Option B: Use any hosted image URL
  //    Currently showing a placeholder QR image.
  qrImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png",

  // 2. Replace with your actual UPI ID
  upiId: "gannasewa@upi",

  // 3. Replace with your organization name (as registered on UPI)
  payeeName: "Gana Sewa"
};

// ============================================================
// ⚠️  CUSTOMIZE SUCCESS MESSAGE HERE
// ============================================================
const SUCCESS_MESSAGE = {
  title: "Thank You for Your Donation!",
  body: "Your generous contribution helps us empower girls and women across India. A receipt will be sent to your email shortly. For any queries, please contact info@gannasewa.in"
};

const Donate = () => {
  const [step, setStep] = useState("qr"); // "qr" | "success"
  const [copied, setCopied] = useState(false);

  const copyUpiId = async () => {
    try {
      await navigator.clipboard.writeText(UPI_DETAILS.upiId);
      setCopied(true);
      toast({ title: "UPI ID Copied!", description: `${UPI_DETAILS.upiId} copied to clipboard.` });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast({ title: "Copy failed", description: "Please copy manually." });
    }
  };

  const markAsPaid = () => setStep("success");

  return (
    <>
      <PageBanner title="Donate Now" breadcrumbs={[{ label: "Donate" }]} />

      <section className="py-16 md:py-20 bg-[#faf6f2]">
        <div className="container-x max-w-2xl">
          {step === "qr" && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Header strip */}
              <div className="bg-gradient-to-r from-[#059669] to-[#059669] text-white px-8 py-6 text-center">
                <div className="inline-flex items-center gap-2 mb-2">
                  <QrCode className="w-6 h-6" />
                  <h2 className="text-2xl font-bold">Scan to Pay via UPI</h2>
                </div>
                <p className="text-white/90 text-sm">Use any UPI app - PhonePe, Google Pay, Paytm, BHIM</p>
              </div>

              {/* QR Code */}
              <div className="px-8 pt-10 pb-8 text-center">
                <div className="inline-block bg-white p-4 rounded-lg border-4 border-[#059669]/20 shadow-md">
                  <img
                    src={UPI_DETAILS.qrImage}
                    alt="UPI QR Code"
                    className="w-64 h-64 object-contain"
                  />
                </div>

                {/* Payee info */}
                <div className="mt-6">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Paying to</p>
                  <p className="text-lg font-bold text-gray-900 mt-1">{UPI_DETAILS.payeeName}</p>
                </div>

                {/* UPI ID with copy */}
                <div className="mt-4 inline-flex items-center gap-2 bg-[#faf6f2] border border-gray-200 rounded-full px-4 py-2">
                  <span className="text-sm font-mono text-gray-700">{UPI_DETAILS.upiId}</span>
                  <button
                    onClick={copyUpiId}
                    className="w-7 h-7 rounded-full bg-[#059669] hover:bg-[#047857] transition-colors flex items-center justify-center text-white"
                    aria-label="copy upi id"
                  >
                    {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Instructions */}
                <div className="mt-8 text-left bg-[#faf6f2] rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-3 text-center">How to Pay</h3>
                  <ol className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#059669] text-white text-xs font-bold flex items-center justify-center">1</span>
                      Open any UPI app on your phone
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#059669] text-white text-xs font-bold flex items-center justify-center">2</span>
                      Tap on &quot;Scan QR&quot; and scan the code above
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#059669] text-white text-xs font-bold flex items-center justify-center">3</span>
                      Enter the amount you wish to donate
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#059669] text-white text-xs font-bold flex items-center justify-center">4</span>
                      Complete the payment in your UPI app
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#059669] text-white text-xs font-bold flex items-center justify-center">5</span>
                      Click the button below to confirm your donation
                    </li>
                  </ol>
                </div>

                {/* Confirm button */}
                <button
                  onClick={markAsPaid}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#059669] hover:bg-[#047857] transition-colors text-white py-4 rounded-full font-bold text-lg shadow-md"
                >
                  I have completed the payment
                  <CheckCircle2 className="w-5 h-5" />
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-4">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  Your donation is 100% secure & goes directly to Gana Sewa
                </div>
              </div>
            </div>
          )}

          {step === "success" && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden text-center">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-10">
                <div className="w-20 h-20 rounded-full bg-white/20 border-4 border-white/40 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold">{SUCCESS_MESSAGE.title}</h2>
              </div>

              <div className="px-8 py-10">
                <Heart className="w-10 h-10 text-[#059669] fill-[#059669] mx-auto mb-4" />
                <p className="text-gray-700 leading-relaxed max-w-md mx-auto mb-6">
                  {SUCCESS_MESSAGE.body}
                </p>

                <div className="bg-[#faf6f2] rounded-lg p-5 max-w-md mx-auto text-left mb-8">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">What happens next?</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] flex-shrink-0 mt-0.5" />
                      Your payment will be verified within 24 hours
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] flex-shrink-0 mt-0.5" />
                      An 80G tax exemption receipt will be emailed to you
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] flex-shrink-0 mt-0.5" />
                      You&rsquo;ll receive periodic updates on how your contribution is making an impact
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => setStep("qr")}
                    className="bg-white border-2 border-[#059669] text-[#059669] hover:bg-[#f0fdf4] transition-colors px-6 py-2.5 rounded-full font-semibold"
                  >
                    Make Another Donation
                  </button>
                  <a
                    href="/"
                    className="bg-[#059669] hover:bg-[#047857] transition-colors text-white px-6 py-2.5 rounded-full font-semibold"
                  >
                    Back to Home
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Donate;
