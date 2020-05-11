import React from 'react';
import { 
  MDBBtn, 
  MDBCard, 
  MDBCardBody, 
  MDBCardImage, 
  MDBCardTitle, 
  MDBCardText, 
  MDBCol as Col,
  MDBRow as Row
} from 'mdbreact';

function BasicCard(){
  return (
    <MDBCard className="m-3">
      <MDBCardBody className="m-auto">
        <Row>
          <Col>
            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" waves />
          </Col>
          <Col>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
            <MDBBtn href="#">Click</MDBBtn>
          </Col>
        </Row>
      </MDBCardBody>
    </MDBCard>
  )
}

export default BasicCard;