import { Button, Divider, Drawer, IconButton, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import './SideBar.css'
const SideBar = ({ show, setShow }) => {
    const handleDrawerToggle = () => {
        setShow(!show);
    };

    const handleClose = () => {
        setShow(false)
    }
    const drawer = (
        <Box className="sidebar_content">
            <Box sx={{ position: "absolute", top: "10px", right: "20px", }}>
                <CloseIcon className="close" style={{ color: "#525DED", cursor: "pointer" }} onClick={handleClose} />
            </Box>
            <Box sx={{ margin: "3rem 0rem 0 0" }}>
                <IconButton className="sidebar_link active" >
                    Home
                </IconButton>
                <IconButton className="sidebar_link active">
                    Services
                </IconButton>
                <IconButton className="sidebar_link active">

                    Pricing

                </IconButton>
                <IconButton className="sidebar_link active">

                    About Us

                </IconButton>
                <Button className="side_btn" variant="contained" sx={{ fontSize: '14px', padding: ".8rem 1.2rem", fontWeight: 400, backgroundColor: "#525DED", }}>
                    Start a company
                </Button>
            </Box>
        </Box>
    )

    return <Box className="sidebar">
        <Drawer
            // container={container}
            variant="temporary"
            open={show}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{

                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 230 },
            }}
        >{drawer}</Drawer>
    </Box>;
};

export default SideBar;
