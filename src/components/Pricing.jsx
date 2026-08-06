"use client"

import "./style/Pricing.css";
import { useState } from "react";

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

    const choisePlan = (plantype) => {
        
    const users = JSON.parse(localStorage.getItem("users"))
    const currentPlan = localStorage.getItem("plan");

    if(currentPlan == "pro" && plantype == "free"){
        users.plantype = "pro"
        alert("You cannot switch from the Pro plan to the Free plan.")
        return
    }else if(plantype == currentPlan){
        currentPlan == plantype
        alert("You already have this plan.")
        return
    }else{
        alert(`You selected the ${plantype} plan!`)
        window.location.href = "/"
    }


    if (!users) {
        alert("Please log in first!")
        return
    }


    users.plan = plantype
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("plan", plantype);


}


    return (
        <section
            id="rates"
            className="rates"
        >
            <h2>Rates</h2>

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

                        <button onClick={() => choisePlan(plan.title.toLowerCase())}>
                            Select
                        </button>

                    </div>
                ))}

            </div>
        </section>
    );
}
