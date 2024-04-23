import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nihal M </span>
            from <span className="purple"> Kerala, India.</span>
            <br />
            I am currently Intern as a software developer at Brototype.
            <br />
            I have completed a Full Stack Bootcamp at Brototype in Kozhikode, Kerala, gaining expertise in both frontend and backend development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Bug Bounty
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nihal M</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
