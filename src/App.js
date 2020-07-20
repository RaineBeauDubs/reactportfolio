import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="pBody">
      <Navigation />
      <Route 
        path="/"
        component={Home}
        exact
      />
      <Route 
        path="/intro"
        component={Introduction}
      />
      <Route 
        path="/experience"
        component={Experience}
      />
      <Route 
        path="/projects"
        component={Projects}
      />
      <Route 
        path="/contact"
        component={Contact}
      />
      </div>
    </div>
  );
}

export default App;

