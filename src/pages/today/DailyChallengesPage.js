import React from 'react';

import Calendar from 'components/utils/Calendar.js'
import BasicCard from 'components/cards/imageLeftContentRight.js'

import { 
  MDBContainer as Container, 
  MDBRow as Row,
  MDBCol as Col,
} from "mdbreact"

function TodayPage(){
  return(
    <Container fluid className=" ">
      <Row className="h-100">
        <Col className="grey lighten-4 d-none d-md-block background" md={5} lg={5} xl={5}>
          <Container className="pt-5">
            <Row>
              <Col md={4} lg={4} xl={4}>
                {/* Empty to fill space */}
              </Col>
              <Col md={8} lg={8} xl={8}>
                <h3 className="h1 pb-3">Today</h3>
                <h6 className="h5">Activity</h6>
                <hr/>
                <Calendar />
              </Col>
            </Row>
          </Container>
        </Col>
        <Col className="grey lighten-2 background" xs={12} sm={12} md={7} lg={7} xl={7}>
          <Container className="pt-5">
            <Row>
              <Col className="" xs={12} sm={12} md={12} lg={12} xl={9}>
                <h1 className="h3 text-center">Daily Challenges</h1>
                <hr/>
                <BasicCard />
                <BasicCard />
                <BasicCard />
                <BasicCard />
                <BasicCard />

              </Col>
              <Col xs={0} sm={0} md={0} lg={0} xl={3}>
                {/* Window Spacing column */}
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default TodayPage