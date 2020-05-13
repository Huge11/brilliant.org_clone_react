import React from 'react';
import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';

// import AllCoursesPage from './AllCoursesPage.js'
import QuizPage from './QuizPage.js'
import CoursePage from 'pages/courses/CoursePage.js'
import PageNotFound from "pages/404Page.js"

import { Quizzes } from 'Registry.js' 


const tempQuizData =  {
  name: "learn-the-A-shape",
  title: "Learn the A Shape",
  course: "learn-the-basic-chord-shapes",
  pages: [
    {
      component: ()=>{}
    }
  ]
}

function CoursesRoutes(mainProps){
  const {path} = useRouteMatch()

  const createRoutes = quizzes => {
    return quizzes.map(quiz => <Route path={path+"/"+quiz.name} key={quiz.name} render={props => <QuizPage {...mainProps} quiz={quiz} {...props} />} /> )
  }

  return(
    <Switch>
      <Route path={path} exact render={(props)=><CoursePage {...mainProps} {...props} />} />
      {createRoutes(Quizzes)}
      {/* <Route path="*" component={PageNotFound} /> */}
      <Route path="*" render={props => <QuizPage {...mainProps} {...props} quiz={tempQuizData} /> } />
    </Switch>
  )
}

export default CoursesRoutes