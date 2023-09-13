import  React , {useState, useEffect}from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
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
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ListItemButton from '@mui/material/ListItemButton'
import { useNavigate } from 'react-router-dom';
import baseurl from "../../baseURL/config"


let user = JSON.parse(localStorage.getItem('userDetails'));

function Sidebar() {
  const navigate = useNavigate();
  // const [user ,setUser] = ('')
  // useEffect(() => {
  //   setUser(JSON.parse(localStorage.getItem("userDetails")))
  // }, [])


  const [recdata , setRecdata] = useState([])
    useEffect(() => {
      user = JSON.parse(localStorage.getItem('userDetails'));
      fetch(`${baseurl}/recruiter/${user._id}`)
          .then((response) => response.json())
          .then((data) => {
             setRecdata(data.data);
              console.log(data.data);
             
          })
          .catch((err) => console.log(err));
  }, []);
  console.log(recdata);

  function profileRediret(){
     if(recdata.length===0){
      navigate('/ProfileForm')
     }
     else {navigate('/MyPlans')}
  }
  return (
    
    <div style={{ backgroundColor: '#f0f0f0', padding: '16px', height: '100%', borderRadius: '0.5rem' ,marginTop: "0.5rem"  }}>
      <List>
        <ListItemButton href='/'>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton  onClick={profileRediret}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton href="/SubscriptionModal">
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary="Plans" />
        </ListItemButton>
      </List>
    </div>
  );
}

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
        <Toolbar sx={{ flexWrap: 'wrap', backgroundColor: '#0070B3',borderRadius: "20px", marginTop:"10px" ,  }}>
          <Typography variant="h4" color="#FFF" noWrap sx={{ flexGrow: 1 }}>
            Hiclousia
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="ls" component="main" sx={{ display: 'flex', minHeight: '100vh' }}>
        {/* Sidebar */}
        <aside style={{ width: '240px', marginRight: '16px' }}>
          <Sidebar />
        </aside>
        {/* Main content */}
        <Container maxWidth="md" style={{ border: '1px solid lightgrey', borderRadius: '0.5rem', marginTop:"0.5rem" }}>
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
      </Container>
      <br /><br />
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
