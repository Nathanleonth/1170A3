let i = 0;
let x = 0;

let firstTime = true;
document.getElementById("heading").style.userSelect = "none";
document.getElementById("heading").addEventListener("click", function cycle(event){
    event.preventDefault;
    const colors = ["white", "black", "red", "green", "yellow","blue"];
    document.getElementById("heading").style.color = colors[i];
    if(i < colors.length - 1){
        i++; 
        x++;
    }else{
        i = 0;
    };

    if(x == 15){
        alert("You enjoy changing colors :)");
    }
});

if('Notification' in window){
    Notification.requestPermission();
    if(Notification.permission == "granted"){
        enabled();
        firstTime = false;
    }
}

function enabled(){
    if(firstTime == true){
        const notification = new Notification('Notification\'s enabled!');
    }
}

function Scheme1(){
    document.querySelector("body").style.backgroundColor = "antiquewhite";
    document.getElementById("heading").style.backgroundColor = "rgb(" + 66 + ", " + 78 + ", " + 117 + ")";
    document.getElementById("nav").style.backgroundColor = "rgb(" + 66 + ", " + 78 + ", " + 117 + ")";;
}

function Scheme2(){
    document.querySelector("body").style.backgroundColor = "pink";
    document.getElementById("heading").style.backgroundColor = "rgb(" + 202 + ", " + 28 + ", " + 255 + ")";
    document.getElementById("nav").style.backgroundColor = "rgb(" + 202 + ", " + 28 + ", " + 255 + ")";;
}

function Scheme3(){
    document.querySelector("body").style.backgroundColor = "white";
    document.getElementById("heading").style.backgroundColor = "rgb(" + 0 + ", " + 0 + ", " + 0 + ")";
    document.getElementById("nav").style.backgroundColor = "rgb(" + 0 + ", " + 0 + ", " + 0 + ")";;
}


const form = document.getElementById("sign-up-form");
// const submitbutton = document.getElementById("submit-button");
const submitbutton = document.getElementById("button");
const message = document.getElementById("message-panel");

submitbutton.addEventListener("click", function(event){
    event.preventDefault();
    event.stopImmediatePropagation();
    const emailInput = document.getElementById("email").value;
    const brushInput = document.getElementById("Morning").value || document.getElementById("Night").value;
    const breakfastInput = document.getElementById("Yes").value || document.getElementById("No").value;
    const foodInput = document.getElementById("improve").value;
    const bdayInput = document.getElementById("bday").value;
    if((!emailInput) || (!brushInput) || (!breakfastInput) || (!foodInput) || (!bdayInput)){
        message.style.backgroundColor = "red";
        message.style.color = "white";
        message.innerHTML = "Please fill in all fields";
    }else if(!emailInput.endsWith("@dal.ca")){
        message.style.backgroundColor = "red";
        message.style.color = "white";
        message.innerHTML = "Email is not a Dal email";
    } else{
        message.style.backgroundColor = "green";
        message.style.color = "white";
        message.innerHTML = "Signed up successfully!";
    }
})



