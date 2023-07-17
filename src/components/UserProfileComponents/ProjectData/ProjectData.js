import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({

    main: {
        marginTop: '40px',
        margin: '30px',
    },

    heading: {
        float: 'left',
        fontSize: '18px',
        fontFamily: "'Sans-Serif',Arial",
        color: 'rgb(22 102 197)',
    },

    span: {
        fontWeight: 'bold',
        color: 'black',
    }

}))






const ProjectData = () => {


    const Navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("userDetails"))
    //  console.log(user)
    if (!user) Navigate("/login")

    const [userInfo, setUserInfo] = useState([])


    useEffect(() => {
        // console.log(user._id)
        fetch(`http://localhost:8000/personal/${user._id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => response.json())
            .then(data => { console.log(data); setUserInfo(data.data) })
            .catch(err => console.log(err))
        console.log(userInfo)
    }, [])






    const classes = useStyles()

    return (
        <div className={classes.main}>

            {userInfo.projects?.map((projects) => (
                <Grid item xs={8} key={projects._id}>
                    <Typography className={classes.heading} variant="h5" gutterBottom>
                        {projects.projectTitle}
                    </Typography>
                    <br />

                    <Typography variant="subtitle1" gutterBottom>
                        <span className={classes.span}>Description: </span>{projects.description}
                    </Typography>
                    <br />

                    <Typography variant="subtitle1" gutterBottom>
                        <span className={classes.span}>Started: </span>{projects.startDate}
                    </Typography>
                    <br />

                    <Typography variant="subtitle1" gutterBottom>
                        <span className={classes.span}>Ended: </span>{projects.endDate}
                    </Typography>
              

                    <hr style={{ fontSize: '10px', marginTop: '9%', marginBottom: '9%', }}></hr>


                    {/* <Typography variant="subtitle2" gutterBottom>
                        <span className={classes.span}>Project Link: </span>{projects.Url}
                    </Typography>

                    <Typography variant="h7" gutterBottom>
                        <span className={classes.span}>Organization: </span>{projects.organizationName}
                    </Typography> */}





                </Grid>
            ))}



        </div>
    )
}

export default ProjectData