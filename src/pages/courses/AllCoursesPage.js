import React from "react"

import PromotedCourses from './PromotedCourses'
import SearchCourses from './SearchCourses'

function CoursesPage(){
  return(
    <div className="background">
      <PromotedCourses />
      <SearchCourses />
    </div>
  )
}

export default CoursesPage