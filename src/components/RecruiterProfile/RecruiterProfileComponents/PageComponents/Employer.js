
import * as React from 'react';
import { useState, useEffect } from 'react';
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
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import JobPost  from "../../../RecruiterForms/JobPost"

const user = JSON.parse(localStorage.getItem('userDetails'));

function JobDescription({ description, onClose }) {
  return (
    <CardActions>
      <Button size="small" variant="outlined" onClick={onClose}>
        Hide Description
      </Button>
      <CardContent>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </CardActions>
  );
}

function JobCard({ job, onShowDescription, onSelectJob }) {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {job.jobRole[0]}
        </Typography>
        <Typography gutterBottom variant="h6">{job.company}</Typography>
        <Typography gutterBottom variant="h7">Primary Skills: {job.primarySkills.join(', ')}</Typography>
        <Typography gutterBottom variant="h7">Location: {job.location}</Typography>
      </CardContent>
      <CardActions>
        {showDescription ? (
          <Button size="small" variant="outlined" onClick={toggleDescription}>
            Hide Description
          </Button>
        ) : (
          <Button size="small" variant="outlined" onClick={toggleDescription}>
            Description
          </Button>
        )}
        <Button size="small" variant="outlined" onClick={() => onSelectJob(job._id)}>
          Select
        </Button>
      </CardActions>

      {showDescription && <JobDescription description={job.jobDescription} onClose={toggleDescription} />}
    </Card>
  );
}

const defaultTheme = createTheme();

export default function Album() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [getJobDetails, setGetJobDetails] = useState([]);
  const [getPlanDetails, setGetPlanDetails] = useState([]);
  const [showJobPostForm, setShowJobPostForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/PlanWithDetails/${user._id}/${id}`);
        const data = await response.json();
        setGetJobDetails(data.data[0].jobPosts);
        setGetPlanDetails(data.data[0]);
        console.log(data.data, "plan");
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const handleSelectJob = (jobId) => {
    navigate(`/TalentPoolNew/${jobId}`);
  };


  const handleCreateJobPost = () => {
    if (getPlanDetails.limit) {

      setShowJobPostForm(true);
      // If the limit is true, show the alert message
      // alert("Your Job Post limit Exceeded. Consider Upgrading Plan.");
    } else {
      // If the limit is false, show the job post form
      alert("Your Job Post limit Exceeded. Consider Upgrading Plan.");
    }
  };

  const handleJobPostFormClose = () => {
    setShowJobPostForm(false);
  };

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

        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              {getPlanDetails && (
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <CardContent>
                    <Typography variant="h6" align="center">{getPlanDetails.subscription}</Typography>
                    <Typography variant="subtitle1" align="center">Job Posts: {getPlanDetails.jobPostno}</Typography>
                    <Typography variant="subtitle1" align="center">Duration: {getPlanDetails.duration}</Typography>
                    <Typography variant="subtitle1" align="center">JobCount: {getPlanDetails.jobCount}</Typography>

                  </CardContent>
                </Card>
              )}
            </Grid>
          </Grid>
        </Container>

        <Container sx={{ py: 8 }} maxWidth="md">
          {/* Render job posts */}
          <Grid container spacing={4}>
            {getJobDetails.map((job) => (
              <Grid item key={job._id} xs={12} sm={6} md={4}>
                <JobCard job={job} onSelectJob={handleSelectJob} />
              </Grid>
            ))}
          </Grid>
        </Container>

        <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
        {showJobPostForm ? (
        <JobPost id={id} onClose={handleJobPostFormClose} />
      ) : (
        <Button variant="contained" onClick={handleCreateJobPost}>
          Create a New Job Post
        </Button>
      )}
      </Box>

      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          © {new Date().getFullYear()} Hiclousia
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
