import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { HomePage } from "./pages/home";
import { ContactPage } from "./pages/contact";
import { ProductPage } from "./pages/product";
import { CartPage } from "./pages/cart";
import { ConfirmationPage } from "./pages/confirmation";
import { AboutPage } from "./pages/about";
import { Layout } from "./components/layout";
import { ProductProvider } from "./context/products";

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
