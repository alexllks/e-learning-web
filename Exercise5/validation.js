document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Αποτρέπει την προεπιλεγμένη υποβολή της φόρμας

    const form = event.target;
    let isValid = true;

    // Επικύρωση όλων των required πεδίων
    form.querySelectorAll('[required]').forEach(function (input) {
        if (!input.value.trim()) {
            input.style.borderColor = 'red'; // Εμφάνιση κόκκινου περιγράμματος
            isValid = false;
        } else {
            input.style.borderColor = ''; // Αφαιρεί το κόκκινο περίγραμμα αν είναι έγκυρο
        }
    });

    if (!isValid) {
        alert('Παρακαλώ συμπληρώστε όλα τα υποχρεωτικά πεδία.');
        return;
    }

    // Πρόσθετοι έλεγχοι για password και ηλικία
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_].*[\W_])[A-Za-z\d\W_]{8,}$/;

    if (!passwordRegex.test(password)) {
        alert('Ο κωδικός πρέπει να περιέχει τουλάχιστον 8 χαρακτήρες, ένα κεφαλαίο γράμμα και δύο σύμβολα.');
        document.getElementById('password').style.borderColor = 'red';
        return;
    } else {
        document.getElementById('password').style.borderColor = '';
    }
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
    form.submit(); // Υποβάλλει τη φόρμα
});
