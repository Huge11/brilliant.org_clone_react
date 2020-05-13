//   ____                            ____            _     _              
//  / ___|___  _   _ _ __ ___  ___  |  _ \ ___  __ _(_)___| |_ _ __ _   _ 
// | |   / _ \| | | | '__/ __|/ _ \ | |_) / _ \/ _` | / __| __| '__| | | |
// | |__| (_) | |_| | |  \__ \  __/ |  _ <  __/ (_| | \__ \ |_| |  | |_| |
//  \____\___/ \__,_|_|  |___/\___| |_| \_\___|\__, |_|___/\__|_|   \__, |
//                                             |___/                |___/ 


export const Categories = [
  { name: "rhythm", title: "Rhythm" },
  { name: "chords", title: "Chords" },
  { name: "beginner", title: "Beginner" }
];


export const Courses = [
  {
    name: "learn-the-basic-chord-shapes",
    title: "Learn the Basic Chord Shapes",
    categories: ["beginner", "chords"],
    chapters: [
      {
        name: "introduction", title: "Introduction", 
        quizzes: [
          "learn-the-A-shape"
        ] // end quizzes
      } // end chapter
    ] // end chapters
  } // end course
]

export const Quizzes = [
  {
    name: "learn-the-A-shape",
    title: "Learn the A Shape",
    course: "learn-the-basic-chord-shapes",
    pages: [
      {
        component: ()=>{},
        quiz: ()=>{}
      }
    ]
  }
]
