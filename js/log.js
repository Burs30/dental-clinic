document.addEventListener('DOMContentLoaded', function() {
    // Fade in the form container
    const container = document.querySelector('.container');
    setTimeout(() => {
        container.classList.add('show');
    }, 100);

    // Add focus and blur effects to input fields
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('focused');
            }
        });
    });

    // Add shake animation to submit button on click
    const submitButton = document.querySelector('.btn-submit');
    submitButton.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent form submission for this example
        this.classList.add('shake');
        setTimeout(() => {
            this.classList.remove('shake');
        }, 500);
    });

    // Simple form validation (you should expand on this)
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const inputs = this.querySelectorAll('input[required]');
        let isValid = true;
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                isValid = false;
                input.classList.add('shake');
                setTimeout(() => {
                    input.classList.remove('shake');
                }, 500);
            }
        });
        if (isValid) {
            alert('Form submitted successfully!'); // Replace with actual form submission
        }
    });
});