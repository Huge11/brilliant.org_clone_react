import React, {useState} from "react";

// import Link from 'next/link'
// import { useRouter } from 'next/router'

import SweetAlert from 'react-bootstrap-sweetalert';

import { 
  MDBContainer as Container, 
  // MDBRow as Row,
  // MDBCol as Col,
  MDBBtn as Button,
  MDBNavbar as Navbar, 
  MDBNavbarBrand as Brand, 
  MDBNavbarNav, 
  MDBNavItem as NavItem, 
  MDBNavLink, 
  MDBNavbarToggler, 
  MDBCollapse, 
  MDBDropdown,
  MDBDropdownToggle, 
  MDBDropdownMenu, 
  MDBDropdownItem as DropdownItem, 
  MDBIcon,
  MDBInputGroup as InputGroup 
} from "mdbreact";

import {addEmail} from 'utils/firebase/firestore'

// import logo from "assests/brand/fb_cover_long_yellow_blue_bg.png";


function NavbarPage (){
  // const router = useRouter()
  const [successAlert, setSuccessAlert] = useState(false)
  const [errorAlert, setErrorAlert] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [email,setEmail] = useState("")
  console.log(email)
  const toggleCollapse = () => setIsOpen(!isOpen)
  
  return (
    <Navbar className="border-bottom" color="white" light expand="md" fixed="top">
      <Container>
        {successAlert ? 
          <SweetAlert 
            onConfirm={()=>{setSuccessAlert(false)}}
            title="Success!"
            type="success"

          /> 
        : null}
        {errorAlert ? 
          <SweetAlert 
            onConfirm={()=>{setErrorAlert(false)}}
            title={ errorAlert ? errorAlert : "There was a problem adding your email address!" }
            type="error"
          /> 
          : null}
        <Brand>
          <strong className="">Daily Guitar Workout</strong>
        </Brand> 
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav right>
            <NavItem>
              <InputGroup
                material
                hint="email@gmail.com"
                containerClassName="mb-3 mt-0"
                append={<Button color='green' 
                onClick={(()=>{
                  addEmail(email)
                    .then(()=>{
                      setEmail("");
                      setSuccessAlert(true)
                    }).catch(e=>{
                      console.log(e);
                      setErrorAlert(e)
                    })
                })}>Sign Up</Button>}
                prepend="Sign up for early access"
                id="navEmailInput"
                type="email"
                value={email}
                getValue={setEmail}
              />
              {/* <Input label="Material input" /> */}
              {/* <Button size="md" color="green">Gift Premium</Button> */}
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
//       {/* <NavLink className="waves-effect waves-light" to="https://facebook.com/dailyguitarworkout"> */}
//       <Link href="https://facebook.com/dailyguitarworkout">
//         <MDBIcon fab icon="facebook" />
//       </Link>
//       {/* </NavLink> */}
//     </NavItem>
//   )
// }