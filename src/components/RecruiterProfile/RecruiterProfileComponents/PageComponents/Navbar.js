// import React from 'react';
// import { styled } from '@mui/system';
// import { TfiAnnouncement } from 'react-icons/tfi';
// import { useState } from 'react';
// import JobPostForm from '../Forms/JobPostForm';

// const useStyles = styled((theme) => ({
//   mainNav: {
//     backgroundColor: '#0077B5', // Change background color to blue (#0077B5)
//     color: '#fff', // Change text color to white
//     width: '100%',
//     height: '10rem',
//     display: 'grid',
//     gridTemplateColumns: '10rem 1fr 2fr 1fr 10rem',
//     boxShadow: 'rgba(50 , 50 , 93 , 0.25) 0px 50px 100px -20px',
//   },

//     logo: {
//         display: 'grid',
//         gridColumn: '2/3',
//         justifyContent: 'start',
//         alignItems: 'center',
//         color: '#0077B5',
//         fontFamily: "'Dancing Script', cursive",
//     },

//     menuLink: {
//         gridColumn: '3/4',
//     },

//     list: {
//         height: '10rem',
//         display: 'flex',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         listStyleType: 'none',
//         fontFamily: "'Helvetica Neue', sans-serif",
//     },

//     listItem: {
//         textDecoration: 'none',
//         '&:hover': {
//             color: '#0077B5',
//         },
//         cursor: 'pointer',
//     },

//     jobPost: {
//         gridColumn: '5/6',
//     },

//     postButton: {
//         height: '10rem',
//         display: 'flex',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         backgroundColor: 'transparent',
//         border: 'none',
//         cursor: 'pointer',
//     }

// }))


// const Navbar = () => {

//     const [post, setPost] = useState(false)

//     const classes = useStyles()

//     return (

//         <nav className={classes.mainNav}>

//             <div className={classes.logo}>
//                 <h2>
//                     Hiclousia
//                 </h2>
//             </div>

//             <div className={classes.menuLink}>
//                 <ul className={classes.list}>

//                     <li className={classes.listItem}>
//                        Employer
//                     </li>

//                     <li className={classes.listItem}>
//                        My Talent Pools
//                     </li>

//                     <li className={classes.listItem}>
//                        Onboarding Dashboard                      
//                     </li>

//                 </ul>
//             </div>


//             <div className={classes.jobPost}>
//                 <button className={classes.postButton} onClick={() => setPost(true)}><span>Post a Job</span>&nbsp;&nbsp; &nbsp;&nbsp;<TfiAnnouncement style={{ fontSize: '30px', }} /></button>
//                 {post && <JobPostForm postJob={post => setPost(false)} />}
//             </div>




//         </nav>
//     )
// }


// export default Navbar




import React from 'react';
import { styled } from '@mui/system';
import { Link ,useLocation } from 'react-router-dom';

const BlueNavbar = styled('nav')({
  backgroundColor: '#0077B5', // Blue background color
  color: '#fff', // White text color
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 1rem',
  height: '7rem', // Adjust the height as needed
});

const NavOptions = styled('ul')({
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  margin: '0',
  padding: '0',
});

const NavOption = styled('li')({
  margin: '0 1rem',
  cursor: 'pointer',
  fontSize:"24px"  ,
  padding: "10px" ,
  backgroundColor: (props) => (props.isActive ? '#005487' : "red"),
  color: (props) => (props.isActive ? '#fff' : '#000'),
  '& a': {
    textDecoration: 'none', 
    color: '#fff', 
  },
  

});

  
const Navbar = ({color}) => {

    const location = useLocation();
  
    const isActive = (path) => location.pathname === path;
  
    return (
      <BlueNavbar>
        <div>
          <h2>Hiclousia</h2>
        </div>
        <NavOptions >
          <NavOption isActive={isActive('/MyPlans') }  >
            <Link to="/MyPlans" style={ {color:color.MyPlans}}>My Plans</Link> 
          </NavOption>
          <NavOption isActive={isActive('/talent-pools')}>
            <Link to="/talent-pools" style={ {color:color.Employer}} >My Talent Pools</Link>
          </NavOption>
          <NavOption isActive={isActive('/onboarding')}>
            <Link to="/onboarding" style={ {color:color.TalentPoolNew}}>Onboarding Dashboard</Link>
          </NavOption>
        </NavOptions>
      </BlueNavbar>
    );
  };
  
  export default Navbar;