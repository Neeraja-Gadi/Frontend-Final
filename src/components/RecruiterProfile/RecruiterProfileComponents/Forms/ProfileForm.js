// import React, { useState } from 'react';
// import { styled } from '@mui/system';
// import { TextField, Button, Typography, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const useStyles = styled((theme) => ({
//   formContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: theme.spacing(3),
//     width: '40rem',
//     padding: theme.spacing(3),
//     borderRadius: theme.spacing(1),
//     border: `1px solid ${theme.palette.divider}`,
//     margin: '0 auto',
//   },
//   textField: {
//     width: '100%',
//   },
//   saveButton: {
//     marginRight: theme.spacing(2),
//   },
//   cancelButton: {
//     backgroundColor: theme.palette.error.main,
//     color: theme.palette.common.white,
//     '&:hover': {
//       backgroundColor: theme.palette.error.dark,
//     },
//   },
// }));

// const userId = JSON.parse(localStorage.getItem('userDetails'));

// const ProfileForm = () => {
//   const navigate = useNavigate();
//   const classes = useStyles();
//   const [formData, setFormData] = useState({
//     userDetailsID: userId._id,
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     professionalSummary: '',
//     workExperience: [],
//     awards: [],
//     socialMediaLinks: {
//       linkedin: '',
//       twitter: ''
//     }
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleExperienceChange = (index, field, value) => {
//     const experiences = [...formData.workExperience];
  
//     experiences[index][field] = value;
//     setFormData({ ...formData, workExperience: experiences });
//   };

//   const handleInputChange2 = (e, index) => {
//     const { name, value } = e.target;
 
//     const field = name.split(".")[2];
   
//     handleExperienceChange(index, field, value);
//   };

//   const handleSocialMedia = (e) => {
//     const socialMediaLinks = {...formData.socialMediaLinks};
//     const { name, value } = e.target;
  
//     let temp=name.split('.')[1]
  
//     socialMediaLinks[temp]=value
//     setFormData({ ...formData ,socialMediaLinks});
//   };
  
//   const handleSave = () => {

//     let info = { ...formData }

//     info.socialMediaLinks.linkedin = info.linkedin
//     info.socialMediaLinks.twitter = info.twitter
//     delete info["linkedin"];
//     delete info["twitter"];
//     // console.log(info)
//     fetch("http://localhost:8000/recruiter", {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(info)

//     }).then(response => response.json().then(data => {
//         console.log(data)
//         if (data.status === true) {
//             // alert("Created Profile Sucessfully")
//             navigate("/SubscriptionModal")
//         }
//     }))
// }

//   return (
//     <Box className={classes.formContainer}>
//       <Typography variant="h4" gutterBottom>
//         Recruiter Form
//       </Typography>

//       <Box>
//         <TextField
//           label="Full Name"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleInputChange}
//           variant="outlined"
//           className={classes.textField}
//           required
//         />
//       </Box>

//       <Box>
//         <TextField
//           label="Email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//           variant="outlined"
//           className={classes.textField}
//           required
//         />
//       </Box>

//       <Box>
//         <TextField
//           label="Phone Number"
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleInputChange}
//           variant="outlined"
//           className={classes.textField}
//           required
//         />
//       </Box>

//       <Box>
//         <TextField
//           label="Professional Summary"
//           name="professionalSummary"
//           value={formData.professionalSummary}
//           onChange={handleInputChange}
//           variant="outlined"
//           className={classes.textField}
//           multiline
//           rows={4}
//         />
//       </Box>

//       <Typography variant="h6" gutterBottom>
//         Work Experience
//       </Typography>
//       {formData.workExperience.map((experience, index) => (
//         <Box key={index}>
//           <TextField
//             label="Company"
//             name={`workExperience.${index}.company`}
//             value={experience.company}
//             onChange={(e)=>{handleInputChange2(e,index)}}
//             variant="outlined"
//             className={classes.textField}
//           />
//           <TextField
//             label="Job Title"
//             name={`workExperience.${index}.jobTitle`}
//             value={experience.jobTitle}
//             onChange={(e)=>{handleInputChange2(e,index)}}
//             variant="outlined"
//             className={classes.textField}
//           />
//         </Box>
//       ))}
//       <Button
//         variant="outlined"
//         onClick={() =>
//           setFormData({
//             ...formData,
//             workExperience: [
//               ...formData.workExperience,
//               { company: '', jobTitle: '' },
//             ],
//           })
//         }
//       >
//         Add Work Experience
//       </Button>

//       <Typography variant="h6" gutterBottom>
//         Social Media Links
//       </Typography>
//       <Box>
//         <TextField
//           label="LinkedIn URL"
//           name="socialMediaLinks.linkedin"
//           value={formData.socialMediaLinks.linkedin}
//           onChange={handleSocialMedia}
//           variant="outlined"
//           className={classes.textField}
//         />
//       </Box>
//       <Box>
//         <TextField
//           label="Twitter URL"
//           name="socialMediaLinks.twitter"
//           value={formData.socialMediaLinks.twitter}
//           onChange={handleSocialMedia}
//           variant="outlined"
//           className={classes.textField}
//         />
//       </Box>

//       <Box>
//         <Button
//           variant="contained"
//           color="primary"
//           className={classes.saveButton}
//           onClick={handleSave}
//         >
//           Save
//         </Button>
//         <Button variant="contained" className={classes.cancelButton}>
//           Cancel
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default ProfileForm;



// import React, { useState } from 'react';
// import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
// import { TextField, Button, Typography, Box, IconButton } from '@mui/material';
// import { Delete as DeleteIcon } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1976d2', // Blue color for primary elements
//     },
//     error: {
//       main: '#f44336', // Red color for error elements
//     },
//   },
// });

// const useStyles = styled((theme) => ({
//   formContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: theme.spacing(3),
//     width: '40rem',
//     padding: theme.spacing(3),
//     borderRadius: theme.spacing(1),
//     border: `1px solid ${theme.palette.divider}`,
//     margin: '0 auto',
//   },
//   textField: {
//     width: '100%',
//   },
//   addButton: {
//     marginTop: theme.spacing(1),
//   },
//   removeButton: {
//     color: theme.palette.error.main,
//   },
//   saveButton: {
//     marginRight: theme.spacing(2),
//   },
//   cancelButton: {
//     backgroundColor: theme.palette.error.main,
//     color: theme.palette.common.white,
//     '&:hover': {
//       backgroundColor: theme.palette.error.dark,
//     },
//   },
// }));

// const userId = JSON.parse(localStorage.getItem('userDetails'));

// const ProfileForm = () => {
//   const navigate = useNavigate();
//   const classes = useStyles();
//   const [formData, setFormData] = useState({
//     userDetailsID: userId._id,
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     professionalSummary: '',
//     workExperience: [],
//     awards: [],
//     socialMediaLinks: {
//       linkedin: '',
//       twitter: '',
//     },
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleExperienceChange = (index, field, value) => {
//     const experiences = [...formData.workExperience];
//     experiences[index][field] = value;
//     setFormData({ ...formData, workExperience: experiences });
//   };

//   const handleInputChange2 = (e, index) => {
//     const { name, value } = e.target;
//     const field = name.split('.')[2];
//     handleExperienceChange(index, field, value);
//   };

//   const handleSocialMedia = (e) => {
//     const { name, value } = e.target;
//     const temp = name.split('.')[1];
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       socialMediaLinks: {
//         ...prevFormData.socialMediaLinks,
//         [temp]: value,
//       },
//     }));
//   };

//   const handleSave = () => {
//     // Assuming the API endpoint is correct and formData is formatted correctly
//     fetch('http://localhost:8000/recruiter', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         if (data.status === true) {
//           navigate('/SubscriptionModal');
//         }
//       });
//   };

//   const handleRemoveExperience = (index) => {
//     const updatedExperiences = formData.workExperience.filter((_, idx) => idx !== index);
//     setFormData({ ...formData, workExperience: updatedExperiences });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Box className={classes.formContainer}>
//         <Typography variant="h4" gutterBottom>
//           Recruiter Form
//         </Typography>

//         <Box>
//           <TextField
//             label="Full Name"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleInputChange}
//             variant="outlined"
//             className={classes.textField}
//             required
//           />
//         </Box>

//         <Box>
//           <TextField
//             label="Email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             variant="outlined"
//             className={classes.textField}
//             required
//           />
//         </Box>

//         <Box>
//           <TextField
//             label="Phone Number"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleInputChange}
//             variant="outlined"
//             className={classes.textField}
//             required
//           />
//         </Box>

//         <Box>
//           <TextField
//             label="Professional Summary"
//             name="professionalSummary"
//             value={formData.professionalSummary}
//             onChange={handleInputChange}
//             variant="outlined"
//             className={classes.textField}
//             multiline
//             rows={4}
//           />
//         </Box>

//         <Typography variant="h6" gutterBottom>
//           Work Experience
//         </Typography>
//         {formData.workExperience.map((experience, index) => (
//           <Box key={index}>
//             <TextField
//               label="Company"
//               name={`workExperience.${index}.company`}
//               value={experience.company}
//               onChange={(e) => {
//                 handleInputChange2(e, index);
//               }}
//               variant="outlined"
//               className={classes.textField}
//             />
//             <TextField
//               label="Job Title"
//               name={`workExperience.${index}.jobTitle`}
//               value={experience.jobTitle}
//               onChange={(e) => {
//                 handleInputChange2(e, index);
//               }}
//               variant="outlined"
//               className={classes.textField}
//             />
//             <IconButton
//               aria-label="Remove"
//               className={classes.removeButton}
//               onClick={() => handleRemoveExperience(index)}
//             >
//               <DeleteIcon />
//             </IconButton>
//           </Box>
//         ))}
//         <Button
//           variant="outlined"
//           className={classes.addButton}
//           onClick={() =>
//             setFormData({
//               ...formData,
//               workExperience: [...formData.workExperience, { company: '', jobTitle: '' }],
//             })
//           }
//         >
//           Add Work Experience
//         </Button>

//         <Typography variant="h6" gutterBottom>
//           Social Media Links
//         </Typography>
//         <Box>
//           <TextField
//             label="LinkedIn URL"
//             name="socialMediaLinks.linkedin"
//             value={formData.socialMediaLinks.linkedin}
//             onChange={handleSocialMedia}
//             variant="outlined"
//             className={classes.textField}
//           />
//         </Box>
//         <Box>
//           <TextField
//             label="Twitter URL"
//             name="socialMediaLinks.twitter"
//             value={formData.socialMediaLinks.twitter}
//             onChange={handleSocialMedia}
//             variant="outlined"
//             className={classes.textField}
//           />
//         </Box>

//         <Box>
//           <Button
//             variant="contained"
//             color="primary"
//             className={classes.saveButton}
//             onClick={handleSave}
//           >
//             Save
//           </Button>
//           <Button variant="contained" className={classes.cancelButton}>
//             Cancel
//           </Button>
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default ProfileForm;



import React, { useState } from 'react';
import { TextField, Button, Typography, Box, IconButton } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import baseurl from "../../../../baseURL/config"



const ProfileForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userDetailsID: userId._id,
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
    // Assuming the API endpoint is correct and formData is formatted correctly
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
      }}
    >
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
          fullWidth
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
          fullWidth
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
          fullWidth
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
          fullWidth
          multiline
          rows={4}
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
          />
          <TextField
            label="Job Title"
            name={`workExperience.${index}.jobTitle`}
            value={experience.jobTitle}
            onChange={(e) => handleInputChange2(e, index)}
            variant="outlined"
            fullWidth
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


