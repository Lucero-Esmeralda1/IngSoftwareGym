import { useState } from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText, Avatar, Chip, Paper } from '@mui/material';
import { gymTheme } from '../gymTheme';
import { ThemeProvider } from '@mui/material/styles';
import Layout from '../layouts/Layout';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const alumnosData = [
    { id: 1, nombre: 'Lucero Ramos', presente: false, foto: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, nombre: 'Jean Colque', presente: true, foto: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, nombre: 'Carlos López', presente: false, foto: 'https://i.pravatar.cc/150?img=3' },
    { id: 4, nombre: 'Ana García', presente: true, foto: 'https://i.pravatar.cc/150?img=4' },
];

export default function MarcarAsistencia() {
    const rol = localStorage.getItem('rol');
    const [lista, setLista] = useState(alumnosData);

    const toggle = (id) => {
        setLista(prev =>
        prev.map(a => (a.id === id ? { ...a, presente: !a.presente } : a))
        );
    };

    const guardar = () => {
        console.log('Asistencia guardada', lista);
        alert('Asistencia guardada ✅');
    };

    return (
        <ThemeProvider theme={gymTheme}>
        <Layout rol={rol}>
            <Box sx={{ p: 4 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
                <HowToRegIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Marcar Asistencia
            </Typography>

            <Paper elevation={4} sx={{ p: 3, borderRadius: 4, backgroundColor: 'rgba(255,255,255,.05)' }}>
                <List>
                {lista.map((a) => (
                    <ListItem key={a.id} divider>
                    <Avatar src={a.foto} sx={{ mr: 2 }} />
                    <ListItemText primary={a.nombre} secondary={a.presente ? 'Presente' : 'Ausente'} />
                    <Chip
                        label={a.presente ? '✓' : '✗'}
                        color={a.presente ? 'success' : 'error'}
                        onClick={() => toggle(a.id)}
                        sx={{ ml: 2 }}
                    />
                    </ListItem>
                ))}
                </List>

                <Box mt={3} textAlign="center">
                <Button
                    variant="contained"
                    size="large"
                    startIcon={<CheckCircleIcon />}
                    onClick={guardar}
                    sx={{ borderRadius: 3 }}
                >
                    Guardar Asistencia
                </Button>
                </Box>
            </Paper>
            </Box>
        </Layout>
        </ThemeProvider>
    );
}