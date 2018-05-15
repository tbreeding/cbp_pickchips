const SCORE = document.getElementById("scoreVal");
const BOARD = document.querySelector(".container");
let CHIPS;

let currentScore = 0;

const COLORS = ["red", "yellow", "green", "orange"]

let numberOfChips = Math.floor(Math.random() * (10 - 5 + 1)) + 5

const updateScore = (score) => {
    SCORE.innerText = score;
}

function Chip() {

    this.value = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    this.bgColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.height_width = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    this.top = Math.floor(Math.random() * (500 - (this.height_width + 5))) + 'px';
    this.left = Math.floor(Math.random() * (500 - (this.height_width + 5))) + 'px';

    this.handleChipClick = (e) => {
        currentScore += this.value;
        updateScore(currentScore);
        e.target.style.display = "none";
    }
    this.createChipDiv = function() {
        let chip = ` <div 
            style="background-color: ${this.bgColor}; 
            height: ${this.height_width + 'px'}; 
            width: ${this.height_width + 'px'}; 
            top: ${this.top}; 
            left: ${this.left}" 
            class="chip">${this.value}</div>`;

            let newElem = document.createElement("div");
            newElem.innerHTML = chip;
            chip = newElem.children[0];
            chip.addEventListener("click", this.handleChipClick.bind(this) , false);

        BOARD.appendChild(chip);
    }
    this.createChipDiv();
    
}

function createChips() {
    updateScore(currentScore);
    for(let i = 0; i <= numberOfChips; i++) {
        let newChip = new Chip;
    }
}

createChips();
 