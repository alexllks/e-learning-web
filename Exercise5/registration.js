document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Αποτρέπει την υποβολή της φόρμας

    // Λίστα των υποχρεωτικών πεδίων
    const requiredFields = ['fullname', 'email', 'password', 'confirm-password'];

    // Έλεγχος αν όλα τα υποχρεωτικά πεδία είναι συμπληρωμένα
    let formIsValid = true;
    requiredFields.forEach((fieldId) => {
        const field = document.getElementById(fieldId);
        if (!field.value.trim()) {
            alert(`Το πεδίο ${fieldId} είναι υποχρεωτικό!`);
            formIsValid = false;
        }
    });

    if (!formIsValid) return;

    // Έλεγχος αν τα passwords ταιριάζουν
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Τα passwords δεν ταιριάζουν!');
        return;
    }

    // Έλεγχος ηλικίας (τουλάχιστον 18 ετών)
    const dob = new Date(document.getElementById('dob').value);
    const age = new Date().getFullYear() - dob.getFullYear();

    if (age < 18) {
        alert('Πρέπει να είστε τουλάχιστον 18 ετών!');
        return;
    }

    alert('Η εγγραφή σας ολοκληρώθηκε επιτυχώς!');
});
