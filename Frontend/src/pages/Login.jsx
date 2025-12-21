import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';
import api from "../api/axios";
import { Box, Button, Typography, Paper, Avatar, CssBaseline, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { gymTheme } from "../gymTheme";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Background from "../assets/gym-bg.jpg";
import { Email as EmailIcon, Lock as LockIcon } from "@mui/icons-material";

export default function Login() {
    const nav = useNavigate();
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Validación simple de correo
    const esCorreoValido = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Login real con validaciones y mensajes amigables
    const handleLogin = async () => {
        setError("");
        setLoading(true);

        if (!correo || !password) {
        setError("Por favor, completa todos los campos.");
        setLoading(false);
        return;
        }
        if (!esCorreoValido(correo)) {
        setError("El correo no tiene un formato válido.");
        setLoading(false);
        return;
        }

        try {
        const res = await api.post("/usuarios/login", { correo, password });
        console.log("✔ LOGIN OK:", res.data);

        localStorage.setItem("rol", res.data.rol);
        localStorage.setItem("usuario", JSON.stringify(res.data));
        localStorage.setItem("correo", res.data.correo);
        nav("/" + res.data.rol.toLowerCase());

        } catch (err) {
        console.log("❌ ERROR LOGIN:", err);
        if (err.response?.status === 401 || err.response?.status === 404) {
            setError("Usuario o contraseña incorrectos.");
        } else {
            setError("Error al iniciar sesión. Inténtalo de nuevo.");
        }
        } finally {
        setLoading(false);
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
                width: 420,
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(0,0,0,.6)"
            }}
            >
            <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
                <Avatar sx={{ width: 80, height: 80, bgcolor: "primary.main" }}>
                <FitnessCenterIcon sx={{ fontSize: 40 }} />
                </Avatar>

                <Typography variant="h4" fontWeight={700}>
                GymControl
                </Typography>

                <Typography variant="body2" color="text.secondary">
                Inicia sesión para continuar
                </Typography>

                {/* INPUT CORREO con ícono y validación */}
                <TextField
                label="Correo"
                variant="filled"
                fullWidth
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                error={!!error && !esCorreoValido(correo)}
                helperText={error && !esCorreoValido(correo) ? "Ingresa un correo válido" : ""}
                InputProps={{ startAdornment: <EmailIcon sx={{ mr: 1, color: "grey.400" }} /> }}
                sx={{ input: { color: "white" }, label: { color: "#ccc" } }}
                />

                {/* INPUT CONTRASEÑA con ícono y validación */}
                <TextField
                label="Contraseña"
                variant="filled"
                fullWidth
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!error && !password}
                helperText={error && !password ? "Ingresa tu contraseña" : ""}
                InputProps={{ startAdornment: <LockIcon sx={{ mr: 1, color: "grey.400" }} /> }}
                sx={{ input: { color: "white" }, label: { color: "#ccc" } }}
                />

                {/* MENSAJE DE ERROR (debajo, no ventana) */}
                {error && (
                <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                    {error}
                </Typography>
                )}

                {/* BOTÓN LOGIN con estado y validación */}
                <Button
                fullWidth
                variant="contained"
                size="large"
                onClick={handleLogin}
                disabled={loading || !correo || !password || !esCorreoValido(correo)}
                sx={{ mt: 2, borderRadius: 3 }}
                >
                {loading ? "Verificando..." : "Iniciar sesión"}
                </Button>

                {/* 👇 AGREGAR ESTE CÓDIGO NUEVO */}
<Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
  ¿No tienes cuenta?{' '}
  <Link 
    to="/register" 
    style={{ 
      color: '#90caf9', 
      textDecoration: 'none',
      fontWeight: 500
    }}
  >
    Regístrate aquí
  </Link>
</Typography>
                
            </Box>
            </Paper>
        </Box>
        </ThemeProvider>
    );
}