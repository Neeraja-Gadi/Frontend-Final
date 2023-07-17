import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import baseurl from '../../../baseURL/config'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
// eslint-disable-next-line no-unused-vars

import {  educationLevels, authorities, discipline } from '../../../constraints/arrays'
import MenuItem from '@mui/material/MenuItem'


const userId = JSON.parse(localStorage.getItem('userDetails'));

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



const EducationPortfolio = (props) => {



    const navigate = useNavigate();
    useEffect(() => {

        if (userId == null) {
            navigate("/login")
            alert("Please login first")
        }
    },)

    const [educationList, setEducationList] = useState([
        {
            userDetailsID: userId._id,
            educationLevel: '',
            collegeName: '',
            authority: '',
            discipline: '',
            yearOfpassout: '',
            startYear: '',
            endYear: ''
        },
    ]

    );

    function SaveEducation() {

        educationList.map((e) => {

            return (

                fetch(`${baseurl}/education`, {
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

                        setEducationList([{
                            userDetailsID: userId._id,
                            educationLevel: '',
                            degreeName: '',
                            collegeName: '',
                            authority: '',
                            discipline: '',
                            yearOfpassout: '',
                            startYear: '',
                            endYear: ''
                        }])
                        navigate("/Portfolio")
                    }
                }

                ))
            )



        })

        return true
    }

    const handleChange = (event, index) => {

        const { name, value } = event.target;

        const newEducation = [...educationList];

        newEducation[index] = {
            ...newEducation[index],
            [name]: value,
        };

        setEducationList(newEducation);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        SaveEducation();
    }



    return (


        <div style={modalWrapper}>
            {educationList.map((education, i) => (
                <div style={modalContainer} key={education._id}>

                    <div style={feild}>


                        <FormControl sx={{ m: 3, width: 600 }}>
                            <InputLabel>Education Level</InputLabel>
                            <Select
                                value={education.educationLevel}
                                name="educationLevel"
                                onChange={(e) => handleChange(e, i)}
                                label="EducationLevel"
                                required
                                input={<OutlinedInput label="Education Level" />}
                            >
                                {educationLevels.map((educationLevel) => (
                                    <MenuItem
                                        key={educationLevel}
                                        value={educationLevel}
                                    >
                                        {educationLevel}
                                    </MenuItem>
                                ))}

                            </Select>
                        </FormControl>



                        <Box
                            mb={1}
                            sx={{ m: 3, width: 600 }}
                        >
                            <TextField fullWidth label="Degree Name"

                                name="degreeName"
                                value={education.degreeName} 
                                onChange={(e) => handleChange(e, i)}

                                id="fullWidth"
                            />
                        </Box>



                        <Box
                            mb={1}
                            sx={{ m: 3, width: 600 }}
                        >
                            <TextField fullWidth label="College Name" id="fullWidth"

                                name="collegeName"
                                value={education.collegeName}
                                onChange={(e) => handleChange(e, i)}
                            />
                        </Box>



                        <FormControl sx={{ m: 3, width: 600 }}>
                            <InputLabel>Authority</InputLabel>
                            <Select

                                name="authority"
                                label="Authority"
                                value={education.authority}
                                onChange={(e) => handleChange(e, i)}
                                input={<OutlinedInput label="Authority" />}
                                required
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {authorities.map((authority) => (
                                    <MenuItem
                                        key={authority}
                                        value={authority}
                                    >
                                        {authority}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl sx={{ m: 3, width: 600 }}>
                            <InputLabel>Discipline</InputLabel>
                            <Select
                                variant="outlined"
                                label="Discipline"
                                name="discipline"
                                value={education.discipline}
                                onChange={(e) => handleChange(e, i)}

                                input={<OutlinedInput label="Discipline" />}
                                required
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {discipline.map((disciplines, i) => (
                                    <MenuItem
                                        key={i}
                                        value={disciplines}
                                    >
                                        {disciplines}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>







                        {/* <FormControl sx={{ m: 3, width: 600 }}>
                            <InputLabel id="demo-multiple-name-label">Year of Passout</InputLabel>
                            <Select

                                name="yearOfpassout"
                                value={education.yearOfpassout}
                                onChange={(e) => handleChange(e, i)}
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"

                                input={<OutlinedInput label="Year of Passout" />}

                            >
                                {yearofPassouts.map((yearofPassout) => (
                                    <MenuItem
                                        key={yearofPassout}
                                        value={yearofPassout}
                                    >
                                        {yearofPassout}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl> */}



                        <Box
                            mb={1}
                            sx={{ m: 3, width: 600 }}>
                            <TextField
                                variant="outlined"
                                label="Start Year"                                     
                                name="startYear"
                                value={education.startYear}
                                onChange={(e) => handleChange(e, i)}

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
                                name="endYear"
                                value={education.endYear}
                                onChange={(e) => handleChange(e, i)}
                                type="date"
                                fullWidth
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            /></Box>



                        <Button variant="contained" style={save} onClick={handleSubmit} >Update</Button>



                        <Button variant="contained" style={cancel} onClick={() => props.educationInfo(false)}  >cancel</Button>

                    </div>

                    <br />

                </div>
            ))}
        </div>
    )
}

export default EducationPortfolio