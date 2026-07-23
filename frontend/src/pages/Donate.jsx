import React, { useState, useRef } from "react";
import PageBanner from "../components/PageBanner";
import { QrCode, Copy, CheckCircle2, Heart, ShieldCheck, ChevronLeft, ChevronRight, Sprout, Droplets, GraduationCap, BadgeCheck } from "lucide-react";
import { toast } from "../hooks/use-toast";

// ============================================================
// ⚠️  MOMENTS FROM THE FIELD — GALLERY
// ============================================================
// Upload each image to /frontend/public/images/gallery/ using the
// filenames below, or update the "src" paths to match your own filenames.
const GALLERY_PHOTOS = [
  {
    src: "/images/gallery/assam-flood-relief.jpg",
    caption: "Delivering food and water kits to families during Assam flood relief"
  },
  {
    src: "/images/gallery/swachhata-pakhwada.jpg",
    caption: "Volunteers out for a Swachhata Pakhwada cleanliness drive"
  },
  {
    src: "/images/gallery/tree-plantation.jpg",
    caption: "Planting saplings as part of our tree plantation initiative"
  },
  {
    src: "/images/gallery/skill-center-sewing-training.jpeg",
    caption: "Women learning tailoring skills at the Gana Sewa Skill Center"
  },
  {
    src: "/images/gallery/skill-center-classroom.jpeg",
    caption: "Students attending a training session at the Skill Center"
  },
  {
    src: "/images/gallery/skill-center-vaccination-drive.jpeg",
    caption: "A vaccination drive organized for the community at the Skill Center"
  },
  {
    src: "/images/gallery/skill-center-certificates.jpeg",
    caption: "Trainees proudly holding their course completion certificates"
  },
  {
    src: "/images/gallery/skill-center-group-activity.jpeg",
    caption: "A batch of students taking part in a classroom activity"
  }
];

// ============================================================
// ⚠️  UPDATE THESE VALUES WITH YOUR ACTUAL UPI DETAILS
// ============================================================
const UPI_DETAILS = {
  // Fallback QR shown before the donor picks an amount (any amount, decided in their UPI app).
  qrImage: "/images/QRCode.jpeg",
  upiId: "msganasewa.eazypay@icici",
  payeeName: "M/S.GANA SEWA"
};

const REGISTRATION_NUMBER = "RS/DBR/250/G/05 OF 2008"; // update if different

// Preset amounts tied to real, specific impact — picking one embeds the
// amount directly into the UPI QR so the donor doesn't have to type it in.
const AMOUNT_TIERS = [
  { amount: 500, impact: "Funds a tree plantation & cleanliness drive" },
  { amount: 1000, impact: "Provides an emergency Assam flood relief kit" },
  { amount: 2500, impact: "Sponsors a student's vocational training at the Skill Center" }
];

const buildUpiQrUrl = (amount) => {
  const upiLink = `upi://pay?pa=${encodeURIComponent(UPI_DETAILS.upiId)}&pn=${encodeURIComponent(
    UPI_DETAILS.payeeName
  )}${amount ? `&am=${amount}` : ""}&cu=INR`;
  return `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(upiLink)}`;
};

// ============================================================
// ⚠️  DONATION NOTIFICATION SETUP
// ============================================================
// This sends you (the admin) an email every time someone submits the form
// below, so you have a name + UTR reference to match against your bank
// statement — no payment gateway needed.
//
// 1. Go to https://formspree.io and create a free account.
// 2. Create a new form, point it at the email you want notifications sent to.
// 3. Copy the endpoint URL it gives you (looks like https://formspree.io/f/xxxxxxxx)
//    and paste it below.
const DONATION_NOTIFY_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID";

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
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [utrNumber, setUtrNumber] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(null); // null = donor decides in-app
  const [customAmount, setCustomAmount] = useState("");
  const [customOpen, setCustomOpen] = useState(false);
  const galleryRef = useRef(null);

  const effectiveAmount =
    selectedAmount === "custom" ? Number(customAmount) || null : selectedAmount;
  const activeTier = AMOUNT_TIERS.find((t) => t.amount === effectiveAmount);
  const qrSrc = effectiveAmount ? buildUpiQrUrl(effectiveAmount) : UPI_DETAILS.qrImage;

  const scrollGallery = (direction) => {
    if (!galleryRef.current) return;
    const card = galleryRef.current.querySelector("[data-gallery-card]");
    const scrollAmount = card ? card.offsetWidth + 16 : 300;
    galleryRef.current.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  };

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

  const markAsPaid = async () => {
    if (!donorName.trim() || !donorEmail.trim() || !utrNumber.trim()) {
      toast({
        title: "Missing details",
        description: "Please fill in your name, email, and UPI reference number so we can confirm your donation."
      });
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(DONATION_NOTIFY_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          donorName,
          donorEmail,
          utrNumber,
          submittedAt: new Date().toISOString()
        })
      });

      if (!response.ok) throw new Error("Notification request failed");

      setStep("success");
    } catch {
      toast({
        title: "Couldn't send confirmation",
        description: "Your details weren't sent. Please try again, or email us your UTR number directly."
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageBanner title="Donate Now" breadcrumbs={[{ label: "Donate" }]} />

      {/* Moments from the Field - photo gallery */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-x max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Moments from the Field</h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              A glimpse of where your donation goes to work
            </p>
          </div>

          <div className="relative">
            <div
              ref={galleryRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {GALLERY_PHOTOS.map((photo, index) => (
                <div
                  key={index}
                  data-gallery-card
                  className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[32%]"
                >
                  <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 h-full">
                    <div className="aspect-[4/3] bg-gray-100">
                      <img
                        src={photo.src}
                        alt={photo.caption}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-700 px-4 py-3 leading-snug">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Prev/Next arrows - hidden on small screens where swipe is natural */}
            <button
              onClick={() => scrollGallery(-1)}
              aria-label="Previous photos"
              className="hidden sm:flex absolute -left-4 top-1/3 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 items-center justify-center text-gray-700 hover:bg-gray-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollGallery(1)}
              aria-label="Next photos"
              className="hidden sm:flex absolute -right-4 top-1/3 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 items-center justify-center text-gray-700 hover:bg-gray-50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#faf6f2]">
        <div className="container-x max-w-2xl">
          {step === "qr" && (
            <div className="bg-white rounded-2xl shadow-[0_25px_50px_-20px_rgba(5,150,105,0.35)] overflow-hidden border border-[#059669]/10">
              {/* Header strip with subtle depth */}
              <div className="relative bg-[radial-gradient(circle_at_top_left,#0d9668_0%,#059669_45%,#047857_100%)] text-white px-8 py-8 text-center overflow-hidden">
                <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:16px_16px]" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 mb-2">
                    <QrCode className="w-6 h-6" />
                    <h2 className="text-2xl font-bold">Scan to Pay via UPI</h2>
                  </div>
                  <p className="text-white/90 text-sm">Use any UPI app - PhonePe, Google Pay, Paytm, BHIM</p>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-6 py-3 bg-[#f0fdf9] border-b border-[#059669]/10 text-xs font-medium text-[#0a5643]">
                <span className="inline-flex items-center gap-1.5">
                  <BadgeCheck className="w-3.5 h-3.5" /> 80G Tax Exempt
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified NGO
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-[#0a5643]/70">
                  Reg. No. {REGISTRATION_NUMBER}
                </span>
              </div>

              {/* Amount selector */}
              <div className="px-6 sm:px-8 pt-8 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                  Choose an amount to see your impact
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2.5">
                  {AMOUNT_TIERS.map((tier) => (
                    <button
                      key={tier.amount}
                      onClick={() => {
                        setSelectedAmount(tier.amount);
                        setCustomOpen(false);
                      }}
                      className={`px-5 py-2.5 rounded-full text-sm font-bold border-2 transition-colors ${selectedAmount === tier.amount
                          ? "bg-[#059669] border-[#059669] text-white shadow-md"
                          : "bg-white border-gray-200 text-gray-700 hover:border-[#059669]/50"
                        }`}
                    >
                      ₹{tier.amount.toLocaleString("en-IN")}
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      setCustomOpen(true);
                      setSelectedAmount("custom");
                    }}
                    className={`px-5 py-2.5 rounded-full text-sm font-bold border-2 transition-colors ${selectedAmount === "custom"
                        ? "bg-[#059669] border-[#059669] text-white shadow-md"
                        : "bg-white border-gray-200 text-gray-700 hover:border-[#059669]/50"
                      }`}
                  >
                    Other
                  </button>
                </div>

                {customOpen && (
                  <div className="mt-3 max-w-[220px] mx-auto">
                    <input
                      type="number"
                      min="1"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder="Enter amount (₹)"
                      className="w-full text-center rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#059669]/40 focus:border-[#059669]"
                    />
                  </div>
                )}

                {selectedAmount && (
                  <button
                    onClick={() => {
                      setSelectedAmount(null);
                      setCustomOpen(false);
                      setCustomAmount("");
                    }}
                    className="mt-3 text-xs text-gray-400 hover:text-gray-600 underline underline-offset-2"
                  >
                    Let me decide the amount in my UPI app instead
                  </button>
                )}

                {(activeTier || (selectedAmount === "custom" && effectiveAmount)) && (
                  <div className="mt-4 inline-flex items-start gap-2 bg-[#faf6f2] border border-[#059669]/15 rounded-lg px-4 py-2.5 text-left max-w-sm mx-auto">
                    <Heart className="w-4 h-4 text-[#059669] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-[#0a5643]">
                        ₹{effectiveAmount.toLocaleString("en-IN")}
                      </span>{" "}
                      {activeTier ? activeTier.impact : "goes directly toward our active programs"}
                    </p>
                  </div>
                )}
              </div>

              {/* QR Code */}
              <div className="px-8 pt-8 pb-8 text-center">
                <div className="inline-block bg-white p-4 rounded-lg border-4 border-[#059669]/20 shadow-md">
                  <img
                    src={qrSrc}
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

                {/* Donor details for reconciliation */}
                <div className="mt-8 text-left bg-[#faf6f2] rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-1 text-center">Confirm Your Donation</h3>
                  <p className="text-xs text-gray-500 text-center mb-4">
                    Share these details so we can match your payment on our end.
                  </p>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        placeholder="Your name"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#059669]/40 focus:border-[#059669]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#059669]/40 focus:border-[#059669]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        UPI Reference / UTR Number
                      </label>
                      <input
                        type="text"
                        value={utrNumber}
                        onChange={(e) => setUtrNumber(e.target.value)}
                        placeholder="12-digit number shown in your UPI app after payment"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#059669]/40 focus:border-[#059669]"
                      />
                    </div>
                  </div>
                </div>

                {/* Instructions */}
                <div className="mt-4 text-left bg-[#faf6f2] rounded-lg p-5">
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
                      Copy the UTR / reference number from your UPI app and paste it above
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#059669] text-white text-xs font-bold flex items-center justify-center">6</span>
                      Click the button below to confirm your donation
                    </li>
                  </ol>
                </div>

                {/* Confirm button */}
                <button
                  onClick={markAsPaid}
                  disabled={submitting}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#059669] hover:bg-[#047857] disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-white py-4 rounded-full font-bold text-lg shadow-md"
                >
                  {submitting ? "Sending confirmation..." : "I have completed the payment"}
                  {!submitting && <CheckCircle2 className="w-5 h-5" />}
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-4">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  Every rupee reaches Gana Sewa directly — no middlemen, no processing fees
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