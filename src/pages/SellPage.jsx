import { useState } from "react";
import Button from "../components/ui/Button";
import { HiCheckCircle, HiArrowRight } from "react-icons/hi";
import {
  HiOutlineHome,
  HiOutlineCurrencyDollar,
  HiOutlineClipboardDocumentList,
} from "react-icons/hi2";

const OPTIONS = [
  {
    icon: <HiOutlineHome/>,
    title: "List with an Agent",
    desc: "Work with a local expert to get the best price for your home. Agents negotiate on your behalf and handle paperwork.",
    badge: "Most popular",
    color: "border-[#006aff]",
  },
  {
    icon: <HiOutlineCurrencyDollar/>,
    title: "Sell to Zillow",
    desc: "Get a cash offer from Zillow and sell on your schedule. Close in as few as 7 days with no showings or repairs needed.",
    badge: null,
    color: "border-[#e0e0e0]",
  },
  {
    icon: <HiOutlineClipboardDocumentList/>,
    title: "For Sale By Owner",
    desc: "List your home yourself and save on commission. We'll help you create a listing and connect with buyers directly.",
    badge: null,
    color: "border-[#e0e0e0]",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Get your home's value",
    desc: "See your Zestimate and a personalized pricing analysis from a local agent.",
  },
  {
    num: "02",
    title: "Choose your path",
    desc: "Decide whether to list with an agent, sell to Zillow, or go FSBO.",
  },
  {
    num: "03",
    title: "Prep and list",
    desc: "We'll guide you through staging, photos, and writing a great description.",
  },
  {
    num: "04",
    title: "Accept an offer",
    desc: "Review offers, negotiate, and pick the best deal for you.",
  },
  {
    num: "05",
    title: "Close and celebrate",
    desc: "Sign the paperwork, hand over the keys, and move on to your next chapter.",
  },
];

export default function SellPage() {
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a1a1a] to-[#333] text-white py-20 px-4 overflow-hidden">
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sell your home with confidence
          </h1>
          <p className="text-white/80 text-lg mb-8">
            Zillow is making it simpler to sell your home and move forward.
          </p>
          <div className="flex gap-2 bg-white rounded-xl p-2 shadow-xl max-w-lg mx-auto">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your home address"
              className="flex-1 px-3 py-2 text-[#1a1a1a] text-sm outline-none rounded-lg"
            />
            <button
              onClick={() => setSubmitted(true)}
              className="px-5 py-2 bg-[#006aff] text-white text-sm font-semibold rounded-lg hover:bg-[#0051cc] transition-colors whitespace-nowrap"
            >
              Get started
            </button>
          </div>
          {submitted && (
            <p className="mt-3 text-green-300 text-sm flex items-center justify-center gap-1">
              <HiCheckCircle size={16} /> We'll analyze your home and show you
              options in your area.
            </p>
          )}
        </div>
      </section>

      {/* Options */}
      <section className="py-16 px-4 bg-[#f7f7f7]">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a1a] text-center mb-3">
            Selling options to fit your needs
          </h2>
          <p className="text-[#888] text-center mb-10">
            Choose the path that works best for your timeline and goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OPTIONS.map((opt) => (
              <div
                key={opt.title}
                className={`bg-white rounded-2xl border-2 ${opt.color} p-6 hover:shadow-lg transition-shadow relative`}
              >
                {opt.badge && (
                  <span className="absolute -top-3 left-6 bg-[#006aff] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {opt.badge}
                  </span>
                )}
                <div className="text-4xl mb-4">{opt.icon}</div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
                  {opt.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed mb-4">
                  {opt.desc}
                </p>
                <button className="flex items-center gap-1 text-[#006aff] text-sm font-medium hover:gap-2 transition-all">
                  Learn more <HiArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 px-4">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a1a] text-center mb-12">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {STEPS.map((step, i) => (
              <div key={step.num} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#006aff] text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">
                  {i + 1}
                </div>
                <h3 className="font-bold text-[#1a1a1a] text-sm mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-[#888] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market snapshot */}
      <section className="py-12 px-4 bg-[#f7f7f7]">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8">
            Scottsdale Market Snapshot
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Median Sale Price", value: "$4.2M", change: "+5.1%" },
              {
                label: "Avg Days on Market",
                value: "18 days",
                change: "-2 days",
              },
              { label: "Homes Sold (30d)", value: "87", change: "+12%" },
              { label: "Sale/List Ratio", value: "97.8%", change: "+0.3%" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-2xl p-5 border border-[#e0e0e0]"
              >
                <p className="text-2xl font-bold text-[#1a1a1a]">{s.value}</p>
                <p className="text-sm text-[#888] mt-1">{s.label}</p>
                <p className="text-xs text-[#1a7c3e] font-medium mt-1">
                  {s.change}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
