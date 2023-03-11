import React from 'react';
import '../cssForPages.css'

const FAQ = () => {
  const faqs = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      question: 'What are the advantages of using React?',
      answer: 'React provides a declarative approach to building UI, making it easier to understand and debug. It also allows for component-based development, which makes it easier to reuse and maintain code.',
    },
    {
      question: 'What is JSX?',
      answer: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.',
    },
    {
      question: 'How do you create a React component?',
      answer: 'You can create a React component by defining a JavaScript function or class that returns JSX or an object describing the component’s properties and methods.',
    },
  ];

  return (
    <div className="faq">
      <h2 className="faq-title">Frequently Asked Questions about React</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <h3 className="faq-question">{faq.question}</h3>
          <p className="faq-answer">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
