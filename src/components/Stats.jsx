const Stats = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-500 py-12">
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 text-center text-white items-center">

        {/* Item 1 */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">50K+</h2>
          <p className="mt-2 text-sm opacity-90">Active Users</p>
        </div>

        {/* Item 2 */}
        <div className="border-y md:border-y-0 md:border-x border-white/30 py-6 md:py-0">
          <h2 className="text-3xl md:text-4xl font-bold">200+</h2>
          <p className="mt-2 text-sm opacity-90">Premium Tools</p>
        </div>

        {/* Item 3 */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">4.9</h2>
          <p className="mt-2 text-sm opacity-90">Rating</p>
        </div>

      </div>
    </div>
  );
};

export default Stats;