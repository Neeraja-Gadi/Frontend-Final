// import React, { useEffect, useState } from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import { AiFillCloseCircle } from 'react-icons/ai'
// import { primarySkills } from '../../constraints/arrays'
// import Multiselect from 'multiselect-react-dropdown'
// import { Container } from '@material-ui/core'
// import Button from '@mui/material/Button'
// import { Routes, Link, Route, useNavigate } from 'react-router-dom'

// const useStyles = makeStyles({

//     modalWrapper: {
//         position: 'fixed',
//         left: '0',
//         right: '0',
//         bottom: '0',
//         top: '0',
//         backgroundColor: 'rgba(189 , 189 , 189 , 0.9)',
//     },

//     modalContainer: {
//         position: 'fixed',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         maxWidth: '30rem',
//         padding: '2rem 3rem',
//         borderRadius: '0.5rem',
//         backgroundColor: '#fff',
//     },

//     container: {
//         width: '20rem',
//         alignItems: 'center',
//     },

//     close: {
//         float: 'right',
//         backgroundColor: 'transparent',
//         border: 'none',
//         cursor: 'pointer',

//     },

//     container: {
//         marginTop: '28px',
//         width: '27rem',
//     },

//     save: {
//         float: 'left',
//     },

//     cancel: {
//         float: 'right',
//     }

// })





// const PrimarySkills = (props) => {

//     // API start
//     const Navigate = useNavigate();
//     const user = JSON.parse(localStorage.getItem("userDetails"))
//     //  console.log(user)
//     if (!user) Navigate("/login")

//     useEffect(() => {
//         getPrimarySkills()
//     }, [])


//     const [userInfo, setUserInfo] = useState([])
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




//     const [primary, setPrimary] = useState({
//         _id: '',
//         primarySkills: ''

//     })

//     function getPrimarySkills() {
//         fetch(`http://localhost:8000/primarySkills/640733704c7585182c08b68b`, {
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             }
//         })

//             .then((result) => result.json())
//             .then((resp) => {
//                 console.log("resp", resp)
//                 setPrimary(resp)
//                 console.log("primary", primary)
//             })

//     }


//     // API End


//     const classes = useStyles()

//     return (
//         <div className={classes.modalWrapper}>
//             <div className={classes.modalContainer}>
//                 {/* <button className={classes.close}><AiFillCloseCircle style={{ fontSize: '22px', color: 'rgba(22 102 197)', }} onClick={() => props.primary(false)}/></button> */}

//                 <Container className={classes.container}>
//                     <Multiselect
//                         isObject={false}
//                         options={primarySkills}
//                         name='primarySkills'
//                     />

//                     <br />

//                     <Button variant="contained" className={classes.save}>save</Button>
//                     <Button variant="contained" className={classes.cancel} onClick={() => props.primary(false)}>cancel</Button>
//                 </Container>





//             </div>
//         </div>
//     )
// }

// export default PrimarySkills

