// index.js

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get user details
    const userDetails = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        idNumber: document.getElementById('idNumber').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    };

      // Send user details to the backend server using a POST request
      fetch('http://localhost:4000/addUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
    })
    .then(response => response.json())
    .then(data => {
        if (data._id) {
            // User saved successfully
            console.log('User saved successfully:', data);
        } else {
            // Handle any errors returned by the server
            console.error('Error saving user:', data);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while registering the user.');
    });

    // Store user details in local storage
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    console.log("saved successufully");
});

