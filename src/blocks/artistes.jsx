import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../App.css";
import { Grid, Cell } from 'react-mdl';

import Wizkid from "../elements/images/Wizkidd.jpeg";
import Davido from "../elements/images/Davidoo.jpeg";
import Olamide from "../elements/images/Olamidee.jpeg";
import Burnaboy from "../elements/images/Burnaboyy.jpeg";
import Fire from "../elements/images/Fireboyy.jpeg";
import Joeboy from "../elements/images/Joeboyy.jpeg";
import Rema from "../elements/images/Remaa.jpg";


function artistes() {
    return (
        <div className = "Artiste-Section" id = "artisteSection" style={{width: '80%', margin: 'auto'}}>
        <Grid className="demo-grid-ruler">
            
        
            <Cell col={12}>
            <div className = "artiste-header">
         <h1>Artistes</h1> 
         </div> 
         
           
         <Carousel className = "Carousel-section">
                <div >
                    <img src= {Wizkid} />
                    <h4 className="Wizkid">Wizkid</h4>
                </div>
                <div>
                    <img src= {Davido} />
                    <h4 className="Davido">Davido</h4>
                </div>
                <div>
                    <img src= {Olamide} />
                    <h4 className="Olamide">Olamide</h4>
                </div>
                <div>
                    <img src={Burnaboy} />
                    <h4 className="Burnaboy">Burna Boy</h4>
                </div>
                <div>
                    <img src={Fire} />
                    <h4 className="Fireboy">Fireboy</h4>
                </div>
                <div>
                    <img src={Joeboy} />
                    <h4 className="Joeboy">Joeboy</h4>
                </div>
                <div>
                    <img src={Rema} />
                    <h4 className="Rema">Rema</h4>
                </div>
                
                
            </Carousel>
            </Cell> 
            </Grid>

           </div>
     
    )
}

export default artistes
