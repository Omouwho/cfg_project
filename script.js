// Function to handle the sign-up button click
document.getElementById('signUpButton').addEventListener('click', function() {
    // Prompt the user to enter their name and email
    let userName = prompt("Please enter your name:");
    let userEmail = prompt("Please enter your email:");

    // Check if the user provided both name and email
    if (userName && userEmail) {
        alert(`Thank you for signing up, ${userName}! We will send updates to ${userEmail}.`);
    } else {
        alert("Please provide both your name and email to sign up.");
    }
});

