import { useEffect, useState } from 'react';
import './App.css';
import Accordion from './components/FAQAccordion';
import Footer from './components/Footer';
import Review from './components/Review';
import Section1bg from './components/Section-1';
import Section2bg from './components/Section-2';
import Section3bg from './components/Section-3';
import Section4bg from './components/Section-4';


function App() {
  const [countdown, setCountdown] = useState(10);
  const [showMainPage, setShowMainPage] = useState(false);
  useEffect(() => {
    if (countdown === 0) {
      setShowMainPage(true); // Show main page after countdown
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  if (showMainPage) {
    return <MainPage />; // Render your main page/component
  }

  return (
    <div className='counter-contain' style={{ background: "hsl(153.4deg 38.34% 50.39%)" }}>
      <div className='spinner-ring'></div> {/* rotating ring */}
      <div className='counter' style={{ textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <h1 style={{ fontSize: '100px', color: 'white' }}>{countdown}</h1>
      </div>
    </div>
  );
};

const MainPage = () => {

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
