import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

const ErrorAlert = ({toggle, message="Whoops! Encountered an error"}) => {
  return(
    <SweetAlert 
      onConfirm={ toggle }
      title={ message }
      type="error"
    /> 
  )
}

export default ErrorAlert