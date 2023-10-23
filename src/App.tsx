import { CartProvider } from "./contexts/cart-context";
import { Routers } from "./router";

function App() {
  return (
    <CartProvider>
      <Routers />;
    </CartProvider>
  );
}

export default App;
