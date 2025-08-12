import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Paginas/Home";
import SaoPaulo from "./Paginas/SaoPaulo";
import RiodeJaneiro from "./Paginas/RiodeJaneiro";
import MinasGerais from "./Paginas/MinasGerais";
import EspiritoSanto from "./Paginas/EspiritoSanto";
import RioGrandeSul from "./Paginas/RioGrandeSul";
import Parana from "./Paginas/Parana";
import SantaCatarina from "./Paginas/SantaCatarina";
import "./App.css";

export default function App()
{
    return (
       <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sp" element={<SaoPaulo />} />
            <Route path="/rj" element={<RiodeJaneiro />} />
            <Route path="/mg" element={<MinasGerais />} />
            <Route path="/es" element={<EspiritoSanto />} />
            <Route path="/rs" element={<RioGrandeSul />} />
            <Route path="/pr" element={<Parana />} />
            <Route path="/sc" element={<DistritoFederal />} />
            <Route path="/sc" element={<Goias />} />
            <Route path="/sc" element={<MatoGrossoSul />} />
            <Route path="/sc" element={<Acre />} />
            <Route path="/sc" element={<Amapa />} />
            <Route path="/sc" element={<Amazonas />} />
            <Route path="/sc" element={<Para />} />
            <Route path="/sc" element={<Rondonia />} />
            <Route path="/sc" element={<Roraima />} />
            <Route path="/sc" element={<Tocantins />} />
            <Route path="/sc" element={<Alagoas />} />
            <Route path="/sc" element={<Bahia />} />
            <Route path="/sc" element={<Ceara />} />
            <Route path="/sc" element={<Maranhao />} />
         </Routes>
       </BrowserRouter>
    );
}