import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import erode from '../image/erode.png';
import coimbatore from '../image/coimbatore.png';
import tirupur from '../image/tirupur.png';

function OurProject() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const projects = [
    { title: 'Erode', imgSrc: erode, description: 'As the most renowned borewell drilling contractor in Erode, we provide reliable and efficient services, drilling with precision to meet client requirements — also its all at budget-friendly prices.' },
    { title: 'Tirupur ', imgSrc: tirupur, description: 'We are one of the best borewell drilling contractors providing quality services in Tirupur. Our proven expertise and commitment to excellence has enabled us built on trust and reliability.' },
    { title: 'Coimbatore', imgSrc: coimbatore, description: 'Being referred to as No 1 borewell drilling contractor in Coimbatore region, we do provide the best service to the customers. Our focus is to carry out the work efficiently and complete it on time.' }
  ];

  return (
    <Row className="row-gap-3 px-md-5">
      {projects.map((project, index) => (
        <Col key={index} xs={12}   lg={4} >
          <Card 
            className={`border-0 ${hoverIndex === index ? 'shadow-lg' : 'shadow-sm'} transition`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            style={{ transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out', transform: hoverIndex === index ? 'scale(1.05)' : 'scale(1)' }}
          >
            <img src={project.imgSrc} alt='' width='100%' />
            <Card.Body>
              <Card.Title className="text-center city">{project.title}</Card.Title>
              <Card.Text className="text-center">
                <p className="fontdesign text-left">{project.description}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default OurProject;
