import "./App.css";
import NavBar from "./components/navbar/navbar";
import ItemListContainer from "./components/ItemListContainer/itemlistcontainer";


function App() {
  const mensaje = "¡Bienvenidx a HI FIVE, la tecnologia al alcance de tu mano!";

  return (
    <>
      <NavBar />
      <ItemListContainer mensaje = {mensaje} />
    </>
  );
}

export default App;