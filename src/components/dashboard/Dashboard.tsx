import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Members from './Members';
import Roles from './Roles';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex h-[calc(100vh-64px)]">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <Routes>
            <Route path="/" element={<Members />} />
            <Route path="/roles" element={<Roles />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}