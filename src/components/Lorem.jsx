import Container from "react-bootstrap/Container";
import "animate.css";
import Image from "react-bootstrap/Image";
import base5 from "../image/whatsapp.png";

function Lorem() {
  return (
    <Container id="contact">
      <div className="pgwhite">
        <div className="container">
          <div className="row">
            <div className="section-details col-12 col-lg-8 py-3">
              <h1 className=" fontdesign animate__animated animate__fadeIn px-5">
                Would you like to consult with our borewell drilling specialist?</h1>
              <p className="  fontdesign animate__animated animate__fadeIn px-5 my-3">
                Send your requirements or call, our experts will contact you .
              </p>
            </div>
            <div className="col-12 col-lg-4 p-3 text-center ">
              <div className="row">
                <h4 className="text-center animate__animated animate__fadeInDown">
                  Whats App Your Query
                </h4>
              </div>

              <div className=" whatspp"  >
                <a
                  href="https://wa.me/919842867128"
                  className="aboutheaddesign text-decoration-none text-black animate__animated animate__fadeInUp "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="row  ">
                    <div className=" col-3 col-md-4 col-lg-2  px-lg-4 text-end">
                      <Image
                        src={base5}
                        width={45}
                        height={45}
                        rounded
                        className="whatsapp-icon  "
                      />
                    </div>
                    <div className="col-9 col-md-8 col-lg-10 text-start text-lg-center py-2">
                      <h2 className=" text-start headingcss fontdesign d-inline py-5 ft-m">    +91 98428 67128</h2>
                    </div>
                  </div>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>



    </Container>
  );
}

export default Lorem;
