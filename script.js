let computerscore = 0;
let playerscore = 0;

function getcomputerchoice() 
{
    let randomnumber = new Date().getTime() % 3;
    let computerchoice;
    switch(randomnumber) {
        case 0:
            computerchoice = "rock";
            break;
        case 1:
            computerchoice = "paper";
            break;
        case 2:
            computerchoice = "scissors"
            break;
    }
    return computerchoice;
}

function playround(computerchoice, personchoice) 
{
    if ((computerchoice == "scissors" && personchoice == "rock") ||
            (computerchoice == "rock" && personchoice == "paper") ||
            (computerchoice == "paper" && personchoice == "scissors")
            )
        {
            playerscore++;
            return "You Win!";
        }
    else if ((computerchoice == "paper" && personchoice == "rock") ||
            (computerchoice == "rock" && personchoice == "scissors") ||
            (computerchoice == "scissors" && personchoice == "paper")
            )
        {
            computerscore++;
            return "Computer Wins!";
        }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const div = document.querySelector('.buttons')
const body = document.querySelector('body');
const cscorereveal = document.createElement('p');
const pscorereveal = document.createElement('p');
pscorereveal.textContent = "Player Wins: 0";
cscorereveal.textContent = "Computer Wins: 0";
div.appendChild(cscorereveal);
div.appendChild(pscorereveal);
pscorereveal.style.cssText = 'margin-bottom: 30px';


function updatescore(computerscore, playerscore) {
    pscorereveal.textContent = "Player Wins: " + playerscore;
    cscorereveal.textContent = "Computer Wins: " + computerscore;
}
rock.addEventListener('click', function() 
{
    const personchoice = "rock";
    let computerchoice = getcomputerchoice();
    const result = playround(computerchoice, personchoice);
    const displayResult = document.createElement('p')
    displayResult.textContent = result;
    updatescore(computerscore, playerscore);
    div.appendChild(displayResult);
    return;
})

paper.addEventListener('click', function() 
{
    const personchoice = "paper";
    let computerchoice = getcomputerchoice();
    const result = playround(computerchoice, personchoice);
    const displayResult = document.createElement('p')
    displayResult.textContent = result;
    updatescore(computerscore, playerscore);
    div.appendChild(displayResult);
    return;
})

scissors.addEventListener('click', function() 
{
    const personchoice = "scissors";
    let computerchoice = getcomputerchoice();
    const result = playround(computerchoice, personchoice);
    const displayResult = document.createElement('p')
    displayResult.textContent = result;
    updatescore(computerscore, playerscore);
    div.appendChild(displayResult);
    return;
})
