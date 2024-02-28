import React from "react";
import "./App.scss";
import { Cart, initialCart } from "./constants";
import UserInfo from "./components/UserInfo";
import SelectPlan from "./components/SelectPlan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import OrderConfirmation from "./components/OrderConfirmation";

export default function App() {
  const [cart, setCart] = React.useState<Cart>(initialCart);
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
        <UserInfo
          cart={cart}
          updateCart={setCart}
          updateActiveStep={setActive}
        />
      )}
      {active === 2 && (
        <SelectPlan
          cart={cart}
          updateCart={setCart}
          updateActiveStep={setActive}
        />
      )}
      {active === 3 && (
        <AddOns cart={cart} updateCart={setCart} updateActiveStep={setActive} />
      )}
      {active === 4 && <Summary cart={cart} updateActiveStep={setActive} />}
      {active === 5 && <OrderConfirmation />}
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
      <div className="desc">
        <p className="name">step {step}</p>
        <strong className="details">{details}</strong>
      </div>
    </li>
  );
}
