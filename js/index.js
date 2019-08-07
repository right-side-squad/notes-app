/*****************************************************************
        DATA Set
****************************************************************/


// const eachYear = [

//     {year1: "1st Year",

//      semesters: [

//          {semester1:"Semester 1",

//                ourses: 

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

//             ourses: 

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
              
//                {course1: "Semiotics",

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
              
//            {course1: "Semiotics II",

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

//             ourses: 

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

//             ourses: 

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


const years = [
    {
        year: "Year One",
        semesters: [
            {semester: "Semester 1", 
                courses: ["3D Visualization", "2D Visualization","Visual Design","Design History","Technical Drawing","Technical Systems",],
                    weeks: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6",]},
            {semester:"Semester 2",
                courses: ["3D Visualization II","2D Visualization II","Visual Design II","Design History II","Technical Drawing II","Technical Systems II",],
                    weeks: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6",]},

        ]
    },    {
        year: "Year Two",
        semesters: [
            {semester: "Semester 3", 
                courses: ["Semiotics","Social Networks","Sequential Arts","Design History","3D Visualization III","Interactive Video",],
                    weeks: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6",]},

            {semester:"Semester 4", 
                courses: ["Semiotics II","Social Networks II","Sequential Arts II","Design History II","Ergonomics","Interactive Video II",],
                    weeks: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6",]},

        ]
    },  {
        year: "Year three",
        semesters: [
            {semester: "Semester 5", 
                courses: ["Portfolio I","Device Development","Interactive Systems","Augmented Reality","Human-Computer Interaction","Digital Publishing",],
                    weeks: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6",]},

            {semester:"Semester 6", 
                courses: ["Portgolio II","Device Development II","Interactive Systems II","Augmented Reality II","Ergonomics","Digital Publishing II",],
                    weeks: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6",]},

        ]
    }, 
]

/*****************************************************************
        DATA Storage 
****************************************************************/

//const btnFirst = document.getElementById(`btnFirst`);
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
        format 
****************************************************************/

const lessonFormat= (lessons) => {
    
    return `
    <li>
        <button class="imgBtn"><img src="Icon Pack\png\new.png" alt="newpage" class="folder"></button>
        <div class="lessons"><a href="newnote.html">${lessons}</a></div>
    </li>`
}

const courseFormat= (crs) => {
    
    return `
    <li>
        <button class="crsBtn" id="wkbtn"><img src="Icon Pack/png/folder.png" alt="newpage" class="folder"></button>
        <div><a href="newnote.html" class="lessons">${crs}</a></div>
    </li>`

}

const getYearTab = (yr, id) => {
    return `<li><button class="coursebtn" data-id="${id}" >${yr.year}</button></li>`;
}

const getSemesterSection = (sem) => {

    const courses = sem.courses.map(courseFormat).join('')

    return `
    <section class="content"> 
        <h2 class="semHead">${sem.semester}</h2>
        <ul class= "quick-lists">
            ${courses}
        </ul>
    </section> `;
}

const getWeekSection = (wks) => {

    const weeks = wks.weeks.map(lessonFormat).join('')

    return `
    <section class="content"> 
        <h2 class="semHead">${wks.courses}</h2>
        <ul class= "quick-lists">
            ${weeks}
        </ul>
    </section> `;
}


/*****************************************************************
        Print First Year 
****************************************************************/
const printAllYears = (yrs) => {
    // Print all the tabs
    document.getElementById('year-list').innerHTML = yrs.map(getYearTab).join('');

    document.getElementById('year-list').addEventListener('click', event => {
        if (!event.target.matches(`.coursebtn`)) return;

        const yearId = parseInt(event.target.dataset.id);
        printOneYearsCourses(yrs[yearId]);
    });
    // Print the first semester
    printOneYearsCourses(yrs[0]);

}    

const printOneYearsCourses = (yr) => {
    document.getElementById('semesters').innerHTML = yr.semesters.map(getSemesterSection).join('')
}

const printOneCourseWeeks = (wk) => {
    document.getElementById('weekly').innerHTML = wk.weeks.map(getWeekSection).join('')
}

printAllYears(years);

document.getElementById(`wkbtn`).addEventListener(`click`, printOneYearsCourses(0))


/*****************************************************************
        Print Second Year 
****************************************************************/

/*****************************************************************
        Print Third Year 
****************************************************************/


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

    
/*****************************************************************
        onclick
****************************************************************/
