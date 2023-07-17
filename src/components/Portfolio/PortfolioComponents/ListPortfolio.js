import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { MdOutlineDocumentScanner } from 'react-icons/md'
import { BsFillPersonFill , BsFillBriefcaseFill} from 'react-icons/bs'
import { GiSkills } from 'react-icons/gi'
import { BsShareFill } from 'react-icons/bs'



export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <BsFillBriefcaseFill style={{fontSize: '22px',}} />
      </ListItemIcon>
      <ListItemText primary="Jobs" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BsFillPersonFill style={{fontSize: '22px',}} />
      </ListItemIcon>
      <ListItemText primary="Career Profile" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
       <GiSkills style={{fontSize: '22px',}} />
      </ListItemIcon>
      <ListItemText primary="Upskilling" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BsShareFill style={{fontSize: '22px',}} />
      </ListItemIcon>
      <ListItemText primary="Share" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MdOutlineDocumentScanner style={{fontSize: '22px',}} />
      </ListItemIcon>
      <ListItemText primary="MyDocs" />
    </ListItemButton>
  </React.Fragment>
);

