import { useParams } from "react-router-dom";

import { ItemDetail } from "../../components/item-detail";
import { useEffect, useState } from "react";

import { Product } from "../../types/product";
import { ItemDetailContainer } from "../../components/item-detail-container";
import { Loader2Icon } from "lucide-react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ProductPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState<Product>();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();

    const productRef = doc(db, "products", String(id));
    getDoc(productRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setItem({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .finally(() => {
        setLoading(false);
      });
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
