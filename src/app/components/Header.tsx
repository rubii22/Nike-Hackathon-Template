import Link from "next/link";

const Header = () => {
  return (
    <header>
      {/* Top Header */}
      <div className="bg-gray-100 text-black text-sm px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          
          <img src="/logo1.png" alt="Logo" className="w-6 h-6" />
        </div>
        <div className="hidden md:flex items-center space-x-4">
        
          <Link href="/findstore" className="hover:underline">
            Find a Store
          </Link>
          <span>|</span>
          <Link href="/help" className="hover:underline">
            Help
          </Link>
          <span>|</span>
          <Link href="/join" className="hover:underline">
            Join Us
          </Link>
          <span>|</span>
          <Link href="/signin" className="hover:underline">
            Sign In
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white text-gray-800 px-4 py-2 border-b border-gray-300">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div>
            <img src="/logo.png" alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
          </div>

          {/* Center: Navbar Links */}
          <nav className="hidden lg:flex space-x-4 sm:space-x-6 text-sm">
            <Link href="/" className="hover:text-gray-500">
              New & Featured
            </Link>
            <Link href="/allproducts" className="hover:text-gray-500">
              Men
            </Link>
            <Link href="/allproducts" className="hover:text-gray-500">
              Women
            </Link>
            <Link href="/allproducts" className="hover:text-gray-500">
              Kids
            </Link>
            <Link href="/sales" className="hover:text-gray-500">
              Sale
            </Link>
            <Link href="/allproducts" className="hover:text-gray-500">
              SNKRS
            </Link>
          </nav>

          {/* Right: Search Bar and Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative hidden md:block w-40">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-8 pr-3 py-1 rounded-full border border-gray-300 focus:outline-none focus:border-black text-sm"
              />
              <img
                src="/searchicon.png"
                alt="Search Icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4"
              />
            </div>

            {/* Icons */}
            <button>
              <img src="/heart.png" alt="wishlist" className="h-5 w-5" />
            </button>
            <button>
              <img src="/cart.png" alt="shoppingcart" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="bg-white border-t border-gray-300 flex justify-around items-center text-sm lg:hidden py-2">
        <Link href="/" className="hover:text-gray-500">
          Home
        </Link>
        <Link href="/allproducts" className="hover:text-gray-500">
          Men
        </Link>
        <Link href="/allproducts" className="hover:text-gray-500">
          Women
        </Link>
        <Link href="/sales" className="hover:text-gray-500">
          Sale
        </Link>
        <Link href="/allproducts" className="hover:text-gray-500">
          SNKRS
        </Link>
      </div>
    </header>
  );
};

export default Header;
