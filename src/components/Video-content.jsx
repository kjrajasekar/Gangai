import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "animate.css";
import Op from "../image/op.svg";
import eve from "../image/eve.svg";
import video2 from "../image/video.mp4";

function Video() {
  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Container className="video py-5 px-5">
      <Row className="align-items-center justify-content-center">
        {/* Left Content */}
        <Col
          xs={12}
          lg={6}
          className="animate__animated animate__fadeInLeft text-center text-md-start"
        >
          <Container>
            <div className="headingcss fontdesign pb-4">Success Story</div>
            <p className="fontdesign">
             In partnership with the Rotary Club, we resolved water scarcity for elementary school children by providing access to clean, safe water. This impactful initiative improved student health, supported hygiene, and empowered children to attend school regularly—laying a stronger foundation for the well-being of future generations through sustainable water solutions.


            </p>
          </Container>

          {/* Card Section */}
          <Row className="justify-content-center">
            {[
              { title: "Facebook", img: eve, url: "https://www.facebook.com" },
              { title: "Youtube", img: Op, url: "https://www.youtube.com" },
            ].map((item, index) => (
              <Col xs={12} lg={6} key={index} className="mb-4">
                <Card className="border-0 animate__animated animate__zoomIn h-100 p-3 card-hover">
                  <div className="d-sm-flex d-md-block align-items-center">
                    {/* Image */}
                    <img
                      src={item.img}
                      width="60"
                      height="60"
                      className="mx-auto mx-md-0 d-block mb-2"
                      alt={item.title}
                    />
                  </div>
                  <Card.Body className="text-center text-md-start">
                    <Card.Title className="fontdesign fw-bold">
                      {item.title}
                    </Card.Title>
                    <Card.Text className="fontdesign">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button
                      className="readmorebtn border-0 mx-auto mx-md-0 d-block mt-2 animate__animated animate__pulse animate__infinite"
                      // onClick={() => handleRedirect()}
                    >
                      Read more
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        {/* Right Content */}
        <Col
          xs={12}
          lg={6}
          className="animate__animated animate__fadeInRight"
          style={{ height: "55vh" }}
        >
          <iframe
            src={video2}
            title="YouTube video"
            allowFullScreen
            className="w-100 h-100"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}

export default Video;
