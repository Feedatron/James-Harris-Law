const frontContact = document.getElementById("front");
const backContact = document.getElementById("back");
const contactForm = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function() {
    frontContact.setAttribute('style', "transform: rotateY(-180deg)");
    backContact.setAttribute('style', "transform: rotateY(0)");
})