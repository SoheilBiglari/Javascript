

















































/*

var first = document.querySelector('input[name="first"]');
first.setCustomValidity('First name can`t be blank!');

first.addEventListener('input', function () {
    // Note: if (this.checkValidity()) won't work
    // as setCustomValidity('with a message') will set
    // the field as invalid.
    if (this.value.trim() === '') {
        this.setCustomValidity('First name can`t be blank!');
    }
    else {
        this.setCustomValidity('');
    }
}, false);


var last = document.querySelector('input[name="last"]')
last.setCustomValidity('Last name can`t be blank');

last.addEventListener('input',function () {
    if(this.value.trim() === ''){
        this.setCustomValidity("Last name can`t be blank");
    }else {
        this.setCustomValidity('');
    }
},false);


var userName =document.querySelector('input[name="username"]');
userName.setCustomValidity('Need your Username!');

userName.addEventListener('input',function () {
    if(this.value.trim() ===''){
        this.setCustomValidity('Need your Username!');
    }else {
        this.setCustomValidity('');
    }
},false);
*/



// bayad to ghesmate email neshon ke age input email eshtebah bashe dorostesh kone
/*
var gmail = document.getElementById('email');
var gmail00 = document.getElementById('gmail00');


var abc = RegExp (/^[a-zA-Z0-9_.+-]+@gmail.com+$/);
var def = strongRegex ("^(?=.*[A-Z])(?=.*[0-9])(?=.{5,})");


var RegExp = function () {
    if (gmail.value.match(abc)) {
        gmail00.innerHTML = "ok";
    } else {
        gmail00.innerHTML = "Need your Email!";
        gmail00.style.color
    }
};
*/



//password validation

   
   
   
   
   
   
   
   
   
   
   

// When the user clicks on the password field, show the message box


function tc(a){
    var x = document.querySelector(a).value;
    return x;
}
function msg(a){
    var x = document.querySelector(".emsg").innerHTML=a;
    return x;
}
function msgb(a){
    var x = document.querySelector(".emsgb").innerHTML=a;
    return x;
}
function size(a){
    var x = document.querySelector(a).value.length;
    return x;
}
// show hide function
//var idhide=document.getElementById("singup");
function singu() {
    var hide=document.querySelector(".form-login");

    if (hide.classList[1]=="hidden") {
        hide.classList.toggle("visible");
    }else {
        hide.classList.toggle("hidden");
    }
    console.log(hide.classList);
    return hide;
}
// Sing up
function singup(){
    if (tc(".fname")==null || tc(".fname")=="") {
        msgb("Please Enter First name");
        return false;
    }
    if (tc(".lname")==null || tc(".lname")=="") {
        msgb("Please Enter Last name");
        return false;
    }
    if (tc(".uname")==null || tc(".uname")==""){
        msgb("Please Enter username");
        return false;
    }
    if (tc(".email")==null || tc(".email")=="") {
        msgb("Please Enter Email");
        return false;
    }
    if (tc(".pwd")==null || tc(".pwd")=="") {
        msgb("Please Enter Password");
        return false;
    }
    if (tc(".pwd")!=tc(".conpwd")) {
        msgb("Password Miss match");
        return false;
    }
    if (size(".pwd") <= 10) {
        msgb("Minimum Password length 10");
        return false;
    }
}
