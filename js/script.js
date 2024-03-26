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
    let totalPrice = 0;
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
    if (crust === 'stuffed') {
        totalPrice += 2;
    }
    totalPrice += toppings.length; // Each topping costs $1

    // Generate bill message
    let toppingsMessage = toppings.length > 0 ? toppings.join(', ') : "no toppings";
    const message = `Thank you for purchasing at Jasuben Pizza.\nYour ${size} pizza with ${toppingsMessage} and ${crust} crust will be delivered soon.\nTotal Price: $${totalPrice}`;
    displayMessage(message);

    // Show student info
    document.getElementById("studentInfo").classList.remove("hidden");
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
