// src/components/landing/Features.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { features } from '@/data/landingData';
import { 
  BarChart3, 
  Users, 
  Smartphone, 
  Shield, 
  Zap, 
  Puzzle,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  BarChart3: <BarChart3 className="h-6 w-6" />,
  Users: <Users className="h-6 w-6" />,
  Smartphone: <Smartphone className="h-6 w-6" />,
  Shield: <Shield className="h-6 w-6" />,
  Zap: <Zap className="h-6 w-6" />,
  Puzzle: <Puzzle className="h-6 w-6" />
};

const colorClasses: { [key: string]: string } = {
  blue: 'bg-blue-100 text-blue-600',
  purple: 'bg-purple-100 text-purple-600',
  green: 'bg-green-100 text-green-600',
  amber: 'bg-amber-100 text-amber-600'
};

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 mb-4">
            <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-800">
              Everything you need
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Built for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              modern teams
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Powerful features designed to help you understand your data, 
            collaborate with your team, and drive business growth.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <Card 
              key={feature.id}
              className="group border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`h-12 w-12 rounded-xl ${colorClasses[feature.color]} flex items-center justify-center`}>
                    {iconMap[feature.icon]}
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${colorClasses[feature.color]}`}>
                    Feature
                  </span>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature highlight */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                Not just another dashboard
              </h3>
              <ul className="space-y-4 mb-8">
                {[
                  'AI-powered insights that predict trends',
                  'Automated reporting that saves 10+ hours/week',
                  'Real-time collaboration with your team',
                  'Enterprise-grade security & compliance'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100"
                asChild
              >
                <Link to="/demo">
                  See all features
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  <span className="font-medium">Live Demo</span>
                </div>
                <div className="text-sm opacity-80">Updated just now</div>
              </div>
              <div className="space-y-4">
                <div className="h-3 w-full bg-white/30 rounded-full"></div>
                <div className="h-3 w-3/4 bg-white/30 rounded-full"></div>
                <div className="h-3 w-1/2 bg-white/30 rounded-full"></div>
                <div className="h-3 w-2/3 bg-white/30 rounded-full"></div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {['Visitors', 'Conversion', 'Revenue'].map((metric) => (
                  <div key={metric} className="text-center">
                    <div className="text-xl font-bold">↑ 12%</div>
                    <div className="text-sm opacity-80">{metric}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}