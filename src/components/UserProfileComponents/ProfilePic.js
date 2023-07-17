// import React, { useState, useEffect } from 'react'
// import { InputText } from 'primereact/inputtext'
// import Profile from '../../images/Profile.jpg'
// import { FiEdit2 } from 'react-icons/fi'
// import { useNavigate } from 'react-router-dom'
// import UserProfileForm from '../multiForm/UserProfileForm'


// const ProfilePic = () => {


//     const Navigate = useNavigate();

//     const user = JSON.parse(localStorage.getItem("userDetails"))
//     //  console.log(user)
//     if (!user) Navigate("/login")

//     const [userInfo, setUserInfo] = useState([])


//     useEffect(() => {
//         // console.log(user._id)
//         fetch(`http://localhost:8000/personal/${user._id}`, {
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem('token')}`
//             }
//         })
//             .then(response => response.json())
//             .then(data => { console.log(data); setUserInfo(data.data) })
//             .catch(err => console.log(err))
//         console.log(userInfo)
//     }, [])






//     const [image, setImage] = useState("")
//     const [displayBasic, setDisplayBasic] = useState(false)

//     const input = {
//         marginTop: '3%',
//         marginLeft: '3%',
//     }

//     const profileIconwa = {
//         float: 'right',
//         margin: '11px',
//         cursor: 'pointer',
//         border: 'none',
//         backgroundColor: 'transparent',
//         fontSize: '18px',
//     }

//     //Profile Form Start
//     const [formProfile, setFormProfile] = useState(false)
//     //Profile Form End

//     return (

//         <div >
            
//             <button style={profileIconwa} onClick={() => setFormProfile(true)} ><FiEdit2 /></button>
//             {formProfile && <UserProfileForm pro={formProfile => setFormProfile(false)} />}

//             <img
//                 style={{
//                     width: '150px',
//                     height: '150px',
//                     borderRadius: '50%',
//                     objectFit: 'cover',
//                     border: '1px solid blue',
//                     marginTop: '5%',
//                     marginLeft: '4%',
//                 }}
//                 src={Profile}
//                 alt=''
//             />
//             <br />
//             <labe htmlFor="" ></labe>
//             <InputText style={input}
//                 type='file'
//                 accept='/image/*'
//                 onChange={(event) => {
//                     const file = event.target.files[0]
//                     if (file && file.type.substring(0, 5) === "image") {
//                         setImage(file)
//                     } else {
//                         setImage(null)
//                     }
//                 }}
//             />


//         </div>





//     )
// }


// export default ProfilePic