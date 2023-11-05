import { Historial } from "./Pages/Historial";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Principal } from "./Pages/Principal";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Ruta principal */}
          <Route path="/" element={<Principal />} />

          {/* Ruta para el historial */}
          <Route path="/historial" element={<Historial />} />
        </Routes>
        <footer>
          <p className="footer">
            &copy; 2023 Yanina Cammarasana. Todos los derechos reservados.
          </p>
        </footer>
      </Router>
    </>
  );
}

export default App;
