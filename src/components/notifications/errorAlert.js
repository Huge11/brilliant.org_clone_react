import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

const ErrorAlert = ({toggle, errorAlert="Whoops! Encountered an error"}) => {
  return(
    <SweetAlert 
      onConfirm={ toggle }
      title={ errorAlert }
      type="error"
    /> 
  )
}

export default ErrorAlert