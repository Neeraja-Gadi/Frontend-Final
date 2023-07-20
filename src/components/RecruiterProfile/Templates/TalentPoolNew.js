import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import Avatar from '@mui/material/Avatar';
import { useParams } from "react-router-dom";

const defaultTheme = createTheme();

export default function TalentPoolNew() {
    const { jid } = useParams()
  const [getTalentinfo, setGetTalentinfo] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(`http://localhost:8000/PREP/${jid}`)
        .then((response) => response.json())
        .then((data) => {
          setGetTalentinfo(data.data);
          console.log(data.data);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [jid]);

  const columns = [
    // {
    //   field: 'avatar',
    //   headerName: '',
    //   width: 100,
    //   renderCell: (params) => (
    //     <img
    //     src="<Avatar/>"
    //     //   src={params.row.profileLink.url}
    //       alt="Avatar"
    //       style={{ width: 50, height: 50, borderRadius: '50%', objectFit: 'cover' }}
    //     />
    //   ),
    // },
    { field: 'fullName', headerName: 'Full Name', width: 200 },
    { field: 'highestEducation', headerName: 'Highest Education', width: 200 },
    { field: 'experienceOverall', headerName: 'Experience', width: 150 },
    { field: 'skills', headerName: 'Skills', width: 200 },
    { field: 'primarySkills', headerName: 'Primary Skills', width: 200 },
    { field: 'secondarySkills', headerName: 'Secondary Skills', width: 200 },
  ];

  const rows = getTalentinfo.map((talent) => ({
    id: talent.HiRank,
    // avatar: talent.userProfile.profileLink.url,
    fullName: `${talent.user.firstName} ${talent.user.lastName}`,
    highestEducation: talent.preferenceDetails.highestEducation,
    experienceOverall: talent.preferenceDetails.experienceOverall,
    skills: [...talent.preferenceDetails.skills, ...talent.skillsDetails.primarySkills].join(', '),
    primarySkills: talent.skillsDetails.primarySkills.join(', '),
    secondarySkills: Array.isArray(talent.skillsDetails.secondarySkills)
      ? talent.skillsDetails.secondarySkills.join(', ')
      : '',
  }));

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
            <Grid item xs={12}>
              <div style={{ height: 500, width: '100%' }} >
                <DataGrid 
                  rows={rows}
                  columns={columns}
                  checkboxSelection
                  disableSelectionOnClick
                  autoHeight
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

