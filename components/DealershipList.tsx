'use client'

import Image from 'next/image'
import { IoCheckmarkCircle } from 'react-icons/io5'

type Dealership = {
  id: number
  name: string
  logo: string
  location: string
  verified?: boolean
}

const dealerships: Dealership[] = [
  { id: 1, name: 'Auto King', logo: 'https://img.freepik.com/free-vector/car-logo_23-2148499403.jpg', location: 'Muscat, Oman', verified: true },
  { id: 2, name: 'Speed Cars', logo: 'https://img.freepik.com/free-vector/car-logo_23-2148499403.jpg', location: 'Seeb, Oman' },
  { id: 3, name: 'Luxury Rides', logo: 'https://img.freepik.com/free-vector/car-logo_23-2148499403.jpg', location: 'Salalah, Oman', verified: true },
  { id: 4, name: 'City Motors', logo: 'https://img.freepik.com/free-vector/car-logo_23-2148499403.jpg', location: 'Nizwa, Oman' },
  { id: 5, name: 'Prime Autos', logo: 'https://img.freepik.com/free-vector/car-logo_23-2148499403.jpg', location: 'Muscat, Oman', verified: true },
]

export default function DealershipSlider() {
  return (
    <div className="px-4 pt-4">
      <div className="flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory hide-scrollbar">
        {dealerships.map((dealer) => (
          <div
            key={dealer.id}
            className="
              flex-shrink-0
              w-28
              h-auto
              bg-white
              rounded-xl
              shadow-md
              hover:shadow-lg
              transition
              cursor-pointer
              flex flex-col items-center
              snap-start
              p-0
            "
          >
            {/* Logo with gradient border */}
            <div className="relative w-14 h-14 mt-2 rounded-full p-[2px] bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <div className="bg-white rounded-full p-0.5 w-full h-full flex items-center justify-center overflow-hidden">
                <Image
                  src={dealer.logo}
                  alt={dealer.name}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Verified Badge */}
              {dealer.verified && (
                <div className="absolute -top-1 -right-1 bg-white rounded-full p-0.5 shadow-md">
                  <IoCheckmarkCircle className="text-blue-500 w-3.5 h-3.5" />
                </div>
              )}
            </div>

            {/* Name & Location */}
            <div className="text-center mt-1 mb-2">
              <h3 className="font-semibold text-gray-900 text-xs truncate">{dealer.name}</h3>
              <p className="text-gray-500 text-[10px] mt-0.5 truncate">{dealer.location}</p>
            </div>
          </div>
        ))}
      </div>

     
    </div>
  )
}
