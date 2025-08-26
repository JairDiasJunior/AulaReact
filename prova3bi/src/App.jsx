import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Paginas/Home";
import Barcha from "./Paginas/Barcha";
import BastardMunchen from "./Paginas/BastardMunchen";
import ManshineCity from "./Paginas/ManshineCity";
import PXG from "./Paginas/PXG";
import Ubers from "./Paginas/Ubers";
import "./App.css";
export default function App()
{
    return (
        <div>
            <h1>Liga Neo Egoísta</h1>
            

                <BrowserRouter>
                  <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/bc" element={<Barcha/>} />
                  <Route path="/bm" element={<BastardMunchen/>} />
                  <Route path="/mc" element={<ManshineCity/>} />
                  <Route path="/px" element={<PXG/>} />
                  <Route path="/ub" element={<Ubers/>} />
                  </Routes>
                </BrowserRouter>

            
        </div>
    );
}