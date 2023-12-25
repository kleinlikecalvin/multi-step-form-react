import React from "react";
import "./App.scss";
import { initialCart } from "./constants";
import UserInfo from "./UserInfo";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
// import Summary from "./Summary";
// import OrderConfirmation from "./OrderConfirmation";

export default function App() {
  const [cart, setCart] = React.useState<{
    plan: { name: string };
    addOns?: { name: string; monthlyCost: number; annualCost: number }[];
  }>(initialCart);
  const [active, setActive] = React.useState(2);

  return (
    <div className="App">
      <ol className="steps">
        <StepPreview isActive={active === 1} step={1} details="your info" />
        <StepPreview isActive={active === 2} step={2} details="select plan" />
        <StepPreview isActive={active === 3} step={3} details="add-ons" />
        <StepPreview isActive={active === 4} step={4} details="summary" />
      </ol>
      {active === 1 && (
        <UserInfo cart={cart} updateCart={setCart} updateActive={setActive} />
      )}
      {active === 2 && (
        <SelectPlan cart={cart} updateCart={setCart} updateActive={setActive} />
      )}
      {active === 3 && (
        <AddOns cart={cart} updateCart={setCart} updateActive={setActive} />
      )}
      {/* {active === 4 && (
        <Summary cart={cart} updateCart={setCart} updateActive={setActive} />
      )}
      {active === 5 && (
        <OrderConfirmation
          cart={cart}
          updateCart={setCart}
          updateActive={setActive}
        />
      )} */}
    </div>
  );
}

function StepPreview({
  isActive,
  step,
  details,
}: {
  isActive: boolean;
  step: number;
  details: string;
}) {
  return (
    <li className="StepPreview">
      <strong className={isActive ? "step active" : "step"}>{step}</strong>
      <div>
        <p className="name">step {step}</p>
        <strong className="details">{details}</strong>
      </div>
    </li>
  );
}
