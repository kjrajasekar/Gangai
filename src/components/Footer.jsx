import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css"; // Import animate.css
import group from "../image/Group 130.png";

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <footer className="text-white py-4 section6bg fontdesign animate__animated animate__fadeInUp">
        <Container>
          <Row className="text-md-left text-center">
            {/* Quick Links (Left-Aligned) */}
            <Col md={4} className="text-start">
              <h5 className="animate__animated animate__fadeInLeft">

                <img src={group} alt="logo" title="logo" width="40" height="40" /> GANGAI BOREWELLS
              </h5>
              <ul className="list-unstyled text-white">
                <li>
                  <a
                    href="#home"
                    className="text-white text-decoration-none animate__animated animate__pulse animate__delay-1s"
                  >Gangai Borewell Contractors, located in Gobichettipalayam, is a leading borewell drilling company in the Kongu region, delivering professional services since the 1980s. With over 40 years of expertise, we specialize in handling complex borewell drilling projects with precision.
                  </a>
                </li>
              </ul>
            </Col>


            {/* Support (Left-Aligned) */}
            <Col md={2} className="text-start px-lg-5 mt-3 mt-md-0">
              <h5 className="animate__animated animate__fadeInLeft">
                Quick Links
              </h5>
              <ul className="list-unstyled text-white">
                <li>
                  <a
                    href="#home"
                    className="text-white text-decoration-none animate__animated animate__pulse animate__delay-1s"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-white text-decoration-none animate__animated animate__pulse animate__delay-3s"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#service"
                    className="text-white text-decoration-none animate__animated animate__pulse animate__delay-2s"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#project"
                    className="text-white text-decoration-none animate__animated animate__pulse animate__delay-3s"
                  >
                    Project
                  </a>
                </li>
              </ul>
            </Col>

            {/* Address Section */}
            <Col md={3} className="text-start pb-2 text-white mt-3 mt-md-0">
              <h5>Address</h5>
              Gangai Borewells <br />
              Near Jaganatha Mess, <br />
              Kullampalayam, <br />
              Gobichettipalayam, Tamil Nadu. 638476. <br /><br />
              9842867128 <br />
              <a href="gangaihighpowerborewells@gmail.com" className="text-white text-decoration-underline">
                gangaihighpowerborewells@gmail.com
              </a>
            </Col>


            {/* Location Section with Responsive iframe */}
            <Col md={3} className="text-start text-lg-center mt-3 mt-md-0">
              <h5> Location</h5>
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3910.3494521698644!2d77.43336407524346!3d11.454683246316726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDI3JzE2LjgiTiA3N8KwMjYnMDkuNCJF!5e0!3m2!1sen!2sin!4v1741682026627!5m2!1sen!2sin"
                  style={{ borderRadius: "10px" }}
                  title="Location Map"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Footer Bottom Links */}
      <Container>
        <Row className="my-3 d-flex  align-items-center">
          <Col xs={12} lg={6} className="fontdesign fw-bold">
            <p className="mb-1 ">
              &copy; {new Date().getFullYear()} Gangai Borewell. All Rights Reserved.
            </p>
          </Col>
          <Col xs={12} lg={6} className="text-lg-end text-center fontdesign">
            <p className="mb-0">
              Developed by <a href="https://www.qonotech.com" target="_blank" rel="noopener noreferrer" className="text-dark fw-bold text-decoration-none">@Qono Technologies</a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
