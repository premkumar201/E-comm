const form=document.getElementById("form")
const username=document.getElementById("username")
const email=document.getElementById("email")
const password=document.getElementById("password")
const password2=document.getElementById("password2")

function checkRequired(inputs) {
inputs.forEach(input => {
    if(input.value.trim() ===''){
errorInput(input,`${input.id} is required`)
    }
    else{
successInput(input)
    }
});
    
}

function passwordConfirm(password,password2) {
    
  if(password.value.trim().length<8){
        errorInput(password,`${password.id} must be above 8 characters`)  
    return false;
}
//     else if( password2.value.trim().length<8){
//         errorInput(password,`${password.id} must be above 8 characters`)  
//     return false;
// }
else if(password.value!==password2.value){
    errorInput(password2,`${password2.id} must be same`)
    return false;
} 
    else {return true;}
}
function emailCheck(email) {
    let pattern =/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.value.trim().match(pattern)){
        errorInput(email,`${email.id} must be valid`)
    }
}
function usernameCheck(username) {
    if(username.value.length <5){
        errorInput(username,`${username.id} must be 5 above characters`)
        
    }   
}
function errorInput(input,message){
    const formGroup=input.parentElement;
    formGroup.className="form-group error";
    const p=formGroup.querySelector("p");
p.innerHTML=message;
}
function successInput(input) {
    const formGroup=input.parentElement;
    formGroup.className="form-group success";
    const p=formGroup.querySelector("p");
p.innerHTML='';
}
form.addEventListener('submit',(e)=> {
    e.preventDefault();
    checkRequired([username,email,password,password2]);
    usernameCheck(username);
    passwordConfirm(password,password2);
    emailCheck(email);
   

});