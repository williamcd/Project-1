//variables and alphabet array
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const words = ['BANANA', 'STRAWBERRY', 'MANGO', 'PEACH', ];
let word = [];
let spaces;


//reset game
function newGame() {
    $(".button").css("background-color", "yellow")
    word = [];
    $( ".blank" ).remove();
    word = (words[Math.floor(Math.random()*words.length)]).split("");
    spaces = word.length;
    console.log(word);
    console.log(spaces);
    wordLength = document.getElementById('wordLength')
    for (i = 0; i < word.length; i++) {
        blank = document.createElement('li');
        blank.classList.add("blank")
        blank.textContent = "_ ";
        wordLength.append(blank);
    }
}


//generate buttons and word length
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


//Check for match logic
let lives = 6;
let match = 0;
function test() {
    console.log('Works!')
}
$("li").click(function() {
    match = 0;
    // $( this ).slideUp();
    $(this).css("background-color", "black")
    let text = ($(this).text())
    console.log(text)
    for (i = 0; i < word.length; i++) {
        if (text === word[i]) {
            console.log('Match!')
            match++
        }
    }
    if (match === 0) {
        lives--
        console.log('No match!')
    }
});
