import Contacto from "./components/Contacto";

import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";
import "/Users/Admin/Programacion/MyPage/main.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
    
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
           
            <Route path="/productos" element={<ItemListContainer />} />
            
            <Route path="/nosotros" element={<Nosotros />}/>
            <Route path="/contacto" element={<Contacto />}/>
            
          
          </Routes>
          
        </BrowserRouter>
     
    </div>
  );
}

export default App;