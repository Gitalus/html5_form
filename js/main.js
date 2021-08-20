const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

window.onload = function() {
    const form = document.querySelector('form');
    const selectStates = document.querySelector('select');
    states.forEach(estado => {
        const option = document.createElement('option');
        option.value = estado;
        option.textContent = estado;
        selectStates.appendChild(option);
    });

    // Event Listeners

    form.addEventListener('submit', checkValid);
}
// Functions
// function createAlert() {
//     const alertCard = document.createElement('div');
//     const textAlert = document.createTextNode("*required");
//     alertCard.appendChild(textAlert);
//     alertCard.classList.add("alert-input");
//     return alertCard;
// }

function checkValid (event) {
    event.preventDefault();
    const form = event.target;
    const formElements = event.target.elements;


    // const creditRex = /^(\d{4}).?(\d{4}).?(\d{4}).?(\d{4})$/;
    // const cvcRex = /^\d{3}$/;
    // const amountRex = /^\d+$/;
    // const fTextRex = /^[a-zA-Z]+$/i;
    // const postalRex = /\d{5,10}/;

    for (const element of formElements) {
        if (element.type == "submit" || element.type == "button") {
            continue;
        }
        if (element.value == false) {

            element.style.transition = "all .3s ease";
            element.style.background = "rgb(255 0 0 / 40%)";
        }
        else {
            element.style.transition = "all .3s ease";
            element.style.background = "rgb(255 255 255)";
        }
    }

}