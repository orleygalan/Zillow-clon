import { useState } from "react";
import {
  HiCheckCircle,
  HiStar,
  HiTrendingUp,
  HiUsers,
  HiPhone,
  HiMail,
} from "react-icons/hi";
import { PLANS, STATS, TESTIMONIALS } from "../data/adventisePase";

const FEATURES_LIST = [
  {
    icon: <HiUsers size={24} />,
    title: "Massive Audience",
    desc: "Reach over 245 million monthly users actively searching for homes on Zillow, Trulia, and partner sites.",
  },
  {
    icon: <HiTrendingUp size={24} />,
    title: "Advanced Analytics",
    desc: "Track listing performance, lead sources, and ROI with our comprehensive analytics dashboard updated in real time.",
  },
  {
    icon: <HiStar size={24} />,
    title: "Premier Badge",
    desc: "Stand out from the competition with the Zillow Premier Agent® badge, the most trusted signal for home buyers.",
  },
  {
    icon: <HiCheckCircle size={24} />,
    title: "Verified Reviews",
    desc: "Collect and display verified client reviews that build trust and convert more leads into closings.",
  },
];

export default function AdvertisePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "Premier",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#001f6e] to-[#006aff] text-white py-20 px-4">
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="text-blue-200 text-sm font-medium uppercase tracking-widest mb-3">
            For Real Estate Professionals
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
            Grow Your Business
            <br />
            with Zillow Advertising
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Connect with motivated buyers and sellers on the #1 real estate
            platform. Get more leads, close more deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#plans"
              className="px-8 py-3 bg-white text-[#006aff] font-bold rounded-lg hover:bg-blue-50 transition-colors"
            >
              View Plans & Pricing
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              Talk to Sales
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-[#f7f7f7]">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-3xl md:text-4xl font-bold text-[#006aff]">
                {s.value}
              </p>
              <p className="text-sm text-[#888] mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-3">
              Why advertise with Zillow?
            </h2>
            <p className="text-[#888] max-w-xl mx-auto">
              Everything you need to build your brand, generate leads, and grow
              your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES_LIST.map((f) => (
              <div
                key={f.title}
                className="bg-[#f7f7f7] rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#e8f0ff] text-[#006aff] rounded-xl flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="font-bold text-[#1a1a1a] mb-2">{f.title}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="plans" className="py-16 px-4 bg-[#f7f7f7]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-3">
              Simple, transparent pricing
            </h2>
            <p className="text-[#888]">No hidden fees. Cancel anytime.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl border-2 ${plan.color} p-6 flex flex-col relative
                ${plan.popular ? "shadow-xl" : "shadow-sm"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#006aff] text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-5">
                  <h3 className="text-xl font-bold text-[#1a1a1a]">
                    {plan.name}
                  </h3>
                  <div className="flex items-end gap-1 mt-2">
                    <span className="text-4xl font-bold text-[#1a1a1a]">
                      {plan.price}
                    </span>
                    <span className="text-[#888] mb-1">{plan.period}</span>
                  </div>
                  <p className="text-sm text-[#888] mt-2">{plan.desc}</p>
                </div>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-[#555]"
                    >
                      <HiCheckCircle
                        size={16}
                        className="text-[#1a7c3e] shrink-0"
                      />{" "}
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`w-full py-3 text-center font-semibold rounded-lg transition-colors text-sm
                    ${plan.popular ? "bg-[#006aff] text-white hover:bg-[#0051cc]" : "border-2 border-[#006aff] text-[#006aff] hover:bg-[#e8f0ff]"}`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a1a] text-center mb-12">
            What our agents say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-[#f7f7f7] rounded-2xl p-6">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <HiStar key={i} size={16} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-[#555] leading-relaxed italic mb-4">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#006aff] text-white flex items-center justify-center text-sm font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#1a1a1a]">
                      {t.name}
                    </p>
                    <p className="text-xs text-[#888]">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Lead form */}
      <section id="contact" className="py-16 px-4 bg-[#f7f7f7]">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">
              Ready to get started?
            </h2>
            <p className="text-[#555] leading-relaxed mb-6">
              Our team of advertising specialists will help you choose the right
              plan and set up your profile to start generating leads
              immediately.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-[#555]">
                <HiPhone size={18} className="text-[#006aff] shrink-0" /> (800)
                ZILLOW-1
              </div>
              <div className="flex items-center gap-3 text-sm text-[#555]">
                <HiMail size={18} className="text-[#006aff] shrink-0" />{" "}
                agents@zillow.com
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#e0e0e0] p-6 shadow-sm">
            {submitted ? (
              <div className="text-center py-8">
                <HiCheckCircle
                  size={48}
                  className="text-[#1a7c3e] mx-auto mb-3"
                />
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
                  Thanks, {form.name.split(" ")[0]}!
                </h3>
                <p className="text-sm text-[#888]">
                  Our team will reach out to you at {form.email} within 1
                  business day.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-4">
                  Talk to an advertising specialist
                </h3>
                <form onSubmit={handleSubmit} className="space-y-3">
                  {[
                    {
                      label: "Full Name",
                      key: "name",
                      type: "text",
                      placeholder: "Your full name",
                    },
                    {
                      label: "Email",
                      key: "email",
                      type: "email",
                      placeholder: "your@email.com",
                    },
                    {
                      label: "Phone",
                      key: "phone",
                      type: "tel",
                      placeholder: "(555) 000-0000",
                    },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className="block text-xs font-medium text-[#555] mb-1">
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        value={form[f.key]}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, [f.key]: e.target.value }))
                        }
                        placeholder={f.placeholder}
                        required
                        className="w-full border border-[#e0e0e0] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#006aff] transition-colors"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-medium text-[#555] mb-1">
                      Interested Plan
                    </label>
                    <select
                      value={form.plan}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, plan: e.target.value }))
                      }
                      className="w-full border border-[#e0e0e0] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#006aff] transition-colors"
                    >
                      {PLANS.map((p) => (
                        <option key={p.name}>{p.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#555] mb-1">
                      Message (optional)
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      placeholder="Tell us about your business goals…"
                      rows={3}
                      className="w-full border border-[#e0e0e0] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#006aff] transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#006aff] text-white font-semibold rounded-lg hover:bg-[#0051cc] transition-colors text-sm"
                  >
                    Request a Callback
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
