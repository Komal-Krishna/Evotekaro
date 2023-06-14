import React,{useState} from "react";
import "./CSS/Faq.css";
import Sidebar from './Sidebar';

const faqData = [
    {
      question: 'What is React?',
      answer:
        'React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update and render components when the data changes.'
    },
    {
      question: 'What are the key features of React?',
      answer:
        'Some key features of React include component-based architecture, virtual DOM for efficient rendering, JSX syntax for defining components, and React Native for building mobile apps.'
    },
    {
      question: 'How do I install React?',
      answer:
        'You can install React by using npm (Node Package Manager) or yarn. Open your terminal and run the following command: "npm install react" or "yarn add react".'
    },
    // Add more FAQ items as needed
  ];


export const Faq = ({onFormSwitch}) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="A">
        <div className="i">
            <Sidebar change={onFormSwitch}></Sidebar>
        </div>
        <div className="no">
            <div className="faq-container">
            <div className="f"><h1>Frequently Asked Questions</h1></div>
            {faqData.map((item, index) => (
                <div
                className={`faq-item ${expandedIndex === index ? 'expanded' : ''}`}
                key={index}
                onClick={() => toggleAccordion(index)}>
                    <div className="question">{item.question}</div>
                {expandedIndex === index && <div className="answer">{item.answer}</div>}
                </div>
            ))}
        </div>
        </div>
    </div>
  );
}