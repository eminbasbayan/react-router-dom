import React from 'react';
import './App.css';
import Sidebar from './components/SideBar';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';

class App extends React.Component {
  render () {
  return (
    <Router>
      <Route path="/" exact render={() =>
    <>
    <Sidebar/>
      <Home/>
    </>  
  }
      />
          <Route path="/contact"  render={() =>
    <>
    <Sidebar/>
    <Contact/>

    </>  
  }
      />
      
    <Route path="/about"  render={() =>
    <>
    <Sidebar/>
    <About/>
    </>  
  }
      />
  </Router>
  );
}
}

export default App;
