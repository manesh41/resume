document.getElementById('generate-btn').addEventListener('click', generateResume);

function generateResume() {
  const fullName = document.getElementById('full-name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const workExperience = document.getElementById('work-experience').value;
  const skills = document.getElementById('skills').value;
  const portfolio = document.getElementById('portfolio').value;
  const resumeType = document.getElementById('resume-type').value;

  let resumeContent = `
    <div class="resume-header">
      <img src="${document.getElementById('profile-photo').src || ''}" alt="Profile Photo" class="profile-image">
      <h2>${fullName}</h2>
      <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
    </div>
    <div class="resume-section">
      <h3>Work Experience:</h3>
      <p>${workExperience}</p>
    </div>
    <div class="resume-section">
      <h3>Skills:</h3>
      <p>${skills}</p>
    </div>
    <div class="resume-section">
      <h3>Portfolio:</h3>
      <p><a href="${portfolio}" target="_blank">${portfolio}</a></p>
    </div>
  `;

  // Different styles for resume types
  if (resumeType === "modern") {
    document.getElementById('resume-content').innerHTML = `<div class="modern-resume">${resumeContent}</div>`;
  } else {
    document.getElementById('resume-content').innerHTML = `<div class="professional-resume">${resumeContent}</div>`;
  }

  document.getElementById('preview-section').style.display = 'block';
}

// Function to preview the uploaded image
function previewImage(event) {
  const image = document.getElementById('profile-photo');
  image.src = URL.createObjectURL(event.target.files[0]);
}

// Function to download resume in different formats
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

