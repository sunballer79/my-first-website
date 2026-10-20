
const button = document.getElementById("welcomeButton");

button.addEventListener("click", function() {
    alert("I just programmed my first interactive website! Bout to get PAID");
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const response = document.getElementById("formResponse");

    response.textContent = "Thank you, " + name +
        "! Your message was received in this demo.";

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    contactForm.reset();

});
