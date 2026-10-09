'use client';

import { useState } from "react";
import {
  IoThumbsUpOutline,
  IoThumbsUp,
  IoShareSocialOutline,
} from "react-icons/io5";

interface Car {
  id: string | number;
  name: string;
  images: string[];
  liked: boolean;
  booked: boolean;
  price: number;
  seats?: number;
  transmission?: string;
  dealership: {
    name: string;
    logo: string;
  };
}

interface CarCardProps {
  car: Car;
  onToggleLike: (carId: string | number) => void;
  onBook: (carId: string | number) => void;
}

export default function RentCarCard({ car, onToggleLike, onBook }: CarCardProps) {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % car.images.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + car.images.length) % car.images.length);

  return (
    <div className="w-full bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition">

      {/* Image carousel */}
      <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-60">
        <img
          src={car.images[currentImage]}
          alt={car.name}
          className="w-full h-full object-cover"
        />

        {/* Like button on top-right */}
        <button
          onClick={() => onToggleLike(car.id)}
          className="absolute top-2 right-2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white transition"
        >
          {car.liked ? (
            <IoThumbsUp className="w-5 h-5 text-blue-600" />
          ) : (
            <IoThumbsUpOutline className="w-5 h-5 text-gray-600 hover:text-blue-600" />
          )}
        </button>

        {/* Price overlay at bottom-left of image */}
        <div className="absolute bottom-2 left-2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm sm:text-base font-bold shadow-md">
          {car.price} OMR/day
        </div>

        {/* Carousel arrows */}
        {car?.images?.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/50 text-gray-800 p-1.5 sm:p-2 rounded-full hover:bg-white/70 transition"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/50 text-gray-800 p-1.5 sm:p-2 rounded-full hover:bg-white/70 transition"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Card info */}
      <div className="px-4 py-3 flex flex-col gap-2">

        {/* Car name */}
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 truncate">
          {car.name}
        </h2>

        {/* Specs: Seats + Transmission */}
        <div className="flex flex-wrap items-center gap-3 text-gray-700 text-sm sm:text-base">
          {car.seats && <span>{car.seats} Seats</span>}
          {car.transmission && <span>{car.transmission}</span>}
        </div>

        {/* Bottom row: Dealer + Book */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

          <button
            onClick={() => !car.booked && onBook(car.id)}
            className={`flex items-center justify-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-lg font-semibold text-white text-sm sm:text-base shadow-md transition-all duration-200 ${car.booked
              ? "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 active:scale-95 hover:shadow-lg"

              : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-95 hover:shadow-lg transform hover:-translate-y-0.5"
              }`}
            disabled={car.booked}
          >
            {car.booked ? (
              <>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Booked</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Book </span>
              </>
            )}
          </button>

        </div>
      </div>
    </div>
  );
}
