import React from "react";
import "./App.scss";
// import UserInfo from "./UserInfo";
import SelectPlan from "./SelectPlan";
// import AddOns from "./AddOns";
// import Summary from "./Summary";
// import OrderConfirmation from "./OrderConfirmation";

/**
 * Use active state to conditionally render each step and to add active css to the active step number
 * Higher border radius for App
 */

export default function App() {
  const [cart, setCart] = React.useState<{
    plan: { name: string; monthlyCost: number; annualCost: number };
    addOns?: { name: string; monthlyCost: number; annualCost: number }[];
  }>({ plan: { name: "", monthlyCost: 0, annualCost: 0 }, addOns: [] });
  const [active, setActive] = React.useState(false);

  return (
    <div className="App">
      <ol className="steps-preview">
        <StepPreview step={1} details="your info" />
        <StepPreview step={2} details="select plan" />
        <StepPreview step={3} details="add-ons" />
        <StepPreview step={4} details="summary" />
      </ol>
      {/* <UserInfo /> */}
      <SelectPlan />
      {/* <AddOns />
      <Summary />
      <OrderConfirmation /> */}
    </div>
  );
}

function StepPreview({ step, details }: { step: number; details: string }) {
  return (
    <li className="StepPreview">
      <strong className="step">{step}</strong>
      <div>
        <p className="name">step {step}</p>
        <strong className="details">{details}</strong>
      </div>
    </li>
  );
}
