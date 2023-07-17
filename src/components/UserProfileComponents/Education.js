// import React, { useState, useEffect } from 'react'
// import '../../styles/userProfile.css'
// import Select from 'react-select'
// import TextField from '@mui/material/TextField'
// import { Box, Button, Container } from '@material-ui/core'
// import Typography from '@material-ui/core/Typography'
// import Grid from '@material-ui/core/Grid'
// import CssBaseline from '@material-ui/core/CssBaseline'
// import { FaBriefcase, FaUserGraduate } from "react-icons/fa"
// import { BsFillShareFill } from "react-icons/bs"
// import { IoArrowBackCircle } from "react-icons/io5"
// import { AiFillCloseCircle } from "react-icons/ai"
// import { ImFilesEmpty } from "react-icons/im"
// import { FiEdit2 } from "react-icons/fi"
// import Multiselect from "multiselect-react-dropdown"
// import { Routes, Link, Route, useNavigate } from 'react-router-dom'
// import { educationLevels } from '../../constraints/arrays'
   
// import OutlinedInput from '@mui/material/OutlinedInput'






// const Education = (props) => {

//     const formField = {
//         AlignItems: 'center',
//         marginTop: '18px',
//     }

//     const inputFieldForm = {
//         borderRadius: '0.2rem',
//         height: '21px',
//         width: '15rem',
//         border: '1px solid #245799',
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

//     const labelField = {
//         fontFamily: "'Arial', sans-serif",
//         margin: '17px',
//         color: '#072042',

//     };

//     // const inputFieldForm = {
//     //     height: '15px',

//     // };

//     const saveButton = {

//         float: 'left',
//         backgroundColor: '#2f6cc0',
//         fontSize: '18px',
//         textColor: 'white',
//         borderRadius: '0.3rem',
//         border: 'none',
//     }

//     const cancelButton = {

//         float: 'right',
//         backgroundColor: '#2f6cc0',
//         fontSize: '18px',
//         textColor: 'white',
//         borderRadius: '0.3rem',
//         border: 'none',

//     }



//     const Navigate = useNavigate();

//     const user = JSON.parse(localStorage.getItem("userDetails"))
  
//     if (!user) Navigate("/login")

//     const [userInfo, setUserInfo] = useState([])


//     useEffect(() => {
      
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



//     //API things Start 


   
    

//     useEffect(() => {
//         getEducationData()
//     }, [])

//     // const [userInfo, setUserInfo] = useState([])
//     // useEffect(() => {
//     //     // console.log(user._id)
//     //     fetch(`http://localhost:8000/personal/${user._id}`, {
//     //         headers: {
//     //             Authorization: `Bearer ${localStorage.getItem('token')}`
//     //         }
//     //     })
//     //         .then(response => response.json())
//     //         .then(data => { console.log(data); setUserInfo(data.data) })
//     //         .catch(err => console.log(err))
//     //     console.log(userInfo)
//     // }, [])

//     const [eduData, setEduData] = useState(
//         {
//             _id: '',
//             educationLevel: '',
//             collegeName: '',
//             authority: '',
//             discipline: '',
//             yearOfpassout: ''
//         }
//     )
//     const [isEditing, setIsEditing] = useState(false);
//     function getEducationData(id) {
//         fetch(`http://localhost:8000/education/${id}`, {
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             }
//         })
//             .then((result) => result.json())
//             .then((resp) => {
//                 console.log("resp", resp)
//                 setEduData(resp)
//                 setIsEditing(true);
//                 console.log("eduData", eduData)
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     };
//     // Function to handle changes in form values
//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setEduData((prevValues) => ({ ...prevValues, [name]: value }));
//     };


//     // Function to submit the form data and save it to the API
//     const handleSubmit = async (id) => {
//         await fetch(`http://localhost:8000/education/${id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(eduData)
//         });
//         setIsEditing(false);
//     };


//     //API things End





//     const [showEducationEdit, setShowModalEdit] = useState(false)

//     const MyModalEducationSecond = () => {

//         return (
//             <div className="edu-Modal-wrapper">
//                 <div className="edu-Modal-container">

//                     <button style={cross} onClick={() => setShowModalEdit(false)}><AiFillCloseCircle style={{ color: '#b0cef8', }} /></button>

//                     <div className="edu-modal-form">

//                         <form style={formField} onSubmit={(event) => { event.preventDefault(); handleSubmit(eduData.data?._id) }} >



//                             <Select
//                                 labelId="demo-multiple-name-label"
//                                 id="demo-multiple-name"
//                                 multiple
//                                 options={educationLevels}

//                                 placeholder='Education Level'
//                                 input={<OutlinedInput label="Education Level" />}

//                             />
//                             <br />

//                             <Box mb={2}>
//                                 <TextField fullWidth label="College Name" name="collegeName" value={eduData.data?.collegeName} />
//                             </Box>
//                             <br />

//                             <Box mb={2}>
//                                 <TextField fullWidth label="Authority" name='authority' value={eduData.data?.authority} />
//                             </Box>
//                             <br />

//                             <Box mb={2}>
//                                 <TextField fullWidth label="Discipline" name='discipline' value={eduData.data?.discipline} />
//                             </Box>
//                             <br />

                            
//                             <Box mb={2}>
//                                 <label>Year of Passout</label>
//                                 <TextField fullWidth type='date' name='yearofPassout' value={eduData.data?.yearofPassout} />
//                             </Box>
//                             <br />


                         


                      
                          
                         

//                             {/* <Select
//                                 options={educationLevels}
//                             />
//                             <br />

//                             <label style={labelField}>College Name</label>
//                             <input style={inputFieldForm} type='text' placeholder='College Name'  />
//                             <br />
//                             <br />

//                             <label style={labelField}>Authority</label>
//                             <input style={inputFieldForm} type='text' placeholder='Authority' />
//                             <br />
//                             <br />

//                             <label style={labelField}>Discipline</label>
//                             <input style={inputFieldForm} type='text' placeholder='Discipline'  />
//                             <br />
//                             <br />

//                             <label style={labelField}>Year of Passout</label>
//                             <input style={inputFieldForm} type='date' name='yearOfpassout'  />
//                             <br />
//                             <br /> */}

//                             <Button variant="save" style={{ float: 'left', backgroundColor: '#b0cef8', }}>save</Button>
//                             <Button variant="delete" style={{ float: 'right', backgroundColor: '#b0cef8', }}>delete</Button>




//                         </form>

//                     </div>


//                 </div>
//             </div>
//         )
//     }

//     const [showModalEducation, setShowModalEducation] = useState(false)
//     return (
//         <>
//             <div className="edu-Modal-wrapper">
//                 <div className="edu-Modal-container">
//                     <button className='back-arrow' onClick={() => props.edu(false)}><IoArrowBackCircle /></button>


//                     <h3 style={{ textAlign: 'center', marginBottom: '20px', fontFamily: "'Arial', sans-serif", }}>Education</h3>



//                     <div className='education-data'>

//                         {userInfo.educationData?.map((education) => (
//                             <Grid item xs={8} sm={8} key={education._id} >

//                                 <div style={{ margin: '10%', marginTop: '6%', marginBottom: '1px', }}>



//                                     <h5 style={{ fontFamily: "'Sans-Serif', Arial", fontSize: '19px', color: 'rgb(22 102 197)', }}>{education.educationLevel}</h5> <p style={{ fontSize: '10px', }}>from</p> <p>{education.collegeName}</p>
//                                     <button className="education-data-icon" onClick={() => { setShowModalEdit(true); getEducationData(education._id) }}><FiEdit2 /></button>
//                                     {showEducationEdit && <MyModalEducationSecond />}


//                                     <p><span style={{ fontWeight: 'bold', color: 'black', }}>Authority: </span>{education.authority}</p>

//                                     <p><span style={{ fontWeight: 'bold', color: 'black', }}>Discipline: </span>{education.discipline}</p>

//                                     <p><span style={{ fontWeight: 'bold', color: 'black', }}>Year of Passout: </span>{education.yearofPassout}</p>

//                                     <hr style={{ fontSize: '10px', marginTop: '9%', }}></hr>
//                                 </div>


//                             </Grid>
//                         ))}

//                     </div>

//                 </div>
//             </div>

//         </>
//     )
// }

// export default Education