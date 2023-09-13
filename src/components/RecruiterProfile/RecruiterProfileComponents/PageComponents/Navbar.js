
// import React from 'react';
// import { styled } from '@mui/system';
// import { Link ,useLocation } from 'react-router-dom';

// const BlueNavbar = styled('nav')({
//   backgroundColor: '#0077B5', 
//   color: '#fff', 
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   padding: '0 1rem',
//   height: '7rem', 
// });

// const NavOptions = styled('ul')({
//   listStyle: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   margin: '0',
//   padding: '0',
// });

// const NavOption = styled('li')({
//   margin: '0 1rem',
//   cursor: 'pointer',
//   fontSize:"24px"  ,
//   padding: "10px" ,
//   backgroundColor: (props) => (props.isActive ? '#005487' : "red"),
//   color: (props) => (props.isActive ? '#fff' : '#000'),
//   '& a': {
//     textDecoration: 'none', 
//     color: '#fff', 
//   },
  
// });

// const Navbar = ({page,color}) => {

//   console.log(page)

//     const location = useLocation();
  
//     const isActive = (path) => location.pathname === path;
  
//     return (
    
//       <BlueNavbar>
//         <div>
//           <h2>Hiclousia</h2>
//         </div>
//         <NavOptions >
//           <NavOption isActive={isActive('/MyPlans') }  >
//             <Link to="/MyPlans" style={ {color:color.MyPlans}}>My Plans</Link> 
//           </NavOption>
//           <NavOption isActive={isActive('/talent-pools')}>
//             <Link style={ {color:color.Employer}} >My Talent Pools</Link>
//           </NavOption>
//           <NavOption isActive={isActive('/onboarding')}>
//             <Link style={ {color:color.TalentPoolNew}}>Onboarding Dashboard</Link>
//           </NavOption>
//         </NavOptions>
//       </BlueNavbar>
//     );
//   };
  
//   export default Navbar;

//*********************NORMAL WORKING CODE **********************************8*/

import React from 'react';
import { styled } from '@mui/system';
import { Link, useLocation } from 'react-router-dom';

const BlueNavbar = styled('nav')({
  marginTop: "1.5rem",
  backgroundColor: '#0077B5',
  borderRadius: "1rem" ,
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 1rem',
  height: '5rem',
  paddingRight: "10rem"
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
  fontSize: '24px',
  padding: '10px',
  backgroundColor: (props) => (props.isActive ? '#005487' : 'red'),
  color: (props) => (props.isActive ? '#fff' : '#000'),
  '& a': {
    textDecoration: 'none',
    color: '#fff',
  },
});

const Navbar = ({ page, color }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const renderNavOptions = () => {
    switch (page) {
      case 'MyPlans':
        return (
          <NavOption isActive={isActive('/MyPlans')}>
            <Link to="/MyPlans" style={{ color: color.MyPlans }}>
              My Plans
            </Link>
          </NavOption>
        );
      case 'Employer':
        return (
          <>
            <NavOption isActive={isActive('/MyPlans')}>
              <Link to="/MyPlans" style={{ color: color.MyPlans }}>
                My Plans
              </Link>
            </NavOption>
            <NavOption isActive={isActive('/talent-pools')}>
              <Link  style={{ color: color.Employer }}>
                My Talent Pools
              </Link>
            </NavOption>
          </>
        );
      case 'TalentPoolNew':
        return (
          <>
            <NavOption isActive={isActive('/MyPlans')}>
              <Link to="/MyPlans" style={{ color: color.MyPlans }}>
                My Plans
              </Link>
            </NavOption>
            <NavOption isActive={isActive('/onboarding')}>
              <Link style={{ color: color.TalentPoolNew }}>
                Onboarding Dashboard
              </Link>
            </NavOption>
          </>
        );
    }
  };

  return (
    <BlueNavbar>
      <div>
        <h2>Hiclousia</h2>
      </div>
      <NavOptions>{renderNavOptions()}</NavOptions>
    </BlueNavbar>
  );
};

export default Navbar;
