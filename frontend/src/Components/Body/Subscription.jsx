import {useState} from "react";
import data from "../data";
import { HoverCard } from "../Cards/HoverCard";
import { TogglePill } from "../Buttons/TogglePill";

export default function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  
  const plans = data.plans || {
    monthly: [],
    annual: []
  };
  
  const currentPlans = plans[billingCycle] || [];
  
  return (
    <section className="w-full flex flex-col items-center my-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-4">Pick your plan. We make this part easy too.</h2>
    
      <div className="mb-6">
        <TogglePill 
          options={[
            { value: "monthly", label: "Monthly" },
            { value: "annual", label: "Annually" }
          ]}
          value={billingCycle}
          onChange={setBillingCycle}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {currentPlans.map((plan, index) => (
          <HoverCard
            key={index}
            plan={{
              name: plan.name,
              price: plan.price,
              minTotal: plan.minTotal,
              features: plan.features
            }}
            currency={plans.currency}
            billingType={billingCycle === "monthly" ? "month" : "year"}
          />
        ))}
      </div>
    </section>
  );
}

