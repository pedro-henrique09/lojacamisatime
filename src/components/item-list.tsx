import { Item } from "./item";

interface ItemListProps {
  items: {
    imagem: string;
    nome: string;
    preco: number;
    id: number;
  }[];
}

const ItemList: React.FC<ItemListProps> = (props) => {
  return (
    <div className="container mx-auto ">
      <h2 className="text-xl font-bold">Lista de Itens</h2>
      <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {props.items.map((item) => (
          <Item
            key={item.id}
            imagem={item.imagem}
            nome={item.nome}
            preco={item.preco}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export { ItemList };
