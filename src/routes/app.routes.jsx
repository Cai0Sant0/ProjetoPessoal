import { Route, Routes as Switch } from "react-router-dom";

import Home from "../pages/Home";
import Informacoes from "../pages/Informacoes";
import Catalogo from "../pages/Catalogo";
import SobreNos from "../pages/SobreNos";

function AppRoutes() {
    return (
        <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/informacoes" element={<Informacoes />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/sobreNos" element={<SobreNos />} />
        </Switch>
    );
}

export default AppRoutes;