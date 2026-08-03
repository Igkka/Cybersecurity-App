const plans = [
    {
        title: "Free",
        price: "$0 / month",
        features: [
            "Basic Protection",
            "1 Device",
            "Community Support"
        ]
    },
    {
        title: "Pro",
        price: "$9.99 / month",
        features: [
            "Unlimited Devices",
            "Cloud Backup",
            "Priority Support"
        ]
    },
    {
        title: "Enterprise",
        price: "Contact Us",
        features: [
            "Dedicated Manager",
            "Unlimited Users",
            "24/7 Support"
        ]
    }
];

export default function PricingPage() {
    return (
        <section
            
            className="pricing"
        >
            <h2>Pricing</h2>

            <div className="cards">

                {plans.map((plan) => (
                    <div
                        className="card"
                        key={plan.title}
                    >
                        <h3>{plan.title}</h3>

                        <p>{plan.price}</p>

                        <ul>

                            {plan.features.map((item) => (
                                <li key={item}>
                                    {item}
                                </li>
                            ))}

                        </ul>

                        <button>
                            Select
                        </button>

                    </div>
                ))}

            </div>
        </section>
    );
}
