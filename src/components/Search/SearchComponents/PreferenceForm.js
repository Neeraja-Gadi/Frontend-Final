import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { primarySkills, location, sectors, salary, jobNature,diffjobRole, educationLevels, experiences } from '../../../constraints/arrays';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import baseurl from '../../../baseURL/config';


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
    navigate("/SearchResult")

  };

  const savePreference = async (formData) => {
    try {
      const response = await fetch(`${baseurl}/talentPreference`, {
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
          Hey {user.firstName} {user.lastName}, Tell us about your preferences
        </Typography>

        <Box>
        <FormControl sx={{ m: 3, width: 600 }}  required>
            <InputLabel id="highestEducation-label">
            Highest Education
              {/* Fill Your Highest Education Qualification */}
              </InputLabel>
  <Select
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
          <FormControl sx={{ m: 3, width: 600 }}  required>
            <InputLabel id="jobRole-label"> Job Role</InputLabel>
            <Select
              id="jobRole"
              name="jobRole"
              multiple
              value={formValues.jobRole}
              onChange={handleChange}
              placeholder=" Choose maximum three Job Roles Preference"
              required
              input={<OutlinedInput label="Job Role" />}
            >
              {diffjobRole.map((role) => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box>
          <FormControl sx={{ m: 3, width: 600 }} required>
            <InputLabel id="skills-label">
              {/* Choose maximum three skills  */}
              Skiils
              </InputLabel>
            <Select
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
          <FormControl sx={{ m: 3, width: 600 }}  required>
            <InputLabel id="Experience-label">
              {/* Tell us Your Overall Years of Experience */}
              Total Experience

              </InputLabel>
            <Select
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
          <FormControl sx={{ m: 3, width: 600 }} required>
            <InputLabel id="setor-label">
              {/* Choose sector */}
              sector
               </InputLabel>
            <Select
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
            <InputLabel id="jobNature-label">Job Nature</InputLabel>
            <Select
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


        <Box>
          <FormControl sx={{ m: 3, width: 600 }} required>
            <InputLabel id="city-label">
              {/* Choose maximum three cities Preference */}
              cities Preference
              </InputLabel>
            <Select
              id="city"
              name="city"
              multiple
              value={formValues.city}
              onChange={handleChange}
              label="City"
              input={<OutlinedInput label="City" />}
            >
              {location.map((loc , i) => (
                <MenuItem key={i} value={loc}>
                  {loc}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box>
          <FormControl sx={{ m: 3, width: 600 }}  required>
            <InputLabel id="salary-label">Salary Expected</InputLabel>
            <Select
              id="salary"
              label="Salary"
              name="salary"
              variant="outlined"
              required
              value={formValues.salary}
              onChange={handleChange}
              input={<OutlinedInput />}
            >
              {salary.map((sal, i) => (
                <MenuItem key={i} value={sal}>
                  {sal}
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