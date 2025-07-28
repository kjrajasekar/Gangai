import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import base from '../image/drill_side.jpg';

function Whygangai() {
  return (
    <Container>
      <Row className="align-items-center">
        <Col xs={12}
          xl={6}
          className="text-center text-lg-start  mb-3 mb-lg-0 text-animation mx-auto justify-content-center"
        >
          <div className="p-md-5">
            <div className='fontdesign smallheading text-center text-lg-start'>        </div>
            <div className="aboutheaddesign1 pb-2 text-center text-lg-start">
              Why Gangai Borewells ?
            </div>
            <p className="fontdesign mt-3 ">
              We provide the highest standards of service to unlock water resource and transform barren fields into fertile fields. Besides water borewell digging service, we also execute customised drilling works as per customer requirement, road crossing projects and others depending on the surface.
              <ul className='p-3 '>
                <li>	24/7 customer support from Gangai Borewell Drillers  </li>
                <li>  4 Decades of experience, 10,000 Happy Customers  </li>
                <li> 	Skilled Operators with Professional Experience  </li>
                <li> 	10 + cities in & around Kongu Belt Covered  </li>
                <li> 	High power robotic sensor modernized borewell drilling rigs  </li>
                <li> 	Borewell drilling for Home, Apartments, Industries, Agriculture.  </li>
                <li> 	Earth pit drilling up for 10 feet for electrical earthing systems.</li>
              </ul>
            </p>

          </div>
        </Col>

        <Col xs={12} xl={6} className="text-center image-animation">
          <div className='mb-2 mb-lg-0'>
            <img src={base} alt="Borewell Service" className="img-fluid rounded" width="87%" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Whygangai;