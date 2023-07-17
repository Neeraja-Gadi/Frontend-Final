// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import { AiFillCloseCircle } from 'react-icons/ai'
// import { secondarySkills } from '../../constraints/arrays'
// import Multiselect from 'multiselect-react-dropdown'
// import { Container } from '@material-ui/core'
// import Button from '@mui/material/Button'

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

// const SecondarySkills = (props) => {

//     const classes = useStyles()

//     return (
//         <div className={classes.modalWrapper}>
//             <div className={classes.modalContainer}>
//                 {/* <button className={classes.close}><AiFillCloseCircle style={{ fontSize: '22px', color: 'rgba(22 102 197)', }} onClick={() => props.primary(false)}/></button> */}

//                 <Container className={classes.container}>
//                     <Multiselect
//                         isObject={false}
//                         options={secondarySkills}
//                     />

//                     <br/>

//                     <Button variant="contained" className={classes.save}>save</Button>
//                     <Button variant="contained" className={classes.cancel} onClick={() => props.secondary(false)}>cancel</Button>
//                 </Container>





//             </div>
//         </div>
//     )
// }

// export default SecondarySkills

