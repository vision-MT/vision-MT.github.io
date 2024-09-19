// Function to smoothly scroll to the specified section
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);

    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`Section with ID ${sectionId} not found.`);
    }
}

// Event listeners for each button
document.getElementById('about-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    scrollToSection('#about');
});

document.getElementById('projects-btn').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToSection('#projects');
});

document.getElementById('contact-btn').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToSection('#contact');
});

// Error handling for missing buttons
try {
    if (!document.getElementById('about-btn')) throw new Error('About button not found.');
    if (!document.getElementById('projects-btn')) throw new Error('Projects button not found.');
    if (!document.getElementById('contact-btn')) throw new Error('Contact button not found.');
} catch (error) {
    console.error(error.message);
}
