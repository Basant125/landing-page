import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { assets, blog, testimonial } from '../../constant';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Footer.css'


const Footer = () => {
    return <Box sx={{ flexGrow: 1, padding: { xs: "2rem 0rem", sm: "8rem 0rem 0rem 0rem" } }}>
        <Grid container sx={{ justifyContent: "center" }} spacing={3}>
            <Grid item md={1} lg={1} sx={{ display: { xs: "none", md: "block" } }}></Grid>
            <Grid item xs={12} sm={12} md={5} lg={5}  >
                <Box className="blog_post">
                    <Box sx={{ display: "flex", columnGap: "1rem" }}>
                        <span className="line"></span>
                        <Typography
                            variant="h6"
                            Wrap
                            sx={{
                                fontSize: { xs: '20px', sm: "24px" },
                                color: "#1e272e",
                                fontWeight: "600",
                                borderLeft: "8px solid #525DED",
                                paddingLeft: "1rem",

                            }}
                        >
                            Satidfied We are When Our
                            Customers Are Happy

                        </Typography>
                    </Box>
                    {
                        blog.map((blog, index) => (
                            <Box className="blog_content" sx={{ width: { xs: "95%", sm: "90%" }, margin: { xs: "1rem 0rem", sm: "2rem 0rem", md: "3rem 0rem" } }}>
                                <Box className="blog_img_box" sx={{ padding: { xs: "0.4rem .8rem ", sm: ".5rem 1rem" } }}>
                                    {/* <img src={assets.vector} className="blog_img" /> */}
                                    <RssFeedIcon className="rss_icon" sx={{ fontSize: { xs: "40px", sm: "60px" } }} />
                                </Box>
                                <Box className="blog_text" >
                                    <Typography
                                        variant="h6"
                                        Wrap
                                        sx={{
                                            fontSize: { xs: '18px', sm: "20px" },
                                            fontWeight: "600",
                                            // maxWidth: '20rem',

                                        }}
                                    >
                                        {blog.heading}

                                    </Typography>
                                    <Typography
                                        variant="span"
                                        Wrap
                                        sx={{
                                            fontSize: { xs: '16px', sm: "20px" },
                                            fontWeight: "500",
                                            color: "#525DED",
                                            padding: ".5rem 0"

                                        }}
                                        className="blog_time"
                                    >
                                        {blog.time}

                                    </Typography>
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
                <Box className="blog_post" sx={{ marginTop: { xs: '1.5rem', sm: "0" } }}>
                    <Box sx={{ display: "flex", columnGap: "1rem" }}>
                        <span className="line"></span>
                        <Typography
                            variant="h6"
                            Wrap
                            sx={{
                                fontSize: { xs: '20px', sm: "24px" },
                                color: "#1e272e",
                                fontWeight: "600",
                                borderLeft: "8px solid #525DED",
                                paddingLeft: "1rem",

                            }}
                        >
                            Read about our blogs for more
                            information on our processes

                        </Typography>
                    </Box>
                    {
                        testimonial.map((comment, index) => (
                            <Box className="comment_content" sx={{ width: { xs: "95%", sm: "90%" }, margin: { xs: "1rem 0rem", sm: "2rem 0rem", md: "3rem 0rem" } }} >
                                <Box className="comment_img_box" sx={{ padding: { xs: "0.4rem 0rem", sm: ".5rem 1rem" } }}>
                                    {/* <img src={assets.vector} className="blog_img" /> */}
                                    <AccountCircleIcon className="comment_icon" sx={{ fontSize: { xs: "30px", sm: "40px" } }} />
                                </Box>
                                <Box className="blog_text">
                                    <Typography
                                        variant="h6"
                                        Wrap
                                        sx={{
                                            fontSize: { xs: '16px', sm: "20px" },
                                            fontWeight: "500",
                                            color: "#1e272e",
                                            // maxWidth: '20rem',
                                            fontFamily: "'Roboto', sans-serif"
                                        }}
                                        className="comment_text"
                                    >
                                        {comment.comment}

                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        Wrap
                                        sx={{
                                            fontSize: { xs: '18px', sm: "20px" },
                                            fontWeight: "700",
                                            color: "#1e272e",
                                            margin: ".5rem 0rem 0rem 0rem"

                                        }}
                                        className="blog_time"
                                    >
                                        - {comment.name}

                                    </Typography>
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
            </Grid>
            <Grid item md={1} lg={1} sx={{ display: { xs: "none", md: "block" } }}></Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} >
                <Box className="address_box">
                    <Box sx={{ display: "flex", columnGap: "1rem" }}>
                        <span className="line"></span>
                        <Typography
                            variant="h6"
                            Wrap
                            sx={{
                                fontSize: { xs: '20px', sm: "24px" },
                                color: "#1e272e",
                                fontWeight: "600",
                                borderLeft: "8px solid #525DED",
                                paddingLeft: "1rem",
                                maxWidth: "26rem"
                            }}
                        >
                            Get to know the whole us and
                            more of our services

                        </Typography>
                    </Box>
                    <Box className="address_services" sx={{ paddingLeft: { xs: '1rem', sm: "2rem" }, paddingTop: "3rem", }}>
                        <Typography
                            variant="h3"
                            Wrap
                            sx={{
                                fontSize: { xs: '20px', sm: "24px" },
                                color: "#1e272e",
                                fontWeight: "700",
                                marginBottom: "1rem"
                            }}
                        >
                            Services

                        </Typography>
                        {
                            ['Products', 'Solutions', 'Assurance', 'FAQ', 'Working at Varal-Singhania'].map(item => (
                                <Typography
                                    variant="h6"
                                    Wrap
                                    sx={{
                                        fontSize: { xs: '16px', sm: "22px" },
                                        color: "#777",
                                        fontWeight: "500",
                                        padding: ".2rem 0rem",
                                        cursor: "pointer",
                                    }}
                                    className="footer_link"
                                >
                                    {item}

                                </Typography>
                            ))
                        }
                    </Box>
                    <Box className="address_services" sx={{ paddingLeft: { xs: '1rem', sm: "2rem" }, paddingTop: "3rem", }}>
                        <Typography
                            variant="h3"
                            Wrap
                            sx={{
                                fontSize: { xs: '20px', sm: "24px" },
                                color: "#1e272e",
                                fontWeight: "700",
                                marginBottom: "1rem"
                            }}
                        >
                            Policies

                        </Typography>
                        {
                            ['Privacy Policy', 'Terms & Conditions'].map(item => (
                                <Typography
                                    variant="h6"
                                    Wrap
                                    sx={{
                                        fontSize: { xs: '16px', sm: "22px" },
                                        color: "#777",
                                        fontWeight: "500",
                                        padding: ".2rem 0rem"
                                    }}
                                    className="footer_link"
                                >
                                    {item}

                                </Typography>
                            ))
                        }
                    </Box>
                    <Box className="address_services" sx={{ paddingLeft: { xs: '1rem', sm: "2rem" }, paddingTop: "3rem", }}>
                        <Typography
                            variant="h3"
                            Wrap
                            sx={{
                                fontSize: { xs: '20px', sm: "24px" },
                                color: "#1e272e",
                                fontWeight: "700",
                                marginBottom: "1rem"
                            }}
                        >
                            About

                        </Typography>
                        {
                            ['About Us', 'Contact Us'].map(item => (
                                <Typography
                                    variant="h6"
                                    Wrap
                                    sx={{
                                        fontSize: { xs: '16px', sm: "22px" },
                                        color: "#777",
                                        fontWeight: "500",
                                        padding: ".2rem 0rem"
                                    }}
                                    className="footer_link"
                                >
                                    {item}

                                </Typography>
                            ))
                        }
                    </Box>
                    <Box className="address_services" sx={{ paddingLeft: { xs: '1rem', sm: "2rem" }, paddingTop: "3rem", }}>
                        <Typography
                            variant="h3"
                            Wrap
                            sx={{
                                fontSize: { xs: '20px', sm: "24px" },
                                color: "#1e272e",
                                fontWeight: "700",
                                marginBottom: "1rem"
                            }}
                        >
                            Address

                        </Typography>
                        {
                            ['608 One Lake Plaza, Cluster T,Al Sarayat Street, Jumeirah Lake Towers', ' Dubai', 'United Arab Emirates'].map(item => (
                                <Typography
                                    variant="h6"
                                    Wrap
                                    sx={{
                                        fontSize: { xs: '16px', sm: "22px" },
                                        color: "#777",
                                        fontWeight: "500",
                                        padding: ".2rem 0rem"
                                    }}
                                >
                                    {item}

                                </Typography>
                            ))
                        }
                        <Box sx={{ marginTop: "2rem" }}>
                            {
                                ['Office Hours: Sunday to Thursday 8:30 AM to 6:30 PM [GMT+4]', 'M: +971 55 794 2016', 'O: +971 4 447 2061'].map(item => (
                                    <Typography
                                        variant="h6"
                                        Wrap
                                        sx={{
                                            fontSize: { xs: '16px', sm: "22px" },
                                            color: "#777",
                                            fontWeight: "500",
                                            padding: ".2rem 0rem"
                                        }}
                                    >
                                        {item}

                                    </Typography>
                                ))
                            }
                        </Box>
                    </Box>
                    <Box className="address_services" sx={{ paddingLeft: { xs: '1rem', sm: "2rem" }, paddingTop: "3rem", }}>
                        <Typography
                            variant="h3"
                            Wrap
                            sx={{
                                fontSize: { xs: '20px', sm: "24px" },
                                color: "#1e272e",
                                fontWeight: "700",
                                marginBottom: "1rem"
                            }}
                        >
                            Subscribe Now

                        </Typography>

                        <Typography
                            variant="h6"
                            Wrap
                            sx={{
                                fontSize: { xs: '16px', sm: "22px" },
                                color: "#777",
                                fontWeight: "600",
                                padding: ".2rem 0rem"
                            }}
                        >
                            Sunbscribe now to receive our
                            Newsletters about amazing
                            opportunities in Dubai

                        </Typography>
                        <Box className="contact_email_box">
                            <input type="text" placeholder="Enter email address" />
                            <img src={assets.group34} style={{ cursor: "pointer" }} />
                        </Box>
                        <Box className="social_media">
                            <img src={assets.facebook} className="social_icon" />
                            <img src={assets.Insta} className="social_icon" />
                            <img src={assets.Linkdin} className="social_icon" />
                            <img src={assets.Youtube} className="social_icon" />
                        </Box>
                    </Box>
                    {/* Bottom Footer */}

                </Box>
            </Grid>
        </Grid>
        <Box sx={{
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            padding: { xs: "1rem 0rem", sm: "2rem 0rem" },
            margin: "3rem 0rem 0rem "
        }}>
            <Typography
                variant="h6"
                Wrap
                sx={{
                    fontSize: { xs: '18px', sm: "22px" },
                    color: "#777",
                    fontWeight: "600",

                }}
            >
                Varaluae 2021 C All Right Reserved
            </Typography>
        </Box>
    </Box>;
};

export default Footer;
