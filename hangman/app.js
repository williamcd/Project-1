//variables and alphabet array
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const words = ['PIKACHU', 'SQUIRTLE', 'CHARMANDER', 'BULBASAUR', 'RATTATA', 'DIGLETT', 'MAGNEMITE', 'CHANSEY', 'DITTO'];
let word = [];
blank = document.createElement('li');

//reset game
function newGame() {
    $(".button").css("background-color", "yellow")
    $(".head").css("background-color", "white")
    $(".body").css("background-color", "white")
    $(".armLeft").css("background-color", "white")
    $(".armRight").css("background-color", "white")
    $(".legLeft").css("background-color", "white")
    $(".legRight").css("background-color", "white")
    word = [];
    totalMatched = 0;
    $(".blank").remove();
    word = (words[Math.floor(Math.random() * words.length)]).split("");
    // spaces = word.length;
    console.log(word);
    console.log(word.length);
    wordLength = document.getElementById('wordLength')
    for (i = 0; i < word.length; i++) {
        blank = document.createElement('li');
        blank.classList.add("blank")
        blank.textContent = "__";
        wordLength.append(blank);
    }
}

//win
function checkWin() {
    if (totalMatched === word.length) {
        alert('You win!')
    }
}

//lose
function lose() {
    alert("you lose!")
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
let totalMatched = 0;
function test() {
    console.log('Works!')
}
$("li").click(function () {
    match = 0;
    // $( this ).slideUp();
    $(this).css("background-color", "black")
    let text = ($(this).text())
    console.log(text)
    for (let i = 0; i < word.length; i++) {
        if (text === word[i]) {
            console.log('Match!')
            let index = i
            console.log(i)
            $(".blank").eq(i).text(text)
            match++
            totalMatched++
            checkWin()
        }
    }
    if (match === 0) {
        lives--
        console.log('No match!')
    }
    if (lives === 5) {
        $(".head").css("background-color", "black")
    } else if (lives === 4) {
        $(".body").css("background-color", "black")
    } else if (lives === 3) {
        $(".armLeft").css("background-color", "black")
    } else if (lives === 2) {
        $(".armRight").css("background-color", "black")
    } else if (lives === 1) {
        $(".legLeft").css("background-color", "black")
    } else if (lives === 0) {
        $(".legRight").css("background-color", "black")
        lose()
    }
});
