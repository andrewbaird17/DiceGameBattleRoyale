"use strict";

const players = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10]
function runGame(){
    for(let i = 1; i <= 6; i++){
        if (i <= 3){

        }
        else if(i==4 || i==5){

        }
        else{

        }
    }
}

function startRound(){

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

}

function shootoutRoll(){

}

function getRndNum(min,max){
    return Math.floor(Math.random()* (max - min + 1)) + min;
}