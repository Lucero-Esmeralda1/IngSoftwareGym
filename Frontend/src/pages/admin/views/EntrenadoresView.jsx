import { useState, useEffect } from 'react';
import api from "../../../api/axios"; // Ruta corregida según tu estructura
import { 
  Box, Typography, Button, TextField, InputAdornment, 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip,
  CircularProgress, Avatar
} from "@mui/material";
import { Search, Add, Edit, Delete, FitnessCenter } from "@mui/icons-material";

const glassStyle = {
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: 4,
  p: 3,
  color: 'white'
};

export default function EntrenadoresView() {
  const [entrenadores, setEntrenadores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchEntrenadores = async () => {
    try {
      setLoading(true);
      const res = await api.get("/entrenadores"); // Asegúrate de tener este endpoint
      setEntrenadores(res.data);
    } catch (error) {
      console.error("Error:", error);
      // Datos de prueba por si falla la API
      setEntrenadores([
        { id: 1, nombre: "Carlos", apellido: "Rivas", especialidad: "Crossfit", estado: "Activo" },
        { id: 2, nombre: "Elena", apellido: "Gómez", especialidad: "Yoga", estado: "En clase" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchEntrenadores(); }, []);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" fontWeight={700}>Nuestros Entrenadores</Typography>
        <Button 
          variant="contained" 
          startIcon={<Add />}
          sx={{ bgcolor: '#FFD700', color: 'black', fontWeight: 700, '&:hover': { bgcolor: '#ccac00' } }}
        >
          Nuevo Entrenador
        </Button>
      </Box>

      <Paper sx={{ ...glassStyle, mb: 3, p: 2 }}>
        <TextField
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar por nombre o especialidad..."
          variant="standard"
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: '#FFD700' }} />
              </InputAdornment>
            ),
            style: { color: 'white' }
          }}
          sx={{ bgcolor: 'rgba(255,255,255,0.05)', p: 1.5, borderRadius: 2 }}
        />
      </Paper>

      {loading ? (
        <Box display="flex" justifyContent="center" py={5}><CircularProgress sx={{ color: '#FFD700' }} /></Box>
      ) : (
        <TableContainer component={Paper} sx={glassStyle}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: '#FFD700', fontWeight: 700 }}>Entrenador</TableCell>
                <TableCell sx={{ color: '#FFD700', fontWeight: 700 }}>Especialidad</TableCell>
                <TableCell sx={{ color: '#FFD700', fontWeight: 700 }}>Estado</TableCell>
                <TableCell sx={{ color: '#FFD700', fontWeight: 700 }} align="right">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {entrenadores.map((ent) => (
                <TableRow key={ent.id}>
                  <TableCell sx={{ color: 'white', display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: '#FFD700', color: 'black' }}><FitnessCenter /></Avatar>
                    {ent.nombre} {ent.apellido}
                  </TableCell>
                  <TableCell sx={{ color: 'rgba(255,255,255,0.7)' }}>{ent.especialidad}</TableCell>
                  <TableCell>
                    <Chip 
                      label={ent.estado} 
                      size="small"
                      sx={{ 
                        bgcolor: ent.estado === 'Activo' ? 'rgba(67, 233, 123, 0.2)' : 'rgba(255, 215, 0, 0.2)',
                        color: ent.estado === 'Activo' ? '#43e97b' : '#FFD700',
                        fontWeight: 700
                      }} 
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Button sx={{ color: '#FFD700' }}><Edit fontSize="small" /></Button>
                    <Button sx={{ color: '#f5576c' }}><Delete fontSize="small" /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}