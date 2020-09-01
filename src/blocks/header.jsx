import React from 'react';
import { Header, Navigation } from 'react-mdl';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, animateScroll as scroll } from "react-scroll";
import './latestNews';
import './about';
import './artistes';
import './gallery';
import './events';




function header() {
    return (

        <div>


            <Header className="headerNav" title={<span><strong>LOGO</strong></span>}>
                <Navigation >
                    <Link
                        activeClass="active"
                        to="homeSection"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    > Home </Link>

                    <Link
                        activeClass="active"
                        to="aboutSection"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    > About </Link>

                    

                     <Link
                        activeClass="active"
                        to="artisteSection"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    > Artistes </Link>

                       <Link
                        activeClass="active"
                        to="newSection"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    > News </Link>


                        <Link
                        activeClass="active"
                        to="eventsSection"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    > Events </Link>

                    
<Link
                        activeClass="active"
                        to="gallerySection"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    > Gallery </Link>




                </Navigation>



                <Navigation className="iconNav">
                    <FontAwesomeIcon icon={['fab', 'apple']} />
                    <FontAwesomeIcon icon={['fab', 'spotify']} />
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                    <FontAwesomeIcon icon={['fab', 'youtube']} />
                </Navigation>





            </Header>

        </div>

    )
}

export default header;

/*


import {Link,Switch,Route} from 'react-router-dom';

import Home from '../components/home';
import About from '../components/about';
import Artistes from '../components/about';
import Events from '../components/events';
import Gallery from '../components/gallery;




       <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/artistes">Artistes</Link>
                <Link to="/events">Events</Link>
                <Link to="/news">News</Link>
                <Link to="/gallery">Gallery</Link>

<Switch>
            <Route  path="/"> <Home /> </Route>
            <Route  path="/about"> <About /> </Route>
            <Route  path="/artistes"><Artistes /> </Route>
            <Route  path="/events"><Events /> </Route>
            <Route  path="/gallery"> <Gallery /> </Route>

             <Main />


             </Switch>*/