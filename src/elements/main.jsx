import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/home';
import About from '../components/about';
import Artistes from '../components/about';
import Events from '../components/events';
import Gallery from '../components/gallery';


const Main = () => ( 

    <Switch> 
    <Route  path="/about" component = {About}/>
    <Route  path="/artistes" component = {Artistes}/>
    <Route  path="/events" component = {Events}/>
    <Route  path="/gallery" component = {Gallery}/>
  

     </Switch>
)
export default Main;