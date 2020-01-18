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
        <Router basename={'/'}>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/About' component={About} />
            <Route path='/Identity' component={Identity} />
            <Route path='/Digital' component={Digital} />
            <Route path='/Contact' component={Contact} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
