import React  from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
// import baseurl from '../../../baseURL/config'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { educationLevels, authorities, discipline } from '../../../constraints/arrays'
import MenuItem from '@mui/material/MenuItem'
import { RiCloseCircleFill } from 'react-icons/ri'



const modalWrapper = {

    position: 'fixed',
    left: '0',
    right: '0',
    bottom: '0',
    top: '0',
    backgroundColor: 'rgba(189 , 189 , 189 , 0.9)'
}

const modalContainer = {

    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50% , -50%)',
    maxWidth: '45rem',
    backgroundColor: '#fff',
    AlignItems: 'center',
    borderRadius: '0.5rem'
}

const feild = {

    width: '40rem',
    AlignItems: 'center',
    marginTop: '18px',
    margin: '18px',


}

const save = {
    float: 'left',
    margin: '20px'
}

const cancel = {
    float: 'right',
    margin: '20px',
    cursor: 'pointer'
}








const EducationPortfolio = (props) => {

    const Navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("userDetails"))

    if (!user) Navigate("/login")

    // const [eduData, setEduData] = useState([])

    // useEffect(() => {
    //     fetch("http://localhost:8000/education/6419c8f3b7e34600920c71e9").then((resultEdu) => (
    //         resultEdu.json().then((respEdu) => {
    //             console.log("result", respEdu)
    //             setEduData(respEdu)
    //         })
    //     ))
    // }, [])

    // console.log("Education", eduData)

    // function getEducationList() {
    //     fetch("http://localhost:8000/education").then((result) => (
    //         result.json().then((resp) => {
    //             setEduData(resp)
    //         })
    //     ))
    // }

    // function deleteEducation(id) {
    //     fetch(`http://localhost:8000/education/6419c8f3b7e34600920c71e9/${id}`,{
    //         method: 'DELETE'
    //     }).then((result) =>{
    //         result.json().then((resp) => {
    //             console.log(resp)
    //             getEducationList()
    //         })
    //     })
    // }







    return (


        <div style={modalWrapper}>

            <div style={modalContainer} >

              
                    <div style={feild}>

                        <button style={{ float: 'right', border: 'none', backgroundColor: 'transparent' }} onClick={() => props.EditEducationInfo(false)} ><RiCloseCircleFill style={{ fontSize: '23px', color: 'rgb(22 102 197)' }} /></button>


                        <FormControl sx={{ m: 3, width: 600 }}>
                            <InputLabel>Education Level</InputLabel>
                            <Select
                                label="EducationLevel"
                                required
                                input={<OutlinedInput label="Education Level" />}
                            >
                                {educationLevels.map((educationLevel) => (
                                    <MenuItem
                                        key={educationLevel}
                                        value={educationLevel}
                                    >
                                        {educationLevel}
                                    </MenuItem>
                                ))}

                            </Select>
                        </FormControl>



                        <Box
                            mb={1}
                            sx={{ m: 3, width: 600 }}
                        >
                            <TextField fullWidth label="Degree Name"

                                name="degreeName"
                                // value={eduData.data?.degreeName}
                                id="fullWidth"
                            />
                        </Box>



                        <Box
                            mb={1}
                            sx={{ m: 3, width: 600 }}
                        >
                            <TextField fullWidth label="College Name" id="fullWidth"
                                name="collegeName"
                            // value={eduData.data?.collegeName}
                            />
                        </Box>



                        <FormControl sx={{ m: 3, width: 600 }}>
                            <InputLabel>Authority</InputLabel>
                            <Select

                                name="authority"
                                label="Authority"
                                // value={eduData.data?.authority}
                                input={<OutlinedInput label="Authority" />}
                                required
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {authorities.map((authority) => (
                                    <MenuItem
                                        key={authority}
                                        value={authority}
                                    >
                                        {authority}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl sx={{ m: 3, width: 600 }}>
                            <InputLabel>Discipline</InputLabel>
                            <Select
                                variant="outlined"
                                label="Discipline"
                                name="discipline"
                                // value={eduData.data?.discipline}


                                input={<OutlinedInput label="Discipline" />}
                                required
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {discipline.map((disciplines, i) => (
                                    <MenuItem
                                        key={i}
                                        value={disciplines}
                                    >
                                        {disciplines}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>


                        <Box
                            mb={1}
                            sx={{ m: 3, width: 600 }}>
                            <TextField
                                variant="outlined"
                                label="Start Year"
                                name='startYear'
                                // value={eduData.data?.startYear}
                                type="date"
                                fullWidth
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }}

                            />
                        </Box>


                        <Box mb={1}
                            sx={{ m: 3, width: 600 }}><TextField
                                variant="outlined"
                                label="End Year"
                                name="endYear"
                                // value={eduData.data?.endYear}
                                type="date"
                                fullWidth
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            /></Box>



                        <Button variant="contained" style={save} >Update</Button>



                        <Button variant="contained" style={cancel}>delete</Button>

                    </div>

               

                <br />

            </div>

        </div>
    )
}

export default EducationPortfolio