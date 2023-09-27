import { useState } from "react";

interface ContadorProps {
  stock: number;
  initial: number;
  onAdd: (amount: number) => void;
}

export function Contador({ initial, stock, onAdd }: ContadorProps) {
  const [count, setCount] = useState<number>(initial);

  function diminuir() {
    setCount((atual) => atual - 1);
    console.log("Diminuiu o produto");
  }

  function aumentar() {
    setCount((atual) => atual + 1);
    console.log("Aumentou o produto");
  }

  function addToCart() {
    onAdd(count);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-between w-20 m-auto p-1 rounded border border-solid border-black ">
        <div>
          <button
            disabled={count === 1}
            className="cursor-pointer flex items-center bg-transparent"
            type="button"
            onClick={diminuir}
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
            onClick={aumentar}
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={addToCart}
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold my-2 py-2 px-4 rounded"
        type="button"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}
