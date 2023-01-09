import React, { useState } from "react";
import './Nav.css'
import { assets } from '../../constant'
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Badge, Box, Button, Container, IconButton, Toolbar, Typography, } from "@mui/material";
import SideBar from "../SideBar/SideBar";
const Nav = () => {
    const [show, setShow] = useState(false)

    const handleMenu = () => {
        setShow(true)
    }
    return <Box sx={{ flexGrow: 1, padding: "20px 0px", alignItems: 'center' }} >
        <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: "none", }}>
            <Toolbar>
                <img
                    src={assets.logo}
                    alt="logo"
                >
                    {/* <MenuIcon /> */}
                </img>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex', columnGap: "30px", alignItems: "center" } }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ color: "#444", fontWeight: 500 }}
                        className="nav_text"
                    >
                        Home
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ color: "#444", fontWeight: 500 }}
                        className="nav_text"
                        id="service"
                    >
                        Services
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ color: "#444", fontWeight: 500 }}
                        className="nav_text"
                    >
                        Pricing
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ color: "#444", fontWeight: 500 }}
                        className="nav_text"
                    >
                        About Us
                    </Typography>
                    <Button variant="contained" sx={{ fontSize: '14px', padding: ".8rem 1.2rem", fontWeight: 400, backgroundColor: "#525DED" }}>
                        Start a company
                    </Button>
                </Box>
                <IconButton
                    size="small"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ display: { xs: 'flex', md: 'none' }, color: "#525DED", alignItems: 'center' }}
                    onClick={handleMenu}
                >
                    <MenuIcon style={{ fontSize: "36px" }} />
                </IconButton>

            </Toolbar>
        </AppBar>
        <SideBar setShow={setShow} show={show} />
    </Box>;
};

export default Nav;
