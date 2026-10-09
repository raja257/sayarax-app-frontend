'use client';

import { IoSearchOutline, IoNotificationsOutline } from "react-icons/io5";
import Image from "next/image";

export default function Header({ title = "Sayarax" }) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left: Logo / Title */}
        <div className="flex items-center gap-2">
          {/* Optional Logo */}
          {/* <Image src="/logo.png" alt="logo" width={32} height={32} /> */}
          
          <h1 className="text-xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          
          {/* Search */}
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <IoSearchOutline className="text-2xl text-gray-700" />
          </button>

          {/* Notifications */}
          <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
            <IoNotificationsOutline className="text-2xl text-gray-700" />
            
            {/* Badge */}
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full" />
          </button>

          {/* Profile */}
          <button className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
