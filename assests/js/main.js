   // Typewriter effect
   const professions = [
    "web developer",
    "front-end developer",
    "web designer",
    "professional coder",
    "creative thinker"
];

const professionElement = document.getElementById("profession");
let professionIndex = 0;
let letterIndex = 0;

function type() {
    if (letterIndex < professions[professionIndex].length) {
        professionElement.innerHTML += professions[professionIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(type, 100); // Adjust typing speed here
    } else {
        setTimeout(erase, 1000); // Wait before erasing
    }
}

function erase() {
    if (letterIndex >= 0) {
        professionElement.innerHTML = professions[professionIndex].substring(0, letterIndex);
        letterIndex--;
        setTimeout(erase, 50); // Adjust erasing speed here
    } else {
        professionIndex = (professionIndex + 1) % professions.length; // Cycle to the next profession
        setTimeout(type, 1000); // Wait before typing the next profession
    }
}

// Start the typewriter effect
type();



// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// Attach click event handlers to navigation links
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetSectionId = this.getAttribute("href").substring(1); // Remove the '#' symbol
            scrollToSection(targetSectionId);
        });
    });
});

