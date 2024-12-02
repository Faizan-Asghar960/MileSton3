var resumeForm = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
// Check if the form and output div exist
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        var description = document.getElementById('description').value;
        // Generate HTML for the resume
        var resumeHTML = "\n            <h2>Generated Resume</h2>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>Education:</strong> ").concat(education, "</p>\n            <p><strong>Experience:</strong> ").concat(experience, "</p>\n            <p><strong>Skills:</strong> ").concat(skills, "</p>\n            <p><strong>Description:</strong> ").concat(description, "</p>\n        ");
        resumeOutput.innerHTML = resumeHTML; // Render the HTML structure in the output div
    });
}
else {
    console.error('Form or Output div not found in the DOM');
}
// Retrieve the form and output elements
var resumeForm = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        var description = document.getElementById('description').value;
        // Create resume HTML structure
        var resumeHTML = "\n            <h2>Generated Resume</h2>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>Education:</strong> ").concat(education, "</p>\n            <p><strong>Experience:</strong> ").concat(experience, "</p>\n            <p><strong>Skills:</strong> ").concat(skills, "</p>\n            <p><strong>Description:</strong> ").concat(description, "</p>\n        ");
        // Insert resume HTML into the output div
        resumeOutput.innerHTML = resumeHTML;
    });
}
else {
    console.error('Form or Output div not found in the DOM');
}
