import "./style/Pricing.css";
const plans = [
    {
        title: "Free",
        price: "$0 - 10 credits",
        features: [
            "Basic Password Storage",
            "Password Strength Check",
            "Basic Support"
        ]
    },
    {
        title: "Pro",
        price: "$1 - 100 credit",
        features: [
            "Strong Password Storage",
            "Password Strength Check",
            "Strong Password Generator",
            "Checking For Mail Security",
            "Site Security Check",
            "Strong Support"
        ]
    }
];

export default function PricingPage() {
    return (
        <section
            id="pricing"
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
