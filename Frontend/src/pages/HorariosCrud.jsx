import { Box, Typography, Paper, Grid, Chip } from '@mui/material';
import { gymTheme } from '../gymTheme';
import { ThemeProvider } from '@mui/material/styles';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Layout from '../layouts/Layout';


const horarios = [
    { dia: 'Lunes', inicio: '08:00', fin: '09:00', clase: 'Spinning', instructor: 'Ana García' },
    { dia: 'Martes', inicio: '18:00', fin: '19:00', clase: 'Yoga', instructor: 'Carlos López' },
    { dia: 'Miércoles', inicio: '19:00', fin: '20:00', clase: 'Crossfit', instructor: 'Lucía Mendoza' },
];

export default function HorariosCrud() {
    return (
        <ThemeProvider theme={gymTheme}>
        <Layout rol="Administrador">
            <Box sx={{ p: 4 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
                <CalendarTodayIcon sx={{ mr: 1 }} />
                Horarios Semanales
            </Typography>

            <Grid container spacing={3}>
                {horarios.map((h) => (
                <Grid item xs={12} sm={6} md={4} key={`${h.dia}-${h.inicio}`}>
                    <Paper elevation={6} sx={{ p: 3, borderRadius: 4, backgroundColor: 'rgba(255,255,255,.05)' }}>
                    <Typography variant="h6">{h.dia}</Typography>
                    <Typography variant="body2" color="text.secondary">{h.inicio} - {h.fin}</Typography>
                    <Chip label={h.clase} color="primary" sx={{ mt: 1 }} />
                    <Typography variant="body2" color="text.secondary">Instructor: {h.instructor}</Typography>
                    </Paper>
                </Grid>
                ))}
            </Grid>
            </Box>
        </Layout>
        </ThemeProvider>
    );
}