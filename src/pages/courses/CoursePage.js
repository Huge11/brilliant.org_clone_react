import React, {useState} from 'react';

import * as Registry from 'RegistryController.js'

import { 
  MDBContainer as Container, 
  MDBRow as Row,
  MDBCol as Col,
  MDBLink as Link,
  MDBIcon as Icon,
  MDBBtn,
  MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText 
} from "mdbreact"


import BasicModal from 'components/UX/BasicModal.js'
import NumInCircle from 'components/UX/NumInCircle';
import QuizCard from 'components/cards/imageAndTitle.js'


function CoursePage(props){
  const [readMore, setReadMore] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const toggleModal = ()=>setModalIsOpen(!modalIsOpen)

  return(
    <Container fluid className="background">
      <Container fluid className="grey lighten-4 background">
        <BasicModal isOpen={modalIsOpen} toggleModal={toggleModal} title={<ModalTitle {...props} />} body={<ModalBody {...props} />} />
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
            <Col className="pt-5" xs={12} sm={12} md={5} lg={5} xl={5} >
              <MDBCard>
                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                  waves />
                <MDBCardBody>
                  {/* <MDBCardTitle>{props.title}</MDBCardTitle>
                  <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText> */}
                  <Row>
                    <Col>
                      <div className="h2">39</div>
                      <div className="text-muted">interactive quizzes</div>
                    </Col>
                    <Col>
                      <div className="h2">394+</div>
                      <div className="text-muted">Concepts and Exercises</div>              
                    </Col>
                  </Row>
                  <MDBBtn fluid href="#" className="mt-3 btn-block btn-lg"><strong>Continue Course</strong></MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="pt-5">
        <Container fluid>
          <Row>
            <NumInCircle num="1"/>
            <Col>
              <h2>Chapter Title</h2>
              <div>Chapter Summary</div>
            </Col>
          </Row>
          <Row>
            <SpacedQuizCard />
          </Row>
        </Container>
        <Container fluid className="pt-5">
          <Row>
            <NumInCircle num="2"/>
            <Col>
              <h2>Chapter Title</h2>
              <div>Chapter Summary</div>
            </Col>
          </Row>
          <Row>
            <SpacedQuizCard />
            <SpacedQuizCard />
            <SpacedQuizCard />

          </Row>
        </Container>
        <Container fluid className="pt-5">
          <Row>
            <NumInCircle num="3"/>
            <Col>
              <h2>Chapter Title</h2>
              <div>Chapter Summary</div>
            </Col>
          </Row>
          <Row>
            <SpacedQuizCard />
            <SpacedQuizCard />
          </Row>
        </Container>
      </Container>
      <Container className="pt-5">
        <Row>
          <Col>
            <div className="text-muted">Prerequisites</div>
            <hr />
            <Row>
              <img src="https://via.placeholder.com/150" />
              <Col>
                <div className="h5">Title</div>
                <div>Description</div>
              </Col>
            </Row>
          </Col>
          <Col>
            <div className="text-muted">Next Steps</div>
            <hr />
            <Row>
              <img src="https://via.placeholder.com/150" />
              <Col>
                <div className="h5">Title</div>
                <div>Description</div>
              </Col>
            </Row>
            <Row className="pt-5">
              <img src="https://via.placeholder.com/150" />
              <Col>
                <div className="h5">Title</div>
                <div>Description</div>
              </Col>
            </Row>            
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default CoursePage;


function SpacedQuizCard(props){
  return(
    <Col className="pt-5" xs={12} sm={6} md={4} lg={3} xl={3}>
      <QuizCard {...props} />
    </Col>
  )
}

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

function ModalTitle(props){
  return(
    <>
      <h5>{props.title}</h5>
      <h2>Prerequisites and Next Steps</h2>
      <p>{props.preReqAndNextStepsText}</p>
    </>
  )
}

function ModalBody(props){
  return(
    <>
      <Row>
        <Col>
          <h6>PREREQUISITES</h6>
          <hr />
          <Row>
            <Col>
              <img src="https://via.placeholder.com/100" />
            </Col>
            <Col>
              <p><strong>Course Title</strong></p>
              <div>Course description lorem ipsum delorus cupiditate vel dolor minima optio</div>
            </Col>
          </Row>
        </Col>
        <Col>
          <h6>NEXT STEPS</h6>
          <hr />
          <Row>
            <Col>
              <img src="https://via.placeholder.com/100.png" />
            </Col>
            <Col>
              <p><strong>Course Title</strong></p>
              <div>Course description lorem ipsum delorus cupiditate vel dolor minima optio</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}