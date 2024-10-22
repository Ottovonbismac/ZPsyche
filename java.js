// script.js

// Function to show a welcome alert
window.onload = function() {
    alert("Welcome to Zpsyche! We're here to help you cope with school-related issues.");
};

// Function to toggle section visibility
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

// Function to handle input focus for crossword
function nextInput(row)
