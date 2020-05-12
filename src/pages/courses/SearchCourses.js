import React from 'react'

import * as Registry from 'RegistryController.js' 

import { 
  MDBContainer as Container, 
  MDBRow as Row,
  MDBCol as Col,
} from "mdbreact"

import CourseCard from 'components/cards/imageAndTitle'

import SearchBar from 'components/UX/SearchBar.js'
import PillsNav from 'components/UX/PillsNav'


function SearchCourses(){
  return(
    <Container fluid>
      <Container className="pt-5">
        {/* @TODO make nav sticky to top after scroll past */}
        <Row className="grey lighten-4">
          <Col className="pt-4" xs={12} sm={12} md={4} lg={4} xl={4} >
            <h5 className="h4">Browse all courses</h5>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={8}>
            <SearchBar className="grey lighten-2"/>
             <PillsNav />
          </Col>
        </Row>
        <Row className="pt-5">
          <h6 className="h5">Beginner Courses</h6>
          <hr/>
          <Row>
            <SpacedCourseCard />
            <SpacedCourseCard />
            <SpacedCourseCard />
            <SpacedCourseCard />
            <SpacedCourseCard />
          </Row>
        </Row>
        <Row className="pt-5">
          <h6 className="h5">Intermediate Courses</h6>
          <hr/>
          <Row>
            <SpacedCourseCard />
            <SpacedCourseCard />
            <SpacedCourseCard />
            <SpacedCourseCard />
            <SpacedCourseCard />
            <SpacedCourseCard />
            <SpacedCourseCard />
          </Row>
        </Row>
      </Container>
    </Container>
  )
}

export default SearchCourses


function SpacedCourseCard(props){
  return(
    <Col className="p-3" xs={6} sm={6} md={4} lg={3} xl={3} >
      <CourseCard {...props} />
    </Col>
  )
}