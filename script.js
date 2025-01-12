// Get input fields and preview elements
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const workInput = document.getElementById("work");
const educationInput = document.getElementById("education");
const skillsInput = document.getElementById("skills");

const previewName = document.getElementById("preview-name");
const previewEmail = document.getElementById("preview-email");
const previewPhone = document.getElementById("preview-phone");
const previewWork = document.getElementById("preview-work");
const previewEducation = document.getElementById("preview-education");
const previewSkills = document.getElementById("preview-skills");

// Update resume preview in real-time
function updatePreview() {
  previewName.textContent = nameInput.value || "Your Name";
  previewEmail.textContent = `Email: ${emailInput.value || "your-email@example.com"}`;
  previewPhone.textContent = `Phone: ${phoneInput.value || "123-456-7890"}`;
  previewWork.textContent = workInput.value || "Describe your work experience here...";
  previewEducation.textContent = educationInput.value || "Describe your educational background here...";
  previewSkills.textContent = skillsInput.value ? skillsInput.value.split(",").join(", ") : "Your skills will appear here...";
}

// Attach input listeners for real-time updates
[nameInput, emailInput, phoneInput, workInput, educationInput, skillsInput].forEach(input => {
  input.addEventListener("input", updatePreview);
});

// Download resume as PDF (using jsPDF library)
document.getElementById("download-btn").addEventListener("click", () => {
  const element = document.getElementById("resume-preview");
  
  // Use html2canvas and jsPDF libraries for PDF generation
  html2canvas(element).then(canvas => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
    pdf.save("resume.pdf");
  });
});

