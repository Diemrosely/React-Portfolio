import React from "react";
import Project from '../components/project/project'
import { Row, Col } from 'react-bootstrap';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer'; 

let Portfolio = () => {
  const [info] = React.useState([
      {
        name: "Progressive Budget Application",
        github: "https://github.com/Diemrosely/Progressive-Budget-Appplication",
        img:"https://user-images.githubusercontent.com/65733023/91625286-11109900-e974-11ea-9653-3cca56164977.png",
        description: "Using Service Worker, this application allows the user to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.",
    }, 
    {
        name: "Fitness Tracker",
        github: "https://github.com/Diemrosely/Fitness-Tracker",
        img: "https://user-images.githubusercontent.com/65733023/91625355-b0359080-e974-11ea-8466-66f3b7250533.png",
        description: "A fitness tracker application that utilizes Mongoose, MongoDB, NodeJS, and ExpressJS. This application allows users to input their workout, total their full workouts, and stores their data in a database."
    }, 
    {
        name: "Team Generator",
        github: "https://github.com/Diemrosely/Team-Generator",
        img: 'https://user-images.githubusercontent.com/65733023/91625341-92682b80-e974-11ea-872e-39282193ecf0.png',
        description: "This team generator allows user to input their role at their company. These roles are manager, engineer, and intern. The manager role includes: name, ID, email address, and office number. The engineer role includes: name, ID, email address, and github username. The intern role includes: name, ID, email address, and University. This application uses class contructors with inquirer to build a team that will be rendered to a simple HTML document. Depending on the specific role chose, the input field will be slightly different. This application also includes validations and if/else statements to ensure each input field is valid."
    }, 
    {
        name: "ViVi",
        github: "https://github.com/Diemrosely/project3",
        img: 'https://user-images.githubusercontent.com/65733023/91625363-c2afca00-e974-11ea-9bed-a303f19e3eef.png',
    }, 
    {
        name: "Password Generator",
        github: "https://github.com/Diemrosely/JavaScript-Password-Generator",
        img: 'https://user-images.githubusercontent.com/65733023/91625476-bbd58700-e975-11ea-9a15-78eda2c353d3.png',
    }, 
    {
        name: "Weather Dashboard",
        github: "https://github.com/Diemrosely/Weather-Dashboard",
        img: 'https://user-images.githubusercontent.com/65733023/91625482-c6901c00-e975-11ea-8bd7-e4e9ea6da0c0.png',
    }, 

])
    return (
        <div>
          <Navbar/>
            <h1 className="port">Portfolio</h1>
            <Row>
                {info.map((portf, i)=> (
                    <Col md={12} className="project">
                        <Project portf={portf}/>
                    </Col>
                ))}
            </Row>
            <Footer/>
        </div>
    )
}
export default Portfolio;