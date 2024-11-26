import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Users, Shield, Layout, Calendar, Pills, Flask, Receipt, UserCog, Eye, Building2, LogOut } from 'lucide-react';

const menuItems = [
  { icon: Users, label: 'Members', path: '/dashboard' },
  { icon: Shield, label: 'Roles', path: '/dashboard/roles' },
  { icon: LogOut, label: 'Logout', path: '/login' }
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-white border-r h-full">
      <div className="p-4">
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                location.pathname === item.path
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}