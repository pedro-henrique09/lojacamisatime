import { Loader2Icon } from "lucide-react";
import { useState, useEffect } from "react";

import { ItemList } from "../../components/item-list";
import { ItemListContainer } from "../../components/item-list-container";

import { Input } from "../../components/input";
import { Product } from "../../types/product";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Product[]>([]);
  const [inputValue, setInputValue] = useState(" ");

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();

    const productsCollection = collection(db, "products");
    getDocs(productsCollection)
      .then((snapshot) => {
        setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .finally(() => {
        setLoading(false);
      });
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
