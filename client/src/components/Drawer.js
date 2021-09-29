import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Checkbox from '@mui/material/Checkbox';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import TitleIcon from '@mui/icons-material/Title';
import LightModeIcon from '@mui/icons-material/LightMode';

const useStyles = makeStyles({
  root: {
    width: 500,

  },
  list: {
    width: 250,
    marginLeft: '3vw',
    height: 'auto'
  },
  fullList: {
    width: 'auto',

  },
  paper: {
    background: 'transparent',
    flexShrink: 0,
    marginTop: '29.3vh',
    maxHeight: '40vh',
    border: "none"
  },
  icons: {
    paddingLeft: '20px',
    paddingTop: '20px',
    fontSize: '50px'
  }


});

function PersistDrawer({ setPlants, plants }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [openTwo, setOpenTwo] = React.useState(false);
  const [openThree, setOpenThree] = React.useState(false);
  const [openPrice, setOpenPrice] = React.useState(false);
  const [checkAlpha, setCheckAlpha] = React.useState(false);
  const [checkDesc, setCheckDesc] = React.useState(false);
  
  const originalPlants = [...plants]

  console.log(originalPlants)

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickThree = () => {
    setOpenThree(!openThree);
  };

  const handleClickTwo = () => {
    setOpenTwo(!openTwo);
  };


  function descSort() {
    setPlants(originalPlants)
    let descPlants = plants.sort((a, b) => b.name.localeCompare(a.name))
    setPlants(descPlants)
  }
  function alphaSort() {
    setPlants(originalPlants)
    let alpha = plants.sort((a, b) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    })

    setPlants(alpha)
  }

  function sortPrice() {
    setPlants(originalPlants)
    const price = plants.sort((a, b) => a.price.toString().localeCompare(b.price.toString()))
    setPlants(price)
  }

  function sortPriceHigh() {
    setPlants(originalPlants)
    const price = plants.sort((a, b) => b.price.toString().localeCompare(a.price.toString()))
    setPlants(price)
  }

  function sortLowLight() {
    const newPlants = plants.filter(plant => plant.lighting === 'Low')
    setPlants(newPlants)
  }
 


  return (
    <div style={{ marginTop: '37vh', height: '30vh', position: 'absolute', zIndex: '1', width: '15%' }}>
      <Box style={{ position: 'relative', height: '30vh' }}>

        <List

          sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleClickTwo}>
            <ListItemIcon>
              <TitleIcon />
            </ListItemIcon>
            <ListItemText primary="Name" />
            {openTwo ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openTwo} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    onChange={() => alphaSort()}
                    tabIndex={-1}
                    disableRipple
                    onClick={() => setCheckAlpha(!checkAlpha)}
                    checked={checkAlpha}
                  // inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText primary="Ascending" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    onChange={() => descSort()}
                    tabIndex={-1}
                    disableRipple
                    onClick={() => setCheckDesc(!checkDesc)}
                    checked={checkDesc}
                  // inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText primary="Descending" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <PriceChangeIcon />
            </ListItemIcon>
            <ListItemText primary="Price" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    onChange={() => sortPrice()}
                    tabIndex={-1}
                    disableRipple
                    onClick={() => setOpenPrice(!openPrice)}
                    checked={openPrice}
                  // inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText primary="Low-High" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    onChange={() => sortPriceHigh()}
                    tabIndex={-1}
                    disableRipple
                    onClick={() => setCheckDesc(!checkDesc)}
                    checked={checkDesc}
                  // inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText primary="High-Low" />
              </ListItemButton>

            </List>
          </Collapse>

          <ListItemButton onClick={handleClickThree}>
            <ListItemIcon>
              <LightModeIcon />
            </ListItemIcon>
            <ListItemText primary="Lighting" />
            {openThree ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openThree} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    onChange={() => sortLowLight()}
                    tabIndex={-1}
                    disableRipple
                    onClick={() => setOpenPrice(!openPrice)}
                    checked={openPrice}
                  // inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText primary="Low Light" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    onChange={() => sortPriceHigh()}
                    tabIndex={-1}
                    disableRipple
                    onClick={() => setCheckDesc(!checkDesc)}
                    checked={checkDesc}
                  // inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText primary="High-Low" />
              </ListItemButton>

            </List>
          </Collapse>
        </List>



        {/* <List className={classes.list}>

          <Divider />
          <CustomListItem to="/login" primary="Login" color="secondary" />
          <Divider />
          <CustomListItem to="/signup" primary="Signup" />
          <Divider />
          <CustomListItem to="/exercises" primary="Plants" />
          <Divider />
          <CustomListItem to="/pricing" primary="Pricing" />
          <Divider />
          <CustomListItem to="/userdashboard" primary="User Dashboard" />
          <Divider />



        </List>
        <br />
        <Button variant='outlined' style={{background: '#fcf9f3', width: '18vw', height: '6vh', marginLeft: '3vw', color: '#224229'}}>Clear Filters</Button> */}



      </Box>
    </div>
  )
}

export default PersistDrawer;