import React from 'react'
import './styles/App.css';
import Header from './components/Header';
import Buttons from './components/Buttons';
import Info from './components/Info';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Buttons />
        <Info />
        <Footer />
      </div>
    </div>
  );
}

export default App;
