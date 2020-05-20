import React, {useState, useContext} from "react";

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

import LoginModal from "components/auth/LoginModal";
import SignupModal from "components/auth/SignupModal";
// import logo from "assests/brand/fb_cover_long_yellow_blue_bg.png";

import {signout} from 'utils/firebase/auth' 
import { UserContext } from 'utils/contexts/user'


function NavbarPage (){
  const location = useLocation()

  const user = useContext(UserContext)

  const [mobileIsOpen, setMobileIsOpen] = useState(false)
  const toggleCollapse = () => setMobileIsOpen(!mobileIsOpen)
  const [signupIsOpen, setSignupIsOpen] = useState(false)
  const toggleSignup = () => setSignupIsOpen(!signupIsOpen)
  const [loginIsOpen, setLoginIsOpen] = useState(false)
  const toggleLogin = () => setLoginIsOpen(!loginIsOpen)

  console.log(loginIsOpen)
  console.log(signupIsOpen)

  return (
    <Navbar className="border-bottom" color="white" light expand="md" fixed="top">
      { loginIsOpen ? <LoginModal isOpen={loginIsOpen} toggle={toggleLogin} /> : console.log("no login modal") }
      { signupIsOpen ? <SignupModal isOpen={signupIsOpen} toggle={toggleSignup} /> : console.log("no signup modal") }
      <Container>
        <Brand href="/brand/fb_cover_long_yellow_blue_bg.png">
          {/* <img src={logo}></img> */}
          <strong className="">Daily Guitar Workout</strong>
        </Brand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={mobileIsOpen} navbar>
          <MDBNavbarNav left>
            <NavItem active={location.pathname === "/daily-challenges"}>
              <NavLink link to="/daily-challenges">Today</NavLink>
            </NavItem>
            <NavItem active={location.pathname === "/courses"}>
              <NavLink link to="/courses">Courses</NavLink>
            </NavItem>
            <NavItem active={location.pathname === "/practice"}>
              <NavLink link to="/courses/learn-the-basic-chord-shapes/learn-the-A-shape">Practice</NavLink>
            </NavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <NavItem>
              <NavLink className="waves-effect waves-light p-0" to="/give-premium">
                <Button size="md" color="green">Gift Premium</Button>
              </NavLink>
            </NavItem>
            {!user ? 
              <>
                <NavItem>
                  <NavLink className="waves-effect waves-light p-0" to="#">
                    <Button size="md" color="primary" onClick={toggleSignup}>Signup</Button>
                  </NavLink>
                </NavItem>
                <NavItem className="">
                  <NavLink className="waves-effect waves-light p-0" to="#">
                    <Button size="md" color="default" onClick={toggleLogin}>Login</Button>
                  </NavLink>
                </NavItem>
              </>
            : 
              null
            }
            <NavItem className="m-auto">
              <MDBDropdown size="lg">
                <MDBDropdownToggle nav>
                  <MDBIcon icon="bars" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <DropdownItem onClick={signout}>Logout</DropdownItem>
                  <DropdownItem href="#!">Another Action</DropdownItem>
                  <DropdownItem href="#!">Something else here</DropdownItem>
                  <DropdownItem href="#!">Something else here</DropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </NavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPage;

// function Dropdown(){
//   return(
//     <NavItem>
//       <MDBDropdown>
//         <MDBDropdownToggle nav caret>
//           <div className="d-none d-md-inline">Dropdown</div>
//         </MDBDropdownToggle>
//         <MDBDropdownMenu className="dropdown-default">
//           <DropdownItem href="#!">Action</DropdownItem>
//           <DropdownItem href="#!">Another Action</DropdownItem>
//           <DropdownItem href="#!">Something else here</DropdownItem>
//           <DropdownItem href="#!">Something else here</DropdownItem>
//         </MDBDropdownMenu>
//       </MDBDropdown>
//     </NavItem>
//   )
// }

// function FacebookLink(){
//   return(
//     <NavItem>
//       <NavLink className="waves-effect waves-light" to="https://facebook.com/dailyguitarworkout">
//         <MDBIcon fab icon="facebook" />
//       </NavLink>
//     </NavItem>
//   )
// }