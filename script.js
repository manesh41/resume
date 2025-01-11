function generateResume() {
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const skills = document.getElementById('skills').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;

    // Create the resume content
    const resumeContent = `
        <h3>${name}'s Resume</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h4>Skills</h4>
        <p>${skills}</p>
        <h4>Education</h4>
        <p>${education}</p>
        <h4>Work Experience</h4>
        <p>${experience}</p>
    `;

    // Display the resume
    document.getElementById('resume-output').innerHTML = resumeContent;
}
