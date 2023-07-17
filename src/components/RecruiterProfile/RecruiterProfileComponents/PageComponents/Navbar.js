import React from 'react'
import { styled } from '@mui/system'
import { TfiAnnouncement } from 'react-icons/tfi'
import { useState } from 'react'
import JobPostForm from '../Forms/JobPostForm'
// import { FaHandPointRight } from 'react-icons/fa'

const useStyles = styled((theme) => ({

    mainNav: {
        backgroundColor: '#fff',
        width: '100%',
        height: '10rem',
        display: 'grid',
        gridTemplateColumns: '10rem 1fr 2fr 1fr 10rem',
        boxShadow: 'rgba(50 , 50 , 93 , 0.25) 0px 50px 100px -20px',
    },

    logo: {
        display: 'grid',
        gridColumn: '2/3',
        justifyContent: 'start',
        alignItems: 'center',
        color: '#0077B5',
        fontFamily: "'Dancing Script', cursive",
    },

    menuLink: {
        gridColumn: '3/4',
    },

    list: {
        height: '10rem',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        listStyleType: 'none',
        fontFamily: "'Helvetica Neue', sans-serif",
    },

    listItem: {
        textDecoration: 'none',
        '&:hover': {
            color: '#0077B5',
        },
        cursor: 'pointer',
    },

    jobPost: {
        gridColumn: '5/6',
    },

    postButton: {
        height: '10rem',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
    }

}))






const Navbar = () => {

    const [post, setPost] = useState(false)

    const classes = useStyles()

    return (

        <nav className={classes.mainNav}>

            <div className={classes.logo}>
                <h2>
                    Hiclousia
                </h2>
            </div>

            <div className={classes.menuLink}>
                <ul className={classes.list}>

                    <li className={classes.listItem}>
                       Employer
                    </li>

                    <li className={classes.listItem}>
                       My Talent Pools
                    </li>

                    <li className={classes.listItem}>
                       Onboarding Dashboard                      
                    </li>

                </ul>
            </div>


            <div className={classes.jobPost}>
                <button className={classes.postButton} onClick={() => setPost(true)}><span>Post a Job</span>&nbsp;&nbsp; &nbsp;&nbsp;<TfiAnnouncement style={{ fontSize: '30px', }} /></button>
                {post && <JobPostForm postJob={post => setPost(false)} />}
            </div>




        </nav>
    )
}


export default Navbar