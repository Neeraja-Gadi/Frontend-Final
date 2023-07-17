import * as React from 'react';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom"
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { jobRoles , jobCategory, experiences, primarySkills ,secondarySkills , sectors , location , salary} from '../../constraints/arrays';


const user = JSON.parse(localStorage.getItem("userDetails"))

// const jobProfiles = Object.keys(jobRoles)


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function JobPost() {

        const navigation = useNavigate();
    useEffect(() => {
        if (user == null) {
            navigation("/login")
            alert("Please login first")
        }
    },)
    // const classes = useStyles();
    const [skillstemplatedata, setSkillstemplatedata] = useState([]);
    const [selectedJobCategory ,setSelectedJobCategory] = useState('');
    const [jobData, setJobData] = useState([
        {
            userDetailsID: user._id,
            jobCategory: "",
            jobRole: [],
            jobDescription: "",
            experience: [],
            primarySkills: [],
            secondarySkills: [],
            company: '',
            location: '',
            salary: "",
            sector: '',
            highestEducation: []
        },
    ]);
    const handleJobChange = (event, index) => {
        const { name, value } = event.target;
        const newJobs = [...jobData];
        newJobs[index] = {
            ...newJobs[index],
            [name]: value,
        };
        setJobData(newJobs);
        if (name === 'jobCategory') {
            setSelectedJobCategory(value);
        }
    };
    async function getSkillsprompt(jobRole) {
        try {
            const response = await fetch(`http://localhost:8000/insertskillstemplates?jobProfile=${jobRole}`);
            const data = await response.json();
            setSkillstemplatedata(data.data[0].skills);          
            return skillstemplatedata
        } catch (err) {
            console.log(err);
        }
    };
    function SaveJob() {
        let info = jobData
        info?.map((e) => {
            return (
                fetch(`http://localhost:8000/job/${user._id}`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(e)
                }).then(response => response.json().then(data => {
                    console.log(data)
                    if (data.status === true) {
                        alert("Created Job Post Sucessfully")
                    }
                }))
            )
        })
    }
    function handlesubmitEvent(e) {
        e.preventDefault()
        SaveJob()
    };
 

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md" 
      onSubmit={handlesubmitEvent}
      style={{ 
       borderRadius: '0.5rem' ,
       marginTop: '10%' ,
       boxShadow: '2px 2px 4px 2px rgba(0, 0, 0, 0.2)'
         
      }}
>
        <CssBaseline />
        {jobData?.map((job, index) => (
        <Box
        key={index}
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5" marginTop="20px">
           Post a Job
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>

       
          <FormControl sx={{ mt: 1 , width: '100%' }}>
        <InputLabel id="demo-multiple-name-label">Job Category</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          name='jobCategory'
                                      value={job.jobCategory}
                                      onChange={(event) => handleJobChange(event, index)}
        
        //   style={{ width: '100%' }} 
          input={<OutlinedInput label="Job Category" />}
         
        >
          {jobCategory.map((jobCategorys,i) => (
            <MenuItem
              key={i}
              value={jobCategorys}
              
            >
              {jobCategorys}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      

      <FormControl sx={{ mt: 1 , width: '100%' }}>
        <InputLabel id="demo-multiple-name-label">Job Role</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          name='jobRole'
          multiple
          required
          value={job.jobRole}
          onChange={(event) => handleJobChange(event, index)}
     
        //   style={{ width: '100%' }} 
          input={<OutlinedInput label="Job Role" />}
         
        >
          {jobRoles[selectedJobCategory]?.map((jobRole,i) => (
            <MenuItem
              key={i}
              value={jobRole}
              
            >
              {jobRole}
            </MenuItem>
          ))}
        </Select>
      </FormControl>


      <FormControl sx={{ mt: 1 , width: '100%' }}>
        <InputLabel id="demo-multiple-name-label">Experience</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          input={<OutlinedInput label="Experience" />}
          value={job.experience}
                                      onChange={(event) => handleJobChange(event, index)}
         
        >
          {experiences.map((experience,i) => (
            <MenuItem
              key={i}
              value={experience}
              
            >
              {experience}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ mt: 1 , width: '100%' }}>
        <InputLabel id="demo-multiple-name-label">Primary Skills</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          input={<OutlinedInput label="Primary Skills" />}
          name='primarySkills'
                                      value={job.primarySkills}
                                      // onChange={(event) => handleJobChange(event, index)}
                                      onChange={async (event) => {
                                          let skill = await getSkillsprompt(job.jobRole);
                                          // console.log("skill", skill)
                                          alert(skill)
                                          handleJobChange(event, index)
                                      }}
       
         
        >
          {primarySkills.map((primarySkill,i) => (
            <MenuItem
              key={i}
              value={primarySkill}
              
            >
              {primarySkill}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ mt: 1 , width: '100%' }}>
        <InputLabel id="demo-multiple-name-label">Secondary Skills</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          input={<OutlinedInput label="Secondary Skills" />}
          name='secondarySkills'
                                      value={job.secondarySkills}
                                      onChange={(event) => handleJobChange(event, index)}
          
         
        >
          {secondarySkills.map((secondarySkill,i) => (
            <MenuItem
              key={i}
              value={secondarySkill}
              
            >
              {secondarySkill}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ mt: 1 , width: '100%' }}>
        <InputLabel id="demo-multiple-name-label">Sector</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          input={<OutlinedInput label="Sector" />}
          name='sector'
                                      value={job.sector}
                                      onChange={(event) => handleJobChange(event, index)}
       
         
        >
          {sectors.map((sector,i) => (
            <MenuItem
              key={i}
              value={sector}
              
            >
              {sector}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ mt: 1 , width: '100%' }}>
        <InputLabel id="demo-multiple-name-label">Location</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          input={<OutlinedInput label="Locaton" />}
          name='location'
          value={job.location}
          onChange={(event) => handleJobChange(event, index)}
         
        >
          {location.map((locations,i) => (
            <MenuItem
              key={i}
              value={locations}
              
            >
              {locations}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
      sx={{ mt: 1 , width: '100%' }}
          id="outlined-multiline-flexible"
          label="Job Description"
          name='jobDescription'
                                      value={job.jobDescription}
                                    onChange={(event) => handleJobChange(event, index)}
      
          maxRows={4}
        />

<FormControl sx={{ mt: 1 , width: '100%' }}>
        <InputLabel id="demo-multiple-name-label">Salary</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          input={<OutlinedInput label="Salary" />}
          value={job.salary}
          onChange={(event) => handleJobChange(event, index)}   
         
        >
          {salary.map((salarys,i) => (
            <MenuItem
              key={i}
              value={salarys}
                     
            >
              {salarys}
            </MenuItem>
          ))}
        </Select>
      </FormControl>





            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handlesubmitEvent}
            >
              submit
            </Button>
           
        

          </Box>
        </Box>
           ))}
   
      </Container>
    </ThemeProvider>
  );
}

// import React, { useEffect, useState } from 'react'
// import Typography from '@mui/material/Typography'
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { jobRoles, experiences, secondarySkills, primarySkills, educationLevels, location , sectors, jobCategory } from '../../constraints/arrays';
// import { useNavigate } from "react-router-dom";
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { Button } from '@mui/material';


// const main = {
//     border: '2px solid blue',
//     margin: '50px',
//     AlignItems: 'center',
//     borderRadius: '0.5rem'
// }

// const JobPost = () => {
//     const navigation = useNavigate();
//     useEffect(() => {
//         if (user == null) {
//             navigation("/login")
//             alert("Please login first")
//         }
//     },)
//     // const classes = useStyles();
//     const [skillstemplatedata, setSkillstemplatedata] = useState([]);
//     const [selectedJobCategory, setSelectedJobCategory] = useState('');
//     const [jobData, setJobData] = useState([
//         {
//             userDetailsID: user._id,
//             jobCategory: "",
//             jobRole: [],
//             jobDescription: "",
//             experience: [],
//             primarySkills: [],
//             secondarySkills: [],
//             company: '',
//             location: '',
//             salary: "",
//             sector: '',
//             highestEducation: []
//         },
//     ]);
//     const handleJobChange = (event, index) => {
//         const { name, value } = event.target;
//         const newJobs = [...jobData];
//         newJobs[index] = {
//             ...newJobs[index],
//             [name]: value,
//         };
//         setJobData(newJobs);
//         if (name === 'jobCategory') {
//             setSelectedJobCategory(value);
//         }
//     };
//     async function getSkillsprompt(jobRole) {
//         try {
//             const response = await fetch(`http://localhost:8000/insertskillstemplates?jobProfile=${jobRole}`);
//             const data = await response.json();
//             setSkillstemplatedata(data.data[0].skills);
//             // console.log("getSkillsprompt",skillstemplatedata)
//             return skillstemplatedata
//         } catch (err) {
//             console.log(err);
//         }
//     };
//     function SaveJob() {
//         let info = jobData
//         info?.map((e) => {
//             return (
//                 fetch(`http://localhost:8000/job/${user._id}`, {
//                     method: 'POST',
//                     headers: {
//                         'Accept': 'application/json',
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify(e)
//                 }).then(response => response.json().then(data => {
//                     console.log(data)
//                     if (data.status === true) {
//                         alert("Created Job Post Sucessfully")
//                     }
//                 }))
//             )
//         })
//     }
//     function handlesubmitEvent(e) {
//         e.preventDefault()
//         SaveJob()
//     };
//     return (
//         <div style={main} onSubmit={handlesubmitEvent}>
//             {jobData?.map((job, index) => (
//                 <div key={index}>
//                     <Typography variant="h4" gutterBottom>
//                         Post a Job
//                     </Typography>
//                     <FormControl sx={{ m: 1, width: 500 }}>
//                         <InputLabel id="demo-multiple-name-label">Job Category</InputLabel>
//                         <Select
//                             labelId="demo-multiple-name-label"
//                             id="demo-multiple-name"
                    
//                             name='jobCategory'
//                             value={job.jobCategory}
//                             onChange={(event) => handleJobChange(event, index)}
//                             input={<OutlinedInput label="Job Role" />}
//                         >
//                             {jobCategory.map((jobc, i) => (
//                                 <MenuItem
//                                     key={i}
//                                     value={jobc}
//                                 >
//                                     {jobc}
//                                 </MenuItem>
//                             )
//                             )}
//                         </Select>
//                     </FormControl>

                    
//                     <FormControl sx={{ m: 1, width: 500 }}>
//                         <InputLabel id="demo-multiple-name-label">Job Role</InputLabel>
                       
//                         <Select
//                             labelId="demo-multiple-name-label"
//                             id="demo-multiple-name"
//                             maxItem={3}
//                             multiple
//                             name='jobRole'
//                             value={job.jobRole}
//                             onChange={(event) => handleJobChange(event, index)}
//                             input={<OutlinedInput label="Job Role" />}
//                         >
//                             {jobRoles[selectedJobCategory]?.map((jobRole, i) => (
//                                 <MenuItem key={i} value={jobRole}>
//                                     {jobRole}
//                                 </MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>


//                     <FormControl sx={{ m: 1, width: 500 }}>
//                         <InputLabel id="demo-multiple-name-label">Highest Qualification</InputLabel>
//                         <Select
//                             labelId="demo-multiple-name-label"
//                             id="demo-multiple-name"
//                             multiple
//                             maxItem={3}
//                             name='highestEducation'
//                             value={job.highestEducation}
//                             onChange={(event) => handleJobChange(event, index)}
//                             input={<OutlinedInput label="Highest Qualification" />}
//                         >
//                             {educationLevels.map((educationLevel) => (
//                                 <MenuItem
//                                     key={educationLevel}
//                                     value={educationLevel}
//                                 >
//                                     {educationLevel}
//                                 </MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>
//                     <FormControl sx={{ m: 1, width: 500 }}>
//                         <InputLabel id="demo-multiple-name-label">Experience</InputLabel>
//                         <Select
//                             labelId="demo-multiple-name-label"
//                             id="demo-multiple-name"
//                             multiple
//                             name='experience'
//                             maxItem={3}

//                             value={job.experience}
//                             onChange={(event) => handleJobChange(event, index)}
//                             input={<OutlinedInput label="Job Role" />}
//                         >
//                             {experiences.map((experience) => (
//                                 <MenuItem
//                                     key={experience}
//                                     value={experience}
//                                 >
//                                     {experience}
//                                 </MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>
//                     <FormControl sx={{ m: 1, width: 500 }}>
//                         <InputLabel id="demo-multiple-name-label">Primary Skills</InputLabel>
//                         <Select
//                             labelId="demo-multiple-name-label"
//                             id="demo-multiple-name"
//                             multiple
//                             name='primarySkills'
//                             value={job.primarySkills}
//                             // onChange={(event) => handleJobChange(event, index)}
//                             onChange={async (event) => {
//                                 let skill = await getSkillsprompt(job.jobRole);
//                                 // console.log("skill", skill)
//                                 alert(skill)
//                                 handleJobChange(event, index)
//                             }}
//                             input={<OutlinedInput label="Primary Skills" />}
//                         >
//                             {primarySkills.map((primarySkill) => (
//                                 <MenuItem
//                                     key={primarySkill}
//                                     value={primarySkill}
//                                 >
//                                     {primarySkill}
//                                 </MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>
//                     <FormControl sx={{ m: 1, width: 500 }}>
//                         <InputLabel id="demo-multiple-name-label">Secondary Skills</InputLabel>
//                         <Select
//                             labelId="demo-multiple-name-label"
//                             id="demo-multiple-name"
//                             multiple
//                             name='secondarySkills'
//                             value={job.secondarySkills}
//                             onChange={(event) => handleJobChange(event, index)}
//                             input={<OutlinedInput label="Secondary Skills" />}
//                         >
//                             {secondarySkills.map((secondarySkill) => (
//                                 <MenuItem
//                                     key={secondarySkill}
//                                     value={secondarySkill}
//                                 >
//                                     {secondarySkill}
//                                 </MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>
       
//                     <FormControl sx={{ m: 1, width: 500 }}>
//                         <InputLabel id="demo-multiple-name-label">Sector</InputLabel>
//                         <Select
//                             labelId="demo-multiple-name-label"
//                             id="demo-multiple-name"
                           
//                             name='sector'
//                             value={job.sector}
//                             onChange={(event) => handleJobChange(event, index)}
//                             input={<OutlinedInput label="Secondary Skills" />}
//                         >
//                             {sectors.map((sector) => (
//                                 <MenuItem
//                                     key={sector}
//                                     value={sector}
//                                 >
//                                     {sector}
//                                 </MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>
                   
//                     <Box
//                         component="form"
//                         sx={{
//                             '& .MuiTextField-root': { m: 1, width: '25ch' },
//                         }}
//                         noValidate
//                         autoComplete="off"
//                     >
                       
//                         <TextField
//                             id="outlined-multiline-static"
//                             name='jobDescription'
//                             value={job.jobDescription}
//                             onChange={(event) => handleJobChange(event, index)}
//                             label="Job Description"
//                             multiline
//                             rows={4}
//                         />
//                     </Box>


//                     <TextField fullWidth name='company'
//                         value={job.company}
//                         onChange={(event) => handleJobChange(event, index)}
//                         label="Company"
//                         id="fullWidth"
//                     />


//                     <TextField
//                         fullWidth
//                         name='location'
//                         value={job.location}
//                         onChange={(event) => handleJobChange(event, index)}
//                         label="Location"
//                         id="fullWidth"
//                     />


//                     <FormControl sx={{ m: 1, width: 500 }}>
//                         <InputLabel id="demo-multiple-name-label">Location</InputLabel>
//                         <Select
//                             labelId="demo-multiple-name-label"
//                             id="demo-multiple-name"
//                             name='location'
//                             value={job.location}
//                             onChange={(event) => handleJobChange(event, index)}
//                             input={<OutlinedInput label="Location" />}
//                         >
//                             {location.map((locations) => (
//                                 <MenuItem
//                                     key={locations}
//                                     value={locations}
//                                 >
//                                     {locations}
//                                 </MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>


//                     <TextField fullWidth name='salary'
//                         value={job.salary}
//                         onChange={(event) => handleJobChange(event, index)}
//                         label="Salary"
//                         id="fullWidth"
//                     />
//                     <Button onClick={handlesubmitEvent}
//                         type="submit"
//                         variant="contained"
//                         color="primary"
//                     >
//                         Submit
//                     </Button>
//                 </div>
//             ))}
//         </div>
//     )
// }
// export default JobPost











