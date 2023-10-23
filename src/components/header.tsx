import { Link } from "react-router-dom";
import { CartWidget } from "./cart-widget";

export function Header() {
  return (
    <header className="bg-blue-600 md:flex shadow">
      <div className="container mx-auto  py-6 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold text-black-600">CoderHouse Shop</h1>
        </Link>

        <nav>
          <ul className="flex space-x-4 text-black-600">
            <li>
              <Link to="/" className="hover:text-indigo-100">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-indigo-100">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-indigo-100">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-indigo-100">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <CartWidget />
      </div>
    </header>
  );
}
