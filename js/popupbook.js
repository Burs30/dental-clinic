document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('appointmentModal');
    const btn = document.getElementById('appointmentBtn');
    const span = document.getElementsByClassName('close')[0];
    const form = document.getElementById('appointmentForm');

    btn.onclick = function () {
        modal.style.display = 'block';
    }

    span.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    form.onsubmit = function (e) {
        e.preventDefault();
        // Log form data
        console.log('Appointment requested for:');
        console.log('Name:', form.name.value);
        console.log('Email:', form.email.value);
        console.log('Phone:', form.phone.value);
        console.log('Date:', form.date.value);
        console.log('Time:', form.time.value);

        alert('Appointment request submitted! We will contact you shortly to confirm.');
        modal.style.display = 'none';
        form.reset();
    }
});