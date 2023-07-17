import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import baseurl from '../../baseURL/config';
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { yearofPassouts, educationLevels, authorities } from '../../constraints/arrays'
import MenuItem from '@mui/material/MenuItem'
import { Button, Box } from '@mui/material';
import Container from '@mui/material/Container'




const userId = JSON.parse(localStorage.getItem('userDetails'));

export default function EducationForm() {


  const navigate = useNavigate();
  useEffect(() => {

    if (userId == null) {
      navigate("/login")
      alert("Please login first")
    }
  },)


  const [educationList, setEducationList] = useState([
    {
      userDetailsID: userId._id,
      educationLevel: '',
      collegeName: '',
      authority: '',
      discipline: '',
      yearOfpassout: '',
      startYear: '',
      endYear: ''
    },
  ]

  );

  const handleAddEducation = () => {

    setEducationList([...educationList, {
      userDetailsID: userId._id,
      educationLevel: '',
      collegeName: '',
      authority: '',
      discipline: '',
      yearOfpassout: '',
      startYear: '',
      endYear: ''
    },
    ]);
  };

  const handleRemoveEducation = (index) => {
    const newEducation = [...educationList];
    newEducation.splice(index - 1, 1);
    setEducationList(newEducation);
  };

  const handleChange = (event, index) => {
    // console.log(index)
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

      return (

        fetch(`${baseurl}/education`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(e)

        }).then(response => response.json().then(data => {
          console.log(data)
          if (data.status === false) return false
          else {

            setEducationList([{
              userDetailsID: userId._id,
              educationLevel: '',
              degreeName: '',
              collegeName: '',
              authority: '',
              discipline: '',
              yearOfpassout: '',
              startYear: '',
              endYear: ''
            }])
            navigate("/ExperienceForm")
          }
        }

        ))
      )



    })

    return true
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    SaveEducation()

  }


  return (

    <Container style={{ border: '1px solid', marginTop: '40px', borderRadius: '0.5rem' }}>
      {educationList.map((education, i) => (
        <React.Fragment >

          <Typography variant="h6" gutterBottom>
            Education
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl sx={{ m: 3, width: 600 }}>
                <InputLabel>Education Level</InputLabel>
                <Select
                  value={education.educationLevel}
                  name="educationLevel"
                  onChange={(e) => handleChange(e, i)}
                  label="EducationLevel"
                  required
                  input={<OutlinedInput label="Education Level" />}
                >
                  {educationLevels.map((educationLevel) => (
                    <MenuItem
                      key={educationLevel}
                      value={educationLevel}
                    >
                      {educationLevel}
                    </MenuItem>
                  ))}

                </Select>
              </FormControl>

              <FormControl sx={{ m: 3, width: 600 }}>
                <InputLabel>Authority</InputLabel>
                <Select
                  name="authority"
                  label="Authority"
                  value={education.authority}
                  onChange={(e) => handleChange(e, i)}
                  input={<OutlinedInput label="Authority" />}
                  required
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  {authorities.map((authority) => (
                    <MenuItem
                      key={authority}
                      value={authority}
                    >
                      {authority}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl sx={{ m: 3, width: 600 }}>
                <InputLabel id="demo-multiple-name-label">Year of Passout</InputLabel>
                <Select
                  name="yearOfpassout"
                  value={education.yearOfpassout}
                  onChange={(e) => handleChange(e, i)}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"

                  input={<OutlinedInput label="Year of Passout" />}

                >
                  {yearofPassouts.map((yearofPassout) => (
                    <MenuItem
                      key={yearofPassout}
                      value={yearofPassout}
                    >
                      {yearofPassout}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>





            <Box mb={1}
              sx={{ m: 3, width: 600 }}>
              <TextField
                variant="outlined"
                label="College Name"
                name="collegeName"
                value={education.collegeName}
                onChange={(e) => handleChange(e, i)}
                fullWidth
                required
              />
            </Box>



            <Box mb={1}
              sx={{ m: 3, width: 600 }}>
              <TextField
                variant="outlined"
                label="Degree Name"
                name="degreeName"
                value={education.degreeName}
                onChange={(e) => handleChange(e, i)}
                fullWidth
                required
              />
            </Box>




            <Box mb={1}
              sx={{ m: 3, width: 600 }}>
              <TextField
                variant="outlined"
                label="Discipline"
                name="discipline"
                value={education.discipline}
                onChange={(e) => handleChange(e, i)}
                fullWidth
                required
              />
            </Box>





            <Box mb={1}
              sx={{ m: 3, width: 600 }}>
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
              />
            </Box>


            <Box mb={1}
              sx={{ m: 3, width: 600 }}>
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
              />
            </Box>
            <br></br>

            {educationList.length !== 1 && (
              <Button
                variant="contained"
                color="red"
                onClick={() => handleRemoveEducation(i)}
              >
                Remove
              </Button>
            )}

            <br></br>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddEducation}
            >
              Add Education
            </Button>


            <Button
              style={{ float: 'right', margin: '30px' }}
              variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>





          </Grid >
        </React.Fragment >
      ))
      }


    </Container >
  );
}