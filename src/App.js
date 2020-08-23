import React from 'react';
import Home from './Home';
import CityDetail from './CityDetail';
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {

  return (
    <div className="wrapper">
      <Router>
        <div className="app">
          <Route path="/" exact component={Home} />
          <Route path="/:id" component={CityDetail} />
        </div>
      </Router>
    </div>
  );
}

export default App;
