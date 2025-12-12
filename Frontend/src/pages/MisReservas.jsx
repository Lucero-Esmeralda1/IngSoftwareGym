import { useState } from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia, Avatar, Chip, Paper } from '@mui/material';
import { gymTheme } from '../gymTheme';
import { ThemeProvider } from '@mui/material/styles';
import Layout from '../layouts/Layout';
import DeleteIcon from '@mui/icons-material/Delete';
import EventBusyIcon from '@mui/icons-material/EventBusy';

const misReservas = [
    { id: 1, clase: 'Spinning', instructor: 'Ana García', fecha: '2025-06-25', hora: '08:00 - 09:00', imgClase: 'https://clubgymsierra.es/wp-content/uploads/2024/01/Diseno-sin-titulo-30.jpg', foto: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, clase: 'Yoga', instructor: 'Carlos López', fecha: '2025-06-26', hora: '18:00 - 19:00', imgClase: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWED6tTd5PIVWR5DfwOdCXj1GUnO1PpKbfWg&s', foto: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, clase: 'Crossfit', instructor: 'Lucía Mendoza', fecha: '2025-06-27', hora: '19:00 - 20:00', imgClase: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbK5IZIXBNd_d_oNPCNWLoy3zj936yBQfvg&s', foto: 'https://i.pravatar.cc/150?img=3' },
];

export default function MisReservas() {
    const rol = localStorage.getItem('rol');
    const [reservas, setReservas] = useState(misReservas);

    const cancelar = (id) => {
        setReservas(prev => prev.filter(r => r.id !== id));
        alert(`Cancelaste la reserva ${id} (simulado)`);
    };

    return (
        <ThemeProvider theme={gymTheme}>
        <Layout rol={rol}>
            <Box sx={{ p: 4 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
                <EventBusyIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Mis Reservas
            </Typography>

            <Box display="flex" flexWrap="wrap" gap={4} justifyContent="center">
                {reservas.map((r) => (
                <Card
                    key={r.id}
                    sx={{
                    width: 320,
                    borderRadius: 5,
                        boxShadow: 8,
                        transition: 'transform .3s',
                        '&:hover': { transform: 'scale(1.03)' },
                    }}
                >
                    <CardMedia component="img" height="180" image={r.imgClase} alt={r.clase} />
                    <CardContent>
                    <Box display="flex" alignItems="center" gap={2} mb={2}>
                        <Avatar src={r.foto} />
                        <Box>
                        <Typography variant="h6">{r.clase}</Typography>
                        <Typography variant="body2" color="text.secondary">{r.instructor}</Typography>
                        </Box>
                    </Box>
                    <Typography variant="body2" color="text.secondary" mb={1}>{r.fecha} · {r.hora}</Typography>
                    <Chip label="Activa" color="success" sx={{ mb: 2 }} />
                    <Button
                        fullWidth
                        variant="outlined"
                        color="error"
                        size="large"
                        startIcon={<DeleteIcon />}
                        onClick={() => cancelar(r.id)}
                        sx={{ borderRadius: 3 }}
                    >
                        Cancelar
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