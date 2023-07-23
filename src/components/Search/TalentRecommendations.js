
import React, { useState ,useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import JobDescription from './SearchComponents/JobDescription';

const user = JSON.parse(localStorage.getItem('userDetails'));

const TalentRecommendationsItems = () => {

  const [recommendedJobs, setRecommendedJobs] = useState([]);

  useEffect(() => {
       fetch(`http://localhost:8000/TalentRecommendations/${user._id}`)
        .then(response => response.json())
        .then(data => {
          setRecommendedJobs(data.data);
          
        })
        .catch(error => {
          console.error(error);
        });
  
  }, []);
  const [isJobDescriptionVisible, setIsJobDescriptionVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const formatValues = (val) => {
    return val.join(', ');
  };

  const handleToggleJobDescription = (job) => {
    setSelectedJob(job);
    setIsJobDescriptionVisible(!isJobDescriptionVisible);
  };
  
  const mailSenderToRecruiter =async (recruiterId ) =>{
    console.log(recruiterId)
    fetch(`http://localhost:8000/sendMail?id=${recruiterId}&senderId=${user._id}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      
    })
    .catch(error => {
      console.error(error);
    });
  }

  return (
    <Grid item xs={12}>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: isJobDescriptionVisible ? 'transparent' : '#e1f5fe',
        }}
      >
        <Typography variant="h4" mb="20px" color="text.secondary" component="div">
          Recommended Jobs
        </Typography>
        {recommendedJobs?.map((job) => (
          <Card key={job.id} sx={{ minWidth: 250, marginBottom: '20px' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {formatValues(job.jobRole)}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {job.company}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {job.highestEducation}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {formatValues(job.primarySkills)}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {job.experience}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleToggleJobDescription(job)}>
                Job Description
              </Button>
              <Button size="small" onClick={()=>{mailSenderToRecruiter(job._id)}} >
                Apply 
              </Button>
            </CardActions>
          </Card>
        ))}
      </Paper>
      {isJobDescriptionVisible && (
        <div 
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: '100',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
          <JobDescription job={selectedJob} onClose={() => setIsJobDescriptionVisible(false)} />
        </div>
      )}
    </Grid>
  );
};

export default TalentRecommendationsItems;
