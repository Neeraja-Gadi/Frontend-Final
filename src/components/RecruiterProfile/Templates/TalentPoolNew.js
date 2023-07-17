import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useParams } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/Work';


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Hiclousia
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const cards = [1, 2, 3];


const defaultTheme = createTheme();

export default function TalentPoolNew() {

    const { jid } = useParams()
    const [getTalentinfo, setGetTalentinfo] = useState([]);
    useEffect(() => {
        const fetchData = () => {
            fetch(`http://localhost:8000/PREP/${jid}`)
                .then(response => response.json())
                .then(data => {
                    setGetTalentinfo(data.data);
                    console.log(data.data);
                })
                .catch(err => console.log(err));
        };
        fetchData();
    }, [jid]);
    console.log(getTalentinfo);





    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    {/* <CameraIcon sx={{ mr: 2 }} /> */}
                    <Typography variant="h6" color="inherit" noWrap>
                        Hiclousia
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>

                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (

                            <Grid item xs={12} sm={6} md={4}>
                                {getTalentinfo?.map((cards) => (
                                    <Card
                                        key={cards}
                                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                    >
                                        <Avatar
                                            alt="Avatar Image"
                                            sx={{
                                                width: 200,
                                                height: 200,
                                                alignSelf: 'center',
                                            }}


                                        > <WorkIcon
                                                sx={{
                                                    fontSize: 100,
                                                    color: 'primary',
                                                    alignSelf: 'center',
                                                    mt: 4,
                                                }}
                                            />
                                        </Avatar>

                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Heading
                                            </Typography>
                                            <Typography>
                                                This is a media card. You can use this section to describe the
                                                content.
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">View</Button>
                                            <Button size="small">Edit</Button>
                                        </CardActions>


                                    </Card>
                                ))}
                            </Grid>

                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give someone a purpose!
                </Typography>
                <Copyright />
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}




// import  React , { useState,useEffect } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import {useParams} from "react-router-dom" ;
// import {useNavigate} from "react-router-dom"
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();
// export default function Album() {
//      const {jid} = useParams()
//      const [getTalentinfo, setGetTalentinfo] = useState([]);
//      useEffect(() => {
//          const fetchData = () => {
//            fetch(`http://localhost:8000/PREP/${jid}`)
//              .then(response => response.json())
//              .then(data => {
//                 setGetTalentinfo(data.data);
//                  console.log(data.data);
//              })
//              .catch(err => console.log(err));
//          };
//          fetchData();
//        }, []);
//        console.log(getTalentinfo);
//     return (
//         <ThemeProvider theme={defaultTheme}>
//             <CssBaseline />
//             <AppBar position="relative">
//                 <Toolbar>
//                     <Typography variant="h6" color="inherit" noWrap>
//                         Hiclousia
//                     </Typography>
//                 </Toolbar>
//             </AppBar>
//             <main>
//                 {/* Hero unit */}
//                 <Box
//                     sx={{
//                         bgcolor: 'background.paper',
//                         pt: 8,
//                         pb: 6,
//                     }}
//                 >
//                 </Box>
//                 <Typography varient="h4">My Talent Pool</Typography>
//                 <Container sx={{ py: 8 }} maxWidth="md">
//                     {/* End hero unit */}
//                     <Grid container spacing={4}>
//                         {getTalentinfo?.map((card) => (
//                             <Grid item key={card} xs={12} sm={6} md={4}>
//                                 <Card
//                                     sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
//                                 >
//                                     <CardContent sx={{ flexGrow: 1 }}>
//                                         <Typography gutterBottom variant="h5" component="h2" textAlign="center">
//                                             Candidate
//                                         </Typography>
//                                         <ListItemAvatar style={{ width: '150px', height: '150px' , display: 'flex', alignItems: 'center', justifyContent: 'center'  }} AlignItems="center">
//                                             <Avatar alt="Remy Sharp"  style={{ fontSize: '100px' }}></Avatar>
//                                         </ListItemAvatar>
//                                     </CardContent>
//                                     <CardActions>
//                                         <Button size="large">Select</Button>
//                                     </CardActions>
//                                 </Card>
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </Container>
//             </main>
//         </ThemeProvider>
//     );
// }