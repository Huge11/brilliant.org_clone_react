import React, { useState, useEffect, Suspense } from 'react';

import { Switch, Route } from 'react-router-dom'

import firebase from 'utils/firebase/index'
import { UserContext } from 'utils/contexts/user.js';

import Navbar from 'components/navbars/DefaultNavbar.js'
// Site Pages
import LandingPage from 'pages/Landing.js'
import TodayPage from 'pages/today/index.js'
import CoursesRoutes from 'pages/courses/coursesRoutes.js'
import PageNotFound from 'pages/404Page.js'

// lazy load Components
const DevRoutes = React.lazy(()=> import('Development/DevRoutes'))
// const OtherComponent = React.lazy(() => import('./OtherComponent'));

const dev = process.env.NODE_ENV !== 'production'

function App() {
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
          <Route path="/" exact component={LandingPage} />
          <Route path="/daily-challenges" component={TodayPage} />
          <Route path="/courses" render={props => <CoursesRoutes {...props} />} /> 
          {dev ? <Suspense fallback={<div>Loading...</div>}><Route path="/dev" render={props => <DevRoutes {...props} /> } /></Suspense> : null}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    </UserContext.Provider>
    
  );
}

export default App;
