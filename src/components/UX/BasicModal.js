import React from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

function ModalPage({isOpen, toggleModal, title, body}){

  return (
    <MDBModal isOpen={isOpen} toggle={toggleModal} centered>
      <MDBModalHeader toggle={toggleModal}>{title}</MDBModalHeader>
      <MDBModalBody>
        {body}
      </MDBModalBody>
      {/* <MDBModalFooter>
        <MDBBtn color="secondary" onClick={toggleModal}>Close</MDBBtn>
        <MDBBtn color="primary">Save changes</MDBBtn>
      </MDBModalFooter> */}
    </MDBModal>
  );

}

export default ModalPage;