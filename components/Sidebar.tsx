import Link from 'next/link';
import { Home, Calendar, Mail, FileText, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-full shadow-lg">
      <div className="flex flex-col h-full">
        <div className="p-4">
          <h2 className="text-2xl font-bold">Assistant AI</h2>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2 p-4">
            <li>
              <Link href="/dashboard" className="flex items-center p-2 hover:bg-gray-100 rounded">
                <Home className="mr-2" /> Dashboard
              </Link>
            </li>
            <li>
              <Link href="/dashboard/calendar" className="flex items-center p-2 hover:bg-gray-100 rounded">
                <Calendar className="mr-2" /> Calendar
              </Link>
            </li>
            <li>
              <Link href="/dashboard/email" className="flex items-center p-2 hover:bg-gray-100 rounded">
                <Mail className="mr-2" /> Email
              </Link>
            </li>
            <li>
              <Link href="/dashboard/tasks" className="flex items-center p-2 hover:bg-gray-100 rounded">
                <FileText className="mr-2" /> Tasks
              </Link>
            </li>
            <li>
              <Link href="/dashboard/settings" className="flex items-center p-2 hover:bg-gray-100 rounded">
                <Settings className="mr-2" /> Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;