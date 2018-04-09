import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import About from './components/About/index';
import Gallery from './components/Gallery/index';
import Services from './components/Services/index';
import Contact from './components/Contact/index';




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch >
            <div className="container" >
            <Route exact path="/main/" component={About} />
            <Route exact path="/gallery/" component={Gallery} />
            <Route exact path="/services/" component={Services} />
            <Route exact path="/contact/" component={Contact} />
            </div>
          </Switch>
          
          <div className="push">

          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
