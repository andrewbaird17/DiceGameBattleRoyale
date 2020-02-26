"use strict";

class Player {
    constructor(name){
        this.totalDice = 0;
        this.name = name;
    }
}
var player1 = new Player("Player 1");
var player2 = new Player("Player 2");
var player3 = new Player("Player 3");
var player4 = new Player("Player 4");
var player5 = new Player("Player 5");
var player6 = new Player("Player 6");
var player7 = new Player("Player 7");
var player8 = new Player("Player 8");
var player9 = new Player("Player 9");
var player10 = new Player("Player 10");
var players = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10];
var roundNumber = 1;

document.getElementById("playersRemaining").innerHTML = "Players Remaining: " + displayPlayers();
document.getElementById("rules1").innerHTML = "10 players roll a set of dice in a 6-round game. At the end of a player's turn, all of their rolls from their set of die is totaled up. In the first three rounds, the lowest two players each round are removed from the game (4 left). In rounds 4 and 5, the lowest player is removed from the game (2 left). In the 6th and final round, a shootout occurs between the final two players.";
document.getElementById("rules2").innerHTML = "Set of Dice: 4-sided, 6-sided, 8-sided, 10-sided, 12-sided, 20-sided."; 
document.getElementById("rules3").innerHTML =" Dice Shootout Rules: Each player rolls a d20 four times, recording each result, and then rolls a d4 to determine which of the four d20 results they get to use. The higher result is the winner of the Battle Royal. In the event of a tie, repeat this process.";


function startRound(){
    document.getElementById("roundNumber").innerHTML = "Round " + roundNumber + " Results";
    if (players.length !== 1){
        document.getElementById("playersRemaining").innerHTML = "Players Remaining: " + displayPlayers(); 
    }
    document.getElementById("tiebreaker").innerHTML = "";
    
    if (players.length >= 6){
        // loop twice and find the player with the lowest totalDice and remove them each time
        for(let i = 0; i < players.length; i++){
            let rollTotal = rollDiceSet();
            console.log(rollTotal);
            players[i].totalDice = parseInt(rollTotal); 
        }
        let indexNum = compareResults();
        removePlayer(indexNum);
        let indexNum2 = compareResults();
        removePlayer(indexNum2);
        document.getElementById("playersRemaining").innerHTML = "Players Remaining: " + displayPlayers();
        roundNumber++;
    } else if(players.length > 2){
        // remove the player with the lowest totalDice and remove them
        for(let i = 0; i < players.length; i++){
            let rollTotal = rollDiceSet();
            console.log(rollTotal);
            players[i].totalDice = parseInt(rollTotal);
        }
        let indexNum = compareResults();
        removePlayer(indexNum);
        document.getElementById("playersRemaining").innerHTML = "Players Remaining: " + displayPlayers();
        roundNumber++;
    } else if(players.length === 2){
        for(let i = 0; i < players.length; i++){
            let rollTotal = shootoutRoll();
            console.log(rollTotal);
            players[i].totalDice = parseInt(rollTotal);
        }
        let loser = shootoutCompareResults();
        if(loser === "tie" ){
            document.getElementById("tiebreaker").innerHTML = "It's a tie! Start a Tie-Breaker Round to determine the winner!";
            roundNumber++;
        } else{
            removePlayer(loser);
            document.getElementById("playersRemaining").innerHTML = displayPlayers() + " Wins!";
        }
    }
}

function displayPlayers(){
    let playersLeft = "|| ";
    for(let i = 0; i < players.length;i++){
        playersLeft += players[i].name + " Rolled "+ players[i].totalDice + " || ";
    }
    return playersLeft;
}

function shootoutCompareResults(){
    let j;
    for (let i = 0; i < 2; i++){
        if(i === 0){
            j = i;
        } else if (i === 1){
            if(players[i].totalDice < players[j].totalDice){
                j = i;
            } else if(players[i].totalDice === players[j].totalDice){
                j = "tie";
            }
        }
    }
    return j;
}

function compareResults(){
    let j;
    for(let i=0; i < players.length;i++){
        if(i === 0){
            j = i;
        } else {
            if(players[i].totalDice < players[j].totalDice){
                j = i;
            }
        }
    }
    return j;
}

function removePlayer(indexNum){
    players.splice(indexNum,1);
}
function rollDiceSet(){
    let d4 = getRndNum(1,4);
    let d6 = getRndNum(1,6);
    let d8 = getRndNum(1,8);
    let d10 = getRndNum(1,10);
    let d12 = getRndNum(1,12);
    let d20 = getRndNum(1,20);
    let totalDice = addDice(d4,d6,d8,d10,d12,d20);
    return totalDice;
}

function addDice(d4,d6,d8,d10,d12,d20){
    var result;
    result = d4 + d6 + d8 + d10 + d12 + d20;
    return result 
}

function shootoutRoll(){
    var roll = 0;
    var shootoutRolls = [roll, roll, roll, roll];
    let rollOne = getRndNum(1,20);
    shootoutRolls[0] = rollOne;
    let rollTwo = getRndNum(1,20);
    shootoutRolls[1] = rollTwo;
    let rollThree = getRndNum(1,20);
    shootoutRolls[2] = rollThree;
    let rollFour = getRndNum(1,20);
    shootoutRolls[3] = rollFour;
    let num = getRndNum(0,3);
    let totalDice = shootoutRolls[num];
    return totalDice;
}

function getRndNum(min,max){
    return Math.floor(Math.random()* (max - min + 1)) + min;
}