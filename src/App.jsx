import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/ui/Navbar";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import ProductList from './components/ProductList';
import Cart from "./components/Cart";
import { CartProvider } from "./Pages/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

