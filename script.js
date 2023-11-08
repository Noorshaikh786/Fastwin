function checkLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "Fastwin") {
        // Successful login
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("colorSection").style.display = "block";
    } else {
        // Invalid login
        document.getElementById("loginError").textContent = "Wrong ID or Password";
    }
}

function generateColor() {
    const periodNumber = document.getElementById("periodNumber").value;
    if (periodNumber.length !== 3 || isNaN(periodNumber)) {
        alert("Please enter a valid 3-digit period number.");
        return;
    }

    const randomColor = getRandomColor();
    displayColor(randomColor);
}

function getRandomColor() {
    // Generate a random number to determine the color
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
        return "red"; // Red
    } else {
        return "blue"; // Blue
    }
}

function displayColor(color) {
    const colorDisplay = document.getElementById("colorDisplay");
    if (color === "red") {
        colorDisplay.style.backgroundColor = "red";
        colorDisplay.textContent = "Red 🔴🔴";
    } else if (color === "blue") {
        colorDisplay.style.backgroundColor = "blue";
        colorDisplay.textContent = "Blue 🔵🔵";
    }
}
