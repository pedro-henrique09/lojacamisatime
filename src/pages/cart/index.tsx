import { useCart } from "../../contexts/cart-context";

const Cart = () => {
  const cart = useCart();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Carrinho de Compras</h1>
      <div className="bg-white p-4 rounded shadow">
        {cart.items.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-16 h-16 object-cover"
              />
              <div className="ml-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p>R$ {item.price}</p>
              </div>
            </div>
            <div className="flex items-center">
              <button
                disabled={item.quantity === 1}
                onClick={() => cart.updateQuantity(item.id, item.quantity - 1)}
                className="px-2 py-1 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full"
              >
                -
              </button>
              <span className="px-2">{item.quantity}</span>
              <button
                onClick={() => cart.updateQuantity(item.id, item.quantity + 1)}
                className="px-2 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full"
              >
                +
              </button>
              <button
                onClick={() => cart.removeItem(item.id)}
                className="ml-4 text-red-600 hover:text-red-800"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
        <div className="mt-4">
          <p className="text-lg font-semibold">
            Total: R${" "}
            {cart.items.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </p>
        </div>
      </div>
      {cart.items.length > 0 && (
        <button
          onClick={cart.clear}
          className="mt-4 bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded-full"
        >
          Limpar Carrinho
        </button>
      )}
    </div>
  );
};

export default Cart;
