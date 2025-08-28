
import NavHeader from './Navbar';
// import Image from 'react-bootstrap/Image';
// import base2 from '../image/banner.png'
import HeroSection from './Hero';


function Section1bg() {
  return (
    
     <div className='section1bg ' id="home">
        <HeroSection />
     {/* <Image src={base2} width="100%" height="100%"   className='image-animation'/> */}
      
      <NavHeader/>

       
     </div>
    
  );
}

export default Section1bg;