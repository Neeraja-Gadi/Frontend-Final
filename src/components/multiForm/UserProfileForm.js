import React, { useState } from 'react'
import '../../styles/userProfile.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';


const UserProfileForm = () => {

    const navigate = useNavigate();

    const formField = {
        AlignItems: 'center',
        marginTop: '18px',
        width: '87%',
        margin: '80px',
    };







    const userId = JSON.parse(localStorage.getItem("userDetails"))


    const [personalData, setPersonalData] = useState([
        {
            userDetailsID: userId._id,
            aboutMe: '',
            profileLink: '',
            gender: '',
            doB: '',
            phone: '',
            gitLink: '',
            state: '',
            location: ''
        }
    ]);


    const handlePersonalChange = (event, index) => {

        const { name, value } = event.target;

        const personal = [...personalData]
        personal[index] = {
            ...personalData[index],
            [name]: value
        }

        setPersonalData(personal)

    };



    function SavePersonal() {
        console.log(personalData)
        let personalInfo = personalData;
        personalInfo?.map((e, index) => {
            return(fetch("http://localhost:8000/userProfile", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(e)

            }).then(response => response.json().then(data => {
                console.log(data)
                if (data.status === false) return

                else {
                    setPersonalData([{
                        userDetailsID: userId._id,
                        aboutMe: '',
                        profileLink: '',
                        gender: '',
                        doB: '',
                        phone: '',
                        gitLink: '',
                        state: '',
                        location: ''

                    }])
                    navigate('/EducationForm')
                }
            })))
        })

        return true;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        SavePersonal()
    }


    return (
        <>

            <div className="edu-Modal-container">

                <h3 style={{ textAlign: 'center', marginTop: '25px', fontFamily: "'Arial', sans-serif", }}>Personal Information</h3>

                <div className="edu-modal-form">

                    <form style={formField} onSubmit={handleSubmit} >

                        {personalData?.map((userProfile, index) => (
                            <div key={index}>

                                <Box mb={2}>
                                    <TextField
                                        fullWidth
                                        label="About Me"
                                        name='aboutMe'
                                        value={userProfile.aboutMe}
                                        onChange={(event, index) => handlePersonalChange(event, index)}
                                    />
                                </Box>
                                <br />

                                <Box mb={2}>
                                    <TextField
                                        fullWidth
                                        label="Link"
                                        name='profileLink'
                                        value={userProfile.profileLink}
                                        onChange={(event, index) => handlePersonalChange(event, index)}
                                    />
                                </Box>
                                <br />

                                <Box mb={2}>
                                    <TextField fullWidth label="Gender" name='gender' value={userProfile.gender} onChange={(event, index) => handlePersonalChange(event, index)} />
                                </Box>
                                <br />




                                <Box mb={2}>
                                    <label>Date of Birth</label>
                                    <TextField fullWidth type='date' name='doB' value={userProfile.doB} onChange={(event, index) => handlePersonalChange(event, index)} />
                                </Box>
                                <br />

                                {/* <Box mb={2}>
                                    <TextField fullWidth label="Email" />
                                </Box>
                                <br /> */}

                                <Box mb={2}>
                                    <TextField fullWidth label="Phone Number" name='phone' value={userProfile.phone} onChange={(event, index) => handlePersonalChange(event, index)} />
                                </Box>
                                <br />

                                <Box mb={2}>
                                    <TextField fullWidth label="Git Link" name='gitLink' value={userProfile.gitLink} onChange={(event, index) => handlePersonalChange(event, index)} />
                                </Box>
                                <br />

                                <Box mb={2}>
                                    <TextField fullWidth label="State" name='state' value={userProfile.state} onChange={(event, index) => handlePersonalChange(event, index)} />
                                </Box>
                                <br />

                                <Box mb={2}>
                                    <TextField fullWidth label="Location" name='location' value={userProfile.location} onChange={(event, index) => handlePersonalChange(event, index)} />
                                </Box>
                                <br />



                                {/* <Box mb={2}>
                                    <TextField fullWidth label="Document" name='document' value={userProfile.document} />
                                </Box>
                                <br /> */}


                            </div>
                        ))}

                    </form>

                </div>


            </div>

        </>
    )
}

export default UserProfileForm