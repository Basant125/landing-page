import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { assets, dedicate } from '../../constant'
import './Dedicated.css'
const Dedicated = () => {
    return <Box sx={{ padding: "3rem 1rem", flexGrow: 1, }} id="#service">
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center">
                <Typography
                    variant="h4"
                    Wrap
                    component="div"
                    sx={{
                        fontSize: { xs: '28px', sm: "32px" },
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
        <Grid container textAlign="center" sx={{ justifyContent: { xs: "center", md: "space-evenly" }, columnGap: "2rem", rowGap: '2rem' }}>
            {
                dedicate?.map((item, index) => (
                    <Grid key={index} item xs={12} sm={12} md={3} lg={3}  >
                        <Box sx={{
                            // minHeight: '200px',
                            maxWidth: "100%",
                            textAlign: { xs: "center", md: "left" },
                            marginBottom: "1.5rem",
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: "10px",
                            alignItems: { xs: "center", md: "flex-start" },
                            justifyContent: "space-between",
                            position: "relative",
                            padding: "14px",
                            borderRadius: "6px",
                        }}
                            className="services_box"
                        >
                            <img src={item.img} alt="dedicated_img" className="dedicated_img" />
                            <Typography
                                variant="h4"
                                Wrap
                                component="div"
                                sx={{
                                    fontSize: { xs: '22px', sm: "26px" },
                                    padding: "1rem 0rem 0rem 0rem",
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
                                    fontSize: { xs: '20px', sm: "22px" },
                                    margin: "5px 0px",
                                    color: "#808e9b",
                                    fontWeight: "500",
                                    minHeight: { xs: '', md: '180px' },
                                }}
                            >
                                {item.description}
                            </Typography>
                            <Button variant="text" sx={{
                                color: "#FFA500",
                                fontSize: { xs: '18px', sm: '24px' },
                                textTransform: "capitalize",
                            }}>Get Started</Button>
                        </Box>
                    </Grid>
                ))
            }

        </Grid>
    </Box >;
};

export default Dedicated;
