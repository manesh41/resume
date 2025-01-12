// Fetch elements from the DOM
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const workInput = document.getElementById("work");
const educationInput = document.getElementById("education");
const skillsInput = document.getElementById("skills");

const previewName = document.getElementById("preview-name");
const previewContact = document.getElementById("preview-contact");
const previewWork = document.getElementById("preview-work");
const previewEducation = document.getElementById("preview-education");
const previewSkills = document.getElementById("preview-skills");

// Update resume template in real-time
function updateTemplate() {
  previewName.textContent = nameInput.value || "Your Name";
  previewContact.textContent = `Email: ${emailInput.value || "your-email@example.com"} | Phone: ${phoneInput.value || "123-456-7890"}`;
  previewWork.textContent = workInput.value || "Work experience will be shown here...";
  previewEducation.textContent = educationInput.value || "Education details will be shown here...";
  previewSkills.textContent = skillsInput.value ? skillsInput.value.split(",").join(", ") : "Skills will be shown here...";
}

// Attach real-time event listeners to input fields
[nameInput, emailInput, phoneInput, workInput, educationInput, skillsInput].forEach(input => {
  input.addEventListener("input", updateTemplate);
});

// Download Resume as PDF
document.getElementById("download-resume").addEventListener("click", () => {
  const resumeElement = document.getElementById("resume-preview");

  // Use html2canvas to capture the resume preview
  html2canvas(resumeElement).then(canvas => {
    const imgData = canvas.toDataURL("image/png");

    // Use jsPDF to generate PDF
    const pdf = new jspdf.jsPDF();
    pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
    pdf.save("resume.pdf");
  });
});


