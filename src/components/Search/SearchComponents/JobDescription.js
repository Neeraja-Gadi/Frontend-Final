import React, { useState } from 'react';
import { Card } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '300px',
  height: '200px',
  backgroundColor: 'lightblue',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '5px',
});

const JobDescription = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const handleToggleCard = () => {
    setIsCardVisible(!isCardVisible);
  };

  return (
    <div>
      <button onClick={handleToggleCard}>Toggle Card</button>
      {isCardVisible && (
        <StyledCard>
          <h2>Pop-up Card</h2>
          <p>This is a pop-up card content.</p>
        </StyledCard>
      )}
    </div>
  );
};

export default JobDescription;
