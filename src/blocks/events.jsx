import React from 'react';
import {Grid, Cell, Button} from 'react-mdl';
import "../App.css";

function events() {
    return (
        <div className = "Events-Section" id = "eventsSection"  style={{width: '80%', margin: 'auto'}}>
          <Grid className="demo-grid-ruler">
              
            <Cell col={12}>
            <div className = "Events-header" >
         <h1>Events</h1> 
         </div> 

        
         <Cell col={12} className = "Events-card">
                <h3 id = "left">  01 SEPTEMBER
                    <p>2020</p>
                </h3>

               
                <h3 id = "middle">  MARLIAN FEST
                    <p>02 Arena</p>
                </h3>

               
                <div id = "right">
                <Button className = "card-button">BUY TICKET</Button>
                    </div>       
         </Cell>

         <Cell col={12} className = "Events-card">
                <h3 id = "left">  15 SEPTEMBER
                    <p>2020</p>
                </h3>

               
                <h3 id = "middle">  APOLLO FEST
                    <p>02 Arena</p>
                </h3>

               
                <div id = "right">
                <Button className = "card-button">BUY TICKET</Button>
                    </div>       
         </Cell>

         <Cell col={12} className = "Events-card">
                <h3 id = "left">  20 SEPTEMBER
                    <p>2020</p>
                </h3>

               
                <h3 id = "middle">  DMW FEST
                    <p>02 Arena</p>
                </h3>

               
                <div id = "right">
                <Button className = "card-button">BUY TICKET</Button>
                    </div>       
         </Cell>





              
              </Cell>
              </Grid>  
        </div>
    )
}

export default events;