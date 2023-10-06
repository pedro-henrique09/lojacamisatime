import { Item } from "./item-detail-container";
import Rating from "./star-avaliation";

interface ItemDetailProps {
  item: Item;
}

export function ItemDetail({ item }: ItemDetailProps) {
  return (
    <div className="grid grid-cols-2 gap-4 min-h-screen m-6 items-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {item.imagemUrl.map((url) => {
          return (
            <div key={url} className="col-span-1 md:col-span-2">
              <div className="relative overflow-hidden rounded-md aspect-w-1 aspect-h-1">
                <img
                  className="object-cover w-full h-full"
                  src={url}
                  alt={item.name}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className=" bg-gray-200 p-6 rounded-lg shadow-md ">
        <h2 className="font-semibold mb-4 text-2x1">{item.name}</h2>
        <p className="text-xl mt-4">R$: {item.price}</p>
        <div className="my-4">
          <span>
            Até {item.installments}x de{" "}
            <b>{(item.price / item.installments).toFixed(2)}</b> sem juros
          </span>
        </div>

        <div className="my-4">
          <h3 className="text-lg mt-4 font-sans">{item.description}</h3>
        </div>
        <div className="flex mb-4">
          <label htmlFor="size" className="mr-2 my-2  justify-center">
            Tamanho:
          </label>
          <select id="size" className="border  p-2 text-sm rounded-md">
            {item.sizes.map((size) => {
              return (
                <option key={size} value={size}>
                  {size}
                </option>
              );
            })}
          </select>
        </div>

        <div className="min-h-screen flex items-center  justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold mb-4">Item para Avaliar</h1>
            <Rating />
          </div>
        </div>
      </div>
    </div>
  );
}
