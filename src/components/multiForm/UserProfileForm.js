
import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import baseurl from '../../baseURL/config';
import { Button, Box, Container, Paper } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import InputLabel from '@mui/material/InputLabel';
import { location } from '../../constraints/arrays'; 
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const userId = JSON.parse(localStorage.getItem('userDetails'));

export default function PersonalInfoForm() {
    const navigate = useNavigate();
    useEffect(() => {
        if (userId == null) {
            navigate('/login');
            alert('Please login first');
        }
    }, []);

    const initialPersonalInfo = {
        userDetailsID: userId._id,
        aboutMe: '',
        gender: '',
        doB: '',
        phone: '',
        gitLink: '',
        state: '',
        location: '',
    };

    const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPersonalInfo({
            ...personalInfo,
            [name]: value,
        });
    };

    function savePersonalInfo() {
        return fetch(`${baseurl}/userProfile`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(personalInfo),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.status === false) return false;
                else {
                    setPersonalInfo(initialPersonalInfo);
                    navigate('/portfolio'); 
                }
            });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        savePersonalInfo();
    };

    const handleCancel = () => {
        setPersonalInfo(initialPersonalInfo);
    };

    return (
        <Container>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Hiclousia
                    </Typography>
                </Toolbar>
            </AppBar>

            <Paper
                style={{
                    border: '1px solid',
                    marginTop: '40px',
                    borderRadius: '0.5rem',
                    padding: '1rem',
                }}
            >
                <Typography variant="h6" gutterBottom>
                    Personal Information
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        label="About Me"
                        name="aboutMe"
                        value={personalInfo.aboutMe}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        fullWidth
                        required
                        inputProps={{
                            maxLength: 200,
                        }}
                        margin="dense"
                    />
                    <FormControl fullWidth variant="outlined" margin="dense">
                        <InputLabel>Gender</InputLabel>
                        <Select
                            label="Gender"
                            name="gender"
                            value={personalInfo.gender}
                            onChange={handleChange}
                            fullWidth
                            required
                        >
                            {["M", "F", "Not Prefer to Say"].map((gen, i) => (
                                <MenuItem key={i} value={gen}>
                                    {gen}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>


                    <TextField
                        variant="outlined"
                        label="Date of Birth"
                        name="doB"
                        value={personalInfo.doB}
                        onChange={handleChange}
                        type="date"
                        fullWidth
                        required
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="dense"
                    />
                    <TextField
                        variant="outlined"
                        label="Phone"
                        name="phone"
                        value={personalInfo.phone}
                        onChange={handleChange}
                        fullWidth
                        required
                        margin="dense"
                    />
                    <TextField
                        variant="outlined"
                        label="Github Link"
                        name="gitLink"
                        value={personalInfo.gitLink}
                        onChange={handleChange}
                        fullWidth
                        required
                        margin="dense"
                    />
                    <TextField
                        variant="outlined"
                        label="State"
                        name="state"
                        value={personalInfo.state}
                        onChange={handleChange}
                        fullWidth
                        margin="dense"
                    />
                    <FormControl fullWidth variant="outlined" margin="dense">
                        <InputLabel>Location</InputLabel>
                        <Select
                            value={personalInfo.location}
                            name="location"
                            onChange={handleChange}
                            label="Location"
                            required
                        >
                            {location.map((location) => (
                                <MenuItem key={location} value={location}>
                                    {location}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <Box mt={2} display="flex" justifyContent="flex-end">
                        <Button variant="outlined" color="error" onClick={handleCancel} style={{ marginRight: '16px' }}>
                            Cancel
                        </Button>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
}
