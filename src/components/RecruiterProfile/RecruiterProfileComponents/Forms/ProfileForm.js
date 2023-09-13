import React, { useState } from 'react';
import { TextField, Button, Typography, Box, IconButton } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import baseurl from "../../../../baseURL/config"

let user = JSON.parse(localStorage.getItem('userDetails'));

const ProfileForm = () => {
  user = JSON.parse(localStorage.getItem('userDetails'));
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userDetailsID: user._id,
    fullName: '',
    email: '',
    phoneNumber: '',
    professionalSummary: '',
    workExperience: [],
    socialMediaLinks: {
      linkedin: '',
      twitter: '',
    },
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
    const field = name.split('.')[2];
    handleExperienceChange(index, field, value);
  };

  const handleSocialMedia = (e) => {
    const { name, value } = e.target;
    const temp = name.split('.')[1];
    setFormData((prevFormData) => ({
      ...prevFormData,
      socialMediaLinks: {
        ...prevFormData.socialMediaLinks,
        [temp]: value,
      },
    }));
  };

  const handleRemoveExperience = (index) => {
    const updatedExperiences = formData.workExperience.filter((_, idx) => idx !== index);
    setFormData({ ...formData, workExperience: updatedExperiences });
  };

  const handleSave = () => {
    fetch(`${baseurl}/recruiter`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === true) {
          navigate('/SubscriptionModal');
        }
      });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '40rem',
        padding: 3,
        borderRadius: 1,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', 
        border: `1px solid #e0e0e0`, 
        backgroundColor: 'white', 
        marginLeft: "500px",
         
       
      }}
    >
      <Typography variant="h4" gutterBottom>
        Recruiter Form
      </Typography>

      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
          required
        />
      </Box>

      <Box  sx={{ marginBottom: 2 }}>
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
          required
        />
      </Box>

      <Box   sx={{ marginBottom: 2 }}>
        <TextField
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
          required
        />
      </Box>

      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Professional Summary"
          name="professionalSummary"
          value={formData.professionalSummary}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          required
        />
      </Box>

      <Typography variant="h6" gutterBottom>
        Work Experience
      </Typography>
      {formData.workExperience.map((experience, index) => (
        <Box key={index} sx={{ marginBottom: 2 }}>
          <TextField
            label="Company"
            name={`workExperience.${index}.company`}
            value={experience.company}
            onChange={(e) => handleInputChange2(e, index)}
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Job Title"
            name={`workExperience.${index}.jobTitle`}
            value={experience.jobTitle}
            onChange={(e) => handleInputChange2(e, index)}
            variant="outlined"
            fullWidth
            required
          />
          <IconButton
            aria-label="Remove"
            sx={{ color: 'error.main' }}
            onClick={() => handleRemoveExperience(index)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}
      <Button
        variant="outlined"
        fullWidth
        
        onClick={() =>
          setFormData({
            ...formData,
            workExperience: [...formData.workExperience, { company: '', jobTitle: '' }],
          })
        }
      >
        Add Work Experience
      </Button>

      <Typography variant="h6" gutterBottom>
        Social Media Links
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="LinkedIn URL"
          name="socialMediaLinks.linkedin"
          value={formData.socialMediaLinks.linkedin}
          onChange={handleSocialMedia}
          variant="outlined"
          fullWidth
          
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Twitter URL"
          name="socialMediaLinks.twitter"
          value={formData.socialMediaLinks.twitter}
          onChange={handleSocialMedia}
          variant="outlined"
          fullWidth
          
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
        >
          Save
        </Button>
        <Button variant="contained" sx={{ backgroundColor: 'error.main', color: 'common.white' }}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileForm;


