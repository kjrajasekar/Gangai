import { useEffect, useState } from 'react';
import './App.css';
import Accordion from './components/FAQAccordion';
import Footer from './components/Footer';
import Review from './components/Review';
import Section1bg from './components/Section-1';
import Section2bg from './components/Section-2';
import Section3bg from './components/Section-3';
import Section4bg from './components/Section-4';
// import HeroSection from './components/Hero';


function App() {

  return (
    <div className="App">
    
      <Section1bg />

      <Section2bg />
      <Section3bg />


      <Section4bg />

      <Review />
      <Accordion />
      {/* <Section5bg/> */}

      <Footer />
    </div>


  );
}

export default App;
