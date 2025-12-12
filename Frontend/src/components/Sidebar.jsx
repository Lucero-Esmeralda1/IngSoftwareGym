import { Drawer, List, ListItem, ListItemText, ListItemIcon, Toolbar, Typography, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ClassIcon from '@mui/icons-material/Class';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PaymentIcon from '@mui/icons-material/Payment';

const drawerWidth = 240;

const menuAdmin = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/administrador' },
    { text: 'Clientes', icon: <PeopleIcon />, path: '/clientes' },
    { text: 'Clases', icon: <ClassIcon />, path: '/clases' },
    { text: 'Reservas', icon: <EventAvailableIcon />, path: '/reservas' },
    { text: 'Asistencia', icon: <HowToRegIcon />, path: '/asistencia' },
    { text: 'Pagos', icon: <PaymentIcon />, path: '/pagos' },
];

const menuInstructor = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/instructor' },
    { text: 'Mis Clases', icon: <ClassIcon />, path: '/clases' },
    { text: 'Asistencia', icon: <HowToRegIcon />, path: '/asistencia' },
    { text: 'Ver Reservas', icon: <EventAvailableIcon />, path: '/reservas' },
];

const menuCliente = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/cliente' },
    { text: 'Mis Clases', icon: <ClassIcon />, path: '/clases' },
    { text: 'Mis Reservas', icon: <EventAvailableIcon />, path: '/reservas' },
    { text: 'Mi Membresía', icon: <PaymentIcon />, path: '/pagos' },
];

export default function Sidebar() {
    const navigate = useNavigate();
    const rol = localStorage.getItem('rol'); // 'Administrador' | 'Instructor' | 'Cliente'

    let items = [];
    if (rol === 'Administrador') items = menuAdmin;
    else if (rol === 'Instructor') items = menuInstructor;
    else items = menuCliente;

    return (
        <Drawer
        variant="permanent"
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
        >
        <Toolbar>
            <Typography variant="h6" noWrap>GymControl</Typography>
        </Toolbar>

        <List>
            {items.map((item) => (
            <ListItem button key={item.text} onClick={() => navigate(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
            </ListItem>
            ))}
        </List>
        </Drawer>
    );
}