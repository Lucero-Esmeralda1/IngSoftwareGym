import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { useNavigate } from "react-router-dom";

export default function Header({ rol }) {
    const nav = useNavigate();

    const irInicio = () => {
        if (!rol) return nav("/");
        nav("/" + rol.toLowerCase());
    };

    const cerrarSesion = () => {
        localStorage.clear();
        nav("/");
    };

    return (
        <AppBar
        position="sticky"
        sx={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(14px)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0px 10px 30px rgba(215, 228, 32, 0.3)"
        }}
        >
        <Toolbar
            sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 1.5
            }}
        >
            {/* LOGO */}
            <Box
            onClick={irInicio}
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.2,
                cursor: "pointer",
                transition: "0.2s",
                "&:hover": { opacity: 0.85 }
            }}
            >
            <FitnessCenterIcon sx={{ fontSize: 30, color: "#f5f11aff" }} />

            <Typography
                variant="h5"
                sx={{
                fontWeight: 800,
                letterSpacing: 0.8,
                color: "#f5f11aff",
                textTransform: "uppercase",
                }}
            >
                GymControl
            </Typography>
            </Box>

            {/* BOTÓN CERRAR SESIÓN */}
            <Button
            onClick={cerrarSesion}
            sx={{
                color: "#ffffff",
                borderRadius: "10px",
                textTransform: "none",
                px: 2.5,
                py: 1,
                fontWeight: 600,
                fontSize: "0.9rem",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
                "&:hover": {
                background: "rgba(255,255,255,0.15)",
                borderColor: "rgba(255,255,255,0.2)"
                }
            }}
            >
            Cerrar sesión
            </Button>
        </Toolbar>
        </AppBar>
    );
}
