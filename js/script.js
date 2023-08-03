'use strict';

// Element
const compScoreEl=document.getElementById('computer-score');

const userScoreEl=document.getElementById('user-score');

const userChoiceEl=document.getElementById('user-choice');
const compChoiceEl=document.getElementById('computer-choice');
const resultEl=document.getElementById('result');

// Variables
let [compScore,userScore]=[0,0]

const choices=['rock','paper','scissor'];

const gameRules={
  'rock':{
    'rock':'draw',
    'scissor':'win',
    'paper':'lose'
  },
  'scissor':{
    'rock':'lose',
    'scissor':'draw',
    'paper':'win'
  },
  'paper':{
    'rock':'win',
    'scissor':'lose',
    'paper':'draw'
  }
};

// function

const showResult=function(result,bgColor,textColor){
  resultEl.innerText=result;
  resultEl.style.cssText=`background-color:${bgColor}; color:${textColor}`;
}

const game=function(input){
  let randomChoice=Math.floor(Math.random()*3);

  let compChoice=choices[randomChoice];
  let userChoice=input;

  compChoiceEl.innerHTML=`Computer choose <span>${compChoice}</span>`;

  userChoiceEl.innerHTML=`You choose <span>${input}</span>`;

  switch(gameRules[userChoice][compChoice]){
    case 'win':
      showResult('you won','#cefdce','#689f38');
      userScore++;
      break;
    case 'lose':
      showResult('you lost','#ffdde0','#d32f2f');
      compScore++;
      break;
    case 'draw':
      showResult('Game Draw','#e5e5e5','#808080');
      break;
  }

  userScoreEl.innerText=userScore;
  compScoreEl.innerText=compScore;
};
