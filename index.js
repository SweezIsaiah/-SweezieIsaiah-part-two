let name = prompt("Welcome to GC Mini-Golf! What is your name?");
let holes = prompt("Hi, " + name + "! Would you like to play 3 or 6 holes?");
let count = 0

if (holes == "3") {
    count = 3
} else {
    count = 6
}

let putts = 0

for (let i = 0; i < count; i++) {
    let input = prompt("How many putts for hole " + (i + 1) + "? (par: 3)");
  
  putts += parseInt(input);
}

let message = "";

if (3 * count > putts) {
    message = "Great job, " + name + "! Your total par was " + (putts - (3 * count)) + ".";
} else if (3 * count < putts) {
    message = "Nice try, " + name + "... Your total par was " + (putts - (3 * count)) + ".";
} else {
    message = "Good game, " + name + ". Your total par was 0.";
}

console.log(message);