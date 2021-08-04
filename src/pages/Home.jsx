import React from "react";
import Header from "../components/Header";

import Footer from "../components/Footer"
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
function Home(){
return (
  <div>
    <Header />
    <Container>
      <Row>
        <h4 id="about-me">About Me</h4>
        <p>Christopher Cho is a recent graduate of the University of California: Los Angeles, and has a BA in Sociology.
          He resides in Seoul, South Korea, where he is currently working for a headhunting firm for executive positions.
          Christopher is also fluent in Korean and English, and he is proficient in Adobe Photoshop, React, MongoDB, and CSS.</p>
      </Row>
      <hr></hr>
      <Row>
  
       
      </Row>
      <hr></hr>
      <Row>
        <Footer />
      </Row>
    </Container>

  </div>
)

}
export default Home;
