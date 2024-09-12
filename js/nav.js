document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navButtons = document.querySelector('.nav-buttons');

    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        navButtons.classList.toggle('active');
    });

    // Login button functionality
    document.querySelector('.btn-login').addEventListener('click', function() {
        alert('Login functionality to be implemented');
    });

    // Sign Up button functionality
    document.querySelector('.btn-signup').addEventListener('click', function() {
        alert('Sign Up functionality to be implemented');
    });

    // Book Appointment button functionality
    document.querySelector('.btn-appointment').addEventListener('click', function() {
        alert('Appointment booking functionality to be implemented');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            navButtons.classList.remove('active');
        });
    });
});