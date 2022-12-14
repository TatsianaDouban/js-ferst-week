
    function yourame() {
        let a = document.getElementsByClassName("name-input")[0];
        let b = a.value;
        document.getElementById("name-output").innerHTML = b;
        a.value = "";
    }


function select(sender) {
    sender.classList.add("selecter");
}

let buttonleft = document.querySelector(".left")
let buttonRight = document.querySelector(".right")

function presRight (){
    let img = document.querySelector("img");
    img.src = "assects/img/twogirl.jpg";

}

function presLeft() {
    let img = document.querySelector("img");
    img.src = "assects/img/oneBoy.jpg";
}



