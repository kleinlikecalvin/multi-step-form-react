import arcadeIcon from "./assets/images/icon-arcade.svg";
import advancedIcon from "./assets/images/icon-advanced.svg";
import proIcon from "./assets/images/icon-pro.svg";

export type Cart = {
  plan: keyof typeof plans;
  subscriptionCycle: string;
  addOns?: (keyof typeof addOns)[];
};

export const initialCart: Cart = {
  plan: "advanced",
  subscriptionCycle: "monthly",
  addOns: [],
};

export const plans = {
  arcade: {
    icon: arcadeIcon,
    monthlyCost: 9,
    annualCost: 90,
  },
  advanced: {
    icon: advancedIcon,
    monthlyCost: 12,
    annualCost: 120,
  },
  pro: {
    icon: proIcon,
    monthlyCost: 15,
    annualCost: 150,
  },
} as const;

export const addOns = {
  "online service": {
    details: "Access to multiplayer games",
    monthlyCost: 1,
    annualCost: 10,
  },
  "larger storage": {
    details: "Extra 1TB of cloud save",
    monthlyCost: 2,
    annualCost: 20,
  },
  "customizable profile": {
    details: "Custom theme on your profile",
    monthlyCost: 2,
    annualCost: 20,
  },
} as const;
