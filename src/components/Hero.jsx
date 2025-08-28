import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import heroBg from "./../image/aboutus_banner.png"; // background image
import truckImage from "./../image/gangai_bore.jpg"; // big round image (right side)
import cbe from "./../image/cbe.jpg"; // small round icons
import tirupur from "./../image/tirpur.jpg"; // small round icons
import erode from "./../image/erode.jpg"; // small round icons

const HeroSection = () => {
  return (
    <section
      className="hero-section text-white position-relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100%",
         padding: "90px"
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div className="container position-relative py-5" style={{ zIndex: 2 }}>
        <div className="row align-items-center">
          {/* LEFT 70% */}
          <div className="col-lg-8 text-center text-lg-start">
            <h1 className="fw-bold display-5 mb-4 banner-title" >
              Best Borewell Drilling Contractors in Tamil Nadu
            </h1>
            <div className="d-flex justify-content-center justify-content-lg-start gap-4 mt-4 flex-wrap">
              <div className="text-center">
                <img
                  src={erode}
                  alt="Erode"
                   width={70}
                  height={70}
                  className="rounded-circle border border-light shadow"
                />
                <p className="mt-2">Erode</p>
              </div>
              <div className="text-center">
                <img
                  src={tirupur}
                  alt="Tirupur"
                  width={70}
                  height={70}
                  className="rounded-circle border border-light shadow"
                />
                <p className="mt-2">Tirupur</p>
              </div>
              <div className="text-center" >
                <img
                  src={cbe}
                  width={70}
                  height={70}
                  
                  alt="Coimbatore"
                  className="rounded-circle border border-light shadow"
                />
                <p className="mt-2">Coimbatore</p>
              </div>
            </div>
          </div>

          {/* RIGHT 30% */}
          <div className="col-lg-4 d-flex justify-content-center mt-4 mt-lg-0">
            <div
              className="rounded-circle overflow-hidden shadow position-relative banner-round"
              
            >
              <img
                src={truckImage}
                alt="Borewell Truck"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Combined Wave */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          lineHeight: 0,
          zIndex: 1,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "380px", width: "100%" }}
        >
          {/* Lighter top curve */}
          <path
            d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            fill="#A5D6A7"
          />
          {/* Darker bottom curve */}
          <path
            d="M0.00,80.00 C150.00,180.00 350.00,-20.00 500.00,80.00 L500.00,150.00 L0.00,150.00 Z"
            fill="#4CAF50"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;


