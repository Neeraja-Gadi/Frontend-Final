import React from 'react';
import { Card, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400px',
  maxHeight: '80vh',
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
  overflow: 'auto',
});

const Title = styled(Typography)({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '10px',
});

const CloseButton = styled(Button)({
  marginTop: '20px',
});

const JobDescription = ({ job, onClose }) => {
  return (
    <div>
      <StyledCard>
        <Title variant="h2">Job Description</Title>
        <Typography variant="body1">{job.jobDescription}</Typography>
        <CloseButton variant="contained" color="primary" onClick={onClose}>
          Close
        </CloseButton>
      </StyledCard>
    </div>
  );
};

export default JobDescription;

