
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import NaviBar from './components/Navibar.js';
import Footer from './components/Footer.js';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Home} from './Home';
import {Users} from './Users';
import {Klas} from './Klas';

  function App() {
  return (
    <>
    <Router>
   <NaviBar />
   <Switch>
   <Route exact path="/" component={Home}/>
   <Route path="/Users" component={Users}/>
   <Route path="/Klas" component={Klas}/>
   </Switch>
   </Router>
   <Footer/>
   </>
  );
}

export default App;
