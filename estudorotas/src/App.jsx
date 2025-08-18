import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Paginas/Home";
import SaoPaulo from "./Paginas/SaoPaulo";
import RiodeJaneiro from "./Paginas/RiodeJaneiro";
import MinasGerais from "./Paginas/MinasGerais";
import EspiritoSanto from "./Paginas/EspiritoSanto";
import RioGrandeSul from "./Paginas/RioGrandeSul";
import Parana from "./Paginas/Parana";
import SantaCatarina from "./Paginas/SantaCatarina";
import Acre from "./Paginas/Acre";
import Alagoas from "./Paginas/Alagoas";
import Amapa from "./Paginas/Amapa";
import Amazonas from "./Paginas/Amazonas";
import Bahia from "./Paginas/Bahia";
import Ceara from "./Paginas/Ceara";
import DistritoFederal from "./Paginas/DistritoFederal";
import Goias from "./Paginas/Goias";
import Maranhao from "./Paginas/Maranhao";
import MatoGrosso from "./Paginas/MatoGrosso";
import MatoGrossoSul from "./Paginas/MatoGrossoSul";
import Para from "./Paginas/Para";
import Paraiba from "./Paginas/Paraiba";
import Pernambuco from "./Paginas/Pernambuco";
import Piaui from "./Paginas/Piaui";
import RioGrandeNorte from "./Paginas/RioGrandeNorte";
import Rondonia from "./Paginas/Rondonia";
import Roraima from "./Paginas/Roraima";
import Sergipe from "./Paginas/Sergipe";
import Tocantins from "./Paginas/Tocantins";
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
            <Route path="/sc" element={<SantaCatarina />} />
            <Route path="/pr" element={<Parana />} />
            <Route path="/df" element={<DistritoFederal />} />
            <Route path="/go" element={<Goias />} />
            <Route path="/ms" element={<MatoGrossoSul />} />
            <Route path="/ac" element={<Acre />} />
            <Route path="/ap" element={<Amapa />} />
            <Route path="/am" element={<Amazonas />} />
            <Route path="/pa" element={<Para />} />
            <Route path="/ro" element={<Rondonia />} />
            <Route path="/rr" element={<Roraima />} />
            <Route path="/to" element={<Tocantins />} />
            <Route path="/al" element={<Alagoas />} />
            <Route path="/ba" element={<Bahia />} />
            <Route path="/ce" element={<Ceara />} />
            <Route path="/ma" element={<Maranhao />} />
            <Route path="/mt" element={<MatoGrosso />} />
            <Route path="/pb" element={<Paraiba />} />
            <Route path="/pe" element={<Pernambuco />} />
            <Route path="/pi" element={<Piaui />} />
            <Route path="/rn" element={<RioGrandeNorte />} />
            <Route path="/se" element={<Sergipe />} />
         </Routes>
       </BrowserRouter>
    );
}