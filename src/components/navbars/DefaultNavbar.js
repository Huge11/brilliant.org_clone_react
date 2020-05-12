import React, {useState} from "react";

import { useLocation } from 'react-router-dom'

import { 
  MDBContainer as Container, 
  // MDBRow as Row,
  // MDBCol as Col,
  MDBBtn as Button,
  MDBNavbar as Navbar, 
  MDBNavbarBrand as Brand, 
  MDBNavbarNav, 
  MDBNavItem as NavItem, 
  MDBNavLink as NavLink, 
  MDBNavbarToggler, 
  MDBCollapse, 
  MDBDropdown,
  MDBDropdownToggle, 
  MDBDropdownMenu, 
  MDBDropdownItem as DropdownItem, 
  MDBIcon } from "mdbreact";

// import logo from "assests/brand/fb_cover_long_yellow_blue_bg.png";


function NavbarPage (){

  return (
    <Navbar className="border-bottom" color="white" light expand="md" fixed="top">
      <Container>
        <InnerNavbar className="m-auto" />
      </Container>
    </Navbar>
  );
}

export default NavbarPage;



function InnerNavbar(){
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const toggleCollapse = () => setIsOpen(!isOpen)
  return (
    <>
      <Brand href="/brand/fb_cover_long_yellow_blue_bg.png">
        {/* <img src={logo}></img> */}
        <strong className="">Daily Guitar Workout</strong>
      </Brand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav left>
          <NavItem active={location.pathname === "/daily-challenges"}>
            <NavLink link to="/daily-challenges">Today</NavLink>
          </NavItem>
          <NavItem active={location.pathname === "/courses"}>
            <NavLink link to="/courses">Courses</NavLink>
          </NavItem>
          <NavItem active={location.pathname === "/practice"}>
            <NavLink link to="/practice">Practice</NavLink>
          </NavItem>

        </MDBNavbarNav>
        <MDBNavbarNav right>

          <NavItem>
            <NavLink className="waves-effect waves-light" to="/give-premium">
              <Button size="sm" color="green">Gift Premium</Button>
            </NavLink>
          </NavItem>
          <NavItem>
            <MDBDropdown size="lg">
              <MDBDropdownToggle nav>
                <MDBIcon icon="bars" />
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default">
                <DropdownItem href="#!">Action</DropdownItem>
                <DropdownItem href="#!">Another Action</DropdownItem>
                <DropdownItem href="#!">Something else here</DropdownItem>
                <DropdownItem href="#!">Something else here</DropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </NavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </>
  )
}

function Dropdown(){
  return(
    <NavItem>
      <MDBDropdown>
        <MDBDropdownToggle nav caret>
          <div className="d-none d-md-inline">Dropdown</div>
        </MDBDropdownToggle>
        <MDBDropdownMenu className="dropdown-default">
          <DropdownItem href="#!">Action</DropdownItem>
          <DropdownItem href="#!">Another Action</DropdownItem>
          <DropdownItem href="#!">Something else here</DropdownItem>
          <DropdownItem href="#!">Something else here</DropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </NavItem>
  )
}

function FacebookLink(){
  return(
    <NavItem>
      <NavLink className="waves-effect waves-light" to="https://facebook.com/dailyguitarworkout">
        <MDBIcon fab icon="facebook" />
      </NavLink>
    </NavItem>
  )
}