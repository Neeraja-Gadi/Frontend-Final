// import React, { useState, useEffect } from 'react'
// import '../../styles/userProfile.css'
// import Select from 'react-select'
// import TextField from '@mui/material/TextField'
// import { Box, Button, Container } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import { FaBriefcase, FaUserGraduate } from "react-icons/fa"
// import { BsFillShareFill } from "react-icons/bs"
// import { IoArrowBackCircle } from "react-icons/io5"
// import { AiFillCloseCircle } from "react-icons/ai"
// import { ImFilesEmpty } from "react-icons/im"
// import { FiEdit2 } from "react-icons/fi"
// import Multiselect from "multiselect-react-dropdown"
// import { Routes, Link, Route, useNavigate } from 'react-router-dom'


// const Experience = (props) => {

//     const formField = {
//         AlignItems: 'center',
//         marginTop: '18px',
//     };

//     const inputFieldForm = {
//         borderRadius: '0.2rem',
//         height: '21px',
//         width: '15rem',
//         border: '1px solid #245799',
//     };

//     const labelField = {
//         fontFamily: "'Arial', sans-serif",
//         margin: '17px',
//         color: '#072042',

//     };

//     const saveButton = {

//         float: 'left',

//     }

//     const cancelButton = {

//         float: 'right',

//     }

//     const cross = {
//         backgroundColor: 'transparent',
//         border: 'none',
//         fontSize: '25px',
//         color: '#5c99ea',
//         cursor: 'pointer',
//         float: 'right',
//         marginBottom: '20px',
//         marginRight: '-7px',
//     };



//     //API things Start 

//     useEffect(() => {
//         // console.log(user._id)
//         fetch(`http://localhost:8000/personal/${user._id}`, {
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem('token')}`
//             }
//         })
//             .then(response => response.json())
//             .then(data => { console.log(data); setUserInfo(data.data) })
//             .catch(err => console.log(err))
//         console.log(userInfo)
//     }, [])

//     const [expData, setExpData] = useState({})

//     function getExperienceData() {
//         fetch(`http://localhost:8000/experience/63f229c2fcc41f1dc0ec4082`, {
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             }
//         })
//             .then((result) => result.json())
//             .then((resp) => {
//                 console.log("resp", resp)
//                 setExpData(resp)
//                 console.log("expData", expData)
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     }

//     const Navigate = useNavigate();

//     const user = JSON.parse(localStorage.getItem("userDetails"))
//     //  console.log(user)
//     if (!user) Navigate("/login")

//     const [userInfo, setUserInfo] = useState([])


//     useEffect(() => {
//         getExperienceData()
//     }, [])


//     //API things End


//     const [showModalExperienceEdit, setShowModalExperienceEdit] = useState(false)

//     const MyModalExperienceEdit = () => {

//         return (
//             <>
//                 <div className="edu-Modal-wrapper">
//                     <div className="edu-Modal-container">

//                         <button style={cross} onClick={() => setShowModalExperienceEdit(false)}><AiFillCloseCircle style={{ color: 'rgb(22 102 197)', }} /></button>

//                         <h3 style={{ textAlign: 'center', marginBottom: '20px', fontFamily: "'Arial', sans-serif", }}>Update Experience</h3>


//                         <div className="edu-modal-form">

//                             <form style={formField}>

//                                 <Box mb={2}>
//                                     <TextField fullWidth label="Job Status" id="fullWidth" />
//                                 </Box>
//                                 <br />

//                                 <Box mb={2}>
//                                     <TextField fullWidth label="Job Title" id="fullWidth" />
//                                 </Box>
//                                 <br />

//                                 <Box mb={2}>
//                                     <TextField fullWidth label="Company Name" id="fullWidth" />
//                                 </Box>
//                                 <br />

//                                 <Box mb={2}>
//                                     <TextField fullWidth label="Company Type" id="fullWidth" />
//                                 </Box>
//                                 <br />


//                                 <Box mb={2}>
//                                     <TextField fullWidth label="Company Location" id="fullWidth" />
//                                 </Box>
//                                 <br />

//                                 <Box mb={2}>
//                                     <TextField fullWidth label="Skills" id="fullWidth" />
//                                 </Box>
//                                 <br />

//                                 <Box mb={2}>
//                                     <TextField fullWidth label="Experience" id="fullWidth" />
//                                 </Box>

//                                 <br />

//                                 <Button style={saveButton} variant="contained">save</Button>
//                                 <Button style={cancelButton} variant="contained">cancel</Button>
//                             </form>

//                         </div>


//                     </div>
//                 </div>
//             </>
//         )
//     }

//     const [showModalExperience, setShowModalExperience] = useState(false)

//     return (
//         <div className="edu-Modal-wrapper">
//             <div className="edu-Modal-container">
//                 <button style={{ float: 'left', cursor: 'pointer', fontSize: '24px', marginLeft: '-5px', backgroundColor: 'transparent', border: 'none', }} onClick={() => props.exp(false)}><IoArrowBackCircle /></button>

//                 <h3 style={{ textAlign: 'center', marginBottom: '15px', fontFamily: "'Ubuntu', sans-serif", }}>Eexperience</h3>
//                 <button className="education-data-icon" onClick={() => { setShowModalExperienceEdit(true); getExperienceData() }} ><FiEdit2 /></button>
//                 {showModalExperienceEdit && <MyModalExperienceEdit />}

//                 {userInfo.experienceData?.map((experience) => (
//                     <Grid item xs={8} sm={8} key={experience._id} >
//                         <div style={{ margin: '10%', marginTop: '6%', }}>

//                             <h5 style={{ fontFamily: "'Sans-Serif', Arial", }}>{experience.jobTitle}</h5> at <p>{experience.companyName}</p>
//                             <hr></hr>



//                         </div>

//                     </Grid>
//                 ))}


//             </div>
//         </div>
//     )
// }

// export default Experience 