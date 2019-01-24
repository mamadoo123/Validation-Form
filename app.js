// Form Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zipcode').addEventListener('blur', validateZipcode);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

// validation Functions
function validateName(e){
    const name = e.target.value;
    const re = /^[A-Za-z]{2,10}$/;
    if(!re.test(name)){
        e.target.classList.add('is-invalid')
    }
    else{
        e.target.classList.remove('is-invalid')
    }
}

function validateZipcode(e){
    const zipcode = e.target.value;
    const re = /^[0-9]{5}(-[0-9]{4})?$/; // 5 digits or 5 digits folloed by - and 4 digits
    if(!re.test(zipcode)){
        e.target.classList.add('is-invalid')
    }
    else{
        e.target.classList.remove('is-invalid')
    }
}

function validateEmail(e){
    const email = e.target.value;
    const re = /^([a-zA-Z0-9_\-\.]+)@([A-Za-z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(!re.test(email)){
        e.target.classList.add('is-invalid')
    }
    else{
        e.target.classList.remove('is-invalid')
    }
}

function validatePhone(e){
    const phone = e.target.value;
    const re = /^\(?\d{3}\)?[. -]?\d{3}[. -]?\d{4}$/;
    if(!re.test(phone)){
        e.target.classList.add('is-invalid')
    }
    else{
        e.target.classList.remove('is-invalid')
    }
}