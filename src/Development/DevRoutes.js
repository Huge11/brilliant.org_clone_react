import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import MainPage from './MainPage.js'
import QuizPage from 'pages/quizzes/QuizPage.js'
import quizzes from './quizzes/index'


function CoursesRoutes(mainProps){
  const {path} = useRouteMatch()

  const createRoutes = quizzes => {
    return quizzes.map(quiz => <Route path={path+"/"+quiz.name} key={quiz.name} render={props => <QuizPage {...mainProps} course={{name: ""}} quiz={quiz} {...props} />} /> )
  }

  return(
    <Switch>
      <Route path={path} exact render={(props)=><MainPage {...props} />} />
      {createRoutes(quizzes)}
      {/* <Route path="*" component={PageNotFound} /> */}
      {/* <Route path="*" render={props => <QuizPage {...mainProps} {...props} quiz={tempQuizData} /> } /> */} */}
    </Switch>
  )
}

export default CoursesRoutes