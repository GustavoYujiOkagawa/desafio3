import { useState } from "react";
import "./accordion.css";
import { ReactSVG } from 'react-svg'
import Icone from '../assets/images/icon-plus.svg'
import IconeMinus from '../assets/images/icon-minus.svg'

const data = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answear:
      "Frontend Mentor offers realistic coding chanllenges to help developers improvise their frontend coding skills with projects in HTML/CSS, and JavaScript. Its suitable for all levels and ideal for porfólio building.",
    icon: <ReactSVG src={Icone} />
  },
  {
    question: "Is Frontend Mentor free?",
    answear:
    "Frontend Mentor offers realistic coding chanllenges to help developers improvise their frontend coding skills with projects in HTML/CSS, and JavaScript. Its suitable for all levels and ideal for porfólio building.",
    icon: <ReactSVG src={Icone} />
  },
  {
    question: "Can I use Frontend Mentor projects in my portfólio?",
    answear:
    "Frontend Mentor offers realistic coding chanllenges to help developers improvise their frontend coding skills with projects in HTML/CSS, and JavaScript. Its suitable for all levels and ideal for porfólio building.",
    icon: <ReactSVG src={Icone} />
  },
  {
    question: "How can i get help if im stuck on a chanllenge? ",
    answear:
    "Frontend Mentor offers realistic coding chanllenges to help developers improvise their frontend coding skills with projects in HTML/CSS, and JavaScript. Its suitable for all levels and ideal for porfólio building.",
    icon: <ReactSVG src={Icone} />
  },
];


function Accordion() {

    const [open, SetOpen] = useState(null);

  return (
    <section className="wrapper">
      <div className="accordion">
        {data.map((item, index) => (
          <div className="item" key={index}>
            <div className="title" onClick={() => SetOpen(open === index ? null : index)}>
              <h2>{item.question}</h2>
              <span> <ReactSVG src={open === index ? IconeMinus : Icone} /></span>
            </div>
            
            {open === index && <div className="content">{item.answear}</div>}
          </div>
          
        ))}
      </div>
    </section>
  );
}

export default Accordion;
