import { ItemListContainer } from "./components/item-list-container";
import { Navbar } from "./components/navbar";
import { Contador } from "./components/item-count";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <ItemListContainer greeting="Bem vindo a loja CoderHouse!" />
      </div>
      <Contador
        initial={1}
        stock={5}
        onAdd={(amount) => {
          alert(`Adicionou ${amount} camisas ao carrinho`);
        }}
      />
    </>
  );
}

export default App;
