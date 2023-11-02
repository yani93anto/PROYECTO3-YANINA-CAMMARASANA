import { useState, useEffect } from "react";
import { Property } from "./Form/Property";
import { Location } from "./Form/Location";
import { Meters2 } from "./Form/Meters2";
import { Button } from "./Form/Button";
import { Price } from "./Form/Price";

export function Form() {
  // Define estados para almacenar datos de categoría "ubicacion" y "propiedad"
  const [ubicacionData, setUbicacionData] = useState([]);
  const [propiedadData, setPropiedadData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from "datos.json"
        const response = await fetch("/src/Components/datos.json");
        if (!response.ok) {
          throw new Error("Error al cargar los datos");
        }

        const data = await response.json();
        const ubicacion = data.filter((item) => item.categoria === "ubicacion");
        const propiedad = data.filter((item) => item.categoria === "propiedad");

        // Store data in local storage
        localStorage.setItem("datosvivienda", JSON.stringify(data));

        setUbicacionData(ubicacion);
        setPropiedadData(propiedad);
      } catch (error) {
        console.error("Error:", error);
      }
    };


    const loadDataFromLocalStorage = () => {
      const storedData = localStorage.getItem("datosvivienda");
      if (storedData) {
        const data = JSON.parse(storedData);
        const ubicacion = data.filter((item) => item.categoria === "ubicacion");
        const propiedad = data.filter((item) => item.categoria === "propiedad");

        setUbicacionData(ubicacion);
        setPropiedadData(propiedad);
      }
    };

    // First, try to load data from local storage
    loadDataFromLocalStorage();

    // Then, fetch data from "datos.json" and save it to local storage
    fetchData();
  }, []);

  return (
    <div className=" center div-cotizador">
      <h2 className="center separador">Completa los datos solicitados</h2>
      <Property datos={propiedadData} />
      <Location datos={ubicacionData} />
      <Meters2 />
      <Button />
      <Price />
    </div>
  );
}

export default Form;
