import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { RiCloseCircleFill } from 'react-icons/ri';
import { primarySkills, diffjobRole, location, experienceTypes, companyTypes } from '../../../constraints/arrays';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import baseurl  from "../../../baseURL/config"


const modalWrapper = {
  position: 'fixed',
  left: '0',
  right: '0',
  bottom: '0',
  top: '0',
  backgroundColor: 'rgba(189 , 189 , 189 , 0.9)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', // Added to vertically center the modal
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
  zIndex: '9999', // Adjusted zIndex to make sure the container appears above the drop-down
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

const EditExperiences = (props) => {
  const { experienceId, experienceData, setExperienceData } = props
  const [selectedSkills, setSelectedSkills] = useState(experienceData.skills || experienceData.skills);
  const [selectedLocation, setSelectedLocation] = useState(experienceData.location || experienceData.location);
  const [selectedJobRole, setSelectedJobRole] = useState(experienceData.jobRole || experienceData.jobRole);
  const [selectedExperienceType, setSelectedExperienceType] = useState(experienceData.experienceType || experienceData.experienceType);
  const [selectedCompanyType, setSelectedCompanyType] = useState(experienceData.companyType || experienceData.companyType);
  const handleSkillSelect = (event) => {
    const { value } = event.target;
    setSelectedSkills(value);
    setExperienceData((prevData) => ({
      ...prevData,
      skills: value // Update skills directly in projectData
    }));
  };
  const handleLocationSelect = (event) => {
    const { value } = event.target;
    setSelectedLocation(value);
    setExperienceData((prevData) => ({
      ...prevData,
      location: value // Update projectType directly in projectData
    }));
  };
  const handleJobRoleSelect = (event) => {
    const { value } = event.target;
    setSelectedJobRole(value);
    setExperienceData((prevData) => ({
      ...prevData,
      jobRole: value // Update skills directly in projectData
    }));
  };
  const handleExperienceType = (event) => {
    const { value } = event.target;
    setSelectedExperienceType(value);
    setExperienceData((prevData) => ({
      ...prevData,
      experienceType: value // Update skills directly in projectData
    }));
  };
  const handleCompanyType = (event) => {
    const { value } = event.target;
    setSelectedCompanyType(value);
    setExperienceData((prevData) => ({
      ...prevData,
      companyType: value // Update skills directly in projectData
    }));
  };
  const handleExperienceChange = (event) => {
    const { name, value } = event.target;
    setExperienceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${baseurl}/experiences/${experienceId}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(experienceData),
      });
      if (response.ok) {
        console.log('Experience updated successfully.');
        props.experienceInfoEdit(true)
      } else {
        console.error('Failed to update experience.');
      }
    } catch (error) {
      console.error('An error occurred while updating the experience:', error);
    }
  };
  const handleDelete = async () => {
    try {
      const response = await fetch(`${baseurl}/Experience/${experienceId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log('Experience deleted successfully.');
        props.experienceInfoEdit(false)
      } else {
        console.error('Failed to delete Experience.');
      }
    } catch (error) {
      console.error('An error occurred while deleting the experience:', error);
    }
  };
  return (
    <div style={modalWrapper}>
      <div style={modalContainer}>
        <div style={feild}>
          <button
            style={{ float: 'right', border: 'none', backgroundColor: 'transparent' }}
            onClick={() => props.experienceInfoEdit(false)}
          >
            <RiCloseCircleFill style={{ fontSize: '23px', color: 'rgb(22 102 197)' }} />
          </button>
          <Box mb={1} sx={{ m: 3, width: 600 }}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Experience Type</InputLabel>
              <Select
                label="Experience Type"
                name="experienceType"
                value={selectedExperienceType}
                onChange={handleExperienceType}
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
                {experienceTypes.map((experienceType, index) => (
                  <MenuItem key={`experienceType-${index}`} value={experienceType}>
                    {experienceType}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box mb={1} sx={{ m: 3, width: 600 }}>
            <TextField
              fullWidth
              label="Job Status"
              name="jobStatus"
              variant="outlined"
              value={experienceData.jobStatus || experienceData.jobStatus}
              onChange={handleExperienceChange}
            />
          </Box>
          <Box mb={1} sx={{ m: 3, width: 600 }}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Job Role</InputLabel>
              <Select
                fullWidth
                label="Job Role"
                name="jobRole"
                value={selectedJobRole}
                onChange={handleJobRoleSelect}
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
                {diffjobRole.map((jobRole, index) => (
                  <MenuItem key={`jobRole-${index}`} value={jobRole}>
                    {jobRole}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box mb={1} sx={{ m: 3, width: 600 }}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Company Type</InputLabel>
              <Select
                label="Company Type"
                name="companyType"
                value={selectedCompanyType}
                onChange={handleCompanyType}
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
                {companyTypes.map((companyType, index) => (
                  <MenuItem key={`companyType-${index}`} value={companyType}>
                    {companyType}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box mb={1} sx={{ m: 3, width: 600 }}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Location</InputLabel>
              <Select
                label="Location"
                value={selectedLocation}
                onChange={handleLocationSelect}
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
                {location.map((locations, index) => (
                  <MenuItem key={`locations-${index}`} value={locations}>
                    {locations}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box mb={1} sx={{ m: 3, width: 600 }}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Skills</InputLabel>
              <Select
                label="Skills"
                multiple
                value={selectedSkills}
                onChange={handleSkillSelect}
                renderValue={(selected) => selected.join(', ')}
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
                {primarySkills.map((skill, index) => (
                  <MenuItem key={`skill-${index}`} value={skill}>
                    {skill}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box mb={1} sx={{ m: 3, width: 600 }}>
            <TextField
              fullWidth
              label="Company Name"
              name="companyName"
              variant="outlined"
              value={experienceData.companyName || experienceData.companyName}
              onChange={handleExperienceChange}
            />
          </Box>
          {/*<Box mb={1} sx={{ m: 3, width: 600 }}>
            <TextField
              fullWidth
              label="Point of Contact"
              name="responsivePoC"
              multiline
              rows={4}
              variant="outlined"
              value={experienceData.responsivePoC || experienceData.responsivePoC}
              onChange={handleExperienceChange}
            />
          </Box>
          <Box mb={1} sx={{ m: 3, width: 600 }}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              multiline
              rows={4}
              variant="outlined"
              value={experienceData.responsivePoC.name || experienceData.responsivePoC.name}
              onChange={handleExperienceChange}
            />
          </Box>
          <Box mb={1} sx={{ m: 3, width: 600 }}>
            <TextField
              fullWidth
              label="Position"
              name="position"
              multiline
              rows={4}
              variant="outlined"
              value={experienceData.responsivePoC.position || experienceData.responsivePoC.position}
              onChange={handleExperienceChange}
            />
          </Box>
          <Box mb={1} sx={{ m: 3, width: 600 }}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              multiline
              rows={4}
              variant="outlined"
              value={experienceData.responsivePoC.email || experienceData.responsivePoC.email}
              onChange={handleExperienceChange}
            />
          </Box>
          <Box mb={1} sx={{ m: 3, width: 600 }}>
            <TextField
              fullWidth
              label="Contact Phone"
              name="contactPhone"
              multiline
              rows={4}
              variant="outlined"
              value={experienceData.responsivePoC.contactPhone || experienceData.responsivePoC.contactPhone}
              onChange={handleExperienceChange}
            />
          </Box>
          <Box mb={1} sx={{ m: 3, width: 600 }}>
            <TextField
              fullWidth
              label="Link"
              name="link"
              multiline
              rows={4}
              variant="outlined"
              value={experienceData.responsivePoC.link || experienceData.responsivePoC.link}
              onChange={handleExperienceChange}
            />
  </Box>*/}
          <Box mb={1} sx={{ m: 3, width: 600 }}>
            <TextField
              fullWidth
              variant="outlined"
              label="Start Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              name="startDate"
              value={experienceData.startDate}
              onChange={handleExperienceChange}
            />
          </Box>
          <Box mb={1} sx={{ m: 3, width: 600 }}>
            <TextField
              fullWidth
              variant="outlined"
              label="End Date"
              type="date"
              InputLabelProps={{
                shrink: true
              }}
              name="endDate"
              value={experienceData.endDate}
              onChange={handleExperienceChange}
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
export default EditExperiences;