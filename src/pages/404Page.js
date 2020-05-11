import React from 'react'
import { 
  MDBCol, 
  MDBRow,
  MDBContainer as Container
} from 'mdbreact';
import logo from "assests/brand/fb_cover_long_yellow_blue_bg.png";


const NotFoundPage =  () => {
  return (
    <React.Fragment>
      <Container className="pt-5">
        <MDBRow className="bad-gateway-row">
          <MDBCol md="8">
            <img alt="Error 404" className="img-fluid" hieght="20px" src={logo}/>
            <h2 className="h2-responsive mt-3 mb-2">404. This is not the page you are looking for.</h2>
            <h4>The requested URL was not found on this server.</h4>
          </MDBCol>
          <MDBCol md="4">
            <img alt="Error 404" className="img-fluid" src="https://mdbootstrap.com/img/Others/grafika404-bf.png"/>
          </MDBCol>
        </MDBRow>
      </Container>
    </React.Fragment>
  )
}

export default NotFoundPage;