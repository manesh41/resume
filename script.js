document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collecting form data
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let experience = document.getElementById('experience').value;
    let skills = document.getElementById('skills').value;
    let photo = document.getElementById('photo').files[0];

    // Creating the resume preview content
    let resumeContent = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p><strong>Experience:</strong></p>
        <p>${experience}</p>
        <p><strong>Skills:</strong></p>
        <p>${skills}</p>
    `;

    if (photo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            resumeContent = `<img src="${e.target.result}" alt="Profile Photo" style="width: 150px; border-radius: 50%; margin-bottom: 15px;">` + resumeContent;
            document.getElementById('resumeContent').innerHTML = resumeContent;
            document.getElementById('resumePreview').style.display = 'block';
        };
        reader.readAsDataURL(photo);
    } else {
        document.getElementById('resumeContent').innerHTML = resumeContent;
        document.getElementById('resumePreview').style.display = 'block';
    }

    document.getElementById('downloadBtn').addEventListener('click', function() {
        // Generate resume in PDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.text(20, 20, `${name}\n${email}\n\nExperience:\n${experience}\n\nSkills:\n${skills}`);
        doc.save(`${name}_Resume.pdf`);
    });
});
