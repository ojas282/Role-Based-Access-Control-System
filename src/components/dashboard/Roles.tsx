import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Shield } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const initialRoles = [
  'Administrator',
  'Doctor',
  'Nurse',
  'Receptionist',
  'Pharmacist',
  'Lab Technician',
  'Billing Officer',
  'HR Manager',
  'Viewer/Guest',
  'Custom Role',
];

const initialPermissions: Record<string, string[]> = {
  'Patient Management': [
    'View Patient Records',
  ],
  'Medical Operations': [
    'Access Test Results',
  ],
  'Billing and Payments': [
    'Generate Invoices',
  ],
  'Inventory Management': [
    'Manage Pharmacy Stock',
  ],
  'Feedback and Complaints': [
    'View Feedback',
  ],
  'User Management': [
    'Add/Remove Users',
  ],
  'Reports and Analytics': [
    'Generate Reports',

  ]
};

export default function Roles() {
  const [roles, setRoles] = useState(initialRoles);
  const [newRole, setNewRole] = useState('');
  const [permissions] = useState<Record<string, string[]>>(initialPermissions);
  const [rolePermissions, setRolePermissions] = useState<Record<string, Record<string, boolean>>>({});

  const handleAddRole = () => {
    if (newRole) {
      setRoles([...roles, newRole]);
      setNewRole('');
    }
  };

  const handlePermissionChange = (role: string, permission: string) => {
    setRolePermissions((prev) => ({
      ...prev,
      [role]: {
        ...prev[role],
        [permission]: !prev[role]?.[permission],
      },
    }));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-100 p-2 rounded-lg">
            <Shield className="h-5 w-5 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Role Management</h1>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="hover-scale">
              <Plus className="h-4 w-4 mr-2" />
              Add Role
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Role</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Role Name</label>
                <Input
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                  placeholder="Enter role name"
                />
              </div>
              <Button onClick={handleAddRole} className="w-full">
                Add Role
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="w-48 font-semibold">Roles</TableHead>
                  {Object.keys(permissions).map((category) => (
                    <TableHead key={category} className="font-semibold min-w-[200px]">
                      {category}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {roles.map((role) => (
                  <TableRow key={role} className="hover:bg-gray-50 transition-colors">
                    <TableCell className="font-medium text-gray-900">{role}</TableCell>
                    {Object.entries(permissions).map(([category, perms]) => (
                      <TableCell key={`${role}-${category}`} className="p-4">
                        <div className="flex flex-col space-y-2">
                          {perms.map((permission) => (
                            <label
                              key={`${role}-${permission}`}
                              className="flex items-center space-x-2 text-sm"
                            >
                              <Checkbox
                                checked={rolePermissions[role]?.[permission] || false}
                                onCheckedChange={() => handlePermissionChange(role, permission)}
                                className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                              />
                              <span className="text-gray-600">{permission}</span>
                            </label>
                          ))}
                        </div>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}