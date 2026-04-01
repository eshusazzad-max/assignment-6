import cartIcon from "../assets/shopping-cart.png";

const Navbar = ({ cart }) => {
  
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-600">
          DigiTools
        </h1>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 text-sm font-medium">
          <a className="hover:text-purple-600 cursor-pointer">Products</a>
          <a className="hover:text-purple-600 cursor-pointer">Features</a>
          <a className="hover:text-purple-600 cursor-pointer">Pricing</a>
          <a className="hover:text-purple-600 cursor-pointer">Testimonials</a>
          <a className="hover:text-purple-600 cursor-pointer">FAQ</a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* Cart */}
          <div className="relative cursor-pointer">
           <img src={cartIcon} alt="cart" className="w-5 h-5" />

           <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-[10px] px-1.5 rounded-full">
           {cart.length}
           </span>
          </div>

          {/* Login */}
          <button className="text-gray-600 text-sm font-medium">
            Login
          </button>

          {/* Button */}
          <button className="bg-purple-600 text-white text-sm px-5 py-2 rounded-full hover:bg-purple-700 transition">
            Get Started
          </button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;