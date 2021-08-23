const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

window.onload = function() {
    const form = document.querySelector('form');
    const selectStates = document.querySelector('select');
    const cancelbtn =  document.getElementById('cancel-btn');
    const radiosbtn = document.querySelector('.radios-group');
    const alertContainer = document.querySelector('.alert-container');
    const formElements = form.elements;

    states.forEach(estado => {
        const option = document.createElement('option');
        option.value = estado;
        option.textContent = estado;
        selectStates.appendChild(option);
    });

    // Event Listeners
    for (const element of formElements) {
        element.addEventListener('change', (event) => {
            event.target.classList.remove('alert-style');
        });
    }
    radiosbtn.addEventListener('change', event => {
        radiosbtn.classList.remove('radios-group-alert');
    })
    cancelbtn.addEventListener('click', cleanFields);
    form.addEventListener('submit', checkValid);
    selectStates.addEventListener('change', (event) => {
        event.target.classList.remove('alert-style');
    });
    
    // Functions
    function checkValid (event) {
        event.preventDefault();

        redIfEmpty(formElements);

    }
    
    function redIfEmpty(elements) {
        if (!elements["radio-stacked"].value) {
            radiosbtn.classList.add('radios-group-alert');
            showAlert();
        } else if (elements["radio-stacked"].value){
            radiosbtn.classList.remove('radios-group-alert');
        }
        for (const element of elements) {
            if (!element.value && element.type != 'button' && element.type != 'submit') {
                element.classList.add('alert-style');
                showAlert()
            } else {
                element.classList.remove('alert-style')
            }
        }
    }
    function cleanFields() {
        form.reset();
        alertContainer.hidden = true;
        radiosbtn.classList.remove('radios-group-alert');
        for (const element of formElements) {
            element.classList.remove('alert-style')
        }
    }
    
    function showAlert() {
        alertContainer.style.transition = 'all 0.3s ease';
        alertContainer.hidden = false;
    }
    
}