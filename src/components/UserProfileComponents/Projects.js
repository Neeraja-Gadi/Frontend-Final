// import React,{useState, useEffect} from 'react'
// import { AiFillCloseCircle } from 'react-icons/ai'
// import Multiselect from 'multiselect-react-dropdown'
// import { primarySkills } from '../../constraints/arrays'
// import { Routes, Link, Route, useNavigate } from 'react-router-dom'
// import Button from '@mui/material/Button'

// const Project = (props) => {

//     // Api Start
//     // const navigate = useNavigate();
//     // useEffect(() => {
  
//     //   if (userId == null) {
//     //     navigate("/login")
//     //     alert("Please login first")
//     //   }
//     // }, [])
//     // Api End



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
//     }

//     const [projectData, setProjectData] = useState([
//         {
//             // userDetailsID: userId._id,
//             projectTitle: '',
//             SkillsUsed: '',
//             startDate: '',
//             endDate: '',   
//             organization: '',
//             description: '',
//             projectLink: ''
//         }
//     ])

//     function getProjects() 
//     {
//         fetch(`http://localhost:8000/projects`, {
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             }
//         })
//     }

//     return (
//         <>
//            <div className="edu-Modal-wrapper">
//                 <div className="edu-Modal-container">

//                 <button style={cross} onClick={() => props.proj(false)} ><AiFillCloseCircle style={{ color: 'rgb(22 102 197)', }} /></button>

//                     <h3 style={{ textAlign: 'center', marginBottom: '20px', fontFamily: "'Arial', sans-serif", }}>Projects</h3>

//                     <div className="edu-modal-form">

                       
         
//                     {/* userDetailsID: userId._id, */}

//                         <form style={formField} >

//                             <label style={labelField} >Project Title</label>
//                             <input style={inputFieldForm} type='text' placeholder='Project Title' name='projectTitle'  />
//                             <br />
//                             <br />

//                             <label style={labelField}>Skills Used</label>
//                             <input style={inputFieldForm} options={primarySkills} type='select' placeholder='Skills Used' name='skillsUsed'/>
//                             <br />
//                             <br />
                            

//                             <label style={labelField} >Start Date</label>
//                             <input style={inputFieldForm} type='date' placeholder='Start Date' name='startDate' />
//                             <br />
//                             <br />

//                             <label style={labelField} >End Date</label>
//                             <input style={inputFieldForm} type='date' placeholder='End Date' name='endDate'/>
//                             <br />
//                             <br />

//                             <label style={labelField} >Organization Name</label>
//                             <input style={inputFieldForm} type='text' placeholder='Organization Name' name='organization'/>
//                             <br />
//                             <br />

//                             <label style={labelField} >Description</label>
//                             <input style={inputFieldForm} type='text' placeholder='Project Description' name='desciption'/>
//                             <br />
//                             <br />

//                             <label style={labelField} >Project Link</label>
//                             <input style={inputFieldForm} type='text' placeholder='Project Link' name='projectLink'/>
//                             <br />
//                             <br />


//                             <Button style={saveButton} variant="contained">save</Button>
//                             <Button style={cancelButton} variant="contained" onClick={() => props.proj(false)}>cancel</Button>



//                         </form>

//                     </div>


//                 </div>
//             </div>
//         </>
//     )
// }

// export default Project