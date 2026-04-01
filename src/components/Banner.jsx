
import bannerImg from "../assets/banner.png";
import { FiPlay } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-10">

        
        <div>

          {/* Badge  */}
          <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full 
        bg-purple-200 text-purple-800 text-sm font-medium mb-6">

            <span className="relative flex items-center justify-center w-6 h-6">

              <span className="absolute w-6 h-6 rounded-full bg-purple-600 opacity-20">
              </span>

             <span className="absolute w-4 h-4 rounded-full bg-purple-700 opacity-60">
             </span>

             <span className="w-2.5 h-2.5 bg-purple-900 rounded-full"></span>

            </span>

            New: AI-Powered Tools Available
          </span>

          {/* Heading  */}

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
            Supercharge Your <br /> Digital Workflow
          </h1>

          
          
          <p className="text-gray-500 text-lg mb-8 max-w-xl">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore Products
          </p>

          {/* Buttons  */}
           <div className="flex items-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-3 rounded-full font-medium 
             transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:opacity-90">
              Explore Products
            </button>

            
             <button className="border border-purple-500 text-purple-600 px-7 py-3 rounded-full flex items-center gap-3 
             transition-all duration-300 transform hover:-translate-y-1 hover:bg-purple-50 hover:shadow-md">
             <FiPlay className="text-sm" />
              Watch Demo
            </button>

          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <img
            src={bannerImg}
            alt="banner"
            className="rounded-xl w-full max-w-lg"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;