// src/components/landing/Hero.tsx
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, BarChart3, Zap, Shield } from 'lucide-react';
import { stats } from '@/data/landingData';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 mb-6">
              <Zap className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-800">
                🚀 Now with AI-powered insights
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Analytics that{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                don't need a data scientist
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Turn complex data into actionable insights with our intuitive platform.
              Made for marketers, founders, and growing teams.
            </p>

            {/* Key benefits */}
            <div className="space-y-3 mb-10">
              {[
                'No coding required - setup in minutes',
                'Real-time updates & automated reports',
                'Collaborate with your entire team'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group" asChild>
                <Link to="/demo">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/demo">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  View Live Demo
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12">
              <p className="text-sm text-gray-500 mb-4">Trusted by 2,500+ teams including:</p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                {['TechFlow', 'GrowthHack', 'NovaLabs', 'DataCorp'].map((company) => (
                  <div
                    key={company}
                    className="text-gray-400 font-medium text-sm opacity-70"
                  >
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Dashboard preview */}
          <div className="relative">
            {/* Dashboard mockup */}
            <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-sm text-gray-500">AnalytiKit Dashboard</span>
                </div>
                <div className="text-xs text-gray-400">Live</div>
              </div>

              {/* Metrics grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: 'Visitors', value: '42.5K', change: '+12%', color: 'blue' },
                  { label: 'Conversion', value: '4.2%', change: '+3%', color: 'green' },
                  { label: 'Revenue', value: '$12.8K', change: '+18%', color: 'purple' },
                  { label: 'Sessions', value: '58.2K', change: '+8%', color: 'amber' },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-lg border border-gray-100 p-4"
                  >
                    <div className="text-xs text-gray-500 mb-1">{metric.label}</div>
                    <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                    <div className={`text-xs font-medium ${
                      metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {metric.change}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart area */}
              <div className="space-y-2 mb-4">
                <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
                <div className="h-2 w-3/4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                <div className="h-2 w-1/2 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full"></div>
              </div>

              {/* Recent activity */}
              <div className="text-sm">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Recent signups</span>
                  <span className="font-medium">243 today</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-600">Team activity</span>
                  <span className="font-medium">High</span>
                </div>
              </div>
            </div>

            {/* Floating elements for visual interest */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg border">
              <Shield className="h-6 w-6 text-green-500" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-3 shadow-lg border">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-xs font-medium">99.9% uptime</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}