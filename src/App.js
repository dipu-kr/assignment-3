import "./App.css";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import OrderConfirm from "./components/OrderConfirm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<OrderConfirm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
