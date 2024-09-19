const modal = document.getElementById("login-form");
const joinUsBtn = document.getElementById("join-us-btn");

joinUsBtn.onclick = function() {
    modal.style.display = "block";
}
closeButton.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
if (username === "Achukwi" && password === "Salvador") {
    // Add a real authentication process
} else {
    alert("Invalid credentials, please try again.");
}

/*Section code for payment button*/
const selectPlanButtons = document.querySelectorAll('.select-plan');
selectPlanButtons.forEach(button => {
    button.addEventListener('click', () => {
        const planName = button.getAttribute('data-plan');
        const planPrice = button.getAttribute('data-price');
        document.getElementById("plan-name").textContent = planName;
        document.getElementById("plan-price").textContent = planPrice;

        // Scroll to the dashboard
        document.getElementById("dashboard").scrollIntoView({ behavior: "smooth" });
    });
});

/*section code for */
const response = await fetch('/create-payment-intent', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount }),
});

const { clientSecret } = await response.json();
return clientSecret;

const stripe = Stripe('your-publishable-key-here'); // Replace with your publishable key
