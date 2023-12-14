import React from "react";
export default function StepTwo() {
  return (
    <form>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="options">
        <Plan
          icon=""
          planName="Arcade"
          price="$"
          discountLine={"2 months free"}
        />
        <Plan icon="" planName="Advanced" price="$" discountLine={""} />
        <Plan icon="" planName="Pro" price="$" discountLine={""} />
      </div>
      {/* add checkbox toggle dealie */}
      <button>Go Back</button>
      <button>Next Step</button>
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
  price: string;
  discountLine?: string;
}) {
  return (
    <button>
      <img src={icon} alt="" />
      <strong>{planName}</strong>
      <small>{price}</small>
      {discountLine}
    </button>
  );
}
