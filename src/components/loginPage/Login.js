import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

function Copyright(props) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Hiclousia
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [result, setResult] = React.useState({ status: false, message: "" })
  const navigate = useNavigate();

  function LoginHandler(e) {

    const data = { email, password }
    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) =>
      response.json().then((responseData) => {
        console.log(responseData);
        setResult(responseData);

        if (responseData.status) {
          localStorage.setItem("userDetails", JSON.stringify(responseData.data))
          localStorage.setItem("token", responseData.token)
          setEmail("")
          setPassword("")
          setTimeout(() => {
            navigate("/")

          }, 1000);

        }

        setTimeout(() => {
          setResult({ status: false, message: "" });
        }, 8000);
      })
    );

  }



  return (


    <ThemeProvider theme={defaultTheme}>

      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Hiclousia
          </Typography>
        </Toolbar>
      </AppBar>


      <Container component="main" maxWidth="xs" style={{ border: '0.1px solid grey', marginTop: '120px', borderRadius: '0.5rem', boxShadow: 'lightgrey', }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>


          <Box component="form" onSubmit={(e) => e.preventDefault()} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />

            {result.status ? (
              <h4 style={{ color: "green" }}>
                {result.message}
              </h4>
            ) : (
              <h4 style={{ color: "red" }}>
                {result.message}
              </h4>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={LoginHandler}
            >
              Login
            </Button>


            <Grid container>
              <Grid item xs>
                <Link href="/ForgotPassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}