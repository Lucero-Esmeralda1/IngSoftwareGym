import { Box, Typography, Button, Card, CardContent, Grid, Avatar } from '@mui/material';
import { gymTheme } from '../gymTheme';
import { ThemeProvider } from '@mui/material/styles';
import Layout from '../layouts/Layout';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DescriptionIcon from '@mui/icons-material/Description';

const reportes = [
    { titulo: 'Ingresos del mes', valor: '$52 430', color: '#388e3c', icon: '💰' },
    { titulo: 'Asistencia promedio', valor: '92 %', color: '#1976d2', icon: '✅' },
    { titulo: 'Clases más concurridas', valor: 'Spinning', color: '#ff9800', icon: '🚴' },
    { titulo: 'Membresías próximas a vencer', valor: '12', color: '#d32f2f', icon: '⏳' },
];

export default function Reportes() {
    const rol = 'Administrador'; // ← fijo para este ejemplo

    const exportarPDF = () => alert('Exportando PDF... (simulado)');
    const exportarExcel = () => alert('Exportando Excel... (simulado)');

    return (
        <ThemeProvider theme={gymTheme}>
        <Layout rol="Administrador">
            <Box sx={{ p: 4 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
                <AssessmentIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Reportes
            </Typography>

            <Box display="flex" gap={2} mb={3}>
                <Button variant="contained" startIcon={<PictureAsPdfIcon />} onClick={exportarPDF} sx={{ borderRadius: 3 }}>
                Exportar PDF
                </Button>
                <Button variant="contained" startIcon={<DescriptionIcon />} onClick={exportarExcel} sx={{ borderRadius: 3 }}>
                Exportar Excel
                </Button>
            </Box>

            <Grid container spacing={3}>
                {reportes.map((r) => (
                <Grid item xs={12} sm={6} md={3} key={r.titulo}>
                    <Card elevation={8} sx={{ borderRadius: 4, backgroundColor: 'rgba(255,255,255,.05)' }}>
                    <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ bgcolor: r.color, fontSize: 24 }}>{r.icon}</Avatar>
                        <Box>
                        <Typography variant="h6">{r.titulo}</Typography>
                        <Typography variant="h4" color={r.color}>{r.valor}</Typography>
                        </Box>
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