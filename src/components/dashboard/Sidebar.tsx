// src/components/dashboard/Sidebar.tsx
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  BarChart3,
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  HelpCircle,
  ChevronLeft,
  Home,
  LineChart,
  PieChart,
  TrendingUp,
  Calendar,
  Download,
  Bell,
  Zap,
} from 'lucide-react';
import { dashboardNavItems } from '@/data/dashboardData';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const location = useLocation();
  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64
          transform transition-transform duration-300 ease-in-out
          bg-white border-r border-gray-200
          flex flex-col
          ${open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">AnalytiKit</span>
              <div className="text-xs text-gray-500 -mt-1">Dashboard</div>
            </div>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="lg:hidden"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <div className="space-y-1">
            <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Main
            </p>
            {dashboardNavItems.map((item) => {
              const Icon = getIconComponent(item.icon);
              return (
                <Link
                  key={item.title}
                  to={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg
                    transition-colors duration-150
                    ${isActive(item.href)
                      ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }
                  `}
                  onClick={() => window.innerWidth < 1024 && onClose()}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.title}</span>
                  {item.title === 'Overview' && (
                    <Zap className="ml-auto h-4 w-4 text-amber-500" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="mt-8">
            <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Analytics
            </p>
            <div className="space-y-1">
              {[
                { icon: LineChart, label: 'Trend Analysis', active: false },
                { icon: PieChart, label: 'Audience Insights', active: false },
                { icon: TrendingUp, label: 'Growth Metrics', active: true },
                { icon: Calendar, label: 'Seasonal Trends', active: false },
              ].map((item) => (
                <button
                  key={item.label}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg
                    transition-colors duration-150
                    ${item.active
                      ? 'bg-green-50 text-green-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }
                  `}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                  {item.active && (
                    <div className="ml-auto h-2 w-2 rounded-full bg-green-500" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Quick Actions
            </p>
            <div className="space-y-2 px-4">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Download className="mr-2 h-4 w-4" />
                Export Report
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Bell className="mr-2 h-4 w-4" />
                Set Alert
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule
              </Button>
            </div>
          </div>
        </nav>

        {/* User & Help */}
        <div className="border-t border-gray-200 p-4">
          <div className="space-y-4">
            {/* Help card */}
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-900">Need help?</p>
                  <p className="text-xs text-blue-700 mt-1">
                    Check our documentation or contact support
                  </p>
                </div>
              </div>
              <Button variant="link" size="sm" className="h-auto p-0 text-blue-600 mt-2">
                Get help →
              </Button>
            </div>

            {/* Back to home */}
            <Button
              variant="outline"
              className="w-full"
              asChild
            >
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Homepage
              </Link>
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}

// Helper function to get icon component
function getIconComponent(iconName?: string) {
  const iconMap: { [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>> } = {
    LayoutDashboard,
    BarChart3,
    Users,
    FileText,
    Settings,
  };
  
  return iconMap[iconName || 'LayoutDashboard'] || LayoutDashboard;
}