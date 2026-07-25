// import React from 'react'

// export default function Blog() {
//     return (
//         <div className='max-h-screen bg-gradient-to-br from-gray-900 via-gray-900/20 to-grey-900 relative overflow-hidden pt-32 md:pt-55 lg:pt-115'>
//             <div className="relative z-10 flex item-center justify-center min-h-screen px-8 pt-4 md:pt-16 lg:pt-20 py-8">
//                 <div className="max-w-5xl w-full text-center space-y-2 md:space-y-4 lg:space-y-6">

//                 </div>
//             </div>
//         </div>
//     )
// }




    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-gray-700 bg-white py-2.5 border-b border-gray-100 flex justify-center items-center sm:text-sm md:text-xl lg:text-2xl font-bold"> Welcome to your number one online commerce</h2>
    </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-3 lg:py-4">
                <Link href="/" className="sm:hidden text-2xl font-bold text-gray-900 md:block">E-Shop</Link>

                <div className="flex items-center space-x-4">
                    <button className='md:hidden'>
                        <Link href="/cart" className="text-gray-700 hover:text-gray-900">
                        <Search size={14} />
                        </Link>
                    </button>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-black">
                        {isMobileMenuOpen ? <X size={18} /> : < Equal size={18} />}
                    </button>
                    <Link href="/" className="md:hidden text-2xl absolute left-1/2 -translate-x-1/2 font-bold text-gray-900 ">E-Shop</Link>
                </div>

                <nav className="hidden md:flex space-x-8">
                    <Link href="/" className="text-black hover:text-gray-600 transition text-sm ">Home</Link>
                    <Link href="/catalog" className="text-black hover:text-gray-600 transition text-sm">Catalog </Link>
                    <Link href="/contact" className="text-sm text-black hover:text-gray-600 transition"> Contact</Link>
                    <Link href="/products" className="text-gray-700 hover:text-gray-900">Products</Link>
                    <Link href="/cart" className="text-gray-700 hover:text-gray-900">Cart</Link>
                    <Link href="/profile" className="text-gray-700 hover:text-gray-900">Profile</Link>
                </nav>
                <div className="flex items-center space-x-4">
                    <Link href="/cart" className="hidden md:block text-gray-700 hover:text-gray-900">
                    <Search size={14} />
                    </Link>
                    <Link href="/profile" className="text-gray-700 hover:text-gray-900">
                    <User size={16} />
                    </Link>
                    <Link href="/cart" className="text-gray-700 hover:text-gray-900">
                    <ShoppingCart size={16} />
                    </Link>
                </div>
                </div>
                {isMobileMenuOpen && (
                <div className="md:hidden pb-6 pt-5">
                    <nav className="flex flex-col space-y-4">
                    <Link href="/" className="text-black hover:text-gray-600 transition text-sm ">Home</Link>
                    <Link href="/profile" className="text-gray-700 hover:text-gray-900">Profile</Link>
                    <Link href="/products" className="text-gray-700 hover:text-gray-900">Products</Link>
                    {/* <Link href="/cart" className="text-gray-700 hover:text-gray-900">Cart</Link> */}
                    <Link href="/catalog" className="text-black hover:text-gray-600 transition text-sm">Catalog </Link>
                    <Link href="/contact" className="text-sm text-black hover:text-gray-600 transition"> Contact</Link>
                    </nav>
                </div>
                )}
            </div>




'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingBag, Heart, User, Menu, X, Search } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import { useWishlistStore } from '@/store/wishlist'
import { useAuthStore } from '@/store/auth'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  
  const totalItems = useCartStore(state => state.getTotalItems())
  const wishlistItems = useWishlistStore(state => state.items)
  const { isAuthenticated, user } = useAuthStore()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Shop All', href: '/shop' },
    { name: 'Categories', href: '/categories' },
    { name: 'New Arrivals', href: '/new' },
    { name: 'Sale', href: '/sale' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm' 
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-primary-600 hover:text-primary-700 transition-colors flex-shrink-0"
          >
            Artisan
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-1 justify-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm lg:text-base text-neutral-700 hover:text-primary-600 font-medium transition-colors relative group whitespace-nowrap"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6 flex-shrink-0">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-neutral-700 hover:text-primary-600 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative text-neutral-700 hover:text-primary-600 transition-colors hidden sm:block"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {/* User Account */}
            <Link
              href={isAuthenticated ? '/account' : '/login'}
              className="text-neutral-700 hover:text-primary-600 transition-colors hidden sm:block"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative text-neutral-700 hover:text-primary-600 transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-neutral-700 hover:text-primary-600 transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-neutral-200 animate-slide-up">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-neutral-400" />
              </div>
              <input
                type="search"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20 transition-all"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200 animate-slide-up">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-700 hover:text-primary-600 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/wishlist"
                className="text-neutral-700 hover:text-primary-600 font-medium transition-colors sm:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Wishlist ({wishlistItems.length})
              </Link>
              <Link
                href={isAuthenticated ? '/account' : '/login'}
                className="text-neutral-700 hover:text-primary-600 font-medium transition-colors sm:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {isAuthenticated ? `Account (${user?.name})` : 'Login'}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}