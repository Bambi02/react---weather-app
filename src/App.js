import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import CityDetail from './CityDetail';
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/:id" component={CityDetail} />
      </div>
    </Router>
  );
}

export default App;
