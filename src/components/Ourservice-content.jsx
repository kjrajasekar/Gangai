import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import drilling from "../image/icon_6in.png";
import drill from "../image/icon_4in.png";
import well from "../image/icon_8in.png";
import "animate.css";

function Outcontent() {
  return (
    <Container>
      <div className="fontdesign ">
        <Row className="g-0">
          <Col  md={4} >
            <div className="out1 pt-5  text-center animate__animated animate__fadeInLeft pb-mb-3">
              <Card.Img
                variant="left"
                src={drill}
                width="110px"
                height="110px"
                rounded
                className="  mb-4"  // Rotating image
              
              />
              <div className="pt-4  text-white fw-bolder animate__animated animate__zoomIn city">
            4.5 & 5 inch
              </div>
              <Card.Text className="text-white animate__animated animate__fadeInUp">
                <h5 className="px-4 "> </h5>
                <p className="px-4 pt-2 card-text text-light">
                 4.5 and 5 inches are the most common diameter for individual homes and small buildings. 
                </p>
              </Card.Text>
            </div>
          </Col>

          <Col  md={4} >
            <div className="out2 pt-5 text-center animate__animated animate__fadeInUp pb-md-3">
              <Card.Img
                variant="left"
                src={drilling}
                width="110"
                height="110"
                rounded
                className="   mb-4"
              />
              <div className=" pt-4 text-white fw-bolder animate__animated animate__zoomIn city">
      6.5 inch
              </div>
              <Card.Text className="text-white animate__animated animate__fadeInUp">
                <h5 className="px-4"> </h5>
                <p className="px-4 pt-2 card-text text-light ">
                  6.5 inch are ideal for large apartments or housing complexes where higher output is needed.
                </p>
              </Card.Text>
            </div>
          </Col>

          <Col  md={4}>
            <div className="out3 pt-5 text-center animate__animated animate__fadeInRight pb-md-3 ">
              <Card.Img
                variant="left"
                src={well}
                width="110"
                height="110"
                rounded
                className="  mb-4"
              />
              <div className=" pt-4 text-white fw-bolder animate__animated animate__zoomIn city">
                8 inch
              </div>
              <Card.Text className="text-white animate__animated animate__fadeInUp">
                <h5 className="px-4"> </h5>
                <p className="px-4 pt-2 card-text text-light">
                 8 inch borewell is typically drilled for higher water yield in domestic, agricultural, and industries. 
                </p>
              </Card.Text>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Outcontent;
