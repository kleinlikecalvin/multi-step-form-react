export const plans = [
  { name: "arcade", monthlyCost: 9, annualCost: 90 },
  { name: "advanced", monthlyCost: 12, annualCost: 120 },
  { name: "pro", monthlyCost: 15, annualCost: 150 },
] as const;

export const addOns = [
  { name: "online service", monthlyCost: 1, annualCost: 10 },
  { name: "larger storage", monthlyCost: 2, annualCost: 20 },
  { name: "customizable profile", monthlyCost: 2, annualCost: 20 },
] as const;
