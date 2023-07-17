import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@mui/material/TextField'
import { Box, Button, Container } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Grid from '@mui/material/Grid'
import { AiFillCloseCircle } from 'react-icons/ai'
import Select from '@mui/material/Select'
import { educationLevels } from '../../constraints/arrays'

const useStyles = makeStyles({

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
        transform: 'translate(-50%, -50%)',
        maxWidth: '30rem',
        padding: '2rem 3rem',
        borderRadius: '0.5rem',
        backgroundColor: '#fff',
    },

    formField: {
        AlignItems: 'center',
        marginTop: '18px',
        width: '25rem',
    },

    save: {
        float: 'left',
        cursor: 'pointer',
    },
    cancel: {
        float: 'right',
        cursor: 'pointer',
    }


})

const EducationFormNew = (props) => {

    const classes = useStyles()

    return (
        <div className={classes.modalWrapper}>
            <div className={classes.modalContainer}>
                <form className={classes.formField} >

                    <Box>
                        <Select
                            label="Education Level"
                            placeholder="Education Level"
                        />
                    </Box>

                    <Box mb={1}
                        sx={{ m: 3, width: 600 }}>
                        <TextField fullWidth label="College Name" />
                    </Box>
                    <br />

                    <Box mb={1}
                        sx={{ m: 3, width: 600 }}>
                        <TextField fullWidth label="Authority" />
                    </Box>
                    <br />

                    <Box mb={1}
                        sx={{ m: 3, width: 600 }}>
                        <TextField fullWidth label="Discipline" />
                    </Box>
                    <br />


                    <Box mb={1}
                        sx={{ m: 3, width: 600 }}>
                        <label>Year of Passout</label>
                        <TextField fullWidth type='date' />
                    </Box>
                    <br />



                    <Button variant="contained" className={classes.save}>save</Button>
                    <Button variant="contained" className={classes.cancel} onClick={() => props.form(false)}>cancel</Button>

                </form>
            </div>
        </div>
    )
}

export default EducationFormNew