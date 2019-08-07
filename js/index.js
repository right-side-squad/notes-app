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

}    


const printOneYearsCourses = (yr) => {
    document.getElementById('semesters').innerHTML = yr.semesters.map(getSemesterSection).join('')
}

// The following did not work - Ask Rocco 

// printOneYearsCourses(yrs[0]);

// const printAllWeeks = (allwks) => {

//     document.getElementById('').addEventListener('click', event => {
//     if (!event.target.matches(`.crsBtn`)) return;
// });

// printOneCourseWeeks(allwks[0]);

// }    



// const printOneCourseWeeks = (wk) => {
//     document.getElementById('weekly').innerHTML = wk.courses.map(getWeekSection).join('')
// }

printAllYears(years);




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
