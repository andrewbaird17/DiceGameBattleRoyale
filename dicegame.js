"use strict";

class player {
    constructor(){
        this.totalDice = 0;
    }
}
var player1 = new player;
var player2 = new player;
var player3 = new player;
var player4 = new player;
var player5 = new player;
var player6 = new player;
var player7 = new player;
var player8 = new player;
var player9 = new player;
var player10 = new player;
var players = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10];
var roundNumber = 1;

function startRound(){
    document.getElementById("demoDiv").innerHTML = "Round " + roundNumber;
    document.getElementById("playersRemaining").innerHTML = "Players Remaning " + (players.length);
    
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
        roundNumber++;
    } else{
        for(let i = 0; i < players.length; i++){
            let rollTotal = shootoutRoll();
            console.log(rollTotal);
            players[i].totalDice = parseInt(rollTotal);
        }
        let loser = shootoutCompareResults();
        if(loser === 0 ){
            let winner = 1;
            alert(players[winner] +"Wins!");
        } else if( loser === 1){
            let winner = 0;
            alert(players[winner] +"Wins!");
        } else{
            alert("It's a tie! Roll again to determine the winner!");
        }
    }
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
    for(let i=0; i < players.length - 1;i++){
        if(i === 0){
            j = i;
        }
        else if (i !== players.length - 1){
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