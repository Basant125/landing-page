import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { assets, dedicate } from '../../constant'
import './Dedicated.css'
const Dedicated = () => {
    return <Box sx={{ padding: "3rem 1rem", flexGrow: 1, }} >
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center">
                <Typography
                    variant="h4"
                    Wrap
                    component="div"
                    sx={{
                        fontSize: { xs: '24px', sm: "32px" },
                        margin: "10px 0px",
                        color: "#1e272e",
                        fontWeight: "600",

                    }}
                >
                    <span style={{ borderBottom: "10px solid #FFA500", lineHeight: '60px ' }}> Dedicated</span><br />
                    to our mission we are

                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center">
                <Typography
                    variant="p"
                    Wrap
                    component="div"
                    sx={{
                        fontSize: { xs: '18px', sm: "24px" },
                        margin: "10px 0px",
                        color: "#808e9b",
                        fontWeight: "500",
                        width: { xs: '90%', md: "50%" },
                        margin: "1rem auto 4rem auto",

                    }}
                >
                    Our services include Company Formation & Renewals,
                    Trust & Fiduciary, Tax Residency Setup With Family, Bank
                    Accounts, Remote Management, Stock Trading
                    Platforms, Ownership Solutions.

                </Typography>
            </Grid>
        </Grid>
        <Grid container textAlign="center" sx={{ justifyContent: { xs: "center", md: "space-between" }, columnGap: "2rem", rowGap: '2rem' }}>
            {
                dedicate?.map((item, index) => (
                    <Grid key={index} item xs={12} sm={12} md={3} lg={3} sx={{ minHeight: '200px', maxWidth: "240px", textAlign: { xs: "center", md: "left" } }} >
                        <img src={item.img} alt="dedicated img" />
                        <Typography
                            variant="h4"
                            Wrap
                            component="div"
                            sx={{
                                fontSize: { xs: '16px', sm: "24px" },
                                margin: "10px 0px",
                                color: "#1e272e",
                                fontWeight: "600",

                            }}
                        >
                            {item.name}

                        </Typography>
                        <Typography
                            variant="p"
                            Wrap
                            component="div"
                            sx={{
                                fontSize: { xs: '14px', sm: "18px" },
                                margin: "10px 0px",
                                color: "#808e9b",
                                minHeight: { xs: '40px', md: "90px" },
                                fontWeight: "500",

                            }}
                        >
                            {item.description}
                        </Typography>
                        <Button variant="text" sx={{ color: "#FFA500", fontSize: '24px', textTransform: "capitalize" }}>Get Started</Button>
                    </Grid>
                ))
            }

        </Grid>
    </Box>;
};

export default Dedicated;
