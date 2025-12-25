import { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, Avatar, Chip } from "@mui/material";
import { 
  FitnessCenter as FitnessIcon,
  Schedule as ScheduleIcon,
  EventAvailable as EventIcon,
  TrendingUp as TrendingIcon
} from "@mui/icons-material";

export default function DashboardInstructor() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioData = localStorage.getItem("usuario");
    if (usuarioData) {
      setUsuario(JSON.parse(usuarioData));
    }
  }, []);

  // Datos de ejemplo
  const estadisticas = {
    clasesActivas: 5,
    horariosAsignados: 12,
    reservasDelDia: 28,
    asistenciaPromedio: 85
  };

  const proximaClase = {
    nombre: "CROSSFIT AVANZADO",
    hora: "Hoy, 6:00 PM",
    instructor: "Instructor, Laura G"
  };

  const actividadSemanal = [
    { dia: "Lun", activo: true },
    { dia: "Lun", activo: true },
    { dia: "Mar", activo: true },
    { dia: "Mié", activo: true },
    { dia: "Jue", activo: false },
    { dia: "Jue", activo: true },
    { dia: "Jue", activo: true },
    { dia: "Vie", activo: true }
  ];

  const horariosDelDia = [
    { titulo: "YOGA FLOW", hora: "7:00 AM - MM", subtitulo: "Yoga Flow", dia: "L" },
    { titulo: "LUNES, CRFIT BÁSICO", hora: "Lunes, 8:00 Básico", subtitulo: "Spinning Intenso", dia: "M" },
    { titulo: "BOXEO FUNDAMENTOS", hora: "Cupos: 15/20", subtitulo: "", dia: "M" }
  ];

  const diasSemana = ["L", "M", "M", "S", "D"];

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      
      {/* SIDEBAR */}
      <Box sx={{ 
        width: 200, 
        backgroundColor: "rgba(0,0,0,0.3)",
        p: 2,
        display: "flex",
        flexDirection: "column"
      }}>
        {/* Logo */}
        <Box display="flex" alignItems="center" gap={1} mb={4}>
          <Avatar sx={{ width: 40, height: 40, bgcolor: "#FFD700" }}>
            <FitnessIcon />
          </Avatar>
          <Typography variant="h6" fontWeight={700}>
            GymControl
          </Typography>
        </Box>

        {/* Menu Items */}
        <Button 
          fullWidth 
          sx={{ 
            justifyContent: "flex-start", 
            mb: 1,
            backgroundColor: "rgba(255,255,255,0.1)",
            color: "white",
            '&:hover': { backgroundColor: "rgba(255,255,255,0.2)" }
          }}
        >
          📊 Dashboard
        </Button>
        <Button 
          fullWidth 
          sx={{ 
            justifyContent: "flex-start", 
            mb: 1,
            backgroundColor: "#FFD700",
            color: "black",
            fontWeight: 600,
            '&:hover': { backgroundColor: "#FFC700" }
          }}
        >
          🏋️ Mis Clases
        </Button>
        <Button 
          fullWidth 
          sx={{ 
            justifyContent: "flex-start", 
            mb: 1,
            color: "white",
            '&:hover': { backgroundColor: "rgba(255,255,255,0.1)" }
          }}
        >
          📅 Mis Clases
        </Button>
        <Button 
          fullWidth 
          sx={{ 
            justifyContent: "flex-start", 
            mb: 1,
            color: "white",
            '&:hover': { backgroundColor: "rgba(255,255,255,0.1)" }
          }}
        >
          ⏱️ Horarios
        </Button>
        <Button 
          fullWidth 
          sx={{ 
            justifyContent: "flex-start", 
            mb: 1,
            color: "white",
            '&:hover': { backgroundColor: "rgba(255,255,255,0.1)" }
          }}
        >
          ✅ Asistencias
        </Button>
        <Button 
          fullWidth 
          sx={{ 
            justifyContent: "flex-start", 
            mb: 1,
            color: "white",
            '&:hover': { backgroundColor: "rgba(255,255,255,0.1)" }
          }}
        >
          👥 Alumnos
        </Button>
        <Button 
          fullWidth 
          sx={{ 
            justifyContent: "flex-start", 
            mb: 1,
            color: "white",
            '&:hover': { backgroundColor: "rgba(255,255,255,0.1)" }
          }}
        >
          👤 Mi Perfil
        </Button>
      </Box>

      {/* CONTENIDO PRINCIPAL */}
      <Box sx={{ flexGrow: 1, p: 4 }}>
        
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Typography variant="h4" fontWeight={700}>
            Dashboard del Instructor
          </Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar sx={{ bgcolor: "error.main" }}>🔔</Avatar>
            <Avatar src="/api/placeholder/40/40" />
          </Box>
        </Box>

        {/* TARJETAS DE ESTADÍSTICAS */}
        <Grid container spacing={3} mb={4}>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ 
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: 3
            }}>
              <CardContent>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Clases Activas
                </Typography>
                <Typography variant="h3" fontWeight={700}>
                  {estadisticas.clasesActivas}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ 
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: 3
            }}>
              <CardContent>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Horarios Asignados
                </Typography>
                <Typography variant="h3" fontWeight={700}>
                  {estadisticas.horariosAsignados}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ 
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: 3
            }}>
              <CardContent>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Reservas del Día
                </Typography>
                <Typography variant="h3" fontWeight={700}>
                  {estadisticas.reservasDelDia}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ 
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: 3
            }}>
              <CardContent>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Asistencia Promedio
                </Typography>
                <Typography variant="h3" fontWeight={700}>
                  {estadisticas.asistenciaPromedio}%
                </Typography>
              </CardContent>
            </Card>
          </Grid>

        </Grid>

        <Grid container spacing={3}>
          
          {/* COLUMNA IZQUIERDA */}
          <Grid item xs={12} md={6}>
            
            {/* PRÓXIMA CLASE */}
            <Card sx={{ 
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: 3,
              mb: 3
            }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600} mb={2}>
                  Próxima Clase
                </Typography>
                
                <Box 
                  sx={{ 
                    backgroundColor: "rgba(100,100,100,0.3)",
                    p: 2,
                    borderRadius: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <Box>
                    <Typography variant="h6" fontWeight={700}>
                      {proximaClase.nombre}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {proximaClase.hora}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {proximaClase.instructor}
                    </Typography>
                  </Box>
                  
                  <Button 
                    variant="contained" 
                    sx={{ 
                      bgcolor: "#FFD700", 
                      color: "black",
                      fontWeight: 600,
                      '&:hover': { bgcolor: "#FFC700" }
                    }}
                  >
                    Ver Lista de Alumnos
                  </Button>
                </Box>
              </CardContent>
            </Card>

            {/* ACTIVIDAD SEMANAL */}
            <Card sx={{ 
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: 3
            }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600} mb={2}>
                  Actividad Semanal
                </Typography>
                
                <Box display="flex" gap={1} justifyContent="center">
                  {actividadSemanal.map((item, index) => (
                    <Box key={index} textAlign="center">
                      <Box 
                        sx={{ 
                          width: 50, 
                          height: 50, 
                          backgroundColor: item.activo ? "#FFD700" : "rgba(255,255,255,0.1)",
                          borderRadius: 1,
                          mb: 1
                        }} 
                      />
                      <Typography variant="caption">
                        {item.dia}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>

          </Grid>

          {/* COLUMNA DERECHA - HORARIOS DEL DÍA */}
          <Grid item xs={12} md={6}>
            <Card sx={{ 
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: 3
            }}>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                  <Typography variant="h6" fontWeight={600}>
                    Horarios del Día
                  </Typography>
                  <Box display="flex" gap={1}>
                    {diasSemana.map((dia, idx) => (
                      <Chip 
                        key={idx}
                        label={dia} 
                        sx={{ 
                          bgcolor: dia === "M" ? "#FFD700" : "rgba(255,255,255,0.1)",
                          color: dia === "M" ? "black" : "white",
                          fontWeight: 600
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                <Box display="flex" flexDirection="column" gap={2}>
                  {horariosDelDia.map((horario, index) => (
                    <Box 
                      key={index}
                      sx={{ 
                        backgroundColor: "rgba(100,100,100,0.3)",
                        p: 2,
                        borderRadius: 2
                      }}
                    >
                      <Typography variant="h6" fontWeight={700}>
                        {horario.titulo}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {horario.hora}
                      </Typography>
                      {horario.subtitulo && (
                        <Typography variant="caption" color="text.secondary">
                          {horario.subtitulo}
                        </Typography>
                      )}
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

        </Grid>

      </Box>
    </Box>
  );
}

// import { useState, useEffect } from 'react';
// import { 
//   Box, 
//   Typography, 
//   Grid, 
//   Card, 
//   CardContent, 
//   Button, 
//   Avatar, 
//   Chip
// } from "@mui/material";
// import { 
//   FitnessCenter as FitnessIcon,
//   People as PeopleIcon,
//   CalendarToday as CalendarIcon,
//   TrendingUp as TrendingIcon
// } from "@mui/icons-material";
// import { useNavigate } from 'react-router-dom';

// export default function DashboardInstructor() {
//   const [usuario, setUsuario] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const usuarioData = localStorage.getItem("usuario");
//     if (usuarioData) {
//       setUsuario(JSON.parse(usuarioData));
//     }
//   }, []);

//   // Datos de ejemplo
//   const estadisticas = {
//     clasesActivas: 5,
//     horariosAsignados: 12,
//     reservasDelDia: 28,
//     asistenciaPromedio: 85
//   };

//   const proximaClase = {
//     nombre: "CROSSFIT AVANZADO",
//     hora: "Hoy, 6:00 PM",
//     instructor: "Instructor, Laura G"
//   };

//   const actividadSemanal = [
//     { dia: "Lun", activo: true },
//     { dia: "Mar", activo: true },
//     { dia: "Mié", activo: true },
//     { dia: "Jue", activo: false },
//     { dia: "Vie", activo: true },
//     { dia: "Sáb", activo: true },
//     { dia: "Dom", activo: false }
//   ];

//   const horariosDelDia = [
//     { titulo: "YOGA FLOW", hora: "7:00 AM - 8:00 AM", capacidad: "15/20", dia: "L" },
//     { titulo: "CROSSFIT BÁSICO", hora: "8:00 AM - 9:00 AM", capacidad: "18/20", dia: "M" },
//     { titulo: "BOXEO FUNDAMENTOS", hora: "6:00 PM - 7:00 PM", capacidad: "20/20", dia: "M" }
//   ];

//   // Navegación a Mis Clases
//   const handleGoToMyClasses = () => {
//     navigate('/instructor/my-classes');
//   };

//   return (
//     <Box sx={{ display: "flex", minHeight: "100vh" }}>
      
//       {/* SIDEBAR */}
//       <Box sx={{ 
//         width: 200, 
//         backgroundColor: "rgba(0,0,0,0.3)",
//         p: 2,
//         display: "flex",
//         flexDirection: "column",
//         borderRight: "1px solid rgba(255,255,255,0.1)"
//       }}>
//         {/* Logo */}
//         <Box display="flex" alignItems="center" gap={1} mb={4}>
//           <Avatar sx={{ width: 40, height: 40, bgcolor: "#FFD700" }}>
//             <FitnessIcon />
//           </Avatar>
//           <Typography variant="h6" fontWeight={700}>
//             GymControl
//           </Typography>
//         </Box>

//         {/* Menu Items */}
//         <Button 
//           fullWidth 
//           sx={{ 
//             justifyContent: "flex-start", 
//             mb: 1,
//             backgroundColor: "rgba(255,255,255,0.1)",
//             color: "white",
//             '&:hover': { backgroundColor: "rgba(255,255,255,0.2)" }
//           }}
//         >
//           📊 Dashboard
//         </Button>
//         <Button 
//           fullWidth 
//           onClick={handleGoToMyClasses}
//           sx={{ 
//             justifyContent: "flex-start", 
//             mb: 1,
//             backgroundColor: "rgba(255,255,255,0.05)",
//             color: "white",
//             fontWeight: 600,
//             '&:hover': { backgroundColor: "rgba(255,255,255,0.1)" }
//           }}
//         >
//           🏋️ Mis Clases
//         </Button>
//         <Button 
//           fullWidth 
//           sx={{ 
//             justifyContent: "flex-start", 
//             mb: 1,
//             color: "white",
//             '&:hover': { backgroundColor: "rgba(255,255,255,0.1)" }
//           }}
//         >
//           ⏱️ Horarios
//         </Button>
//         <Button 
//           fullWidth 
//           sx={{ 
//             justifyContent: "flex-start", 
//             mb: 1,
//             color: "white",
//             '&:hover': { backgroundColor: "rgba(255,255,255,0.1)" }
//           }}
//         >
//           ✅ Asistencias
//         </Button>
//         <Button 
//           fullWidth 
//           sx={{ 
//             justifyContent: "flex-start", 
//             mb: 1,
//             color: "white",
//             '&:hover': { backgroundColor: "rgba(255,255,255,0.1)" }
//           }}
//         >
//           👥 Alumnos
//         </Button>
//         <Button 
//           fullWidth 
//           sx={{ 
//             justifyContent: "flex-start", 
//             mb: 1,
//             color: "white",
//             '&:hover': { backgroundColor: "rgba(255,255,255,0.1)" }
//           }}
//         >
//           👤 Mi Perfil
//         </Button>
//       </Box>

//       {/* CONTENIDO PRINCIPAL */}
//       <Box sx={{ flexGrow: 1, p: 4 }}>
        
//         {/* HEADER */}
//         <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
//           <Typography variant="h4" fontWeight={700}>
//             Dashboard del Instructor
//           </Typography>
//           <Box display="flex" alignItems="center" gap={2}>
//             <Avatar sx={{ bgcolor: "rgba(255,255,255,0.1)" }}>🔔</Avatar>
//             <Avatar sx={{ bgcolor: "#FFD700" }}>
//               {usuario?.nombre?.charAt(0) || 'I'}
//             </Avatar>
//           </Box>
//         </Box>

//         {/* TARJETAS DE ESTADÍSTICAS */}
//         <Grid container spacing={3} mb={4}>
          
//           <Grid item xs={12} sm={6} md={3}>
//             <Card sx={{ 
//               backgroundColor: "rgba(255,255,255,0.05)",
//               borderRadius: 3
//             }}>
//               <CardContent>
//                 <Typography variant="body2" color="text.secondary" gutterBottom>
//                   Clases Activas
//                 </Typography>
//                 <Typography variant="h3" fontWeight={700}>
//                   {estadisticas.clasesActivas}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>

//           <Grid item xs={12} sm={6} md={3}>
//             <Card sx={{ 
//               backgroundColor: "rgba(255,255,255,0.05)",
//               borderRadius: 3
//             }}>
//               <CardContent>
//                 <Typography variant="body2" color="text.secondary" gutterBottom>
//                   Horarios Asignados
//                 </Typography>
//                 <Typography variant="h3" fontWeight={700}>
//                   {estadisticas.horariosAsignados}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>

//           <Grid item xs={12} sm={6} md={3}>
//             <Card sx={{ 
//               backgroundColor: "rgba(255,255,255,0.05)",
//               borderRadius: 3
//             }}>
//               <CardContent>
//                 <Typography variant="body2" color="text.secondary" gutterBottom>
//                   Reservas del Día
//                 </Typography>
//                 <Typography variant="h3" fontWeight={700}>
//                   {estadisticas.reservasDelDia}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>

//           <Grid item xs={12} sm={6} md={3}>
//             <Card sx={{ 
//               backgroundColor: "rgba(255,255,255,0.05)",
//               borderRadius: 3
//             }}>
//               <CardContent>
//                 <Typography variant="body2" color="text.secondary" gutterBottom>
//                   Asistencia Promedio
//                 </Typography>
//                 <Typography variant="h3" fontWeight={700}>
//                   {estadisticas.asistenciaPromedio}%
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>

//         </Grid>

//         <Grid container spacing={3}>
          
//           {/* COLUMNA IZQUIERDA */}
//           <Grid item xs={12} md={6}>
            
//             {/* PRÓXIMA CLASE */}
//             <Card sx={{ 
//               backgroundColor: "rgba(255,255,255,0.05)",
//               borderRadius: 3,
//               mb: 3
//             }}>
//               <CardContent>
//                 <Typography variant="h6" fontWeight={600} mb={2}>
//                   Próxima Clase
//                 </Typography>
                
//                 <Box 
//                   sx={{ 
//                     backgroundColor: "rgba(100,100,100,0.3)",
//                     p: 2,
//                     borderRadius: 2,
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center"
//                   }}
//                 >
//                   <Box>
//                     <Typography variant="h6" fontWeight={700}>
//                       {proximaClase.nombre}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {proximaClase.hora}
//                     </Typography>
//                     <Typography variant="caption" color="text.secondary">
//                       {proximaClase.instructor}
//                     </Typography>
//                   </Box>
                  
//                   <Button 
//                     variant="contained" 
//                     sx={{ 
//                       bgcolor: "#FFD700", 
//                       color: "black",
//                       fontWeight: 600,
//                       '&:hover': { bgcolor: "#FFC700" }
//                     }}
//                   >
//                     Ver Lista de Alumnos
//                   </Button>
//                 </Box>
//               </CardContent>
//             </Card>

//             {/* ACTIVIDAD SEMANAL */}
//             <Card sx={{ 
//               backgroundColor: "rgba(255,255,255,0.05)",
//               borderRadius: 3
//             }}>
//               <CardContent>
//                 <Typography variant="h6" fontWeight={600} mb={2}>
//                   Actividad Semanal
//                 </Typography>
                
//                 <Box display="flex" gap={1} justifyContent="center">
//                   {actividadSemanal.map((item, index) => (
//                     <Box key={index} textAlign="center">
//                       <Box 
//                         sx={{ 
//                           width: 50, 
//                           height: 50, 
//                           backgroundColor: item.activo ? "#FFD700" : "rgba(255,255,255,0.1)",
//                           borderRadius: 1,
//                           mb: 1
//                         }} 
//                       />
//                       <Typography variant="caption">
//                         {item.dia}
//                       </Typography>
//                     </Box>
//                   ))}
//                 </Box>
//               </CardContent>
//             </Card>

//           </Grid>

//           {/* COLUMNA DERECHA - HORARIOS DEL DÍA */}
//           <Grid item xs={12} md={6}>
//             <Card sx={{ 
//               backgroundColor: "rgba(255,255,255,0.05)",
//               borderRadius: 3
//             }}>
//               <CardContent>
//                 <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//                   <Typography variant="h6" fontWeight={600}>
//                     Horarios del Día
//                   </Typography>
//                   <Chip 
//                     label="Hoy" 
//                     sx={{ 
//                       bgcolor: "#FFD700",
//                       color: "black",
//                       fontWeight: 600
//                     }}
//                   />
//                 </Box>

//                 <Box display="flex" flexDirection="column" gap={2}>
//                   {horariosDelDia.map((horario, index) => (
//                     <Box 
//                       key={index}
//                       sx={{ 
//                         backgroundColor: "rgba(100,100,100,0.3)",
//                         p: 2,
//                         borderRadius: 2
//                       }}
//                     >
//                       <Typography variant="h6" fontWeight={700}>
//                         {horario.titulo}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {horario.hora}
//                       </Typography>
//                       <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
//                         <Chip 
//                           label={horario.capacidad}
//                           size="small"
//                           sx={{ 
//                             bgcolor: horario.capacidad === "20/20" ? "#4CAF50" : "rgba(255,255,255,0.1)",
//                             color: "white"
//                           }}
//                         />
//                         <Button 
//                           size="small" 
//                           sx={{ color: "#FFD700" }}
//                           onClick={() => alert(`Ver detalles de ${horario.titulo}`)}
//                         >
//                           Ver detalles
//                         </Button>
//                       </Box>
//                     </Box>
//                   ))}
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>

//         </Grid>

//       </Box>
//     </Box>
//   );
// }







// import { useState, useEffect } from 'react';
// import { Box, Typography, Grid, Card, CardContent, Button, Avatar, Chip } from "@mui/material";
// import { 
//   FitnessCenter as FitnessIcon,
//   Schedule as ScheduleIcon,
//   EventAvailable as EventIcon,
//   TrendingUp as TrendingIcon
// } from "@mui/icons-material";

// export default function DashboardInstructor() {
//   const [usuario, setUsuario] = useState(null);

//   useEffect(() => {
//     const usuarioData = localStorage.getItem("usuario");
//     if (usuarioData) {
//       setUsuario(JSON.parse(usuarioData));
//     }
//   }, []);

//   // Datos de ejemplo
//   const estadisticas = {
//     clasesActivas: 5,
//     horariosAsignados: 12,
//     reservasDelDia: 28,
//     asistenciaPromedio: 85
//   };

//   const proximaClase = {
//     nombre: "CROSSFIT AVANZADO",
//     hora: "Hoy, 6:00 PM",
//     instructor: "Instructor, Laura G"
//   };

//   const actividadSemanal = [
//     { dia: "Lun", activo: true },
//     { dia: "Lun", activo: true },
//     { dia: "Mar", activo: true },
//     { dia: "Mié", activo: true },
//     { dia: "Jue", activo: false },
//     { dia: "Jue", activo: true },
//     { dia: "Jue", activo: true },
//     { dia: "Vie", activo: true }
//   ];

//   const horariosDelDia = [
//     { titulo: "YOGA FLOW", hora: "7:00 AM - MM", subtitulo: "Yoga Flow", dia: "L" },
//     { titulo: "LUNES, CRFIT BÁSICO", hora: "Lunes, 8:00 Básico", subtitulo: "Spinning Intenso", dia: "M" },
//     { titulo: "BOXEO FUNDAMENTOS", hora: "Cupos: 15/20", subtitulo: "", dia: "M" }
//   ];

//   const diasSemana = ["L", "M", "M", "S", "D"];

//   return (
//     <Box sx={{ display: "flex", minHeight: "100vh" }}>
      
//       {/* SIDEBAR */}
//       <Box sx={{ 
//         width: 200, 
//         backgroundColor: "rgba(0,0,0,0.3)",
//         p: 2,
//         display: "flex",
//         flexDirection: "column"
//       }}>
//         {/* Logo */}
//         <Box display="flex" alignItems="center" gap={1} mb={4}>
//           <Avatar sx={{ width: 40, height: 40, bgcolor: "#FFD700" }}>
//             <FitnessIcon />
//           </Avatar>
//           <Typography variant="h6" fontWeight={700}>
//             GymControl
//           </Typography>
//         </Box>

//         {/* Menu Items */}
//         <Button 
//           fullWidth 
//           sx={{ 
//             justifyContent: "flex-start", 
//             mb: 1,
//             backgroundColor: "rgba(255,255,255,0.1)",
//             color: "white",
//             '&:hover': { backgroundColor: "rgba(255,255,255,0.2)" }
//           }}
//         >
//           📊 Dashboard
//         </Button>
//         <Button 
//           fullWidth 
//           sx={{ 
//             justifyContent: "flex-start", 
//             mb: 1,
//             backgroundColor: "#FFD700",
//             color: "black",
//             fontWeight: 600,
//             '&:hover': { backgroundColor: "#FFC700" }
//           }}
//         >
//           🏋️ Mis Clases
//         </Button>
//         <Button 
//           fullWidth 
//           sx={{ 
//             justifyContent: "flex-start", 
//             mb: 1,
//             color: "white",
//             '&:hover': { backgroundColor: "rgba(255,255,255,0.1)" }
//           }}
//         >
//           {/* 📅 Mis Clases
//         </Button>
//         <Button 
//           fullWidth 
//           sx={{ 
//             justifyContent: "flex-start", 
//             mb: 1,
//             color: "white",
//             '&:hover': { backgroundColor: "rgba(255,255,255,0.1)" }
//           }}
//         > */}
//           ⏱️ Horarios
//         </Button>
//         <Button 
//           fullWidth 
//           sx={{ 
//             justifyContent: "flex-start", 
//             mb: 1,
//             color: "white",
//             '&:hover': { backgroundColor: "rgba(255,255,255,0.1)" }
//           }}
//         >
//           ✅ Asistencias
//         </Button>
//         <Button 
//           fullWidth 
//           sx={{ 
//             justifyContent: "flex-start", 
//             mb: 1,
//             color: "white",
//             '&:hover': { backgroundColor: "rgba(255,255,255,0.1)" }
//           }}
//         >
//           👥 Alumnos
//         </Button>
//         <Button 
//           fullWidth 
//           sx={{ 
//             justifyContent: "flex-start", 
//             mb: 1,
//             color: "white",
//             '&:hover': { backgroundColor: "rgba(255,255,255,0.1)" }
//           }}
//         >
//           👤 Mi Perfil
//         </Button>
//       </Box>

//       {/* CONTENIDO PRINCIPAL */}
//       <Box sx={{ flexGrow: 1, p: 4 }}>
        
//         {/* HEADER */}
//         <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
//           <Typography variant="h4" fontWeight={700}>
//             Dashboard del Instructor
//           </Typography>
//           <Box display="flex" alignItems="center" gap={2}>
//             <Avatar sx={{ bgcolor: "error.main" }}>🔔</Avatar>
//             <Avatar src="/api/placeholder/40/40" />
//           </Box>
//         </Box>

//         {/* TARJETAS DE ESTADÍSTICAS */}
//         <Grid container spacing={3} mb={4}>
          
//           <Grid item xs={12} sm={6} md={3}>
//             <Card sx={{ 
//               backgroundColor: "rgba(255,255,255,0.05)",
//               borderRadius: 3
//             }}>
//               <CardContent>
//                 <Typography variant="body2" color="text.secondary" gutterBottom>
//                   Clases Activas
//                 </Typography>
//                 <Typography variant="h3" fontWeight={700}>
//                   {estadisticas.clasesActivas}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>

//           <Grid item xs={12} sm={6} md={3}>
//             <Card sx={{ 
//               backgroundColor: "rgba(255,255,255,0.05)",
//               borderRadius: 3
//             }}>
//               <CardContent>
//                 <Typography variant="body2" color="text.secondary" gutterBottom>
//                   Horarios Asignados
//                 </Typography>
//                 <Typography variant="h3" fontWeight={700}>
//                   {estadisticas.horariosAsignados}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>

//           <Grid item xs={12} sm={6} md={3}>
//             <Card sx={{ 
//               backgroundColor: "rgba(255,255,255,0.05)",
//               borderRadius: 3
//             }}>
//               <CardContent>
//                 <Typography variant="body2" color="text.secondary" gutterBottom>
//                   Reservas del Día
//                 </Typography>
//                 <Typography variant="h3" fontWeight={700}>
//                   {estadisticas.reservasDelDia}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>

//           <Grid item xs={12} sm={6} md={3}>
//             <Card sx={{ 
//               backgroundColor: "rgba(255,255,255,0.05)",
//               borderRadius: 3
//             }}>
//               <CardContent>
//                 <Typography variant="body2" color="text.secondary" gutterBottom>
//                   Asistencia Promedio
//                 </Typography>
//                 <Typography variant="h3" fontWeight={700}>
//                   {estadisticas.asistenciaPromedio}%
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>

//         </Grid>

//         <Grid container spacing={3}>
          
//           {/* COLUMNA IZQUIERDA */}
//           <Grid item xs={12} md={6}>
            
//             {/* PRÓXIMA CLASE */}
//             <Card sx={{ 
//               backgroundColor: "rgba(255,255,255,0.05)",
//               borderRadius: 3,
//               mb: 3
//             }}>
//               <CardContent>
//                 <Typography variant="h6" fontWeight={600} mb={2}>
//                   Próxima Clase
//                 </Typography>
                
//                 <Box 
//                   sx={{ 
//                     backgroundColor: "rgba(100,100,100,0.3)",
//                     p: 2,
//                     borderRadius: 2,
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center"
//                   }}
//                 >
//                   <Box>
//                     <Typography variant="h6" fontWeight={700}>
//                       {proximaClase.nombre}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {proximaClase.hora}
//                     </Typography>
//                     <Typography variant="caption" color="text.secondary">
//                       {proximaClase.instructor}
//                     </Typography>
//                   </Box>
                  
//                   <Button 
//                     variant="contained" 
//                     sx={{ 
//                       bgcolor: "#FFD700", 
//                       color: "black",
//                       fontWeight: 600,
//                       '&:hover': { bgcolor: "#FFC700" }
//                     }}
//                   >
//                     Ver Lista de Alumnos
//                   </Button>
//                 </Box>
//               </CardContent>
//             </Card>

//             {/* ACTIVIDAD SEMANAL */}
//             <Card sx={{ 
//               backgroundColor: "rgba(255,255,255,0.05)",
//               borderRadius: 3
//             }}>
//               <CardContent>
//                 <Typography variant="h6" fontWeight={600} mb={2}>
//                   Actividad Semanal
//                 </Typography>
                
//                 <Box display="flex" gap={1} justifyContent="center">
//                   {actividadSemanal.map((item, index) => (
//                     <Box key={index} textAlign="center">
//                       <Box 
//                         sx={{ 
//                           width: 50, 
//                           height: 50, 
//                           backgroundColor: item.activo ? "#FFD700" : "rgba(255,255,255,0.1)",
//                           borderRadius: 1,
//                           mb: 1
//                         }} 
//                       />
//                       <Typography variant="caption">
//                         {item.dia}
//                       </Typography>
//                     </Box>
//                   ))}
//                 </Box>
//               </CardContent>
//             </Card>

//           </Grid>

//           {/* COLUMNA DERECHA - HORARIOS DEL DÍA */}
//           <Grid item xs={12} md={6}>
//             <Card sx={{ 
//               backgroundColor: "rgba(255,255,255,0.05)",
//               borderRadius: 3
//             }}>
//               <CardContent>
//                 <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//                   <Typography variant="h6" fontWeight={600}>
//                     Horarios del Día
//                   </Typography>
//                   <Box display="flex" gap={1}>
//                     {diasSemana.map((dia, idx) => (
//                       <Chip 
//                         key={idx}
//                         label={dia} 
//                         sx={{ 
//                           bgcolor: dia === "M" ? "#FFD700" : "rgba(255,255,255,0.1)",
//                           color: dia === "M" ? "black" : "white",
//                           fontWeight: 600
//                         }}
//                       />
//                     ))}
//                   </Box>
//                 </Box>

//                 <Box display="flex" flexDirection="column" gap={2}>
//                   {horariosDelDia.map((horario, index) => (
//                     <Box 
//                       key={index}
//                       sx={{ 
//                         backgroundColor: "rgba(100,100,100,0.3)",
//                         p: 2,
//                         borderRadius: 2
//                       }}
//                     >
//                       <Typography variant="h6" fontWeight={700}>
//                         {horario.titulo}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {horario.hora}
//                       </Typography>
//                       {horario.subtitulo && (
//                         <Typography variant="caption" color="text.secondary">
//                           {horario.subtitulo}
//                         </Typography>
//                       )}
//                     </Box>
//                   ))}
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>

//         </Grid>

//       </Box>
//     </Box>
//   );
// }