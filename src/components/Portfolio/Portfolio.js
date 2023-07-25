import * as React from 'react'
import { useState, useEffect } from "react"
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import MuiDrawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
// import Badge from '@mui/material/Badge'
import Container from '@mui/material/Container'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
// import NotificationsIcon from '@mui/icons-material/Notifications'
import { mainListItems } from './PortfolioComponents/ListPortfolio'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { FiEdit2 } from 'react-icons/fi'
import { GrAdd } from 'react-icons/gr'
import { MdDelete } from 'react-icons/md'
// import Personal from './PortfolioComponents/PersonalPortfolio'
import EducationPortfolio from './PortfolioComponents/EducationPortfolio'
import ProjectPortfolio from './PortfolioComponents/ProjectPortfolio'
import ExperiencePortfolio from './PortfolioComponents/ExperiencePortfolio'
import { useNavigate } from 'react-router-dom'
// import ProfilePic from './PortfolioComponents/PortfolioPic'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import WbIncandescentSharpIcon from '@mui/icons-material/WbIncandescentSharp';
import WorkIcon from '@mui/icons-material/Work';
import EditEducation from './PortfolioComponents/EditEducation'
import PersonIcon from '@mui/icons-material/Person';
// import About from './PortfolioComponents/AboutMe'
import EditExperiences from './PortfolioComponents/EditExperience'
import EditProjects from './PortfolioComponents/EditProjects' ;
import   baseurl from  "../../baseURL/config"

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const defaultTheme = createTheme();

export default function DashboardPortfolio() {

    const Navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("userDetails"))

    if (!user) Navigate("/login")

    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {

        fetch(`${baseurl}/personal/${user._id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => response.json())
            .then(data => { console.log(data); setUserInfo(data.data) })
            .catch(err => console.log(err))
        console.log(userInfo)
        // eslint-disable-next-line
    }, [])

    function handlecreateProfile () {
        if(userInfo.educationData.length ===0  ){
        Navigate('/EducationForm')
    }else {
        alert("You Already have a Profile")
    }
    }

        //   PROJECT STARTS HERE
        const [editProject, setEditProject] = useState(false)
        const [projectId, setProjectId] = useState(null)
        const [projectData, setProjectData] = useState({
            organizationName: '',
            projectTitle: '',
            projectType: '',
            skills:[],
            description: '',
            url: '',
            startDate: '',
            endDate: ''
        });
        
        const fetchProjectDetails = async (id) => {
            try {
                const response = await fetch(`http://localhost:8000/projectInformationByID/${id}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                setProjectData(
                    {
                        organizationName: data.data.organizationName,
                        projectTitle: data.data.projectTitle,
                        projectType: data.data.projectType,
                        description: data.data.description,
                        skills: data.data.skills,
                        url: data.data.url,
                        startDate: data.data.startDate,
                        endDate: data.data.endDate
    
                    }
                );
                setProjectId(data.data._id)
            } catch (error) {
                console.error('Error fetching project details:', error);
            }
        };
        
    
        // PROJECT ENDS HERE

        // Experience starts here
    const [editExperience, setEditExperience] = useState(false)
    const [experienceId, setExperienceId] = useState(null)
    // const [selectedImage, setSelectedImage] = useState(null);
    const [experienceData, setExperienceData] = useState({
        experienceType: '',
        jobStatus: '',
        jobRole: '',
        companyType: '',
        location: '',
        skills: [],
        companyName: '',
        // name: '',
        // position: '',
        // email: '',
        // contactPhone: '',
        // link: '',
        startDate: '',
        endDate: ''
    });
    const fetchExperienceDetails = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/experienceInformationByID/${id}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setExperienceData(
                {
                    experienceType: data.data.experienceType,
                    jobStatus: data.data.jobStatus,
                    jobRole: data.data.jobRole,
                    companyType: data.data.companyType,
                    location: data.data.location,
                    skills: data.data.skills,
                    companyName: data.data.companyName,
                    // name: data.data.responsivePoC.name,
                    // email: data.data.responsivePoC.email,
                    // contactPhone: data.data.responsivePoC.contactPhone,
                    // link: data.data.responsivePoC.link,
                    // position: data.data.responsivePoC.position,
                    startDate: data.data.startDate,
                    endDate: data.data.endDate
                }
            );
            setExperienceId(data.data._id)
        } catch (error) {
            console.error('Error fetching education details:', error);
        }
    };

    // EXP ENDS HERE

    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };



    const [personal, setPersonal] = useState(false)
    const [education, setEducation] = useState(false)
    const [project, setProject] = useState(false)
    const [experience, setExperience] = useState(false)
    const [editEducation, setEditEducation] = useState(false)
    // const [about, setAbout] = useState(false)


    return (
        <ThemeProvider theme={defaultTheme}>

            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', 
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >

                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h5"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Hiclousia
                        </Typography>
                        <Button variant="contained" color="primary" onClick={handlecreateProfile}>
                            Create your Profile
                        </Button>
                        {/* <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton> */}

                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        {mainListItems}
                        <Divider sx={{ my: 1 }} />
                        {/* {secondaryListItems} */}
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />


                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

                        <Card style={{ width: '80%' }}>
                            <CardContent>
                                <button
                                    onClick={() => { setPersonal(true); console.log(personal) }}
                                    style={{
                                        float: 'right',
                                        border: 'none',
                                        background: 'transparent',
                                        marginTop: '18px',
                                        cursor: 'pointer'
                                    }}>
                                    <FiEdit2 style={{ fontSize: '20px' }} />
                                </button>




                                <ListItem alignItems="center">

                                    <ListItemAvatar sx={{ marginTop: '-9px' }}>
                                        <Avatar alt="Cindy Baker" sx={{ width: 200, height: 200 }}><PersonIcon sx={{ fontSize: 150, cursor: 'pointer' }} /></Avatar>
                                    </ListItemAvatar>

                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography variant='h4' style={{ fontFamily: "'Lora', sans-serif", marginLeft: '80px' }}>
                                                    {user.firstName} {user.lastName}
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        // secondary={
                                        //     <React.Fragment>
                                        //         <Typography
                                        //             sx={{ display: 'inline', marginLeft: '80px' }}
                                        //             component="span"
                                        //             variant="body2"
                                        //             color="text.primary"
                                        //         >
                                        //             Professional Link - {user.gitLink}
                                        //         </Typography>

                                        //         <br />

                                        //         <Typography
                                        //             sx={{ display: 'inline', marginLeft: '80px' }}
                                        //             component="span"
                                        //             variant="body2"
                                        //             color="text.primary"
                                        //         >
                                        //             Address- {user.location}
                                        //         </Typography>

                                        //         <br />

                                        //     </React.Fragment>
                                        // }


                                    />

                                </ListItem>

                            </CardContent>
                        </Card>

                        {userInfo.length > 0 && (
                    <Card style={{ width: '80%' }}>
                        <CardContent>
                            <ListItem alignItems="center">
                                <ListItemAvatar sx={{ marginTop: '-9px' }}>
                                    <Avatar>
                                        {userInfo[0].firstName[0].toUpperCase()}
                                    </Avatar>
                                </ListItemAvatar>

                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            <Typography variant='h4' style={{ fontFamily: "'Lora', sans-serif", marginLeft: '80px' }}>
                                                {userInfo[0].firstName} {userInfo[0].lastName}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                    // secondary={
                                    //     <React.Fragment>
                                    //         <Typography
                                    //             sx={{ display: 'inline', marginLeft: '80px' }}
                                    //             component="span"
                                    //             variant="body2"
                                    //             color="text.primary"
                                    //         >
                                    //             Professional Link - {userInfo.userprofile.gitLink}
                                    //         </Typography>

                                    //         <br />

                                    //         <Typography
                                    //             sx={{ display: 'inline', marginLeft: '80px' }}
                                    //             component="span"
                                    //             variant="body2"
                                    //             color="text.primary"
                                    //         >
                                    //             Address- {userInfo[0].location}
                                    //         </Typography>

                                    //         <br />

                                    //     </React.Fragment>
                                    // }
                                />
                            </ListItem>

                            {/* ... (rest of the JSX code) */}
                        </CardContent>
                    </Card>
                )}
                        <br />

                        <Card style={{ width: '80%' }}>
                            <CardContent>
                                <Typography variant="h5" component="div" color="rgb(22 102 197)">
                                    About Me
                                </Typography>

                                {/* {about && <About/>} */}
                                {
                                    userInfo.userprofile?.map((user)=> (
                                        <Box display="flex" flexDirection="column" alignItems="left">
                                        <Typography variant="body1" sx={{ mb: 2 }}>
                                            {user.aboutMe}
                                        </Typography>
                                        {/* Add other content for the "About Me" section */}
                                    </Box>
                                    ))
                                }

                              
                            </CardContent>
                        </Card>


                        <br />

                   {/* Experience card starts here */}
                   <br />
                        <Card style={{ width: '80%' }}>
                            <CardContent>
                                <Typography variant="h5" component="div" color="rgb(22 102 197)"> Experience </Typography>
                                <button onClick={() => setExperience(true)} style={{ float: 'right', border: 'none', background: 'transparent', marginTop: '-26px', cursor: 'pointer' }}>
                                    <GrAdd style={{ fontSize: '20px' }} />
                                </button>
                                {userInfo.experienceData?.map((experience, i) => (
                                    <List>
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar>
                                                <Avatar><WorkIcon /></Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={
                                                    <React.Fragment>
                                                        <Typography variant='h6' style={{ fontFamily: "'Lora', sans-serif" }}>{experience.companyName}</Typography>
                                                        <Typography variant='h6' style={{ fontFamily: "'Lora', sans-serif" }}>{experience.jobStatus}</Typography>
                                                    </React.Fragment>
                                                }
                                                secondary={
                                                    <React.Fragment>
                                                        <Typography sx={{ display: 'inline' }} style={{ fontFamily: "'Montserrat', sans-serif" }} component="span" variant="body2" color="text.primary" >{experience.jobRole}</Typography>
                                                        <Typography variant="subtitle1" gutterBottom>{"Skills Practiced: "}{experience.skills}{", "}</Typography>

                                                        <Typography variant="subtitle1" gutterBottom>{experience.experienceType}</Typography>
                                                        <Typography variant="subtitle1" gutterBottom>{experience.companyType}</Typography>
                                                        <Typography variant="subtitle1" gutterBottom>{"From: "}{experience.startDate} {" — "} {experience.endDate}</Typography>
                                                        <Typography variant="subtitle1" gutterBottom>{experience.location}</Typography>
                                                        {/*<Typography variant="subtitle1" gutterBottom>{experience.responsivePoC.name}</Typography>
                                                        <Typography variant="subtitle1" gutterBottom>{experience.responsivePoC.email}</Typography>
                                                        <Typography variant="subtitle1" gutterBottom>{experience.responsivePoC.contactPhone}</Typography>
                                                        <Typography variant="subtitle1" gutterBottom>{experience.responsivePoC.link}</Typography>
                                                        <Typography variant="subtitle1" gutterBottom>{experience.responsivePoC.position}</Typography>
                                                        <Typography variant="subtitle1" gutterBottom>{experience.responsivePoC.startDate}</Typography>
                                                <Typography variant="subtitle1" gutterBottom>{experience.responsivePoC.endDate}</Typography>*/}
                                                    </React.Fragment>
                                                }
                                            />
                                            <button onClick={() => { setEditExperience(true); fetchExperienceDetails(userInfo.experienceData[i]._id) }} style={{ float: 'right', border: 'none', background: 'transparent', cursor: 'pointer' }}>
                                                <FiEdit2 style={{ float: 'right', fontSize: '20px' }} />
                                            </button>
                                            {/*<button style={{ float: 'right', border: 'none', background: 'transparent', cursor: 'pointer', marginLeft: '30px' }}>
                                                <MdDelete style={{ float: 'right', fontSize: '20px' }} />
                                            </button>*/}
                                            {editExperience && (<EditExperiences experienceId={experienceId} experienceData={experienceData} setExperienceData={setExperienceData} experienceInfoEdit={(status) => setEditExperience(status)} />)}
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                    </List>
                                ))}
                                {experience && <ExperiencePortfolio experienceInfo={() => setExperience(false)} />}
                            </CardContent>
                        </Card>
                        <br />

              {/* Projects card content starts here */}
                        
              <Card style={{ width: '80%' }}>
                            <CardContent>
                                <Typography variant="h5" component="div" color="rgb(22 102 197)"> Project </Typography>
                                <button onClick={() => setProject(true)} style={{ float: 'right', border: 'none', background: 'transparent', marginTop: '-26px', cursor: 'pointer' }}>
                                    <GrAdd style={{ fontSize: '20px' }} />
                                </button>
                                {userInfo.projects?.map((project, i) => (
                                    <List>
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar>
                                                <Avatar><WbIncandescentSharpIcon /></Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={
                                                    <React.Fragment>
                                                        <Typography variant='h6' style={{ fontFamily: "'Lora', sans-serif" }}>{project.projectTitle}</Typography>
                                                    </React.Fragment>
                                                }
                                                secondary={
                                                    <React.Fragment>
                                                        <Typography sx={{ display: 'inline' }} style={{ fontFamily: "'Montserrat', sans-serif" }} component="span" variant="body2" color="text.primary" >{project.projectType}</Typography>
                                                        {" — "}{project.projectDescription}
                                                        <Typography variant="subtitle1" gutterBottom>{project.organizationName}</Typography>
                                                        <Typography variant="subtitle1" gutterBottom>{project.Url}</Typography>
                                                        <Typography variant="subtitle1" gutterBottom>{"From: "}{project.startDate} {" — "} {project.endDate}</Typography>
                                                    </React.Fragment>
                                                }
                                            />
                                            <button onClick={() => { setEditProject(true); fetchProjectDetails(userInfo.projects[i]._id) }} style={{ float: 'right', border: 'none', background: 'transparent', cursor: 'pointer' }}>
                                                <FiEdit2 style={{ float: 'right', fontSize: '20px' }} /></button>
                                            {/*<button style={{ float: 'right', border: 'none', background: 'transparent', cursor: 'pointer', marginLeft: '30px' }}>
                                                <MdDelete style={{ float: 'right', fontSize: '20px' }} />
                                            </button>*/}
                                            
                                            {editProject && (<EditProjects projectId={projectId} projectData={projectData} setProjectData={setProjectData}
                                            projectInfoEdit={(status) => setEditProject(status)} />)}

                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                    </List>
                                ))}
                                {project && <ProjectPortfolio projectInfo={() => setProject(false)} />}
                            </CardContent>
                        </Card>
                        <br />

                        <Card style={{ width: '80%' }}>
                            <CardContent>

                                <Typography variant="h5" component="div" color="rgb(22 102 197)">
                                    Education
                                </Typography>


                                <button
                                    onClick={() => setEducation(true)}
                                    style={{
                                        float: 'right',
                                        border: 'none',
                                        background: 'transparent',
                                        marginTop: '-26px',
                                        cursor: 'pointer'
                                    }}>
                                    <GrAdd style={{ fontSize: '20px' }} />
                                </button>



                                {userInfo.educationData?.map((education) => (

                                    <List>


                                        <ListItem alignItems="flex-start">



                                            <ListItemAvatar>
                                                <Avatar><SchoolSharpIcon /></Avatar>
                                            </ListItemAvatar>



                                            <ListItemText

                                                primary={
                                                    <React.Fragment>
                                                        <Typography variant='h6' style={{ fontFamily: "'Lora', sans-serif" }}>{education.collegeName}</Typography>
                                                    </React.Fragment>
                                                }

                                                secondary={
                                                    <React.Fragment>
                                                        <Typography
                                                            sx={{ display: 'inline' }}
                                                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                                                            component="span"
                                                            variant="body2"
                                                            color="text.primary"
                                                        >
                                                            {education.educationLevel}
                                                        </Typography>
                                                        {" — "} {education.degreeName}, {education.discipline}

                                                        <Typography variant="subtitle1" gutterBottom>
                                                            {"From: "}{education.startYear} {" — "} {education.endYear}
                                                        </Typography>
                                                    </React.Fragment>
                                                }


                                            />

                                            <button style={{
                                                float: 'right',
                                                border: 'none',
                                                background: 'transparent',
                                                cursor: 'pointer',

                                            }}><FiEdit2 style={{ float: 'right', fontSize: '20px' }} onClick={() => setEditEducation(true)} /></button>


                                            <button style={{
                                                float: 'right',
                                                border: 'none',
                                                background: 'transparent',
                                                cursor: 'pointer',
                                                marginLeft: '30px'
                                            }}><MdDelete style={{ float: 'right', fontSize: '20px' }} /></button>


                                        </ListItem>


                                        <Divider variant="inset" component="li" />
                                    </List>
                                ))}

                                {education && <EducationPortfolio educationInfo={() => setEducation(false)} />}
                                {editEducation && <EditEducation EditEducationInfo={() => setEditEducation(false)} />}

                            </CardContent>

                        </Card>
                        <br />


         

                        {/* <Card style={{ width: '80%' }}>
                            <CardContent>

                                <Typography variant="h5" component="div" color="rgb(22 102 197)">
                                    Experience
                                </Typography>

                                <button
                                    onClick={() => setExperience(true)}
                                    style={{
                                        float: 'right',
                                        border: 'none',
                                        background: 'transparent',
                                        marginTop: '-26px',
                                        cursor: 'pointer'
                                    }}>
                                    <GrAdd style={{ fontSize: '20px' }} />
                                </button>



                                {userInfo.experienceData?.map((experience, i) => (
                                    <List>

                                        <ListItem alignItems="flex-start">

                                            <ListItemAvatar>
                                                <Avatar><WorkIcon /></Avatar>
                                            </ListItemAvatar>



                                            <ListItemText

                                                primary={
                                                    <React.Fragment>
                                                        <Typography variant='h6' style={{ fontFamily: "'Lora', sans-serif" }}>{experience.companyName}</Typography>
                                                    </React.Fragment>
                                                }

                                                secondary={
                                                    <React.Fragment>
                                                        <Typography
                                                            sx={{ display: 'inline' }}
                                                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                                                            component="span"
                                                            variant="body2"
                                                            color="text.primary"
                                                        >
                                                            {experience.jobRole}
                                                        </Typography>

                                                        <Typography variant="subtitle1" gutterBottom>
                                                            {"Skills Practiced: "}{experience.skills} {", "}
                                                        </Typography>

                                                        <Typography variant="subtitle1" gutterBottom>
                                                            {experience.experienceType}
                                                        </Typography>

                                                        <Typography variant="subtitle1" gutterBottom>
                                                            {experience.companyType}
                                                        </Typography>



                                                        <Typography variant="subtitle1" gutterBottom>
                                                            {"From: "} {experience.startDate}  {" — "}  {experience.endDate}
                                                        </Typography>

                                                        <Typography variant="subtitle1" gutterBottom>
                                                            {experience.location}
                                                        </Typography>
                                                    </React.Fragment>
                                                }
                                            />
                                            <button
                                                onClick={() => setEditExperience(true)}
                                                style={{
                                                    float: 'right',
                                                    border: 'none',
                                                    background: 'transparent',
                                                    cursor: 'pointer'
                                                }}><FiEdit2 style={{ float: 'right', fontSize: '20px' }} /></button>

                                            {editExperience && <EditExperience expid={userInfo.projects[i]._id} experienceInfoEdit={() => setEditExperience(false)} />}

                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                    </List>
                                ))}
                                {experience && <ExperiencePortfolio experienceInfo={() => setExperience(false)} />}
                            </CardContent>

                        </Card> */}

       

                        <br />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}