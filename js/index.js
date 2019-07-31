/*****************************************************************
        DATA Set
****************************************************************/


// const eachYear = [

//     {year1: "1st Year",

//      semesters: [

//          {semester1:"Semester 1",

//                courses: [

//                     {course1: "3D Visualization",

//                         weeks: [  
//                             {week1:"lesson 1", 
//                             week2: "lesson 2", 
//                             week3: "lesson 3", 
//                             week4: "lesson 4", 
//                             week5: "lesson 5", 
//                             week6: "lesson 6", 
//                             week7:"lesson 7", 
//                             week8: "lesson 8", 
//                             week9: "lesson 9", 
//                             week10: "lesson 10", 
//                             week11: "lesson 11", 
//                             week12: "lesson 12",
//                             week13: "lesson 13", 
//                             week14: "lesson 14",}]},

//                     {course2: "2D Visualization",
                        
//                         weeks: [  
//                             {week1:"lesson 1", 
//                             week2: "lesson 2", 
//                             week3: "lesson 3", 
//                             week4: "lesson 4", 
//                             week5: "lesson 5", 
//                             week6: "lesson 6", 
//                             week7:"lesson 7", 
//                             week8: "lesson 8", 
//                             week9: "lesson 9", 
//                             week10: "lesson 10", 
//                             week11: "lesson 11", 
//                             week12: "lesson 12",
//                             week13: "lesson 13", 
//                             week14: "lesson 14",}]},

//                     {course3: "Visual Design",

//                         weeks: [  
//                             {week1:"lesson 1", 
//                             week2: "lesson 2", 
//                             week3: "lesson 3", 
//                             week4: "lesson 4", 
//                             week5: "lesson 5", 
//                             week6: "lesson 6", 
//                             week7:"lesson 7", 
//                             week8: "lesson 8", 
//                             week9: "lesson 9", 
//                             week10: "lesson 10", 
//                             week11: "lesson 11", 
//                             week12: "lesson 12",
//                             week13: "lesson 13", 
//                             week14: "lesson 14",}]},

//                     {course4: "Design History",

//                         weeks: [  
//                             {week1:"lesson 1", 
//                             week2: "lesson 2", 
//                             week3: "lesson 3", 
//                             week4: "lesson 4", 
//                             week5: "lesson 5", 
//                             week6: "lesson 6", 
//                             week7:"lesson 7", 
//                             week8: "lesson 8", 
//                             week9: "lesson 9", 
//                             week10: "lesson 10", 
//                             week11: "lesson 11", 
//                             week12: "lesson 12",
//                             week13: "lesson 13", 
//                             week14: "lesson 14",}]},

//                     {course5: "Technical Drawing",

//                         weeks: [  
//                             {week1:"lesson 1", 
//                             week2: "lesson 2", 
//                             week3: "lesson 3", 
//                             week4: "lesson 4", 
//                             week5: "lesson 5", 
//                             week6: "lesson 6", 
//                             week7:"lesson 7", 
//                             week8: "lesson 8", 
//                             week9: "lesson 9", 
//                             week10: "lesson 10", 
//                             week11: "lesson 11", 
//                             week12: "lesson 12",
//                             week13: "lesson 13", 
//                             week14: "lesson 14",}]}, 

//                     {course6: "Technical Systems",   

//                             weeks: [  
//                                 {week1:"lesson 1", 
//                                 week2: "lesson 2", 
//                                 week3: "lesson 3", 
//                                 week4: "lesson 4", 
//                                 week5: "lesson 5", 
//                                 week6: "lesson 6", 
//                                 week7:"lesson 7", 
//                                 week8: "lesson 8", 
//                                 week9: "lesson 9", 
//                                 week10: "lesson 10", 
//                                 week11: "lesson 11", 
//                                 week12: "lesson 12",
//                                 week13: "lesson 13", 
//                                 week14: "lesson 14",}]},
//                 ] 
//             },

//          {semester2:"Semester 2",

//             courses: [

//                 {course1: "3D Visualization II",

//                     weeks: [  
//                         {week1:"lesson 1", 
//                         week2: "lesson 2", 
//                         week3: "lesson 3", 
//                         week4: "lesson 4", 
//                         week5: "lesson 5", 
//                         week6: "lesson 6", 
//                         week7:"lesson 7", 
//                         week8: "lesson 8", 
//                         week9: "lesson 9", 
//                         week10: "lesson 10", 
//                         week11: "lesson 11", 
//                         week12: "lesson 12",
//                         week13: "lesson 13", 
//                         week14: "lesson 14",}]},

//                 {course2: "2D Visualization II",
                    
//                     weeks: [  
//                         {week1:"lesson 1", 
//                         week2: "lesson 2", 
//                         week3: "lesson 3", 
//                         week4: "lesson 4", 
//                         week5: "lesson 5", 
//                         week6: "lesson 6", 
//                         week7:"lesson 7", 
//                         week8: "lesson 8", 
//                         week9: "lesson 9", 
//                         week10: "lesson 10", 
//                         week11: "lesson 11", 
//                         week12: "lesson 12",
//                         week13: "lesson 13", 
//                         week14: "lesson 14",}]},

//                 {course3: "Visual Design II",

//                     weeks: [  
//                         {week1:"lesson 1", 
//                         week2: "lesson 2", 
//                         week3: "lesson 3", 
//                         week4: "lesson 4", 
//                         week5: "lesson 5", 
//                         week6: "lesson 6", 
//                         week7:"lesson 7", 
//                         week8: "lesson 8", 
//                         week9: "lesson 9", 
//                         week10: "lesson 10", 
//                         week11: "lesson 11", 
//                         week12: "lesson 12",
//                         week13: "lesson 13", 
//                         week14: "lesson 14",}]},

//                 {course4: "Design History II",

//                     weeks: [  
//                         {week1:"lesson 1", 
//                         week2: "lesson 2", 
//                         week3: "lesson 3", 
//                         week4: "lesson 4", 
//                         week5: "lesson 5", 
//                         week6: "lesson 6", 
//                         week7:"lesson 7", 
//                         week8: "lesson 8", 
//                         week9: "lesson 9", 
//                         week10: "lesson 10", 
//                         week11: "lesson 11", 
//                         week12: "lesson 12",
//                         week13: "lesson 13", 
//                         week14: "lesson 14",}]},

//                 {course5: "Technical Drawing II",

//                     weeks: [  
//                         {week1:"lesson 1", 
//                         week2: "lesson 2", 
//                         week3: "lesson 3", 
//                         week4: "lesson 4", 
//                         week5: "lesson 5", 
//                         week6: "lesson 6", 
//                         week7:"lesson 7", 
//                         week8: "lesson 8", 
//                         week9: "lesson 9", 
//                         week10: "lesson 10", 
//                         week11: "lesson 11", 
//                         week12: "lesson 12",
//                         week13: "lesson 13", 
//                         week14: "lesson 14",}]}, 

//                 {course6: "Technical Systems II",   

//                         weeks: [  
//                             {week1:"lesson 1", 
//                             week2: "lesson 2", 
//                             week3: "lesson 3", 
//                             week4: "lesson 4", 
//                             week5: "lesson 5", 
//                             week6: "lesson 6", 
//                             week7:"lesson 7", 
//                             week8: "lesson 8", 
//                             week9: "lesson 9", 
//                             week10: "lesson 10", 
//                             week11: "lesson 11", 
//                             week12: "lesson 12",
//                             week13: "lesson 13", 
//                             week14: "lesson 14",}]},
//         ] 
//         }
//     ]},

//     {year2: "2nd Year", 

//     semesters: [

//         {semester3:"Semester3",

//             courses: [
                
//                 {course1: "Semiotics",

//                     weeks: [  
//                         {week1:"lesson 1", 
//                         week2: "lesson 2", 
//                         week3: "lesson 3", 
//                         week4: "lesson 4", 
//                         week5: "lesson 5", 
//                         week6: "lesson 6", 
//                         week7:"lesson 7", 
//                         week8: "lesson 8", 
//                         week9: "lesson 9", 
//                         week10: "lesson 10", 
//                         week11: "lesson 11", 
//                         week12: "lesson 12",
//                         week13: "lesson 13", 
//                         week14: "lesson 14",}]},

//                 {course2: "Social Networks",

//                     weeks: [  
//                         {week1:"lesson 1", 
//                         week2: "lesson 2", 
//                         week3: "lesson 3", 
//                         week4: "lesson 4", 
//                         week5: "lesson 5", 
//                         week6: "lesson 6", 
//                         week7:"lesson 7", 
//                         week8: "lesson 8", 
//                         week9: "lesson 9", 
//                         week10: "lesson 10", 
//                         week11: "lesson 11", 
//                         week12: "lesson 12",
//                         week13: "lesson 13", 
//                         week14: "lesson 14",}]},

//                 {course3: "Sequential Arts",

//                     weeks: [  
//                         {week1:"lesson 1", 
//                         week2: "lesson 2", 
//                         week3: "lesson 3", 
//                         week4: "lesson 4", 
//                         week5: "lesson 5", 
//                         week6: "lesson 6", 
//                         week7:"lesson 7", 
//                         week8: "lesson 8", 
//                         week9: "lesson 9", 
//                         week10: "lesson 10", 
//                         week11: "lesson 11", 
//                         week12: "lesson 12",
//                         week13: "lesson 13", 
//                         week14: "lesson 14",}]},
                
//                 {course4: "Design History",
                   
//                     weeks: [  
//                         {week1:"lesson 1", 
//                         week2: "lesson 2", 
//                         week3: "lesson 3", 
//                         week4: "lesson 4", 
//                         week5: "lesson 5", 
//                         week6: "lesson 6", 
//                         week7:"lesson 7", 
//                         week8: "lesson 8", 
//                         week9: "lesson 9", 
//                         week10: "lesson 10", 
//                         week11: "lesson 11", 
//                         week12: "lesson 12",
//                         week13: "lesson 13", 
//                         week14: "lesson 14",}]},

//                 {course5: "3D Visualization III",
                    
//                     weeks: [  
//                         {week1:"lesson 1", 
//                         week2: "lesson 2", 
//                         week3: "lesson 3", 
//                         week4: "lesson 4", 
//                         week5: "lesson 5", 
//                         week6: "lesson 6", 
//                         week7:"lesson 7", 
//                         week8: "lesson 8", 
//                         week9: "lesson 9", 
//                         week10: "lesson 10", 
//                         week11: "lesson 11", 
//                         week12: "lesson 12",
//                         week13: "lesson 13", 
//                         week14: "lesson 14",}]},

//                 {course6: "Interactive Video",
                   
//                     weeks: [  
//                         {week1:"lesson 1", 
//                         week2: "lesson 2", 
//                         week3: "lesson 3", 
//                         week4: "lesson 4", 
//                         week5: "lesson 5", 
//                         week6: "lesson 6", 
//                         week7:"lesson 7", 
//                         week8: "lesson 8", 
//                         week9: "lesson 9", 
//                         week10: "lesson 10", 
//                         week11: "lesson 11", 
//                         week12: "lesson 12",
//                         week13: "lesson 13", 
//                         week14: "lesson 14",}]}, 
//         ]},

//         {semester4:"Semester 4",

//         courses: [
                
//             {course1: "Semiotics II",

//                 weeks: [  
//                     {week1:"lesson 1", 
//                     week2: "lesson 2", 
//                     week3: "lesson 3", 
//                     week4: "lesson 4", 
//                     week5: "lesson 5", 
//                     week6: "lesson 6", 
//                     week7:"lesson 7", 
//                     week8: "lesson 8", 
//                     week9: "lesson 9", 
//                     week10: "lesson 10", 
//                     week11: "lesson 11", 
//                     week12: "lesson 12",
//                     week13: "lesson 13", 
//                     week14: "lesson 14",}]},

//             {course2: "Social Networks II",

//                 weeks: [  
//                     {week1:"lesson 1", 
//                     week2: "lesson 2", 
//                     week3: "lesson 3", 
//                     week4: "lesson 4", 
//                     week5: "lesson 5", 
//                     week6: "lesson 6", 
//                     week7:"lesson 7", 
//                     week8: "lesson 8", 
//                     week9: "lesson 9", 
//                     week10: "lesson 10", 
//                     week11: "lesson 11", 
//                     week12: "lesson 12",
//                     week13: "lesson 13", 
//                     week14: "lesson 14",}]},

//             {course3: "Sequential Arts II",

//                 weeks: [  
//                     {week1:"lesson 1", 
//                     week2: "lesson 2", 
//                     week3: "lesson 3", 
//                     week4: "lesson 4", 
//                     week5: "lesson 5", 
//                     week6: "lesson 6", 
//                     week7:"lesson 7", 
//                     week8: "lesson 8", 
//                     week9: "lesson 9", 
//                     week10: "lesson 10", 
//                     week11: "lesson 11", 
//                     week12: "lesson 12",
//                     week13: "lesson 13", 
//                     week14: "lesson 14",}]},
            
//             {course4: "Design History II",
               
//                 weeks: [  
//                     {week1:"lesson 1", 
//                     week2: "lesson 2", 
//                     week3: "lesson 3", 
//                     week4: "lesson 4", 
//                     week5: "lesson 5", 
//                     week6: "lesson 6", 
//                     week7:"lesson 7", 
//                     week8: "lesson 8", 
//                     week9: "lesson 9", 
//                     week10: "lesson 10", 
//                     week11: "lesson 11", 
//                     week12: "lesson 12",
//                     week13: "lesson 13", 
//                     week14: "lesson 14",}]},

//             {course5: "Ergonomics",
                
//                 weeks: [  
//                     {week1:"lesson 1", 
//                     week2: "lesson 2", 
//                     week3: "lesson 3", 
//                     week4: "lesson 4", 
//                     week5: "lesson 5", 
//                     week6: "lesson 6", 
//                     week7:"lesson 7", 
//                     week8: "lesson 8", 
//                     week9: "lesson 9", 
//                     week10: "lesson 10", 
//                     week11: "lesson 11", 
//                     week12: "lesson 12",
//                     week13: "lesson 13", 
//                     week14: "lesson 14",}]},

//             {course6: "Interactive Video II",
               
//                 weeks: [  
//                     {week1:"lesson 1", 
//                     week2: "lesson 2", 
//                     week3: "lesson 3", 
//                     week4: "lesson 4", 
//                     week5: "lesson 5", 
//                     week6: "lesson 6", 
//                     week7:"lesson 7", 
//                     week8: "lesson 8", 
//                     week9: "lesson 9", 
//                     week10: "lesson 10", 
//                     week11: "lesson 11", 
//                     week12: "lesson 12",
//                     week13: "lesson 13", 
//                     week14: "lesson 14",}]}, 
//         ]},
//     ]},

//     {year3: "3rd Year",

//     semesters: [

//         {semester5:"Semester 5",

//             courses: [

//             {course1: "Portfolio I",

//                 weeks: [
//                     {week1:"lesson 1", 
//                     week2: "lesson 2", 
//                     week3: "lesson 3", 
//                     week4: "lesson 4", 
//                     week5: "lesson 5", 
//                     week6: "lesson 6", 
//                     week7:"lesson 7", 
//                     week8: "lesson 8", 
//                     week9: "lesson 9", 
//                     week10: "lesson 10", 
//                     week11: "lesson 11", 
//                     week12: "lesson 12",
//                     week13: "lesson 13", 
//                     week14: "lesson 14",}]}, 
                    
//             {course2: "Device Development",

//                 weeks: [
//                     {week1:"lesson 1", 
//                     week2: "lesson 2", 
//                     week3: "lesson 3", 
//                     week4: "lesson 4", 
//                     week5: "lesson 5", 
//                     week6: "lesson 6", 
//                     week7:"lesson 7", 
//                     week8: "lesson 8", 
//                     week9: "lesson 9", 
//                     week10: "lesson 10", 
//                     week11: "lesson 11", 
//                     week12: "lesson 12",
//                     week13: "lesson 13", 
//                     week14: "lesson 14",}]},

//             {course3: "Interactive Systems",
            
//                 weeks: [
//                     {week1:"lesson 1", 
//                     week2: "lesson 2", 
//                     week3: "lesson 3", 
//                     week4: "lesson 4", 
//                     week5: "lesson 5", 
//                     week6: "lesson 6", 
//                     week7:"lesson 7", 
//                     week8: "lesson 8", 
//                     week9: "lesson 9", 
//                     week10: "lesson 10", 
//                     week11: "lesson 11", 
//                     week12: "lesson 12",
//                     week13: "lesson 13", 
//                     week14: "lesson 14",}]},

//             {course4: "Augmented Reality", 

//                 weeks: [
//                     {week1:"lesson 1", 
//                     week2: "lesson 2", 
//                     week3: "lesson 3", 
//                     week4: "lesson 4", 
//                     week5: "lesson 5", 
//                     week6: "lesson 6", 
//                     week7:"lesson 7", 
//                     week8: "lesson 8", 
//                     week9: "lesson 9", 
//                     week10: "lesson 10", 
//                     week11: "lesson 11", 
//                     week12: "lesson 12",
//                     week13: "lesson 13", 
//                     week14: "lesson 14",}]},

//             {course5: "Human-Computer Interaction",

//                 weeks: [
//                     {week1:"lesson 1", 
//                     week2: "lesson 2", 
//                     week3: "lesson 3", 
//                     week4: "lesson 4", 
//                     week5: "lesson 5", 
//                     week6: "lesson 6", 
//                     week7:"lesson 7", 
//                     week8: "lesson 8", 
//                     week9: "lesson 9", 
//                     week10: "lesson 10", 
//                     week11: "lesson 11", 
//                     week12: "lesson 12",
//                     week13: "lesson 13", 
//                     week14: "lesson 14",}]},

//             {course6: "Digital Publishing",

//                 weeks: [
//                     {week1:"lesson 1", 
//                     week2: "lesson 2", 
//                     week3: "lesson 3", 
//                     week4: "lesson 4", 
//                     week5: "lesson 5", 
//                     week6: "lesson 6", 
//                     week7:"lesson 7", 
//                     week8: "lesson 8", 
//                     week9: "lesson 9", 
//                     week10: "lesson 10", 
//                     week11: "lesson 11", 
//                     week12: "lesson 12",
//                     week13: "lesson 13", 
//                     week14: "lesson 14",}]}, 

//         ]},

//         {semester6:"Semester 6", 

//             courses: [

//             {course1: "Portgolio II",

//                 weeks: [
//                     {week1:"lesson 1", 
//                     week2: "lesson 2", 
//                     week3: "lesson 3", 
//                     week4: "lesson 4", 
//                     week5: "lesson 5", 
//                     week6: "lesson 6", 
//                     week7:"lesson 7", 
//                     week8: "lesson 8", 
//                     week9: "lesson 9", 
//                     week10: "lesson 10", 
//                     week11: "lesson 11", 
//                     week12: "lesson 12",
//                     week13: "lesson 13", 
//                     week14: "lesson 14",}]},

//             {course2: "Device Development II",

//                 weeks: [
//                     {week1:"lesson 1", 
//                     week2: "lesson 2", 
//                     week3: "lesson 3", 
//                     week4: "lesson 4", 
//                     week5: "lesson 5", 
//                     week6: "lesson 6", 
//                     week7:"lesson 7", 
//                     week8: "lesson 8", 
//                     week9: "lesson 9", 
//                     week10: "lesson 10", 
//                     week11: "lesson 11", 
//                     week12: "lesson 12",
//                     week13: "lesson 13", 
//                     week14: "lesson 14",}]},

//             {course3: "Interactive Systems II", 

//                 weeks: [
//                     {week1:"lesson 1", 
//                     week2: "lesson 2", 
//                     week3: "lesson 3", 
//                     week4: "lesson 4", 
//                     week5: "lesson 5", 
//                     week6: "lesson 6", 
//                     week7:"lesson 7", 
//                     week8: "lesson 8", 
//                     week9: "lesson 9", 
//                     week10: "lesson 10", 
//                     week11: "lesson 11", 
//                     week12: "lesson 12",
//                     week13: "lesson 13", 
//                     week14: "lesson 14",}]},

//             {course4: "Augmented Reality II", 

//                 weeks: [
//                     {week1:"lesson 1", 
//                     week2: "lesson 2", 
//                     week3: "lesson 3", 
//                     week4: "lesson 4", 
//                     week5: "lesson 5", 
//                     week6: "lesson 6", 
//                     week7:"lesson 7", 
//                     week8: "lesson 8", 
//                     week9: "lesson 9", 
//                     week10: "lesson 10", 
//                     week11: "lesson 11", 
//                     week12: "lesson 12",
//                     week13: "lesson 13", 
//                     week14: "lesson 14",}]},

//             {course5: "Ergonomics",

//                 weeks: [
//                     {week1:"lesson 1", 
//                     week2: "lesson 2", 
//                     week3: "lesson 3", 
//                     week4: "lesson 4", 
//                     week5: "lesson 5", 
//                     week6: "lesson 6", 
//                     week7:"lesson 7", 
//                     week8: "lesson 8", 
//                     week9: "lesson 9", 
//                     week10: "lesson 10", 
//                     week11: "lesson 11", 
//                     week12: "lesson 12",
//                     week13: "lesson 13", 
//                     week14: "lesson 14",}]},

//             {course6: "Digital Publishing II",

//                 weeks: [
//                     {week1:"lesson 1", 
//                     week2: "lesson 2", 
//                     week3: "lesson 3", 
//                     week4: "lesson 4", 
//                     week5: "lesson 5", 
//                     week6: "lesson 6", 
//                     week7:"lesson 7", 
//                     week8: "lesson 8", 
//                     week9: "lesson 9", 
//                     week10: "lesson 10", 
//                     week11: "lesson 11", 
//                     week12: "lesson 12",
//                     week13: "lesson 13", 
//                     week14: "lesson 14",}]},        
    
//             ]
//         },
//     ]} ,
// ]


// const eachYear = [
//     {year1: "1st Year",  
//     year2: "2nd Year", 
//     year3: "3rd Year"}
// ] 

const user1 = "Enkhmaa";
const pass1 = "Sandagdorj";
// const user1Name = [ user1  pass1];


const semesters = [
    {semester: "Semester 1"}, 
    {semester:"Semester 2"},
    {semester:"Semester 3"},
    {semester:"Semester 4"},
    {semester:"Semester 5"},
    {semester:"Semester 6"},
]

const courses = [
    {course: "3D Visualization"},
    {course: "2D Visualization"},
    {course: "Visual Design"},
    {course: "Design History"},
    {course: "Technical Drawing"}, 
    {course: "Technical Systems",},

    {course:"3D Visualization II"},
    {course: "2D Visualization II"},
    {course: "Visual Design II"},
    {course: "Design History II"},
    {course: "Technical Drawing II"},
    {course: "Technical Systems II",},
    
    {course: "Semiotics"},
    {course: "Social Networks"},
    {course: "Sequential Arts"},
    {course: "Design History"},
    {course: "3D Visualization III"},
    {course: "Interactive Video"}, 
    
    {course: "Semiotics II"},
    {course: "Social Networks II"},
    {course: "Sequential Arts II"},
    {course: "Design History II"},
    {course: "Ergonomics"},
    {course: "Interactive Video II"},

    {course: "Portfolio I"},
    {course: "Device Development"},
    {course: "Interactive Systems"}, 
    {course: "Augmented Reality"}, 
    {course: "Human-Computer Interaction"}, 
    {course: "Digital Publishing"},

    {course: "Portgolio II"},
    {course: "Device Development II"},
    {course: "Interactive Systems II"}, 
    {course: "Augmented Reality II"}, 
    {course: "Ergonomics"}, 
    {course: "Digital Publishing II"},
]


const weeks = [
    {week:"lesson 1"}, 
    {week: "lesson 3"}, 
    {week: "lesson 4"}, 
    {week: "lesson 5"}, 
    {week: "lesson 6"}, 
    {week:"lesson 7"}, 
    {week: "lesson 8"}, 
    {week: "lesson 9"}, 
    {week: "lesson 10"}, 
    {week: "lesson 11"}, 
    {week: "lesson 12"},
    {week: "lesson 13"}, 
    {week: "lesson 14"},
]

/*****************************************************************
        DATA Storage 
****************************************************************/

const btnFirst = document.getElementById(`btnFirst`);
const btnSecond = document.getElementById(`btnSecond`);
const btnThird = document.getElementById(`btnThird`);
const semHead1 = document.getElementById(`semesterHead1`);
const semHead2 = document.getElementById(`semesterHead2`);
const $loginForm = document.getElementById(`loginForm`);
let userid = localStorage.getItem('userLoggedIn') || false;
const $modalScreen = document.getElementById('modalScreen');
const $showWindow = document.getElementById(`showWindow`);



/*****************************************************************
        Username 
****************************************************************/
const checkUserIsLoggedIn = (u) => {
    if (u == userid) {
      $modalScreen.classList.add('hide');
      greetTheUser(u);
      $showWindow.classList.remove('hide');
    }
    else {
      $modalScreen.classList.remove('hide');
      greetTheUser('');
      $showWindow.classList.add('hide');
    }
    return u;
  }
  
  
  const greetTheUser = () => {
    document.getElementById(`welcome`).innerHTML = `Welcome, ${user1} ${pass1}`;
  }
  
  
  $loginForm.addEventListener(`submit`, event => {
    event.preventDefault();
    

    if ($loginForm.user.value.trim() == user1 && $loginForm.pass.value.trim() == pass1) {
      userid = $loginForm.user.value.trim();
      localStorage.setItem('userLoggedIn', userid);
      checkUserIsLoggedIn(userid);
    }
  
  });

  /*****************************************************************
       Btn format 
****************************************************************/

let buttons = Array.prototype.slice.call(document.querySelectorAll(".coursebtn"));

buttons.forEach(function(btn){

  btn.addEventListener("click", function(){
    buttons.forEach(function(btn){ btn.classList.remove("focus"); });
    this.classList.add("focus"); 
  });
  
});


/*****************************************************************
        format 
****************************************************************/


const lesssonFormat= (lessons) => {
    
    return `
    <ul class= "quick-lists">
        <li>
        <button class="imgBtn"><img src="Icon Pack\png\folder.png" alt="newpage" class="folder"></button>
        <div class="lessons"><a href="newnote.html">${lessons.week}</a></div>
        </li>
    </ul>`

}

const courseFormat= (crs) => {
    
    return `
    <ul>
        <li>
        <button class="imgBtn"><img src="Icon Pack/png/folder.png" alt="newpage" class="folder"></button>
        <div><a href="newnote.html" class="lessons">${crs.course}</a></div>
        </li>
    </ul>`

}

const semesterFormat= (sems) => {
    
    return `<h2>${sems.semester}</h2>`

}


 /*****************************************************************
       Show ALl Format
****************************************************************/
const showAllcourses =(ary) => {
    document.getElementById(`quickLists1`).innerHTML = ary.map(courseformat).join(``);
}

/*****************************************************************
        Print First Year 
****************************************************************/

const getFirstCoursestoHTML = () => {

    document.getElementById(`quickLists1`).innerHTML = courses.map(courseFormat).slice(0,6).join(``)

    document.getElementById(`quickLists2`).innerHTML = courses.map(courseFormat).slice(6,12).join(``)

}

const getFirstSemesterstoHTML = () => {

    semHead1.innerHTML = semesters.map(semesterFormat).slice(0,1).join(``)
    semHead2.innerHTML = semesters.map(semesterFormat).slice(1,2).join(``)

}


window.addEventListener(`load`, getFirstCoursestoHTML);
window.addEventListener(`load`, getFirstSemesterstoHTML);


btnFirst.addEventListener (`click`, getFirstCoursestoHTML); 
btnFirst.addEventListener (`click`, getFirstSemesterstoHTML); 

/*****************************************************************
        Print Second Year 
****************************************************************/
const getSecondCoursestoHTML = () => {

    document.getElementById(`quickLists1`).innerHTML = courses.map(courseFormat).slice(12,18).join(``)

    document.getElementById(`quickLists2`).innerHTML = courses.map(courseFormat).slice(18,24).join(``)

}

const getSecondSemesterstoHTML = () => {

    semHead1.innerHTML = semesters.map(semesterFormat).slice(2,3).join(``)
    semHead2.innerHTML = semesters.map(semesterFormat).slice(3,4).join(``)

}

btnSecond.addEventListener (`click`, getSecondCoursestoHTML); 
btnSecond.addEventListener (`click`, getSecondSemesterstoHTML); 
/*****************************************************************
        Print Third Year 
****************************************************************/
const getThirdCoursestoHTML = () => {

    document.getElementById(`quickLists1`).innerHTML = courses.map(courseFormat).slice(24,30).join(``)

    document.getElementById(`quickLists2`).innerHTML = courses.map(courseFormat).slice(30,36).join(``)

}

const getThirdSemesterstoHTML = () => {

    semHead1.innerHTML = semesters.map(semesterFormat).slice(4,5).join(``)
    semHead2.innerHTML = semesters.map(semesterFormat).slice(5,6).join(``)

}

btnThird.addEventListener (`click`, getThirdCoursestoHTML); 
btnThird.addEventListener (`click`, getThirdSemesterstoHTML); 


/*****************************************************************
        Search
****************************************************************/

const searchBar = (query) => {
    showAllcourses(courses.filter( prod => prod.shop.toLowerCase().includes( query.toLowerCase() ) ) );

  }

    document.getElementById(`search`).addEventListener(`key up`, (event) => {
    event.preventDefault();
    let q = document.getElementById(`search`).query.value;
         
    searchBar(q);

});

/*****************************************************************
        School Year
****************************************************************/

// const formatYears = (schoolYear) => {

    // return `
    // <li class="product-pic">
    //     <div class = "product"><a href="product-page.html"><img src="img/${product.photo}"></a></div>
    //     <div class="product-des"><a href="product-page.html">${product.shop}</a></div>
    //     <div class="price"> Room: ${product.rooms}</div>
    //     <div class="price"> Style: ${product.style}</div>
    //     <div class="price"> Colour: ${product.colour}</div>
    //     <div class="price">${outOfStock}</div>
    // </li>`; 

    
/*****************************************************************
        onclick
****************************************************************/
