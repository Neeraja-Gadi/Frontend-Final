import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { RiCloseCircleFill } from 'react-icons/ri';
import { primarySkills, projectTypes } from '../../../constraints/arrays';
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
const EditProjects = (props) => {
  const { projectId, projectData, setProjectData } = props
  // State to hold the selected skills
  const [selectedSkills, setSelectedSkills] = useState(projectData.skills || projectData.skills);
  const [selectedProjectType, setSelectedProjectType] = useState(projectData.projectType || projectData.projectType);
  const handleProjectChange = (event) => {
    const { name, value } = event.target;
    setProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // Function to handle project type selection
  const handleProjectTypeSelect = (event) => {
    const { value } = event.target;
    setSelectedProjectType(value);
    setProjectData((prevData) => ({
      ...prevData,
      projectType: value // Update projectType directly in projectData
    }));
  };
  // Function to handle skill selection
  const handleSkillSelect = (event) => {
    const { value } = event.target;
    setSelectedSkills(value);
    setProjectData((prevData) => ({
      ...prevData,
      skills: value // Update skills directly in projectData
    }));
  };
  
  const handleSubmit = async () => {
    try {
      const response = await fetch(`${baseurl}/pprojects/${projectId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });
      if (response.ok) {
        console.log('Project updated successfully.');
        props.projectInfoEdit(true)
      } else {
        console.error('Failed to update project.');
      }
    } catch (error) {
      console.error('An error occurred while updating the project:', error);
    }
  };
  const handleDelete = async () => {
    try {
      const response = await fetch(`${baseurl}/Projects/${projectId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log('Project deleted successfully.');
        props.projectInfoEdit(false)
      } else {
        console.error('Failed to delete project.');
      }
    } catch (error) {
      console.error('An error occurred while deleting the project:', error);
    }
  };
  return (
    <div style={modalWrapper}>
      <div style={modalContainer}>
        <div style={feild}>
          <button
            style={{ float: 'right', border: 'none', backgroundColor: 'transparent' }}
            onClick={() => props.projectInfoEdit(false)}
          >
            <RiCloseCircleFill style={{ fontSize: '23px', color: 'rgb(22 102 197)' }} />
          </button>
          <Box mb={1} sx={{ m: 3, width: 600 }}>
            <TextField
              fullWidth
              label="Organization"
              name="organizationName"
              variant="outlined"
              value={projectData.organizationName || projectData.organizationName}
              onChange={handleProjectChange}
            />
          </Box>
          <Box mb={1} sx={{ m: 3, width: 600 }}>
            <TextField
              fullWidth
              label="Project Title"
              name="projectTitle"
              variant="outlined"
              required
              value={projectData.projectTitle || projectData.projectTitle}
              onChange={handleProjectChange}
            />
          </Box>
          <Box mb={1} sx={{ m: 3, width: 600 }}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Project Type</InputLabel>
              <Select
                label="Project Type"
                value={selectedProjectType}
                onChange={handleProjectTypeSelect}
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
              {projectTypes.map((projectType, index) => (
                <MenuItem key={`projectType-${index}`} value={projectType}>
                  {projectType}
                </MenuItem>
              ))}
              </Select>
            </FormControl>
          </Box>
          <Box mb={1} sx={{ m: 3, width: 600 }}>
            <TextField
              fullWidth
              label="Project Description"
              name="description"
              multiline
              rows={4}
              variant="outlined"
              value={projectData.description || projectData.description}
              onChange={handleProjectChange}
            />
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
              label="Project Link"
              name="url"
              variant="outlined"
              value={projectData.url || projectData.url}
              onChange={handleProjectChange}
            />
          </Box>
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
              value={projectData.startDate}
              onChange={handleProjectChange}
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
              value={projectData.endDate}
              onChange={handleProjectChange}
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

export default EditProjects; 