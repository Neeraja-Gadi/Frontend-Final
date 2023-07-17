import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { primarySkills, location, jobRoles, sectors, salary, jobNature, educationLevels, experiences } from '../../../constraints/arrays';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const jobProfiles = Object.keys(jobRoles)
const theme = createTheme();
const StyledForm = styled('form')(({ theme }) => ({
  '& .MuiTextField-root': {
    margin: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {},
    width: '70ch',
  },
}));

const user = JSON.parse(localStorage.getItem('userDetails'));
const TalentPreferenceForm = () => {

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    userDetailsID: user._id,
    highestEducation: '',
    jobRole: [],
    city: [],
    sector: '',
    experienceOverall: '',
    skills: [],
    salary: '',
    jobNature: [],
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    savePreference(formValues);
    alert('Preferences submitted successfully');
    navigate("/SearchResult")

  };

  const savePreference = async (formData) => {
    try {
      const response = await fetch('http://localhost:8000/talentPreference', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        throw new Error('Request failed with status ' + response.status);
      }
    } catch (error) {
      console.log('Error:', error.message);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <StyledForm onSubmit={handleSubmit}>
        <Typography textAlign="center" variant="h4" gutterBottom>
          Hey {user.firstName}, Tell us about your preferences
        </Typography>

        <Box>
          <FormControl sx={{ m: 3, width: 600 }}>
            <InputLabel id="highestEducation-label">Highest Education</InputLabel>
            <Select
              labelId="highestEducation-label"
              id="highestEducation"
              name="highestEducation"
              value={formValues.highestEducation}
              onChange={handleChange}
              label="Highest Education"
              required
              input={<OutlinedInput label="Highest Education"/>}
            >
              {educationLevels.map((edulevel) => (
                <MenuItem key={edulevel} value={edulevel}>
                  {edulevel}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box>
          <FormControl sx={{ m: 3, width: 600 }}>
            <InputLabel id="jobRole-label">Job Role</InputLabel>
            <Select
              labelId="jobRole-label"
              id="jobRole"
              name="jobRole"
              multiple
              value={formValues.jobRole}
              onChange={handleChange}
              label="Job Role"
              required
              input={<OutlinedInput label="Job Role" />}
            >
              {jobProfiles.map((role) => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box>
          <FormControl sx={{ m: 3, width: 600 }}>
            <InputLabel id="city-label">City</InputLabel>
            <Select
              labelId="city-label"
              id="city"
              name="city"
              multiple
              value={formValues.city}
              onChange={handleChange}
              label="City"
              input={<OutlinedInput label="City" />}
            >
              {location.map((loc) => (
                <MenuItem key={loc} value={loc}>
                  {loc}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box>
          <FormControl sx={{ m: 3, width: 600 }}>
            <InputLabel id="setor-label">Sector</InputLabel>
            <Select
              labelId="sector-label"
              id="setor"
              label="Sector"
              name="sector"
              variant="outlined"
              value={formValues.sector}
              onChange={handleChange}
              input={<OutlinedInput label="Sector" />}
            >
              {sectors.map((sec, i) => (
                <MenuItem key={i} value={sec}>
                  {sec}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>


        <Box>
          <FormControl sx={{ m: 3, width: 600 }}>
            <InputLabel id="Experience-label">Experience</InputLabel>
            <Select
              labelId="Experience-label"
              id="Experience"
              label="Overall Experience"
              name="experienceOverall"
              variant="outlined"
              required
              value={formValues.experienceOverall}
              onChange={handleChange}
              input={<OutlinedInput label="Experience"/>}
            >
              {experiences.map((exp, i) => (
                <MenuItem key={i} value={exp}>
                  {exp}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box>
          <FormControl sx={{ m: 3, width: 600 }}>
            <InputLabel id="skills-label">Skills</InputLabel>
            <Select
              labelId="skills-label"
              id="skills"
              name="skills"
              multiple
              value={formValues.skills}
              onChange={handleChange}
              label="Skills"
              input={<OutlinedInput label="Skills" />}
            >
              {primarySkills.map((skill) => (
                <MenuItem key={skill} value={skill}>
                  {skill}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box>
          <FormControl sx={{ m: 3, width: 600 }}>
            <InputLabel id="salary-label">salary</InputLabel>
            <Select
              labelId="salary-label"
              id="salary"
              label="Salary"
              name="salary"
              variant="outlined"
              value={formValues.salary}
              onChange={handleChange}
              input={<OutlinedInput label="Salary" />}
            >
              {salary.map((sal, i) => (
                <MenuItem key={i} value={sal}>
                  {sal}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>


        <Box>
          <FormControl sx={{ m: 3, width: 600 }}>
            <InputLabel id="jobNature-label">Job Nature</InputLabel>
            <Select
              labelId="jobNature-label"
              id="jobNature"
              name="jobNature"
              value={formValues.jobNature}
              onChange={handleChange}
              label="Job Nature"
              input={<OutlinedInput label="Job Nature" />}
              inputProps={{ 'aria-label': 'Without label' }}
              multiple
            >
              {jobNature.map((jobn, i) => (
                <MenuItem key={i} value={jobn}>
                  {jobn}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Button type="submit" variant="contained" color="primary"  style={{float: 'right', marginRight: '20px'}}>
          Submit
        </Button>
      </StyledForm>
    </ThemeProvider>
  );
};
export default TalentPreferenceForm;