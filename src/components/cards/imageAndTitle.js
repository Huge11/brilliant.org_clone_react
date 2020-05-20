import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';

const CardExample = () => {
  return (
    <MDBCard>
      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" waves />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
        <MDBBtn href="#">Click</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  )
}

export default CardExample;