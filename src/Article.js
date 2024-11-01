import React from 'react';
import Header from './components/ea-nasir/Header';
import About from './components/ea-nasir/About';
import History from './components/ea-nasir/History';
import StatueInfo from './components/ea-nasir/StatueInfo';
import Gallery from './components/ea-nasir/Gallery';
import Footer from './components/ea-nasir/Footer';
import './Article.css';

function App() {
   return (
      <div>
         <Header />
         <About />
         <History />
         <StatueInfo />
         <Gallery />
         <Footer />
      </div>
   );
}

export default App;
