const formEl = document.querySelector("#sign-up-form");

const emailEl = document.querySelector("#mail");
const emailErrorEl = document.querySelector(".email-error");

const zipEl = document.querySelector("#zip");
const zipErrorEl = document.querySelector(".zip-error");


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

function showError(inputEl,errorEl,className){
    if(inputEl.validity.valueMissing){
        errorEl.textContent = "Please provide your email address.";
    }else if(inputEl.validity.typeMismatch){
        errorEl.textContent = "Entered value needs to be an email address.";
    }
    errorEl.className = `${className} active-error`;
}
