
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
import { projectTypes ,primarySkills } from '../../constraints/arrays'; // Add the relevant array for projectTypes
import MenuItem from '@mui/material/MenuItem';
import { Button, Box, Container, Paper } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

const userId = JSON.parse(localStorage.getItem('userDetails'));

export default function ProjectForm() {
  const navigate = useNavigate();
  useEffect(() => {
    if (userId == null) {
      navigate('/login');
      alert('Please login first');
    }
  }, [navigate]);

  const initialProject = {
    userDetailsID: userId._id,
    projectTitle: '',
    projectType: '',
    description: '',
    skills: [], 
    startDate: '',
    endDate: '',
    url: '',
    organizationName: '',
  };

  const [projectList, setProjectList] = useState([initialProject]);

  const handleAddProject = () => {
    setProjectList([...projectList, { ...initialProject }]);
  };

  const handleRemoveProject = (index) => {
    const newProject = [...projectList];
    newProject.splice(index, 1);
    setProjectList(newProject);
  };

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const newProject = [...projectList];
    newProject[index] = {
      ...newProject[index],
      [name]: value,
    };
    setProjectList(newProject);
  };

  function saveProject() {
    projectList.map((project) => {
      return fetch(`${baseurl}/project`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
      }).then((response) =>
        response.json().then((data) => {
          console.log(data);
          if (data.status === false) return false;
          else {
            setProjectList([initialProject]);
            navigate('/UserProfileForm'); 
          }
        })
      );
    });
    return true;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    saveProject();
  };

  const handleCancel = () => {
    setProjectList([initialProject]);
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

      {projectList.map((project, i) => (
        <Paper
          key={i}
          style={{
            border: '1px solid',
            marginTop: '40px',
            borderRadius: '0.5rem',
            padding: '1rem',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Project
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="Project Title"
                name="projectTitle"
                value={project.projectTitle}
                onChange={(e) => handleChange(e, i)}
                fullWidth
                required
                margin="dense"
              />
              <FormControl fullWidth variant="outlined" margin="dense">
                <InputLabel>Project Type</InputLabel>
                <Select
                  value={project.projectType}
                  name="projectType"
                  onChange={(e) => handleChange(e, i)}
                  label="Project Type"
                  required
                >
                  {projectTypes.map((projectType) => (
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
                onChange={(e) => handleChange(e, i)}
                fullWidth
                required
                margin="dense"
              />
              <FormControl fullWidth variant="outlined" margin="dense">
                <InputLabel>Skills</InputLabel>
                <Select
                  multiple
                  value={project.skills}
                  name="skills"
                  onChange={(e) => handleChange(e, i)}
                  label="Skills"
                  required
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
                value={project.endDate}
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
                label="url like gitlink, google drive "
                name="url"
                value={project.url}
                onChange={(e) => handleChange(e, i)}
                fullWidth
                margin="dense"
              />
              <TextField
                variant="outlined"
                label="Organization Name"
                name="organizationName"
                value={project.organizationName}
                onChange={(e) => handleChange(e, i)}
                fullWidth
                required
                margin="dense"
              />
            </Grid>
          </Grid>

          <Box mt={2} display="flex" justifyContent="space-between">
            {projectList.length !== 1 && (
              <Button variant="contained" color="error" onClick={() => handleRemoveProject(i)}>
                Remove
              </Button>
            )}
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
        </Paper>
      ))}
    </Container>
  );
}
