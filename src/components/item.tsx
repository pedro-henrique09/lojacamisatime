import { Link } from "react-router-dom";

interface ItemProps {
  imagem: string;
  nome: string;
  preco: number;
  id: number;
}

export function Item(props: ItemProps) {
  return (
    <a href="#">
      <div className="flex  flex-col">
        <img className="rounded" src={props.imagem} alt={props.nome} />
        <h3 className="mt-4 font-bold">{props.nome}</h3>
        <p className="text-sm font-medium text-slate-600">
          R${props.preco.toFixed(2)}
        </p>
        <Link
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold my-2 py-2 px-4 rounded"
          to={`/product/${props.id}`}
        >
          Detalhes do produto
        </Link>
      </div>
    </a>
  );
}
