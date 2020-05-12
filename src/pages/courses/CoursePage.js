import React, {useState} from 'react';

import * as Registry from 'RegistryController.js'

import { 
  MDBContainer as Container, 
  MDBRow as Row,
  MDBCol as Col,
  MDBLink as Link,
  MDBIcon as Icon
} from "mdbreact"

import BasicModal from 'components/UX/BasicModal.js'

// const tempCoursesData = {
//   name: "learn-the-basic-chord-shapes",
//   title: "Learn the Basic Chord Shapes",
//   categories: ["beginner", "chords"],
//   chapters: [
//     {
//       name: "introduction", title: "Introduction", 
//       quizzes: [
//         "learn-the-A-shape"
//       ] // end quizzes
//     } // end chapter
//   ] // end chapters
// } // end course

function CoursePage(props){
  const [readMore, setReadMore] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const toggleModal = ()=>setModalIsOpen(!modalIsOpen)

  return(
    <Container fluid className="grey lighten-4 background">
      <BasicModal isOpen={modalIsOpen} toggleModal={toggleModal} />
      <Container className="pt-5 ">
        <Row>
          <Col xs={12} sm={12} md={7} lg={7} xl={7} >
            <Link className="text-muted" link to="/courses"><Icon icon="angle-double-left" /> Back to courses</Link>
            <h1><strong>{props.title}</strong></h1>
            <h3 className="pt-3">{props.subTitle}</h3>
            <div>
              <div className="pt-5" dangerouslySetInnerHTML={{__html: props.descriptionHtml}}></div> 
              <Link className="text-muted p-0" onClick={()=>{setReadMore(true)}} hidden={readMore}>...Read More</Link>
            </div>
            
            {readMore ? <ReadMoreSection courseName={props.name} /> : null}
            <Link className="text-muted pt-5" onClick={toggleModal}>View prerequisites and next steps</Link>
          </Col>
          <Col xs={12} sm={12} md={5} lg={5} xl={5} >

          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default CoursePage;



function ReadMoreSection({courseName}){
  const quizzes = Registry.getAllQuizzesByCourse(courseName)
  const createTopics = arr => arr.map(item=><div>{item.name}</div>)
  console.log(quizzes)
  return(
    <div className="pt-3">
      <h6><strong>Topics Covered</strong></h6>
      <Row>
        <Col xs={12} sm={6}>
          {createTopics(quizzes.slice(0, Math.ceil(quizzes.length/2)))}
        </Col>
        <Col xs={12} sm={6}>
          {createTopics(quizzes.slice(Math.ceil(quizzes.length)))}
        </Col>
      </Row>
    </div>
  )
}