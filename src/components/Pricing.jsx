import checkIcon from "../assets/icon/check-mark (1).png";

const Pricing = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Title */}
        <h1 className="text-3xl font-bold">
          Simple, Transparent Pricing
        </h1>

        <p className="text-gray-500 mt-2">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">

          {/* Starter */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 flex flex-col justify-between h-full cursor-pointer">
            
            <h3 className="text-4xl font-semibold">Starter</h3>
            <p className="text-gray-500 text-sm mt-1">Perfect for getting started</p>

            <h2 className="text-4xl font-bold mt-4">$0<span className="text-sm text-gray-500">/Month</span></h2>

            <ul className="mt-6 space-y-2 text-sm text-gray-600">

               <li className="flex items-center gap-2">
               <img src={checkIcon} className="w-4 h-4" />
                Access to 10 free tools
               </li>

               <li className="flex items-center gap-2">
               <img src={checkIcon} className="w-4 h-4" />
                Basic templates
               </li>

               <li className="flex items-center gap-2">
               <img src={checkIcon} className="w-4 h-4" />
                Community support
               </li>

               <li className="flex items-center gap-2">
               <img src={checkIcon} className="w-4 h-4" />
                1 project per month
               </li>
            </ul>

            <button className="mt-6 w-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-2 rounded-full transition duration-200 hover:-translate-y-1 hover:scale-100 active:scale-95 active:translate-y-0 cursor-pointer">
              Get Started Free
            </button>
          </div>

          {/* Pro (highlight) */}
          <div className="relative bg-gradient-to-r from-purple-600 to-indigo-500 text-white p-8 rounded-xl shadow-lg hover:shadow-lg hover:-translate-y-1 transition duration-300   flex flex-col justify-between h-full cursor-pointer">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-100 text-yellow-600 text-xs px-4 py-1 rounded-full   shadow-sm">
             Most Popular
            </span>
            

            

            <h3 className="text-4xl font-semibold">Pro</h3>
            <p className="text-sm mt-1 opacity-80">Best for professionals</p>

            <h2 className="text-4xl font-bold mt-4">$29<span className="text-sm">/Month</span></h2>

            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex items-center gap-2">
              <img src={checkIcon} className="w-4 h-4" />
                Access to all premium tools
              </li>
              
              <li className="flex items-center gap-2">
              <img src={checkIcon} className="w-4 h-4" />
               Unlimited templates
              </li>

              <li className="flex items-center gap-2">
              <img src={checkIcon} className="w-4 h-4" />
               Priority support
              </li>

              <li className="flex items-center gap-2">
              <img src={checkIcon} className="w-4 h-4" />
               Unlimited projects
              </li>

              <li className="flex items-center gap-2">
              <img src={checkIcon} className="w-4 h-4" />
               Cloud sync
              </li>

              <li className="flex items-center gap-2">
              <img src={checkIcon} className="w-4 h-4" />
                Advanced analytics
              </li>

            </ul>

            <button className="mt-6 w-full bg-white text-purple-600 py-2 rounded-full font-medium transition duration-200 hover:-translate-y-1 hover:scale-100 active:scale-95 active:translate-y-0 cursor-pointer">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise */}
           <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 flex flex-col justify-between h-full cursor-pointer">
            <h3 className="text-4xl font-semibold">Enterprise</h3>
            <p className="text-gray-500 text-sm mt-1">For teams and businesses</p>

            <h2 className="text-4xl font-bold mt-4">$99<span className="text-sm text-gray-500">/Month</span></h2>

            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
               <img src={checkIcon} className="w-4 h-4" />
                Everything in Pro
               </li>

              <li className="flex items-center gap-2">
               <img src={checkIcon} className="w-4 h-4" />
                Team collaboration
              </li>

              <li className="flex items-center gap-2">
               <img src={checkIcon} className="w-4 h-4" />
                Custom integrations
              </li>

              <li className="flex items-center gap-2">
               <img src={checkIcon} className="w-4 h-4" />
               Dedicated support
              </li>

              <li className="flex items-center gap-2">
               <img src={checkIcon} className="w-4 h-4" />
                SLA guarantee
              </li>
              <li className="flex items-center gap-2">
               <img src={checkIcon} className="w-4 h-4" />
                Custom branding
              </li>
              
            </ul>

           <button className="mt-6 w-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-2 rounded-full transition duration-200 hover:-translate-y-1 hover:scale-100 active:scale-95 active:translate-y-0 cursor-pointer">
             Contact Sales
           </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pricing;