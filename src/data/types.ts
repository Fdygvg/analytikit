// src/data/types.ts

// ====================
// LANDING PAGE TYPES
// ====================

export interface Feature {
  id: number;
  icon: string; // Lucide icon name
  title: string;
  description: string;
  color: 'blue' | 'purple' | 'green' | 'amber';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export interface PricingPlan {
  id: number;
  name: string;
  description: string;
  price: number;
  period: 'month' | 'year';
  features: string[];
  highlighted: boolean;
  ctaText: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// ====================
// DASHBOARD TYPES
// ====================

export interface Metric {
  id: number;
  title: string;
  value: number | string;
  change: number; 
  trend: 'up' | 'down' | 'neutral';
  icon: string;
}

export interface ChartDataPoint {
  date: string; 
  visits: number;
  signups: number;
  revenue: number;
}

export type ChartType = 'line' | 'bar' | 'area' | 'pie';

export interface ChartConfig {
  type: ChartType;
  title: string;
  description: string;
  dataKey: keyof ChartDataPoint;
  color: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: 'admin' | 'user' | 'viewer';
  lastActive: string; // ISO string
}

export interface RecentActivity {
  id: number;
  user: User;
  action: string;
  target: string;
  timestamp: string; // ISO string
}

// ====================
// SHARED TYPES
// ====================

export type Theme = 'light' | 'dark';

export interface NavItem {
  title: string;
  href: string;
  icon?: string;
  external?: boolean;
}

// ====================
// COMPONENT PROP TYPES
// ====================

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

// ====================
// API RESPONSE TYPES
// ====================

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  timestamp: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// ====================
// UTILITY TYPES
// ====================

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type ValueOf<T> = T[keyof T];

// ====================
// CONSTANTS
// ====================

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export const COLORS = {
  primary: '#3b82f6',
  secondary: '#8b5cf6',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
} as const;

export type ColorKey = keyof typeof COLORS;

export interface TopPage {
  id: number;
  page: string;
  visits: number;
  bounceRate: number;
  avgTime: string;
}

export interface GeoData {
  country: string;
  visitors: number;
  percentage: number;
}