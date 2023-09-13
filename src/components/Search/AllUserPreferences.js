
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import baseurl from '../../baseURL/config';

const formatValues = (array) => {
  return array.join(', ');
};

const userId = JSON.parse(localStorage.getItem('userDetails'));

const PreferenceCards = () => {
  const [data, setData] = useState([]);
  const [recommendedJobs, setRecommendedJobs] = useState([]);
  const [selectedDataId, setSelectedDataId] = useState(null); // Track the selected data card ID

  // Create a separate state to track applied jobs for each job card
  const [appliedJobsMap, setAppliedJobsMap] = useState({});

  useEffect(() => {
    fetch(`${baseurl}/allUserPreference/${userId._id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleViewJobsClick = (PrefId) => {
    fetch(`${baseurl}/showJobsByPreferenceID/${PrefId}`)
      .then((response) => response.json())
      .then((data) => {
        setRecommendedJobs(data.data);
        setSelectedDataId(PrefId);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleApplyJob = (jobId) => {
    // Create a copy of the appliedJobsMap to avoid mutating the state directly
    const newAppliedJobsMap = { ...appliedJobsMap };

    // If applied jobs for the selected card don't exist, initialize it as an empty array
    if (!newAppliedJobsMap[selectedDataId]) {
      newAppliedJobsMap[selectedDataId] = [];
    }

    if (!newAppliedJobsMap[selectedDataId].includes(jobId)) {
      // Only update the applied jobs for the selected card
      newAppliedJobsMap[selectedDataId].push(jobId);
      setAppliedJobsMap(newAppliedJobsMap);
    }
  };

  return (
    <div>
      {data.map((userPrefs) => (
        <div key={userPrefs._id} style={{ marginBottom: '20px' }}>
          <Card variant="outlined">
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <strong>Job Role:</strong> {formatValues(userPrefs.jobRole)}
                  {userPrefs.skills.length > 0 && (
                    <Grid item xs={12} md={6}>
                      <strong>Skills:</strong> {formatValues(userPrefs.skills)}
                    </Grid>
                  )}

                  {userPrefs.sector && (
                    <Grid item xs={12} md={6}>
                      <strong>Sector:</strong> {userPrefs.sector}
                    </Grid>
                  )}

                  {userPrefs.experienceOverall && (
                    <Grid item xs={12} md={6}>
                      <strong>Experience Overall:</strong> {userPrefs.experienceOverall}
                    </Grid>
                  )}

                  {userPrefs.salary && (
                    <Grid item xs={12} md={6}>
                      <strong>Salary:</strong> {userPrefs.salary}
                    </Grid>
                  )}

                  {userPrefs.city.length > 0 && (
                    <Grid item xs={12} md={6}>
                      <strong>City:</strong> {formatValues(userPrefs.city)}
                    </Grid>
                  )}
                </Grid>

                <Grid item xs={12} style={{ marginTop: '20px' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleViewJobsClick(userPrefs._id)}
                  >
                    View Jobs
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {selectedDataId === userPrefs._id && (
            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
              {recommendedJobs?.map((job) => (
                <Card
                  key={job.id}
                  variant="outlined"
                  style={{
                    flex: '1 1 calc(33.33% - 20px)',
                    margin: '0 10px 20px',
                  }}
                >
                  <CardContent>
                    <strong>Job Role:</strong> {job.jobRole.join(', ')}
                    <br />
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
                    <Button
                      variant="contained"
                      color={
                        appliedJobsMap[selectedDataId]?.includes(job.id) ? 'error' : 'secondary'
                      }
                      style={{ marginTop: '10px' }}
                      onClick={() => handleApplyJob(job.id)}
                    >
                      {appliedJobsMap[selectedDataId]?.includes(job.id) ? 'Applied' : 'Apply'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PreferenceCards;
