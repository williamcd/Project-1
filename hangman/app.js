const words = ['Banana', 'Strawberry', 'Mango', 'Peach', ];
let word = [];

function newGame() {
    word = words[Math.floor(Math.random()*words.length)];
    console.log(word);
}