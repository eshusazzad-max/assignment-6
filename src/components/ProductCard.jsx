 import { toast } from "react-toastify";
 import camera from "../assets/icon/camera.png";
 import design from "../assets/icon/design-tool.png";
 import operation from "../assets/icon/operation.png";
 import portfolio from "../assets/icon/portfolio.png";
 import social from "../assets/icon/social-media.png";
 import writing from "../assets/icon/writing_2327400 1.png";
 import checkIcon from "../assets/icon/check-mark.png";

 const icons = {
  writing,
  design,
  camera,
  operation,
  portfolio,
  social,
};
 
  const ProductCard = ({ product, cart, setCart }) => {

  const tagColors = {
  yellow: "bg-yellow-100 text-yellow-600",
  blue: "bg-purple-100 text-purple-600",
  green: "bg-green-100 text-green-600",
  };
  const { name, description, price, period, tag, features } = product;

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1 cursor-pointer">

      {/* Tag */}
      <div className="flex justify-end">
        <span className={`text-xs px-2 py-1 rounded-full ${tagColors[product.tagType]}`}>
        {tag}
        </span>
      </div>

      {/* Icon */}
      <img src={icons[product.icon]} className="w-10 h-10 mb-2" />

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
      <ul className="mt-4 space-y-2 text-sm">
       {features.map((item, index) => (
        <li key={index} className="flex items-center gap-2">
      
          <img src={checkIcon} className="w-4 h-4 opacity-80" />
      
          <span className="text-gray-600">{item}</span>
        </li>
       ))}
      </ul>

      {/* Button */}
      <button
        onClick={() => {
          const exists = cart.find((item) => item.id === product.id);

         if (exists) {
          toast.error("Already in cart!");
         } else {
          setCart([...cart, product]);
          toast.success("Added to cart!");
         }
       }}
        className="mt-6 w-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-2 rounded-full transition duration-150 active:scale-95 active:translate-y-1  cursor-pointer">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;