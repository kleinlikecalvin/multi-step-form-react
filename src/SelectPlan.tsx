import React from "react";
import { plans, initialCart } from "./constants";
import StepHeader from "./StepHeader";
import NavButtons from "./NavButtons";

// type Unarray<T> = T extends Array<infer U> ? U : T;
// type Plan = Unarray<typeof plans>['']

export default function SelectPlan({
  cart,
  updateCart,
  updateActiveStep,
}: {
  cart: {
    plan: string;
    subscriptionCycle: string;
    addOns?: string[];
  };
  updateCart: Function;
  updateActiveStep: Function;
}) {
  const [planSelected, setPlanSelected] = React.useState("advanced");
  const [subscriptionCycle, setSubscriptionCycle] = React.useState<
    "monthly" | "yearly"
  >("yearly");
  const isMonthly = subscriptionCycle === "monthly";
  const discount = "2 months free";

  return (
    <div className="SelectPlan grid">
      <StepHeader
        title="Select your plan"
        desc="You have the option of monthly or yearly billing."
      />
      <div className="plans">
        {plans.map((plan) => (
          <button
            className={plan.name === planSelected ? "plan active" : "plan"}
            onClick={(e) => {
              e.preventDefault();
              setPlanSelected(plan.name);
            }}
          >
            <img src={plan.icon} alt="" />
            <div>
              <strong className="name">{plan.name}</strong>
              <small className="price">
                ${isMonthly ? plan.monthlyCost : plan.annualCost}/
                {isMonthly ? "mo" : "yr"}
              </small>
              {!isMonthly && <small>{discount}</small>}
            </div>
          </button>
        ))}
      </div>
      <div className="toggle-container">
        <strong className={isMonthly ? "active" : undefined}>monthly</strong>
        <label className="toggle">
          <input
            type="checkbox"
            checked={!isMonthly}
            onChange={(e) =>
              setSubscriptionCycle(e.target.checked ? "yearly" : "monthly")
            }
          />
          <span className="slider"></span>
        </label>
        <strong className={!isMonthly ? "active" : undefined}>yearly</strong>
      </div>
      <NavButtons
        hideButton={false}
        backClick={(e) => {
          e.preventDefault();
          updateCart(initialCart);
          updateActiveStep(1);
        }}
        nextClick={(e) => {
          e.preventDefault();
          updateCart({
            ...cart,
            plan: planSelected,
            subscriptionCycle,
          });
          updateActiveStep(3);
        }}
      />
    </div>
  );
}
