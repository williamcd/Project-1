const words = ['Banana', 'Strawberry', 'Mango', 'Peach', ];
let word = [];
let spaces;

function newGame() {
    word = (words[Math.floor(Math.random()*words.length)]).split("");
    spaces = word.length;
    console.log(word);
    console.log(spaces);
}
