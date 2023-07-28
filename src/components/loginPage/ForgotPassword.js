import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import baseurl from "../../baseURL/config"

const defaultTheme = createTheme();

// eslint-disable-next-line no-unused-vars
const user = JSON.parse(localStorage.getItem("userDetails"))
const ForgotPassword = () => {
 
  const [email, setEmail] = useState('');
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSendLink = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${baseurl}/resendtoken`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
          console.log(response)
      if (response.status) {
        // Display a success message or perform any other necessary actions
        alert('Reset link sent to your email');
      } else {
        // Handle the error response from the backend
        const errorData = await response.json();
        alert(errorData.message);
      }
    } catch (error) {
      // Handle any network errors or exceptions
      console.error(error);
      alert('An error occurred while sending the reset link. Please try again later.');
    }
    // Display a success message or handle any errors that occur
  };
  return (
    <ThemeProvider theme={defaultTheme}>
    <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Hiclousia
          </Typography>
        </Toolbar>
      </AppBar>

    <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: 400, margin: '0 auto' }}>
      <form onSubmit={handleSendLink}>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
          margin="normal"
          required
          fullWidth
        />
        <Button variant="contained" type="submit" color="primary">
          Send Reset Link
        </Button>
      </form>
    </Box>
    </ThemeProvider>
  );
};
export default ForgotPassword; 