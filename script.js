var _a, _b;
(_a = document.getElementById('generateButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', generateResume);
(_b = document.getElementById('editButton')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', editResume);
function generateResume() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var location = document.getElementById('location').value;
    var contact = document.getElementById('contact').value;
    var resumeHTML = "\n        <h2>".concat(name, "'s Resume</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Contact:</strong> ").concat(contact, "</p>\n        <p><strong>Location:</strong> ").concat(location, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n\n        <h3>Work Experience</h3>\n        <p>").concat(experience, "</p>\n    ");
    var resumeDisplay = document.getElementById('resumeDisplay');
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
        resumeDisplay.scrollIntoView({ behavior: 'smooth' });
    }
    // Hide the form and show the edit button
    document.getElementById('formContainer').style.display = 'none';
    document.getElementById('editButton').style.display = 'block';
}
function editResume() {
    var _a;
    // Show the form again for editing
    document.getElementById('formContainer').style.display = 'block';
    document.getElementById('editButton').style.display = 'none';
    // Scroll back to the form
    (_a = document.getElementById('formContainer')) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
}
