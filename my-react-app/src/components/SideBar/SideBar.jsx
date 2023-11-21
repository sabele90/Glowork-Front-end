import { useState } from "react";
import "./SideBar.css";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import StarIcon from '@mui/icons-material/Star';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function SideBar() {
  const [open, setOpen] = useState(false); // State variable we will use to determine if the drawer is open or not.

  const toggleDrawer = (open) => (event) => {
    // Function in charge of changing the state
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return; //If the event is a keydown, a Tab or a Shift, we exit the function without changing the drawer's state
    }
    setOpen(open); // Change the state variable from 'true' to 'false', or vice versa
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)} // If we click on the drawer's empty space or press any key, the drawer closes
      onKeyDown={toggleDrawer(false)}
    >
     
      <List>
        {["Profile","Inbox", "Favorites", "Reviews"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                 <AccountCircleIcon/> 
                
          
                ) : (
                  <>
                    {text === "Inbox" ? <MailIcon /> : null}
                    {text === "Favorites" ? <StarIcon /> : null}
                    {text === "Reviews" ? <MailIcon /> : null}
                  </>
              
              
              )}


              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </Box>
    
  );

  return (
    <div>
      <Button  onClick={toggleDrawer(true)}>Menu</Button>
      <SwipeableDrawer
        anchor="left"
        open={open} // Depends on the state variable
        onClose={toggleDrawer(false)} //  When the 'open' prop is 'false', set the state variable to 'false'
        onOpen={toggleDrawer(true)} //  When the 'open' prop is 'true', set the state variable to 'true'
      >
        {list()} {/*Render the list of options*/}
      </SwipeableDrawer>
    </div>
  );
}

export default SideBar;