import React from 'react';
import { styled } from '@mui/material/styles';

const BadgeContainer = styled('div')({
  position: 'relative',
  display: 'inline-block',
  padding: '8px',
  border: '2px solid #1565C0', // Blue border color
  borderRadius: '8px',
});

const Circle = styled('div')({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: '#1565C0', // Blue background color
  color: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  position: 'relative',
});

const Rectangle = styled('div')({
  width: '100px',
  height: '40px',
  backgroundColor: '#1565C0', // Blue background color
  color: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  bottom: '-20px',
  left: 'calc(50% - 50px)',
});

const HiVerified = styled('div')({
  position: 'absolute',
  bottom: '-20px',
  left: 'calc(50% - 60px)',
  color: '#1565C0', // Blue color for "HiVerified"
  fontSize: '0.8rem',
  fontWeight: 'bold',
});

const Badge = ({ hiRank, name }) => {
  return (
    <BadgeContainer>
      <Circle>{hiRank}</Circle>
      <Rectangle>Advance</Rectangle>
      <HiVerified>HiVerified</HiVerified>
    </BadgeContainer>
  );
};

const Apps = () => {
  return (
    <div>
      <Badge hiRank="3" name="advane" />
    </div>
  );
};

export default Apps;
