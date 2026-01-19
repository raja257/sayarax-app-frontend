module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeedPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/CarCard'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/Stories'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/DealershipList'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
;
// Main Feed Component
const mockCars = [
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
            features: [
                "Test Drive",
                "Financing",
                "Trade-in",
                "Warranty",
                "Service Center"
            ],
            storageCapacity: "15 cars available",
            logo: "https://images.pexels.com/photos/30889575/pexels-photo-30889575/free-photo-of-elegant-orange-sports-car-on-scenic-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            features: [
                "Certified Pre-owned",
                "Delivery",
                "Insurance",
                "Maintenance"
            ],
            storageCapacity: "8 cars available",
            logo: "https://images.pexels.com/photos/30889575/pexels-photo-30889575/free-photo-of-elegant-orange-sports-car-on-scenic-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            features: [
                "VIP Lounge",
                "Concierge",
                "Chauffeur Service",
                "Valet",
                "Customization"
            ],
            storageCapacity: "22 cars available",
            logo: "https://images.pexels.com/photos/30889575/pexels-photo-30889575/free-photo-of-elegant-orange-sports-car-on-scenic-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            features: [
                "VIP Lounge",
                "Concierge",
                "Chauffeur Service",
                "Valet",
                "Customization"
            ],
            storageCapacity: "22 cars available",
            logo: "https://images.pexels.com/photos/30889575/pexels-photo-30889575/free-photo-of-elegant-orange-sports-car-on-scenic-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            features: [
                "VIP Lounge",
                "Concierge",
                "Chauffeur Service",
                "Valet",
                "Customization"
            ],
            storageCapacity: "22 cars available",
            logo: "https://images.pexels.com/photos/30889575/pexels-photo-30889575/free-photo-of-elegant-orange-sports-car-on-scenic-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    }
];
function FeedPage() {
    const [cars, setCars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(mockCars);
    const toggleLike = (id)=>{
        const carId = Number(id);
        setCars((prev)=>prev.map((car)=>car.id === carId ? {
                    ...car,
                    liked: !car.liked,
                    likes: car.liked ? car.likes - 1 : car.likes + 1
                } : car));
    };
    const bookCar = (id)=>{
        const carId = Number(id);
        setCars((prev)=>prev.map((car)=>car.id === carId ? {
                    ...car,
                    booked: true
                } : car));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 pb-28",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StoriesSearch, {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DealershipList, {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-4xl mx-auto mt-6 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 sm:grid-cols-1 gap-2",
                    children: cars.map((car)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CarCard, {
                            car: car,
                            onToggleLike: toggleLike,
                            onBook: bookCar
                        }, car.id, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 243,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 241,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 236,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__73ae023d._.js.map