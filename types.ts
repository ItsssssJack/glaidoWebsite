import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
  colSpan?: number;
}

export interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export enum DemoStatus {
  IDLE = 'IDLE',
  LISTENING = 'LISTENING',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  ERROR = 'ERROR'
}