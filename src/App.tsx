import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Register from "./pages/register/Register";
import Dasboard from "./pages/dashboard/Dasboard";
import Transfers from "./pages/transfers/Transfers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/transferencias" element={<Transfers />} />
        <Route path="/sobre-nosotros" element={<Landing />} />
        <Route path="/consultar-clientes" element={<Dasboard/>} />
        <Route path="/historial" element={<Dasboard/>} />
        <Route path="/crear-clientes" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
