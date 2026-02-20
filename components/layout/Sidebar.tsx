// components/layout/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Shield, 
  Activity, 
  Users, 
  Settings,
  LayoutDashboard,
  AlertTriangle,
  Globe,
  Lock,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Bell,
  FileText,
  HelpCircle
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const navigation = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Threats", href: "/dashboard/threats", icon: AlertTriangle, badge: 12 },
    { name: "Sessions", href: "/dashboard/sessions", icon: Users, badge: 3 },
    { name: "Activity", href: "/dashboard/activity", icon: Activity },
    { name: "Security", href: "/dashboard/security", icon: Lock },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  const secondaryNav = [
    { name: "Documentation", href: "/docs", icon: FileText },
    { name: "Support", href: "/support", icon: HelpCircle },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <aside 
      className={`relative h-screen bg-gradient-to-b from-gray-900 to-black border-r border-gray-800/50 flex flex-col transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo Section */}
      <div className="relative p-6 border-b border-gray-800/50">
        <div className="flex items-center gap-3">
          {/* Logo Icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-red-500 rounded-lg blur-md opacity-50" />
            <div className="relative w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
          </div>
          
          {/* Brand Name - Hide when collapsed */}
          {!collapsed && (
            <div className="flex-1">
              <h1 className="text-lg font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                SentinelAuth
              </h1>
              <p className="text-[10px] text-gray-500">Security Dashboard</p>
            </div>
          )}
        </div>

        {/* Collapse Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-9 w-6 h-6 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center hover:bg-gray-700 transition z-10"
        >
          {collapsed ? (
            <ChevronRight className="w-3 h-3 text-gray-400" />
          ) : (
            <ChevronLeft className="w-3 h-3 text-gray-400" />
          )}
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1 custom-scrollbar">
        {navigation.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                relative flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group
                ${active 
                  ? "bg-gradient-to-r from-red-500/10 to-red-600/5 text-red-500 border-l-2 border-red-500" 
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }
                ${collapsed ? "justify-center" : ""}
              `}
            >
              {/* Active Indicator */}
              {active && !collapsed && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-red-500 rounded-r-full" />
              )}
              
              {/* Icon with hover effect */}
              <div className={`relative ${active ? "text-red-500" : "text-gray-400 group-hover:text-white"}`}>
                <Icon className="w-5 h-5" />
                {active && (
                  <div className="absolute inset-0 bg-red-500/20 rounded-full blur-md" />
                )}
              </div>
              
              {/* Label - Hide when collapsed */}
              {!collapsed && (
                <>
                  <span className="flex-1 text-sm font-medium">{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-0.5 bg-red-500/10 text-red-500 text-xs rounded-full">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
              
              {/* Tooltip for collapsed mode */}
              {collapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50">
                  {item.name}
                  {item.badge && ` (${item.badge})`}
                </div>
              )}
            </Link>
          );
        })}

        {/* Divider */}
        <div className="my-4 border-t border-gray-800" />

        {/* Secondary Navigation */}
        {secondaryNav.map((item) => {
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group
                text-gray-400 hover:text-white hover:bg-gray-800/50
                ${collapsed ? "justify-center" : ""}
              `}
            >
              <Icon className="w-5 h-5" />
              {!collapsed && (
                <span className="flex-1 text-sm font-medium">{item.name}</span>
              )}
              {collapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {item.name}
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* User Profile Section */}
      <div className={`p-4 border-t border-gray-800/50 ${collapsed ? "text-center" : ""}`}>
        <div className={`flex items-center gap-3 ${collapsed ? "justify-center" : ""}`}>
          {/* Avatar */}
          <div className="relative">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold text-white">AD</span>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-gray-900" />
          </div>

          {/* User Info - Hide when collapsed */}
          {!collapsed && (
            <div className="flex-1">
              <p className="text-sm font-medium text-white">Admin User</p>
              <p className="text-xs text-gray-500">admin@sentinelauth.dev</p>
            </div>
          )}

          {/* Logout Button */}
          <button className={`text-gray-500 hover:text-red-500 transition ${collapsed ? "mt-2" : ""}`}>
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}