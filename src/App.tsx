import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Register from "./pages/register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/transferencias" element={<Landing />} />
        <Route path="/sobre-nosotros" element={<Landing />} />
        <Route path="/consultar-clientes" element={<Landing />} />
        <Route path="/historial" element={<Landing />} />
        <Route path="/crear-clientes" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
