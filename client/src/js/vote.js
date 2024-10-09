document.getElementById('voteForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get user data from localStorage
    const user = JSON.parse(localStorage.getItem('userDetails'));

    if (user) {
        fetch('http://localhost:4000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: user.email,
                firstName: user.firstName,
                idNumber: user.idNumber
            })
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById('status').textContent = data;
        })
        .catch(error => {
            document.getElementById('status').textContent = 'Error: ' + error.message;
        });
    } else {
        document.getElementById('status').textContent = 'No user data found. Please register first.';
    }
});