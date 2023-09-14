/* Play rock, paper, scissor
Keep track of # of games, # of user wins, # of user losses, # user ties
q='quit' --> throw out the results. 
*/
const prompt = require("prompt-sync")();
var numGames = wins = losses = ties = 0;
var options = ['rock', 'paper', 'scissor']

while(true){
    var userChoice = prompt("Enter 'rock', 'paper', 'scissor' or 'quit': ");

    if(userChoice === 'quit'){
        break; 
    }else{
        if (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissor'){
            console.log('Please enter a valid input.');
            continue; 
        }
        var choiceIndex = Math.floor(Math.random() * 3);
        var compChoice = options[choiceIndex]
        if(compChoice === userChoice){
            console.log("It's a tie!");
            ties++; 
            numGames++;
        }else if(compChoice==='rock' && userChoice==='paper' ||
                compChoice==='paper' && userChoice==='scissor' ||
                compChoice==='scissor' && userChoice==='rock'){
            console.log('You won :)')
            wins++;
            numGames++;
        }else{
            console.log('You lost :(');
            losses++;    
            numGames++;
        }
    }

}

console.log("You played " + numGames + " games, had  " + wins + " wins, " + losses + 
" losses, " + ties+" ties. Thank you for playing!");

