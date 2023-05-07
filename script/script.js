const formEl = document.querySelector("#sign-up-form");

const emailEl = document.querySelector("#mail");
const emailErrorEl = document.querySelector(".email-error");

const zipEl = document.querySelector("#zip");
const zipErrorEl = document.querySelector(".zip-error");

const pswEl = document.querySelector("#pass");
const passErrorEl = document.querySelector(".pass-error");
const loweCaseEl = document.querySelector(".lowercase");
const capitalCaseEl = document.querySelector(".capital");
const numberEl = document.querySelector(".number");
const charactersEl = document.querySelector(".characters");

const confirmPasswordEl = document.querySelector("#cpass");
const passConfirmErrorEl = document.querySelector(".pass-confirm-error");

emailEl.addEventListener("input",(e)=>{
    if(emailEl.validity.valid){
        emailErrorEl.textContent = "";
        emailErrorEl.classList.remove("active-error");
    }else if(emailEl.value == ""){
        emailErrorEl.textContent = "";
        emailErrorEl.classList.remove("active-error");
    }else if (!emailEl.validity.valid){
        showError(emailEl,emailErrorEl,"email-error");
    }
})

zipEl.addEventListener("input",(e)=>{
    if(zipEl.validity.valid){
        zipErrorEl.textContent = "";
        zipErrorEl.classList.remove("active-error");
    }else if(zipEl.value == ""){
        zipErrorEl.textContent = "";
        zipErrorEl.classList.remove("active-error");
    }else if(zipEl.validity.patternMismatch){
        zipErrorEl.textContent = "Entered value must be numbers and at least four digit long.";
        zipErrorEl.className = "zip-error active-error";
    }
})

pswEl.addEventListener("input",(e)=>{
    // Check if lowercase letter present in user input
    checkCase(/[a-z]/g,loweCaseEl);

    // Check if uppercase letter present in user input
    checkCase(/[A-Z]/g,capitalCaseEl);

    // Check if number present in user input
    checkCase(/[0-9]/g,numberEl);
    

    // Check if there are at least 8 character in user input 
    if(pswEl.value.length >= 8){
        charactersEl.classList.remove("invalid");
        charactersEl.classList.add("valid");
    }else{
        charactersEl.classList.remove("valid");
        charactersEl.classList.add("invalid");
    } 

    function checkCase (inputMatchWith,caseElement){
        let loweCaseLetter = inputMatchWith;
        if(pswEl.value.match(loweCaseLetter)){
            caseElement.classList.remove("invalid");
            caseElement.classList.add("valid");
        }else{
            caseElement.classList.remove("valid");
            caseElement.classList.add("invalid");
        } 
    }
})

// Check password and confirm password are same
confirmPasswordEl.addEventListener("input",(e)=>{
    if(pswEl.validity.valid){
        if(pswEl.value === confirmPasswordEl.value){
            passConfirmErrorEl.classList.add("valid-confirm-pass");
            passConfirmErrorEl.classList.remove("invalid-confirm-pass");
            passConfirmErrorEl.textContent = "Password Matched";
            passConfirmErrorEl.style.padding = "2px";
        }else if(pswEl.value !== confirmPasswordEl.value){
            passConfirmErrorEl.classList.remove("valid-confirm-pass");
            passConfirmErrorEl.classList.add("invalid-confirm-pass");
            passConfirmErrorEl.textContent = "Password Don't Match";
        }
    }
})


function showError(inputEl,errorEl,className){
    if(inputEl.validity.valueMissing){
        errorEl.textContent = "Please provide your email address.";
    }else if(inputEl.validity.typeMismatch){
        errorEl.textContent = "Entered value needs to be an email address.";
    }
    errorEl.className = `${className} active-error`;
}
