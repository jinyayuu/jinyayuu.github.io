function addInfo(course={number: "", name: "", description: ""}) { //adds CC recipient fields in form
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
        infoElement.remove(); //div element created within the function so it can be deleted by the function
    });
}

function preview() {
    frame.src=URL.createObjectURL(event.target.files[0]);//when img is uploaded, frame updates to show the img
}

function clearForm(){ //resets form to original state
    const submitStatusContainer = document.getElementById('submit-status');
    submitStatusContainer.innerHTML=``;
    submitStatusContainer.style.display ='none';

    const previewFrame = document.getElementById("frame");
    previewFrame.src = "images/imgpreview-placeholder.jpg";
    
    document.getElementById('image-upload').value=""; //clears file from the upload input element
    
    const infoContainer = document.getElementById('info-container');
    infoContainer.innerHTML=``; 

    document.getElementById("name-input").value="";
    document.getElementById("email-input").value="";
    document.getElementById("message-input").value="";
}

function submitForm(event) {
    event.preventDefault(); //stops the typical "submit" event from happening
    
    clearForm(); //clearing form before showing submition status

    const submitStatusContainer = document.getElementById('submit-status');
    submitStatusContainer.innerHTML=`Form Submitted! Thank You :)`;
    submitStatusContainer.style.display ='inline';
}

document.addEventListener("DOMContentLoaded", function () {    
    document.getElementById("contact-form").addEventListener("submit", submitForm);
    document.getElementById("contact-form").addEventListener("reset", clearForm);
});
