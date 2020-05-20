import React, {useState} from "react";

import ValidateEmail from 'utils/validators/email.js'
import { registerWithEmailAndPassword, loginWithEmailAndPassword, updateFirebaseProfile } from 'utils/firebase/auth'

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

import ErrorAlert from "components/notifications/errorAlert.js"
import Spinner from 'components/UX/Spinner'


const SignupModal = ({isOpen=false, toggle})=>{
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const toggleLoading = ()=>setLoading(!loading)

  const register = (e)=>{
    e.preventDefault()
    toggleLoading()
    let error = false
    if (password !== password2){
      error="Your passwords don't match"
    }
    if(typeof name != 'string' || name.length < 1 ){
      error="Please enter a display name"
    }
    if (!ValidateEmail(email)){
      error="Email is invalid"
    }

    if(!error){
      return registerWithEmailAndPassword(email,password)
        .then(()=>{
          return loginWithEmailAndPassword(email,password)
        })
        .then(()=>{
          return updateFirebaseProfile({displayName: name})
        })
        .then(()=>{
          toggleLoading()
          toggle()
        })
        .catch(e=>{
          console.error(e)
          setError(e.message)
        })
    }else{
      toggleLoading()
      setError(error)
    }

  }


  return(
    <MDBModal isOpen={isOpen} toggle={toggle} size="lg">
      {error ? <ErrorAlert toggle={()=>setError(false)} errorAlert={error} /> : null }
      {/* <MDBModalBody> */}
        <MDBContainer fluid className="px-0"> 
          <MDBRow middle className="w-100 m-0">
            <MDBCol lg="6" xl="6" className="d-none d-lg-block p-0" >
              <img src="/img/lucas-leon-IsS7vIQa898-unsplash.jpg" alt="..." className="img-fluid" />
            </MDBCol>
            <MDBCol xs="12" sm="12" md="12" lg="6" xl="6" >
              <MDBIcon icon="times" pull="right" className="p-2 clickable" onClick={toggle}></MDBIcon>
              <form className="px-5 pb-5 pt-3">
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
                  <MDBInputGroup
                    prepend={<MDBIcon icon="user" size="lg" className="p-2" />}
                    label="Your name"
                    type="text"
                    error="wrong"
                    success="right"
                    getValue={setName}
                  />
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
                    label="Your Password"
                    type="password"
                    error="wrong"
                    success="right"
                    getValue={setPassword}
                  />
                  <MDBInputGroup
                    prepend={<MDBIcon icon="exclamation-triangle" size="lg" className="p-2" />}
                    label="Confirm your password"
                    type="password"
                    getValue={setPassword2}
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" onClick={register}>
                    Register
                    
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

export default SignupModal
