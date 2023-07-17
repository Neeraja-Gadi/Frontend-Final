import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import baseurl from '../../baseURL/config';


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

export default function SignUp() {

  const [signIn, toggle] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [recBox, setRecBox] = React.useState(false)
  const [result, setResult] = React.useState({ status: false, message: "" })

  // const navigate = useNavigate();

  function SignUpHandler(e) {
    const recruiter = recBox
    const data = { email, password, firstName, lastName, recruiter }
    console.log(data, "dtat")
    fetch(`${baseurl}/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) =>
      response.json().then((responseData) => {

        setResult(responseData);

        if (responseData.status) {
          // navigate("/login")
          setEmail("")
          setFirstName("")
          setLastName("")
          setPassword("")

          setTimeout(() => {
            setResult({ status: false, message: "" });
            toggle(!signIn)

          }, 2000);
        }
        console.log(responseData)
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

      <Container component="main" maxWidth="xs" style={{ border: '0.1px solid grey', borderRadius: '0.5rem', boxShadow: 'lightgrey', marginTop: '7.5%' }}>
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={(e) => e.preventDefault()} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>

                {/* <FormControlLabel
                  control={<Button value="allowExtraEmails" color="primary">Talent</Button>}
                  style={{backgroundColor: 'blue', borderRadius: '0.5rem'}}
                  
                /> */}
                <br />
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I am a recruiter."
                  value={recBox}
                  onChange={() => setRecBox(!recBox)}
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
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={SignUpHandler}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Login" variant="body2">
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}