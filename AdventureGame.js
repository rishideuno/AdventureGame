/*
Adventure Game
This game will be a text-based game where the player will be able
to make choices that affect the outcome of the game.
The player will be able to choose their own path and the story will change
based on their decisions.
*/

// Display the game title
console.log("Welcome to the Adventure Game");

// Add a welcome message
console.log("Prepare yourself for an epic journey!");

const readline= require("readline-sync");

let playerName = "";

// Get Player Name using readline-sync

playerName = readline.question("Enter your player name: ");
console.log("Welcome, " + playerName + "!");

// 1. Player health (starting at 100)
let playerHealth = 100;

// 2. Player gold (starting at 20)
let playerGold = 20;

// 3. Current location (starting at "village")
let currentLocation = "village";

// 4. Game running state
let gameRunning = true;

// 5. Empty inventory (array)
let inventory = [];

console.log(`Your starting gold is: ${playerGold}`);
