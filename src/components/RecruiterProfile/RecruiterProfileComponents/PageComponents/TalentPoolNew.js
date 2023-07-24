import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
// import Avatar from '@mui/material/Avatar';
import { useParams } from "react-router-dom";
import NavBar from  "./Navbar"
import baseurl  from  "../../../../baseURL/config"

const defaultTheme = createTheme();

export default function TalentPoolNew() {
    const { jid } = useParams()
  const [getTalentinfo, setGetTalentinfo] = useState([]);
  // const [users, setUsers] = useState([]);
  const [selectedRow, setSelectedRow] = useState([]);


  useEffect(() => {
    const fetchData = () => {
      fetch(`${baseurl}/PREP/${jid}`)
        .then((response) => response.json())
        .then((data) => {
          setGetTalentinfo(data.data);
          console.log(data.data);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [jid]);

  function handleSelect(params){

    if(params.formattedValue==="no"){
      
      setSelectedRow([...selectedRow,params.row.fullName]); 
     
    }else {
      
      let temp=[...selectedRow]
      temp.map((ele,i)=>{
        
        if(ele===params.row.fullName){
          temp.splice(i,1)
          setSelectedRow(temp)
        }
        return ele
      })
    }
    
  }
  const handleSendMail = async () => {
    try {
      
      let tempArr=[]

      for(let talent of getTalentinfo){
        let name = talent.user.firstName+" "+talent.user.lastName

        if(selectedRow.includes(name)){
          tempArr.push(talent)
        }
      }
      console.log(tempArr)
   
      const response = await fetch(`${baseurl}/sendMailToUsers?id=${jid}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          users: tempArr
        }),
      });
      const data = await response.json();
      if (data.status) {
        alert('Mail sent successfully');
      } else {
        alert('Failed to send mail');
      }
    } catch (error) {
      console.error('Error sending mail:', error);
      alert('Error sending mail');
    }
  };

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

  const rows = getTalentinfo?.map((talent) => ({
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
      {/* <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Hiclousia
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main>
        <NavBar  color={{MyPlans:'white',Employer:'white',TalentPoolNew:'black'}}/>
        <Container sx={{ py: 8 }} maxWidth="ls">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <div style={{ height: 'auto', width: '100%' }} >
                <DataGrid 
                  rows={rows}
                  columns={columns}
                  checkboxSelection
                  disableSelectionOnClick
                  autoHeight
                  onCellClick={handleSelect}
                  getRowClassName={(params) =>
                    params.row.id === selectedRow ? 'selected-row' : ''
                  } 
                />
              </div>
            </Grid>
            <Button variant="outlined" color="primary"  onClick={handleSendMail}>
        Send Mail to Selected Users
      </Button>
          </Grid>
       
        </Container>
       
      </main>
    </ThemeProvider>
  );
}


