import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/ui/Navbar";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import LogOut from "./Pages/LogOut";
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
          <Route path="/logout" element={<LogOut />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

