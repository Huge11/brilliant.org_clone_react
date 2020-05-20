import React from "react";
import { MDBNav, MDBNavLink } from "mdbreact";

function PillsNav (){
  return (
    <MDBNav>
      <MDBNavLink disabled to="#!">Jump To...</MDBNavLink>
      <MDBNavLink active to="#!">Beginner</MDBNavLink>
      <MDBNavLink to="#!">Intermediate</MDBNavLink>
      <MDBNavLink to="#!">Advanced</MDBNavLink>
    </MDBNav>
  );
}

export default PillsNav
