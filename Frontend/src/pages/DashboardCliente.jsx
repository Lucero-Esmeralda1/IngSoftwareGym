import { useState, useEffect } from "react";
import {
    Box, Typography, Button, Card, CardContent, CardMedia,
    Avatar, Chip, Paper, Grid
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { gymTheme } from "../gymTheme";
import Layout from "../layouts/Layout";


import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";


import api from "../api/axios";

export default function DashboardCliente() {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const correo = usuario?.correo;

    const [misClases, setMisClases] = useState([]);
    const [misReservas, setMisReservas] = useState([]);
    const [miMembresia, setMiMembresia] = useState({});

    useEffect(() => {
        const cargarDatos = async () => {
        if (!correo) return;

        try {
            const clasesRes = await api.get(`/mis-clases?correo=${correo}`);
            setMisClases(clasesRes.data);

            const reservasRes = await api.get(`/mis-reservas?correo=${correo}`);
            setMisReservas(reservasRes.data);

            const membresiaRes = await api.get(`/mi-membresia?correo=${correo}`);
            setMiMembresia(membresiaRes.data);

        } catch (error) {
            console.error("❌ Error al cargar datos:", error);
            alert("No se pudieron cargar tus datos.");
        }
        };

        cargarDatos();
    }, [correo]);

    return (
        <ThemeProvider theme={gymTheme}>
        <Layout rol="Cliente">
            <Box sx={{ p: 4 }}>

            {/* TÍTULO */}
            <Typography variant="h4" fontWeight={800} sx={{ mb: 1 }}>
                Hola, {usuario?.nombre}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Esta es tu vista general de actividades, clases y membresía.
            </Typography>

            {/* ACCIONES RÁPIDAS */}
            <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={4}>
                <Paper sx={{ p: 3, textAlign: "center", borderRadius: 4 }}>
                    <FitnessCenterIcon color="primary" sx={{ fontSize: 40 }} />
                    <Typography fontWeight={600}>Reservar nueva clase</Typography>
                    <Button variant="contained" fullWidth sx={{ mt: 1 }}>
                    Ver clases disponibles
                    </Button>
                </Paper>
                </Grid>

                <Grid item xs={12} sm={4}>
                <Paper sx={{ p: 3, textAlign: "center", borderRadius: 4 }}>
                    <CalendarTodayIcon color="secondary" sx={{ fontSize: 40 }} />
                    <Typography fontWeight={600}>Mis reservas</Typography>
                    <Button variant="outlined" fullWidth sx={{ mt: 1 }}>
                    Revisar reservas
                    </Button>
                </Paper>
                </Grid>

                <Grid item xs={12} sm={4}>
                <Paper sx={{ p: 3, textAlign: "center", borderRadius: 4 }}>
                    <CreditCardIcon color="success" sx={{ fontSize: 40 }} />
                    <Typography fontWeight={600}>Membresía</Typography>
                    <Button variant="outlined" color="success" fullWidth sx={{ mt: 1 }}>
                    Renovar membresía
                    </Button>
                </Paper>
                </Grid>
            </Grid>

            {/* SECCIÓN: MIS CLASES */}
            <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
                <EventAvailableIcon sx={{ mr: 1 }} />
                Mis Clases
            </Typography>

            <Grid container spacing={3}>
                {misClases.length === 0 && (
                <Typography color="text.secondary" sx={{ ml: 2 }}>
                    No tienes clases registradas todavía.
                </Typography>
                )}

                {misClases.map((c) => (
                <Grid item xs={12} sm={6} md={4} key={c.id}>
                    <Card sx={{ borderRadius: 4, overflow: "hidden", boxShadow: 6 }}>
                    <CardMedia
                        component="img"
                        height="180"
                        image="https://source.unsplash.com/600x400/?workout,gym"
                    />
                    <CardContent>
                        <Typography variant="h6">{c.nombre}</Typography>
                        <Typography variant="body2" color="text.secondary">
                        Instructor: {c.instructor}
                        </Typography>

                        <Chip
                        label={`${c.dia_semana} · ${c.hora_inicio}`}
                        color="primary"
                        sx={{ mt: 1 }}
                        />
                    </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>

            {/* SECCIÓN: MIS RESERVAS */}
            <Typography variant="h5" fontWeight={700} sx={{ mt: 5, mb: 2 }}>
                <CalendarTodayIcon sx={{ mr: 1 }} />
                Mis Reservas
            </Typography>

            <Grid container spacing={3}>
                {misReservas.length === 0 && (
                <Typography color="text.secondary" sx={{ ml: 2 }}>
                    No tienes reservas aún.
                </Typography>
                )}

                {misReservas.map((r) => (
                <Grid item xs={12} sm={6} md={4} key={r.id}>
                    <Paper sx={{ p: 3, borderRadius: 4 }}>
                    <Typography variant="h6">{r.clase}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {r.fecha} · {r.hora_inicio}
                    </Typography>

                    <Chip
                        label={r.estado}
                        color={r.estado === "Confirmada" ? "success" : "warning"}
                        sx={{ mt: 1 }}
                    />
                    </Paper>
                </Grid>
                ))}
            </Grid>

            {/* SECCIÓN: MI MEMBRESÍA */}
            <Typography variant="h5" fontWeight={700} sx={{ mt: 5, mb: 2 }}>
                <CreditCardIcon sx={{ mr: 1 }} />
                Mi Membresía
            </Typography>

            <Paper sx={{ p: 3, borderRadius: 4, display: "flex", gap: 2 }}>
                <Avatar sx={{ bgcolor: "success.main" }}>💳</Avatar>
                <Box>
                <Typography variant="h6">{miMembresia.nombre}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {miMembresia.diasRestantes} días restantes · {miMembresia.estado}
                </Typography>
                </Box>
            </Paper>

            </Box>
        </Layout>
        </ThemeProvider>
    );
}

