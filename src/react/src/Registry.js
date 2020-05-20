//   ____                            ____            _     _              
//  / ___|___  _   _ _ __ ___  ___  |  _ \ ___  __ _(_)___| |_ _ __ _   _ 
// | |   / _ \| | | | '__/ __|/ _ \ | |_) / _ \/ _` | / __| __| '__| | | |
// | |__| (_) | |_| | |  \__ \  __/ |  _ <  __/ (_| | \__ \ |_| |  | |_| |
//  \____\___/ \__,_|_|  |___/\___| |_| \_\___|\__, |_|___/\__|_|   \__, |
//                                             |___/                |___/ 


export const Categories = [
  { name: "rhythm", title: "Rhythm" },
  { name: "chords", title: "Chords" },
  { name: "scales", title: "Scales" },
  { name: "finger-picking", title: "Finger Picking" },
  { name: "arpeggios", title: "Arpeggios" },
  { name: "music-theory", title: "Music Theory" },
  
  { name: "beginner", title: "Beginner" },
  { name: "zero", title: "My First Time Playing" },
  { name: "intermediate", title: "Intermediate" },
  { name: "advanced", title: "Advanced" }

];


export const Courses = [
  {
    name: "learn-the-basic-chord-shapes",
    title: "Learn the Basic Chord Shapes",
    subTitle: "In this course you will learn the basic chord shapes that every guitarist must know.",
    categories: ["beginner", "chords"],
    descriptionHtml: "In this course you will learn the basic chord shapes that every guitarist must know.",
    chapters: [
      {
        name: "introduction", title: "Introduction", description: "We're going to learn the A shape on the guitar",
        quizzes: [
          "what-is-a-chord",
          "learn-the-A-shape"
        ] // end quizzes
      }, // end chapter
      {
        name: "the-E-chord", title: "The E Chord", description: "The E Chord is one of the most often used chords in the blues",
        quizzes: [
          "learn-the-E-shape"
        ]
      }
    ] // end chapters
  } // end course
]

export const Quizzes = [
  {
    name: "what-is-a-chord",
    title: "What is a Chord?",
    course: "learn-the-basic-chord-shapes",
    description: "Were going to learn what a chord actually is and how we use them",
    pages: [
      {
        component: ()=>{},
        quiz: ()=>{}
      }
    ]
  },
  {
    name: "learn-the-A-shape",
    title: "Learn the A Shape",
    course: "learn-the-basic-chord-shapes",
    description: "Were going to learn the A shape, so that we can start playing some songs",
    pages: [
      {
        component: ()=>{},
        quiz: ()=>{}
      }
    ]
  },
  {
    name: "learn-the-E-shape",
    title: "Learn the E Shape",
    course: "learn-the-basic-chord-shapes",
    description: "Were going to learn the E shape so that we can play songs with E major in them",
    pages: [
      {
        component: ()=>{},
        quiz: ()=>{}
      }
    ]
  }
]
