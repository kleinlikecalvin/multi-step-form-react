import React from "react";
import { plans, Plans, Cart } from "../constants";
import StepHeader from "./StepHeader";
import NavButtons from "./NavButtons";
import "./SelectPlan.scss";

export default function SelectPlan({
  cart,
  updateCart,
  updateActiveStep,
}: {
  cart: Cart;
  updateCart: Function;
  updateActiveStep: Function;
}) {
  const [planSelected, setPlanSelected] = React.useState(cart.plan);
  const [subscriptionCycle, setSubscriptionCycle] = React.useState<
    "monthly" | "yearly"
  >(cart.subscriptionCycle);
  const isMonthly = subscriptionCycle === "monthly";
  const discount = "2 months free";

  return (
    <div className="SelectPlan grid-d">
      <div className="content">
        <StepHeader
          title="Select your plan"
          desc="You have the option of monthly or yearly billing."
        />
        <div className="plans">
          {Object.entries(plans).map(([name, plan]) => (
            <button
              className={name === planSelected ? "plan active" : "plan"}
              onClick={() => {
                setPlanSelected(name as Plans);
              }}
            >
              <img src={plan.icon} alt="" />
              <div className="desc">
                <strong className="name">{name}</strong>
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
      </div>
      <NavButtons
        hideButton={false}
        backClick={() => {
          updateActiveStep(1);
        }}
        nextClick={() => {
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
