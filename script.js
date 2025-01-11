const resumeSections = document.querySelectorAll('.resume-section');
const resumeTypeSelect = document.getElementById('resume-type');

resumeTypeSelect.addEventListener('change', function () {
  const selectedType = this.value;

  // Hide all sections
  resumeSections.forEach(section => section.style.display = 'none');
  
  // Show the selected resume section
  document.getElementById(selectedType).style.display = 'block';
});

// Initialize the page to show the first section by default
window.onload = function () {
  document.getElementById('chronological').style.display = 'block';
};

function generateResume() {
  const resumeType = resumeTypeSelect.value;
  const fullName = document.getElementById('full-name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  let resumeContent = `
    <h2>${fullName}'s ${resumeType.charAt(0).toUpperCase() + resumeType.slice(1)} Resume</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Address:</strong> ${address}</p>
  `;

  if (resumeType === "chronological") {
    const workExperience = document.getElementById('work-experience').value;
    resumeContent += `<h3>Work Experience:</h3><p>${workExperience}</p>`;
  } else if (resumeType === "functional") {
    const skills = document.getElementById('skills').value;
    resumeContent += `<h3>Skills:</h3><p>${skills}</p>`;
  } else if (resumeType === "creative") {
    const portfolio = document.getElementById('portfolio').value;
    resumeContent += `<h3>Portfolio:</h3><p><a href="${portfolio}" target="_blank">${portfolio}</a></p>`;
  }

  document.getElementById('resume-content').innerHTML = resumeContent;
  document.getElementById('preview-section').style.display = 'block';
}

function downloadResume(format) {
  const resumeContent = document.getElementById('resume-content').innerHTML;

  if (format === 'pdf') {
    alert('Download PDF feature is not implemented yet.');
  } else if (format === 'jpg' || format === 'png') {
    alert('Download JPG/PNG feature is not implemented yet.');
  }
}

