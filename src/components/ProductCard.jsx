 const ProductCard = ({ product, cart, setCart }) => {
  const { name, description, price, period, tag, features } = product;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border hover:shadow-md transition">

      {/* Tag */}
      <div className="flex justify-end">
        <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
          {tag}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold mt-2">{name}</h2>

      {/* Description */}
      <p className="text-sm text-gray-500 mt-2">{description}</p>

      {/* Price */}
      <h3 className="text-xl font-bold mt-4">
        ${price}
        <span className="text-sm text-gray-500">/{period}</span>
      </h3>

      {/* Features */}
      <ul className="mt-4 space-y-1 text-sm text-gray-600">
        {features.map((item, index) => (
          <li key={index}>✔ {item}</li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={() => setCart([...cart, product])}
        className="mt-6 w-full bg-gradient-to-r from-purple-600 to-indigo-500  text-white py-2 rounded-full hover:opacity-90">
         Buy Now
      </button>
    </div>
  );
};

export default ProductCard;