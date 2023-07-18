import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeRounded from '@mui/icons-material/HomeRounded'
import Person from '@mui/icons-material/Person'
import { MdWork } from 'react-icons/md'



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
    <ListItemButton href= "/JobSearch">
      <ListItemIcon>
        <MdWork/>
      </ListItemIcon>
      <ListItemText primary="Job Search" />
    </ListItemButton>
    <ListItemButton>
      {/* <ListItemIcon>
        <MdRoomPreferences/>
      </ListItemIcon> */}
      {/* <ListItemText primary="Preferences" /> */}
    </ListItemButton>
  </React.Fragment>
);

