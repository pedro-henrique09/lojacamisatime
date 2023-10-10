import { useParams } from "react-router-dom";
import produtos from "../../data/produtos.json";

import { ItemDetail } from "../../components/item-detail";
import { useEffect, useState } from "react";
import { wait } from "../../util/wait";
import { Product } from "../../types/product";
import { ItemDetailContainer } from "../../components/item-detail-container";
import { Loader2Icon } from "lucide-react";

const ProductPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState<Product>();

  useEffect(() => {
    async function getItem() {
      setLoading(true);
      await wait(2000);
      const product = produtos.find((produto) => {
        return produto.id.toString() === id;
      });
      setItem(product);
      setLoading(false);
    }

    getItem();
  }, [id]);
  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <Loader2Icon className="animate-spin h-8 w-8 " />
      </div>
    );
  }

  if (item === undefined) {
    return null;
  }
  return (
    <ItemDetailContainer>
      <ItemDetail item={item} />
    </ItemDetailContainer>
  );
};

export default ProductPage;
