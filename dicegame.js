"use strict";

var shootoutRolls = [rollOne, rollTwo, rollThree, rollFour]
var player = {totalDice: 0,shootoutRolls}
var players = [player, player, player, player, player, player, player, player, player, player]
var roundNumber = 1;
function runGame(){
    if (players.length > 6){
        // loop twice and find the player with the lowest totalDice and remove them each time

    } else if(players.length > 2){
        // remove the player with the lowest totalDice and remove them

    } else{

    }
}

function startRound(){
    players.forEach(rollDiceSet)
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
    let rollOne = getRndNum(1,20);
    player.shootoutRolls[0] = rollOne;
    let rollTwo = getRndNum(1,20);
    shootoutRolls[1] = rollTwo;
    let rollThree = getRndNum(1,20);
    shootoutRolls[2] = rollThree;
    let rollFour = getRndNum(1,20);
    shootoutRolls[3] = rollFour;
}

function getRndNum(min,max){
    return Math.floor(Math.random()* (max - min + 1)) + min;
}