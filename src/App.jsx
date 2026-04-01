import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Products from "./components/Products";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");

  return (
    <>
      <Navbar cart={cart} />
      <Banner />
      <Stats />
       <Products 
        cart={cart} 
        setCart={setCart}
        view={view}
        setView={setView}
       />
       <Steps/>
       <Pricing/>
       <CTA/>
       <Footer/>
       <ToastContainer/>
    </>
  );
}

export default App;