// Updating the resume preview in real time
document.querySelectorAll("#resume-form input, #resume-form textarea").forEach((input) => {
  input.addEventListener("input", updatePreview);
});

function updatePreview() {
  document.getElementById("preview-name").textContent = document.getElementById("name").value || "Your Name";
  document.getElementById("preview-email").textContent =
    "Email: " + (document.getElementById("email").value || "your.email@example.com");
  document.getElementById("preview-phone").textContent =
    "Phone: " + (document.getElementById("phone").value || "123-456-7890");
  document.getElementById("preview-work-experience").textContent =
    document.getElementById("work-experience").value || "Your work experience will appear here.";
  document.getElementById("preview-education").textContent =
    document.getElementById("education").value || "Your educational background will appear here.";
  document.getElementById("preview-skills").textContent =
    document.getElementById("skills").value || "Your skills will appear here.";
}

// Download the resume as PDF
document.getElementById("download-btn").addEventListener("click", function () {
  const resume = document.getElementById("resume-preview");
  html2canvas(resume).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
    pdf.save("resume.pdf");
  });
});


