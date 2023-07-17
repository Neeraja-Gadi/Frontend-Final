import React from 'react'
import { styled } from '@mui/system'
import Typography from '@mui/material/Typography'
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

    container: {
        width: '30rem',
        marginTop: '24px',
    },

    cross: {
        float: 'left',
        backgroundColor: 'transparent',         
        border: 'none',
        cursor: 'pointer',
    }
}))


const JobDescription = (props) => {

    const classes = useStyles()

    return (

        <div className={classes.modalWrapper}>
            <div className={classes.modalContainer}>

                <button className={classes.cross}></button>

                <Typography style={{ textAlign: 'center', fontFamily: "'Arial', sans-serif", }} variant="h5" gutterBottom>
                    Job Description
                </Typography>
                <div className={classes.container}></div>
            </div>
        </div>
    )
}

export default JobDescription