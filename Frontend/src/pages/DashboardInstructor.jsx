// src/pages/DashboardInstructor.jsx

import { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, Avatar, Chip, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { gymTheme } from "../gymTheme";
import Layout from "../layouts/Layout";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import api from "../api/axios";

export default function DashboardInstructor() {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const correo = usuario?.correo;

    const [misClases, setMisClases] = useState([]);

    useEffect(() => {
        // Si aún no hay correo, no hacemos nada
        if (!correo) return;

        const cargarDatos = async () => {
        try {
            // 🔥 Llamamos al backend con el correo del instructor
            const res = await api.get(`/mis-clases?correo=${correo}`);
            setMisClases(res.data);
        } catch (error) {
            console.error("❌ Error cargando clases del instructor:", error);
        }
        };

        cargarDatos();
    }, [correo]); // ✅ dependencia correcta → se va el warning

    return (
        <ThemeProvider theme={gymTheme}>
        <Layout rol="Instructor">
            <Box sx={{ p: 4 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
                <EventAvailableIcon sx={{ mr: 1, verticalAlign: "middle" }} />
                Mis clases como instructor
            </Typography>

            <Grid container spacing={3}>
                {misClases.length === 0 && (
                <Typography sx={{ mt: 2, ml: 1 }} color="text.secondary">
                    Aún no tienes clases asignadas.
                </Typography>
                )}

                {misClases.map((c) => (
                <Grid item xs={12} sm={6} md={4} key={c.id}>
                    <Card>
                    <CardContent>
                        <Box display="flex" alignItems="center" gap={2} mb={2}>
                        <Avatar src={c.instructorFoto || "https://i.pravatar.cc/150?img=5"} />
                        <Box>
                            <Typography variant="h6">{c.nombre}</Typography>
                            <Typography variant="body2" color="text.secondary">
                            {c.dia_semana}
                            </Typography>
                        </Box>
                        </Box>

                        <Typography variant="body2" color="text.secondary" mb={1}>
                        {c.hora_inicio} - {c.hora_fin}
                        </Typography>

                        <Chip
                        label={`${c.cupos} cupos`}
                        color="primary"
                        sx={{ mt: 1 }}
                        />
                    </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>
            </Box>
        </Layout>
        </ThemeProvider>
    );
}
