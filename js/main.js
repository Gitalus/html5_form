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
function createAlert() {
    const alertCard = document.createElement('div');
    const textAlert = document.createTextNode("*required, please check format");
    alertCard.appendChild(textAlert);
    alertCard.classList.add("alert-input");
    return alertCard;
}

function checkValid (event) {
    event.preventDefault();
    const form = event.target;
    const formElements = event.target.elements;


    const creditRex = /^(\d{4}).?(\d{4}).?(\d{4}).?(\d{4})$/;
    const cvcRex = /^\d{3}$/;
    const amountRex = /^\d+$/;
    const fTextRex = /^[a-zA-Z]+$/i;
    const postalRex = /\d{5,10}/;


    if (!creditRex.exec(formElements["credit-card"].value)) {
        formElements["credit-card"].style.background = 'rgb(255 0 0 / 50%)';
        formElements["credit-card"].style.transition = "all 0.3s ease";
    }
    
    if (!cvcRex.exec(formElements["cvc-card"].value)) {
        
        formElements["cvc-card"].style.background = 'rgb(255 0 0 / 50%)';
        formElements["cvc-card"].style.transition = "all 0.3s ease";
    }
    
    if (!amountRex.exec(formElements["amount"].value)) {
        formElements["amount"].style.background = 'rgb(255 0 0 / 50%)';
        formElements["amount"].style.transition = "all 0.3s ease";
    }
    
    if (!fTextRex.exec(formElements["firstName"].value)) {
        formElements["firstName"].style.background = 'rgb(255 0 0 / 50%)';
        formElements["firstName"].style.transition = "all 0.3s ease";
    }
    
    if (!fTextRex.exec(formElements["lastName"].value)) {
        formElements["lastName"].style.background = 'rgb(255 0 0 / 50%)';
        formElements["lastName"].style.transition = "all 0.3s ease";
    }
    
    if(!fTextRex.exec(formElements["inputCity"].value)) {
        formElements["inputCity"].style.background = 'rgb(255 0 0 / 50%)';
        formElements["inputCity"].style.transition = "all 0.3s ease";
    }

    if (!postalRex.exec(formElements["postalCode"].value)) {
        formElements["postalCode"].style.background = 'rgb(255 0 0 / 50%)';
        formElements["postalCode"].style.transition = "all 0.3s ease";
    }
    
    if (!formElements["radio-stacked"].value) {
        document.querySelector(".radios-group").style.background = 'rgb(255 0 0 / 50%)';
        document.querySelector(".radios-group").style.transition = "all 0.3s ease";
    }
    
    if (!formElements["inputState"].value) {
        formElements["inputState"].style.background = 'rgb(255 0 0 / 50%)';
        formElements["inputState"].style.transition = "all 0.3s ease";
    }
}