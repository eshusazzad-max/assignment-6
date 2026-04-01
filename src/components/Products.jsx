import products from "../data/products.json";
import ProductCard from "./ProductCard";
import { toast } from "react-toastify";

const Products = ({ cart, setCart, view, setView }) => {
  return (
  <div className="bg-gray-50 py-16">
      
   <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center">
          Premium Digital Tools
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>

    <div className="flex justify-center mt-6">
         <div className="flex bg-gray-100 rounded-full p-1">

          <button
            onClick={() => setView("products")}
            className={`px-5 py-2 rounded-full text-sm font-medium ${
            view === "products"
            ? "bg-gradient-to-r from-purple-600 to-indigo-500 text-white"
            : "text-gray-600"
           }`}
          >
            Products
          </button>

          <button
            onClick={() => setView("cart")}
            className={`px-5 py-2 rounded-full text-sm font-medium ${
            view === "cart"
            ? "bg-gradient-to-r from-purple-600 to-indigo-500 text-white"
            : "text-gray-600"
           }`}
          >
           Cart ({cart.length})
          </button>

         </div>
    </div>

      {view === "products" && (
    <div className="grid md:grid-cols-3 gap-6 mt-10">
      {products.map((product) => (
        <ProductCard 
          key={product.id}
          product={product}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </div>
      )}

      {view === "cart" && (
    <div className="mt-10 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow transition duration-300 hover:shadow-lg hover:-translate-y-1">

    <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

    {/* cart empty*/}
    {cart.length === 0 ? (
      <p className="text-gray-500">Cart is empty</p>
    ) : (
      <>
        {/* Cart Items */}
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center border p-3 rounded-lg">

              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>

              {/* Remove Button */}
             <button
               onClick={() => {
               setCart(cart.filter((_, i) => i !== index));
               toast.error("Item removed!");
              }}
              className="text-red-500 text-sm">
              Remove
             </button>

            </div>
          ))}
        </div>

        {/* Total */}
        <div className="flex justify-between mt-6 font-semibold">
          <span>Total:</span>
          <span>
            $
            {cart.reduce((total, item) => total + item.price, 0)}
          </span>
        </div>

        {/* Checkout */}
        <button
          onClick={() => {
          setCart([]);
          toast.success("Checkout complete!");
         }}
          className="mt-6 w-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-2 rounded-full">
          Proceed to Checkout
        </button>
      </>
    )}

    </div>
      )}

   </div>
  </div>
  );
};

export default Products;