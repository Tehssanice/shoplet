import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from "./components/Navbarr";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import useCartItems from "./components/useCartItems";
import useFetch from "./components/useFetch";

function App() {
  const { data: products } = useFetch("https://fakestoreapi.com/products");

  const { cart, handleClick } = useCartItems();

  return (
    <BrowserRouter>
      <div className="App">
        <Navbarr handleClick={handleClick} cart={cart} items={products} />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
