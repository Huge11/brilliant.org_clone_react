import React from 'react'

import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBBtn as Button
} from 'mdbreact'

// import Masonry from './Masonry'

import landingImage from 'assets/img/jacek-dylag-hUHzaiAHuUc-unsplash.jpg'

function LandingPage(){
  return(
    <Container className="pt-5">
      <Row className="pt-5 background">
        <Col className="m-auto">
          <h1 className="display-3"><strong>Learn to think like a musician</strong></h1>
          <div>
            Build real guitar skills with fun and challenging interactive lessons.  Learn the tricks real musicians use to create music people love.  
          </div>
          <Button className="mt-5" color="black">Start Free Trial</Button>
        </Col>
        <Col>
          <img className="img-fluid z-depth-3 rounded" src={landingImage} alt="..." />
        </Col>
      </Row>
      <hr />
      <Row className="justify-content-center pt-5 mt-5">
        <h2 className="text-center"><strong>Experience the guitar in a new way</strong></h2>
        <p>
          <small>
            Daily Guitar Workout helps you think about the guitar interactively, and teaches you to understand 
            what is happening deeply. Our courses will inspire your curiosity, remind you why music is so amazing, 
            and, at it's core, teach you a new way of thinking.
          </small>
        </p>
      </Row>
      <Row>

      </Row>
    </Container>
  )
}

export default LandingPage