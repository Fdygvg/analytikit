// src/pages/DashboardPage.tsx
import { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import TopNav from '@/components/dashboard/TopNav';
import MetricGrid from '@/components/dashboard/MetricGrid';
import ChartSection from '@/components/dashboard/ChartSection';
import RecentActivity from '@/components/dashboard/RecentActivity';
import DataTable from '@/components/dashboard/DataTable.tsx';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-white shadow-md"
        >
          ☰
        </Button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        {/* Main content */}
        <div className="flex-1 lg:ml-">
          <TopNav />
          
          <main className="p-4 md:p-6 lg:p-8">
            {/* Back to landing page */}
            <div className="mb-6">
              <Button asChild variant="ghost" size="sm">
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Homepage
                </Link>
              </Button>
            </div>

            {/* Demo notice */}
            <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800">
                <strong>Demo Dashboard:</strong> This is an interactive demo. Data is mock/simulated.
                Try changing date ranges and filter options!
              </p>
            </div>

            {/* Dashboard content */}
            <div className="space-y-8">
              <MetricGrid />
              <ChartSection />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <RecentActivity />
                <DataTable />
              </div>
            </div>

            {/* Demo call to action */}
            <div className="mt-12 p-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-center text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
              <p className="mb-6 opacity-90">
                This demo shows just 10% of what AnalytiKit can do.
                Sign up for a free trial to access all features.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link to="/">Start Free Trial</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/">Schedule a Demo</Link>
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}