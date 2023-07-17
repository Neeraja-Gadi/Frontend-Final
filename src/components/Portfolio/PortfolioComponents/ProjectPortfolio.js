import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
// import { primarySkills } from '../../../constraints/arrays'
// import OutlinedInput from '@mui/material/OutlinedInput'
// import InputLabel from '@mui/material/InputLabel'
// import FormControl from '@mui/material/FormControl'
// // import Select from '@mui/material/Select'
// import MenuItem from '@mui/material/MenuItem'
// import Select from 'react-select';


const userId = JSON.parse(localStorage.getItem('userDetails'));



const ProjectPortfolio = (props) => {

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
        zIndex: '9999'
    }

    const modalContainer = {

        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50% , -50%)',
        maxWidth: '45rem',
        backgroundColor: '#fff',
        AlignItems: 'center',
        borderRadius: '0.5rem'
    }

    const feild = {

        width: '40rem',
        AlignItems: 'center',
        marginTop: '18px',
        margin: '18px',


    }

    const save = {
        float: 'left',
        margin: '20px'
    }

    const cancel = {
        float: 'right',
        margin: '20px'
    }





    const [projectData, setProjectData] = useState([
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




    const handleProjectChange = (event, index) => {
        const { name, value } = event.target;
        const projects = [...projectData];
        projects[index] = {
            ...projectData[index],
            [name]: value,
        };
        setProjectData(projects);
    };





    function SaveProject() {
        console.log(projectData)
        let projectInfo = projectData;
        projectInfo?.map((e, index) => {
            return fetch("http://localhost:8000/project", {
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
                    setProjectData([{
                        userDetailsID: userId._id,
                        projectTitle: '',
                        projectType: '',
                        description: '',
                        skills: [],
                        startDate: '',
                        endDate: '',
                        url: '',
                        organizationName: ''
                    }])
                }
            }
            ))
        })
        return true
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        SaveProject()

    };

    return (
        <div style={modalWrapper}>
            <div style={modalContainer}>

                {projectData?.map((project, index) => (
                    <div style={feild}>

                        <Box
                            mb={1}
                            sx={{ m: 3, width: 600 }}
                        >
                            <TextField fullWidth label="Project Title"

                                name="projectTitle"
                                value={project.projectTitle}
                                onChange={(event) => handleProjectChange(event, index)}
                                id="fullWidth"
                            />
                        </Box>

                        <Box
                            mb={1}
                            sx={{ m: 3, width: 600 }}
                        >
                            <TextField fullWidth label="Project Type"

                                name="projectType"
                                value={project.projectType}
                                onChange={(event) => handleProjectChange(event, index)}
                                id="fullWidth"
                            />
                        </Box>

                        <Box mb={1}
                            sx={{ m: 3, width: 600 }}>
                            <TextField

                                name="description"
                                value={project.description}
                                id="outlined-multiline-static"
                                label="Project Description"
                                onChange={(event) => handleProjectChange(event, index)}
                                multiline
                                rows={4}
                            />
                        </Box>
                        <br />

                        <Box
                            mb={1}
                            sx={{ m: 3, width: 600 }}>
                            <TextField
                                variant="outlined"
                                label="Start Date"
                                name="startDate"
                                value={project.startDate}
                                onChange={(event) => handleProjectChange(event, index)}


                                type="date"
                                fullWidth
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }}

                            />
                        </Box>


                        <Box mb={1}
                            sx={{ m: 3, width: 600 }}><TextField
                                variant="outlined"
                                label="End Year"
                                name="endDate"
                                value={project.endDate}
                                onChange={(event) => handleProjectChange(event, index)}
                                type="date"
                                fullWidth
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            /></Box>


                        <Box
                            mb={1}
                            sx={{ m: 3, width: 600 }}
                        >
                            <TextField fullWidth label="Project Link"

                                name="url"
                                value={project.url}
                                onChange={(event) => handleProjectChange(event, index)}
                                id="fullWidth"
                                required
                            />
                        </Box>

                        <Box
                            mb={1}
                            sx={{ m: 3, width: 600 }}
                        >
                            <TextField fullWidth label="Organization"

                                name="organizationName"
                                value={project.organizationName}
                                onChange={(event) => handleProjectChange(event, index)}
                                id="fullWidth"
                            />
                        </Box>


                


              



                        <Button variant="contained" onClick={handleSubmit} style={save}>save</Button>
                        <Button variant="contained" style={cancel} onClick={() => props.projectInfo(false)}>Cancel</Button>

                    </div>
                ))}


                <br />

            </div>
        </div>
    )
}

export default ProjectPortfolio