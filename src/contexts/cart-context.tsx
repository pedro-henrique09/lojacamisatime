import { createContext, useState, useContext } from "react";

interface CartItem {
  name: string;
  quantity: number;
  price: number;
  imageUrl: string;
  id: number;
  size: string;
}

interface CartContextProps {
  items: CartItem[];
  addItem(item: CartItem): void;
  removeItem(itemId: CartItem["id"]): void;
  clear(): void;
  isInCart(id: CartItem["id"]): boolean;
  updateQuantity(itemId: CartItem["id"], quantity: number): void;
}

const CartContext = createContext<CartContextProps | null>(null);

interface ICartProviderProps {
  children: React.ReactNode;
}

export function CartProvider({ children }: ICartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem(item) {
          setItems((current) => {
            return [...current, item];
          });
        },
        removeItem(itemId) {
          setItems((current) => {
            return current.filter((item) => item.id !== itemId);
          });
        },
        clear() {
          setItems([]);
        },
        isInCart(id) {
          return items.some((item) => item.id === id);
        },
        updateQuantity(itemId, quantity) {
          const itemIndex = items.findIndex((item) => {
            return item.id === itemId;
          });
          if (itemIndex !== -1) {
            const before = items.slice(0, itemIndex);
            const after = items.slice(itemIndex + 1);
            setItems([...before, { ...items[itemIndex], quantity }, ...after]);
          }
        },
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) {
    throw new Error();
  }
  return cart;
}
