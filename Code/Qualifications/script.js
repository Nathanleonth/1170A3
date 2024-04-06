let i = 0;
let x = 0;

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