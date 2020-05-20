

import firebase from './index.js'
import 'firebase/auth';

const auth = firebase.auth()

export default auth


export const getFirebaseUser = ()=> firebase.auth().currentUser
export const signout = ()=>firebase.auth().signOut()
export const loginWithEmailAndPassword = (email,password) => firebase.auth().signInWithEmailAndPassword(email, password)
export const registerWithEmailAndPassword = (email, password) => firebase.auth().createUserWithEmailAndPassword(email,password)
export const updateFirebaseProfile = update => firebase.auth().currentUser.updateProfile(update)



// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)

// export const auth = firebase.auth()
// // export const firestore = firebase.firestore()

// export const updateUserEmail = (newEmail)=>{
//   return firebase.auth().currentUser.updateEmail(newEmail)
//     .catch(e=>{
//       console.error(e)
//     })
// }

// export const registerWithEmailAndPassword = (email,password)=>{
//   return firebase.auth().createUserWithEmailAndPassword(email, password)
//     .catch(e=>{console.error(e)
// });
// }
// export const signOut = ()=>{
//   return firebase.auth().signOut()
//     .catch(e=>{console.error(e)})
// }

// export const signInAsGuest = ()=>{
//   return firebase.auth().signInWithEmailAndPassword("guest@gmail.com", "password")
//     .catch(e=> console.error({error: e, message: "couldn't sign in as guest"}))
// }



// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

// const fbProvider = new firebase.auth.FacebookAuthProvider();
// fbProvider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithFacebook = ()=> auth.signInWithPopup(fbProvider);

