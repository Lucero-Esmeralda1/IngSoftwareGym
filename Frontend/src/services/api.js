import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api", // 👈 Agregado /api
  timeout: 10000, // 👈 Aumentado a 10 segundos (más seguro)
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔐 Interceptor para agregar token de autenticación (si lo usas)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 📊 Interceptor para manejar errores globalmente
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Manejo de errores común
    if (error.response) {
      // El servidor respondió con un código de error
      console.error("❌ Error del servidor:", error.response.status);
      
      // Si el token expiró o no es válido (401)
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        window.location.href = "/"; // Redirige al login
      }
      
      // Si no tiene permisos (403)
      if (error.response.status === 403) {
        console.error("❌ No tienes permisos para esta acción");
      }
      
    } else if (error.request) {
      // La petición se hizo pero no hubo respuesta
      console.error("❌ Sin respuesta del servidor:", error.message);
    } else {
      // Algo pasó al configurar la petición
      console.error("❌ Error en la petición:", error.message);
    }
    
    return Promise.reject(error);
  }
);

export default api;

// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:3001", // Ajusta tu backend
//   timeout: 5000,
// });

// export default api;
