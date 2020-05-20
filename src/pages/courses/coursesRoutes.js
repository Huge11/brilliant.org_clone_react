import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import AllCoursesPage from './AllCoursesPage.js'
import {QuizRoutes} from 'pages/quizzes/index.js'
// import CoursePage from './CoursePage.js'
import PageNotFound from "pages/404Page.js"

import { Courses } from 'Registry.js' 


function CoursesRoutes(){
  const {path} = useRouteMatch()

  const createRoutes = courses => {
    return courses.map(course => <Route path={path+"/"+course.name} key={course.name} render={props => <QuizRoutes course={course} {...props} />} /> )
  }

  return(
    <Switch>
      <Route path={path} exact component={AllCoursesPage} />
      {createRoutes(Courses)}
      <Route path="*" component={PageNotFound} />
    </Switch>
  )
}

export default CoursesRoutes