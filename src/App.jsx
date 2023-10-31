import "./App.css";
import NavBar from "./components/navbar/navbar";
import ItemListContainer from "./components/ItemListContainer/itemlistcontainer";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  const mensaje = "¡Bienvenidx a HI FIVE, la tecnologia al alcance de tu mano!";

  return (
    <>
      <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<ItemListContainer bienvenida={mensaje}/>}> </Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;