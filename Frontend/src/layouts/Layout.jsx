import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import { gymTheme } from "../gymTheme";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ rol }) {
  return (
    <ThemeProvider theme={gymTheme}>
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(180deg, #0d0d12 0%, #1b1b26 100%)",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Header rol={rol} />

        <Box sx={{ flexGrow: 1, px: 4, py: 3 }}>
          <Outlet />
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}


// import { Box } from '@mui/material';
// import { gymTheme } from '../gymTheme';
// import { ThemeProvider } from '@mui/material/styles';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// export default function Layout({ children, rol }) {
//     return (
//         <ThemeProvider theme={gymTheme}>
//         <Box
//             sx={{
//                 minHeight: "100vh",
//                 background: "linear-gradient(180deg, #0d0d12 0%, #1b1b26 100%)",
//                 display: "flex",
//                 flexDirection: "column"
//             }}
//             >

//             <Header rol={rol} />

//             {/* CONTENIDO */}
//             <Box sx={{ flexGrow: 1, px: 4, py: 3 }}>
//             {children}
//             </Box>

//             <Footer />
//         </Box>
//         </ThemeProvider>
//     );
// }
