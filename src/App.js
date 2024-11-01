import React from 'react';
import NavigationBar from './components/Navigationbar'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
   return (
      <div>
        <Router>
          <NavigationBar></NavigationBar>
          <Routes>
            <Route path="/" exact component={Home}></Route>
          </Routes>
        </Router>
        <Home></Home>
      </div>
   );
}

export default App;
