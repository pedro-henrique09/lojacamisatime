import { ShoppingCartIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/cart-context";

export function CartWidget() {
  const cart = useCart();
  return (
    <div className="">
      <Link
        className={`relative ${cart.items.length === 0 ? "hidden" : "block"}`}
        to={"/cart"}
      >
        <ShoppingCartIcon className="h-5 w-5" />
        <span className="bg-red-500 w-4 h-4 absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 text-white text-xs font-semibold rounded-2xl flex items-center justify-center ">
          {cart.items.length}
        </span>
      </Link>
    </div>
  );
}
