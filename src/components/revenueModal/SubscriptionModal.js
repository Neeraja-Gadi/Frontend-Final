import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import PricingOne from './SuscribeComponents/Compo1';
import PricingTwo from './SuscribeComponents/Compo2';
import PricingZero from './SuscribeComponents/Compo0';
import Hiererchy from './SuscribeComponents/CheckedComponents/Hiererchy';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color='rgb(89, 125, 245)' href="#">
        Hiclousia
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
export default function Pricing() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' , backgroundColor: '#0070B3'}}>
          <Typography variant="h4" color="#FFF" noWrap sx={{ flexGrow: 1 }}>
            Hiclousia
          </Typography>
          {/* <nav>
          </nav> */}
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Buy your plan
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main" style={{ border: '1px solid lightgrey', borderRadius: '0.5rem', }}>
        <br></br>
        <PricingZero />
        <br></br>
        <PricingOne />
        <br></br>
        <PricingTwo />
        <br></br>
        <Hiererchy />
        <br></br>
      </Container>
      <br></br>
      <br /><br />
      {/* <CustomizedTables/> */}
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
} 