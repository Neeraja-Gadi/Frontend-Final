
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import baseurl from '../../baseURL/config';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { yearofPassouts, educationLevels, authorities ,discipline } from '../../constraints/arrays';
import MenuItem from '@mui/material/MenuItem';
import { Button, Box, Container, Paper } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

const userId = JSON.parse(localStorage.getItem('userDetails'));

export default function EducationForm() {
  const navigate = useNavigate();
  useEffect(() => {
    if (userId == null) {
      navigate("/login");
      alert("Please login first");
    }
  }, [navigate]);
  
  const initialEducation = {
    userDetailsID: userId._id,
    educationLevel: '',
    collegeName: '',
    authority: '',
    discipline: '',
    yearOfpassout: '',
    startYear: '',
    endYear: '',
  };

  const [educationList, setEducationList] = useState([initialEducation]);

  const handleAddEducation = () => {
    setEducationList([...educationList, { ...initialEducation }]);
  };

  const handleRemoveEducation = (index) => {
    const newEducation = [...educationList];
    newEducation.splice(index, 1);
    setEducationList(newEducation);
  };

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const newEducation = [...educationList];
    newEducation[index] = {
      ...newEducation[index],
      [name]: value,
    };
    setEducationList(newEducation);
  };

  function SaveEducation() {
    educationList.map((e) => {
      return fetch(`${baseurl}/education`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(e),
      }).then(response => response.json().then(data => {
        console.log(data);
        if (data.status === false) return false;
        else {
          setEducationList([initialEducation]);
          navigate("/ExperienceForm");
        }
      }));
    });
    return true;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    SaveEducation();
  };

  const handleCancel = () => {
    setEducationList([initialEducation]);
  };

  return (

    <Container>

      <AppBar position="relative">
        <Toolbar >
          <Typography variant="h6" color="inherit" noWrap >
            Hiclousia
          </Typography>
        </Toolbar>
      </AppBar>

      {educationList.map((education, i) => (
        <Paper key={i} style={{ border: '1px solid', marginTop: '40px', borderRadius: '0.5rem', padding: '1rem' }}>
          <Typography variant="h6" gutterBottom>
            Education
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" margin="dense"required>
                <InputLabel>Education Level</InputLabel>
                <Select
                  value={education.educationLevel}
                  name="educationLevel"
                  onChange={(e) => handleChange(e, i)}
                  label="Education Level"
                  
                >
                  {educationLevels.map((educationLevel) => (
                    <MenuItem key={educationLevel} value={educationLevel}>
                      {educationLevel}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth variant="outlined" margin="dense" required>
                <InputLabel>Authority</InputLabel>
                <Select
                  name="authority"
                  label="Authority"
                  value={education.authority}
                  onChange={(e) => handleChange(e, i)}
                  
                >
                  {authorities.map((authority) => (
                    <MenuItem key={authority} value={authority}>
                      {authority}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth variant="outlined" margin="dense" required>
                <InputLabel>Year of Passout</InputLabel>
                <Select
                  name="yearOfpassout"
                  value={education.yearOfpassout}
                  onChange={(e) => handleChange(e, i)}
                  label="Year of Passout"
                  
                >
                  {yearofPassouts.map((yearofPassout) => (
                    <MenuItem key={yearofPassout} value={yearofPassout}>
                      {yearofPassout}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                variant="outlined"
                label="Start Year"
                name="startYear"
                value={education.startYear}
                onChange={(e) => handleChange(e, i)}
                type="date"
                fullWidth
                required
                InputLabelProps={{
                  shrink: true,
                }}
                margin="dense"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="College Name"
                name="collegeName"
                value={education.collegeName}
                onChange={(e) => handleChange(e, i)}
                fullWidth
                required
                margin="dense"
              />
              <TextField
                variant="outlined"
                label="Degree Name"
                name="degreeName"
                value={education.degreeName}
                onChange={(e) => handleChange(e, i)}
                fullWidth
                required
                margin="dense"
              />
               <FormControl fullWidth variant="outlined" margin="dense" required>
                <InputLabel>Discipline</InputLabel>
                <Select
                  label="Discipline"
                  name="discipline"
                  value={education.discipline}
                  onChange={(e) => handleChange(e, i)}
                  
                >
                  {discipline.map((dis,i) => (
                    <MenuItem key={i} value={dis}>
                      {dis}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {/* <TextField
                variant="outlined"
                label="Discipline"
                name="discipline"
                value={education.discipline}
                onChange={(e) => handleChange(e, i)}
                fullWidth
                required
                margin="dense"
              /> */}

              <TextField
                variant="outlined"
                label="End Year"
                name="endYear"
                value={education.endYear}
                onChange={(e) => handleChange(e, i)}
                type="date"
                fullWidth
                required
                InputLabelProps={{
                  shrink: true,
                }}
                margin="dense"
              />
            </Grid>
          </Grid>

          <Box mt={2} display="flex" justifyContent="space-between">
            {educationList.length !== 1 && (
              <Button variant="contained" color="error" onClick={() => handleRemoveEducation(i)}>
                Remove
              </Button>
            )}
            <Button variant="contained" color="primary" onClick={handleAddEducation}>
              Add Education
            </Button>
          </Box>

          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button variant="outlined" color="error" onClick={handleCancel} style={{ marginRight: '16px' }}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Paper>
      ))}
    </Container>
  );
}
