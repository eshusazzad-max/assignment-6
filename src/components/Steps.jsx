import userIcon from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";

const Steps = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Title */}
        <h1 className="text-4xl font-bold">
          Get Started In 3 Steps
        </h1>

        <p className="text-gray-500 mt-2">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">

          {/* Card 1 */}
          <div className="relative bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1">

            <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
              01
            </div>

            <div className="w-16 h-16 mx-auto bg-purple-100 text-purple-600 flex items-center justify-center rounded-full text-2xl">
             <img src={userIcon} className="w-8 h-8 opacity-80" />
            </div>

            <h3 className="mt-4 font-semibold text-lg">
              Create Account
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1">

            <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
              02
            </div>

            <div className="w-16 h-16 mx-auto bg-purple-100 text-purple-600 flex items-center justify-center rounded-full text-2xl">
              <img src={packageIcon} className="w-8 h-8 opacity-80" />
            </div>

            <h3 className="mt-4 font-semibold text-lg">
              Choose Products
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1">

            <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
              03
            </div>

            <div className="w-16 h-16 mx-auto bg-purple-100 text-purple-600 flex items-center justify-center rounded-full text-2xl">
              <img src={rocketIcon} className="w-8 h-8 opacity-80" />
            </div>

            <h3 className="mt-4 font-semibold text-lg">
              Start Creating
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Download and start using your premium 
              tools immediately.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Steps;