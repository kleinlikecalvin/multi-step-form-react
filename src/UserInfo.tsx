import React from "react";
import StepHeader from "./StepHeader";
import NavButtons from "./NavButtons";
export default function UserInfo({
  cart,
  updateCart,
  updateActive,
}: {
  cart: {
    plan: { name: string };
    addOns?: { name: string; monthlyCost: number; annualCost: number }[];
  };
  updateCart: Function;
  updateActive: Function;
}) {
  return (
    <form>
      <StepHeader
        title="Personal Info"
        desc="Please provide your name, email address, and phone number."
      />
      <label htmlFor="name">Name</label>
      <input type="text" placeholder="e.g. Stephen King" name="name" />
      <label htmlFor="email">Email Address</label>
      <input type="email" name="email" />
      <label htmlFor="phone">Phone Number</label>
      <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone" />
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
