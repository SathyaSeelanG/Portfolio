import React from 'react';
import Project from './Project';
import './Projects.css'
import  Radar from "../Images/Radar-System.jpg"
import GUI from "../Images/MODERNGUI1.jpg"

const Projects = () => {
  const projects = [

    {
      title: "MODERN GUI ",
      description: <p> This project involves building a modern Graphical User Interface (GUI) using Python and advanced UI libraries. 
        The GUI will include features such as hand brightness and sound control, allowing users to adjust the brightness of 
        their screen and control the volume of their device using hand gestures. The system will also feature a voice assistant, 
        enabling users to control the GUI and other applications using voice commands. Additionally, 
        the GUI will include a price comparison engine, allowing users to compare prices of products across multiple websites. Overall, 
        this project combines advanced UI features and machine learning techniques to create a powerful and user-friendly GUI.</p>,
      tech: "Python",
      software : "VS Code",
      link: "https://github.com/SathyaSeelanGunasekar/MODERN-GUI-PYTHON-MACHEINELEARNING",
      image: GUI,
    },
    {
      title: "Arduino Radar",
      description: <p> This project involves building an Arduino radar that can detect objects and display 
        their location on a computer screen using Processing Java. 
        The radar will use an ultrasonic sensor to detect objects, and the data will be processed and displayed in real-time. 
        The system will also use a servo motor to rotate the ultrasonic sensor and scan the environment for objects.
         Overall, this project combines hardware and software to create a useful tool for object detection and tracking</p>,
      tech: "Java",
      software : "Processing",
      link: "https://github.com/SathyaSeelanGunasekar/ARDUINO_RADAR_JAVA_processing",
      image: Radar,
      //https://techatronic.com/wp-content/uploads/2021/01/Radar-System-new.jpg
      
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
            software={project.software}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
