import { Product } from "../types/product";
import { Item } from "./item";

interface ItemListProps {
  items: Product[];
}

const ItemList: React.FC<ItemListProps> = (props) => {
  return (
    <div className="container mx-auto ">
      <h2 className="text-xl font-bold">Lista de Itens</h2>
      <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {props.items.map((item) => (
          <Item key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export { ItemList };
