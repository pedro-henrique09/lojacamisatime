import { Loader2Icon } from "lucide-react";
import { useState, useEffect } from "react";

import { ItemList } from "../../components/item-list";
import { ItemListContainer } from "../../components/item-list-container";
import produtos from "../../data/produtos.json";
import { Input } from "../../components/input";

type Product = (typeof produtos)[number];

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Product[]>([]);
  const [inputValue, setInputValue] = useState(" ");

  useEffect(() => {
    const handleGetCards = () => {
      return new Promise<Product[]>((resolve) => {
        setTimeout(() => {
          resolve(produtos);
        }, 2000);
      });
    };
    const onMount = async () => {
      setLoading(true);
      const result = await handleGetCards();
      setItems(result);
      setLoading(false);
    };
    onMount();
  }, []);
  const filtereditems = !inputValue.length
    ? items
    : items.filter((item) => {
        return item.nome.toLowerCase().includes(inputValue.toLowerCase());
      });
  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <Loader2Icon className="animate-spin h-8 w-8 " />
      </div>
    );
  }
  return (
    <>
      <Input value={inputValue} onChange={setInputValue} />

      <ItemListContainer greeting="Bem vindo a loja CoderHouse!" />

      <ItemList items={filtereditems} />
    </>
  );
};

export default Home;
