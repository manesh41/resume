// Handle the experience type selection (show/hide work experience field)
document.getElementById('experienceType').addEventListener('change', function() {
    const experienceType = document.getElementById('experienceType').value;
    const workExperienceGroup = document.getElementById('workExperienceGroup');
    
    if (experienceType === 'experienced') {
        workExperienceGroup.style.display = 'block';
    } else {
        workExperienceGroup.style.display = 'none';
    }
});

// Handle the resume generation
document.getElementById('generateResume').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const experienceType = document.getElementById('experienceType').value;
    const workExperience = document.getElementById('workExperience').value;
    const skills = document.getElementById('skills').value;
    const portfolio = document.getElementById('portfolio').value;

    // Basic validation
    if (name && email && phone && skills) {
        const resumeContent = `
            <h3>${name}</h3>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Experience:</strong> ${experienceType}</p>
            ${experienceType === 'experienced' ? `<p><strong>Work Experience:</strong> ${workExperience}</p>` : ''}
            <h4>Skills</h4>
            <p>${skills}</p>
            ${portfolio ? `<h4>Portfolio</h4><p>${portfolio}</p>` : ''}
        `;
        document.getElementById('resumeContent').innerHTML = resumeContent;
        document.getElementById('resumePreview').style.display = 'block';
    } else {
        alert('Please fill out all required fields.');
    }
});

// Handle the download button
document.getElementById('downloadBtn').addEventListener('click', function() {
    const resumeContent = document.getElementById('resumeContent').innerHTML;
    
    // Create a downloadable file (HTML format for now)
    const blob = new Blob([resumeContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.html';
    link.click();
});
