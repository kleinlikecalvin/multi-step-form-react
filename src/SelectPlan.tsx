import React from "react";
import { plans } from "./constants";
import NavButtons from "./NavButtons";

// type Unarray<T> = T extends Array<infer U> ? U : T;
// type Plan = Unarray<typeof plans>['']

/**
 * clean up CSS
 * componentize (dumb component) the h1 & p because it's used in every step
 * Add icons to the plans
 * Conditional logic for plan selected css, for monthly/yearly css
 */

export default function SelectPlan() {
  // Set a default plan to be selected
  const [planSelected, setPlanSelected] = React.useState("");
  const [subscriptionCycle, setSubscriptionCycle] = React.useState<
    "monthly" | "yearly"
  >("yearly");
  const monthly = subscriptionCycle === "monthly";

  return (
    <form className="SelectPlan">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="plans">
        {plans.map((plan) => (
          <Plan
            icon=""
            planName={plan.name}
            price={monthly ? plan.monthlyCost : plan.annualCost}
            discountLine={monthly ? undefined : "2 months free"}
          />
        ))}
      </div>
      <div className="toggle-container">
        <strong>monthly</strong>
        <label className="toggle">
          <input
            type="checkbox"
            checked={!monthly}
            onChange={(e) =>
              setSubscriptionCycle(e.target.checked ? "yearly" : "monthly")
            }
          />
          <span className="slider"></span>
        </label>
        <strong>yearly</strong>
      </div>
      {/* 
      (onclick)
      Need to pass a callback to next where we update cart state
      Need to pass a callback to go back to reset all info of either cart and this step or just this step. Think about that more.
      */}
      <NavButtons />
    </form>
  );
}

function Plan({
  icon,
  planName,
  price,
  discountLine,
}: {
  icon: string;
  planName: string;
  price: number;
  discountLine?: string;
}) {
  return (
    <button className="Plan">
      <img src={icon} alt="" />
      <strong>{planName}</strong>
      <small>${price}</small>
      {discountLine}
    </button>
  );
}
