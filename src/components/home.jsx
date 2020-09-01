import React from 'react';
import Navbar from '../blocks/header';
import HomeSec from '../blocks/homeSection';
import LatestNewSec from '../blocks/latestNews';
import Artistes from '../blocks/artistes';
import Events from '../blocks/events';
import Gallery from '../blocks/gallery';
import About from '../blocks/about';
import Footer from '../blocks/footer';




function home() {
    return ( 
        <div>
        <Navbar />
        <HomeSec />
        <About />
        <Artistes />
        <LatestNewSec />
        <Events />
        <Gallery />
        <Footer />
        </div>
    )
}

export default home;
