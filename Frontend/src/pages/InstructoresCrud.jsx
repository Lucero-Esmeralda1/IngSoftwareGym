import { useState } from 'react';
import { Box, Typography, Button, TextField, Paper, Avatar, Chip, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { gymTheme } from '../gymTheme';
import { ThemeProvider } from '@mui/material/styles';
import Layout from '../layouts/Layout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const instructoresIniciales = [
    { id: 1, nombre: 'Ana García', email: 'ana@gym.com', telefono: '987654321', estado: 'Activo', foto: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, nombre: 'Carlos López', email: 'carlos@gym.com', telefono: '912345678', estado: 'Activo', foto: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, nombre: 'Lucía Mendoza', email: 'lucia@gym.com', telefono: '934567890', estado: 'Inactivo', foto: 'https://i.pravatar.cc/150?img=3' },
];

const estadoColor = (estado) => (estado === 'Activo' ? 'success' : 'default');

export default function InstructoresCrud() {
    const rol = 'Administrador'; // ← fijo para este ejemplo
    const [instructores, setInstructores] = useState(instructoresIniciales);
    const [open, setOpen] = useState(false);
    const [nuevo, setNuevo] = useState({ nombre: '', email: '', telefono: '', estado: 'Activo', foto: '' });

    const agregar = () => {
        if (!nuevo.nombre || !nuevo.email) return alert('Completa nombre y correo');
        const nuevoInstructor = {
        id: Date.now(),
        nombre: nuevo.nombre,
        email: nuevo.email,
        telefono: nuevo.telefono,
        estado: nuevo.estado,
        foto: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
        };
        setInstructores(prev => [...prev, nuevoInstructor]);
        setNuevo({ nombre: '', email: '', telefono: '', estado: 'Activo', foto: '' });
        setOpen(false);
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
        field: 'foto',
        headerName: 'Foto',
        width: 80,
        renderCell: (params) => <Avatar src={params.value} />,
        },
        { field: 'nombre', headerName: 'Nombre', flex: 1 },
        { field: 'email', headerName: 'Correo', flex: 1 },
        { field: 'telefono', headerName: 'Teléfono', width: 130 },
        {
        field: 'estado',
        headerName: 'Estado',
        width: 100,
        renderCell: (params) => <Chip label={params.value} color={estadoColor(params.value)} size="small" />,
        },
        {
        field: 'acciones',
        headerName: 'Acciones',
        width: 120,
        renderCell: () => (
            <Box display="flex" gap={1}>
            <Button size="small" startIcon={<EditIcon />} sx={{ borderRadius: 3 }}>Editar</Button>
            <Button size="small" color="error" startIcon={<DeleteIcon />} sx={{ borderRadius: 3 }}>Eliminar</Button>
            </Box>
        ),
        },
    ];

    return (
        <ThemeProvider theme={gymTheme}>
        <Layout rol="Administrador">
            <Box sx={{ p: 4 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
                <PersonAddIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Instructores
            </Typography>

            <Button variant="contained" startIcon={<PersonAddIcon />} onClick={() => setOpen(true)} sx={{ mb: 3, borderRadius: 3 }}>
                Nuevo Instructor
            </Button>

            <Paper elevation={6} sx={{ borderRadius: 4, overflow: 'hidden', backgroundColor: 'rgba(255,255,255,.05)' }}>
                <DataGrid
                rows={instructores}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                sx={{
                    '& .MuiDataGrid-row:hover': { backgroundColor: '#254355ff' },
                    '& .MuiDataGrid-columnHeaders': { backgroundColor: '#fafafa' },
                }}
                />
            </Paper>

            {/* Modal para agregar */}
            <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
                <DialogTitle>Nuevo Instructor</DialogTitle>
                <DialogContent>
                <TextField fullWidth label="Nombre" value={nuevo.nombre} onChange={(e) => setNuevo({ ...nuevo, nombre: e.target.value })} sx={{ mb: 2 }} />
                <TextField fullWidth label="Correo" value={nuevo.email} onChange={(e) => setNuevo({ ...nuevo, email: e.target.value })} sx={{ mb: 2 }} />
                <TextField fullWidth label="Teléfono" value={nuevo.telefono} onChange={(e) => setNuevo({ ...nuevo, telefono: e.target.value })} sx={{ mb: 2 }} />
                <TextField fullWidth label="Estado" value={nuevo.estado} onChange={(e) => setNuevo({ ...nuevo, estado: e.target.value })} sx={{ mb: 2 }} />
                </DialogContent>
                <DialogActions>
                <Button onClick={() => setOpen(false)} sx={{ borderRadius: 3 }}>Cancelar</Button>
                <Button onClick={agregar} variant="contained" sx={{ borderRadius: 3 }}>Guardar</Button>
                </DialogActions>
            </Dialog>
            </Box>
        </Layout>
        </ThemeProvider>
    );
}