import React, {useState} from "react";
import { 
  MDBContainer, 
  MDBRow, 
  MDBCol, 
  // MDBInput, 
  MDBBtn, 
  // MDBCard, 
  // MDBCardBody ,
  MDBModal,
  // MDBModalBody,
  // MDBModalFooter,
  // MDBModalHeader,
  MDBInputGroup,
  MDBIcon
} from 'mdbreact';

import ErrorAlert from "components/notifications/ErrorAlert.js"
import SuccessAlert from "components/notifications/SuccessAlert.js"

import Spinner from "components/UX/Spinner"

import { loginWithEmailAndPassword } from 'utils/firebase/auth'


const LoginModal = ({isOpen=false, toggle})=>{
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  // const toggleLoading = ()=>setLoading(!loading)

  const login = (e)=>{      
    e.preventDefault()   
    setLoading(true)          
    loginWithEmailAndPassword(email,password)
      .then(()=>{
        setLoading(false)
        setSuccess("You're now logged in!")
        toggle()
      })
      .catch(e=>{
        setLoading(false)
        setError(e.message)
        console.error(e)
      })
  }

  return(
    <MDBModal isOpen={isOpen} toggle={toggle} size="lg">
      {error ? <ErrorAlert toggle={()=>setError(false)} message={error} /> : null }
      {success ? <SuccessAlert toggle={()=>setSuccess(false)} message={success} /> : null }

      <MDBContainer fluid className="px-0"> 
        <MDBRow middle className="w-100 m-0">
          <MDBCol lg="6" xl="6" className="d-none d-lg-block p-0" >
            <img src="/img/lucas-leon-IsS7vIQa898-unsplash.jpg" alt="..." className="img-fluid" />
          </MDBCol>
          <MDBCol xs="12" sm="12" md="12" lg="6" xl="6" >
            <MDBIcon icon="times" pull="right" className="p-2 clickable" onClick={toggle}></MDBIcon>
            <form className="px-5 pb-5 pt-3">
              <p className="h4 text-center py-4">Login</p>
              <div className="grey-text">
                <MDBInputGroup
                  prepend={<MDBIcon icon="envelope" size="lg" className="p-2" />}
                  label="Your email"
                  type="email"
                  error="wrong"
                  success="right"
                  getValue={setEmail}
                />
                <MDBInputGroup
                  prepend={<MDBIcon icon="lock" size="lg" className="p-2" />}
                  label="Your password"
                  type="password"
                  getValue={setPassword}
                />
              </div>
              <div className="text-center py-4 mt-3">
                <MDBBtn color="cyan" onClick={login} >
                  Login

                </MDBBtn>
                <MDBBtn color="dark" onClick={toggle}>Cancel</MDBBtn>
              </div>
            </form>
            {loading ? <Spinner /> : null}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBModal>
  )
}

export default LoginModal;