import { useEffect, useState } from "react";
import api from "../services/api";
import "./Home.css";

// IMPORTA LA IMAGEN AQUÍ
import banner from "../assets/Gym-Fitness-Web-Banner-Design-Template-Graphics-17788158-1.jpg";

export default function Home() {
  const [status, setStatus] = useState("Conectando...");
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/")
      .then(() => setStatus("✔ Backend conectado correctamente"))
      .catch(() => setError("❌ Error al conectar con el backend"));
  }, []);

  return (
    <div className="home-content">
      
      {/* 🖼 Banner */}
      <div className="banner-container">
        <img
          src={banner}
          alt="Banner del gimnasio"
          className="banner-img"
        />
      </div>

      <div className="home-card">
        <h1 className="title">Gym Aesthetic</h1>

        <p className="subtitle">
          Bienvenido al sistema de gestión del gimnasio 💪✨
        </p>

        <div className="status-box">
          {error ? (
            <p className="error">{error}</p>
          ) : (
            <p className="ok">{status}</p>
          )}
        </div>
      </div>
    </div>
  );
}


// import { useEffect, useState } from "react";
// import api from "../services/api";
// import "./Home.css";
// import banner from "../assets/Gym-Fitness-Web-Banner-Design-Template-Graphics-17788158-1.jpg";


// export default function Home() {
//   const [status, setStatus] = useState("Conectando...");
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     api
//       .get("/")
//       .then(() => setStatus("✔ Backend conectado correctamente"))
//       .catch(() => setError("❌ Error al conectar con el backend"));
//   }, []);

//   return (
//     <div className="home-content">

//       {/* 🖼 Banner */}
//       <div className="banner-container">
//         <img
//           src="../assets/Gym-Fitness-Web-Banner-Design-Template-Graphics-17788158-1.jpg"
//           // src="/images/banner-gym.jpg"   // AQUI COLOCAS TU IMAGEN
//           alt="Banner del gimnasio"
//           className="banner-img"
//         />
//       </div>

//       <div className="home-card">
//         <h1 className="title">Gym Aesthetic</h1>

//         <p className="subtitle">
//           Bienvenido al sistema de gestión del gimnasio 💪✨
//         </p>

//         <div className="status-box">
//           {error ? <p className="error">{error}</p> : <p className="ok">{status}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }



// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import "./Home.css";

// export default function Home() {
//   return (
//     <>
//       <Navbar />

//       <section className="hero">
//         <div className="hero-content">
//           <div className="hero-box">
//             <h2>+90 SEDES LISTAS</h2>
//             <h1>PARA CUMPLIR<br/>TUS METAS</h1>
//           </div>

//           <div className="hero-offer">
//             <h3>3 MESES</h3>
//             <h1 className="precio">
//               70<span>.90</span>
//             </h1>
//             <p>MENSUAL</p>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }


// import { useEffect, useState } from "react";
// import api from "../services/api";
// import "./Home.css";

// export default function Home() {
//   const [status, setStatus] = useState("Conectando...");
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     api
//       .get("/") // RUTA POR DEFECTO DEL BACKEND
//       .then((res) => {
//         setStatus("✔ Backend conectado correctamente");
//       })
//       .catch((err) => {
//         setError("❌ Error al conectar con el backend");
//         console.error(err);
//       });
//   }, []);

//   return (
//     <div className="home-container">
//       <div className="home-card">
//         <h1 className="title">Gym Aesthetic</h1>

//         <p className="subtitle">
//           Bienvenido al sistema de gestión del gimnasio 💪✨
//         </p>

//         <div className="status-box">
//           {error ? (
//             <p className="error">{error}</p>
//           ) : (
//             <p className="ok">{status}</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }





// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./Home.css";

// export default function Home() {
//   const [message, setMessage] = useState("Cargando...");

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/api/home")
//       .then((res) => setMessage(res.data.message))
//       .catch(() => setMessage("⚠ No se pudo conectar al backend"));
//   }, []);

//   return (
//     <div className="home-container">
//       <section className="hero">
//         <h1 className="hero-title">AESTHETIC GYM</h1>
//         <p className="hero-subtitle">Construye la mejor versión de ti.</p>

//         <button className="hero-button">Comenzar ahora</button>
//       </section>

//       <div className="status-card">
//         <h2 className="card-title">Estado del servidor</h2>
//         <p className="card-text">{message}</p>
//       </div>
//     </div>
//   );
// }
