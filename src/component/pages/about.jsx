import React from 'react';
import './cssForPages.css'

const AboutPage = () => {
    const name = "Tanvir Imam Mitul";
    const degree = "MSE";
    const university = "RUET";
    const occupation = "JavaScript Developer";
  
    return (
      <div className="about-page"> {/* Add the class name */}
        <h1>About {name}</h1>
        <p>Hi, my name is {name}. I studied {degree} in {university} and currently work as a {occupation}. I have a passion for creating interactive and user-friendly applications using JavaScript.</p>
        <p>When I'm not coding, I enjoy reading books and playing sports. Feel free to reach out to me if you have any questions or just want to chat!</p>
      </div>
    );
  }
  
  export default AboutPage;
