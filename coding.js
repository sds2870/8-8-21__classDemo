let dominoElements = document.querySelectorAll("#Dominoes-list li");
console.log(dominoElements);

function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let firstIndex = 0;
let lastIndex = dominoElements.length - 1;
let randomIndex = getRandomNumber(firstIndex, lastIndex);
let randomDomino = dominoElements[randomIndex]

randomDomino.classList.add("selected");