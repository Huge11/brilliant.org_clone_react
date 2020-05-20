import React, {useState} from 'react';
import { Link, useRouteMatch } from 'react-router-dom'

import * as Registry from 'RegistryController.js'

import { 
  MDBContainer as Container, 
  MDBRow as Row,
  MDBCol as Col,
  MDBLink,
  MDBIcon as Icon,
  MDBBtn,
  MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText 
} from "mdbreact"


import BasicModal from 'components/UX/BasicModal.js'
import NumInCircle from 'components/UX/NumInCircle';
// import QuizCard from 'components/cards/imageAndTitle.js'


function CoursePage({course}){
  // console.log(props)
  const [readMore, setReadMore] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const toggleModal = ()=>setModalIsOpen(!modalIsOpen)
  const getNumQuizzes = ()=>Registry.getAllQuizzesByCourse(course.name).length
  const getNumExercises = ()=>Registry.getAllQuizzesByCourse(course.name).reduce((accum,val)=>{return accum.concat(val.pages)},[]).length

  const createChapterRows = (chapters)=>chapters.map(chapter=><ChapterRow chapter={chapter} />)

  return(
    <Container fluid className="background">
      <Container fluid className="grey lighten-4 background">
        <BasicModal isOpen={modalIsOpen} toggleModal={toggleModal} title={<ModalTitle {...course} />} body={<ModalBody {...course} />} />
        <Container className="pt-5 ">
          <Row>
            <Col xs={12} sm={12} md={7} lg={7} xl={7} >
              <MDBLink className="text-muted" link to="/courses"><Icon icon="angle-double-left" /> Back to courses</MDBLink>
              <h1><strong>{course.title}</strong></h1>
              <h3 className="pt-3">{course.subTitle}</h3>
              <div>
                <div className="pt-5" dangerouslySetInnerHTML={{__html: course.descriptionHtml}}></div> 
                <MDBLink className="text-muted p-0" onClick={()=>{setReadMore(true)}} hidden={readMore}>...Read More</MDBLink>
              </div>
              
              {readMore ? <ReadMoreSection courseName={course.name} /> : null}
              <MDBLink className="text-muted pt-5" onClick={toggleModal}>View prerequisites and next steps</MDBLink>
            </Col>
            <Col className="pt-5" xs={12} sm={12} md={5} lg={5} xl={5} >
              <MDBCard>
                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                  waves />
                <MDBCardBody>
                  <Row>
                    <Col>
                      <div className="h2">{getNumQuizzes()}</div>
                      <div className="text-muted">interactive quizzes</div>
                    </Col>
                    <Col>
                      <div className="h2">{getNumExercises()}</div>
                      <div className="text-muted">Concepts and Exercises</div>              
                    </Col>
                  </Row>
                  <MDBBtn fluid block size="lg" className="mt-3"><strong>Continue Course</strong></MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="pt-5">
        {createChapterRows(Registry.getChaptersByCourse(course.name))}
      </Container> 
      <Container className="pt-5">
        <Row>
          <Col>
            <div className="text-muted">Prerequisites</div>
            <hr />
            <Row>
              <img src="https://via.placeholder.com/150" alt="..."/>
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
              <img src="https://via.placeholder.com/150" alt="..." />
              <Col>
                <div className="h5">Title</div>
                <div>Description</div>
              </Col>
            </Row>
            <Row className="pt-5">
              <img src="https://via.placeholder.com/150" alt="..." />
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

function ChapterRow({chapter}){
  console.log(chapter)
  const createQuizCards = quizzes => quizzes.map(quiz=><SpacedQuizCard quiz={quiz} />)

  return(
    <Container fluid className="pt-5">
      <Row>
        <NumInCircle num="1"/>
        <Col>
          <h2>{chapter.title}</h2>
          <div>{chapter.description}</div>
        </Col>
      </Row>
      <Row>
        {createQuizCards(Registry.getQuizzesByChapter(chapter))}
      </Row>
    </Container>
  )
}


function SpacedQuizCard(props){
  return(
    <Col className="pt-5" xs={12} sm={6} md={4} lg={3} xl={3}>
      <QuizCard {...props} />
    </Col>
  )
}

function QuizCard({quiz}){
  const {path} = useRouteMatch()

  return(
    <MDBCard>
      <MDBCardImage className="img-fluid" src={ quiz.img ? quiz.img : "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"} waves />
      <MDBCardBody>
        <MDBCardTitle>{quiz.title}</MDBCardTitle>
        <MDBCardText>{quiz.description}</MDBCardText>
        <Link to={path+"/"+quiz.name}><MDBBtn block >Go To Quiz</MDBBtn></Link>
      </MDBCardBody>
    </MDBCard>
  )
}

function ReadMoreSection({courseName}){
  const quizzes = Registry.getAllQuizzesByCourse(courseName)
  const createTopics = arr => arr.map(item=><div>{item.title}</div>)
  // console.log(quizzes)
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
              <img src="https://via.placeholder.com/100" alt="..." />
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
              <img src="https://via.placeholder.com/100.png" alt="..." />
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