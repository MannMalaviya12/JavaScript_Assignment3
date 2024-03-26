document.addEventListener("DOMContentLoaded", function() {
    addStudentInfo();
});

function addStudentInfo() {
    const studentInfoDiv = document.getElementById("studentInfo");
    const studentInfoParagraph = document.createElement("p");
    studentInfoParagraph.textContent = "Student Number: 200553410\nName: Mann Malaviya";
    studentInfoDiv.appendChild(studentInfoParagraph);
}

function orderPizza() {
    const size = document.getElementById("size").value;
    const crust = document.getElementById("crust").value;
    const toppings = [];
    const toppingsCheckboxes = document.getElementsByName("toppings");
    toppingsCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            toppings.push(checkbox.value);
        }
    });

    // Calculate prices
    let totalPrice = calculatePrice(size, crust, toppings);

    // Generate bill message
    let toppingsMessage = toppings.length > 0 ? toppings.join(', ') : "no toppings";
    const message = `Thank you for purchasing at Jasuben Pizza.\nYour ${size} pizza with ${toppingsMessage} and ${crust} crust will be delivered soon.\nTotal Price: $${totalPrice}`;
    displayMessage(message);

    // Show student info
    document.getElementById("studentInfo").classList.remove("hidden");
}

function calculatePrice(size, crust, toppings) {
    let totalPrice = 0;

    // Base prices
    switch (size) {
        case 'small':
            totalPrice += 5;
            break;
        case 'medium':
            totalPrice += 7;
            break;
        case 'large':
            totalPrice += 9;
            break;
    }

    // Crust
    if (crust === 'stuffed') {
        totalPrice += 2;
    }

    // Toppings
    totalPrice += toppings.length; // Each topping costs $1

    return totalPrice;
}

function displayMessage(message) {
    // Clear previous message
    const existingMessage = document.getElementById("bill");
    if (existingMessage) {
        existingMessage.innerHTML = "";
    }

    // Display new message
    const messageParagraph = document.createElement("p");
    messageParagraph.textContent = message;
    document.getElementById("bill").appendChild(messageParagraph);
}
