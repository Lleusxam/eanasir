import React from 'react';
import NavigationBar from './components/Navigationbar';
import Home from './components/Home';
import Article from './Article'
import ArticleList from './components/ArticleList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
   return (
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/artigos" element={<ArticleList />} />
          <Route path="artigos/eanasir" element={<Article/>}/>
        </Routes>
      </Router>
   );
}

export default App;
