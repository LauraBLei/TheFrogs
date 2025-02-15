import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { HomePage } from "./assets/pages/home";
import { ContactPage } from "./assets/pages/contact";
import { ProductPage } from "./assets/pages/product";
import { CartPage } from "./assets/pages/cart";
import { ConfirmationPage } from "./assets/pages/confirmation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
