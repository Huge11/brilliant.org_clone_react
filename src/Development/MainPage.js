import React from 'react';

import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBCard as Card,
  MDBBtn as Button
} from 'mdbreact'

import Quizzes from './quizzes/index.js'

function MainPage(){
  const createProjectCards = projects => projects.map(project=><DevCard {...project} />)

  return(
    <Container className="pt-5">
      <Row>
        {createProjectCards(Quizzes)}
      </Row>
    </Container>
  )
}

export default MainPage



function DevCard(props){
  return(
    <Col xs='3' sm="3" md="3" lg="3" xl="3">
      <Card>
        {props.name ? props.name : "No Name"}
        <Button href={"/dev/"+props.name}>Check it out</Button>
      </Card>
    </Col>
  )
}