import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { assets } from '../../constant'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Details.css'
const Details = () => {
    return <Box sx={{ flexGrow: 1, margin: "1rem" }}>
        <Grid container spacing={{ xs: 1, md: 8 }} >
            <Grid item lg={1} sx={{ display: { md: 'none', lg: "block" } }}></Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} >
                <Box sx={{ marginBottom: { xs: '0rem', md: "12rem" } }}>
                    <Box sx={{ padding: { xs: "0rem 0rem .5rem 0rem", sm: "0rem 0rem 4rem 0rem" }, textAlign: { xs: "center", sm: "left" } }}>
                        <Typography
                            variant="p"
                            Wrap
                            component="div"
                            sx={{
                                fontSize: { xs: '22px', sm: "28px" },
                                // padding: { xs: "0rem 0rem 3rem 0rem", sm: "0rem 0rem 1rem 0rem" },
                                color: "#444",
                                fontWeight: "700",

                            }}
                        >
                            Learn the ways in which you can benefit
                            from a UAE/Offshore Company. Then get
                            started on fulfilling your UAE dream.

                        </Typography>
                        <Button variant="text" sx={{ color: "#525DED", fontSize: { xs: '20px', sm: "24px" }, textTransform: "capitalize" }}>Claim a Free Quote</Button>
                    </Box>
                    <Box sx={{ margin: '2rem 0rem', padding: "2rem", border: "1px solid #ccc", borderRadius: "8px" }}>
                        <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", padding: "3rem 0rem 4rem 0rem", }}>
                            <img src={assets.Group1} style={{ textAlign: 'center' }} />
                        </Box>
                        <Typography
                            variant="h4"
                            Wrap
                            component="div"
                            sx={{
                                fontSize: { xs: '22px', sm: "24px" },
                                margin: "10px 0px",
                                color: "#1e272e",
                                fontWeight: "600",

                            }}
                        >
                            Bank Account Setup
                        </Typography>
                        <Typography
                            variant="p"
                            Wrap
                            component="div"
                            sx={{
                                fontSize: { xs: '18px', sm: "22px" },
                                padding: "1.5rem 0rem",
                                color: "#777",
                                fontWeight: "600",

                            }}
                        >
                            There are many banks in the United
                            Arab Emirates [UAE]. Both locally
                            owned and branches of
                            multinational ones. Foreign banks
                            adjust according to their parent s
                            strategies and have changed local
                            requirements overnight in the past.
                            But we are here to help you.
                        </Typography>
                        <Button className="learn_btn" sx={{ fontSize: "22px" }}>Learn More <ArrowForwardIcon /></Button>
                    </Box>
                </Box>
                <Box sx={{ display: { xs: 'none', md: "block" } }}>
                    <Box sx={{ margin: '2rem 0rem', padding: "2rem", border: "1px solid #ccc", borderRadius: "8px" }}>
                        <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", padding: "3rem 0rem 4rem 0rem", }}>
                            <img src={assets.Group2} />
                        </Box>

                        <Typography
                            variant="h4"
                            Wrap
                            component="div"
                            sx={{
                                fontSize: { xs: '22px', sm: "24px" },
                                margin: "10px 0px",
                                color: "#1e272e",
                                fontWeight: "600",

                            }}
                        >
                            UAE Company Visas
                        </Typography>
                        <Typography
                            variant="p"
                            Wrap
                            component="div"
                            sx={{
                                fontSize: { xs: '18px', sm: "22px" },
                                padding: "1.5rem 0rem",
                                color: "#777",
                                fontWeight: "600",
                                height: "14rem"

                            }}
                        >
                            Your application for visas is critical
                            especially if you intend to move to
                            Dubai. This becomes even more
                            urgent if your family will also move
                            with you. All the paperwork is done
                            on your behalf smoothly so that you
                            may only focus on doing what
                            matters most to you.
                        </Typography>

                        <Button className="learn_btn" sx={{ fontSize: "22px" }} >Learn More <ArrowForwardIcon /></Button>
                    </Box>
                </Box>
            </Grid>
            <Grid item lg={2} sx={{ display: { md: 'none', lg: "block" } }}></Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box sx={{ marginBottom: { xs: '0rem', md: "12rem" } }}>
                    <Box sx={{ margin: '2rem 0rem', padding: "2rem", border: "1px solid #ccc", borderRadius: "8px" }}>
                        <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", padding: "3rem 0rem 4rem 0rem", }}>
                            <img src={assets.Group3} />
                        </Box>
                        <Typography
                            variant="h4"
                            Wrap
                            component="div"
                            sx={{
                                fontSize: { xs: '22px', sm: "24px" },
                                margin: "10px 0px",
                                color: "#1e272e",
                                fontWeight: "600",

                            }}
                        >
                            Advice & Guidance
                        </Typography>
                        <Typography
                            variant="p"
                            Wrap
                            component="div"
                            sx={{
                                fontSize: { xs: '18px', sm: "22px" },
                                padding: "1.5rem 0rem",
                                color: "#777",
                                fontWeight: "600",

                            }}
                        >
                            All activities in the UAE are licensed.
                            Whether manufacturing, finance,
                            trading, marketing, consultancy or
                            restaurants. In some countries only
                            manufacturing is licensed. In others
                            there is a threshold below which
                            business are encouraged. Get our
                            insightfull guidance today.
                        </Typography>
                        <Button className="learn_btn" sx={{ fontSize: "22px" }}>Learn More <ArrowForwardIcon /></Button>
                    </Box>
                </Box>
                <Box>
                    <Box sx={{ margin: '2rem 0rem', padding: "2rem", border: "1px solid #ccc", borderRadius: "8px", display: { xs: 'none', md: "block" } }} >
                        <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", padding: "3rem 0rem 4rem 0rem", }}>
                            <img src={assets.Group4} />
                        </Box>
                        <Typography
                            variant="h4"
                            Wrap
                            component="div"
                            sx={{
                                fontSize: { xs: '22px', sm: "24px" },
                                margin: "10px 0px",
                                color: "#1e272e",
                                fontWeight: "600",

                            }}
                        >
                            Registration Document
                            Perparation
                        </Typography>
                        <Typography
                            variant="p"
                            Wrap
                            component="div"
                            sx={{
                                fontSize: { xs: '18px', sm: "22px" },
                                padding: "1.5rem 0rem",
                                color: "#777",
                                fontWeight: "600",

                            }}
                        >
                            Several documents must be
                            prepared to start the process of
                            registering a new company in the
                            United Arab Emirates. Be it a Dubai
                            local company, a free zone one or an
                            offshore entity. Your registered
                            agent is dedicated to get this done
                            for you for a seamless process.
                        </Typography>
                        <Button className="learn_btn" sx={{ fontSize: "22px" }}>Learn More <ArrowForwardIcon /></Button>
                    </Box>
                    <Typography
                        variant="p"
                        Wrap
                        component="div"
                        sx={{
                            fontSize: { xs: '22px', sm: "28px" },
                            margin: "10px 0px",
                            color: "#1e272e",
                            fontWeight: "600",

                        }}
                    >
                        We have gathered a team of
                        professionals to craft adequate
                        services you can rely on for a friction
                        free setup in UAE.

                    </Typography>
                    <Button className="learn_btn" sx={{ fontSize: { xs: "18px", sm: "22px" } }} >More about our services<ArrowForwardIcon /></Button>
                </Box>
            </Grid>
            <Grid item sx={{ display: { md: 'none', lg: "block" } }} lg={1}></Grid>
        </Grid>
    </Box>;
};

export default Details;
