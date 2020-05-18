import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router } from 'react-router-dom';
import Signin from './components/Signin';
import HomePage from './components/HomePage';
 
function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="app-header">
          <Navigation />
          <div>Login data</div>
        </div>
        <div className="app-content">
          <HomePage/>
        </div>
      </div>
    </Router>
  );
}

export default App;
