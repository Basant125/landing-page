import { Container, Hidden } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import './App.css'
import Dedicated from "./components/Dedicated/Dedicated";
import Details from "./components/Details/Details";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import { assets } from './constant'
const Home = () => {
    return <Box>
        <Container maxWidth="xg" sx={{ position: 'relative', overflow: 'hidden' }}>
            <Nav />
            <Header />
            <Dedicated />
            <Details />
            {/* <Box className="ground_style" sx={{ position: 'absolute', }}>
                {
                    assets.allEllipse.map((src, index) => (<img src={src} alt={`ellipse ${index}`} />))
                }
            </Box> */}
        </Container>

    </Box>;
};

export default Home;
