function addInfo(course={number: "", name: "", description: ""}) {
    const infoContainer = document.getElementById('info-container');
    const infoElement = document.createElement('div');
    infoElement.innerHTML = `
        <li> 
            <label>Name: </label><input type="text" placeholder="ex: Steve Jobs" required/><br>
            <label>Email: </label><input type="email" placeholder="ex:steve@jobs.com" required/> <input type="button" id="delete" value="Delete"></input>
        </li>
        `;  
    infoContainer.appendChild(infoElement);

    const deleteButton = infoElement.querySelector('#delete');
    deleteButton.addEventListener('click', function() {
        infoElement.remove();
    });
}

function preview() {
    frame.src=URL.createObjectURL(event.target.files[0]);
}

function clearForm(){
    const submitStatusContainer = document.getElementById('submit-status');
    submitStatusContainer.innerHTML=``;
    submitStatusContainer.style.display ='none';

    const previewFrame = document.getElementById("frame");
    previewFrame.src = "images/imgpreview-placeholder.jpg";
    
    document.getElementById('image-upload').value="";
    
    const infoContainer = document.getElementById('info-container');
    infoContainer.innerHTML=``; 

    document.getElementById("name-input").value="";
    document.getElementById("email-input").value="";
    document.getElementById("message-input").value="";
}

function submitForm(event) {
    event.preventDefault();
    
    clearForm();

    const submitStatusContainer = document.getElementById('submit-status');
    submitStatusContainer.innerHTML=`Form Submitted! Thank You :)`;
    submitStatusContainer.style.display ='inline';
}

document.addEventListener("DOMContentLoaded", function () {    
    document.getElementById("contact-form").addEventListener("submit", submitForm);
    document.getElementById("contact-form").addEventListener("reset", clearForm);
});
