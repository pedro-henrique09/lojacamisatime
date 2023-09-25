import { ItemListContainer } from "./components/item-list-container";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <ItemListContainer greeting="Bem vindo a loja CoderHouse!" />
      </div>
    </>
  );
}

export default App;
