//   ____                            ____            _     _              
//  / ___|___  _   _ _ __ ___  ___  |  _ \ ___  __ _(_)___| |_ _ __ _   _ 
// | |   / _ \| | | | '__/ __|/ _ \ | |_) / _ \/ _` | / __| __| '__| | | |
// | |__| (_) | |_| | |  \__ \  __/ |  _ <  __/ (_| | \__ \ |_| |  | |_| |
//  \____\___/ \__,_|_|  |___/\___| |_| \_\___|\__, |_|___/\__|_|   \__, |
//                                             |___/                |___/ 


export const Categories = [
  // { name: "rhythm", title: "Rhythm" },
  // { name: "chords", title: "Chords" },
  // { name: "scales", title: "Scales" },
  // { name: "finger-picking", title: "Finger Picking" },
  // { name: "arpeggios", title: "Arpeggios" },
  // { name: "music-theory", title: "Music Theory" },
  // { name: 'technique', title: "Technique" },
  
  { name: "zero", title: "My First Time Playing" },
  { name: "beginner", title: "Beginner" },
  { name: "intermediate", title: "Intermediate" },
  { name: "advanced", title: "Advanced" }

];


export const Courses = [
  // {
  //   name: 'learn-to-read-basic-guitar-markups',
  //   title: 'Learn how to read tabs, chord charts, and song sheets',
  //   subTitle: "Learn how to understand the common ways guitarists share musical ideas and songs.",
  //   descriptionHtml: "<p>In this course we'll learn how to read common musical notations for the guitar.  By the end of this course you will be able to understand any chord chart, guitar tab, scale sheet, or common song notation easily and quickly.</p><p>This course is for first time guitarists who aren't sure how to read common guitar notation.  This is a perfect introductory course to our site as we common musical notation in every course and every quiz on our site.  ",
  //   categories: ['zero'],
  //   chapters: [
  //     {
  //       name: "guitar-markup-introduction", title: "Introduction", description: "You'll see some common guitar markups and learn the basics of how to interpret them.",
  //       quizzes: [
  //         'super-simple-music-theory',
  //         'guitar-notation-types',
  //         'guitar-notation-basics',
  //         'chord-and-scale-types'
  //       ]
  //     },
  //     {
  //       name: "learn-to-read-chord-charts", title: "Learning to read Chord Charts", description: "You'll learn how to read any kind of chord chart.",
  //       quizzes: [
  //         'what-is-a-chord',
  //         'how-to-read-a-chord-chart',
  //         'my-first-chord',
  //         'common-mistakes-learning-chords',
  //         'tips-and-tricks-for-learning-chords'
  //         // 'basics-of-chord-charts',
  //         // 'chord-chart-fingerings',
  //         // 'chord-chart-open-strings',
  //         // 'chord-charts-up-the-neck', // barre + moveable chords
  //         // 'using-a-capo' // or tips and tricks
  //       ]
  //     },
  //     {
  //       name: 'learn-to-read-chord-sheets', title: "Read Chord Sheets and Play Songs", description: "Once you understand chord charts, you can begin to learn songs from song sheets and chord sheets.",
  //       quizzes: [

  //         'what-is-a-chord-sheet',
  //         'understanding-chord-sheet-rhythm',
  //         'chord-sheet-strategy',
  //         'chord-sheet-practice'
  //       ]
  //     },
  //     {
  //       name: 'learn-to-read-scale-sheets', title: 'Learning to read Scales Sheets', description: "Learn to read scale sheets so that you can learn the essential components of music. ",
  //       quizzes: [
  //         'what-is-a-scale',
  //         'how-to-read-a-scale-sheet',
  //         'my-first-scale',
  //         'common-mistakes-learning-scales',
  //         'tips-and-tricks-for-learning-scales'
  //       ]
  //     },
  //     {
  //       name: 'learn-to-read-tabs', title: "Learning to read Tabs", description: "You'll learn how to read guitar \"tabs\", the musical notation that most guitar riffs and solos are written in.",
  //       quizzes: [
  //         'what-is-a-tab',
  //         'learning-to-play-a-tab',
  //         'tab-notation-and-flurishes',
  //         'common-problems-with-tabs', //rhythm
  //         'tips-and-tricks-for-playing-tabs'
  //       ]
  //     }
  //   ]
  // },
  {
    name: 'guitar-technique-fundamentals',
    title: '"Get it right the first time" techniques for playing the guitar',
    subTitle: "Learn finger placement and how to hold the guitar properly, to create the best sound and the fastest improvements",
    descriptionHtml: "<p>In this course we'll look at how to hold the guitar, how to sit, how to hold our hand on the fretboard, and other essential skills for a beginner guitarist.  </p><p>This course is perfect for anyone who has never played the guitar before and would like to know the correct way to position themselves, or for more experienced players who want to return to the basics to refresh their base skills",
    categories: ['zero'],
    chapters: [
      {
        name: 'technique-fundamentals-introduction', title: 'Introduction', description: "Learn your way around a guitar, it's important to get familiar with your instrument before you start playing!",
        quizzes: [
          'guitar-anatomy',
          'guitar-terms',
          'musical-terms',
          'getting-comfortable'
        ]
      },
      {
        name: "body-placement", title: 'Body Placement', description: "How you sit or stand while playing can have a huge impact on your playing, we'll look at some common techniques and postions",
        quizzes: [
          'holding-an-acoustic-guitar',
          'holding-an-electric-guitar',
          'holding-an-acoustic-guitar-classical',
          'body-positioning-mistakes',
          'body-positioning-tips',
        ]
      },
      {
        name: "fret-hand-placement", title: 'Getting the Fret Hand Right', description: "Your fret hand is going to have a huge effect on the sound of your guitar.",
        refDoc: ['https://www.libertyparkmusic.com/5-must-know-fretting-techniques-for-beginner-guitarists/'],
        quizzes: [
          'fret-hand-fingertip-accuracy',
          'fret-hand-fingertip-placement',
          'fret-hand-thumb-position',
          'fret-hand-finger-curve',
          'fret-hand-wrist-position'
        ]
      },
      {
        name: 'strumming-hand-position', title: "Best Ways to Strum the Guitar", description: "Keep your rhythm section tight with the best methods of strumming the guitar",
        refDoc: ['https://www.cyberfret.com/guitar-strumming/strumming-without-a-pick/'],
        quizzes: [
          'holding-a-pick',
          'strumming-without-a-pick',
          'strumming-across-the-body',
          'strumming-wrist-position',
          'strumming-movement',
          'strumming-common-mistakes',
          'strumming-tips',
          'strumming-common-styles'
        ]
      },

    ]
  },
  // {
  //   name: "learn-the-basic-chord-shapes",
  //   title: "Learn the Basic Chord Shapes",
  //   subTitle: "In this course you will learn the basic chord shapes that every guitarist must know.",
  //   descriptionHtml: "In this course you will learn the basic chord shapes that every guitarist must know.",
  //   categories: ["beginner", "chords"],
  //   chapters: [
  //     {
  //       name: "introduction", title: "Introduction", description: "We're going to learn the A shape on the guitar",
  //       quizzes: [
  //         "what-is-a-chord",
  //         "learn-the-A-shape"
  //       ] // end quizzes
  //     }, // end chapter
  //     {
  //       name: "the-E-chord", title: "The E Chord", description: "The E Chord is one of the most often used chords in the blues",
  //       quizzes: [
  //         "learn-the-E-shape"
  //       ]
  //     }
  //   ] // end chapters
  // } // end course
]


export const Chapters = [

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
