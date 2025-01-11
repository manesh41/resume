// Display Work Experience Section based on Selection
document.getElementById("experience").addEventListener("change", function() {
    const experience = this.value;
    if (experience === "experienced") {
        document.getElementById("experienceSection").style.display = "block";
    } else {
        document.getElementById("experienceSection").style.display = "none";
    }
});

// Handle Image Upload
let uploadedImage = null;
document.getElementById("photo").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedImage = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Generate Resume Function
function generateResume() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const experience = document.getElementById("experience").value;
    const workExperience = document.getElementById("workExperience").value;
    const skills = document.getElementById("skills").value;
    const portfolio = document.getElementById("portfolio").value;

    let resumeHTML = `
        <h3>${name}</h3>
        <img src="${uploadedImage}" alt="Profile Picture" style="width: 150px; height: 150px; border-radius: 50%; margin-bottom: 20px;">
        <p>Email: ${email}</p>
        <p>Phone: ${number}</p>
        <p><strong>Skills:</strong> ${skills}</p>
        <p><strong>Portfolio:</strong> ${portfolio}</p>
    `;

    if (experience === "experienced" && workExperience) {
        resumeHTML += `<p><strong>Work Experience:</strong> ${workExperience}</p>`;
    }

    document.getElementById("resumeContent").innerHTML = resumeHTML;
    document.getElementById("resumePreview").classList.remove("hidden");
}

// Download Resume as PDF
function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const resumeContent = document.getElementById("resumeContent").innerHTML;
    doc.html(resumeContent, {
        callback: function (doc) {
            doc.save("resume.pdf");
        },
        x: 10,
        y: 10
    });
}

