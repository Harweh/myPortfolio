// import React from 'react'

// const page = ( {params} ) => {
    
//     return (
//         <div>
//             <h1>Post: {params.slug}</h1>
//             <h2>is this still working: {params.slug}</h2>
//         </div>
//     )
// }

// export default page

// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { ShoppingBag, Heart, User, Menu, X, Search } from 'lucide-react'
// import { useCartStore } from '@/store/Cart'
// import { useWishlistStore } from '@/store/Wishlist'
// import { useAuthStore } from '@/store/auth'

// export default function Header() {
//     const [isScrolled, setIsScrolled] = useState(false)
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//     const [isSearchOpen, setIsSearchOpen] = useState(false)
    
//     const totalItems = useCartStore(state => state.getTotalItems())
//     const wishlistItems = useWishlistStore(state => state.items)
//     const { isAuthenticated, user } = useAuthStore()

//     useEffect(() => {
//         const handleScroll = () => {
//         setIsScrolled(window.scrollY > 20)
//         }
//         window.addEventListener('scroll', handleScroll)
//         return () => window.removeEventListener('scroll', handleScroll)
//     }, [])

//     const navigation = [
//         { name: 'Shop All', href: '/shop' },
//         { name: 'Categories', href: '/categories' },
//         { name: 'New Arrivals', href: '/new' },
//         { name: 'Sale', href: '/sale' },
//     ]

//     return (
//         <header 
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//             isScrolled 
//             ? 'bg-white/95 backdrop-blur-md shadow-sm' 
//             : 'bg-white'
//         }`}
//         >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
//             <div className="flex items-center justify-between h-20">
//             {/* Logo */}
//             <Link 
//                 href="/" 
//                 className="font-display text-2xl sm:text-3xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
//             >
//                 Artisan
//             </Link>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex items-center space-x-8">
//                 {navigation.map((item) => (
//                 <Link
//                     key={item.name}
//                     href={item.href}
//                     className="text-neutral-700 hover:text-primary-600 font-medium transition-colors relative group"
//                 >
//                     {item.name}
//                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full" />
//                 </Link>
//                 ))}
//             </nav>

//             {/* Right Actions */}
//                 <div className="flex items-center space-x-4 sm:space-x-6">
//                     {/* Search */}
//                     <button
//                     onClick={() => setIsSearchOpen(!isSearchOpen)}
//                     className="text-neutral-700 hover:text-primary-600 transition-colors"
//                     aria-label="Search"
//                     >
//                     <Search className="w-5 h-5" />
//                     </button>

//                     {/* Wishlist */}
//                     <Link
//                     href="/wishlist"
//                     className="relative text-neutral-700 hover:text-primary-600 transition-colors hidden sm:block"
//                     aria-label="Wishlist"
//                     >
//                     <Heart className="w-5 h-5" />
//                     {wishlistItems.length > 0 && (
//                         <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                         {wishlistItems.length}
//                         </span>
//                     )}
//                     </Link>

//                     {/* User Account */}
//                     <Link
//                     href={isAuthenticated ? '/account' : '/login'}
//                     className="text-neutral-700 hover:text-primary-600 transition-colors hidden sm:block"
//                     aria-label="Account"
//                     >
//                     <User className="w-5 h-5" />
//                     </Link>

//                     {/* Cart */}
//                     <Link
//                     href="/cart"
//                     className="relative text-neutral-700 hover:text-primary-600 transition-colors"
//                     aria-label="Shopping cart"
//                     >
//                     <ShoppingBag className="w-5 h-5" />
//                     {totalItems > 0 && (
//                         <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold">
//                         {totalItems}
//                         </span>
//                     )}
//                     </Link>

//                     {/* Mobile Menu Toggle */}
//                     <button
//                     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                     className="md:hidden text-neutral-700 hover:text-primary-600 transition-colors"
//                     aria-label="Menu"
//                     >
//                     {isMobileMenuOpen ? (
//                         <X className="w-6 h-6" />
//                     ) : (
//                         <Menu className="w-6 h-6" />
//                     )}
//                     </button>
//                 </div>
//             </div>

//             {/* Search Bar */}
//             {isSearchOpen && (
//             <div className="py-4 animate-slide-up">
//                 <input
//                 type="search"
//                 placeholder="Search products..."
//                 className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20 transition-all"
//                 autoFocus
//                 />
//             </div>

//             )}

//             {/* Mobile Menu */}
//             {isMobileMenuOpen && (
//             <div className="md:hidden py-4 border-t border-neutral-200 animate-slide-up">
//                 <nav className="flex flex-col space-y-4">
//                 {navigation.map((item) => (
//                     <Link
//                     key={item.name}
//                     href={item.href}
//                     className="text-neutral-700 hover:text-primary-600 font-medium transition-colors"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                     {item.name}
//                     </Link>
//                 ))}
//                 <Link
//                     href="/wishlist"
//                     className="text-neutral-700 hover:text-primary-600 font-medium transition-colors sm:hidden"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                     Wishlist ({wishlistItems.length})
//                 </Link>
                
//                 <Link
//                     href={isAuthenticated ? '/account' : '/login'}
//                     className="text-neutral-700 hover:text-primary-600 font-medium transition-colors sm:hidden"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                     {isAuthenticated ? `Account (${user?.name})` : 'Login'}
//                 </Link>
//                 </nav>
//             </div>

//             )}
//         </div>
//         </header>
//     )
// }






