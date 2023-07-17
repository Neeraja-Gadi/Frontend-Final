// import React, { useState } from 'react';
// import { styled } from '@mui/system';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid'; 
// import CssBaseline from '@mui/material/CssBaseline';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import MultipleSelectChip from '../components/multiForm/MultiSelect';
// import { educationLevels, primarySkills, experience } from '../constraints/arrays';

// const useStyles = styled((theme) => ({

//     root: {

//         flexGrow: 1,

//         background: theme.palette.info.main,
//         border: 0,
//         borderRadius: 5,
//         // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//         color: "white",
//         // padding: theme.spacing(5),
//         marginBottom: "30px",
//         // padding: '30px 30px',
//     },
//     container: {
      
//         paddingTop: theme.spacing(3),
//         paddingBottom: theme.spacing(3),
       

//     },
//     fitlerBox: {
//         borderColor: theme.palette.info.main
//     }

// }));


// // const RecruiterId = JSON.parse(localStorage.getItem('userDetails'))

// function RecruiterSearch() {
//     const [query, setQuery] = useState('');
//     const [seekers, setSeekers] = useState([]);
//     // const [recruiterInfo , setRecruiterInfo] = ('')
//     const [filter, setFilter] = useState('');
//     const [searchStatus, setSearchStatus] = useState(false)

    

//     const handleChange = (event) => {
//         setFilter(event.target.value);
//     };

//     const handleQueryChange = (event) => {
//         // console.log(event.target.value)
//         setQuery(event.target.value);
//     }

//     const searchRes = function () {

//         fetch(`http://localhost:8000/allusers?${filter}=${query}`)
//             .then(response => response.json()
//                 .then(data => {
//                     setSeekers(data.data)
//                     console.log(data)
//                     if (data.data) setSearchStatus(true)
//                     else alert("No Results")
//                 })
//                 .catch(err => console.log(err)));
//         console.log(seekers);
//     }

//     const HandleSearch = async (event) => {
//         searchRes()
//         event.preventDefault();

//     }
//     const classes = useStyles();

//     return (
//         <div className="Search">
//             <form onSubmit={HandleSearch}>
//                 <Typography textAlign="center" variant="h6" gutterBottom>
//                     Search ...
//                 </Typography>
//                 <FormControl >
//                     <InputLabel id="demo-simple-select-label"   >Filter</InputLabel>
//                     <Select
//                         labelId="demo-simple-select-label"
//                         id="demo-simple-select"
//                         value={filter}
//                         label="Filter"
//                         onChange={handleChange}
//                     >
//                         <MenuItem value={"educationLevel"} >Education Level</MenuItem>
//                         <MenuItem value={"experience"}>Experience</MenuItem>
//                         <MenuItem value={"primarySkills"}>PrimarySkills</MenuItem>
//                         {/* <MenuItem value={"location"}>Location</MenuItem> */}

//                     </Select>
//                 </FormControl>
//                 {filter === "educationLevel" ? (<MultipleSelectChip handleFunction={handleQueryChange} requiredData={educationLevels} label={"Select"} />) : null}
//                 {filter === "experience" ? (<MultipleSelectChip handleFunction={handleQueryChange} requiredData={experience} label={"Select"} />) : null}
//                 {filter === "primarySkills" ? (<MultipleSelectChip handleFunction={handleQueryChange} requiredData={primarySkills} label={"Select"} />) : null}
//                 {/* 

//                 {/* <TextField id="outlined-basic"
//                     variant="outlined"
//                     value={query} onChange={handleQueryChange} /> */}
//                 {/* <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} /> */}
//                 <button type="submit">Search</button>
//                 {
//                     searchStatus ?

//                         <Container maxWidth="sm" textAlign="center" >
//                             <CssBaseline>
//                                 <Grid container spacing={1}>
//                                     <Grid item xs={12}>
//                                         {/* <Typography textAlign="center" variant="h4" gutterBottom>
//                                             JobSeekers Matched
//                                         </Typography> */}
//                                     </Grid>
//                                     {seekers.map((seeker, index) => (
//                                         <Grid item xs={8} sm={8} key={index} className={classes.root}>
//                                             <Typography variant="subtitle1" textAlign="center" gutterBottom >
//                                                 Name :{seeker.firstName}{seeker.lastName}
//                                             </Typography>
//                                             <Typography variant="subtitle1" textAlign="center" gutterBottom >
//                                                 Email :{seeker.email}
//                                             </Typography>
//                                             <Typography variant="subtitle1" textAlign="center" gutterBottom >
//                                                 Education  :{seeker.educationLevel}
//                                             </Typography>
//                                             <Typography variant="subtitle1" gutterBottom >
//                                                 Experience  :{seeker.experience}
//                                             </Typography>
//                                             <Typography variant="subtitle1" gutterBottom >
//                                                 PrimarySkills  :{seeker.primarySkills}
//                                             </Typography>
//                                         </Grid>
//                                     ))}
//                                 </Grid>
//                             </CssBaseline>
//                         </Container> : null
//                 }

//             </form>

//         </div>
//     );
// }

// export default RecruiterSearch;

