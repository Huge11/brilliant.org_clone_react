import firebase from './index'
import "firebase/firestore"

import ValidateEmail from 'utils/validators/email.js'



var db = firebase.firestore();

export const addEmail = email => {
  if (ValidateEmail(email)){
    return db.collection("emails").add({
      email: email,
      created: Date.now()
    })
  }else{
    return Promise.reject("Email address is invalid")
  }
}