// src/components/dashboard/RecentActivity.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Filter, 
  MoreVertical, 
  CheckCircle, 
  MessageSquare,
  FileText,
  UserPlus,
  TrendingUp
} from 'lucide-react';
import { recentActivities } from '@/data/dashboardData';
import { formatDistanceToNow } from 'date-fns';

const activityIcons = {
  created: <FileText className="h-4 w-4 text-blue-500" />,
  updated: <CheckCircle className="h-4 w-4 text-green-500" />,
  commented: <MessageSquare className="h-4 w-4 text-purple-500" />,
  shared: <TrendingUp className="h-4 w-4 text-amber-500" />,
  viewed: <EyeIcon className="h-4 w-4 text-gray-500" />
};

// Eye icon component since it's not in lucide-react
function EyeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export default function RecentActivity() {
  const getTimeAgo = (timestamp: string) => {
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recent Activity</CardTitle>
            <p className="text-sm text-gray-600">Team updates and actions</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div 
              key={activity.id}
              className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              {/* Avatar with status */}
              <div className="relative">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${activity.user.name}`} />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xs">
                    {activity.user.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className={`
                  absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white
                  ${activity.user.role === 'admin' ? 'bg-green-500' : 
                    activity.user.role === 'user' ? 'bg-blue-500' : 'bg-gray-400'}
                `} />
              </div>

              {/* Activity details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-medium text-gray-900">
                      {activity.user.name}
                      <span className="font-normal text-gray-600"> {activity.action}</span>
                    </p>
                    <p className="text-sm text-gray-600 truncate">{activity.target}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {activityIcons[activity.action as keyof typeof activityIcons]}
                    <span className="text-xs text-gray-500 whitespace-nowrap">
                      {getTimeAgo(activity.timestamp)}
                    </span>
                  </div>
                </div>
                
                {/* Action badge */}
                <div className="mt-2">
                  <Badge 
                    variant="outline"
                    className={`
                      text-xs
                      ${activity.action === 'created' ? 'border-blue-200 bg-blue-50 text-blue-700' :
                        activity.action === 'updated' ? 'border-green-200 bg-green-50 text-green-700' :
                        activity.action === 'commented' ? 'border-purple-200 bg-purple-50 text-purple-700' :
                        'border-gray-200 bg-gray-50 text-gray-700'}
                    `}
                  >
                    {activity.action.charAt(0).toUpperCase() + activity.action.slice(1)}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Activity summary */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-gray-600">Active now</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span className="text-gray-600">Online today</span>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              View all activity →
            </Button>
          </div>
        </div>

        {/* Quick stats */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-blue-700">Actions today</p>
                <p className="text-lg font-bold text-blue-900">42</p>
              </div>
              <TrendingUp className="h-5 w-5 text-blue-500" />
            </div>
          </div>
          <div className="bg-green-50 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-green-700">Team active</p>
                <p className="text-lg font-bold text-green-900">5/8</p>
              </div>
              <UserPlus className="h-5 w-5 text-green-500" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}