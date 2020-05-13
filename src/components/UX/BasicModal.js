import React from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

function ModalPage({isOpen, toggleModal, title, body, footer=false}){

  return (
    <MDBModal isOpen={isOpen} toggle={toggleModal} centered size="lg">
      <MDBModalHeader toggle={toggleModal}>{title}</MDBModalHeader>
      <MDBModalBody>
        {body}
      </MDBModalBody>
      { footer 
        ? 
          <MDBModalFooter>
            {footer}
            {/* <MDBBtn color="secondary" onClick={toggleModal}>Close</MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn> */}
          </MDBModalFooter>
        :
          null
      }
    </MDBModal>
  );

}

export default ModalPage;