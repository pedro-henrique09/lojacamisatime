import { CartWidget } from "./cart-widget";

export function Header() {
  return (
    <header className="bg-blue-600 md:flex shadow">
      <div className="container mx-auto  py-6 flex justify-between items-center">
        <a href="/">
          <h1 className="text-2xl font-bold text-black-600">CoderHouse Shop</h1>
        </a>

        <nav>
          <ul className="flex space-x-4 text-black-600">
            <li>
              <a href="/" className="hover:text-indigo-100">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-100">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-100">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-100">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <CartWidget />
      </div>
    </header>
  );
}
