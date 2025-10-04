let wordTyped = "guess" 
let userWord = prompt("Enter a word:")

if (wordTyped === userWord) 
    console.log("Congratulations! you have typed the correct word.\n")
else
    console.log("Wrong! Better luck next time.\n")

console.log(userWord)