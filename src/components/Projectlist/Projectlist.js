import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import SER from '../../Assets/SER.jpg'
import Game from '../../Assets/Game.png'


function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={SER}
                isBlog={false}
                title="Speech emotion recognition"
                description="Emotion speech recognition project aims to analyze and classify emotions expressed in human speech using machine learning techniques for applications in healthcare, virtual assistants, and sentiment analysis"
                 
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Game}
                isBlog={false}
                title="Game using hand gestures"
                description="Creating a Python game that utilizes hand gestures for control and interaction, offering an immersive and unique gaming experience."
                 
              />
            </Col>

            

            

            
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist