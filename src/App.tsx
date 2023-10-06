import { ItemListContainer } from "./components/item-list-container";
import { Navbar } from "./components/navbar";
import { Contador } from "./components/item-count";
import { ItemList } from "./components/item-list";
import { useEffect, useState } from "react";
import { ItemDetailContainer } from "./components/item-detail-container";
import produtos from "./data/produtos.json";
import { Loader2Icon } from "lucide-react";

type Item = (typeof produtos)[number];

function App() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    const handleGetCards = () => {
      return new Promise<Item[]>((resolve) => {
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

  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      {loading ? (
        <div className="flex-1 flex items-center justify-center">
          <Loader2Icon className="animate-spin h-8 w-8 " />
        </div>
      ) : (
        <>
          <div className="container mx-auto py-8">
            <ItemListContainer greeting="Bem vindo a loja CoderHouse!" />
          </div>
          <Contador
            initial={1}
            stock={5}
            onAdd={(amount) => {
              alert(`Adicionou ${amount} camisas ao carrinho`);
            }}
          />
          <ItemList items={items} />
        </>
      )}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
