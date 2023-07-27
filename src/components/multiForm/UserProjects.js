import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import baseurl from '../../baseURL/config';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { projectsType, primarySkills } from '../../constraints/arrays';
import MenuItem from '@mui/material/MenuItem';
import { Button, Box, Container, Paper,Grid } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

const userId = JSON.parse(localStorage.getItem('userDetails'));

export default function ProjectForm() {
  const navigate = useNavigate();
  const [projectList, setProjectList] = useState([
    {
      userDetailsID: userId._id,
      projectTitle: '',
      projectType: '',
      description: '',
      skills: [],
      startDate: '',
      endDate: '',
      url: '',
      organizationName: '',
    },
  ]);

  const handleAddProject = () => {
    setProjectList([
      ...projectList,
      {
        userDetailsID: userId._id,
        projectTitle: '',
        projectType: '',
        description: '',
        skills: [],
        startDate: '',
        endDate: '',
        url: '',
        organizationName: '',
      },
    ]);
  };

  const handleRemoveProject = (index) => {
    const newProjectList = [...projectList];
    newProjectList.splice(index, 1);
    setProjectList(newProjectList);
  };

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const newProjectList = [...projectList];
    newProjectList[index] = {
      ...newProjectList[index],
      [name]: value,
    };
    setProjectList(newProjectList);
  };

  const saveProject = async () => {
    try {
      for (const project of projectList) {
        const response = await fetch(`${baseurl}/project`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(project),
        });
        const data = await response.json();
        console.log(data);
        if (data.status === false) return false;
      }
      setProjectList([
        {
          userDetailsID: userId._id,
          projectTitle: '',
          projectType: '',
          description: '',
          skills: [],
          startDate: '',
          endDate: '',
          url: '',
          organizationName: '',
        },
      ]);
      navigate('/UserProfileForm');
      return true;
    } catch (error) {
      console.error('Error while saving project information:', error);
      alert('An error occurred while saving project information. Please try again later.');
      return false;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    saveProject();
  };

  const handleCancel = () => {
    setProjectList([
      {
        userDetailsID: userId._id,
        projectTitle: '',
        projectType: '',
        description: '',
        skills: [],
        startDate: '',
        endDate: '',
        url: '',
        organizationName: '',
      },
    ]);
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

      {projectList.map((project, index) => (
        <Paper
          key={index}
          style={{
            border: '1px solid',
            marginTop: '40px',
            borderRadius: '0.5rem',
            padding: '1rem',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Project {index + 1}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="Project Title"
                name="projectTitle"
                value={project.projectTitle}
                onChange={(e) => handleChange(e, index)}
                fullWidth
                required
                margin="dense"
              />
              <FormControl fullWidth variant="outlined" margin="dense" required>
                <InputLabel>Project Type</InputLabel>
                <Select
                  value={project.projectType}
                  name="projectType"
                  onChange={(e) => handleChange(e, index)}
                  label="Project Type"
                >
                  {projectsType.map((projectType) => (
                    <MenuItem key={projectType} value={projectType}>
                      {projectType}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                variant="outlined"
                label="Description"
                name="description"
                value={project.description}
                onChange={(e) => handleChange(e, index)}
                fullWidth
                required
                margin="dense"
              />
              <FormControl fullWidth variant="outlined" margin="dense" required>
                <InputLabel>Skills</InputLabel>
                <Select
                  multiple
                  value={project.skills}
                  name="skills"
                  onChange={(e) => handleChange(e, index)}
                  label="Skills"
                  renderValue={(selected) => selected.join(', ')}
                >
                  {primarySkills.map((skill) => (
                    <MenuItem key={skill} value={skill}>
                      {skill}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="Start Date"
                name="startDate"
                value={project.startDate}
                onChange={(e) => handleChange(e, index)}
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
                value={project.endDate}
                onChange={(e) => handleChange(e, index)}
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
                label="URL like gitlink, google drive"
                name="url"
                value={project.url}
                onChange={(e) => handleChange(e, index)}
                fullWidth
                required
                margin="dense"
              />
              <TextField
                variant="outlined"
                label="Organization Name"
                name="organizationName"
                value={project.organizationName}
                onChange={(e) => handleChange(e, index)}
                fullWidth
                required
                margin="dense"
              />
            </Grid>
          </Grid>

          {projectList.length !== 1 && (
            <Box mt={2} display="flex" justifyContent="space-between">
              <Button variant="contained" color="error" onClick={() => handleRemoveProject(index)}>
                Remove Project
              </Button>
            </Box>
          )}
        </Paper>
      ))}

      <Box mt={2} display="flex" justifyContent="flex-end">
        <Button variant="contained" color="primary" onClick={handleAddProject}>
          Add Project
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
    </Container>
  );
}
