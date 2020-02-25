"use strict";

var shootoutRolls = [rollOne, rollTwo, rollThree, rollFour]
var player = {totalDice,shootoutRolls}
var players = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10]
function runGame(){
    let roundNum = 1;
    if (players.length > 6){

    } else if(players.length > 2){


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
    shootoutRolls[0] = rollOne;
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