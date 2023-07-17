import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
// import { primarySkills } from '../../../constraints/arrays'
// import OutlinedInput from '@mui/material/OutlinedInput'
// import InputLabel from '@mui/material/InputLabel'
// import FormControl from '@mui/material/FormControl'
// import Select from '@mui/material/Select'
// import MenuItem from '@mui/material/MenuItem'
// import Select from 'react-select';
import {RiCloseCircleFill} from 'react-icons/ri'


// const userId = JSON.parse(localStorage.getItem('userDetails'));


const EditProjects = (props) => {

    const modalWrapper = {

        position: 'fixed',
        left: '0',
        right: '0',
        bottom: '0',
        top: '0',
        backgroundColor: 'rgba(189 , 189 , 189 , 0.9)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', // Added to vertically center the modal
        zIndex: '9999'
    }

    const modalContainer = {

        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50% , -50%)',
        maxWidth: '45rem',
        backgroundColor: '#fff',
        AlignItems: 'center',
        borderRadius: '0.5rem'
    }

    const feild = {

        width: '40rem',
        AlignItems: 'center',
        marginTop: '18px',
        margin: '18px',


    }

    const save = {
        float: 'left',
        margin: '20px'
    }

    const dele = {
        float: 'right',
        margin: '20px'
    }

    return (
        <div style={modalWrapper}>
            <div style={modalContainer}>
             
                    <div style={feild}>

                        <button style={{float: 'right',border: 'none', backgroundColor: 'transparent'}} 
                        onClick={() => props.projectInfoEdit(false)} ><RiCloseCircleFill style={{fontSize: '23px', color: 'rgb(22 102 197)'}}/></button>

                        <Box
                            mb={1}
                            sx={{ m: 3, width: 600 }}
                        >
                            <TextField fullWidth label="Project Title"

                         
                                id="fullWidth"
                            />
                        </Box>

                        <Box
                            mb={1}
                            sx={{ m: 3, width: 600 }}
                        >
                            <TextField fullWidth label="Project Type"

                            
                                id="fullWidth"
                            />
                        </Box>

                        <Box mb={1}
                            sx={{ m: 3, width: 600 }}>
                            <TextField

                              
                                id="outlined-multiline-static"
                                label="Project Description"
             
                                multiline
                                rows={4}
                            />
                        </Box>
                        <br />

                        <Box
                            mb={1}
                            sx={{ m: 3, width: 600 }}>
                            <TextField
                                variant="outlined"
                                label="Start Date"
                       


                                type="date"
                                fullWidth
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }}

                            />
                        </Box>


                        <Box mb={1}
                            sx={{ m: 3, width: 600 }}><TextField
                                variant="outlined"
                                label="End Year"
                           
                                type="date"
                                fullWidth
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            /></Box>


                        <Box
                            mb={1}
                            sx={{ m: 3, width: 600 }}
                        >
                            <TextField fullWidth label="Project Link"

                         
                                id="fullWidth"
                                required
                            />
                        </Box>

                        <Box
                            mb={1}
                            sx={{ m: 3, width: 600 }}
                        >
                            <TextField fullWidth label="Organization"

                                
                                id="fullWidth"
                            />
                        </Box>


                        <Button variant="contained"  style={save}>save</Button>
                        <Button variant="contained" style={dele} >delete</Button>

                    </div>
               
                <br />

            </div>
        </div>
    )
}

export default EditProjects