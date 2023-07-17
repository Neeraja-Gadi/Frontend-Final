import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { primarySkills, experienceTypes, companyTypes, location } from '../../../constraints/arrays';
import OutlinedInput from '@mui/material/OutlinedInput'


const userId = JSON.parse(localStorage.getItem('userDetails'));

const ExperiencePortfolio = (props) => {

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
        margin: '20px'
    }




    const navigate = useNavigate();
    const [experienceData, setExperienceData] = useState([
        {
            userDetailsID: userId._id,
            jobStatus: "Active",
            experienceType: '',
            jobRole: '',
            companyName: '',
            companyType: '',
            skills: [],
            location: '',
            startDate: '',
            endDate: '',


        }
    ]
    );


    const handleExperienceChange = (event, index) => {

        const { name, value } = event.target;
        //  console.log(name,value)
        const experiences = [...experienceData];
        experiences[index] = {
            ...experienceData[index],
            [name]: value
        };
        setExperienceData(experiences);
    }

    function SaveExperience() {
        console.log(experienceData)
        let experienceInfo = experienceData;
        experienceInfo?.map((e) => {
          return  fetch("http://localhost:8000/experience", {
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

                    setExperienceData([{
                        experienceType: '',
                        jobStatus: "Active",
                        jobRole: '',
                        companyType: '',
                        skills: [],
                        companyName: '',
                        location: '',
                        startDate: '',
                        endDate: ''
                    }])
                    navigate("/Portfolio")

                }
            }
            ))
        })
        return true
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        SaveExperience()

        // alert(JSON.stringify(experienceData));
    };

    return (
        <div style={modalWrapper}>
            <div style={modalContainer}>

                {experienceData?.map((experience, index) => (
                    <div style={feild} key={index}>

                        <Box
                            mb={2}
                        >
                            <TextField fullWidth label="Current Status"
                                name="jobStatus"
                                value={experience.jobStatus}
                                onChange={(event) => handleExperienceChange(event, index)}
                                id="fullWidth"
                            />
                        </Box>

                        <Box
                            mb={2}
                        >
                            <TextField fullWidth label="Job Role"
                                name="jobRole"
                                value={experience.jobRole}
                                onChange={(event) => handleExperienceChange(event, index)}
                                id="fullWidth" />
                        </Box>

                        <Box
                            mb={2}
                        >
                            <TextField fullWidth label="Company Name"
                                name="companyName"
                                value={experience.jcompanyName}
                                onChange={(event) => handleExperienceChange(event, index)}
                                id="fullWidth" />
                        </Box>

                        <FormControl sx={{ m: 3, width: 600 }}>
                            <InputLabel>Experience Type</InputLabel>
                            <Select
                                name="experienceType"
                                value={experience.experienceType}
                                onChange={(event) => handleExperienceChange(event, index)}
                                label="Experience Type"
                                required
                                input={<OutlinedInput label="Experience Type" />}
                            >
                                {experienceTypes.map((experienceType, i) => (
                                    <MenuItem
                                        key={i}
                                        value={experienceType}
                                    >
                                        {experienceType}
                                    </MenuItem>
                                ))}

                            </Select>
                        </FormControl>


                        <FormControl sx={{ m: 3, width: 600 }}>
                            <InputLabel>Company Type</InputLabel>
                            <Select
                                name="companyType"
                                value={experience.companyType}
                                onChange={(event) => handleExperienceChange(event, index)}
                                label="Company Type"
                                required
                                input={<OutlinedInput label="Company Type" />}
                            >
                                {companyTypes.map((companyType, i) => (
                                    <MenuItem
                                        key={i}
                                        value={companyType}
                                    >
                                        {companyType}
                                    </MenuItem>
                                ))}

                            </Select>
                        </FormControl>

                        <FormControl sx={{ m: 3, width: 600 }}>
                            <InputLabel id="demo-multiple-name-label">Skills Practiced</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                name="skills"
                                value={experience.skills}
                                onChange={(event) => handleExperienceChange(event, index)}
                                multiple
                                input={<OutlinedInput label="Skills Practiced" />}

                            >
                                {primarySkills.map((primarySkill, i) => (
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
                            <InputLabel>Company Location</InputLabel>
                            <Select
                                name="location"
                                value={experience.location}
                                onChange={(event) => handleExperienceChange(event, index)}
                                label="Company Location"
                                required
                                input={<OutlinedInput label="Company Location" />}
                            >
                                {location.map((locations, i) => (
                                    <MenuItem
                                        key={i}
                                        value={locations}
                                    >
                                        {locations}
                                    </MenuItem>
                                ))}

                            </Select>
                        </FormControl>


                        <Box
                            mb={1}
                            sx={{ m: 3, width: 600 }}>
                            <TextField
                                variant="outlined"
                                label="Start Year"
                                name="startDate"
                                value={experience.startDate}
                                onChange={(event) => handleExperienceChange(event, index)}
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
                                value={experience.endDate}
                                onChange={(event) => handleExperienceChange(event, index)}
                                type="date"
                                fullWidth
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Box>

                        <Button variant="contained" style={save} onClick={handleSubmit}>save</Button>
                        <Button variant="contained" style={cancel} onCLick={() => props.experienceInfo(false)} >cancel</Button>

                    </div>
                ))}

                <br />

            </div>
        </div>
    )
}

export default ExperiencePortfolio