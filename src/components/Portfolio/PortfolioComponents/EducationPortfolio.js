
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { educationLevels, authorities, disciplines, yearofPassouts } from '../../../constraints/arrays'
import baseurl from  "../../../baseURL/config" ;


const modalWrapper = {

    position: 'fixed',
    left: '0',
    right: '0',
    bottom: '0',
    top: '0',
    backgroundColor: 'rgba(189 , 189 , 189 , 0.9)',
    zIndex: "999"
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

    const [educationList, setEducationList] = useState([
        {
            userDetailsID: '',
            educationLevel: '',
            degreeName: '',
            collegeName: '',
            authority: '',
            discipline: '',
            yearOfpassout: '',
            startYear: '',
            endYear: ''
        },
    ]);

    const SaveEducation = () => {
        educationList.forEach((e) => {
            e.userDetailsID = userId; // Set the userDetailsID to the userId value
            fetch(`${baseurl}/education`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(e)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data.status === false) {
                        return false;
                    } else {
                        setEducationList([
                            {
                                userDetailsID: '',
                                educationLevel: '',
                                degreeName: '',
                                collegeName: '',
                                authority: '',
                                discipline: '',
                                yearOfpassout: '',
                                startYear: '',
                                endYear: ''
                            }
                        ]);
                        navigate('/Portfolio');
                    }
                });
        });
    };

    const handleEducationChange = (event, index) => {
        const { name, value } = event.target;
        const newEducation = [...educationList];
        newEducation[index] = {
            ...newEducation[index],
            [name]: value,
        };
        setEducationList(newEducation);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        SaveEducation();
    };

    return (
        <div style={modalWrapper}>
            {educationList.map((education, i) => (
                <div style={modalContainer} key={i}>
                    <div style={feild}>
                        <FormControl sx={{ m: 3, width: 600 }} required>
                            <InputLabel>Education Level</InputLabel>
                            <Select
                                fullWidth
                                value={education.educationLevel}
                                name="educationLevel"
                                onChange={(e) => handleEducationChange(e, i)}
                                label="Education Level"
                                
                                input={<OutlinedInput label="Education Level" />}
                            >
                                {educationLevels.map((educationLevel, i) => (
                                    <MenuItem key={i} value={educationLevel}>
                                        {educationLevel}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <Box

                            sx={{ m: 3, width: 600 }}
                        >
                            <TextField
                                fullWidth
                                label="Degree Name"
                                name="degreeName"
                                value={education.degreeName}
                                onChange={(e) => handleEducationChange(e, i)}
                                id="fullWidth"
                                required
                            />
                        </Box>

                        <Box
                            mb={1}
                            sx={{ m: 3, width: 600 }}
                        >
                            <TextField
                                required
                                label="College Name"
                                fullWidth
                                id="fullWidth"
                                name="collegeName"
                                value={education.collegeName}
                                onChange={(e) => handleEducationChange(e, i)}
                            />
                        </Box>



                        <FormControl sx={{ m: 3, width: 600 }} required>
                            <InputLabel>Authority</InputLabel>
                            <Select
                                name="authority"
                                fullWidth
                                label="Authority"
                                value={education.authority}
                                onChange={(e) => handleEducationChange(e, i)}
                                input={<OutlinedInput label="Authority" />}
                                required
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {authorities.map((authority, i) => (
                                    <MenuItem
                                        key={i}
                                        value={authority}
                                    >
                                        {authority}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl sx={{ m: 3, width: 600 }} required>
                            <InputLabel>Discipline</InputLabel>
                            <Select
                                variant="outlined"
                                label="Discipline"
                                name="discipline"
                                value={education.discipline}
                                onChange={(e) => handleEducationChange(e, i)}

                                input={<OutlinedInput label="Discipline" />}
                                required
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {disciplines.map((discipline, i) => (
                                    <MenuItem
                                        key={i}
                                        value={discipline}
                                    >
                                        {discipline}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl sx={{ m: 3, width: 600 }} required>
                            <InputLabel id="demo-multiple-name-label">Year of Passout</InputLabel>
                            <Select
                                name="yearOfpassout"
                                value={education.yearOfpassout}
                                onChange={(e) => handleEducationChange(e, i)}
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
                        </FormControl>

                        <Box
                            mb={1}
                            sx={{ m: 3, width: 600 }}>
                            <TextField
                                variant="outlined"
                                label="Start Year"
                                name="startYear"
                                value={education.startYear}
                                onChange={(e) => handleEducationChange(e, i)}
                                type="Date"
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
                                onChange={(e) => handleEducationChange(e, i)}
                                type="Date"
                                fullWidth
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            /></Box>

                        <Button variant="contained" style={save} onClick={handleSubmit} >Submit</Button>

                        <Button variant="contained" style={cancel} onClick={() => props.educationInfo(false)}  >cancel</Button>

                    </div>

                    <br />

                </div>
            ))}
        </div>
    )
}

export default EducationPortfolio