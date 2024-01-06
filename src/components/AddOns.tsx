import React from "react";
import { Cart, addOns, initialCart } from "../constants";
import StepHeader from "./StepHeader";
import NavButtons from "./NavButtons";
import "./AddOns.scss";

export default function AddOns({
  cart,
  updateCart,
  updateActiveStep,
}: {
  cart: Cart;
  updateCart: Function;
  updateActiveStep: Function;
}) {
  const [selectedAddOns, setSelectedAddOns] = React.useState<string[]>([]);

  const updateUI = function (name: string) {
    if (selectedAddOns.includes(name)) {
      const updatedSelectedAddOns = selectedAddOns.filter(
        (addOn) => addOn !== name
      );
      setSelectedAddOns(updatedSelectedAddOns);
    } else {
      const updatedSelectedAddOns = [...selectedAddOns, name];
      setSelectedAddOns(updatedSelectedAddOns);
    }
  };
  return (
    <div className="AddOns grid">
      <StepHeader
        title="Pick add-ons"
        desc="Add-ons help enhanve your gaming experience"
      />
      <form>
        {Object.entries(addOns).map(([name, addOn]) => (
          <AddOn
            callback={updateUI}
            selectedAddOns={selectedAddOns}
            name={name}
            details={addOn.details}
            price={
              cart.subscriptionCycle === "yearly"
                ? `${addOn.annualCost}/yr`
                : `${addOn.monthlyCost}/mo`
            }
          />
        ))}
      </form>
      <NavButtons
        hideButton={false}
        backClick={() => {
          updateCart(initialCart);
          updateActiveStep(2);
        }}
        nextClick={() => {
          updateCart({
            ...cart,
            addOns: selectedAddOns,
          });
          updateActiveStep(4);
        }}
      />
    </div>
  );
}

function AddOn({
  callback,
  selectedAddOns,
  name,
  details,
  price,
}: {
  callback: Function;
  selectedAddOns: string[];
  name: string;
  details: string;
  price: string;
}) {
  const label = name.split(" ").join("-");
  return (
    <fieldset
      className={selectedAddOns.includes(name) ? "AddOn selected" : "AddOn"}
      onClick={() => callback(name)}
    >
      <input
        type="checkbox"
        name={label}
        checked={selectedAddOns.includes(name)}
      />
      <div className="text">
        <label htmlFor={label}>{name}</label>
        <small className="details">{details}</small>
      </div>
      <p className="price">+${price}</p>
    </fieldset>
  );
}
