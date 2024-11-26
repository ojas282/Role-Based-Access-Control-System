import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Hospital, LogOut } from 'lucide-react';

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <nav className="h-16 bg-white border-b shadow-sm flex items-center justify-between px-6">
      <div className="flex items-center space-x-3">
        <div className="bg-blue-100 p-2 rounded-lg">
          <Hospital className="h-6 w-6 text-blue-600" />
        </div>
        <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Hospital RBAC
        </span>
      </div>
      <Button
        variant="ghost"
        onClick={logout}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
      </Button>
    </nav>
  );
}