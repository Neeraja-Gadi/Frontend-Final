// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// // import Toolbar from '@mui/material/Toolbar';
// // import IconButton from '@mui/material/IconButton';
// // import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import SearchIcon from '@mui/icons-material/Search';


// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));

// export default function SearchAppBar() {
//   const [query, setQuery] = useState('');
//     const [products, setProducts] = useState([]);
//     const [filter, setFilter] = React.useState('jobRole');
//     const [searchStatus,setSearchStatus]=React.useState(false)
//     const handleChange = (event) => {
//       setFilter(event.target.value);
//     };
//    const searchRes = function (){
//     fetch(`http://localhost:8000/job?${filter}=${query}`)
//     .then(response => response.json()
//     .then(data => {
//       setProducts(data.data)
//       console.log(data)
//       if(data.data)setSearchStatus(true)
//       else alert("No Results ")
//     })
//     .catch(err=> console.log(err)));
//      console.log(products);
//    }
//     const HandleSearch = async (event) => {
//       searchRes()
//       event.preventDefault();
//     }
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         {/* <Toolbar> */}
//           {/* <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton> */}
//           {/* <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             MUI
//           </Typography> */}
//           <Search style={{alignContent: 'center'}}>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Search>
//         {/* </Toolbar> */}
//       </AppBar>
//     </Box>
//   );
// }



import React, { useState } from 'react';
import { styled } from '@mui/system';
import {
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';

const StyledCard = styled(Card)({
  minWidth: 275,
  marginBottom: '16px',
});

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
});

const StyledCardActions = styled(CardActions)({
  justifyContent: 'flex-end',
});

const SearchForm = styled('form')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
});

const SearchInput = styled(TextField)({
  marginRight: '16px',
});

function ProductSearch() {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('jobRole');
  const [searchStatus, setSearchStatus] = useState(false);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const searchRes = function () {
    fetch(`http://localhost:8000/jobs?${filter}=${query}`)
      .then((response) =>
        response
          .json()
          .then((data) => {
            setProducts(data.data);
            console.log(data);
            if (data.data) setSearchStatus(true);
            else alert('No Results');
          })
          .catch((err) => console.log(err))
      );
    console.log(products);
  };

  const handleSearch = async (event) => {
    searchRes();
    event.preventDefault();
  };

  return (
    <div className="Search">
      <Typography textAlign="center" variant="h6" gutterBottom>
        Search ...
      </Typography>
      <SearchForm onSubmit={handleSearch}>
        <FormControl>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter}
            label="Filter"
            onChange={handleChange}
          >
            <MenuItem value={'jobRole'}>Job Role</MenuItem>
            <MenuItem value={'experience'}>Experience</MenuItem>
            <MenuItem value={'primarySkills'}>PrimarySkills</MenuItem>
            <MenuItem value={'location'}>Location</MenuItem>
          </Select>
        </FormControl>
        <SearchInput
          variant="outlined"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </SearchForm>
      {searchStatus ? (
        products.map((product, index) => (
          <StyledCard key={index}>
            <StyledCardContent>
              <Typography variant="h6" component="div">
                Job Role: {product.jobRole}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Primary Skills: {product.primarySkills}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Secondary Skills: {product.secondarySkills}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Experience: {product.experience}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Location: {product.location}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Salary: {product.salary}
              </Typography>
            </StyledCardContent>
            <StyledCardActions>
              <Button size="small" color="primary">
                Apply
              </Button>
            </StyledCardActions>
          </StyledCard>
        ))
      ) : null}
    </div>
  );
}

export default ProductSearch;

