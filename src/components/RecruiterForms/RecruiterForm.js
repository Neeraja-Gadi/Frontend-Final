
import React, { useState } from 'react';
import { styled } from '@mui/system';
import {
    TextField,
    Typography,
    Button,
    Box,
    Paper
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
const useStyles = styled((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(7),
        backgroundColor: theme.palette.info.light,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '70%',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        backgroundColor: theme.palette.background.paper,

    },
    formControl: {
        width: '100%',
        marginBottom: theme.spacing(5),
        marginRight: theme.spacing(5),
        
        // paddingBottom: theme.spacing(3)

    },
    submitButton: {
        marginTop: theme.spacing(2)
    }
}));

const RecruiterProfileForm = () => {
    const navigate=useNavigate();
    const classes = useStyles();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        professionalSummary: '',
        workExperience: [],
        awards: [],
        socialMediaLinks: {
            linkedin: '',
            twitter: ''
        }
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleExperienceChange = (index, field, value) => {
        const experiences = [...formData.workExperience];
                          experiences[index][field] = value;
                          setFormData({...formData, workExperience: experiences });
      };
      
      const handleInputChange2 = (e, index) => {
        const {name, value} = e.target;
        const [field] = name.split(".");
        handleExperienceChange(index, field, value);
      };
      
    function SaveRecruiter() {
        let info = { ...formData }
     
        info.socialMediaLinks.linkedin=info.linkedin
        info.socialMediaLinks.twitter=info.twitter
        delete info["linkedin"];
        delete info["twitter"];
        // console.log(info)
        fetch("http://localhost:8000/recruiter", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(info)

        }).then(response => response.json().then(data => {
                console.log(data)
                if(data.status===true){
                    alert("Created Profile Sucessfully")
                    navigate("/JobPostForm")
                }

        }))

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        SaveRecruiter()
        // console.log(formData);
    };


    return (
        <Box className={classes.root}>
            <Paper className={classes.form}>
                <Typography variant="h5" gutterBottom>
                    Recruiter Profile Form

                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        variant="outlined"
                        className={classes.formControl}
                        required
                    />
                    <TextField
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        variant="outlined"
                        className={classes.formControl}
                        required
                    />
                    <TextField
                        label="Phone Number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        variant="outlined"
                        className={classes.formControl}
                        required
                    />
                    <TextField
                        label="Professional Summary"
                        name="professionalSummary"
                        value={formData.professionalSummary}
                        onChange={handleInputChange}
                        variant="outlined"
                        className={classes.formControl}
                        multiline
                        rows={4}
                    />

                    <Typography variant="h6" gutterBottom>
                        Work Experience
                    </Typography>
                    <Box className={classes.formControl}>
                        {formData.workExperience.map((experience, index) => (
                            <Box key={index}>
                                <TextField
                                    label="Company"
                                    name={`company.${index}`}
                                    value={experience.company}
                                    onChange={(e) => handleInputChange2(e, index)}
                                    variant="outlined"
                                    
                                />
                                <TextField
                                    label="Job Title"
                                    name={`jobTitle.${index}`}
                                    value={experience.jobTitle}
                                    onChange={(e) => handleInputChange2(e, index)}
                                    variant="outlined"
                                />
                            </Box>
                        ))}
                    </Box>
                    <Button
                        variant="outlined"
                        onClick={() =>
                            setFormData({
                                ...formData,
                                workExperience: [
                                    ...formData.workExperience,
                                    { company: "", jobTitle: "" },
                                ],
                            })
                        }
                    >
                        Add Work Experience
                    </Button>

                   
                    

                    <Typography variant="h6" gutterBottom>
                        SocialMedia Links:
                    </Typography>
                    <Box className={classes.formControl}>

                        <TextField
                            label="LinkedIn Url"
                            name="linkedin"
                            value={formData.linkedin}
                            onChange={handleInputChange}
                            variant="outlined"
                            required
                        />
                        <TextField
                            label="twitter Url"
                            name="twitter"
                            value={formData.twitter}
                            onChange={handleInputChange}
                            variant="outlined"
                            
                        />

                    </Box>

                    {/* <FormControl className={classes.formControl}>
                        <InputLabel>Recruiting Specialties</InputLabel>
                        <Select
                            multiple
                            name="recruitingSpecialties"
                            value={formData.recruitingSpecialties}
                            onChange={handleInputChange}
                            variant="outlined"
                            renderValue={(selected) => selected.join(', ')}
                        >
                            <MenuItem value="IT">IT</MenuItem>
                            <MenuItem value="Finance">Finance</MenuItem>
                            <MenuItem value="Sales">Sales</MenuItem>
                            <MenuItem value="Engineering">Engineering</MenuItem>
                            <MenuItem value="Marketing">Marketing</MenuItem>
                            <MenuItem value="Human Resources">Human Resources</MenuItem>
                        </Select>
                    </FormControl> */}

                    <Button variant="contained" color="primary" type="submit">
                        Save Profile
                    </Button>
                </form>

            </Paper>
        </Box >

    );
}

export default RecruiterProfileForm;
