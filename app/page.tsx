"use client";

import { useState } from "react";
import CarCard from "../components/CarCard";
import StoriesSearch from "../components/Stories";
import DealershipList from "../components/DealershipList";
// Define the Car interface with dealership details
interface Car {
  id: number;
  name: string;
  dealer: string;
  images: string[];
  booked: boolean;
  liked: boolean;
  likes: number;
  rating: number;
  price: number;
  year: number;
  mileage: number;
  dealership: {
    id: number;
    name: string;
    address: string;
    city: string;
    phone: string;
    email: string;
    rating: number;
    totalReviews: number;
    openingHours: string;
    distance: string;
    verified: boolean;
    features: string[];
    storageCapacity?: string; // Cars in stock
    logo:string
  };
}

// Main Feed Component
const mockCars: Car[] = [
  {
    id: 1,
    name: "Toyota Camry 2023",
    dealer: "Auto King Showroom",
    images: [
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwcmVudGFsfGVufDB8fDB8fHww",
      "https://images.pexels.com/photos/30889575/pexels-photo-30889575/free-photo-of-elegant-orange-sports-car-on-scenic-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    booked: false,
    liked: false,
    likes: 23,
    rating: 4.5,
    price: 28500,
    year: 2023,
    mileage: 15000,
    dealership: {
      id: 101,
      name: "Auto King Premium Cars",
      address: "123 Business Bay, Sheikh Zayed Road",
      city: "Dubai, UAE",
      phone: "+971 4 123 4567",
      email: "info@autoking.ae",
      rating: 4.7,
      totalReviews: 342,
      openingHours: "Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM",
      distance: "5.2 km away",
      verified: true,
      features: ["Test Drive", "Financing", "Trade-in", "Warranty", "Service Center"],
      storageCapacity: "15 cars available",
      logo:"https://images.pexels.com/photos/30889575/pexels-photo-30889575/free-photo-of-elegant-orange-sports-car-on-scenic-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  },
  {
    id: 2,
    name: "Honda Civic Sport",
    dealer: "Sayarax Motors",
    images: [
      "https://images.pexels.com/photos/30889575/pexels-photo-30889575/free-photo-of-elegant-orange-sports-car-on-scenic-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    booked: false,
    liked: true,
    likes: 45,
    rating: 4.0,
    price: 23500,
    year: 2022,
    mileage: 22000,
    dealership: {
      id: 102,
      name: "Sayarax Official Dealership",
      address: "45 Al Seef Street",
      city: "Muscat, Oman",
      phone: "+968 24 567 890",
      email: "sales@sayarax.com",
      rating: 4.3,
      totalReviews: 189,
      openingHours: "Mon-Fri: 8:30 AM - 7:30 PM, Sat: 9:00 AM - 5:00 PM",
      distance: "8.7 km away",
      verified: true,
      features: ["Certified Pre-owned", "Delivery", "Insurance", "Maintenance"],
      storageCapacity: "8 cars available",
      logo:"https://images.pexels.com/photos/30889575/pexels-photo-30889575/free-photo-of-elegant-orange-sports-car-on-scenic-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  },
  {
    id: 3,
    name: "BMW X5 xDrive40i",
    dealer: "Luxury Motors Middle East",
    images: [
      "https://images.pexels.com/photos/30889575/pexels-photo-30889575/free-photo-of-elegant-orange-sports-car-on-scenic-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/30889575/pexels-photo-30889575/free-photo-of-elegant-orange-sports-car-on-scenic-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    booked: false,
    liked: false,
    likes: 12,
    rating: 4.8,
    price: 78500,
    year: 2024,
    mileage: 5000,
    dealership: {
      id: 103,
      name: "Luxury Motors Exclusive",
      address: "Prestige Tower, King Fahd Road",
      city: "Riyadh, Saudi Arabia",
      phone: "+966 11 234 5678",
      email: "luxury@luxurymotors.sa",
      rating: 4.9,
      totalReviews: 567,
      openingHours: "Daily: 10:00 AM - 10:00 PM",
      distance: "12.5 km away",
      verified: true,
      features: ["VIP Lounge", "Concierge", "Chauffeur Service", "Valet", "Customization"],
      storageCapacity: "22 cars available",
            logo:"https://images.pexels.com/photos/30889575/pexels-photo-30889575/free-photo-of-elegant-orange-sports-car-on-scenic-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    }
  },
  {
    id: 4,
    name: "BMW X5 xDrive40i",
    dealer: "Luxury Motors Middle East",
    images: [
      "https://images.pexels.com/photos/30889575/pexels-photo-30889575/free-photo-of-elegant-orange-sports-car-on-scenic-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/30889575/pexels-photo-30889575/free-photo-of-elegant-orange-sports-car-on-scenic-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    booked: false,
    liked: false,
    likes: 12,
    rating: 4.8,
    price: 78500,
    year: 2024,
    mileage: 5000,
    dealership: {
      id: 103,
      name: "Luxury Motors Exclusive",
      address: "Prestige Tower, King Fahd Road",
      city: "Riyadh, Saudi Arabia",
      phone: "+966 11 234 5678",
      email: "luxury@luxurymotors.sa",
      rating: 4.9,
      totalReviews: 567,
      openingHours: "Daily: 10:00 AM - 10:00 PM",
      distance: "12.5 km away",
      verified: true,
      features: ["VIP Lounge", "Concierge", "Chauffeur Service", "Valet", "Customization"],
      storageCapacity: "22 cars available",
            logo:"https://images.pexels.com/photos/30889575/pexels-photo-30889575/free-photo-of-elegant-orange-sports-car-on-scenic-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    }
  },
  {
    id: 5,
    name: "BMW X5 xDrive40i",
    dealer: "Luxury Motors Middle East",
    images: [
      "https://images.pexels.com/photos/30889575/pexels-photo-30889575/free-photo-of-elegant-orange-sports-car-on-scenic-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/30889575/pexels-photo-30889575/free-photo-of-elegant-orange-sports-car-on-scenic-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    booked: false,
    liked: false,
    likes: 12,
    rating: 4.8,
    price: 78500,
    year: 2024,
    mileage: 5000,
    dealership: {
      id: 103,
      name: "Luxury Motors Exclusive",
      address: "Prestige Tower, King Fahd Road",
      city: "Riyadh, Saudi Arabia",
      phone: "+966 11 234 5678",
      email: "luxury@luxurymotors.sa",
      rating: 4.9,
      totalReviews: 567,
      openingHours: "Daily: 10:00 AM - 10:00 PM",
      distance: "12.5 km away",
      verified: true,
      features: ["VIP Lounge", "Concierge", "Chauffeur Service", "Valet", "Customization"],
      storageCapacity: "22 cars available",
            logo:"https://images.pexels.com/photos/30889575/pexels-photo-30889575/free-photo-of-elegant-orange-sports-car-on-scenic-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    }
  },
];

export default function FeedPage() {
  const [cars, setCars] = useState<Car[]>(mockCars);

 const toggleLike = (id: string | number) => {
  const carId = Number(id);

  setCars((prev) =>
    prev.map((car) =>
      car.id === carId
        ? {
            ...car,
            liked: !car.liked,
            likes: car.liked ? car.likes - 1 : car.likes + 1,
          }
        : car
    )
  );
};

const bookCar = (id: string | number) => {
  const carId = Number(id);

  setCars((prev) =>
    prev.map((car) =>
      car.id === carId ? { ...car, booked: true } : car
    )
  );
};


  return (
    <div className="min-h-screen bg-gray-50 pb-28">
      <StoriesSearch />
      <DealershipList />
      {/* Feed */}
      <main className="max-w-4xl mx-auto mt-6 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
          {cars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onToggleLike={toggleLike}
              onBook={bookCar}
            />
          ))}
        </div>
      </main>
    </div>
  );
}