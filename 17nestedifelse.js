// nested if else

// winning number 19

// 19 your guess is right

// 18 too low age

// 20 too high age

let winningNumber = 19;

let userGuess = +prompt("Guess exact age/number");

// agar ap ne userGuess ko if main pehle declare kia hua hai tu ap us main string to integer karne k liye changes karo gaye

if(userGuess === winningNumber) {
    console.log("your guess is right");
} else {
    if(userGuess < winningNumber) {
    console.log("18 too low age");
} else {
    if(userGuess > winningNumber) {
        console.log("20 too high age");
    }
}
}

