import React from 'react'
import { styled } from '@mui/system'
import FilledInput from '@mui/material/FilledInput'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import  Box  from '@mui/material/Box'
import Button from '@mui/material/Button'



const useStyles = styled((theme) => ({

    modalWrapper: {
        position: 'fixed',
        left: '0',
        right: '0',
        bottom: '0',
        top: '0',
        backgroundColor: 'rgba(189 , 189 , 189 , 0.9)',
    },

    modalContainer: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50% , -50%)',
        maxWidth: '30rem',
        padding: '2rem 3rem',
        borderRadius: '0.5rem',
        backgroundColor: '#fff',
    },

    form: {
        width: '30rem',
        marginTop: '24px',
    },

    h3: {
        textAlign: 'center',
    },

    textField: {
        marginBottom: '30px',
    },

    save: {
        float: 'left',
    },

    cancel: {
        float: 'right',
    }
}))




const ProfileForm = (props) => {

    const classes = useStyles()

    return (

        <div className={classes.modalWrapper}>
            <div className={classes.modalContainer}>

                <Typography style={{ textAlign: 'center',fontFamily: "'Arial', sans-serif", }} variant="h4" gutterBottom>
                    Information
                </Typography>

                <form className={classes.form}>

                    <Box mb={2}>
                        <TextField fullWidth label="Full Name" className={classes.textField} />
                    </Box>
                    <br/>

                    <Box mb={2}>
                        <TextField fullWidth label="Email" className={classes.textField} />
                    </Box>
                    <br/>

                    <Box mb={2}>
                        <TextField fullWidth label="Phone Number" className={classes.textField} />
                    </Box>
                    <br/>

                    <Box mb={2}>
                        <TextField fullWidth label="Company Name" className={classes.textField} />
                    </Box>
                    <br/>

                    <Box mb={2}>
                        <TextField fullWidth label="Job Title" className={classes.textField} />
                    </Box>
                    <br/>

                    <Box mb={2}>
                        <TextField fullWidth label="Link" className={classes.textField} />
                    </Box>
                    <br/>

                    {/* <Box mb={2}>
                        <TextField fullWidth label="Twitter" className={classes.textField} />
                    </Box>
                    <br/> */}

                    <Box mb={2}>
                        <TextField
                        style={{
                            width: '100%',
                        }}
                            id="outlined-multiline-static"
                            label="Professional Summary"
                            multiline
                            rows={4}
                        />
                    </Box>
                    <br/>

                    <Button calssName={classes.save} variant="contained">save</Button>
                    <Button className={classes.cancel} variant="contained" onClick={() => props.recPro(false)}>cancel</Button>


                </form>
            </div>
        </div>
    )
}

export default ProfileForm