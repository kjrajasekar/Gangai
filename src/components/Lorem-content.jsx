import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import a from "../image/a.png";
import b from "../image/b.png";
import c from "../image/c.png";
import d from "../image/d12.png";
import e from "../image/e.png";
import f from "../image/f.png";
// import { FaGlobeAfrica, FaBuilding, FaBell } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { IoPieChartSharp } from "react-icons/io5";
// import { FaBagShopping } from "react-icons/fa6";

import "animate.css";

const CardComponent = ({ title,imgsrc, iconSize, Icon, color, hoverAnimation, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="card-style border-0 text-center p-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transition: "all 0.3s ease-in-out" }}
    >
      <div
        className={`d-inline-block animate__animated ${isHovered ? hoverAnimation : ""
          }`}
        style={{ transition: "all 0.3s ease-in-out" }}
      >
         <Image
          src={imgsrc}
          width={60}
          height={60}
          rounded
          className="whatsapp-icon "
        />
      </div>
      <Card.Body>
       
        <Card.Title className="fontdesign text-center mt-3">{title}</Card.Title>
        <Card.Text className="ft-design text-center mt-3">
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};


function Loremcontent() {
  const cardData = [
    {
      imgsrc:a,
      title: "Customised Borewell Drilling",
      description: "We offer customized borewell drilling in sizes 4.5\", 5\", 6.5\", and 8\" up to 1600 ft deep borewell drilling where higher output is required.",
    },
    {
      imgsrc:b,
      title: "Borewell Flushing & Cleaning",
      description: "We do borewell cleaning & flushing services to remove blockages, contamination, sediment, debris, silts and algae.",
    },
    {imgsrc:c,
      title: "Borewell Extension & Expansion",
      description: "We do borewell extension & expansion of 4.5 inch borewell to 6.5 inch for steady water supply during dry season or accommodate a larger pump. ",
    },
    {imgsrc:d,
      title: "Agri Land Net Bore & Side Bore ",
      description: "We provide drilling horizontally from the main borewell into the surrounding water-bearing fissures and ensure a more reliable water supply.",
    },
    {imgsrc:e,
      title: "Solar Customized Drilling",
      description: "We serve clients with a specialized process of drilling piles into the ground to support the mounting structures for solar panels.",
    },
    {
      imgsrc:f,
      title: "Road Crossing Work",
      description: "We do horizontal directional drilling in road crossing for water, electrical, telephone and drainage lines without damaging the road.   ",
    },
  ];
  return (
    <div className="lorem text-center">
      <Container>
        <Row>
          {cardData.map((card, index) => (
            <Col key={index} xs={12}   md={6} lg={4} >
              <CardComponent {...card} />
            </Col>
          ))}
        </Row>
      </Container>


    </div>
  );
}

export default Loremcontent;
