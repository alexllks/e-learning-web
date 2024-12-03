document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Τα passwords δεν ταιριάζουν!');
        return;
    }

    const dob = new Date(document.getElementById('dob').value);
    const age = new Date().getFullYear() - dob.getFullYear();
    if (age < 18) {
        alert('Πρέπει να είστε τουλάχιστον 18 ετών!');
        return;
    }

    alert('Η εγγραφή σας ολοκληρώθηκε επιτυχώς!');
});
