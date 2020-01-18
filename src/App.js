import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import Header from './components/Header';

import Home from './pages/Home';
import About from './pages/About';
import Digital from './pages/Digital';
import Contact from './pages/Contact';
import Identity from './pages/Identity';

function App() {
  return (
    <div className='main'>
      <div className='App'>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/About'>
              <About />
            </Route>
            <Route path='/Identity'>
              <Identity />
            </Route>
            <Route path='/Digital'>
              <Digital />
            </Route>
            <Route path='/Contact'>
              <Contact />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
