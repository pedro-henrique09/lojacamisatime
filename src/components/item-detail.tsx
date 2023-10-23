import { ItemCount } from "./item-count";
import Rating from "./rating";
import { Product } from "../types/product";

import { useCart } from "../contexts/cart-context";

interface ItemDetailProps {
  item: Product;
}

export function ItemDetail({ item }: ItemDetailProps) {
  const cart = useCart();
  const inCart = cart.isInCart(item.id);

  return (
    <div className="flex gap-4  ">
      <div className="grid place-content-start flex-1 grid-cols-2 md:grid-cols-4 gap-4">
        {item.imagemUrl.map((url) => {
          return (
            <div key={url} className="col-span-1   md:col-span-2">
              <div className="relative overflow-hidden rounded-md aspect-w-1 aspect-h-1">
                <img
                  className="object-cover w-full h-full"
                  src={url}
                  alt={item.nome}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="  flex-1 px-6 pb-6 rounded-lg shadow-md ">
        <h2 className="font-semibold mb-4 text-2xl">{item.nome}</h2>
        <Rating />
        <p className="text-xl font-semibold mt-4">R$ {item.preco}</p>
        <div className="my-4">
          <span>
            Até {item.installments}x de{" "}
            <b>{(item.preco / item.installments).toFixed(2)}</b> sem juros
          </span>
        </div>

        <div className="my-4">
          <h3 className="text-lg mt-4 font-sans">{item.description}</h3>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="size" className="mr-2 my-2  justify-center">
            Tamanho:
          </label>
          <select id="size" className="border mr-auto  p-2 text-sm rounded-md">
            {item.sizes.map((size) => {
              return (
                <option key={size} value={size}>
                  {size}
                </option>
              );
            })}
          </select>
        </div>

        {!inCart && (
          <div className="flex flex-col mb-4">
            <label htmlFor="amount" className="mr-2 my-2  justify-center">
              Quantidade:
            </label>
            <ItemCount
              initial={1}
              stock={item.stock}
              onAdd={(amount) => {
                cart.addItem({
                  id: item.id,
                  imageUrl: item.imagemUrl[0],
                  name: item.nome,
                  price: item.preco,
                  quantity: amount,
                });
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
