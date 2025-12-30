import { Box, Typography, Grid, Paper, Button } from "@mui/material";

// Estilo de cristal para las tarjetas
const glassStyle = {
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: 4,
  p: 3,
  color: 'white'
};

export default function DashboardHome() {
  return (
    <Box>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 4 }}>
        Dashboard de Administración
      </Typography>

      {/* TARJETAS DE ESTADÍSTICAS */}
      <Grid container spacing={3} sx={{ mb: 5 }}>
        {[
          { label: 'Total de Clientes Activos', val: '485' },
          { label: 'Total de Entrenadores', val: '15' },
          { label: 'Clases Activas', val: '22' },
          { label: 'Reservas del Día', val: '78' },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper sx={glassStyle}>
              <Typography variant="body2" sx={{ opacity: 0.7, mb: 1 }}>{item.label}</Typography>
              <Typography variant="h3" fontWeight={800} sx={{ color: '#FFD700' }}>{item.val}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* SECCIÓN INFERIOR: PAGOS Y ESTADO */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Paper sx={glassStyle}>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>Pagos Pendientes</Typography>
            {/* Simulación de lista de pagos */}
            {[
              { name: 'Juan Pérez', id: '20211011', date: '20/09/2023' },
              { name: 'Ana Estrener', id: '20212202', date: '20/09/2023' },
            ].map((pago, i) => (
              <Box key={i} sx={{ 
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                p: 2, mb: 1, bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 2
              }}>
                <Box>
                  <Typography fontWeight={600}>{pago.name}</Typography>
                  <Typography variant="caption" sx={{ opacity: 0.5 }}>{pago.id} | {pago.date}</Typography>
                </Box>
                <Button variant="contained" sx={{ bgcolor: '#FFD700', color: 'black', fontWeight: 800 }}>
                  Cobrar
                </Button>
              </Box>
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper sx={glassStyle}>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>Estado del Gimnasio</Typography>
            <Box sx={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.3 }}>
              {/* Aquí iría un componente de gráfica como Recharts */}
              Gráfico de Asistencias
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}