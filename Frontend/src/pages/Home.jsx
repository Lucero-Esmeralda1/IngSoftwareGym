import { useEffect, useState } from "react";
import api from "../services/api";
import "./Home.css";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function cargarDatos() {
      try {
        const response = await api.get("/prueba"); 
        setData(response.data);
      } catch (error) {
        console.error("Error cargando datos:", error);
      }
    }

    cargarDatos();
  }, []);

  return (
    <div className="home-container">
      <h1>🏠 Bienvenido al Home</h1>
      <p>Este es un ejemplo usando Axios.</p>

      <h3>Datos cargados desde el backend:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
