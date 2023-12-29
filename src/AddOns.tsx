import React from "react";
import StepHeader from "./StepHeader";
import NavButtons from "./NavButtons";
export default function AddOns({
  cart,
  updateCart,
  updateActiveStep,
}: {
  cart: {
    plan: { name: string };
    addOns?: { name: string; monthlyCost: number; annualCost: number }[];
  };
  updateCart: Function;
  updateActiveStep: Function;
}) {
  return (
    <form>
      <StepHeader
        title="Pick add-ons"
        desc="Add-ons help enhanve your gaming experience"
      />
      <fieldset>
        <input type="checkbox" name="online-service" />
        <label htmlFor="online-service">Online service</label>
        <small>Access to multiplayer games</small>
        {/* dynamic price for monthly/yearly toggle */}
      </fieldset>
      <fieldset>
        <input type="checkbox" name="larger-storage" />
        <label htmlFor="larger-storage">Larger storage</label>
        <small>Extra 1TB of cloud save</small>
        {/* dynamic price for monthly/yearly toggle */}
      </fieldset>
      <fieldset>
        <input type="checkbox" name="customizable-profile" />
        <label htmlFor="customizable-profile">Customizable profile</label>
        <small>Custom theme on your profile</small>
        {/* dynamic price for monthly/yearly toggle */}
      </fieldset>
      <NavButtons
        backClick={(e) => {
          e.preventDefault();
        }}
        nextClick={(e) => {
          e.preventDefault();
        }}
      />
    </form>
  );
}
