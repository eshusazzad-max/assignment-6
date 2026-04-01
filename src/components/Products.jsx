import products from "../data/products.json";
import ProductCard from "./ProductCard";

const Products = ({ cart, setCart, view, setView }) => {
  return (
  <div className="bg-gray-50 py-16">
      
   <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-3xl font-bold text-center">
          Premium Digital Tools
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Choose from our curated collection of premium digital products
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
    <div className="mt-10 text-center">
    <h2 className="text-xl font-semibold">Cart is empty</h2>
    </div>
      )}

   </div>
  </div>
  );
};

export default Products;