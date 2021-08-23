const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

window.onload = function() {
    const form = document.querySelector('form');
    const selectStates = document.querySelector('select');
    const cancelbtn =  document.getElementById('cancel-btn');


    states.forEach(estado => {
        const option = document.createElement('option');
        option.value = estado;
        option.textContent = estado;
        selectStates.appendChild(option);
    });

    // Event Listeners


    cancelbtn.addEventListener('click', cleanFields);
    form.addEventListener('submit', checkValid);
    selectStates.addEventListener('change', (event) => {
        event.target.classList.remove('alert-style');
    });
}

// Functions
function checkValid (event) {
    event.preventDefault();
    const form = event.target;
    const formElements = event.target.elements;
    redIfEmpty(formElements);
}

function redIfEmpty(elements) {
    for (const element of elements) {
        if (!element.value && element.type != 'button' && element.type != 'submit') {
            console.log(element);
            element.classList.add('alert-style');
            showAlert()
        } else {
            element.classList.remove('alert-style')
        }
    }
}
function cleanFields(event) {
    const formElements = event.target.parentNode.parentNode.elements;
    const alertContainer = document.querySelector('.alert-container');
    alertContainer.hidden = true;
    for (const element of formElements) {
        if (element.type != 'button' && element.type != 'submit') {
            element.classList.remove('alert-style');
        }
    }

}

function showAlert() {
    const alertContainer = document.querySelector('.alert-container');
    alertContainer.style.transition = 'all 0.3s ease';
    alertContainer.hidden = false;
}
