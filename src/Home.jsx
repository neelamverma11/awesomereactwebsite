import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/img1.png";
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common name='Best Sites' imgsrc={web} visit='/services' btnname='Our Services.!' />
        </>
    );
};

export default Home;
