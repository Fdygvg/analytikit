// src/data/dashboardData.ts
import type { Metric, ChartDataPoint, User, RecentActivity, ChartConfig, TopPage, GeoData } from './types';
import { subDays, format } from 'date-fns';

// ====================
// METRICS DATA
// ====================

export const metrics: Metric[] = [
  {
    id: 1,
    title: 'Total Visitors',
    value: '42,580',
    change: 12.5,
    trend: 'up',
    icon: 'Users'
  },
  {
    id: 2,
    title: 'Conversion Rate',
    value: '4.2%',
    change: 3.1,
    trend: 'up',
    icon: 'TrendingUp'
  },
  {
    id: 3,
    title: 'Avg. Session Duration',
    value: '4m 32s',
    change: -2.4,
    trend: 'down',
    icon: 'Clock'
  },
  {
    id: 4,
    title: 'Revenue',
    value: '$12,840',
    change: 18.7,
    trend: 'up',
    icon: 'DollarSign'
  },
  {
    id: 5,
    title: 'Bounce Rate',
    value: '32%',
    change: -5.2,
    trend: 'down',
    icon: 'ArrowDownCircle'
  },
  {
    id: 6,
    title: 'New Signups',
    value: '1,243',
    change: 8.9,
    trend: 'up',
    icon: 'UserPlus'
  }
];

// ====================
// CHART DATA
// ====================

export function generateChartData(days: number = 30): ChartDataPoint[] {
  const data: ChartDataPoint[] = [];
  
  for (let i = days; i >= 0; i--) {
    const date = subDays(new Date(), i);
    const visits = Math.floor(Math.random() * 2000) + 1000;
    const signups = Math.floor(visits * 0.03) + Math.floor(Math.random() * 20);
    const revenue = Math.floor(signups * 10) + Math.floor(Math.random() * 500);
    
    data.push({
      date: format(date, 'MMM dd'),
      visits,
      signups,
      revenue
    });
  }
  
  return data;
}

export const chartData = generateChartData(30);

export const chartConfigs: ChartConfig[] = [
  {
    type: 'line',
    title: 'Visits Over Time',
    description: 'Daily unique visitors',
    dataKey: 'visits',
    color: '#3b82f6'
  },
  {
    type: 'bar',
    title: 'Signups',
    description: 'New user registrations',
    dataKey: 'signups',
    color: '#8b5cf6'
  },
  {
    type: 'area',
    title: 'Revenue',
    description: 'Daily revenue in USD',
    dataKey: 'revenue',
    color: '#10b981'
  }
];

// ====================
// USER DATA
// ====================

export const users: User[] = [
  {
    id: 1,
    name: 'Alex Johnson',
    email: 'alex@example.com',
    avatar: 'AJ',
    role: 'admin',
    lastActive: '2024-01-15T14:30:00Z'
  },
  {
    id: 2,
    name: 'Sam Rivera',
    email: 'sam@example.com',
    avatar: 'SR',
    role: 'user',
    lastActive: '2024-01-15T12:45:00Z'
  },
  {
    id: 3,
    name: 'Taylor Chen',
    email: 'taylor@example.com',
    avatar: 'TC',
    role: 'user',
    lastActive: '2024-01-14T16:20:00Z'
  },
  {
    id: 4,
    name: 'Jordan Lee',
    email: 'jordan@example.com',
    avatar: 'JL',
    role: 'viewer',
    lastActive: '2024-01-13T09:15:00Z'
  },
  {
    id: 5,
    name: 'Casey Smith',
    email: 'casey@example.com',
    avatar: 'CS',
    role: 'user',
    lastActive: '2024-01-15T10:10:00Z'
  }
];

// ====================
// ACTIVITY DATA
// ====================

export const recentActivities: RecentActivity[] = [
  {
    id: 1,
    user: users[0],
    action: 'created',
    target: 'Q4 Marketing Report',
    timestamp: '2024-01-15T14:30:00Z'
  },
  {
    id: 2,
    user: users[1],
    action: 'updated',
    target: 'Conversion Funnel',
    timestamp: '2024-01-15T13:15:00Z'
  },
  {
    id: 3,
    user: users[2],
    action: 'commented',
    target: 'User Retention Chart',
    timestamp: '2024-01-15T11:45:00Z'
  },
  {
    id: 4,
    user: users[0],
    action: 'shared',
    target: 'Dashboard with team',
    timestamp: '2024-01-15T10:20:00Z'
  },
  {
    id: 5,
    user: users[3],
    action: 'viewed',
    target: 'Revenue Report',
    timestamp: '2024-01-15T09:30:00Z'
  }
];

// ====================
// DASHBOARD NAVIGATION
// ====================

export const dashboardNavItems = [
  { title: 'Overview', href: '/demo', icon: 'LayoutDashboard' },
  { title: 'Analytics', href: '/demo/analytics', icon: 'BarChart3' },
  { title: 'Users', href: '/demo/users', icon: 'Users' },
  { title: 'Reports', href: '/demo/reports', icon: 'FileText' },
  { title: 'Settings', href: '/demo/settings', icon: 'Settings' }
];

// ====================
// TABLE DATA
// ====================



export const topPages: TopPage[] = [
  { id: 1, page: '/home', visits: 12540, bounceRate: 28, avgTime: '4m 12s' },
  { id: 2, page: '/pricing', visits: 8420, bounceRate: 35, avgTime: '3m 45s' },
  { id: 3, page: '/features', visits: 7210, bounceRate: 31, avgTime: '5m 20s' },
  { id: 4, page: '/blog', visits: 6540, bounceRate: 42, avgTime: '6m 15s' },
  { id: 5, page: '/contact', visits: 3120, bounceRate: 38, avgTime: '2m 50s' }
];

// ====================
// GEO DATA
// ====================


export const geoData: GeoData[] = [
  { country: 'United States', visitors: 15240, percentage: 35 },
  { country: 'United Kingdom', visitors: 8420, percentage: 20 },
  { country: 'Germany', visitors: 6540, percentage: 15 },
  { country: 'Canada', visitors: 5210, percentage: 12 },
  { country: 'Australia', visitors: 4210, percentage: 10 },
  { country: 'Other', visitors: 3860, percentage: 8 }
];