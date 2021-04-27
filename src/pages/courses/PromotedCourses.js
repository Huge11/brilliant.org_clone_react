import React from 'react';

import CourseCard from 'components/cards/imageAndTitle.js'

import { 
  MDBContainer as Container, 
  MDBRow as Row,
  MDBCol as Col,
} from "mdbreact"

function PromotedCourses(){
  return(
    <Container fluid className="grey lighten-4 h-100 ">
      <Container className="pt-5">
        <div className="pb-5">
          <h1 className="display-5"><strong>Your Courses</strong></h1>
          <h3 className="h6">Courses you've worked on recently</h3>
          <Row className="mt-4">
            <SpacedCourseCard />
            <SpacedCourseCard />
            <SpacedCourseCard />
            <SpacedCourseCard />
          </Row>
        </div>
        <div className="pt-5 pb-5">
          <h1 className="display-5"><strong>Popular Courses</strong></h1>
          <h3 className="h6">Popular with our users this month</h3>
          <Row className="mt-4">
            <SpacedCourseCard />
            <SpacedCourseCard />
            <SpacedCourseCard />
            <SpacedCourseCard />
          </Row>
        </div>
        <div className="pt-5 pb-5">
          <h1 className="display-5"><strong>Recommended for you</strong></h1>
          <h3 className="h6">Users like you rate these courses highly</h3>
          <Row className="mt-4">
            <SpacedCourseCard />
            <SpacedCourseCard />
            <SpacedCourseCard />
            <SpacedCourseCard />
          </Row>
        </div>
      </Container>
    </Container>
  )
}

export default PromotedCourses


function SpacedCourseCard(props){
  return(
    <Col className="p-3" xs={6} sm={6} md={4} lg={3} xl={3} >
      <CourseCard {...props} />
    </Col>
  )
}