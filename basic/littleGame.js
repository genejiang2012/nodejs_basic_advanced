var playerAction = process.argv[process.argv.length - 1];
console.log("The palyer is ", playerAction);

var random = Math.random();

if (random < 1) {
    var computerAction = "rock";
} else if (random > 2) {
    var computerAction = "paper";
} else {
    var computerAction = "scissor";
}

console.log("The computer is %s", computerAction);

if (computerAction == playerAction) {
    console.log("draw");
} else if (
    (computerAction == "rock" && playerAction == "paper") ||
    (computerAction == "paper" && playerAction == "scissor") ||
    (computerAction == "scissor" && playerAction == "rock")
) {
    console.log("The computer is  lost!");
} else {
    console.log("The computer is win!");
}
