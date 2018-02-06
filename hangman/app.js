const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const words = ['banana', 'strawberry', 'mango', 'peach', ];
let word = [];
let spaces;

function newGame() {
    word = (words[Math.floor(Math.random()*words.length)]).split("");
    spaces = word.length;
    console.log(word);
    console.log(spaces);
}

let buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');
    myButtons.append(letters);

    for (i = 0; i < alphabet.length; i++) {
        letter = document.createElement('li');
        letter.classList.add("button");
        letter.textContent = alphabet[i]; 
        letters.append(letter);
    }
}
buttons()

document.getElementsByClassName("button").onclick = function() {test()};

function test() {
    console.log('Works!')
}