interface ItemProps {
  imagem: string;
  nome: string;
  preco: number;
  id: number;
}

export function Item(props: ItemProps) {
  return (
    <a href="#">
      <div className="flex flex-col">
        <img className="rounded" src={props.imagem} alt={props.nome} />
        <h3 className="mt-4 font-bold">{props.nome}</h3>
        <p className="text-sm font-medium text-slate-600">
          R${props.preco.toFixed(2)}
        </p>
      </div>
    </a>
  );
}
