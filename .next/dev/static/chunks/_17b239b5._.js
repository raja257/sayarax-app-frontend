(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/CarCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RentCarCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function RentCarCard({ car, onToggleLike, onBook }) {
    _s();
    const [currentImage, setCurrentImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const nextImage = ()=>setCurrentImage((prev)=>(prev + 1) % car.images.length);
    const prevImage = ()=>setCurrentImage((prev)=>(prev - 1 + car.images.length) % car.images.length);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-48 sm:h-52 md:h-56 lg:h-60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: car.images[currentImage],
                        alt: car.name,
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/components/CarCard.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onToggleLike(car.id),
                        className: "absolute top-2 right-2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white transition",
                        children: car.liked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoThumbsUp"], {
                            className: "w-5 h-5 text-blue-600"
                        }, void 0, false, {
                            fileName: "[project]/components/CarCard.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoThumbsUpOutline"], {
                            className: "w-5 h-5 text-gray-600 hover:text-blue-600"
                        }, void 0, false, {
                            fileName: "[project]/components/CarCard.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/CarCard.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-2 left-2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm sm:text-base font-bold shadow-md",
                        children: [
                            car.price,
                            " OMR/day"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CarCard.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    car?.images?.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: prevImage,
                                className: "absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/50 text-gray-800 p-1.5 sm:p-2 rounded-full hover:bg-white/70 transition",
                                children: "‹"
                            }, void 0, false, {
                                fileName: "[project]/components/CarCard.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: nextImage,
                                className: "absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/50 text-gray-800 p-1.5 sm:p-2 rounded-full hover:bg-white/70 transition",
                                children: "›"
                            }, void 0, false, {
                                fileName: "[project]/components/CarCard.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CarCard.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-base sm:text-lg font-semibold text-gray-900 truncate",
                        children: car.name
                    }, void 0, false, {
                        fileName: "[project]/components/CarCard.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-3 text-gray-700 text-sm sm:text-base",
                        children: [
                            car.seats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    car.seats,
                                    " Seats"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CarCard.tsx",
                                lineNumber: 96,
                                columnNumber: 25
                            }, this),
                            car.transmission && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: car.transmission
                            }, void 0, false, {
                                fileName: "[project]/components/CarCard.tsx",
                                lineNumber: 97,
                                columnNumber: 32
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CarCard.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>!car.booked && onBook(car.id),
                            className: `flex items-center justify-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-lg font-semibold text-white text-sm sm:text-base shadow-md transition-all duration-200 ${car.booked ? "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 active:scale-95 hover:shadow-lg" : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-95 hover:shadow-lg transform hover:-translate-y-0.5"}`,
                            disabled: car.booked,
                            children: car.booked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                            clipRule: "evenodd"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CarCard.tsx",
                                            lineNumber: 115,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/CarCard.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Booked"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CarCard.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CarCard.tsx",
                                            lineNumber: 122,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/CarCard.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Book "
                                    }, void 0, false, {
                                        fileName: "[project]/components/CarCard.tsx",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/components/CarCard.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/CarCard.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CarCard.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CarCard.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(RentCarCard, "cnc9rbhP80fTHOrqNEzwhjBY+h0=");
_c = RentCarCard;
var _c;
__turbopack_context__.k.register(_c, "RentCarCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SearchBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
'use client';
;
;
function SearchBar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full  px-0 pt-0 ",
        children: [
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " w-full h-12 flex items-center bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)] transition-all focus-within:shadow-[0_4px_10px_rgba(0,0,0,0.15)] rounded-lg ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoSearchOutline"], {
                        className: "ml-3 text-gray-400 text-xl"
                    }, void 0, false, {
                        fileName: "[project]/components/SearchBar.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "Search",
                        className: " flex-1 bg-transparent px-3 text-[16px] text-gray-900 placeholder-gray-400 focus:outline-none "
                    }, void 0, false, {
                        fileName: "[project]/components/SearchBar.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mr-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-gray-500 hover:text-gray-800 transition",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMicOutline"], {
                                    className: "text-xl"
                                }, void 0, false, {
                                    fileName: "[project]/components/SearchBar.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/SearchBar.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-5 w-px bg-gray-200"
                            }, void 0, false, {
                                fileName: "[project]/components/SearchBar.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-gray-600 hover:text-black transition",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoOptionsOutline"], {
                                    className: "text-xl"
                                }, void 0, false, {
                                    fileName: "[project]/components/SearchBar.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/SearchBar.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SearchBar.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SearchBar.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SearchBar.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = SearchBar;
var _c;
__turbopack_context__.k.register(_c, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Stories.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StoriesSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SearchBar.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
const stories = [
    {
        id: 1,
        name: 'Your Story',
        image: 'https://img.freepik.com/premium-psd/car-rental-promotion-social-media-instagram-story-banner-template_261204-113.jpg'
    },
    {
        id: 2,
        name: 'Seller',
        image: 'https://img.freepik.com/premium-psd/car-rental-promotion-social-media-instagram-story-banner-template_261204-113.jpg'
    },
    {
        id: 3,
        name: 'Your Story',
        image: 'https://img.freepik.com/premium-psd/car-rental-promotion-social-media-instagram-story-banner-template_261204-113.jpg'
    },
    {
        id: 4,
        name: 'Seller',
        image: 'https://img.freepik.com/premium-psd/car-rental-promotion-social-media-instagram-story-banner-template_261204-113.jpg'
    },
    {
        id: 5,
        name: 'Buyer',
        image: 'https://img.freepik.com/premium-psd/car-rental-promotion-social-media-instagram-story-banner-template_261204-113.jpg'
    },
    {
        id: 6,
        name: 'Buyer',
        image: 'https://img.freepik.com/premium-psd/car-rental-promotion-social-media-instagram-story-banner-template_261204-113.jpg'
    }
];
function StoriesSearch() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-a3dd8e620354be21" + " " + "px-4 pt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-a3dd8e620354be21" + " " + "flex gap-4 overflow-x-auto pb-3 scrollbar-hide",
                children: stories.map((story)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a3dd8e620354be21" + " " + "flex flex-col items-center min-w-[72px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a3dd8e620354be21" + " " + "rounded-full p-[2px] bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-a3dd8e620354be21" + " " + "bg-white rounded-full p-[2px] w-14 h-14 flex items-center justify-center overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: story.image,
                                        alt: story.name,
                                        width: 56,
                                        height: 56,
                                        className: "w-full h-full object-cover rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Stories.tsx",
                                        lineNumber: 30,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Stories.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Stories.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-a3dd8e620354be21" + " " + "mt-1 text-xs text-gray-700 truncate w-[70px] text-center",
                                children: story.name
                            }, void 0, false, {
                                fileName: "[project]/components/Stories.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        ]
                    }, story.id, true, {
                        fileName: "[project]/components/Stories.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Stories.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/Stories.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "a3dd8e620354be21",
                children: ".scrollbar-hide.jsx-a3dd8e620354be21::-webkit-scrollbar{display:none}.scrollbar-hide.jsx-a3dd8e620354be21{scrollbar-width:none;-ms-overflow-style:none}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Stories.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = StoriesSearch;
var _c;
__turbopack_context__.k.register(_c, "StoriesSearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/DealershipList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DealershipSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
'use client';
;
;
;
const dealerships = [
    {
        id: 1,
        name: 'Auto King',
        logo: 'https://img.freepik.com/free-vector/car-logo_23-2148499403.jpg',
        location: 'Muscat, Oman',
        verified: true
    },
    {
        id: 2,
        name: 'Speed Cars',
        logo: 'https://img.freepik.com/free-vector/car-logo_23-2148499403.jpg',
        location: 'Seeb, Oman'
    },
    {
        id: 3,
        name: 'Luxury Rides',
        logo: 'https://img.freepik.com/free-vector/car-logo_23-2148499403.jpg',
        location: 'Salalah, Oman',
        verified: true
    },
    {
        id: 4,
        name: 'City Motors',
        logo: 'https://img.freepik.com/free-vector/car-logo_23-2148499403.jpg',
        location: 'Nizwa, Oman'
    },
    {
        id: 5,
        name: 'Prime Autos',
        logo: 'https://img.freepik.com/free-vector/car-logo_23-2148499403.jpg',
        location: 'Muscat, Oman',
        verified: true
    }
];
function DealershipSlider() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-4 pt-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory hide-scrollbar",
            children: dealerships.map((dealer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " flex-shrink-0 w-28 h-auto bg-white rounded-xl shadow-md hover:shadow-lg transition cursor-pointer flex flex-col items-center snap-start p-0 ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-14 h-14 mt-2 rounded-full p-[2px] bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-full p-0.5 w-full h-full flex items-center justify-center overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: dealer.logo,
                                        alt: dealer.name,
                                        width: 56,
                                        height: 56,
                                        className: "w-full h-full object-cover rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/components/DealershipList.tsx",
                                        lineNumber: 47,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/DealershipList.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this),
                                dealer.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-1 -right-1 bg-white rounded-full p-0.5 shadow-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoCheckmarkCircle"], {
                                        className: "text-blue-500 w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/DealershipList.tsx",
                                        lineNumber: 59,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/DealershipList.tsx",
                                    lineNumber: 58,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DealershipList.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-1 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-gray-900 text-xs truncate",
                                    children: dealer.name
                                }, void 0, false, {
                                    fileName: "[project]/components/DealershipList.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 text-[10px] mt-0.5 truncate",
                                    children: dealer.location
                                }, void 0, false, {
                                    fileName: "[project]/components/DealershipList.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DealershipList.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this)
                    ]
                }, dealer.id, true, {
                    fileName: "[project]/components/DealershipList.tsx",
                    lineNumber: 27,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/DealershipList.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/DealershipList.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = DealershipSlider;
var _c;
__turbopack_context__.k.register(_c, "DealershipSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeedPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CarCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CarCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Stories$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Stories.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DealershipList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DealershipList.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    _s();
    const [cars, setCars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(mockCars);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 pb-28",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Stories$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DealershipList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-4xl mx-auto mt-6 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 sm:grid-cols-1 gap-2",
                    children: cars.map((car)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CarCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            car: car,
                            onToggleLike: toggleLike,
                            onBook: bookCar
                        }, car.id, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 242,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 240,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 235,
        columnNumber: 5
    }, this);
}
_s(FeedPage, "Iiqzhq4aLFkSaeXbHcCIFQDslC0=");
_c = FeedPage;
var _c;
__turbopack_context__.k.register(_c, "FeedPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_17b239b5._.js.map