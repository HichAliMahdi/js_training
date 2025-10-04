let wordTyped = "guess" 
let userWord = prompt("Enter a word:")

switch (userWord){
    case wordTyped:
        console.log("Congratulations! you have typed the correct word.\n")
        break
    case "idiot":
        console.log("Be polite!")
        break
    case "dumb":
        console.log("Be polite!")
        break
    case "vilain":
        console.log("Be polite!")
        break
    default:
        console.log("You made a typo error.")
}
