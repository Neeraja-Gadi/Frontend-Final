import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { RiCloseCircleFill } from 'react-icons/ri';
import { educationLevels, authorities, yearofPassouts, disciplines } from '../../../constraints/arrays';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import baseurl from  "../../../baseURL/config" ;


const modalWrapper = {
  position: 'fixed',
  left: '0',
  right: '0',
  bottom: '0',
  top: '0',
  backgroundColor: 'rgba(189 , 189 , 189 , 0.9)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '999', // Added to vertically center the modal
}
const modalContainer = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50% , -50%)',
  maxWidth: '45rem',
  backgroundColor: '#fff',
  AlignItems: 'center',
  borderRadius: '0.5rem',
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',

}
const feild = {
  width: '40rem',
  AlignItems: 'center',
  marginTop: '18px',
  margin: '18px',
}
const update = {
  float: 'left',
  margin: '20px'
}
const dele = {
  float: 'right',
  margin: '20px'
}
const EditEducation = (props) => {
  const { educationId, educationData, setEducationData } = props
  // State to hold the selected educationLevel
  const [selectedEducationLevel, setSelectedEducationLevel] = useState(educationData.educationLevel || educationData.educationLevel);
  const [selectedAuthority, setSelectedAuthority] = useState(educationData.authority || educationData.authority);
  const [selectedDiscipline, setSelectedDiscipline] = useState(educationData.discipline || educationData.discipline);
  const [selectedYearOfpassout, setSelectedYearOfpassout] = useState(educationData.yearOfpassout || educationData.yearOfpassout);

  const handleEducationChange = (event) => {
    const { name, value } = event.target;
    setEducationData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  // Function to handle educationLevel selection
  const handleEducationLevelSelect = (event) => {
    const { value } = event.target;
    setSelectedEducationLevel(value);
    setEducationData((prevData) => ({
      ...prevData,
      educationLevel: value // Update directly in educationData
    }));
  };
  // Function to handle skill selection
  const handleAuthoritySelect = (event) => {
    const { value } = event.target;
    setSelectedAuthority(value);
    setEducationData((prevData) => ({
      ...prevData,
      authority: value, // Update skills directly in projectData
    }));
  };
  const handleDisciplineSelect = (event) => {
    const { value } = event.target;
    setSelectedDiscipline(value);
    setEducationData((prevData) => ({
      ...prevData,
      discipline: value // Update directly in educationData
    }));
  };
  const handleYearOfPassout = (event) => {
    const { value } = event.target;
    setSelectedYearOfpassout(value);
    setEducationData((prevData) => ({
      ...prevData,
      yearOfpassout: value // Update skills directly in projectData
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${baseurl}/educations/${educationId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(educationData),
      });
      if (response.ok) {
        console.log('Education updated successfully.');
        props.educationInfoEdit(true)
      } else {
        console.error('Failed to update education.');
      }
    } catch (error) {
      console.error('An error occurred while updating the education:', error);
    }
  };
  const handleDelete = async () => {
    try {
      const response = await fetch(`${baseurl}/Education/${educationId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log('Education deleted successfully.');
        props.educationInfoEdit(false)
      } else {
        console.error('Failed to delete education.');
      }
    } catch (error) {
      console.error('An error occurred while deleting the education:', error);
    }
  };
  return (
    <div style={modalWrapper}>
      <div style={modalContainer}>
        <div style={feild}>
          <button
            style={{ float: 'right', border: 'none', backgroundColor: 'transparent' }}
            onClick={() => props.educationInfoEdit(false)}
          >
            <RiCloseCircleFill style={{ fontSize: '23px', color: 'rgb(22 102 197)' }} />
          </button>
          <Box mb={1} sx={{ m: 3, width: 600 }}>

            <FormControl fullWidth variant="outlined">
              <InputLabel>Education Level</InputLabel>
              <Select
                label="Education Level"
                name="educationLevel"
                required
                value={selectedEducationLevel}
                onChange={handleEducationLevelSelect}

                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                MenuProps={{
                  getContentAnchorEl: null,
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right',
                  },
                }}
              >
                {educationLevels.map((educationLevel, index) => (
                  <MenuItem key={`educationLevel-${index}`} value={educationLevel}>
                    {educationLevel}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box mb={1} sx={{ m: 3, width: 600 }}>
            <TextField
              fullWidth
              label="College Name"
              name="collegeName"
              required
              variant="outlined"
              value={educationData.collegeName || educationData.collegeName}
              onChange={handleEducationChange}
            />
          </Box>
          <Box mb={1} sx={{ m: 3, width: 600 }}>
            <TextField
              fullWidth
              label="Degree Name"
              name="degreeName"
              variant="outlined"
              required
              value={educationData.degreeName || educationData.degreeName}
              onChange={handleEducationChange}
            />
          </Box>
          <Box mb={1} sx={{ m: 3, width: 600 }}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Authority</InputLabel>
              <Select

                label="Authority"
                name="authority"
                value={selectedAuthority}
                onChange={handleAuthoritySelect}
                required
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                MenuProps={{
                  getContentAnchorEl: null,
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right',
                  },
                }}
              >
                {authorities.map((authority, index) => (
                  <MenuItem key={`authority-${index}`} value={authority}>
                    {authority}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box mb={1} sx={{ m: 3, width: 600 }}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Discipline</InputLabel>
              <Select

                label="Discipline"
                name="discipline"
                value={selectedDiscipline}
                onChange={handleDisciplineSelect}
                required
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                MenuProps={{
                  getContentAnchorEl: null,
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right',
                  },
                }}
              >
                {disciplines.map((discipline, index) => (
                  <MenuItem key={`discipline-${index}`} value={discipline}>
                    {discipline}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box mb={1} sx={{ m: 3, width: 600 }}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Year of Passout</InputLabel>
              <Select
                label="Year of Passout"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                name="yearOfpassout"
                value={selectedYearOfpassout}
                onChange={handleYearOfPassout}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                MenuProps={{
                  getContentAnchorEl: null,
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right',
                  },
                }}
              >
                {yearofPassouts.map((yearOfpassout, index) => (
                  <MenuItem key={`yearOfpassout-${index}`} value={yearOfpassout}>
                    {yearOfpassout}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box mb={1} sx={{ m: 3, width: 600 }}>
            <TextField
              fullWidth
              variant="outlined"
              label="Start Year"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              name="startYear"
              value={educationData.startYear}
              onChange={handleEducationChange}
            />
          </Box>
          <Box mb={1} sx={{ m: 3, width: 600 }}>
            <TextField
              fullWidth
              variant="outlined"
              label="End Year"
              type="date"
              InputLabelProps={{
                shrink: true
              }}
              name="endYear"
              value={educationData.endYear}
              onChange={handleEducationChange}
            />
          </Box>
          <Button variant="contained" onClick={handleSubmit} style={update}>
            Update
          </Button>
          <Button variant="contained" onClick={handleDelete} style={dele}>
            Delete
          </Button>
        </div>
        <br />
      </div>
    </div>
  );
};
export default EditEducation;    