import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import { primarySkills, projectTypes } from '../../../constraints/arrays';

const modalWrapper = {

    position: 'fixed',
    left: '0',
    right: '0',
    bottom: '0',
    top: '0',
    backgroundColor: 'rgba(189 , 189 , 189 , 0.9)'
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
    margin: '20px',
    cursor: 'pointer'
}

const ProjectPortfolio = (props) => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState(null);
    useEffect(() => {
        const userDetails = JSON.parse(localStorage.getItem('userDetails'));
        if (userDetails == null) {
            navigate('/login');
            alert('Please login first');
        } else {
            setUserId(userDetails._id);
        }
    }, [navigate]);

    const [projectList, setProjectList] = useState([
        {
            userDetailsID: '',
            projectTitle: '',
            projectType: '',
            description: '',
            skills: [],
            startDate: '',
            endDate: '',
            url: '',
            organizationName: ''
        },
    ]);


    const SaveProject = () => {
        projectList.forEach((e) => {
            e.userDetailsID = userId; // Set the userDetailsID to the userId value
            fetch(`http://localhost:8000/project`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(e),
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data.status === false) {
                        return false;
                    } else {
                        setProjectList([
                            {
                                userDetailsID: '',
                                projectTitle: '',
                                projectType: '',
                                description: '',
                                skills: [],
                                startDate: '',
                                endDate: '',
                                url: '',
                                organizationName: ''
                            }
                        ]);
                        navigate('/Portfolio');
                    }
                });
        });
    };

    const handleProjectChange = (event, index) => {
        const { name, value } = event.target;
        const newProject = [...projectList];
        newProject[index] = {
            ...newProject[index],
            [name]: value
        };
        setProjectList(newProject);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        SaveProject();
    };
    return (
        <div style={modalWrapper}>
            {projectList.map((project, i) => (
                <div style={modalContainer} key={i}>
                    <div style={feild}>
                        <Box
                            mb={1}
                            sx={{ m: 3, width: 600 }}
                        >
                            <TextField
                                fullWidth
                                label="Project Title"
                                name="projectTitle"
                                required
                                value={project.projectTitle}
                                onChange={(e) => handleProjectChange(e, i)}
                                id="fullWidth"
                            />
                        </Box>
                        <FormControl sx={{ m: 3, width: 600 }}>
                            <InputLabel>Skills Used</InputLabel>
                            <Select
                                fullWidth
                                name="skills"
                                value={project.skills}
                                onChange={(e) => handleProjectChange(e, i)}
                                label="Skills Used"
                                required
                                multiple
                                input={<OutlinedInput label="Skills Used" />}
                            >
                                {primarySkills.map((primarySkill, i) =>
                                (
                                    <MenuItem
                                        key={i}
                                        value={primarySkill}
                                    >
                                        {primarySkill}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 3, width: 600 }}>
                            <InputLabel>Project Type</InputLabel>
                            <Select
                                fullWidth
                                name="projectType"
                                value={project.projectType}
                                onChange={(e) => handleProjectChange(e, i)}
                                required
                                label="Project Type"
                                input={<OutlinedInput label="Project Type" />}
                            >
                                {projectTypes.map((projectType, i) =>
                                (
                                    <MenuItem
                                        key={i}
                                        value={projectType}
                                    >
                                        {projectType}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Box mb={1}
                            sx={{ m: 3, width: 600 }}>
                            <TextField
                                name="description"
                                value={project.description}
                                id="outlined-multiline-static"
                                label="Project Description"
                                onChange={(e) => handleProjectChange(e, i)}
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
                                onChange={(e) => handleProjectChange(e, i)}
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
                                onChange={(e) => handleProjectChange(e, i)}
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
                                onChange={(e) => handleProjectChange(e, i)}
                                id="fullWidth"
                                
                            />
                        </Box>
                        <Box
                            mb={1}
                            sx={{ m: 3, width: 600 }}
                        >
                            <TextField
                                fullWidth
                                label="Organization"
                                name="organizationName"
                                value={project.organizationName}
                                onChange={(e) => handleProjectChange(e, i)}
                                id="fullWidth"
                            />
                        </Box>
                        <Button variant="contained" onClick={handleSubmit} style={save}>save</Button>
                        <Button variant="contained" style={cancel} onClick={() => props.projectInfo(false)}>Cancel</Button>
                    </div>
                    <br />
                </div>
            ))}
        </div>
    )
}
export default ProjectPortfolio