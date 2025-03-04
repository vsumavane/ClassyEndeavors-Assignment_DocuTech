import {useState} from "react";
import data from "../data"

export default function PricingPlans() {
    const [billingCycle, setBillingCycle] = useState("monthly");
    const plans = data.plans;
  
    return (
      <section className="w-full flex flex-col items-center my-10 px-6">
        <h2 className="text-2xl font-bold text-center mb-4">Pick your plan. We make this part easy too.</h2>
  
        <div className="flex items-center gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded-lg transition ${
              billingCycle === "monthly" ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 rounded-lg transition ${
              billingCycle === "annual" ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
            }`}
            onClick={() => setBillingCycle("annual")}
          >
            Annually
          </button>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {plans[billingCycle].map((plan, index) => (
            <div key={index} className="p-6 border border-gray-300 shadow-md rounded-lg bg-white text-center">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-3xl font-bold mt-2">${plan.price} <span className="text-sm">/ month</span></p>
              {plan.minTotal && <p className="text-sm text-gray-500">Min total: ${plan.minTotal} / month</p>}
              <ul className="mt-4 space-y-2 text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-sm">✅ {feature}</li>
                ))}
              </ul>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">Select Plan</button>
            </div>
          ))}
        </div>
      </section>
    );
  }