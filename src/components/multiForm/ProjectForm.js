import React, { useState } from 'react';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const form = {

  border: '1px solid',
  backgroundColor: '#fff'
}


// const useStyles = styled('div')(({ theme }) => ({
//   // root: {
//   //   '& .MuiTextField-root': {
//   //     margin: theme.spacing(2),
//   //     paddingTop: theme.spacing(1),
//   //     paddingLeft: theme.spacing(1),
//   //     paddingBottom: theme.spacing(3),
//   //     [theme.breakpoints.down('sm')]: {
//   //     },
//   //     width: '70ch',
//   //   },

//   //   // background: '#8EC9FF',

//   //   padding: '50px 30px',
//   //   margin: "0px,500px"
//   // },
//   addButton: {
//     margin: theme.spacing(5),
//   },
//   removeButton: {
//     margin: theme.spacing(5),
//   }
// }));


function ProjectForm() {

  const [projectData, setProjectData] = useState([
    {
      projectTitle: '',
      description: '',
      skillsUsed: '',
      startDate: '',
      endDate: '',
      Url: '',
      organizationName: ''
    }
  ]);
  const handleAddProject = () => {
    const projects = [
      ...projectData,
      {
        projectTitle: '',
        description: '',
        skillsUsed: '',
        startDate: '',
        endDate: '',
        Url: '',
        organizationName: ''
      }
    ];
    setProjectData(projects);
  };
  const handleRemoveProject = (index) => {
    const projects = [...projectData];
    projects.splice(index, 1);
    setProjectData(projects);
  };
  const handleProjectChange = (event, index) => {
    const { name, value } = event.target;
    const projects = [...projectData];
    projects[index] = {
      ...projectData[index],
      [name]: value
    };
    setProjectData(projects);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(projectData);
    // Perform your save operation here
    // ...
    alert('Profile submitted successfully');
  };



  return (

    
      <form style={form} onSubmit={handleSubmit}>


        <Typography textAlign="center" variant="h6" gutterBottom>
          Projects:
        </Typography>
        {projectData?.map((project, index) => (


          <div key={index}>


            <TextField
              label="Project Title"
              name="projectTitle"
              variant="outlined"
              required
              value={project.projectTitle}
              onChange={(event) => handleProjectChange(event, index)}
            />


            <TextField
              label="Skills"
              name="skillsUsed"
              variant="outlined"
              required
              value={project.skillsUsed}
              onChange={(event) => handleProjectChange(event, index)}
            />


       
            {index === projectData?.length - 1 ? (
              <Button
             
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={handleAddProject}
              >
                Add
              </Button>


            ) : (
              <Button
               
                variant="contained"
                color="primary"
                startIcon={<RemoveIcon />}
                onClick={() => handleRemoveProject(index)}
              >
                Remove
              </Button>
            )}
          </div>
        ))}
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
 


  );
}
export default ProjectForm;