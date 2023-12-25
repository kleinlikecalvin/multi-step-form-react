import arcadeIcon from "./assets/images/icon-arcade.svg";
import advancedIcon from "./assets/images/icon-advanced.svg";
import proIcon from "./assets/images/icon-pro.svg";

export const initialCart = { plan: { name: "" }, addOns: [] };

export const plans = [
  {
    name: "arcade",
    icon: arcadeIcon,
    monthlyCost: 9,
    annualCost: 90,
  },
  {
    name: "advanced",
    icon: advancedIcon,
    monthlyCost: 12,
    annualCost: 120,
  },
  { name: "pro", icon: proIcon, monthlyCost: 15, annualCost: 150 },
] as const;

export const addOns = [
  { name: "online service", monthlyCost: 1, annualCost: 10 },
  { name: "larger storage", monthlyCost: 2, annualCost: 20 },
  { name: "customizable profile", monthlyCost: 2, annualCost: 20 },
] as const;
