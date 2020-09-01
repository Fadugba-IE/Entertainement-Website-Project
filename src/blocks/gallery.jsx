import React from 'react';
import {Grid,Cell, Button} from 'react-mdl';
import ReactPlayer from 'react-player';
import '../App.css';

function gallery() {
    return (
        <div className = "Gallery-Section" id = "gallerySection" style={{width: '80%', margin: 'auto'}}>
           <Grid className="demo-grid-ruler">
              <Cell col={12}>
              <div className = "Gallery-header">
           <h1>Gallery</h1> 

           </div> 

           <div className = "Video-Section" style={{width: '800%'}}>
            <Cell col = {4}>
                <ReactPlayer
                width = '720px'
                height = '480px'
                controls
                url = 'https://www.youtube.com/watch?v=vRFS0MYTC1I'  
                />

            </Cell>
            <Cell col = {4}>
            <ReactPlayer
                width = '720px'
                height = '480px'
                controls
                url = 'https://www.youtube.com/watch?v=i-T4-4Hveo4' 
                />

            </Cell>

            <Cell col = {4}>
            <ReactPlayer
                width = '720px'
                height = '480px'
                controls
                url = 'https://www.youtube.com/watch?v=rGD71x0rwGQ' 

                />
            </Cell>


           </div>
           
           </Cell>
           </Grid>
        </div>
    )
}

export default gallery;
