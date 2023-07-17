import React, { useState,useEffect } from 'react'
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
import {RiCloseCircleFill} from 'react-icons/ri'


const user = JSON.parse(localStorage.getItem("userDetails"))

const EditExperience = (props) => {

    const Navigate = useNavigate();

    //  console.log(user)
    if (!user) Navigate("/login")

    const [userInfo, setUserInfo] = useState([])


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

    //     //API things Start 

    useEffect(() => {
        // console.log(user._id)
        fetch(`http://localhost:8000/personal/${user._id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => response.json())
            .then(data => { console.log(data); setUserInfo(data.data) })
            .catch(err => console.log(err))
        
    }, [])
    console.log(userInfo)

    const [expData, setExpData] = useState({})

    function getExperienceData() {
        fetch(`http://localhost:8000/experience/${props.expid}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((result) => result.json())
            .then((resp) => {
                console.log("resp", resp)
                setExpData(resp)
                console.log("expData", expData)
            })
            .catch(error => {
                console.log(error)
            })
    }

    

    useEffect(() => {
        getExperienceData()
    })


//     //API things End

  
    return (
        <div style={modalWrapper}>
            <div style={modalContainer}>
             
                    <div style={feild}>
                    <button style={{float: 'right',border: 'none', backgroundColor: 'transparent'}} 
                        onClick={() => props.experienceInfoEdit(false)} ><RiCloseCircleFill style={{fontSize: '23px', color: 'rgb(22 102 197)'}}/></button>

                        <Box
                            mb={2}
                        >
                            <TextField fullWidth label="Current Status"

                                id="fullWidth"
                            />
                        </Box>

                        <Box
                            mb={2}
                        >
                            <TextField fullWidth label="Job Role"            
                                id="fullWidth" />
                        </Box>

                        <Box
                            mb={2}
                        >
                            <TextField fullWidth label="Company Name"
                                id="fullWidth" />
                        </Box>

                        <FormControl sx={{ m: 3, width: 600 }}>
                            <InputLabel>Experience Type</InputLabel>
                            <Select
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
                                type="date"
                                fullWidth
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Box>

                        <Button variant="contained" style={save}>save</Button>
                        <Button variant="contained" style={cancel}>delete</Button>

                    </div>
               

                <br />

            </div>
        </div>
    )
}

export default EditExperience