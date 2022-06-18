import React from "react";

import { BrowserRouter,Routes, Route} from "react-router-dom";
import { Inicio } from "../pages/paginaHome/home.js";
import { InicioDois } from "../pages/paginaHome/homeDois.js";
import { InicioTres } from "../pages/paginaHome/homeTres.js";

export function Rooter() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/inicio" element={<InicioDois/>} />
                <Route path="/inicio2" element={<InicioTres/>} />

                </Routes>

        </BrowserRouter>
    )
}