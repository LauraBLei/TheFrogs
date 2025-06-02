# 🐸 The Frogs – React eCommerce Store

**The Frogs** is a fully functional eCommerce store built using React and powered by the [Noroff Online Shop API](https://v2.api.noroff.dev/online-shop). The project was created as part of a learning assignment to demonstrate practical React skills, including routing, state management, form validation, and responsive design.

---

## 🚀 Features

- 🏠 **Homepage** with a searchable list of products
- 🔍 **Live search bar** with look-ahead filtering
- 📦 **Product detail pages** with full info, reviews, and price logic
- 🛒 **Cart functionality** with add/remove actions and checkout flow
- ✅ **Checkout success page** with confirmation and cart reset
- 📬 **Contact page** with form validation
- 🌐 **Client-side routing** with React Router
- 🧱 **Responsive design** using Tailwind CSS

---

## 📸 Pages

### 🏠 Homepage
- Lists all products from the API
- Includes a live search input that filters products by title, tag, or description

### 📄 Product Page
- Shows individual product details, including:
  - Title, description, image
  - Reviews (if available)
  - Discounted price and calculated discount percentage (if applicable)
- "Add to Cart" functionality

### 🛒 Cart Page
- Displays items in the cart
- Shows subtotal price
- Checkout button that leads to the success page

### ✅ Checkout Success Page
- Shows confirmation message
- Link to return to the homepage
- Clears cart upon load

### 📞 Contact Page
- Form with validation for:
  - Full Name (min 3 characters)
  - Subject (min 3 characters)
  - Email (valid format)
  - Message body (min 3 characters)

---

## 📦 API

All product data is retrieved from the [Noroff Online Shop API](https://v2.api.noroff.dev/online-shop). Individual products can be accessed using their ID:



---

## 🧰 Technologies Used

- **React**
- **React Router**
- **Tailwind CSS** (for styling)
- **Lucide Icons** (for icons)
- **TypeScript** (for type safety)
- **Context API** (for shared state like cart and products)

---

## 📂 Project Structure Highlights

- `components/` – Reusable UI components (Header, ProductCard, StarRating, etc.)
- `pages/` – Page-level views (Home, Product, Cart, etc.)
- `types/` – Type definitions for products, reviews, and context
- `utils/` – API handling, formatting, and helper functions

---

## ✅ Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/the-frogs.git
   cd the-frogs
