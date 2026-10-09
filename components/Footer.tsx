'use client';

import {
  IoHomeOutline,
  IoSearchOutline,
  IoHeartOutline,
  IoPersonOutline,
  IoCarOutline,
} from "react-icons/io5";
import { useRouter } from "next/navigation"; // Using Next.js router

export default function Footer({ active = "reels" }) {
  const router = useRouter();

  const navItems = [
    { name: "home", icon: <IoHomeOutline />, label: "Home", path: "/" },
    { name: "search", icon: <IoSearchOutline />, label: "Search", path: "/search" },
    { name: "reels", icon: <IoCarOutline />, label: "Reels", path: "/pages/feed" }, // center
    { name: "favorites", icon: <IoHeartOutline />, label: "Favorites", path: "/favorites" },
    { name: "profile", icon: <IoPersonOutline />, label: "Profile", path: "/profile" },
  ];

  const handleNavigation = (path:any) => {
    router.push(path);
  };

  return (
    <footer className="w-full bg-white shadow-md">
      {/* Desktop Footer */}
      <div className="hidden md:flex max-w-7xl mx-auto justify-between items-center px-10 py-3">
        {navItems.map((item, index) => {
          const isMiddle = index === 2;
          return (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.path)}
              className={`
                flex flex-col items-center justify-center px-4 py-2 rounded-lg
                ${
                  active === item.name
                    ? "text-secondary font-semibold"
                    : "text-gray-500 hover:text-secondary"
                }
                ${isMiddle ? "bg-gray-100" : ""}
                active:scale-95 transition-transform duration-150
                hover:scale-105
              `}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm mt-1">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Mobile Footer */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center px-6 py-2 relative bg-white shadow-md">
          {navItems.map((item, index) => {
            const isMiddle = index === 2;
            return (
              <div
                key={item.name}
                className={`flex-1 flex justify-center ${isMiddle ? "relative -top-4" : ""}`}
              >
                <button
                  onClick={() => handleNavigation(item.path)}
                  className={`flex flex-col items-center justify-center
                    ${active === item.name ? "text-secondary" : "text-gray-500"}
                    active:scale-95 transition-transform duration-150
                  `}
                >
                  {isMiddle ? (
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-95 hover:shadow-lg transform hover:-translate-y-0.5 w-16 h-16 rounded-full flex items-center justify-center shadow-lg text-white text-2xl">
                      {item.icon}
                    </div>
                  ) : (
                    <span className="text-2xl">{item.icon}</span>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
