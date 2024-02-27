import arcadeIcon from "./assets/images/icon-arcade.svg";
import advancedIcon from "./assets/images/icon-advanced.svg";
import proIcon from "./assets/images/icon-pro.svg";

export type Cart = {
  userInfo: {
    name: string;
    email: string;
    phone: string;
  };
  plan: keyof typeof plans;
  subscriptionCycle: "monthly" | "yearly";
  addOns: (keyof typeof addOns)[];
};

export const initialCart: Cart = {
  userInfo: {
    name: "",
    email: "",
    phone: "",
  },
  plan: "arcade",
  subscriptionCycle: "monthly",
  addOns: [],
};

export type Plans = keyof typeof plans;

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
