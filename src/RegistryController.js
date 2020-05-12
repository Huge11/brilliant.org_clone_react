import { Categories, Courses, Quizzes } from "./Registry.js";

// get all functions
export const getCategories = ()=>{
  return Categories;
}

export const getCourses = ()=>{
  return Courses;
}

export const getQuizzes = ()=>{
  return Quizzes
}


// Get by functions
export const getCoursesByCategory = categoryName => {
  return Courses.filter(course => course.categories.indexOf(categoryName) != -1)
}

export const getChaptersByCourse = courseName => {
  return Courses.find(course => course.name === courseName).chapters
}

export const getQuizzesByChapter = chapter => {
  return chapter.quizzes.map(quizName=>Quizzes.find(quiz => quiz.name === quizName))
}

export const getAllQuizzesByCourse = courseName => {
  return getChaptersByCourse(courseName).reduce((accum, chapter)=>accum.concat(getQuizzesByChapter(chapter)),[])
}