document.getElementById('generateButton')?.addEventListener('click', generateResume);
document.getElementById('editButton')?.addEventListener('click', editResume);

function generateResume() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const location = (document.getElementById('location') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;

    const resumeHTML = `
        <h2>${name}'s Resume</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Location:</strong> ${location}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Skills</h3>
        <p>${skills}</p>

        <h3>Work Experience</h3>
        <p>${experience}</p>
    `;

    const resumeDisplay = document.getElementById('resumeDisplay');
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
        resumeDisplay.scrollIntoView({ behavior: 'smooth' });
    }

    // Hide the form and show the edit button
    document.getElementById('formContainer')!.style.display = 'none';
    document.getElementById('editButton')!.style.display = 'block';
}

function editResume() {
    // Show the form again for editing
    document.getElementById('formContainer')!.style.display = 'block';
    document.getElementById('editButton')!.style.display = 'none';

    // Scroll back to the form
    document.getElementById('formContainer')?.scrollIntoView({ behavior: 'smooth' });
}
