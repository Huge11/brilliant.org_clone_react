import React from 'react'

import * as Registry from 'RegistryController.js' 

import { 
  MDBContainer as Container, 
  MDBRow as Row,
  MDBCol as Col,
  MDBCard as Card,
  MDBCardImage as CardImage,
  MDBCardBody as CardBody,
  MDBCardTitle as CardTitle,
  MDBCardText as CardText,
  MDBBtn as Button,
} from "mdbreact"

import {Link} from 'react-router-dom'

// import CourseCard from 'components/cards/imageAndTitle'

import SearchBar from 'components/UX/SearchBar.js'
import PillsNav from 'components/UX/PillsNav'
// import { Categories } from '../../Registry'


function SearchCourses(){
  const createCategoryRows = categories => categories.map(category=><CategoryRow category={category} />)
  
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
        {createCategoryRows(Registry.getCategories())}
      </Container>
    </Container>
  )
}

export default SearchCourses


function CategoryRow({category}){
  const Courses = Registry.getCoursesByCategory(category.name)
  const createCourseCards = courses => courses.map(course=><SpacedCourseCard course={course}/>)

  return (
    <>
      { Courses.length > 0
        ?
          <Container className="pt-5">
            <h6 className="h5">{category.title}</h6>
            <hr/>
            <Row>
              {createCourseCards(Courses)}
            </Row>
          </Container>
        :
          null
      }
    </>
  )
}

function SpacedCourseCard(props){
  return(
    <Col className="p-3" xs={6} sm={6} md={4} lg={3} xl={3} >
      <CourseCard {...props} />
    </Col>
  )
}

function CourseCard({course}){
  return(
    <Card>
      <CardImage className="img-fluid" src={course.img ? course.img : "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"} waves />
      <CardBody>
        <CardTitle>{course.title}</CardTitle>
        <CardText>{course.description}</CardText>
        <Link  to={"courses/"+course.name} ><Button block>Go to course</Button></Link>
      </CardBody>
    </Card>
  )
}