import React, { useEffect } from 'react'
import { CgProfile } from 'react-icons/cg'
import { useNavigate, Link } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
const Navbar = () => {

    const [user, setUser] = React.useState("");
    const navigate = useNavigate()

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("userDetails")))

    }, [])

    function logOut() {
        localStorage.removeItem('userDetails');
        localStorage.removeItem('token');
        window.location.reload();
    }

    return (
        <>

            <nav className='main-nav-home'>
                {/* 1st part */}
                <div className='logo-home'>
                    <h2>H<span>i</span></h2>
                </div>
               
                {/* 2nd Menu part*/}
                <div className='menu-link-home'>
                    {/* <ul>
                        <li>Talent Profile</li>
                        <li>Recruiter</li>
                        <li>About Us</li>
                        <li>Contact Us</li>

                        {user ? (<li
                            style={{cursor: "pointer",color: 'goldenrod',listStyleType: 'none',}}
                            onClick={logOut}
                        >
                            Log Out
                        </li>
                        ) : (
                            <li style={{listStyleType: 'none',}}>
                                <a href="/SignUp" style={{color: 'goldenrod',textDecoration: 'none',}}>Sign Up</a>
                            </li>
                        )}

                    </ul> */}
                <div className="search">
          
          </div>
          
         
      
       <ul>
       <div className='search-Icon'> </div>
                {
            user?

              user?.recruiter === false?
                <button className='search-Icon' onClick={() => navigate("/SearchPreferences")}><SearchIcon  style={{ fontSize: '45px' , color: 'goldenrod' }} /></button>
              :
              <button className='search-Icon' onClick={() => navigate("/RecruiterSearch")}><SearchIcon  style={{ fontSize: '45px' , color: 'goldenrod' }} /></button>
            
            :null
     
          }

         {/* <li><a href="#t">Talent Profile</a></li> */}
         {user && user.recruiter === true ?
         <li><Link to="/SubscriptionModal">Recruiter</Link></li> 
         : 
         <li><Link to="/login" >Recruiter</Link></li> 
        }
         
         <li><Link>About Us</Link></li>
         <li><Link>Contact Us</Link></li>

         {user ? (
              <li
                style={{ background: "red", cursor: "pointer" }}
                onClick={logOut}
              >
                Log Out
              </li>
            ) : (
              <li>
                <a href="/login" >Login</a>
              </li>
            )}  
            &nbsp;&nbsp; &nbsp;
           
              
       </ul>
                </div>

                <div className='profile-icon'>
             {user?.recruiter === false?
               
                 <button className='profile-icon-btn' onClick={() => navigate("/Portfolio")}><CgProfile style={{ color: 'goldenrod', fontSize: '35px', }} /></button>

                  : null     }      

                </div>
            </nav>

        </>
    )
}

export default Navbar