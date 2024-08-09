// Toggle menu for mobile view
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('active');
});

// Form validation
document.getElementById('send-sms').addEventListener('click', function() {
    const phoneInput = document.getElementById('phone').value;
    const errorMessage = document.getElementById('error-message');
    
    const phonePattern = /^\+91\d{10}$/;
    if (!phonePattern.test(phoneInput)) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        alert('SMS sent successfully!');
    }
});
// script.js

document.getElementById('pay-fee').addEventListener('click', function() {
    const patientName = document.getElementById('patient-name').value;
    const patientAge = document.getElementById('patient-age').value;
    const patientGender = document.getElementById('patient-gender').value;
    const patientFee = document.getElementById('patient-fee').value;

    if (patientName && patientAge && patientGender) {
        // Redirect to mock payment gateway page
        window.location.href = `payment.html?name=${patientName}&age=${patientAge}&gender=${patientGender}&fee=${patientFee}`;
    } else {
        alert('Please fill out all fields');
    }
});

