import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import './Header.css'
import { assets } from '../../constant';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
    return <Box>
        <Grid container sx={{ justifyContent: { xs: "center", sm: "flex-end" }, padding: "2rem 1rem" }}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <Box className="search_box" >
                    <SearchIcon sx={{ color: "#525DED", fontSize: "36px" }} />
                    <input placeholder="Search a Term | Topic" style={{ width: "100%" }} />
                </Box>
            </Grid>
        </Grid>
        <Grid container sx={{ padding: "3rem 1rem", }} >
            <Grid item xs={12} sm={12} md={6} lg={6} className="home_content" textAlign={{ xs: "center", sm: "left" }}>
                <span>Claim a Free Quote</span>
                <Typography
                    variant="h1"
                    Wrap
                    component="div"
                    sx={{
                        fontSize: { xs: '40px', sm: "60px" },
                        margin: "16px 0px 20px 0px",
                        color: "#1e272e",
                        fontWeight: "700",

                    }}
                >
                    <span style={{ borderBottom: "10px solid #FFA500", display: "inline-block", marginBottom: "3px" }}>Get started </span> on fulfilling
                    your Dubai or UAE
                    dream.</Typography>
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <img src={assets.homeImg} className="home_img" />
                </Box>
                <span>UAE & Offshore Company</span>
                <p >We provide you with information about UAE or
                    Offshore Company Registration & help you
                    setup your company with a bank account and
                    visas.</p>
                <Box className="btn_group" sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-start" } }}>
                    <Button variant="contained" className="btn_color" sx={{ fontSize: { xs: "14px", sm: "16px" } }}>Start a Company</Button>
                    <Button variant="outlined" className="btn" sx={{ fontSize: { xs: "14px", sm: "16px" } }}>Renew a Company</Button>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                <img src={assets.homeImg} className="home_img" />
            </Grid>
        </Grid>
        <Grid container >
            <Grid item xs={12} sm={12} md={12} lg={12}
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: "center",
                    alignItems: 'center',
                    columnGap: "20px", padding: "1rem 1rem ",
                    textAlign: { xs: 'center', md: "left" }
                }}>
                <Typography
                    variant="span"
                    Wrap
                    component="div"
                    sx={{
                        fontSize: { xs: '18px', sm: "24px" },
                        margin: "10px 0px",
                        color: "#525DED",
                        fontWeight: "500",

                    }}
                >
                    Watch the video about UAE or Offshore Company Registration

                </Typography>
                <PlayCircleIcon className="video_icon" style={{ fontSize: "40px" }} />
            </Grid>
            {/* <Grid item xs={12} sm={6} md={6} lg={6} sx={{ textAlign: { xs: 'center', sm: "left" } }}>
                <PlayCircleIcon className="video_icon" />
            </Grid> */}
        </Grid>
    </Box>
};

export default Header;
