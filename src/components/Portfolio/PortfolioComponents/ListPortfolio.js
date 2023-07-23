import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeRounded from '@mui/icons-material/HomeRounded'
import Person from '@mui/icons-material/Person'
import { MdWork } from 'react-icons/md'

// import { MdOutlineDocumentScanner } from 'react-icons/md'
import { BsFillPersonFill , BsFillBriefcaseFill} from 'react-icons/bs'
// import { GiSkills } from 'react-icons/gi'
// import { BsShareFill } from 'react-icons/bs'

export const mainListItems = (
  <React.Fragment>

<ListItemButton href='/'>
      <ListItemIcon>
        <HomeRounded />
      </ListItemIcon>
      <ListItemText  primary="Home" />
    </ListItemButton>
    <ListItemButton href="/Portfolio">
      <ListItemIcon>
        <Person />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>   
    <ListItemButton href = "/TalentRecommendationsItems">
      <ListItemIcon>
        <BsFillBriefcaseFill style={{fontSize: '22px',}} />
      </ListItemIcon>
      <ListItemText primary="Jobs" />
    </ListItemButton>
    
  </React.Fragment>
);

