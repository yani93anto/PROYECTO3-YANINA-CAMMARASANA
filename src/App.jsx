import { Header } from "./Components/Header";
import { Form } from "./Components/Form";
import { Historial } from "./Pages/Historial";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        {/* NAVEGADOR */}
        <Header />

        {/* FORMULARIO */}
        <Form />
        <Routes>
          <Route path="./Pages/Historial" element={<Historial />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
