// accessing the dom by form name and element
const first_name = document.registration.firstName;
const last_name = document.registration.lastName;
const email = document.registration.email;
const phone = document.registration.phone;
const password = document.registration.password;

//displaying errors picked from id of error element in form
const first_name_error = document.getElementById('fName');
const last_name_error = document.getElementById('lName');
const email_error = document.getElementById('email');
const phone_error = document.getElementById('phone');
const password_error = document.getElementById('pwd');


//event listners got from declared constants
first_name.addEventListener('blur', first_name_verify, true);
last_name.addEventListener('blur', last_name_verify, true);
email.addEventListener('blur', email_verify, true);
phone.addEventListener('blur', phone_verify, true);
password.addEventListener('blur', password_verify, true);

//get value for input variables used to access the DOM
//first_nameValue =  first_name.value;
// last_nameValue = last_name.value;
// emailValue = email.value;
// phoneValue = phone.value
// passwordValue = password.value;
// confirm_passwordValue = confirm_password.value;






//validations
function Validate(){
    //first name validation, checking if its empty
    if(first_name.value ===''){
        first_name_error.textContent = 'first name is required';
        first_name.border = '1px solid red';
        first_name.focus();
        return false;
    }
    // last name validation
    if(last_name.value ===''){
        last_name_error.textContent = 'last name is required';
        last_name.border = '1px solid red';
        first_name.focus();
        return false;
    }
    // email validation
    if(email.value ===''){
        email_error.textContent = 'Email is required'; //does not display in browser
        email.border = '1px solid red';
        email.focus();
        return false;
    }
    
    //phone validation
    if(phone.value ===''){
        phone_error.textContent = 'phone no is required'; ////does not display in browser
        phone.border = '1px solid red';
        phone.focus();
        return false;
    }
    //password validation
    if(password.value ===''){
        password_error.textContent = 'Password is required';
        password.border = '1px solid red';
        password.focus();
        return false;
    }
   

}




//regex
const nameRegex = /^.{1,20}[a-zA-Z]+$/; // for names lname & first & last btn (5-50)
const alphaNumeric = /^[0-9a-zA-Z]+$/; // for alpha numeric
const ninRegex = /^[0-9a-zA-Z]{13}$/; // for NIN exactly 13 alphanumric characters
const phoneRegex = /^\d{10}$/; // for phone number
const passwordRegex = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" // Minimum eight characters, at least one letter and one number:
const emailRegex = "^(.+)@(.+)$";//only cares about '@'



//event handlers for correct data

//first name
 function first_name_verify(){
     if(first_name.value !='' && first_name.value.match(nameRegex)){
         first_name.style.border ='1px solid green';
         first_name_error.innerHTML = '';
         return true;
     }
     else{
         first_name.style.border = '1px solid red';
         first_name_error.textContent = 'first name should be between 1-20 characters'
        first_name.focus();
        return false;
        }
 }

 function last_name_verify(){
     if(last_name.value !=''  && last_name.value.match(nameRegex)){
         last_name.style.border = '1px solid green';
         last_name_error.innerHTML = '';
         return true;
     }

     else{
         last_name.style.border = '1px solid red'
         last_name_error.textContent = 'last name should be between 1-20 characters';
         last_name.focus();
         return false;
     }
 }
//email
 function email_verify(){
    if(email.value !='' && email.value.match(emailRegex)){
        email.style.border ='1px solid green';
        email_error.innerHTML = '';
        return true;
    }
    else{
        email.style.border = '1px solid red';
        email_error.textContent = 'email shoud have "@"'
        email.focus();
       return false;
       }
}
//phone
function phone_verify(){
    if(phone.value !='' && phone.value.match(phoneRegex)){
        phone.style.border ='1px solid green';
        phone_error.innerHTML = '';
        return true;
    }
    else{
        phone.style.border = '1px solid red';
        phone_error.textContent = 'number shoud have 10 character'
       phone.focus();
       return false;
       }
}
//password
function password_verify(){
    if(password.value !='' && password.value.match(passwordRegex)){
        password.style.border ='1px solid green';
        password_error.innerHTML = '';
        return true;
    }
    else{
        password.style.border = '1px solid red';
        password_error.textContent = 'Minimum eight characters, at least one letter and one number'
        password.focus();
       return false;
       }
}

 