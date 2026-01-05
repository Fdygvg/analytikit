// src/components/dashboard/MetricGrid.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  Clock,
  ArrowDownCircle,
  UserPlus,
  MoreVertical,
  RefreshCw
} from 'lucide-react';
import { metrics } from '@/data/dashboardData';
import { useState } from 'react';

const iconMap: { [key: string]: React.ReactNode } = {
  Users: <Users className="h-5 w-5" />,
  TrendingUp: <TrendingUp className="h-5 w-5" />,
  Clock: <Clock className="h-5 w-5" />,
  DollarSign: <DollarSign className="h-5 w-5" />,
  ArrowDownCircle: <ArrowDownCircle className="h-5 w-5" />,
  UserPlus: <UserPlus className="h-5 w-5" />
};

export default function MetricGrid() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
          <p className="text-gray-600">Key metrics and performance indicators</p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            disabled={isRefreshing}
          >
            <RefreshCw className={`mr-2 h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            {isRefreshing ? 'Refreshing...' : 'Refresh'}
          </Button>
          <Button variant="outline" size="sm">
            Customize
          </Button>
        </div>
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {metrics.map((metric) => (
          <Card
            key={metric.id}
            className="group hover:shadow-md transition-shadow border border-gray-200"
          >
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-lg ${metric.trend === 'up'
                      ? 'bg-green-100 text-green-600'
                      : metric.trend === 'down'
                        ? 'bg-red-100 text-red-600'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                    {iconMap[metric.icon]}
                  </div>
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {metric.title}
                  </CardTitle>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {metric.value}
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    {metric.trend === 'up' ? (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    ) : metric.trend === 'down' ? (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    ) : null}
                    <Badge
                      variant="outline"
                      className={`
                        text-xs font-medium
                        ${metric.trend === 'up'
                          ? 'border-green-200 bg-green-50 text-green-700'
                          : metric.trend === 'down'
                            ? 'border-red-200 bg-red-50 text-red-700'
                            : 'border-gray-200 bg-gray-50 text-gray-700'
                        }
                      `}
                    >
                      {metric.change > 0 ? '+' : ''}{metric.change}%
                    </Badge>
                    <span className="text-xs text-gray-500 ml-1">from last month</span>
                  </div>
                </div>
                {/* Mini chart */}
                <div className="h-12 w-20 flex items-end">
                  {[40, 60, 75, 50, 85, 65].map((height, index) => (
                    <div
                      key={index}
                      className={`flex-1 mx-0.5 rounded-t ${metric.trend === 'up'
                          ? 'bg-gradient-to-t from-green-500 to-green-400'
                          : metric.trend === 'down'
                            ? 'bg-gradient-to-t from-red-500 to-red-400'
                            : 'bg-gradient-to-t from-gray-400 to-gray-300'
                        }`}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Performance summary */}
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-blue-900">Performance Score</h3>
              <Badge className="bg-blue-600 text-white">Excellent</Badge>
            </div>
            <div className="text-3xl font-bold text-blue-900 mb-2">86/100</div>
            <div className="w-full bg-blue-200 rounded-full h-2 mb-4">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '86%' }} />
            </div>
            <p className="text-sm text-blue-800">
              Up 12 points from last month. Your conversion rate improvement contributed most.
            </p>
          </CardContent>
        </Card>

        {/* Quick actions */}
        <Card className="border-gray-200">
          <CardContent className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              {[
                { label: 'Export report', color: 'blue' },
                { label: 'Schedule meeting', color: 'purple' },
                { label: 'Invite team member', color: 'green' },
              ].map((action) => (
                <Button
                  key={action.label}
                  variant="outline"
                  className="w-full justify-start border-gray-300 hover:border-gray-400"
                >
                  <div className={`h-2 w-2 rounded-full mr-3 bg-${action.color}-500`} />
                  {action.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Goal tracker */}
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-purple-900">Monthly Goal</h3>
              <span className="text-sm text-purple-700">15 days left</span>
            </div>
            <div className="text-3xl font-bold text-purple-900 mb-2">68%</div>
            <div className="w-full bg-purple-200 rounded-full h-2 mb-4">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: '68%' }} />
            </div>
            <div className="flex justify-between text-sm text-purple-800">
              <span>$8,720 / $12,000</span>
              <span>+$3,280 to go</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}