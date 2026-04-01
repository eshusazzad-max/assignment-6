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
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold">Starter</h3>
            <p className="text-gray-500 text-sm mt-1">Perfect for getting started</p>

            <h2 className="text-3xl font-bold mt-4">$0<span className="text-sm text-gray-500">/Month</span></h2>

            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>✔ Access to 10 free tools</li>
              <li>✔ Basic templates</li>
              <li>✔ Community support</li>
              <li>✔ 1 project per month</li>
            </ul>

            <button className="mt-6 w-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-2 rounded-full">
              Get Started Free
            </button>
          </div>

          {/* Pro (highlight) */}
          <div className="relative bg-gradient-to-r from-purple-600 to-indigo-500 text-white p-8 rounded-xl shadow-lg">

            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-300 text-xs px-3 py-1 rounded-full">
              Most Popular
            </span>

            <h3 className="text-lg font-semibold">Pro</h3>
            <p className="text-sm mt-1 opacity-80">Best for professionals</p>

            <h2 className="text-3xl font-bold mt-4">$29<span className="text-sm">/Month</span></h2>

            <ul className="mt-6 space-y-2 text-sm">
              <li>✔ Access to all premium tools</li>
              <li>✔ Unlimited templates</li>
              <li>✔ Priority support</li>
              <li>✔ Unlimited projects</li>
              <li>✔ Cloud sync</li>
              <li>✔ Advanced analytics</li>
            </ul>

            <button className="mt-6 w-full bg-white text-purple-600 py-2 rounded-full font-medium">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold">Enterprise</h3>
            <p className="text-gray-500 text-sm mt-1">For teams and businesses</p>

            <h2 className="text-3xl font-bold mt-4">$99<span className="text-sm text-gray-500">/Month</span></h2>

            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>✔ Everything in Pro</li>
              <li>✔ Team collaboration</li>
              <li>✔ Custom integrations</li>
              <li>✔ Dedicated support</li>
              <li>✔ SLA guarantee</li>
              <li>✔ Custom branding</li>
            </ul>

            <button className="mt-6 w-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-2 rounded-full">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pricing;