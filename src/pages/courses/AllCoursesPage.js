import React from "react"

// import PromotedCourses from './PromotedCourses'
import SearchCourses from './SearchCourses'

import Notification from 'components/UX/Notification.js'

function CoursesPage(){
  return(
    <div className="background">
      <Notification title="Continue Learning Beginner Chords" message="About 46 Problems to go in this chapter" />

      {/* <PromotedCourses /> */}
      <SearchCourses />
    </div>
  )
}

export default CoursesPage