import type { LucideIcon } from "lucide-react";

export type CardItem = {
  title: string;
  description: string;
  icon?: LucideIcon;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type Scenario = {
  number: string;
  label: string;
  title: string;
  description: string;
  deliverables: string[];
};

export type ComparisonRow = {
  criterion: string;
  classic: string;
  ai: string;
};

export type PackageItem = {
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export type FAQItem = {
  question: string;
  answer: string;
};
