import React from "react";
export default function Summary() {
  return (
    <form>
      <h1>Finishing Up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      {/* 
    container with info in either year or month depending on previous selection
    plan
    the add ons
    */}
      <div className="subscription">
        <div className="plan">
          Plan <a href="#">Change</a> cost(state)
        </div>
        <hr />
        <ul>{/* different addons  and their costs */}</ul>
      </div>
      <div className="total">
        <small>Total(per month||year)</small>
        <p>total/mo||yr</p>
      </div>
      <button>Go Back</button>
      <button>Confirm</button>
    </form>
  );
}
