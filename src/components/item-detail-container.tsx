import { useState, useEffect } from "react";
import { ItemDetail } from "./item-detail";

export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  imagemUrl: string[];
  installments: number;
  sizes: string[];
}

const getItem = (): Promise<Item> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "MANTO FLAMENGO JOGO 1 2023",
        description:
          "A Camisa do Flamengo para 2023 é uma verdadeira obra-prima do design esportivo. Inspirada na paixão e na história rica do clube, esta camisa é uma fusão perfeita entre tradição e inovação. Com sua base rubro-negra icônica, esta camisa incorpora o orgulho e a identidade que os torcedores do Flamengo conhecem e amam.",
        price: 349.99,
        imagemUrl: [
          "https://static.netshoes.com.br/produtos/camisa-flamengo-i-2324-sn-torcedor-adidas-masculina/68/FB8-4631-068/FB8-4631-068_zoom1.jpg?ts=1695701573&ims=544x",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/00ff5c5cd3af4731b432af7900fcab9f_9366/Camisa_1_CR_Flamengo_23-24_Vermelho_HS5184_21_model.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/994059177c134ea583d4af7900fcb5d0_9366/Camisa_1_CR_Flamengo_23-24_Vermelho_HS5184_23_hover_model.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2f9fdb35764b480db8daaf7900fcc034_9366/Camisa_1_CR_Flamengo_23-24_Vermelho_HS5184_25_model.jpg",
        ],
        installments: 10,
        sizes: ["P", "M", "G", "GG"],
      });
    }, 2000);
  });
};
export function ItemDetailContainer() {
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    getItem().then((result) => {
      setItem(result);
    });
  }, []);

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Carregando detalhe do item...</p>}
    </div>
  );
}
