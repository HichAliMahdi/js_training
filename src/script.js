const wordList = ["Cachalot", "Lily", "Minnie", "Various", "Towel"]
let score = 0
let wordToType = prompt("You have this list:\n" + wordList.join(", ") + "\nguess the word that I am thinking:") 
switch (wordToType){
    case wordList[0]:
        console.log("Congratulations! you guessed the correct word\n")
        break
    default:
        if (!wordList.includes(wordToType))
            console.log("The word you typed is not in the list\n")
        else
            console.log("You made a mistake\n")
}