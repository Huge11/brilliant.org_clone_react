import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import AllCoursesPage from './AllCoursesPage.js'
import {QuizRoutes} from 'pages/quizzes/index.js'
// import CoursePage from './CoursePage.js'
import PageNotFound from "pages/404Page.js"

import { Courses } from 'Registry.js' 


const tempCoursesData = {
  name: "learn-the-basic-chord-shapes",
  title: "Learn the Basic Chord Shapes",
  subTitle: "These are the most essential chord shapes that every guitarist needs to master",
  descriptionHtml: "<p>Here is the first paragraph telling you why you should def take this course!</p><span>We have a second paragraph as well but it's not quite as convincing</span>",
  categories: ["beginner", "chords"],
  preReqAndNextStepsText: "The only prerequisite for this course is that you own a guitar!",
  preRequisites: [],
  nextSteps: ["learn-the-basics-of-rhythm"],
  chapters: [
    {
      name: "introduction", title: "Introduction", 
      quizzes: [
        "learn-the-A-shape"
      ] // end quizzes
    } // end chapter
  ] // end chapters
} // end course

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