// components/sections/DashboardPreview.tsx
import Image from "next/image";

import logo from "@/public/logo.png";

export function DashboardPreview() {
  return (
    <div className="relative group flex items-center justify-center p-8">
      {/* Glowing orb effect */}
      <div className="absolute w-96 h-96 bg-gradient-to-r from-red-600 to-blue-600 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition duration-1000 animate-pulse" />
      
      {/* Logo with full radius - perfectly circular */}
      <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl">
        <Image 
          src={logo}
          alt="SentinelAuth Logo"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}