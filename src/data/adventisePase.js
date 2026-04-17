export const PLANS = [
    {
        name: "Starter",
        price: "$299",
        period: "/month",
        desc: "Perfect for individual agents looking to grow their presence.",
        features: ["Up to 5 featured listings", "Basic analytics dashboard", "Zillow profile page", "Email support", "Lead notifications"],
        cta: "Get started",
        popular: false,
        color: "border-[#e0e0e0]",
    },
    {
        name: "Premier",
        price: "$599",
        period: "/month",
        desc: "Our most popular plan for high-performing agents.",
        features: ["Unlimited featured listings", "Advanced analytics & insights", "Premier Agent® badge", "Priority phone support", "Instant lead alerts", "Market reports", "Custom profile branding"],
        cta: "Start free trial",
        popular: true,
        color: "border-[#006aff]",
    },
    {
        name: "Team",
        price: "$1,299",
        period: "/month",
        desc: "Full-service advertising for teams and brokerages.",
        features: ["Everything in Premier", "Up to 10 agents included", "Team branding & profiles", "Dedicated account manager", "Co-branding opportunities", "Custom reporting", "API access"],
        cta: "Contact sales",
        popular: false,
        color: "border-[#e0e0e0]",
    },
];

export const STATS = [
    { value: "2.4B", label: "Annual visits to Zillow" },
    { value: "245M", label: "Monthly unique users" },
    { value: "#1", label: "Real estate app in the US" },
    { value: "4.5★", label: "App Store rating" },
];

export const TESTIMONIALS = [
    {
        name: "Sarah Martinez",
        title: "Premier Agent®, Scottsdale",
        initials: "SM",
        quote: "Advertising on Zillow transformed my business. I went from 20 to 48 closings in one year, and the quality of leads is unmatched.",
        rating: 5,
    },
    {
        name: "Priya Nair",
        title: "Listing Expert, Phoenix",
        initials: "PN",
        quote: "The analytics dashboard gives me insights I can't get anywhere else. I know exactly which listings are getting the most views and adjust my strategy accordingly.",
        rating: 5,
    },
    {
        name: "James Whitfield",
        title: "Buyer's Specialist, Paradise Valley",
        initials: "JW",
        quote: "The Premier Agent badge gives me instant credibility with clients. I've closed deals with buyers who specifically searched for Premier Agents.",
        rating: 5,
    },
];
