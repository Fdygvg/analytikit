import type { Feature, Testimonial, PricingPlan, FAQItem } from './types';

export const features: Feature[] = [
  {
    id: 1,
    icon: 'BarChart3',
    title: 'Real-time Analytics',
    description: 'See your data update live as users interact with your platform.',
    color: 'blue'
  },
  {
    id: 2,
    icon: 'Users',
    title: 'Team Collaboration',
    description: 'Share insights and collaborate with your team in real-time.',
    color: 'purple'
  },
  {
    id: 3,
    icon: 'Smartphone',
    title: 'Mobile Ready',
    description: 'Access your analytics on the go with our mobile app.',
    color: 'green'
  },
  {
    id: 4,
    icon: 'Shield',
    title: 'Enterprise Security',
    description: 'Bank-level security with encryption and compliance standards.',
    color: 'blue'
  },
  {
    id: 5,
    icon: 'Zap',
    title: 'Lightning Fast',
    description: 'Process millions of data points in seconds, not hours.',
    color: 'amber'
  },
  {
    id: 6,
    icon: 'Puzzle',
    title: 'Easy Integration',
    description: 'Connect with your favorite tools in just a few clicks.',
    color: 'purple'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Product Manager',
    company: 'TechFlow Inc.',
    avatar: 'SC',
    content: 'AnalytiKit transformed how we understand our users. Our conversion rate improved by 34% in the first month.',
    rating: 5
  },
  {
    id: 2,
    name: 'Marcus Rivera',
    role: 'Marketing Director',
    company: 'GrowthHack',
    avatar: 'MR',
    content: 'The dashboard is so intuitive. I finally got my team to actually look at analytics regularly!',
    rating: 5
  },
  {
    id: 3,
    name: 'Jessica Park',
    role: 'Startup Founder',
    company: 'NovaLabs',
    avatar: 'JP',
    content: 'As a non-technical founder, I needed something simple. AnalytiKit delivered exactly that.',
    rating: 4
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Data Analyst',
    company: 'DataCorp',
    avatar: 'DK',
    content: 'The API is robust and documentation is excellent. Made our integration seamless.',
    rating: 5
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: 'Starter',
    description: 'Perfect for small teams just getting started',
    price: 29,
    period: 'month',
    features: [
      'Up to 10,000 monthly events',
      '3 team members',
      'Basic dashboards',
      '30-day data retention',
      'Email support'
    ],
    highlighted: false,
    ctaText: 'Start Free Trial'
  },
  {
    id: 2,
    name: 'Professional',
    description: 'For growing teams with advanced needs',
    price: 79,
    period: 'month',
    features: [
      'Up to 100,000 monthly events',
      '10 team members',
      'Advanced dashboards',
      '1-year data retention',
      'Priority support',
      'Custom metrics',
      'API access'
    ],
    highlighted: true,
    ctaText: 'Most Popular'
  },
  {
    id: 3,
    name: 'Enterprise',
    description: 'For large organizations with custom needs',
    price: 199,
    period: 'month',
    features: [
      'Unlimited events',
      'Unlimited team members',
      'Custom dashboards',
      'Unlimited data retention',
      '24/7 phone support',
      'White-label option',
      'Dedicated account manager',
      'SLA guarantee'
    ],
    highlighted: false,
    ctaText: 'Contact Sales'
  }
];

export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'How long does it take to set up?',
    answer: 'Most customers are up and running in under 10 minutes. Just add our tracking code to your website or connect via API.'
  },
  {
    id: 2,
    question: 'Can I cancel anytime?',
    answer: 'Yes! All plans are month-to-month with no long-term contracts. Cancel anytime from your dashboard.'
  },
  {
    id: 3,
    question: 'Do you offer a free trial?',
    answer: 'Yes! All paid plans include a 14-day free trial. No credit card required to start.'
  },
  {
    id: 4,
    question: 'How is my data protected?',
    answer: 'We use enterprise-grade encryption, SOC2 compliance, and regular security audits. Your data is stored in GDPR-compliant data centers.'
  },
  {
    id: 5,
    question: 'Can I export my data?',
    answer: 'Yes! Export your data anytime in CSV, JSON, or PDF format. API access also available for automated exports.'
  },
  {
    id: 6,
    question: 'Do you offer discounts for non-profits?',
    answer: 'Yes! We offer 50% off all plans for registered non-profit organizations. Contact our sales team for verification.'
  }
];

export const navItems = [
  { title: 'Features', href: '#features' },
  { title: 'Pricing', href: '#pricing' },
  { title: 'Testimonials', href: '#testimonials' },
  { title: 'FAQ', href: '#faq' }
];

export const stats = [
  { label: 'Happy Customers', value: '2,500+' },
  { label: 'Data Points Analyzed', value: '5B+' },
  { label: 'Uptime', value: '99.9%' },
  { label: 'Support Response', value: '< 2h' }
];