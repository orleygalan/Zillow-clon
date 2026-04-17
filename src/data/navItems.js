export const NAV_ITEMS = [
    {
        label: "Buy",
        to: "/buy",
        dropdown: {
            sections: [
                {
                    heading: "Homes for sale",
                    links: [
                        { label: "Homes for sale", to: "/buy" },
                        { label: "Foreclosures", to: "/buy?type=foreclosure" },
                        { label: "For sale by owner", to: "/buy?type=fsbo" },
                        { label: "Open houses", to: "/buy?open=true" },
                        { label: "New construction", to: "/buy?type=new" },
                        { label: "Recent home sales", to: "/buy?status=sold" },
                    ],
                },
                {
                    heading: "Resources",
                    links: [
                        { label: "Home Buying Guide", to: "/help" },
                        { label: "Down payment assistance", to: "/homeLoans" },
                        { label: "Real estate app", to: "/" },
                    ],
                },
            ],
        },
    },
    {
        label: "Rent",
        to: "/rent",
        dropdown: {
            sections: [
                {
                    heading: "Rental listings",
                    links: [
                        { label: "Apartments for rent", to: "/rent" },
                        { label: "Houses for rent", to: "/rent?type=house" },
                        { label: "All rentals", to: "/rent" },
                    ],
                },
                {
                    heading: "Tools for renters",
                    links: [
                        { label: "Affordability calculator", to: "/homeLoans" },
                        { label: "Pay your rent", to: "/manageRentals" },
                        { label: "Build your credit", to: "/rent" },
                        { label: "Get renters insurance", to: "/rent" },
                    ],
                },
            ],
        },
    },
    {
        label: "Sell",
        to: "/sell",
        dropdown: {
            sections: [
                {
                    heading: "Resources",
                    links: [
                        { label: "Explore your options", to: "/sell" },
                        { label: "See your home's Zestimate", to: "/sell" },
                        { label: "US housing market", to: "/sell" },
                        { label: "Sellers guide", to: "/sell" },
                    ],
                },
                {
                    heading: "Selling options",
                    links: [
                        { label: "Find a seller's agent", to: "/agentFinder" },
                        { label: "Post For Sale by Owner", to: "/sell" },
                    ],
                },
            ],
        },
    },
    {
        label: "Home Loans",
        to: "/homeLoans",
        dropdown: {
            sections: [
                {
                    heading: "Your mortgage",
                    links: [
                        { label: "Discover Zillow Home Loans", to: "/homeLoans" },
                        { label: "Calculate BuyAbility", to: "/homeLoans" },
                        { label: "Get pre-qualified", to: "/homeLoans" },
                    ],
                },
                {
                    heading: "Mortgage tools",
                    links: [
                        { label: "Mortgage calculator", to: "/homeLoans" },
                        { label: "Current mortgage rates", to: "/homeLoans" },
                        { label: "Learn about financing", to: "/homeLoans" },
                    ],
                },
            ],
        },
    },
    {
        label: "Find an Agent",
        to: "/agentFinder",
        dropdown: {
            sections: [
                {
                    heading: "Looking for pros?",
                    links: [
                        { label: "Real estate agents", to: "/agentFinder" },
                        { label: "Property managers", to: "/agentFinder" },
                        { label: "Home builders", to: "/agentFinder" },
                    ],
                },
                {
                    heading: "I'm a pro",
                    links: [
                        { label: "Agent solutions", to: "/advertise" },
                        { label: "Agent advertising", to: "/advertise" },
                        { label: "Create agent account", to: "/agentFinder" },
                    ],
                },
            ],
        },
    },
    { label: "Manage Rentals", to: "/manageRentals" },
    { label: "Advertise", to: "/advertise" },
];
