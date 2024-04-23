import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Drip from '../../Assets/Projects/Drip.png'
import Crud from '../../Assets/Projects/Crud.png'
import Ea from '../../Assets/Projects/Ea.png'
import Amazon from '../../Assets/Projects/Amazon.png'
import Olx from '../../Assets/Projects/Olx.png'
import Netflix from '../../Assets/Projects/Netflix.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Drip}
              isBlog={false}
              title="Drip"
              description="This is my first node.js project.Drip-Store is an E-commerce web application, especially for multibrand unisex sneakers where users can view products and buy them. It has almost every feature and function that are required for an E-commerce app."
              ghLink="https://github.com/MNihal7961/DRIP"
              demoLink="https://dripstore.online/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="Netflix"
              description="This project is a clone of the Netflix website, built with JavaScript, React, React-Vite, Tailwind CSS, Firebase, and API integration. It replicates the Netflix user experience, offering a responsive and dynamic platform for streaming content."
              ghLink="https://github.com/MNihal7961/Netflix-clone"
              demoLink="https://netflix-clone-five-blush.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Olx}
              isBlog={false}
              title="Olx"
              description="Implemented with React, Firebase, Tailwind CSS, and React-Vite, this OLX website clone offers a seamless user experience. Built with JavaScript, it replicates OLX's functionality, enabling users to buy and sell products effortlessly."
              ghLink="https://github.com/MNihal7961/olx-clone"
              demoLink="https://olx-clone-jade.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Crud}
              isBlog={false}
              title="Crud App"
              description="This CRUD application utilizes MongoDB, React, Vite, Tailwind CSS, Node.js, and Express. It features Cloudinary integration for profile image uploading. Users can create, read, update, and delete data seamlessly across the platform."
              ghLink="https://github.com/MNihal7961/MERN-user_mangement-CRUD-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ea}
              isBlog={false}
              title="Ea Sports"
              description="An EA Sports responsive clone, meticulously crafted with HTML, CSS, and Bootstrap. It faithfully replicates the original site's design and functionality, ensuring seamless navigation and optimal performance across all devices for an immersive gaming experience."
              ghLink="https://github.com/MNihal7961/EA_Clone_Responsive"
              demoLink="https://mnihal7961.github.io/EA_Clone_Responsive/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Amazon}
              isBlog={false}
              title="Amazon"
              description="A meticulous clone of the Amazon website, meticulously crafted using HTML and CSS. This static website faithfully replicates Amazon's layout and design, providing users with a familiar browsing experience within a responsive and visually appealing interface."
              ghLink="https://github.com/MNihal7961/Amazon_Clone"
              demoLink="https://mnihal7961.github.io/Amazon_Clone/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
