const curtain = document.getElementById("curtain");
const lamp = document.getElementById("lamp");
const light = document.getElementById("light");
const block = document.getElementById("block");
const element = document.getElementById("element");
let isRabbit = true;

function openCurtain() {
    curtain.classList.add("curtain-open");
}

function changeLight() {
    if (light.classList.contains("hide")) {
        light.classList.remove("hide");
        block.classList.remove("hide");
    }
    else {
        light.classList.add("hide");
        block.classList.add("hide");
    }
}

function changeImages() {
    console.log(element.src);
    if (isRabbit) {
        element.src = "images/Bird.png";
    }
    else {
        element.src = "images/Rabbit.png";
    }
    element.classList.remove("elements-hide");
    isRabbit = !isRabbit;
}

function trick() {
        element.classList.add("elements-hide");
        setTimeout(() => changeImages(), 500);
}

curtain.addEventListener("click", () => openCurtain());
lamp.addEventListener("click", () => changeLight());
element.addEventListener("click", () => trick());