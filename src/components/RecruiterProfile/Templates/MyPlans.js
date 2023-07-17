import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import CardHeader from '@mui/material/CardHeader';

const user = JSON.parse(localStorage.getItem('userDetails'));

const profile = {
    marginTop: '130px',
    borderRadius: '0.8rem',
    boxShadow: '2px 2px 4px 2px rgba(0, 0, 0, 0.2)',
};

const defaultTheme = createTheme();

export default function MyPlans() {
    const navigate = useNavigate();
    const [planData, setPlanData] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:8000/revenueR/${user._id}`)
            .then((response) => response.json())
            .then((data) => {
                setPlanData(data.data);
                console.log(data.data);
               
            })
            .catch((err) => console.log(err));
    }, []);
    console.log(planData);

    const recruiterInfo = { ...planData.recruiterInfo };
    const plansDetails = planData.plans || [];
    console.log(plansDetails);

    const renderedPlans = showAll ? plansDetails : plansDetails.slice(0, 3);
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Hiclousia
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Container sx={{ py: 8 }} maxWidth="md" style={profile}>
                    <ListItem alignItems="flex-start" marginLeft="10px">
                        <ListItemAvatar marginTop="-7px">
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                                sx={{ width: 130, height: 130 }}
                            />
                        </ListItemAvatar>
                        <ListItemText
                            sx={{ marginTop: '25px', marginLeft: '22px', flexGrow: 1 }}
                            primary={
                                <Typography variant="h4" fontFamily="Roboto, sans-serif">
                                    {recruiterInfo.fullName}
                                </Typography>
                            }
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Email: {recruiterInfo.email}
                                    </Typography>

                                    <Typography variant="body1" color="text.secondary">
                                        Phone: {recruiterInfo.phoneNumber}
                                    </Typography>

                                    {recruiterInfo.socialMediaLinks && (
                                        <>
                                            <Typography variant="body1" color="text.secondary">
                                                LinkedIn: <a href={recruiterInfo.socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer">
                                                    {recruiterInfo.socialMediaLinks.linkedin}
                                                </a>
                                            </Typography>

                                            <Typography variant="body1" color="text.secondary">
                                                Twitter: <a href={recruiterInfo.socialMediaLinks.twitter} target="_blank" rel="noopener noreferrer">
                                                    {recruiterInfo.socialMediaLinks.twitter}
                                                </a>
                                            </Typography>
                                        </>
                                    )}

                                    {recruiterInfo.workExperience && recruiterInfo.workExperience.length > 0 && (
                                        <>
                                            <Typography variant="body1" color="text.secondary">
                                                Company: {recruiterInfo.workExperience[0].company}
                                            </Typography>
                                        </>
                                    )}

                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </Container>
                <br />
                <br />
                <br />
                <Container maxWidth="md">
                    <Grid container spacing={5} alignItems="flex-end">
                        {renderedPlans.map((plan, index) => (
                            <Grid
                                item
                                key={index}
                                xs={12}
                                sm={plan.recruiterPlan === 'Enterprise' ? 12 : 6}
                                md={4}
                            >
                                <Card>
                                    <CardHeader
                                        title={plan.recruiterPlan}
                                        subheader={plan.subheader}
                                        titleTypographyProps={{ align: 'center' }}
                                        subheaderTypographyProps={{ align: 'center' }}
                                        sx={{
                                            backgroundColor: (theme) =>
                                                theme.palette.mode === 'light'
                                                    ? theme.palette.grey[200]
                                                    : theme.palette.grey[700],
                                        }}
                                    />
                                    {/* <CardContent
                                        sx={{
                                            height: '15rem',
                                            alignItems: 'center',
                                            backgroundColor: (theme) =>
                                                theme.palette.mode === 'light'
                                                    ? plan.recruiterPlan === 'Gold'
                                                        ? 'goldenrod'
                                                        : plan.recruiterPlan === 'Silver'
                                                            ? '#c0c0c0'
                                                            : plan.recruiterPlan === 'Platinum'
                                                                ? '#e5e4e2'
                                                                : theme.palette.grey[200]
                                                    : plan.recruiterPlan === 'Gold'
                                                        ? 'goldenrod'
                                                        : plan.recruiterPlan === 'Silver'
                                                            ? '#c0c0c0'
                                                            : plan.recruiterPlan === 'Platinum'
                                                                ? '#e5e4e2'
                                                                : theme.palette.grey[700],
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                textAlign: 'center',
                                            }}
                                        >
                                            <Typography variant="h5" color="text.primary" sx={{ marginTop: '57px' }}>
                                                Duration :{plan.duration}  Days
                                            </Typography>
                                            <br />
                                            <Typography variant="h5" color="text.primary" sx={{ marginTop: '57px' }}>
                                                RemainingDays: {plan.remainingDays} Days
                                            </Typography>
                                            <br />
                                            <Typography variant="h6" color="text.secondary">
                                                {plan.jobPostno} Post
                                            </Typography>
                                        </Box>
                                    </CardContent> */}

                                    <CardContent
                                        sx={{
                                            height: '15rem',
                                            alignItems: 'center',
                                            backgroundColor: (theme) =>
                                                theme.palette.mode === 'light'
                                                    ? plan.recruiterPlan === 'Gold'
                                                        ? 'goldenrod'
                                                        : plan.recruiterPlan === 'Silver'
                                                            ? '#c0c0c0'
                                                            : plan.recruiterPlan === 'Platinum'
                                                                ? '#e5e4e2'
                                                                : theme.palette.grey[200]
                                                    : plan.recruiterPlan === 'Gold'
                                                        ? 'goldenrod'
                                                        : plan.recruiterPlan === 'Silver'
                                                            ? '#c0c0c0'
                                                            : plan.recruiterPlan === 'Platinum'
                                                                ? '#e5e4e2'
                                                                : theme.palette.grey[700],
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            textAlign: 'center',
                                            padding: '2rem',
                                        }}
                                    >
                                        <Typography variant="h5" color="text.primary">
                                            Duration: {plan.duration} Days
                                        </Typography>

                                        <Typography variant="h5" color="text.primary" sx={{ marginTop: '1rem' }}>
                                            Remaining Days: {plan.remainingDays}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary" sx={{ marginTop: '1rem' }}>
                                            {plan.jobPostno} Job Post
                                        </Typography>
                                    </CardContent>

                                    <CardActions
                                        sx={{
                                            backgroundColor: (theme) =>
                                                theme.palette.mode === 'light'
                                                    ? plan.recruiterPlan === 'Gold'
                                                        ? 'goldenrod'
                                                        : plan.recruiterPlan === 'Silver'
                                                            ? '#c0c0c0'
                                                            : plan.recruiterPlan === 'Platinum'
                                                                ? '#e5e4e2'
                                                                : theme.palette.grey[200]
                                                    : plan.recruiterPlan === 'Gold'
                                                        ? 'goldenrod'
                                                        : plan.recruiterPlan === 'Silver'
                                                            ? '#c0c0c0'
                                                            : plan.recruiterPlan === 'Platinum'
                                                                ? '#e5e4e2'
                                                                : theme.palette.grey[700],
                                        }}
                                    >
                                        {plan.status ? (
                                            <Button
                                                fullWidth
                                                variant="contained"
                                                color="success"
                                                onClick={() => navigate('/job-posting')}
                                            >
                                                Active
                                            </Button>
                                        ) : (
                                            <Button
                                                fullWidth
                                                variant="contained"
                                                color="error"
                                                onClick={() => navigate('/job-posting')}
                                            >
                                                Inactive
                                            </Button>
                                        )}

                                        <Button
                                            fullWidth
                                            variant="contained"
                                            onClick={() => { navigate(`/Employer/${user._id}/${plan.id}`) }}
                                        >
                                            Select
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    {!showAll && (
                        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained" onClick={() => setShowAll(true)}>
                                Show More
                            </Button>
                        </Box>
                    )}
                </Container>
            </main>
        </ThemeProvider>
    );
}
