import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from "../api/axios";
import { 
  Box, Button, Typography, Paper, Avatar, CssBaseline, TextField 
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { gymTheme } from "../gymTheme";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Background from "../assets/gym-bg.jpg";
import { 
  Person as PersonIcon, 
  Email as EmailIcon, 
  Lock as LockIcon,
  Phone as PhoneIcon
} from "@mui/icons-material";

export default function Register() {
  const nav = useNavigate();
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Validación de correo
  const esCorreoValido = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Validación de telefono (9 dígitos para Perú)
  const estelefonoValido = (telefono) => /^[9]\d{8}$/.test(telefono);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Si es el campo telefono, solo permitir números
    if (name === "telefono") {
      const soloNumeros = value.replace(/\D/g, '');
      setForm({ ...form, [name]: soloNumeros });
    } else {
      setForm({ ...form, [name]: value });
    }
    
    setError(""); // Limpiar error al escribir
  };

  // Validar formulario
  const validarFormulario = () => {
    if (!form.nombre || !form.apellido || !form.correo || !form.telefono || !form.password || !form.confirmPassword) {
      setError("Todos los campos son obligatorios.");
      return false;
    }

    if (form.nombre.length < 2) {
      setError("El nombre debe tener al menos 2 caracteres.");
      return false;
    }

    if (form.apellido.length < 2) {
      setError("El apellido debe tener al menos 2 caracteres.");
      return false;
    }

    if (!esCorreoValido(form.correo)) {
      setError("El correo no tiene un formato válido.");
      return false;
    }

    if (!estelefonoValido(form.telefono)) {
      setError("El telefono debe tener 9 dígitos y comenzar con 9.");
      return false;
    }

    if (form.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return false;
    }

    if (form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return false;
    }

    return true;
  };

  // Registro
  const handleRegister = async () => {
    setError("");
    
    if (!validarFormulario()) return;

    setLoading(true);

    try {
      const res = await api.post("/usuarios", {
        nombre: form.nombre,
        apellido: form.apellido,
        correo: form.correo,
        telefono: form.telefono,
        password: form.password,
        id_rol: 3, // 👈 CLIENTE por defecto
        activo: 1
      });

      console.log("✔ REGISTRO OK:", res.data);
      
      // Redirigir al login con mensaje de éxito
      nav("/", { 
        state: { mensaje: "Cuenta creada exitosamente. Inicia sesión." }
      });

    } catch (err) {
      console.log("❌ ERROR REGISTRO:", err);
      
      if (err.response?.status === 409) {
        setError("El correo ya está registrado.");
      } else if (err.response?.data?.mensaje) {
        setError(err.response.data.mensaje);
      } else {
        setError("Error al registrar usuario. Inténtalo de nuevo.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Detectar Enter para enviar
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleRegister();
    }
  };

  return (
    <ThemeProvider theme={gymTheme}>
      <CssBaseline />

      <Box
        sx={{
          height: "100vh",
          background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${Background}) center/cover no-repeat`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Paper
          elevation={20}
          sx={{
            p: 5,
            borderRadius: 5,
            width: 450,
            maxHeight: "95vh",
            overflowY: "auto",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(0,0,0,.6)"
          }}
        >
          <Box display="flex" flexDirection="column" alignItems="center" gap={2.5}>
            
            {/* LOGO */}
            <Avatar sx={{ width: 80, height: 80, bgcolor: "primary.main" }}>
              <FitnessCenterIcon sx={{ fontSize: 40 }} />
            </Avatar>

            <Typography variant="h4" fontWeight={700}>
              GymControl
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Crea tu cuenta para comenzar
            </Typography>

            {/* INPUT NOMBRE */}
            <TextField
              label="Nombre"
              name="nombre"
              variant="filled"
              fullWidth
              value={form.nombre}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              InputProps={{ 
                startAdornment: <PersonIcon sx={{ mr: 1, color: "grey.400" }} /> 
              }}
              sx={{ input: { color: "white" }, label: { color: "#ccc" } }}
            />

            {/* INPUT APELLIDO */}
            <TextField
              label="Apellido"
              name="apellido"
              variant="filled"
              fullWidth
              value={form.apellido}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              InputProps={{ 
                startAdornment: <PersonIcon sx={{ mr: 1, color: "grey.400" }} /> 
              }}
              sx={{ input: { color: "white" }, label: { color: "#ccc" } }}
            />

            {/* INPUT CORREO */}
            <TextField
              label="Correo"
              name="correo"
              variant="filled"
              fullWidth
              type="email"
              value={form.correo}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              error={form.correo && !esCorreoValido(form.correo)}
              helperText={
                form.correo && !esCorreoValido(form.correo) 
                  ? "Ingresa un correo válido" 
                  : ""
              }
              InputProps={{ 
                startAdornment: <EmailIcon sx={{ mr: 1, color: "grey.400" }} /> 
              }}
              sx={{ input: { color: "white" }, label: { color: "#ccc" } }}
            />

            {/* INPUT telefono */}
            <TextField
              label="telefono"
              name="telefono"
              variant="filled"
              fullWidth
              type="tel"
              value={form.telefono}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              placeholder="987654321"
              error={form.telefono && !estelefonoValido(form.telefono)}
              helperText={
                form.telefono && !estelefonoValido(form.telefono)
                  ? "Debe tener 9 dígitos y comenzar con 9"
                  : "9 dígitos comenzando con 9"
              }
              inputProps={{ maxLength: 9 }}
              InputProps={{ 
                startAdornment: <PhoneIcon sx={{ mr: 1, color: "grey.400" }} /> 
              }}
              sx={{ input: { color: "white" }, label: { color: "#ccc" } }}
            />

            {/* INPUT CONTRASEÑA */}
            <TextField
              label="Contraseña"
              name="password"
              variant="filled"
              fullWidth
              type="password"
              value={form.password}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              helperText="Mínimo 6 caracteres"
              InputProps={{ 
                startAdornment: <LockIcon sx={{ mr: 1, color: "grey.400" }} /> 
              }}
              sx={{ input: { color: "white" }, label: { color: "#ccc" } }}
            />

            {/* INPUT CONFIRMAR CONTRASEÑA */}
            <TextField
              label="Confirmar Contraseña"
              name="confirmPassword"
              variant="filled"
              fullWidth
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              error={
                form.confirmPassword && 
                form.password !== form.confirmPassword
              }
              helperText={
                form.confirmPassword && 
                form.password !== form.confirmPassword
                  ? "Las contraseñas no coinciden"
                  : ""
              }
              InputProps={{ 
                startAdornment: <LockIcon sx={{ mr: 1, color: "grey.400" }} /> 
              }}
              sx={{ input: { color: "white" }, label: { color: "#ccc" } }}
            />

            {/* MENSAJE DE ERROR */}
            {error && (
              <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}

            {/* BOTÓN REGISTRAR */}
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={handleRegister}
              disabled={loading}
              sx={{ mt: 2, borderRadius: 3 }}
            >
              {loading ? "Creando cuenta..." : "Registrarse"}
            </Button>

            {/* LINK A LOGIN */}
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              ¿Ya tienes cuenta?{' '}
              <Link 
                to="/" 
                style={{ 
                  color: '#90caf9', 
                  textDecoration: 'none',
                  fontWeight: 500
                }}
              >
                Inicia sesión aquí
              </Link>
            </Typography>

          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}