import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button4 from "./Section4button";

function Section4bg() {
  return (
    <div className="section4bg">
      <Container>
        <Row>
          <Col>
          <div className='text-center aboutheaddesign1 pt-5 pb-4'>
          Our Recent Work</div>
            <div className="sec-4-heading">
              <div className="section-detail">
             <p className="whatspp text-center">Utilizing modern drilling techniques & equipment we provide reliable water sources for various needs, including residential, agricultural, and commercial purposes.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="button-sec4 p-2">
        <Button4/>
      </div>
    </div>
  );
}

export default Section4bg;
