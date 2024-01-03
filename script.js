
function getcomputerchoice() {
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

function getpersonchoice() {
    let pc = prompt("Choose rock, paper, or scissors!");
    let personchoice = pc.toLowerCase();
    if (personchoice == "rock" || personchoice == "paper" || personchoice == "scissors") {
        return personchoice;
    }
    else {
        getpersonchoice();
    }
}


let cscore = 0;
let pscore = 0;


while(cscore < 3 && pscore < 3) {
    let computerchoice = getcomputerchoice();
    let personchoice = getpersonchoice();
    if (computerchoice == personchoice)
        {
            
        }
    else if (computerchoice == "scissors" && personchoice == "rock")
        {
            pscore++;
            console.log("p beat c");
        }
    else if (computerchoice == "scissors" && personchoice == "paper")
        {
            cscore++;
            console.log("c beat p");
        }
    else if (computerchoice == "rock" && personchoice == "paper")
        {
            pscore++;
            console.log("p beat c");

        }
    else if (computerchoice == "rock" && personchoice == "scissors")
        {
            cscore++;
            console.log("c beat p");
        }
    else if (computerchoice == "paper" && personchoice == "scissors")
        {
            pscore++;
            console.log("p beat c");
        }
    else if (computerchoice == "paper" && personchoice == "rock")
        {
            cscore++;
            console.log("c beat p");
        }
    
}


if (cscore > pscore) {
    console.log("computerwins");
}
else {
    console.log("humanwins");
}

