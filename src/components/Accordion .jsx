// src/components/Accordion.js
import React, { useState } from 'react';
import './Accordion.css'; // Make sure to create and import your CSS file

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={toggleAccordion}>
        <h2>{title}</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const Accordion = () => {
  const data = [
    {
      title: 'Section 1',
      content: 'Content for section 1',
    },
    {
      title: 'Section 2',
      content: 'Content for section 2',
    },
    {
      title: 'Section 3',
      content: 'Content for section 3',
    },
  ];

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
