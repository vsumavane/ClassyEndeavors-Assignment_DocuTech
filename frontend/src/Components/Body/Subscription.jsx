import { useState } from "react";
import data from "../data";
import { HoverCard } from "../Cards/HoverCard";
import { TogglePill } from "../Buttons/TogglePill";

export default function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = data.plans || {
    monthly: [],
    annual: [],
  };

  const currentPlans = plans[billingCycle] || [];

  return (
    <section className="my-10 flex w-full flex-col items-center px-6">
      <h2 className="mb-4 text-center text-3xl font-bold">
        Pick your plan. We make this part easy too.
      </h2>

      <div className="mb-6">
        <TogglePill
          options={[
            { value: "monthly", label: "Monthly" },
            { value: "annual", label: "Annually" },
          ]}
          value={billingCycle}
          onChange={setBillingCycle}
        />
      </div>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {currentPlans.map((plan, index) => (
          <HoverCard
            key={index}
            plan={{
              name: plan.name,
              price: plan.price,
              minTotal: plan.minTotal,
              features: plan.features,
            }}
            currency={plans.currency}
            billingType={billingCycle === "monthly" ? "month" : "year"}
          />
        ))}
      </div>
    </section>
  );
}
