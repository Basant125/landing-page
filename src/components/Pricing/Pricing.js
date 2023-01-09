import { Button, Grid, Typography } from "@mui/material";
import { Box, color, padding } from "@mui/system";
import React from "react";
import { pricing, assets } from '../../constant';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './Pricing.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
const Pricing = () => {
    return <Box sx={{ paddingBottom: "3rem" }}>
        <Typography
            variant="h4"
            Wrap
            component="div"
            sx={{
                fontSize: "30px",
                color: "#1e272e",
                fontWeight: "600",
                textAlign: "center",
                maxWidth: "600px",
                margin: "0px auto",
                padding: "6rem 0rem",
                display: { xs: "none", sm: "block" }

            }}
        >

            Most<span style={{ borderBottom: "10px solid #FFA500", lineHeight: '60px ' }}> popular affordable pricing </span>per
            jurisdictions are brought to you to
            kick off your adventure.

        </Typography>
        <Box className="pricing_box pricing_desktop" sx={{ display: { xs: 'none', md: 'block' } }}>
            <Grid container sx={{ justifyContent: "space-evenly" }} columnSpacing={4}>
                {
                    pricing.map((item, index) => (
                        <Grid item xs={3} sm={3} md={3} lg={3} sx={{
                            minHeight: "600px",
                            backgroundColor: `${index === 1 && "#525DED"}`,
                            padding: "2rem 1rem",
                            borderRadius: "10px",
                            boxShadow: `${index === 1 ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : ''}`
                        }} >
                            <Box className="price_box" sx={{
                                color: `${index === 1 ? "#fff" : "#525DED"}`
                            }}>
                                <Typography
                                    variant="h4"
                                    Wrap
                                    component="div"
                                    sx={{
                                        fontSize: `${index == 1 ? "32px" : '24px'}`,
                                        fontWeight: `${index == 1 ? "700" : '600'}`,

                                    }}
                                >
                                    {item.name}

                                </Typography>
                                <Typography
                                    variant="h2"
                                    Wrap
                                    component="div"
                                    sx={{
                                        fontSize: "32px",
                                        fontWeight: "800",
                                        padding: "1rem 0"

                                    }}
                                >
                                    {item.payment} <span style={{
                                        fontSize: "22px",
                                        fontWeight: "500",
                                        color: `${index === 1 ? "#fff" : "#777"}`
                                    }}>One time payment</span>

                                </Typography>
                                <Typography
                                    variant="h4"
                                    Wrap
                                    component="div"
                                    sx={{
                                        fontSize: "22px",
                                        fontWeight: "500",

                                    }}
                                >
                                    {item.subtext}

                                </Typography>

                                {
                                    item.option?.map(option => (<Box className={`options`}>
                                        <span>
                                            {
                                                index === 1 ? <CheckCircleIcon className="check_icon" /> : <img src={assets.Right} />
                                            }
                                        </span>
                                        <Typography
                                            variant="span"
                                            Wrap
                                            sx={{
                                                fontSize: "18px",
                                                fontWeight: "600",
                                            }}
                                        >
                                            {option}

                                        </Typography>
                                    </Box>))
                                }

                                <Button className="pricing_btn" fullWidth sx={{
                                    backgroundColor: `${index === 1 ? "#fff" : ""}`,
                                    padding: "1.4rem  0rem",
                                    border: "2px solid",
                                    borderColor: `${index === 1 ? "#fff" : "#525DED"}`,
                                    outline: "none",
                                    fontSize: "18px",
                                    fontWeight: "600",
                                    color: "#525DED"
                                }}>Continue</Button>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
        <Box className="pricing_mobile" sx={{ display: { xs: 'block', md: 'none' } }}>
            <Swiper
                slidesPerView={"auto"}
                centeredSlides={true}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    pricing.map((item, index) => (
                        <SwiperSlide>
                            <Box className="price_box" sx={{
                                color: `${index === 1 ? "#fff" : "#525DED"}`,
                                backgroundColor: `${index === 1 && "#525DED"}`,
                                padding: "2rem 1rem",
                                minHeight: "860px",
                                borderRadius: "10px",
                                boxShadow: `${index === 1 ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : ''}`,
                                border: `${index !== 1 && "1px solid #444"}`
                            }}>
                                <Typography
                                    variant="h4"
                                    Wrap
                                    component="div"
                                    sx={{
                                        fontSize: `${index == 1 ? "32px" : '24px'}`,
                                        fontWeight: `${index == 1 ? "700" : '600'}`,

                                    }}
                                >
                                    {item.name}

                                </Typography>
                                <Typography
                                    variant="h2"
                                    Wrap
                                    component="div"
                                    sx={{
                                        fontSize: "28px",
                                        fontWeight: "800",
                                        padding: "1rem 0",

                                    }}
                                >
                                    {item.payment} <span style={{
                                        fontSize: "14px",
                                        fontWeight: "500",
                                        color: `${index === 1 ? "#fff" : "#777"}`
                                    }}>One time payment</span>

                                </Typography>
                                <Typography
                                    variant="h4"
                                    Wrap
                                    component="div"
                                    sx={{
                                        fontSize: "18px",
                                        fontWeight: "500",
                                        height: "60px"

                                    }}
                                >
                                    {item.subtext}

                                </Typography>

                                {
                                    item.option?.map(option => (<Box className={`options`}>
                                        <span>
                                            {
                                                index === 1 ? <CheckCircleIcon className="check_icon" /> : <img src={assets.Right} />
                                            }
                                        </span>
                                        <Typography
                                            variant="span"
                                            Wrap
                                            sx={{
                                                fontSize: "18px",
                                                fontWeight: "600",
                                                height: "30px",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            {option}

                                        </Typography>
                                    </Box>))
                                }

                                <Button className="pricing_btn" fullWidth sx={{
                                    backgroundColor: `${index === 1 ? "#fff" : ""}`,
                                    padding: "1.4rem  0rem",
                                    border: "2px solid",
                                    borderColor: `${index === 1 ? "#fff" : "#525DED"}`,
                                    outline: "none",
                                    fontSize: "18px",
                                    fontWeight: "600",
                                    color: "#525DED"
                                }}>Continue</Button>
                            </Box>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Box>
    </Box>;
};

export default Pricing;
