import React from 'react';
import Header from "./components/main/Header";
import HeroSection from "./components/main/HeroSection";
import About from "./components/main/about";
import './App.css';
import './components/main/about.css';
import Gallery from "./components/main/gallery";
import {Footar}  from './components/main/footar';
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <HeroSection />
        <About />
        <Gallery />
        <Footar />
      </main>
     
    </div>
  );
}

export default App;
