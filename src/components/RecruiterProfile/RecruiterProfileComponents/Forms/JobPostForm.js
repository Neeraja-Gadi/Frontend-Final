import React from 'react'
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { AiFillCloseCircle } from 'react-icons/ai'



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
    },

    cross: {
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '25px',
      
        cursor: 'pointer',
        float: 'right',
        marginBottom: '20px',
        marginRight: '-7px',
    }

}))




const JobPostForm = (props) => {

    const classes = useStyles()

    return (

        <div className={classes.modalWrapper}>
            <div className={classes.modalContainer}>

               

                <Typography style={{ textAlign: 'center',fontFamily: "'Arial', sans-serif", }} variant="h5" gutterBottom>
                    Post a Job
                </Typography>

                <button className={classes.cross} onClick={() => props.postJob(false)}><AiFillCloseCircle style={{color: '#0077B5',}} /></button>

                <form className={classes.form}>

                    <Box mb={2}>
                        <TextField fullWidth label="Job Role" className={classes.textField} />
                    </Box>
                    <br/>

                    <Box mb={2}>
                        <TextField
                        style={{
                            width: '100%',
                        }}
                            id="outlined-multiline-static"
                            label="Job Description"
                            multiline
                            rows={4}
                        />
                    </Box>
                    <br/>

                    <Box mb={2}>
                        <TextField fullWidth label="Experience" className={classes.textField} />
                    </Box>
                    <br/>

                    <Box mb={2}>
                        <TextField fullWidth label="Primary Skills" className={classes.textField} />
                    </Box>
                    <br/>

                    <Box mb={2}>
                        <TextField fullWidth label="Secondary Skills" className={classes.textField} />
                    </Box>
                    <br/>

                    <Box mb={2}>
                        <TextField fullWidth label="Education" className={classes.textField} />
                    </Box>
                    <br/>

                    <Box mb={2}>
                        <TextField fullWidth label="Location" className={classes.textField} />
                    </Box>
                    <br/>

                    <Box mb={2}>
                        <TextField fullWidth label="Salary" className={classes.textField} />
                    </Box>
                    <br/>

                    <Button calssName={classes.save} variant="contained">save</Button>
                    <Button className={classes.cancel} variant="contained">delete</Button>


                </form>
            </div>
        </div>
    )
}

export default JobPostForm