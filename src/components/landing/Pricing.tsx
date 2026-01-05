// src/components/landing/Pricing.tsx
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, HelpCircle, Star } from 'lucide-react';
import { pricingPlans } from '@/data/landingData';
import { useState } from 'react';

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'month' | 'year'>('month');

  const getPrice = (price: number) => {
    if (billingPeriod === 'year') {
      return Math.floor(price * 12 * 0.8); // 20% discount for annual
    }
    return price;
  };

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-purple-100 px-4 py-1.5 mb-4">
            <Star className="h-4 w-4 text-purple-600 mr-2" />
            <span className="text-sm font-medium text-purple-800">
              Transparent pricing
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple,{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              predictable pricing
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Start for free, upgrade as you grow. No hidden fees, no surprises.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1 mb-12">
            <button
              onClick={() => setBillingPeriod('month')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingPeriod === 'month'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('year')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingPeriod === 'year'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly <span className="text-green-600 ml-1">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => {
            const price = getPrice(plan.price);
            const periodText = billingPeriod === 'year' ? '/year' : '/month';

            return (
              <Card
                key={plan.id}
                className={`relative border-2 transition-all duration-300 hover:shadow-xl ${
                  plan.highlighted
                    ? 'border-blue-500 shadow-lg scale-105'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1.5">
                      {plan.ctaText}
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-gray-600">{plan.description}</p>
                  
                  <div className="mt-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl lg:text-5xl font-bold text-gray-900">
                        ${price}
                      </span>
                      <span className="text-gray-500 ml-2">{periodText}</span>
                    </div>
                    {billingPeriod === 'year' && (
                      <p className="text-sm text-green-600 mt-2">
                        Save ${plan.price * 12 - price} annually
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="pb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                    size="lg"
                  >
                    {plan.id === 1 ? 'Start Free Trial' : plan.id === 3 ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Comparison table */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            Compare all features
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 font-semibold text-gray-900">Feature</th>
                  {pricingPlans.map((plan) => (
                    <th key={plan.id} className="text-center py-4 font-semibold text-gray-900">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Monthly events', starter: '10K', pro: '100K', enterprise: 'Unlimited' },
                  { feature: 'Team members', starter: '3', pro: '10', enterprise: 'Unlimited' },
                  { feature: 'Data retention', starter: '30 days', pro: '1 year', enterprise: 'Unlimited' },
                  { feature: 'Priority support', starter: 'No', pro: 'Yes', enterprise: '24/7 Phone' },
                  { feature: 'API access', starter: 'No', pro: 'Yes', enterprise: 'Yes' },
                  { feature: 'White-label', starter: 'No', pro: 'No', enterprise: 'Yes' },
                ].map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100">
                    <td className="py-4 text-gray-700">{row.feature}</td>
                    <td className="text-center py-4">
                      <span className="font-medium">{row.starter}</span>
                    </td>
                    <td className="text-center py-4">
                      <span className="font-medium text-blue-600">{row.pro}</span>
                    </td>
                    <td className="text-center py-4">
                      <span className="font-medium text-purple-600">{row.enterprise}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ callout */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-gray-600 mb-4">
            <HelpCircle className="h-5 w-5" />
            <span>Still have questions?</span>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            Get in touch with our sales team for custom plans or enterprise solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              Schedule a demo
            </Button>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}