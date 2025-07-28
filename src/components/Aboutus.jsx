import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import base from '../image/aboutus_banner.png';

function About() {
  return (
    <Container>
      <Row className="align-items-center">
        <Col
          xl={5}
          className="text-center text-lg-start d-flex flex-column align-items-center align-items-lg-start mb-3 mb-lg-0 text-animation mx-auto justify-content-center"
        >
          <div className="p-md-5">
            <div className="aboutheaddesign1 pb-2 text-start">
              Best Borewell Drilling Contractors in Tamil Nadu (Kongu Region) <br />| Gangai Borewells
            </div>
            <p className="fontdesign ">
              Gangai Borewell Contractors, located in Gobichettipalayam, is a leading borewell drilling company in the Kongu region, delivering professional services since the 1980s. With over 40 years of expertise, we specialize in handling complex borewell drilling projects with precision.
              Using advanced hydraulic super rigs, sensor-mounted drilling machines, and high-power air compressors, we ensure reliable solutions for agricultural, residential, and industrial needs. Our services include borewell drilling, cleaning, extension, and expansion for apartments, schools, factories, and farms.
              Trusted by clients for our quality, innovation, and timely service, <br />we are the preferred choice for borewell solutions across Tamil Nadu.


            </p>
            {/* <div className="aboutbutton">
      <Button variant="success" className='readmore fontdesign'>Read More</Button>
    </div> */}
          </div>
        </Col>

        <Col xl={7} className="text-center image-animation">
          <div>
            <img src={base} alt="Borewell Service" className="img-fluid rounded" width="87%" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
