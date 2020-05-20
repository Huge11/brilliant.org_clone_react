import React from 'react';

// import * as Registry from 'RegistryController.js'

import { 
  MDBContainer as Container, 
  MDBRow as Row,
  MDBCol as Col,
  MDBLink as Link,
  MDBIcon as Icon,
  MDBProgress as ProgressBar,
  MDBBtn as Button,
  // MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText 
} from "mdbreact"

import WizardProvider, {WizardContext} from 'components/wizard/WizardContext'
import WizardDisplay from 'components/wizard/WizardDisplay'

function QuizPage({course,quiz}){
  return(
    <Container fluid className="h-100">
      <Row className="h-vh">
        <Col className="black pb-3 text-white pt-5 " xs={12} sm={12} md={12} lg={3} xl={3}>
          <Col>
            <Link link to={"/courses/"+course.name} className="text-white float-right"><Icon icon="angle-double-left" /> Back</Link>
            <div className="h6">{course.title}</div>
          </Col>
        </Col>
        <Col className="h-vh">
          <WizardProvider>
            <Row className="h-100">
              <Col className="h-100 border-right pt-5" xs={8} sm={8} md={8} lg={6} xl={6}>
                <WizardDisplay steps={[
                  (<div>This is the main Body component</div>), 
                  (<div>This is the second wizard components</div>)
                ]} />
              </Col>
              <Col className="h-100 pt-5 " xs={4} sm={4} md={4} lg={3} xl={3}>
                <WizardContext.Consumer>
                  {Wizard=>(
                    <div>
                      <Link className="text-muted text-center">Quiz 3 <Icon icon="angle-double-down" /></Link>
                      <div className="text-center h5"><strong>{quiz.title}</strong></div>
                      <ProgressBar material value={(Wizard.currentStep+1 / Wizard.steps.length)*100} color="success" className="my-2" />
                      <Row className="justify-content-center">
                        <Link className="text-muted text-center" onClick={Wizard.previousStep}><Icon icon="angle-double-left" /></Link>
                        <div>{Wizard.currentStep}</div>
                        <Link className="text-muted text-center" onClick={Wizard.nextStep}><Icon icon="angle-double-right" /></Link>
                      </Row>
                      <Button color="black" block onClick={Wizard.nextStep}>Continue</Button>
                    </div>
                  )}
                </WizardContext.Consumer>
              </Col>
              <Col className="d-none d-xl-block" xl={3}>
                {/* Spacing Component */}
              </Col>
            </Row>
          </WizardProvider>
        </Col>
      </Row>
    </Container>
  )
}

export default QuizPage