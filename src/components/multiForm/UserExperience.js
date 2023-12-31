import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import baseurl from '../../baseURL/config';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { diffjobRole, primarySkills, experienceTypes, companyTypes, location } from '../../constraints/arrays';
import MenuItem from '@mui/material/MenuItem';
import { Button, Box, Container, Paper } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

const userId = JSON.parse(localStorage.getItem('userDetails'));

export default function ExperienceForm() {
  const navigate = useNavigate();
  useEffect(() => {
    if (userId == null) {
      navigate('/login');
      alert('Please login first');
    }
  }, [navigate]);

  const initialExperience = {
    userDetailsID: userId._id,
    experienceType: '',
    jobStatus: 'Active',
    jobRole: '',
    companyType: '',
    companyName: '',
    skills: [],
    location: '',
    startDate: '',
    endDate: '',
  };

  const [experienceList, setExperienceList] = useState([initialExperience]);

  const handleAddExperience = () => {
    setExperienceList([...experienceList, { ...initialExperience }]);
  };

  const handleRemoveExperience = (index) => {
    const newExperience = [...experienceList];
    newExperience.splice(index, 1);
    setExperienceList(newExperience);
  };

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const newExperience = [...experienceList];
    newExperience[index] = {
      ...newExperience[index],
      [name]: value,
    };
    setExperienceList(newExperience);
  };

  function SaveExperience() {
    const saveRequests = experienceList.map((experience) => {
      return fetch(`${baseurl}/experience`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(experience),
      }).then((response) => response.json());
    });

    return Promise.all(saveRequests);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const saveResults = await SaveExperience();

      // Check if all experience entries were successfully saved
      const allSavedSuccessfully = saveResults.every((result) => result.status !== false);

      if (allSavedSuccessfully) {
        // Clear the experienceList and navigate to the next page (UserProjects)
        setExperienceList([initialExperience]);
        navigate('/UserProjects');
      } else {
        // Handle the case where some experience entries failed to save
        alert('Some experience entries failed to save. Please try again.');
      }
    } catch (error) {
      // Handle any errors that occur during saving
      console.error('Error while saving experience entries:', error);
      alert('An error occurred while saving experience entries. Please try again later.');
    }
  };

  const handleCancel = () => {
    setExperienceList([initialExperience]);
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

      {experienceList.map((experience, i) => (
        <Paper
          key={i}
          style={{
            border: '1px solid',
            marginTop: '60px',
            borderRadius: '0.5rem',
            padding: '4rem',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Experience
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" margin="dense" required>
                <InputLabel>Experience Type</InputLabel>
                <Select
                  value={experience.experienceType}
                  name="experienceType"
                  onChange={(e) => handleChange(e, i)}
                  label="Experience Type"
                >
                  {experienceTypes.map((experienceType) => (
                    <MenuItem key={experienceType} value={experienceType}>
                      {experienceType}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth variant="outlined" margin="dense" required>
                <InputLabel>Job Role</InputLabel>
                <Select
                  label="Job Role"
                  name="jobRole"
                  value={experience.jobRole}
                  onChange={(e) => handleChange(e, i)}
                  fullWidth
                >
                  {diffjobRole.map((jobrole, i) => (
                    <MenuItem key={i} value={jobrole}>
                      {jobrole}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth variant="outlined" margin="dense" required>
                <InputLabel>Primary Skills</InputLabel>
                <Select
                  multiple
                  value={experience.skills}
                  name="skills"
                  onChange={(e) => handleChange(e, i)}
                  label="Primary Skills"
                  renderValue={(selected) => selected.join(', ')}
                >
                  {primarySkills.map((skill) => (
                    <MenuItem key={skill} value={skill}>
                      {skill}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth variant="outlined" margin="dense" required>
                <InputLabel>Company Type</InputLabel>
                <Select
                  value={experience.companyType}
                  name="companyType"
                  onChange={(e) => handleChange(e, i)}
                  label="Company Type"
                  required
                >
                  {companyTypes.map((companyType) => (
                    <MenuItem key={companyType} value={companyType}>
                      {companyType}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                variant="outlined"
                label="Company Name"
                name="companyName"
                value={experience.companyName}
                onChange={(e) => handleChange(e, i)}
                fullWidth
                required
                margin="dense"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" margin="dense" required>
                <InputLabel>Job Status</InputLabel>
                <Select
                  name="jobStatus"
                  label="Job Status"
                  value={experience.jobStatus}
                  onChange={(e) => handleChange(e, i)}
                  required
                >
                  {['Active', 'Inactive'].map((jobStatus) => (
                    <MenuItem key={jobStatus} value={jobStatus}>
                      {jobStatus}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth variant="outlined" margin="dense" required>
                <InputLabel>Location</InputLabel>
                <Select
                  value={experience.location}
                  name="location"
                  onChange={(e) => handleChange(e, i)}
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
              <TextField
                variant="outlined"
                label="Start Date"
                name="startDate"
                value={experience.startDate}
                onChange={(e) => handleChange(e, i)}
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
                label="End Date"
                name="endDate"
                value={experience.endDate}
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

          {experienceList.length !== 1 && (
            <Box mt={2} display="flex" justifyContent="space-between">
              <Button variant="contained" color="error" onClick={() => handleRemoveExperience(i)}>
                Remove
              </Button>
            </Box>
          )}
        </Paper>
      ))}

      <Box mt={2} display="flex" justifyContent="flex-end">
        <Button variant="outlined" color="error" onClick={handleCancel} style={{ marginRight: '16px' }}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleAddExperience}>
          Add Experience
        </Button>
      </Box>

      <Box mt={2} display="flex" justifyContent="flex-end">
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Container>
  );
}
