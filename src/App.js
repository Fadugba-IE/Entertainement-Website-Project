import React from 'react';
import './App.css';
import Home from './components/home';
import {BrowserRouter as Router} from 'react-router-dom';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;






function App() {
  return (
    <Router>
   <Home />
   </Router>
      
  );
}

export default App;
