// components/layout/Topbar.tsx
"use client";

import { useState } from "react";
import { 
  Bell, 
  User, 
  Search, 
  ChevronDown,
  Settings,
  LogOut,
  HelpCircle,
  Moon,
  Sun
} from "lucide-react";
import Link from "next/link";

export default function Topbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const notifications = [
    { id: 1, title: "New threat detected", time: "2 min ago", type: "alert" },
    { id: 2, title: "Session expired for user", time: "15 min ago", type: "info" },
    { id: 3, title: "Security scan completed", time: "1 hour ago", type: "success" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/50">
      <div className="flex items-center justify-between px-6 py-3">
        
        {/* Left Section - Page Title & Search */}
        <div className="flex items-center flex-1 gap-4">
          <h2 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Dashboard
          </h2>
          
          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex items-center flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search threats, sessions, users..."
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition"
              />
              
              {/* Keyboard shortcut */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-1">
                <span className="text-xs bg-gray-700 px-1.5 py-0.5 rounded text-gray-400">⌘</span>
                <span className="text-xs bg-gray-700 px-1.5 py-0.5 rounded text-gray-400">K</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Actions */}
        <div className="flex items-center gap-3">
          
          {/* Theme Toggle */}
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 hover:bg-gray-800 rounded-lg transition relative group"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-gray-400 group-hover:text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
            )}
          </button>

          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 hover:bg-gray-800 rounded-lg transition relative group"
            >
              <Bell className="w-5 h-5 text-gray-400 group-hover:text-white" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-gray-900 border border-gray-800 rounded-lg shadow-2xl overflow-hidden">
                <div className="p-3 border-b border-gray-800">
                  <h3 className="text-sm font-semibold">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notif) => (
                    <div key={notif.id} className="p-3 hover:bg-gray-800 transition cursor-pointer border-b border-gray-800 last:border-0">
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 mt-1.5 rounded-full ${
                          notif.type === 'alert' ? 'bg-red-500' : 
                          notif.type === 'info' ? 'bg-blue-500' : 'bg-green-500'
                        }`} />
                        <div className="flex-1">
                          <p className="text-sm text-white">{notif.title}</p>
                          <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-2 border-t border-gray-800 text-center">
                  <button className="text-xs text-red-500 hover:text-red-400">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-3 p-1.5 hover:bg-gray-800 rounded-lg transition group"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium text-white">Admin User</p>
                  <p className="text-xs text-gray-500">Security Admin</p>
                </div>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-white" />
            </button>

            {/* Profile Dropdown Menu */}
            {showProfile && (
              <div className="absolute right-0 mt-2 w-56 bg-gray-900 border border-gray-800 rounded-lg shadow-2xl overflow-hidden">
                <div className="p-3 border-b border-gray-800">
                  <p className="text-sm font-medium text-white">Admin User</p>
                  <p className="text-xs text-gray-500 mt-1">admin@sentinelauth.dev</p>
                </div>
                
                <div className="p-2">
                  <Link href="/dashboard/profile" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-lg transition">
                    <User className="w-4 h-4" />
                    Profile Settings
                  </Link>
                  <Link href="/dashboard/settings" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-lg transition">
                    <Settings className="w-4 h-4" />
                    Account Settings
                  </Link>
                  <Link href="/support" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-lg transition">
                    <HelpCircle className="w-4 h-4" />
                    Help & Support
                  </Link>
                </div>
                
                <div className="p-2 border-t border-gray-800">
                  <button className="flex items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-red-500/10 rounded-lg transition w-full">
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search - Visible only on mobile */}
      <div className="md:hidden px-6 pb-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
          />
        </div>
      </div>
    </header>
  );
}