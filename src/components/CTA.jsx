const CTA = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-500 py-20 text-center text-white">

      <div className="max-w-3xl mx-auto px-6">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold">
          Ready To Transform Your Workflow?
        </h1>

        
        <p className="mt-4 text-sm md:text-base opacity-90">
          Join thousands of professionals who are already using DigiTools to work smarter.
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">

        
          <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-medium transition duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
            Explore Products
          </button>

          
          <button className="border border-white px-6 py-2 rounded-full transition duration-200 hover:-translate-y-1 hover:bg-white hover:text-purple-600 cursor-pointer">
            View Pricing
          </button>

        </div>

        {/* Bottom text */}
        <p className="mt-6 text-xs opacity-80">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </div>
  );
};

export default CTA;