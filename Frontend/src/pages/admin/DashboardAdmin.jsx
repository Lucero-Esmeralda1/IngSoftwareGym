import { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import { 
  People as PeopleIcon,
  AttachMoney as MoneyIcon,
  TrendingUp as TrendingIcon,
  FitnessCenter as FitnessIcon
} from "@mui/icons-material";
import RegisterUsuarios from "../Register"; // Tu componente de gestión de usuarios

export default function DashboardAdmin() {
  const [usuario, setUsuario] = useState(null);
  const [mostrarGestionUsuarios, setMostrarGestionUsuarios] = useState(false);

  useEffect(() => {
    // Obtener datos del usuario desde localStorage
    const usuarioData = localStorage.getItem("usuario");
    if (usuarioData) {
      setUsuario(JSON.parse(usuarioData));
    }
  }, []);

  // Datos de ejemplo (deberías obtenerlos de tu API)
  const estadisticas = {
    totalUsuarios: 150,
    ingresosDelMes: 15240,
    asistenciasHoy: 45,
    membresiasActivas: 128
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* HEADER */}
      <Box mb={4}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Panel de Administrador
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Bienvenido, {usuario?.nombre} {usuario?.apellido}
        </Typography>
      </Box>

      {/* TARJETAS DE ESTADÍSTICAS */}
      <Grid container spacing={3} mb={4}>
        
        {/* Total Usuarios */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ 
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white"
          }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography variant="h4" fontWeight={700}>
                    {estadisticas.totalUsuarios}
                  </Typography>
                  <Typography variant="body2">
                    Total Usuarios
                  </Typography>
                </Box>
                <PeopleIcon sx={{ fontSize: 50, opacity: 0.5 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Ingresos del Mes */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ 
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            color: "white"
          }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography variant="h4" fontWeight={700}>
                    S/ {estadisticas.ingresosDelMes.toLocaleString()}
                  </Typography>
                  <Typography variant="body2">
                    Ingresos del Mes
                  </Typography>
                </Box>
                <MoneyIcon sx={{ fontSize: 50, opacity: 0.5 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Asistencias Hoy */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ 
            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            color: "white"
          }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography variant="h4" fontWeight={700}>
                    {estadisticas.asistenciasHoy}
                  </Typography>
                  <Typography variant="body2">
                    Asistencias Hoy
                  </Typography>
                </Box>
                <TrendingIcon sx={{ fontSize: 50, opacity: 0.5 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Membresías Activas */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ 
            background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            color: "white"
          }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography variant="h4" fontWeight={700}>
                    {estadisticas.membresiasActivas}
                  </Typography>
                  <Typography variant="body2">
                    Membresías Activas
                  </Typography>
                </Box>
                <FitnessIcon sx={{ fontSize: 50, opacity: 0.5 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

      </Grid>

      {/* ACCESOS RÁPIDOS */}
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12}>
          <Typography variant="h5" fontWeight={600} mb={2}>
            Accesos Rápidos
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={() => setMostrarGestionUsuarios(true)}
            sx={{ 
              py: 3,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            }}
          >
            👥 Gestionar Usuarios
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ 
              py: 3,
              background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
            }}
          >
            💪 Gestionar Membresías
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ 
              py: 3,
              background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
            }}
          >
            💰 Registrar Pagos
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ 
              py: 3,
              background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
            }}
          >
            📅 Ver Asistencias
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ 
              py: 3,
              background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
            }}
          >
            🏋️ Gestionar Clases
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ 
              py: 3,
              background: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
            }}
          >
            📊 Ver Reportes
          </Button>
        </Grid>

      </Grid>

      {/* MOSTRAR GESTIÓN DE USUARIOS */}
      {mostrarGestionUsuarios && (
        <Box>
          <Button 
            variant="outlined" 
            onClick={() => setMostrarGestionUsuarios(false)}
            sx={{ mb: 2 }}
          >
            ← Volver al Dashboard
          </Button>
          <RegisterUsuarios />
        </Box>
      )}

    </Box>
  );
}
// import { useState, useEffect } from "react";
// import { Box, Typography, Grid, Paper } from "@mui/material";
// import { gymTheme } from "../gymTheme";
// import { ThemeProvider } from "@mui/material/styles";
// import Layout from "../layouts/Layout";
// import PeopleIcon from "@mui/icons-material/People";
// import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
// import EventAvailableIcon from "@mui/icons-material/EventAvailable";
// import api from "../api/axios";

// export default function DashboardAdmin() {
//     const [totales, setTotales] = useState({
//         clientes: 0,
//         ingresos: 0,
//         clasesHoy: 0
//     });

//     useEffect(() => {
//         const cargarTotales = async () => {
//             try {
//                 const res = await api.get("/admin/resumen");
//                 setTotales(res.data);
//             } catch (error) {
//                 console.error("Error cargando dashboard admin:", error);
//             }
//         };
//         cargarTotales();
//     }, []);

//     return (
//         <ThemeProvider theme={gymTheme}>
//             <Layout rol="Administrador">
//                 <Box sx={{ p: 4 }}>
//                     <Typography variant="h4" fontWeight={700} gutterBottom>
//                         Panel General del Gimnasio
//                     </Typography>

//                     <Grid container spacing={3}>
//                         <Grid item xs={12} md={4}>
//                             <Paper sx={{ p: 3, borderRadius: 4 }}>
//                                 <PeopleIcon fontSize="large" />
//                                 <Typography variant="h5" fontWeight={700}>{totales.clientes}</Typography>
//                                 <Typography>Clientes activos</Typography>
//                             </Paper>
//                         </Grid>

//                         <Grid item xs={12} md={4}>
//                             <Paper sx={{ p: 3, borderRadius: 4 }}>
//                                 <MonetizationOnIcon fontSize="large" />
//                                 <Typography variant="h5" fontWeight={700}>S/ {totales.ingresos}</Typography>
//                                 <Typography>Ingresos del mes</Typography>
//                             </Paper>
//                         </Grid>

//                         <Grid item xs={12} md={4}>
//                             <Paper sx={{ p: 3, borderRadius: 4 }}>
//                                 <EventAvailableIcon fontSize="large" />
//                                 <Typography variant="h5" fontWeight={700}>{totales.clasesHoy}</Typography>
//                                 <Typography>Clases programadas hoy</Typography>
//                             </Paper>
//                         </Grid>
//                     </Grid>
//                 </Box>
//             </Layout>
//         </ThemeProvider>
//     );
// }
