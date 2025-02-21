import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full">
      <nav className="flex items-center justify-center w-full">
        <ul className="flex justify-center items-center gap-4 text-2xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
        <div>
          <input type="search" name="q" />
          <div></div>
          <div className="close-search">x</div>
        </div>
      </nav>
    </header>
  );
};
