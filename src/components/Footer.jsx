import fbIcon from "../assets/social-icon/facebook.png";
import instaIcon from "../assets/social-icon/instagram.png";
import twitterIcon from "../assets/social-icon/twitter (1).png";

const Footer = () => {
  return (
    <footer className="bg-[#0B1220] text-gray-400 pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-6 gap-10">

        
        <div className="md:col-span-2">
          <h2 className="text-white text-2xl font-bold">DigiTools</h2>
          <p className="mt-4 text-sm leading-relaxed">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Templates</li>
            <li className="hover:text-white cursor-pointer">Integrations</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Press</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Documentation</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Community</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Social Links</h3>

         <div className="flex gap-3">

          
          <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full cursor-pointer hover:scale-110 transition">
         <img src={fbIcon} className="w-4 h-4" />
         </div>

         
         <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full cursor-pointer hover:scale-110 transition">
         <img src={instaIcon} className="w-4 h-4" />
         </div>

        
         <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full cursor-pointer hover:scale-110 transition">
         <img src={twitterIcon} className="w-4 h-4" />
         </div>

         </div>
        </div>

      </div>

      {/* Bottom line */}
      <div className="border-t border-white/10 mt-12 pt-6 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-sm">

        <p>&copy; 2026 DigiTools. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
          <span className="hover:text-white cursor-pointer">Cookies</span>
        </div>

      </div>

    </footer>
  );
};

export default Footer;