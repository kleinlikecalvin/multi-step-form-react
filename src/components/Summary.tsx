import NavButtons from "./NavButtons";
import StepHeader from "./StepHeader";
import { Cart, plans, addOns } from "../constants";
import "./Summary.scss";

export default function Summary({
  cart,
  updateActiveStep,
}: {
  cart: Cart;
  updateActiveStep: Function;
}) {
  const cartTotals = getCostStrings(cart);
  return (
    <div className="Summary grid-d">
      <StepHeader
        title="Finishing Up"
        desc="Double-check everything looks OK before confirming."
      />
      <div className="subscription-container">
        <div className="subscription">
          <div className="plan-container">
            <p className="plan">
              {cartTotals.plan[0]} <button>Change</button>
            </p>
            <p className="cost">{cartTotals.plan[1]}</p>
          </div>
          <hr />
          <ul className="add-ons-container">
            {cartTotals.addOnsCosts?.map((addOn) => {
              return (
                <li>
                  {addOn[0]}
                  <span>{addOn[1]}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="total">
          <p>{cartTotals.total[0]}</p>
          <p className="cost">{cartTotals.total[1]}</p>
        </div>
      </div>

      <NavButtons
        isStepFourActive={true}
        backClick={() => {
          updateActiveStep(3);
        }}
        nextClick={() => {
          updateActiveStep(5);
        }}
      />
    </div>
  );
}

function getCostStrings(cart: Cart): {
  plan: string[];
  addOnsCosts: string[][] | undefined;
  total: string[];
} {
  const isMonthly = cart.subscriptionCycle === "monthly";
  const abbreviation = isMonthly ? "/mo" : "/yr";
  const plan = [
    `${cart.plan} (${cart.subscriptionCycle})`,
    isMonthly
      ? `$${plans[cart.plan].monthlyCost + abbreviation}`
      : `$${plans[cart.plan].annualCost + abbreviation}`,
  ];
  const addOnsCosts = cart.addOns?.map((addOn) => [
    addOn,
    isMonthly
      ? `$${addOns[addOn].monthlyCost + abbreviation}`
      : `$${addOns[addOn].annualCost + abbreviation}`,
  ]);
  const addOnsTotalCost = cart.addOns?.reduce(
    (acc, curr) =>
      acc + (isMonthly ? addOns[curr].monthlyCost : addOns[curr].annualCost),
    0
  );
  const totalCost =
    (isMonthly ? plans[cart.plan].monthlyCost : plans[cart.plan].annualCost) +
    (addOnsTotalCost ? addOnsTotalCost : 0);
  const total = [
    `Total (per ${isMonthly ? "month" : "year"})`,
    `+$${totalCost + abbreviation}`,
  ];
  return {
    plan,
    addOnsCosts,
    total,
  };
}
