import { Box, Typography, Button, Card, CardContent, CardMedia, Avatar, Chip } from '@mui/material';
import { gymTheme } from '../gymTheme';
import { ThemeProvider } from '@mui/material/styles';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import Layout from '../layouts/Layout';

const clases = [
    { id: 1, nombre: 'Spinning', instructor: 'Ana García', hora: '08:00 - 09:00', cupos: 8, foto: 'https://i.pravatar.cc/150?img=1', imgClase: 'https://clubgymsierra.es/wp-content/uploads/2024/01/Diseno-sin-titulo-30.jpg' },
    { id: 2, nombre: 'Yoga', instructor: 'Carlos López', hora: '18:00 - 19:00', cupos: 3, foto: 'https://i.pravatar.cc/150?img=2', imgClase: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWED6tTd5PIVWR5DfwOdCXj1GUnO1PpKbfWg&s' },
    { id: 3, nombre: 'Crossfit', instructor: 'Lucía Mendoza', hora: '19:00 - 20:00', cupos: 0, foto: 'https://i.pravatar.cc/150?img=3', imgClase: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbK5IZIXBNd_d_oNPCNWLoy3zj936yBQfvg&s' },
];

const estadoColor = (cupos) => (cupos > 0 ? 'success' : 'error');

export default function ClasesDisponibles() {
    const rol = localStorage.getItem('rol');
    const reservar = (id) => alert(`Reservaste la clase ${id} (simulado)`);

    return (
        <ThemeProvider theme={gymTheme}>
            <Layout rol={rol}>
                <Box sx={{ p: 4 }}>
                    <Typography variant="h4" fontWeight={700} gutterBottom>
                        <EventAvailableIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                        Clases Disponibles
                    </Typography>

                    <Box display="flex" flexWrap="wrap" gap={4} justifyContent="center">
                        {clases.map((c) => (
                            <Card
                                key={c.id}
                                sx={{
                                    width: 320,
                                    borderRadius: 5,
                                    boxShadow: 8,
                                    transition: 'transform .3s',
                                    '&:hover': { transform: 'scale(1.03)' },
                                }}
                            >
                                <CardMedia component="img" height="180" image={c.imgClase} alt={c.nombre} />
                                <CardContent>
                                    <Box display="flex" alignItems="center" gap={2} mb={2}>
                                        <Avatar src={c.foto} />
                                        <Box>
                                            <Typography variant="h6">{c.nombre}</Typography>
                                            <Typography variant="body2" color="text.secondary">{c.instructor}</Typography>
                                        </Box>
                                    </Box>

                                    <Typography variant="body2" color="text.secondary" mb={1}>
                                        {c.hora}
                                    </Typography>

                                    <Chip 
                                        label={`${c.cupos} cupos libres`} 
                                        color={estadoColor(c.cupos)} 
                                        sx={{ mb: 2 }} 
                                    />

                                    <Button
                                        fullWidth
                                        variant="contained"
                                        size="large"
                                        disabled={c.cupos === 0}
                                        onClick={() => reservar(c.id)}
                                        sx={{ borderRadius: 3 }}
                                    >
                                        {c.cupos === 0 ? 'LLENA' : 'Reservar'}
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Box>
            </Layout>
        </ThemeProvider>
    );
}
