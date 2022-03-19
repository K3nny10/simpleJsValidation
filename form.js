// accessing the dom by form name and element
const first_name = document.registration.firstName
const last_name = document.registration.lastName




//displaying errors picked from id of error element in form
const first_name_error = document.getElementById('fName')
const last_name_error = document.getElementById('lName')




//event listners got from declared constants
first_name.addEventListener('blur', first_name_verify, true)
last_name.addEventListener('blur', last_name_verify, true)










//validations
function Validate(){
    //first name validation, checking if its empty
    if(first_name.value ===''){
        first_name_error.textContent = 'first name is required';
        first_name.border = '1px solid red';
        first_name.focus();
        return false;
    }

    if(last_name.value ===''){
        last_name_error.textContent = 'last name is required';
        last_name.border = '1px solid red';
        first_name.focus();
        return false
    }
}




//regex
const nameRegex = /^.{1,20}[a-zA-Z]+$/; // for names lname & first & last btn (5-50)
const alphaNumeric = /^[0-9a-zA-Z]+$/; // for alpha numeric
const ninRegex = /^[0-9a-zA-Z]{13}$/; // for NIN exactly 13 alphanumric characters
const phoneRegex = /^\d{10}$/; // for phone number



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
         last_name.focus;
         return false;
     }
 }