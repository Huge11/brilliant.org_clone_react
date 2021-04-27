import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

const SuccessAlert = ({toggle, message="Success!"}) => {
  return(
    <SweetAlert 
      onConfirm={ toggle }
      title={ message }
      type="success"
    /> 
  )
}

export default SuccessAlert