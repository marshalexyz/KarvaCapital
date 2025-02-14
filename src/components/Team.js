import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { TeamCard } from "./TeamCard";
import projImg1 from "../assets/img/karva.png";
import projImg2 from "../assets/img/solana.png";
import AC from "../assets/img/akademicrypto.jpg";
import projImg3 from "../assets/img/team9.png";
import projImg4 from "../assets/img/team7.png";
import projImg5 from "../assets/img/team6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Team = () => {

  const team = [
    {
      title: "Karvaregzel",
      description: "Founder",
      imgUrl: projImg1,

    },
    {
      title: "CryptoPunk",
      description: "Co-Founder",
      imgUrl: projImg5,
    },
    {
      title: "Akademi Crypto",
      description: "Inspiration",
      imgUrl: AC,
    },        
    {
      title: "Solana",
      description: "Partnership",
      imgUrl: projImg2,
    },
    {
      title: "Binance Labs",
      description: "Partnership",
      imgUrl: projImg4,
    },
    {
      title: "BlackRock",
      description: "Partnership",
      imgUrl: projImg3,
    },
    
  ];

  return (
    <section className="team" id="team">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <br></br>
               
                <br></br>
                <br></br>
                <center><h2>Team</h2>
                <p>We are a Unity!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          team.map((team, index) => {
                            return (
                              <TeamCard
                                key={index}
                                {...team}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container></center>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
