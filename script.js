// Function to generate the resume and show the content
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
    document.getElementById('download-pdf-btn').style.display = 'block'; // Show PDF download button

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

// Function to download the resume as a PDF file
function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text(window.resumeData, 10, 10);
    doc.save('resume.pdf');
}

// Add an event listener to the role dropdown to pre-fill the form
document.getElementById('role').addEventListener('change', function() {
    const role = this.value;

    if (role === 'developer') {
        document.getElementById('skills').value = 'JavaScript, Node.js, React';
        document.getElementById('education').value = 'B.Tech in Computer Science';
        document.getElementById('experience').value = '3 years as a Software Developer';
    } else if (role === 'data_scientist') {
        document.getElementById('skills').value = 'Python, SQL, Machine Learning';
        document.getElementById('education').value = 'M.Sc in Data Science';
        document.getElementById('experience').value = '2 years as a Data Scientist';
    } else if (role === 'marketer') {
        document.getElementById('skills').value = 'SEO, Social Media Marketing, Content Creation';
        document.getElementById('education').value = 'MBA in Marketing';
        document.getElementById('experience').value = '4 years as a Digital Marketer';
    }
});

// Set default role on page load
document.getElementById('role').value = 'developer'; // Set default role to Developer
document.getElementById('role').dispatchEvent(new Event('change')); // Trigger the change event to pre-fill the form
