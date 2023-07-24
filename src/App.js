import React from 'react';
import "./App.css";
import Header from "./component/head/Header";
import Hero from './component/Hero/Hero';
import Portfolio from './component/portfolio/portfolio';
import Skills from './component/skils/Skills';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';

const App = () => {
  return (
    <>
      <Header /> 
      <Hero />
      <About/>
      <Skills/>
      <Portfolio />
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;