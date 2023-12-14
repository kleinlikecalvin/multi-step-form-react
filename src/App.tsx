import React from "react";
import "./App.scss";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";

function App() {
  return (
    <div className="App">
      <ol className="steps">
        <li>
          <div className="step-info">
            <p className="step">step 1</p>
            <p className="step-details">your info</p>
          </div>
        </li>
        <li>
          <div className="step-info">
            <p className="step">step 2</p>
            <p className="step-details">select plan</p>
          </div>
        </li>
        <li>
          <div className="step-info">
            <p className="step">step 3</p>
            <p className="step-details">add-ons</p>
          </div>
        </li>
        <li>
          <div className="step-info">
            <p className="step">step 4</p>
            <p className="step-details">summary</p>
          </div>
        </li>
      </ol>
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
      <StepFive />
    </div>
  );
}

export default App;
