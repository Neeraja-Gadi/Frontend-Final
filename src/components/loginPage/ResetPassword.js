import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import {useParams} from 'react-router-dom'


const ResetPassword = () => {
  const [password, setPassword] = useState('');

  // eslint-disable-next-line no-unused-vars
  const [passwordError ,setPasswordError ] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('');
  const {id,token} =useParams()

  console.log(id , "id")
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handleSavePassword = (event) => {
    event.preventDefault();
    if (password.length < 8 || password.length > 15) {
      setPasswordError('Password should be between 8 and 15 characters.');
      return passwordError;
    }
    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Send API request to update password
    fetch(`http://localhost:8000/resetPassword/${id}/${token}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    })
    
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          // Password updated successfully
          alert('Password updated successfully');
          console.log('Password updated successfully')
          // Redirect to login page or perform any necessary actions
        } else {
          // Handle error response from the backend
          alert(data.Error);
        }
      })
      .catch((error) => {
        console.error(error);
        alert('An error occurred while updating the password. Please try again later.');
      });
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: 400, margin: '0 auto' }}>
      <form onSubmit={handleSavePassword}>
        <TextField
          id="password"
          label="New Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          margin="normal"
          required
          fullWidth
        />
        <TextField
          id="confirmPassword"
          label="Confirm Password"
          variant="outlined"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          margin="normal"
          required
          fullWidth
        />
        <Button variant="contained" type="submit" color="primary">
          Save Password
        </Button>
      </form>
    </Box>
  );
};
export default ResetPassword; 