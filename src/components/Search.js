// import React,{useState } from 'react';
// import { styled , withStyles } from '@mui/system';
// import Table from '@material-ui/core/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import {TextField, Typography} from '@mui/material'
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import TableContainer from '@mui/material/TableContainer';


// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 24,
//   },
// }))(TableCell);
// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover
//     },
//   },
// }))(TableRow);
// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });



// function ProductSearch() {
//   const [query, setQuery] = useState('');
//   const [products, setProducts] = useState([]);
//   const [filter, setFilter] = React.useState('jobRole');
//   const [searchStatus,setSearchStatus]=React.useState(false)
//   const handleChange = (event) => {
//     setFilter(event.target.value);
//   };
//  const searchRes = function (){
//   fetch(`http://localhost:8000/job?${filter}=${query}`)
//   .then(response => response.json()
//   .then(data => {
//     setProducts(data.data)
//     console.log(data)
//     if(data.data)setSearchStatus(true)
//     else alert("No Results ")
//   })
//   .catch(err=> console.log(err)));
//    console.log(products);
//  }
//   const HandleSearch = async (event) => {
//     searchRes()
//     event.preventDefault();
//   }
//  const classes = useStyles();
//   return (
//     <div className = "Search">
//           <form onSubmit={HandleSearch}>
//           <Typography textAlign="center" variant="h6" gutterBottom>
//           Search ...
//       </Typography>
//       <FormControl >
//         <InputLabel id="demo-simple-select-label">Filter</InputLabel>
//         <Select
//     labelId="demo-simple-select-label"
//     id="demo-simple-select"
//     value={filter}
//     label="Filter"
//     onChange={handleChange}
//   >
//     <MenuItem value={"jobRole"}>Job Role</MenuItem>
//     <MenuItem value={"experience"}>Experience</MenuItem>
//     <MenuItem value={"primarySkills"}>PrimarySkills</MenuItem>
//     <MenuItem value={"location"}>Location</MenuItem>
//     {/* <MenuItem value={"educationLevel"}>Education</MenuItem> */}
//   </Select>
//   </FormControl>
//           <TextField id="outlined-basic"
//            variant="outlined"
//            value={query} onChange={(e) => setQuery(e.target.value)} />
//             {/* <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} /> */}
//             <button type="submit">Search</button>
//   {
//     searchStatus? 
    
    
    
    
    
//     <TableContainer component={Paper}>
//     <Table className={classes.table} aria-label="customized table">
//       <TableHead>
//         <TableRow>
//           <StyledTableCell align="right">Job Role</StyledTableCell>
//           <StyledTableCell align="right">PrimarySkills</StyledTableCell>
//           <StyledTableCell align="right">SecondarySkills</StyledTableCell>
//           <StyledTableCell align="right">Experience</StyledTableCell>        
//           <StyledTableCell align="right">Location</StyledTableCell>
//           <StyledTableCell align="right">Salary</StyledTableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//       {products?.map((product ,index)  => (
//           <StyledTableRow key={index}>
         
//             <StyledTableCell align="right">{product.jobRole}</StyledTableCell>
//             <StyledTableCell align="right">{product.primarySkills}</StyledTableCell>
//             <StyledTableCell align="right">{product.secondarySkills}</StyledTableCell>
//             <StyledTableCell align="right">{product.experience}</StyledTableCell>
//             <StyledTableCell align="right">{product.location}</StyledTableCell>
//             <StyledTableCell align="right">{product.salary }</StyledTableCell>
//           </StyledTableRow>
//          ))}
//       </TableBody>
//     </Table>
//   </TableContainer>:null
//   }
//           </form>
//     </div>
//   );
// }
// export default ProductSearch









