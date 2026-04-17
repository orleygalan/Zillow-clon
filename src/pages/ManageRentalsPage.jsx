import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  HiHome,
  HiCurrencyDollar,
  HiDocumentText,
  HiChartBar,
  HiPlus,
  HiCheck,
  HiClock,
  HiCog,
} from "react-icons/hi";
import {
  HiOutlineCurrencyDollar,
  HiOutlineDocumentText,
  HiOutlineWrenchScrewdriver,
  HiOutlineChartBar,
} from "react-icons/hi2";

// Mock data for demo
const MOCK_PROPERTIES = [
  {
    id: 1,
    address: "5001 N Scottsdale Rd #401",
    city: "Scottsdale, AZ 85250",
    rent: 8500,
    status: "occupied",
    tenant: "Michael Johnson",
    leaseEnd: "Dec 31, 2025",
    paid: true,
  },
  {
    id: 2,
    address: "7100 E Lincoln Dr #202",
    city: "Paradise Valley, AZ 85253",
    rent: 4200,
    status: "occupied",
    tenant: "Emily Chen",
    leaseEnd: "Mar 31, 2026",
    paid: false,
  },
  {
    id: 3,
    address: "4820 E Camelback Rd",
    city: "Phoenix, AZ 85018",
    rent: 5500,
    status: "vacant",
    tenant: null,
    leaseEnd: null,
    paid: false,
  },
];

const MOCK_PAYMENTS = [
  {
    id: 1,
    tenant: "Michael Johnson",
    address: "5001 N Scottsdale Rd #401",
    amount: 8500,
    date: "Apr 1, 2026",
    status: "paid",
  },
  {
    id: 2,
    tenant: "Emily Chen",
    address: "7100 E Lincoln Dr #202",
    amount: 4200,
    date: "Apr 1, 2026",
    status: "overdue",
  },
  {
    id: 3,
    tenant: "Michael Johnson",
    address: "5001 N Scottsdale Rd #401",
    amount: 8500,
    date: "Mar 1, 2026",
    status: "paid",
  },
  {
    id: 4,
    tenant: "Emily Chen",
    address: "7100 E Lincoln Dr #202",
    amount: 4200,
    date: "Mar 1, 2026",
    status: "paid",
  },
];

const MOCK_MAINTENANCE = [
  {
    id: 1,
    address: "7100 E Lincoln Dr #202",
    issue: "HVAC not cooling properly",
    priority: "high",
    status: "in-progress",
    date: "Apr 10, 2026",
  },
  {
    id: 2,
    address: "5001 N Scottsdale Rd #401",
    issue: "Leaking faucet in kitchen",
    priority: "medium",
    status: "open",
    date: "Apr 12, 2026",
  },
  {
    id: 3,
    address: "4820 E Camelback Rd",
    issue: "Pool cleaning needed",
    priority: "low",
    status: "resolved",
    date: "Apr 5, 2026",
  },
];

function StatCard({ icon, label, value, sub, color = "blue" }) {
  const colors = {
    blue: "bg-[#e3f2fd] text-[#1565c0]",
    green: "bg-[#e8f5e9] text-[#1a7c3e]",
    red: "bg-[#fce4ec] text-[#c62828]",
    orange: "bg-[#fff3e0] text-[#e65100]",
  };
  return (
    <div className="bg-white rounded-2xl border border-[#e0e0e0] p-5 flex items-center gap-4">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors[color]}`}
      >
        {icon}
      </div>
      <div>
        <p className="text-2xl font-bold text-[#1a1a1a]">{value}</p>
        <p className="text-sm text-[#555]">{label}</p>
        {sub && <p className="text-xs text-[#888] mt-0.5">{sub}</p>}
      </div>
    </div>
  );
}

function PropertyRow({ prop }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white rounded-xl border border-[#e0e0e0] gap-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#f7f7f7] flex items-center justify-center">
          <HiHome className="text-[#006aff]" size={20} />
        </div>
        <div>
          <p className="font-medium text-sm text-[#1a1a1a]">{prop.address}</p>
          <p className="text-xs text-[#888]">{prop.city}</p>
          {prop.tenant && (
            <p className="text-xs text-[#555] mt-0.5">
              Tenant: {prop.tenant} · Lease ends {prop.leaseEnd}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <div className="text-right">
          <p className="font-bold text-[#1a1a1a]">
            ${prop.rent.toLocaleString()}
            <span className="text-xs font-normal text-[#888]">/mo</span>
          </p>
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-medium
            ${prop.status === "occupied" ? "bg-[#e8f5e9] text-[#1a7c3e]" : "bg-[#fff3e0] text-[#e65100]"}`}
          >
            {prop.status === "occupied" ? "Occupied" : "Vacant"}
          </span>
        </div>
        {prop.status === "occupied" && (
          <span
            className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full font-medium
            ${prop.paid ? "bg-[#e8f5e9] text-[#1a7c3e]" : "bg-[#fce4ec] text-[#c62828]"}`}
          >
            {prop.paid ? <HiCheck size={12} /> : <HiClock size={12} />}
            {prop.paid ? "Paid" : "Overdue"}
          </span>
        )}
      </div>
    </div>
  );
}

export default function ManageRentalsPage() {
  const { user, openLogin } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  const totalRent = MOCK_PROPERTIES.filter(
    (p) => p.status === "occupied",
  ).reduce((a, p) => a + p.rent, 0);
  const paidCount = MOCK_PAYMENTS.filter(
    (p) => p.status === "paid" && p.date.includes("Apr"),
  ).length;

  const TABS = [
    { id: "overview", icon: <HiChartBar size={16} />, label: "Overview" },
    { id: "properties", icon: <HiHome size={16} />, label: "Properties" },
    { id: "payments", icon: <HiCurrencyDollar size={16} />, label: "Payments" },
    { id: "leases", icon: <HiDocumentText size={16} />, label: "Leases" },
    { id: "maintenance", icon: <HiCog size={16} />, label: "Maintenance" },
  ];

  if (!user)
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-20 h-20 rounded-full bg-[#e8f0ff] flex items-center justify-center mb-4">
          <HiHome size={36} className="text-[#006aff]" />
        </div>
        <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">
          Manage Your Rentals
        </h1>
        <p className="text-[#888] max-w-md mb-6">
          Sign in to access your rental dashboard, collect rent, manage leases,
          and handle maintenance requests all in one place.
        </p>
        <button
          onClick={openLogin}
          className="px-6 py-3 bg-[#006aff] text-white font-semibold rounded-lg hover:bg-[#0051cc] transition-colors"
        >
          Sign in to continue
        </button>
        {/* Feature preview */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl w-full">
          {[
            {
              icon: <HiOutlineCurrencyDollar />,
              title: "Collect Rent",
              desc: "Accept online payments from tenants",
            },
            {
              icon: <HiOutlineDocumentText />,
              title: "Manage Leases",
              desc: "Create, sign, and store leases digitally",
            },
            {
              icon: <HiOutlineWrenchScrewdriver />,
              title: "Maintenance",
              desc: "Track and resolve maintenance requests",
            },
            {
              icon: <HiOutlineChartBar />,
              title: "Analytics",
              desc: "Monitor occupancy and cash flow",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="bg-white border border-[#e0e0e0] rounded-xl p-4 flex flex-col items-center"
            >
              <div className="text-3xl mb-2">{f.icon}</div>
              <p className="font-semibold text-sm text-[#1a1a1a]">{f.title}</p>
              <p className="text-xs text-[#888] mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      {/* Page Header */}
      <div className="bg-white border-b border-[#e0e0e0] px-4 md:px-8 py-4">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-bold text-[#1a1a1a]">
              Rental Manager
            </h1>
            <p className="text-sm text-[#888]">Welcome back, {user.name}</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#006aff] text-white text-sm font-semibold rounded-lg hover:bg-[#0051cc] transition-colors">
            <HiPlus size={16} /> Add Property
          </button>
        </div>

        {/* Tabs */}
        <div className="max-w-screen-xl mx-auto flex gap-1 mt-4 overflow-x-auto">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors
                ${activeTab === t.id ? "bg-[#006aff] text-white" : "text-[#555] hover:bg-[#f7f7f7]"}`}
            >
              {t.icon}
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8">
        {/* Overview */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                icon={<HiHome size={22} />}
                label="Total Properties"
                value={MOCK_PROPERTIES.length}
                sub={`${MOCK_PROPERTIES.filter((p) => p.status === "occupied").length} occupied`}
                color="blue"
              />
              <StatCard
                icon={<HiCurrencyDollar size={22} />}
                label="Monthly Revenue"
                value={`$${totalRent.toLocaleString()}`}
                sub="from 2 tenants"
                color="green"
              />
              <StatCard
                icon={<HiCheck size={22} />}
                label="Payments This Month"
                value={`${paidCount}/${MOCK_PAYMENTS.filter((p) => p.date.includes("Apr")).length}`}
                sub="collected"
                color="green"
              />
              <StatCard
                icon={<HiCog size={22} />}
                label="Open Requests"
                value={
                  MOCK_MAINTENANCE.filter((m) => m.status !== "resolved").length
                }
                sub="pending resolution"
                color="orange"
              />
            </div>

            <div className="bg-white rounded-2xl border border-[#e0e0e0] p-6">
              <h2 className="font-bold text-[#1a1a1a] mb-4">Your Properties</h2>
              <div className="space-y-3">
                {MOCK_PROPERTIES.map((p) => (
                  <PropertyRow key={p.id} prop={p} />
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-[#e0e0e0] p-6">
                <h2 className="font-bold text-[#1a1a1a] mb-4">
                  Recent Payments
                </h2>
                <div className="space-y-3">
                  {MOCK_PAYMENTS.slice(0, 3).map((pay) => (
                    <div
                      key={pay.id}
                      className="flex items-center justify-between py-2 border-b border-[#f0f0f0] last:border-0"
                    >
                      <div>
                        <p className="text-sm font-medium text-[#1a1a1a]">
                          {pay.tenant}
                        </p>
                        <p className="text-xs text-[#888]">{pay.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-sm">
                          ${pay.amount.toLocaleString()}
                        </p>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${pay.status === "paid" ? "bg-[#e8f5e9] text-[#1a7c3e]" : "bg-[#fce4ec] text-[#c62828]"}`}
                        >
                          {pay.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-[#e0e0e0] p-6">
                <h2 className="font-bold text-[#1a1a1a] mb-4">
                  Maintenance Requests
                </h2>
                <div className="space-y-3">
                  {MOCK_MAINTENANCE.map((m) => (
                    <div
                      key={m.id}
                      className="flex items-start gap-3 py-2 border-b border-[#f0f0f0] last:border-0"
                    >
                      <span
                        className={`mt-0.5 w-2 h-2 rounded-full shrink-0 ${m.priority === "high" ? "bg-[#c23b22]" : m.priority === "medium" ? "bg-yellow-400" : "bg-[#1a7c3e]"}`}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-[#1a1a1a] truncate">
                          {m.issue}
                        </p>
                        <p className="text-xs text-[#888]">{m.address}</p>
                      </div>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full shrink-0 font-medium
                        ${m.status === "resolved" ? "bg-[#e8f5e9] text-[#1a7c3e]" : m.status === "in-progress" ? "bg-[#e3f2fd] text-[#1565c0]" : "bg-[#fff3e0] text-[#e65100]"}`}
                      >
                        {m.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Properties Tab */}
        {activeTab === "properties" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-lg text-[#1a1a1a]">
                All Properties
              </h2>
              <button className="flex items-center gap-1.5 px-4 py-2 bg-[#006aff] text-white text-sm font-medium rounded-lg hover:bg-[#0051cc] transition-colors">
                <HiPlus size={14} /> Add Property
              </button>
            </div>
            {MOCK_PROPERTIES.map((p) => (
              <PropertyRow key={p.id} prop={p} />
            ))}
          </div>
        )}

        {/* Payments Tab */}
        {activeTab === "payments" && (
          <div className="bg-white rounded-2xl border border-[#e0e0e0] overflow-hidden">
            <div className="p-6 border-b border-[#e0e0e0] flex justify-between items-center flex-wrap gap-3">
              <h2 className="font-bold text-[#1a1a1a]">Payment History</h2>
              <button className="px-4 py-2 bg-[#006aff] text-white text-sm font-medium rounded-lg hover:bg-[#0051cc] transition-colors">
                Send Reminder
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#f7f7f7]">
                  <tr>
                    {["Tenant", "Property", "Amount", "Date", "Status"].map(
                      (h) => (
                        <th
                          key={h}
                          className="text-left px-4 py-3 text-xs font-semibold text-[#888] uppercase tracking-wide"
                        >
                          {h}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  {MOCK_PAYMENTS.map((pay) => (
                    <tr
                      key={pay.id}
                      className="border-t border-[#f0f0f0] hover:bg-[#f7f7f7] transition-colors"
                    >
                      <td className="px-4 py-3 font-medium text-[#1a1a1a]">
                        {pay.tenant}
                      </td>
                      <td className="px-4 py-3 text-[#555] text-xs">
                        {pay.address}
                      </td>
                      <td className="px-4 py-3 font-bold">
                        ${pay.amount.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-[#888]">{pay.date}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-medium
                          ${pay.status === "paid" ? "bg-[#e8f5e9] text-[#1a7c3e]" : "bg-[#fce4ec] text-[#c62828]"}`}
                        >
                          {pay.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Leases Tab */}
        {activeTab === "leases" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-lg text-[#1a1a1a]">
                Active Leases
              </h2>
              <button className="flex items-center gap-1.5 px-4 py-2 bg-[#006aff] text-white text-sm font-medium rounded-lg hover:bg-[#0051cc] transition-colors">
                <HiPlus size={14} /> New Lease
              </button>
            </div>
            {MOCK_PROPERTIES.filter((p) => p.status === "occupied").map(
              (prop) => (
                <div
                  key={prop.id}
                  className="bg-white rounded-2xl border border-[#e0e0e0] p-5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="font-bold text-[#1a1a1a]">{prop.address}</p>
                      <p className="text-sm text-[#888]">{prop.city}</p>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm">
                        <span className="text-[#555]">
                          Tenant: <strong>{prop.tenant}</strong>
                        </span>
                        <span className="text-[#555]">
                          Rent:{" "}
                          <strong>${prop.rent.toLocaleString()}/mo</strong>
                        </span>
                        <span className="text-[#555]">
                          Ends: <strong>{prop.leaseEnd}</strong>
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 text-xs font-medium border border-[#e0e0e0] rounded-lg hover:bg-[#f7f7f7] transition-colors">
                        View Lease
                      </button>
                      <button className="px-3 py-1.5 text-xs font-medium bg-[#006aff] text-white rounded-lg hover:bg-[#0051cc] transition-colors">
                        Renew
                      </button>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        )}

        {/* Maintenance Tab */}
        {activeTab === "maintenance" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-lg text-[#1a1a1a]">
                Maintenance Requests
              </h2>
              <button className="flex items-center gap-1.5 px-4 py-2 bg-[#006aff] text-white text-sm font-medium rounded-lg hover:bg-[#0051cc] transition-colors">
                <HiPlus size={14} /> New Request
              </button>
            </div>
            {MOCK_MAINTENANCE.map((m) => (
              <div
                key={m.id}
                className="bg-white rounded-2xl border border-[#e0e0e0] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-1 w-3 h-3 rounded-full shrink-0 ${m.priority === "high" ? "bg-[#c23b22]" : m.priority === "medium" ? "bg-yellow-400" : "bg-[#1a7c3e]"}`}
                  />
                  <div>
                    <p className="font-medium text-[#1a1a1a]">{m.issue}</p>
                    <p className="text-sm text-[#888]">{m.address}</p>
                    <p className="text-xs text-[#aaa] mt-1">
                      Reported: {m.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-[#555] capitalize">
                    {m.priority} priority
                  </span>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium
                    ${m.status === "resolved" ? "bg-[#e8f5e9] text-[#1a7c3e]" : m.status === "in-progress" ? "bg-[#e3f2fd] text-[#1565c0]" : "bg-[#fff3e0] text-[#e65100]"}`}
                  >
                    {m.status}
                  </span>
                  <button className="px-3 py-1 text-xs border border-[#e0e0e0] rounded-lg hover:bg-[#f7f7f7] transition-colors">
                    Update
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
