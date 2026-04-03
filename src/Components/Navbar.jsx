import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { SiBookstack } from "react-icons/si";
import { FcAbout } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";
import { FcBusinessContact } from "react-icons/fc";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, Box, ListItemText } from '@mui/material';


function Navbar() {
  const[open,setOpen]= useState(false)

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);

  };
  return (
    <>
    <nav className='flex justify-between bg-gradient-to-l bg-black from-green-700 justify-items-center p-5 text-white'>
        <h1 className='text-white text-3xl'>Vector.</h1>
       <div className='hidden md:block'>
       <div className='flex gap-9 '>
            <NavLink className={"hover:text-cyan-500 text- xl hover:bg-white font-mono rounded-md hover:p-1.5 font-bold"} to={"/"}>Home</NavLink>
            <NavLink className={"hover:text-cyan-500 text- xl hover:bg-white font-mono rounded-md hover:p-1.5 font-bold"} to={"/aboutus"}>About us</NavLink>
            <NavLink className={"hover:text-cyan-500 text- xl hover:bg-white font-mono rounded-md hover:p-1.5 font-bold"} to={"/courses"}>Courses</NavLink>
            <NavLink className={"hover:text-cyan-500 text- xl hover:bg-white font-mono rounded-md hover:p-1.5 font-bold"} to={"/Contactus"}>Contact Us</NavLink>
            <NavLink className={"hover:text-cyan-500 text- xl hover:bg-white font-mono rounded-md hover:p-1.5 font-bold"} to={"/Cart"}><FaShoppingCart className='text-2xl' /></NavLink>
        </div>
       </div>
        <div className='md:hidden block'>
          <FaBarsStaggered style={{fontSize:"30px"}} onClick={toggleDrawer(true)} />
          </div>
        </nav>

          <Drawer open={open} onClose={toggleDrawer(false)}>
            <Box sx={{ width:250, textAlign:"left"}}>
              <List>
                <ListItem>
                  <Link to={"/"}>
                  <ListItemButton>
                    <ListItemIcon>
                    <FaHome style={{fontSize:"30px"}} />
                    </ListItemIcon>
                    <ListItemText primary="HOME" />
                  </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={"/courses"}>
                  <ListItemButton>
                    <ListItemIcon>
                    <SiBookstack style={{fontSize:"30px"}}/>
                    </ListItemIcon>
                    <ListItemText primary="COURSES"/>
                  </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={"/aboutus"}>
                  <ListItemButton>
                    <ListItemIcon>
                    <FcAbout style={{fontSize:"30px"}}/>
                    </ListItemIcon>
                    <ListItemText primary="ABOUT US"/>
                  </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={"/Contactus"}>
                  <ListItemButton>
                    <ListItemIcon>
                    <FcBusinessContact style={{fontSize:"30px"}}/>
                    </ListItemIcon>
                    <ListItemText primary="CONTACT US"/>
                  </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={"/Cart"}>
                  <ListItemButton>
                    <ListItemIcon>
                    <FaShoppingCart style={{fontSize:"30px"}}/>
                    </ListItemIcon>
                    <ListItemText primary="My Cart"/>
                  </ListItemButton>
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Drawer>

    </>
    

  )
}

export default Navbar