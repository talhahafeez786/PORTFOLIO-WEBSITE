var typed = new Typed(".typing", {
    strings : ["Web Developer", "WordPress Developer", "Photographer"],
    typeSpeed : 100,
    BackSpeed :60,
    loop :true
})

const navToggler = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');

navToggler.addEventListener('click', function() {
    aside.classList.toggle('show');
});

// Function to toggle aside visibility
function toggleAside() {
    const aside = document.querySelector('.aside');
    aside.classList.toggle('show');
}

// Function to handle menu item click
function handleMenuItemClick(event) {
    // Prevent default behavior of anchor tags
    event.preventDefault();

    // Hide the aside navigation
    toggleAside();

    // Get the target section id from href attribute
    const targetId = event.target.getAttribute('href').substring(1); // Remove '#' from href

    // Scroll to the target section smoothly
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Mark the clicked menu item as active
        const navLinks = document.querySelectorAll('.aside .nav a');
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        event.target.classList.add('active');
    }
}

// Add event listener to nav links inside aside
const navLinks = document.querySelectorAll('.aside .nav a');
navLinks.forEach(link => {
    link.addEventListener('click', handleMenuItemClick);
});

