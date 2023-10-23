import { useState } from "react";

interface ItemCountProps {
  stock: number;
  initial: number;
  onAdd: (amount: number) => void;
}

export function ItemCount({ initial, stock, onAdd }: ItemCountProps) {
  const [count, setCount] = useState(initial);

  function decrease() {
    setCount((atual) => atual - 1);
    console.log("Diminuiu o produto");
  }

  function increase() {
    setCount((atual) => atual + 1);
    console.log("Aumentou o produto");
  }

  function addToCart() {
    onAdd(count);
  }

  return (
    <div className="flex flex-col ">
      <div className="flex items-center justify-between w-20 mr-auto p-1 rounded border border-solid border-black ">
        <div>
          <button
            disabled={count === 1}
            className="cursor-pointer flex items-center bg-transparent"
            type="button"
            onClick={decrease}
          >
            -
          </button>
        </div>
        <span>{count}</span>
        <div>
          <button
            disabled={count === stock}
            className="cursor-pointer flex items-center bg-transparent"
            typeof="button"
            onClick={increase}
          >
            +
          </button>
        </div>
      </div>
      <p className="text-sm text-zinc-500 mt-1 ">
        Quantidade disponivel: {stock}
      </p>
      <button
        onClick={addToCart}
        className="bg-indigo-500  mt-8 hover:bg-indigo-600 text-white font-bold my-2 py-2 px-4 rounded"
        type="button"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}
