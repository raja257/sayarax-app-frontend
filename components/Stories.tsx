'use client'

import Image from 'next/image'
import SearchBar from './SearchBar'

type Story = {
  id: number
  name: string
  image: string
}

const stories: Story[] = [
  { id: 1, name: 'Your Story', image: 'https://img.freepik.com/premium-psd/car-rental-promotion-social-media-instagram-story-banner-template_261204-113.jpg' },
  { id: 2, name: 'Seller', image: 'https://img.freepik.com/premium-psd/car-rental-promotion-social-media-instagram-story-banner-template_261204-113.jpg' },
  { id: 3, name: 'Your Story', image: 'https://img.freepik.com/premium-psd/car-rental-promotion-social-media-instagram-story-banner-template_261204-113.jpg' },
  { id: 4, name: 'Seller', image: 'https://img.freepik.com/premium-psd/car-rental-promotion-social-media-instagram-story-banner-template_261204-113.jpg' },
  { id: 5, name: 'Buyer', image: 'https://img.freepik.com/premium-psd/car-rental-promotion-social-media-instagram-story-banner-template_261204-113.jpg' },
  { id: 6, name: 'Buyer', image: 'https://img.freepik.com/premium-psd/car-rental-promotion-social-media-instagram-story-banner-template_261204-113.jpg' },
]

export default function StoriesSearch() {
  return (
    <div className="px-4 pt-4">
      {/* STORIES */}
      <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center min-w-[72px]">
            <div className="rounded-full p-[2px] bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <div className="bg-white rounded-full p-[2px] w-14 h-14 flex items-center justify-center overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.name}
                  width={56}  // keeps intrinsic ratio
                  height={56} // keeps intrinsic ratio
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            <span className="mt-1 text-xs text-gray-700 truncate w-[70px] text-center">
              {story.name}
            </span>
          </div>
        ))}
      </div>

      {/* SEARCH BAR */}
      <SearchBar />

      <style jsx>{`
        /* Hide scrollbar for Webkit browsers */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for Firefox */
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
    </div>
  )
}
