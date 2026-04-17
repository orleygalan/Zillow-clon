import { useState, useMemo } from "react";
import { calcMonthlyPayment, formatPrice } from "../utils/helpers";

const RATES = [
  { term: "30-year fixed", rate: 6.875, apr: 6.98, years: 30 },
  { term: "20-year fixed", rate: 6.625, apr: 6.744, years: 20 },
  { term: "15-year fixed", rate: 6.25, apr: 6.41, years: 15 },
  { term: "10-year fixed", rate: 6.125, apr: 6.352, years: 10 },
  { term: "5/1 ARM", rate: 6.5, apr: 7.12, years: 30 },
  { term: "7/1 ARM", rate: 6.625, apr: 7.203, years: 30 },
];

const TIPS = [
  {
    icon: "💳",
    tip: "Improve your credit score",
    desc: "Aim for 740+ to qualify for the best rates.",
  },
  {
    icon: "📉",
    tip: "Make a larger down payment",
    desc: "Putting 20% down avoids PMI and lowers your rate.",
  },
  {
    icon: "🏦",
    tip: "Shop multiple lenders",
    desc: "Compare at least 3–5 lenders to find the best offer.",
  },
  {
    icon: "📅",
    tip: "Lock your rate early",
    desc: "Rate locks protect you from increases during closing.",
  },
];

const PQ_STEPS = [
  {
    n: 1,
    title: "Answer a few questions",
    desc: "Tell us about your home purchase and finances.",
  },
  {
    n: 2,
    title: "Review your BuyAbility",
    desc: "See how much home you can comfortably afford.",
  },
  {
    n: 3,
    title: "Get pre-qualified",
    desc: "Receive a pre-qualification letter in minutes.",
  },
  {
    n: 4,
    title: "Make confident offers",
    desc: "Shop with confidence backed by Zillow Home Loans.",
  },
];

const TABS = [
  { id: "calculator", label: "🧮 Mortgage Calculator" },
  { id: "rates", label: "📈 Current Rates" },
  { id: "prequalify", label: "📋 Get Pre-Qualified" },
];

const INPUT =
  "w-full border border-[#e0e0e0] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#006aff] transition-colors";

function SliderGroup({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
  minLabel,
  maxLabel,
}) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-medium text-[#1a1a1a]">{label}</label>
        <span className="text-sm font-bold text-[#006aff]">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full accent-[#006aff] cursor-pointer"
      />
      <div className="flex justify-between mt-1 text-xs text-[#aaa]">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}

export default function HomeLoansPage() {
  const [homePrice, setHomePrice] = useState(500000);
  const [downPct, setDownPct] = useState(20);
  const [annualRate, setAnnualRate] = useState(6.875);
  const [termYears, setTermYears] = useState(30);
  const [activeTab, setActiveTab] = useState("calculator");

  const [pqForm, setPqForm] = useState({
    name: "",
    email: "",
    phone: "",
    income: "",
    credit: "good",
  });
  const [pqDone, setPqDone] = useState(false);
  const [pqErr, setPqErr] = useState("");

  const downPayment = useMemo(
    () => (homePrice * downPct) / 100,
    [homePrice, downPct],
  );
  const loanAmount = useMemo(
    () => homePrice - downPayment,
    [homePrice, downPayment],
  );
  const monthly = useMemo(
    () => calcMonthlyPayment(loanAmount, annualRate, termYears),
    [loanAmount, annualRate, termYears],
  );
  const taxes = useMemo(() => (homePrice * 0.012) / 12, [homePrice]);
  const insurance = useMemo(() => (homePrice * 0.005) / 12, [homePrice]);
  const total = useMemo(
    () => monthly + taxes + insurance,
    [monthly, taxes, insurance],
  );

  const pctOf = (n) => `${((n / total) * 100).toFixed(1)}%`;

  const handlePqSubmit = (e) => {
    e.preventDefault();
    if (!pqForm.name || !pqForm.email || !pqForm.income) {
      setPqErr("Please fill in all required fields.");
      return;
    }
    setPqErr("");
    setPqDone(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#001f6e] to-[#006aff] text-white py-14 px-4">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
              Buy your next home with a brand you can trust
            </h1>
            <p className="text-blue-100 text-base mb-6 max-w-lg leading-relaxed">
              Get one step closer to landing the home you want by getting
              pre-qualified with Zillow Home Loans.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveTab("prequalify")}
                className="px-6 py-3 bg-white text-[#006aff] font-bold rounded-lg hover:bg-blue-50 transition-colors text-sm"
              >
                Get pre-qualified
              </button>
              <button
                onClick={() => setActiveTab("calculator")}
                className="px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-sm"
              >
                Calculate payment
              </button>
            </div>
          </div>
          <img
            src="https://blog-media.dev.zg-core.com/bedrock/app/uploads/sites/11/2022/10/pig.png"
            alt="Home Loans piggy bank"
            className="w-48 md:w-64 object-contain shrink-0 hidden md:block"
          />
        </div>
      </section>

      {/* Tab Bar */}
      <div className="bg-white border-b border-[#e0e0e0] sticky top-16 z-20">
        <div className="max-w-screen-xl mx-auto px-4 flex gap-1 py-2 overflow-x-auto">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-5 py-2.5 text-sm font-medium rounded-lg whitespace-nowrap transition-colors
                ${activeTab === t.id ? "bg-[#006aff] text-white" : "text-[#555] hover:bg-[#f7f7f7]"}`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Calculator Tab */}
      {activeTab === "calculator" && (
        <section className="max-w-screen-xl mx-auto px-4 md:px-8 py-10">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Controls */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-1">
                Mortgage Calculator
              </h2>
              <p className="text-sm text-[#888] mb-7">
                Estimate your monthly mortgage payment.
              </p>

              <SliderGroup
                label="Home price"
                display={formatPrice(homePrice)}
                min={100000}
                max={5000000}
                step={10000}
                value={homePrice}
                onChange={setHomePrice}
                minLabel="$100K"
                maxLabel="$5M"
              />
              <SliderGroup
                label="Down payment"
                display={`${downPct}% (${formatPrice(downPayment)})`}
                min={3}
                max={50}
                step={1}
                value={downPct}
                onChange={setDownPct}
                minLabel="3%"
                maxLabel="50%"
              />
              <SliderGroup
                label="Interest rate"
                display={`${annualRate.toFixed(3)}%`}
                min={2}
                max={12}
                step={0.125}
                value={annualRate}
                onChange={setAnnualRate}
                minLabel="2%"
                maxLabel="12%"
              />

              <div className="mb-5">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-[#1a1a1a]">
                    Loan term
                  </label>
                  <span className="text-sm font-bold text-[#006aff]">
                    {termYears} years
                  </span>
                </div>
                <div className="flex gap-2">
                  {[10, 15, 20, 30].map((y) => (
                    <button
                      key={y}
                      onClick={() => setTermYears(y)}
                      className={`flex-1 py-2 text-sm font-medium rounded-lg border transition-colors
                        ${termYears === y ? "bg-[#006aff] text-white border-[#006aff]" : "border-[#e0e0e0] text-[#555] hover:border-[#006aff] hover:text-[#006aff]"}`}
                    >
                      {y} yr
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Result Card */}
            <div className="bg-[#f7f7f7] rounded-2xl p-6 border border-[#e0e0e0]">
              <p className="text-sm text-[#888] mb-1">
                Estimated monthly payment
              </p>
              <p className="text-4xl font-bold text-[#1a1a1a] mb-4">
                {formatPrice(Math.round(total))}
                <span className="text-lg font-normal text-[#888]">/mo</span>
              </p>

              {/* Stacked bar */}
              <div className="flex rounded-full overflow-hidden h-3 mb-3">
                <div
                  style={{ width: pctOf(monthly), background: "#006aff" }}
                  title="Principal & Interest"
                />
                <div
                  style={{ width: pctOf(taxes), background: "#34a853" }}
                  title="Taxes"
                />
                <div
                  style={{ width: pctOf(insurance), background: "#fbbc04" }}
                  title="Insurance"
                />
              </div>
              <div className="flex gap-4 text-xs text-[#555] mb-5">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#006aff] inline-block" />
                  P&I
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#34a853] inline-block" />
                  Taxes
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#fbbc04] inline-block" />
                  Insurance
                </span>
              </div>

              <div className="space-y-2 text-sm border-t border-[#e0e0e0] pt-4 mb-5">
                {[
                  ["Principal & interest", formatPrice(Math.round(monthly))],
                  ["Property taxes (est.)", formatPrice(Math.round(taxes))],
                  [
                    "Homeowners insurance (est.)",
                    formatPrice(Math.round(insurance)),
                  ],
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-[#555]">{label}</span>
                    <span className="font-semibold text-[#1a1a1a]">{val}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-4 text-sm space-y-1.5 mb-5 border border-[#e0e0e0]">
                {[
                  ["Loan amount", formatPrice(loanAmount)],
                  ["Down payment", formatPrice(downPayment)],
                  ["Rate", `${annualRate.toFixed(3)}%`],
                ].map(([l, v]) => (
                  <div key={l} className="flex justify-between">
                    <span className="text-[#888]">{l}</span>
                    <span className="font-bold">{v}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setActiveTab("prequalify")}
                className="w-full py-3 bg-[#006aff] text-white font-semibold rounded-lg hover:bg-[#0051cc] transition-colors text-sm"
              >
                Get pre-qualified at this rate →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Rates Tab */}
      {activeTab === "rates" && (
        <section className="max-w-screen-xl mx-auto px-4 md:px-8 py-10">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-1">
            Today's Mortgage Rates
          </h2>
          <p className="text-sm text-[#888] mb-8">
            Rates updated daily. Your actual rate may vary based on credit score
            and other factors.
          </p>

          <div className="bg-white rounded-2xl border border-[#e0e0e0] overflow-hidden mb-6">
            {/* Table Header */}
            <div className="grid grid-cols-4 bg-[#f7f7f7] px-4 py-3 text-xs font-bold text-[#888] uppercase tracking-wide">
              {["Loan Type", "Interest Rate", "APR", "Monthly Payment*"].map(
                (h) => (
                  <span key={h}>{h}</span>
                ),
              )}
            </div>
            {RATES.map((r) => {
              const mp = calcMonthlyPayment(400000, r.rate, r.years);
              return (
                <div
                  key={r.term}
                  className="grid grid-cols-4 px-4 py-4 border-t border-[#f0f0f0] hover:bg-[#f7f7f7] transition-colors items-center text-sm"
                >
                  <span className="font-semibold text-[#1a1a1a]">{r.term}</span>
                  <span className="text-[#006aff] font-bold">
                    {r.rate.toFixed(3)}%
                  </span>
                  <span className="text-[#555]">{r.apr.toFixed(3)}%</span>
                  <span className="font-medium">
                    {formatPrice(Math.round(mp))}/mo
                  </span>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-[#aaa] mb-10">
            *Monthly payment based on a $400,000 loan. Rates are for
            informational purposes only.
          </p>

          <h3 className="text-xl font-bold text-[#1a1a1a] mb-6">
            How to get the best mortgage rate
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TIPS.map((t) => (
              <div
                key={t.tip}
                className="bg-[#f7f7f7] rounded-2xl p-5 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{t.icon}</div>
                <h4 className="font-bold text-[#1a1a1a] text-sm mb-1">
                  {t.tip}
                </h4>
                <p className="text-xs text-[#888] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Pre-Qualify Tab */}
      {activeTab === "prequalify" && (
        <section className="max-w-screen-xl mx-auto px-4 md:px-8 py-10">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-1">
                Get Pre-Qualified in Minutes
              </h2>
              <p className="text-sm text-[#888] mb-7">
                No hard credit pull required. Get a letter you can use to make
                offers.
              </p>

              {pqDone ? (
                <div className="bg-[#e8f5e9] rounded-2xl p-8 text-center">
                  <div className="text-5xl mb-3">🎉</div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
                    You're pre-qualified!
                  </h3>
                  <p className="text-sm text-[#555] leading-relaxed mb-5">
                    Congratulations, {pqForm.name}! A Zillow Home Loans
                    specialist will contact you at{" "}
                    <strong>{pqForm.email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setPqDone(false);
                      setPqForm({
                        name: "",
                        email: "",
                        phone: "",
                        income: "",
                        credit: "good",
                      });
                    }}
                    className="px-5 py-2.5 border border-[#1a7c3e] text-[#1a7c3e] text-sm font-medium rounded-lg hover:bg-[#d4edda] transition-colors"
                  >
                    Start over
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePqSubmit} className="space-y-4">
                  {pqErr && (
                    <p className="text-xs text-[#c23b22] bg-[#fce8e3] rounded-lg px-3 py-2">
                      {pqErr}
                    </p>
                  )}

                  {[
                    {
                      label: "Full name *",
                      key: "name",
                      type: "text",
                      placeholder: "Jane Smith",
                    },
                    {
                      label: "Email address *",
                      key: "email",
                      type: "email",
                      placeholder: "jane@example.com",
                    },
                    {
                      label: "Phone number",
                      key: "phone",
                      type: "tel",
                      placeholder: "(555) 000-0000",
                    },
                    {
                      label: "Annual household income *",
                      key: "income",
                      type: "number",
                      placeholder: "120000",
                    },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className="block text-xs font-medium text-[#555] mb-1">
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        value={pqForm[f.key]}
                        onChange={(e) =>
                          setPqForm({ ...pqForm, [f.key]: e.target.value })
                        }
                        placeholder={f.placeholder}
                        className={INPUT}
                        required={f.label.includes("*")}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-xs font-medium text-[#555] mb-1">
                      Credit score range
                    </label>
                    <select
                      value={pqForm.credit}
                      onChange={(e) =>
                        setPqForm({ ...pqForm, credit: e.target.value })
                      }
                      className={INPUT}
                    >
                      <option value="excellent">Excellent (760+)</option>
                      <option value="good">Good (700–759)</option>
                      <option value="fair">Fair (650–699)</option>
                      <option value="poor">Poor (below 650)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#006aff] text-white font-semibold rounded-lg hover:bg-[#0051cc] transition-colors text-sm"
                  >
                    Get Pre-Qualified Now
                  </button>
                  <p className="text-xs text-[#aaa] leading-relaxed">
                    By submitting, you consent to receive calls and texts from
                    Zillow Home Loans, LLC. No hard credit pull. NMLS ID# 10287.
                  </p>
                </form>
              )}
            </div>

            {/* Steps */}
            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-5">
                How it works
              </h3>
              <div className="space-y-4 mb-8">
                {PQ_STEPS.map((s) => (
                  <div key={s.n} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#006aff] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                      {s.n}
                    </div>
                    <div>
                      <p className="font-semibold text-[#1a1a1a] text-sm">
                        {s.title}
                      </p>
                      <p className="text-xs text-[#888] mt-0.5 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#f7f7f7] rounded-2xl p-5 border border-[#e0e0e0]">
                <p className="text-xs text-[#888] leading-relaxed text-center">
                  Zillow Home Loans, LLC — An Equal Housing Lender.
                  <br />
                  NMLS #10287.
                </p>
                <div className="flex justify-center gap-4 mt-3 text-xs text-[#aaa]">
                  <a
                    href="#"
                    className="hover:text-[#006aff] transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#006aff] transition-colors"
                  >
                    Terms of Use
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#006aff] transition-colors"
                  >
                    NMLS Consumer Access
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
