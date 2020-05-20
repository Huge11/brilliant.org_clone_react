import React, { useState, useEffect } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom'

import firebase from 'utils/firebase/index'
import { UserContext } from 'utils/contexts/user.js';

import Navbar from 'components/navbars/DefaultNavbar.js'
// Site Pages
import TodayPage from 'pages/today/index.js'
import CoursesRoutes from 'pages/courses/coursesRoutes.js'
// import {QuizzesRoutes} from 'pages/quizzes/index.js'
import PageNotFound from 'pages/404Page.js'

function App() {
  console.log("hit the app component")
  const [user, setUser] = useState(null)

  useEffect(()=>{
    return firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    });
  })

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <Navbar /> 
        <Switch>
          <Redirect from="/" to="/daily-challenges" exact/>
          <Route path="/daily-challenges" component={TodayPage} />
          <Route path="/courses" render={props => <CoursesRoutes {...props} />} /> */}
          {/* <Route path="/quizzes" render={props => <QuizzesRoutes {...props} />} /> */}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    </UserContext.Provider>
    
  );
}

export default App;
