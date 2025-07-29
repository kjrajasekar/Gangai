import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border mb-2">
      <button
        className="d-flex justify-content-between w-100 p-3 bg-white border-0" // Set background to white for button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          color: "#333", // Dark text for visibility
          fontWeight: "", // Optional: makes the title bolder
        }}
      >
        <span>{title}</span>
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="p-3 border-top" style={{ backgroundColor: "#f9f9f9" }}>{children}</div>}
      {/* Set a light gray background for the open content */}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="fontdesign section4bg p-3 faq">
      <Container>
        <p className='headingcss fontdesign text-center p-4 ' >Frequently Asked Questions</p>
        <div className="container mt-4">
          <AccordionItem title="1.	How long does it take to complete the drilling process?">
            <p>The duration depends on the required depth and geological conditions.</p>
          </AccordionItem>
          <AccordionItem title="2.	What is the suitable time for drilling a borewell?">
            <p>There is no such prescribed season for drilling a borewell if the location of site has adequate ground water potential. </p>
          </AccordionItem>
          <AccordionItem title="3.	What is the safe distance between a borewell and septic tank/soak pit?">
            <p>Maintaining sufficient distance between a borewell and septic tank is always recommended as there are chances of contamination.
            </p>
          </AccordionItem>
          <AccordionItem title="4.	Can an existing borewell be deepened to increase the yield?">
            <p>You can consult a geologist and based on his advice and you can deepen existing bore well to a greater depth for adequate quantity of groundwater.</p>
          </AccordionItem>
          <AccordionItem title="5.	How are charges for drilling a borewell calculated?">
            <p>Drilling rates are sometimes charged in slabs for deep borewells, for others it varies and depends on various factors like site condition etc.</p>
          </AccordionItem>
          <AccordionItem title="6.	What are the common methods for drilling borewells?">
            <p>Methods of drilling to be adopted depends on factors of geological formation, cost factors, diameter and depth of borewell and the purpose intended.</p>
          </AccordionItem>
        </div>
      </Container>
    </div>
  );
};

export default Accordion;
