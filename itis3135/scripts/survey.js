const addCourseButton = document.getElementById('add-course');
const myCourseInformation = [
    {number: "ITIS3135", name: "Web Development", description: "I want to create illustrative websites for games and portfolios, so I want to better understand the anatomy and processing of websites."},
    {number: "CHNS1512", name: "Chinese Film", description: "I enjoy watching animations, and was curious to see Chinese films to connect with my roots."},
    {number: "PHIL3242", name: "Philosophy of Mind", description: "An interesting course that asks questions of what consciousness and thought is on an abstract level."},
    {number: "PSYC4650", name: "Seminar in Human Adept & Beh", description: "My capstone where I hope to tie in my education with cognition and human interaction for why we act this way."}
];

function preview() {
    frame.src=URL.createObjectURL(event.target.files[0]);
}

let courseCount = 1;
function addCourse(course={number: "", name: "", description: ""}) {
    const courseContainer = document.getElementById('courses-container');
    const courseElement = document.createElement('div');
    courseElement.innerHTML = `
        <li id="courseEntry${courseCount}" class="courseEntry"> 
            <input type="text" id="courseNumber${courseCount}" class="courseNum" placeholder="Number" value="${course.number}" required/>
            <input type="text" id="courseName${courseCount}" class="courseName" placeholder="Name" value="${course.name}" required/> <br>
            Description:<textarea id="courseDescription${courseCount}" placeholder="Why you are taking this course." required>${course.description}</textarea>
        </li>
        <input type="button" id="delete" value="Delete"></input>`;  
    courseContainer.appendChild(courseElement);
    courseCount++;

    const deleteButton = courseElement.querySelector('#delete');
    deleteButton.addEventListener('click', function() {
        courseElement.remove();
        courseCount--;
    });
}

function resetForm (){
    const form = document.getElementById("introduction-form");
    form.style.display ='block';
    const div = document.getElementById("results");
    div.style.display ="none";
    div.innerHTML =``;

    const previewFrame = document.getElementById("frame");
    previewFrame.src = "images/me.jpg";

    const courseContainer = document.getElementById('courses-container');
    courseContainer.innerHTML=``; 
    courseCount = 1;
    
    myCourseInformation.forEach(addCourse);
    document.getElementById("introduction-form").reset();
}

function clearForm(){
    const form = document.getElementById("introduction-form");
    form.style.display ='block';
    const div = document.getElementById("results");
    div.style.display ="none";
    div.innerHTML =``;

    const previewFrame = document.getElementById("frame");
    previewFrame.src = "";

    const courseContainer = document.getElementById('courses-container');
    courseContainer.innerHTML=``; 
    courseCount = 0;

    document.getElementById("name-input").value="";
    document.getElementById("mascot-input").value="";
    document.getElementById("caption-input").value="";
    document.getElementById("personal-input").value="";
    document.getElementById("professional-input").value="";
    document.getElementById("academic-input").value="";
    document.getElementById("development-input").value="";
    document.getElementById("platform-input").value="";
    document.getElementById("funny-input").value="";
    document.getElementById("share-input").value="";
}

function createIntroduction(event) {
    event.preventDefault();

    if (courseCount <= 1) {
        alert("You must have atleast one class.");
        return;
    }

    const form = document.getElementById("introduction-form");
    form.style.display ='none';
    const div = document.getElementById("results");
    div.style.display ="block";
  
    const name = document.getElementById("name-input").value.trim();
    const mascot = document.getElementById("mascot-input").value.trim();
    const image = document.getElementById("image").files[0];
    const imageSrc = image ? URL.createObjectURL(image) : "images/me.jpg";
    const caption = document.getElementById("caption-input").value.trim();
    const personal = document.getElementById("personal-input").value.trim();
    const professional = document.getElementById("professional-input").value.trim();
    const academic = document.getElementById("academic-input").value.trim();
    const development = document.getElementById("development-input").value.trim();
    const platform = document.getElementById("platform-input").value.trim();
    const funny = document.getElementById("funny-input").value.trim();
    const share = document.getElementById("share-input").value.trim();

    const introductionContainer = document.getElementById('results');
    const introductionElement = document.createElement('div');

    let introductionCourseHTML = ``;
    if(courseCount > 0) {
        introductionCourseHTML +=`<ul><ul>`;
        for (let i = 1; i < courseCount; i++){
            
            introductionCourseHTML +=`<li><strong>${document.getElementById(`courseNumber${i}`).value.trim()} - ${document.getElementById(`courseName${i}`).value.trim()} - </strong>${document.getElementById(`courseDescription${i}`).value.trim()}</li>`;
            
        }
        introductionCourseHTML +=`</ul></ul>`;
    } 

    introductionElement.style.textAlign="left";
    introductionElement.innerHTML = `
        <figure>
            <img alt="A picture of me!" src="${imageSrc}">
            <figcaption><i>${caption}</i></figcaption>
        </figure>
        <h3>Heyy, I'm ${name} (${mascot})!</h3> 
        <ul>
            <li><strong>Personal Background: </strong>${personal}</li>
            <li><strong>Professional Background: </strong>${professional}</li>
            <li><strong>Academic Background: </strong>${academic}</li>
            <li><strong>Programming/Software Background: </strong>${development}</li>
            <li><strong>Computer Platform: </strong>${platform}</li>
            <li><strong>Courses I Am Taking &amp; Why: </strong> 
            </ul>
            `;
    introductionElement.innerHTML += introductionCourseHTML;
    introductionElement.innerHTML +=`    
        <ul>
            <li><strong>Funny/interesting Item to Remember Me by: </strong>${funny}</li>
            <li><strong>I'd Also Like to Share: </strong>${share}</li>
        </ul>
        <input type="reset" id="reset-button" value="Reset" onclick="clearForm()"/>
        `;  
    introductionContainer.appendChild(introductionElement);
}

document.addEventListener("DOMContentLoaded", function () {    
    myCourseInformation.forEach(addCourse);
    document.getElementById("introduction-form").addEventListener("submit", createIntroduction);
});


