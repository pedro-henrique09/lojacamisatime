import { Loader2Icon } from "lucide-react";
import { useState, useEffect } from "react";

import { ItemList } from "../../components/item-list";
import { ItemListContainer } from "../../components/item-list-container";
import produtos from "../../data/produtos.json";

type Product = (typeof produtos)[number];

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Product[]>([]);
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
  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <Loader2Icon className="animate-spin h-8 w-8 " />
      </div>
    );
  }
  return (
    <>
      <ItemListContainer greeting="Bem vindo a loja CoderHouse!" />

      <ItemList items={items} />
    </>
  );
};

export default Home;
