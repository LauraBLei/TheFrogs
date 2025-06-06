import { SearchIcon, ShoppingCart } from "lucide-react";
import { ChangeEvent, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductsContext } from "../types/product";

/**
 * Header component for the application.
 *
 * Renders the navigation bar with logo, search input, cart icon, and page links.
 * Integrates product filtering functionality based on user search input.
 *
 * @component
 */

/**
 * Handles the product search input change event.
 *
 * Navigates to the search page and filters the product list
 * by matching the search input against product tags, title, or description.
 *
 * @param {ChangeEvent<HTMLInputElement>} e - The input change event from the search field.
 */
export const Header = () => {
  const { cart, isOpen, setIsOpen, products, setSearch } =
    useContext(ProductsContext);
  const navigate = useNavigate();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value.toLowerCase();
    navigate("/search");

    const searchList = products.filter((product) => {
      return (
        product.tags.includes(search) ||
        product.description.toLowerCase().includes(search) ||
        product.title.toLowerCase().includes(search)
      );
    });

    setSearch(searchList);
  };
  return (
    <header
      className="w-full md:mb-10 sticky top-0 bg-brand-purple z-50 p-2
    "
    >
      <nav className="flex items-center justify-center w-full gap-2 md:gap-5 md:my-5 flex-wrap">
        <div>
          <img
            className="hidden md:block absolute left-0 top-0"
            src="/theFrogsLogo.png"
            alt=""
          />
        </div>
        <div className="flex items-center justify-between md:justify-evenly w-full md:w-auto gap-5 px-5">
          <div>
            <form
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full bg-brand-black p-4 group cursor-pointer relative flex items-center"
              {...(isOpen ? { open: true } : {})}
            >
              <SearchIcon className="z-50 text-brand-white hover-effect" />
              <input
                className=" group-open:z-40 px-0 group-open:pr-4 w-0 group-open:w-[250px] md:group-open:w-[500px] group-open:pl-12 py-4 text-brand-white transition-all ease-in-out duration-300 transform rounded-full  group-open:ml-[-14px] cursor-text absolute bg-brand-black "
                type="search"
                name="q"
                id="q"
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => handleSearch(e)}
              />
            </form>
          </div>
          <Link to={"/cart"} className="relative">
            <ShoppingCart className="text-brand-black w-10 h-10 hover-effect" />
            {cart.length > 0 && (
              <div className="bg-brand-black rounded-full text-brand-white text-center absolute w-6 h-6 right-0 mt-[-15px] mr-[-10px]">
                {cart.length}
              </div>
            )}
          </Link>
        </div>
        <ul className="flex justify-center items-center gap-4 text-lg md:text-2xl font-bold text-brand-black">
          <li className="hover-effect">
            <Link to="/">Home</Link>
          </li>
          <li className="hover-effect">
            <Link to="/about">About us</Link>
          </li>
          <li className="hover-effect">
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
