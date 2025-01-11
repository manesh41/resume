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
        ${name}'s Resume

        Email: ${email}
        Phone: ${phone}

        Skills:
        ${skills}

        Education:
        ${education}

        Work Experience:
        ${experience}
    `;

    // Display the resume
    document.getElementById('resume-output').innerHTML = resumeContent;

    // Enable the Download button
    document.getElementById('download-btn').style.display = 'block';

    // Save resume content in a global variable for download
    window.resumeData = resumeContent;
}

// Function to download the resume as a .txt file
function downloadResume() {
    const filename = 'resume.txt';
    const blob = new Blob([window.resumeData], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}
