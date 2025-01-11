// Function to generate the resume
function generateResume() {
  const fullName = document.getElementById('full-name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const workExperience = document.getElementById('work-experience').value;
  const skills = document.getElementById('skills').value;
  const portfolio = document.getElementById('portfolio').value;

  // Resume content structure
  let resumeContent = `
    <h2>${fullName}'s Resume</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Address:</strong> ${address}</p>
    <h3>Work Experience:</h3>
    <p>${workExperience}</p>
    <h3>Skills:</h3>
    <p>${skills}</p>
    <h3>Portfolio:</h3>
    <p><a href="${portfolio}" target="_blank">${portfolio}</a></p>
  `;

  // Set the generated resume content to preview section
  document.getElementById('resume-content').innerHTML = resumeContent;

  // Show the preview section
  document.getElementById('preview-section').style.display = 'block';
}

// Function to download resume
function downloadResume(format) {
  const resumeContent = document.getElementById('resume-content');

  if (format === 'pdf') {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.html(resumeContent, {
      callback: function (doc) {
        doc.save('resume.pdf');
      }
    });
  } else {
    html2canvas(resumeContent).then(canvas => {
      const dataUrl = canvas.toDataURL();
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `resume.${format}`;
      link.click();
    });
  }
}

