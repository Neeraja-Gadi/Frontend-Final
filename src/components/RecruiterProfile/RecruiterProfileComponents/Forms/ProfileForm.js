import React, { useState } from 'react';
import { styled } from '@mui/system';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const useStyles = styled((theme) => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
    width: '40rem',
    padding: theme.spacing(3),
    borderRadius: theme.spacing(1),
    border: `1px solid ${theme.palette.divider}`,
    margin: '0 auto',
  },
  textField: {
    width: '100%',
  },
  saveButton: {
    marginRight: theme.spacing(2),
  },
  cancelButton: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  },
}));

const ProfileForm = () => {
  const navigate = useNavigate();
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
    setFormData({ ...formData, workExperience: experiences });
  };

  const handleInputChange2 = (e, index) => {
    const { name, value } = e.target;
    const [field] = name.split(".");
    handleExperienceChange(index, field, value);
  };

  const handleSave = () => {

    let info = { ...formData }

    info.socialMediaLinks.linkedin = info.linkedin
    info.socialMediaLinks.twitter = info.twitter
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
        if (data.status === true) {
            // alert("Created Profile Sucessfully")
            navigate("/SubscriptionModal")
        }
    }))
}

  return (
    <Box className={classes.formContainer}>
      <Typography variant="h4" gutterBottom>
        Recruiter Form
      </Typography>

      <Box>
        <TextField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          variant="outlined"
          className={classes.textField}
          required
        />
      </Box>

      <Box>
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          variant="outlined"
          className={classes.textField}
          required
        />
      </Box>

      <Box>
        <TextField
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          variant="outlined"
          className={classes.textField}
          required
        />
      </Box>

      <Box>
        <TextField
          label="Professional Summary"
          name="professionalSummary"
          value={formData.professionalSummary}
          onChange={handleInputChange}
          variant="outlined"
          className={classes.textField}
          multiline
          rows={4}
        />
      </Box>

      <Typography variant="h6" gutterBottom>
        Work Experience
      </Typography>
      {formData.workExperience.map((experience, index) => (
        <Box key={index}>
          <TextField
            label="Company"
            name={`workExperience.${index}.company`}
            value={experience.company}
            onChange={handleInputChange2}
            variant="outlined"
            className={classes.textField}
          />
          <TextField
            label="Job Title"
            name={`workExperience.${index}.jobTitle`}
            value={experience.jobTitle}
            onChange={handleInputChange2}
            variant="outlined"
            className={classes.textField}
          />
        </Box>
      ))}
      <Button
        variant="outlined"
        onClick={() =>
          setFormData({
            ...formData,
            workExperience: [
              ...formData.workExperience,
              { company: '', jobTitle: '' },
            ],
          })
        }
      >
        Add Work Experience
      </Button>

      <Typography variant="h6" gutterBottom>
        Social Media Links
      </Typography>
      <Box>
        <TextField
          label="LinkedIn URL"
          name="socialMediaLinks.linkedin"
          value={formData.socialMediaLinks.linkedin}
          onChange={handleInputChange}
          variant="outlined"
          className={classes.textField}
        />
      </Box>
      <Box>
        <TextField
          label="Twitter URL"
          name="socialMediaLinks.twitter"
          value={formData.socialMediaLinks.twitter}
          onChange={handleInputChange}
          variant="outlined"
          className={classes.textField}
        />
      </Box>

      <Box>
        <Button
          variant="contained"
          color="primary"
          className={classes.saveButton}
          onClick={handleSave}
        >
          Save
        </Button>
        <Button variant="contained" className={classes.cancelButton}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileForm;
