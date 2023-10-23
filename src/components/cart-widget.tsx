import { ShoppingCartIcon } from "lucide-react";
import { Link } from "react-router-dom";

export function CartWidget() {
  return (
    <Link to={"/cart"}>
      <ShoppingCartIcon className="h-5 w-5" />
    </Link>
  );
}
