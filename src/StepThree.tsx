import React from "react";
export default function StepThree() {
  return (
    <form>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhanve your gaming experience</p>
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
      <button>Go Back</button>
      <button type="submit">Next Step</button>
    </form>
  );
}
