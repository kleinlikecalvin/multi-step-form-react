import React from "react";
import "./App.scss";
// import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
// import StepThree from "./StepThree";
// import StepFour from "./StepFour";
// import StepFive from "./StepFive";

export default function App() {
  const cart = React.useState<{
    plan: { name: string; monthlyCost: number; annualCost: number };
    addOns?: { name: string; monthlyCost: number; annualCost: number }[];
  }>({ plan: { name: "", monthlyCost: 0, annualCost: 0 }, addOns: [] });
  const plans = [
    { name: "arcade", monthlyCost: 9, annualCost: 90 },
    { name: "advanced", monthlyCost: 12, annualCost: 120 },
    { name: "pro", monthlyCost: 15, annualCost: 150 },
  ];
  const addOns = [
    { name: "online service", monthlyCost: 1, annualCost: 10 },
    { name: "larger storage", monthlyCost: 2, annualCost: 20 },
    { name: "customizable profile", monthlyCost: 2, annualCost: 20 },
  ];
  return (
    <div className="App">
      <ol className="steps">
        <WizardStepInfo name="step 1" details="your info" />
        <WizardStepInfo name="step 2" details="select plan" />
        <WizardStepInfo name="step 3" details="add-ons" />
        <WizardStepInfo name="step 4" details="summary" />
      </ol>
      {/* <StepOne /> */}
      <StepTwo />
      {/* <StepThree />
      <StepFour /> */}
      {/* <StepFive /> */}
    </div>
  );
}

function WizardStepInfo({ name, details }: { name: string; details: string }) {
  return (
    <li className="WizardStepInfo">
      <p className="step">{name}</p>
      <p className="step-details">{details}</p>
    </li>
  );
}
