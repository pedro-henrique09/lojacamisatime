import { Link } from "react-router-dom";
import { Product } from "../types/product";

interface ItemProps {
  product: Product;
}
export function Item(props: ItemProps) {
  return (
    <div className="flex  flex-col">
      <img
        className="rounded"
        src={props.product.imagemUrl[0]}
        alt={props.product.nome}
      />
      <h3 className="mt-4 font-bold">{props.product.nome}</h3>
      <p className="text-sm font-medium text-slate-600">
        R${props.product.preco.toFixed(2)}
      </p>
      <Link
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold my-2 py-2 px-4 rounded"
        to={`/product/${props.product.id}`}
      >
        Detalhes do produto
      </Link>
    </div>
  );
}
