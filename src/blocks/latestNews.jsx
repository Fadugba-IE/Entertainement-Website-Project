import React, { Component } from 'react';
import '../App.css';
import { Card, Button } from 'react-bootstrap';
import Rema from '../elements/images/Rema.jpg';
import Fireboy from '../elements/images/Fireboy.jpg';
import Burna from '../elements/images/Burna.jpg';
import Wande from '../elements/images/Wande.jpg';

import { Grid, Cell } from 'react-mdl';





export class latestNews extends Component {
    render() {
        return (
            
            <div className="LatestNews" id = "newSection" style={{width: '100%', margin: 'auto'}}>
                        <Grid className="demo-grid-ruler">
            
        
                 <Cell col={12}>
                    <h2>Latest News</h2>
                    <hr />
                <div className = "card-list" style={{width: '80%', margin: 'auto'}}>
                    <Cell col={3}>
                 <Card style={{ width: '20.5rem' }}>
                    <Card.Img variant="top" src= {Rema} />
                    <Card.Body>
                        <Card.Title>Rema Drops "Dumebi"</Card.Title>
                        <hr/>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">View More</Button>
                    </Card.Body>
                </Card>
             </Cell>


             <Cell col={3}>
        <Card style={{ width: '20.5rem' }}>
                    <Card.Img variant="top" src= {Fireboy } />
                    <Card.Body>
                        <Card.Title>Fireboy Releases Album</Card.Title>
                        <hr/>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">View More</Button>
                    </Card.Body>
                </Card>
                </Cell>
               
         
                <Cell col={3}>
    <Card style={{ width: '20.5rem' }}>
                    <Card.Img variant="top" src= {Burna} />
                    <Card.Body>
                        <Card.Title>Twice as tall drops on the 24th</Card.Title>
                        <hr/>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">View More</Button>
                    </Card.Body>
                </Card>
                </Cell>

              
                <Cell col={3}>
            <Card style={{ width: '20.5rem' }}>
                <Card.Img variant="top" src= {Wande } />
                <Card.Body>
                    <Card.Title>Wande Cole drops Single</Card.Title>
                    <hr/>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button className = "News-button">View More</Button>
                </Card.Body>
                </Card>
                </Cell>
                </div> 

  <Button className= "longButton">Read More News</Button>{' '}
          
         </Cell>
         </Grid>

         </div>

        )
    }
}

export default latestNews;
