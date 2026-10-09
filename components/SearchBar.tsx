'use client'

import {
  IoSearchOutline,
  IoOptionsOutline,
  IoMicOutline,
} from 'react-icons/io5'

export default function SearchBar() {
  return (
    <div className="w-full  px-0 pt-0 "> {/* Full width container */}
      <div
        className="
          w-full
          h-12
          flex items-center
          bg-white
          shadow-[0_2px_6px_rgba(0,0,0,0.08)]
          transition-all
          focus-within:shadow-[0_4px_10px_rgba(0,0,0,0.15)]
          rounded-lg
        "
      >
        {/* Search Icon */}
        <IoSearchOutline className="ml-3 text-gray-400 text-xl" />

        {/* Input */}
        <input
          placeholder="Search"
          className="
            flex-1
            bg-transparent
            px-3
            text-[16px]
            text-gray-900
            placeholder-gray-400
            focus:outline-none
          "
        />

        {/* Right Actions */}
        <div className="flex items-center gap-3 mr-3">
          <button className="text-gray-500 hover:text-gray-800 transition">
            <IoMicOutline className="text-xl" />
          </button>

          <div className="h-5 w-px bg-gray-200" />

          <button className="text-gray-600 hover:text-black transition">
            <IoOptionsOutline className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  )
}
