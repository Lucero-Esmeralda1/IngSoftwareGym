import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ p: 3, textAlign: 'center', background: 'rgba(0,0,0,.3)' }}>
      <Typography variant="body2" color="text.secondary">
        © 2025 GymControl · Mente sana, cuerpo sano
      </Typography>
    </Box>
  );
}