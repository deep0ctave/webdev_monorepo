
let human_points;
let computer_points;
let human_choice;
let computer_choice;

function start() {
    human_points = 0;
    computer_points = 0;
    human_choice = "";
    computer_choice = "";
}

function get_human_choice(human_choice){
    human_choice = String(prompt("What is your choice(rock,paper,scissor) ?"));
    if (human_choice !== "rock" && human_choice !== "paper" && human_choice !== "scissor")
    {
        alert("Invalid Input ! Please try again...");
        console.log(human_choice);
        get_human_choice(human_choice);
    }
    return human_choice;
}

function get_computer_choice(computer_choice){
    let option = Math.floor(Math.random() * 2.9);
    switch(option)
    {
        case 0 :    computer_choice = "rock";
            break;
        case 1 :    computer_choice = "paper";
            break;
        case 2 :    computer_choice = "scissor";
            break;
        default :   alert("Error");      
    }

    return computer_choice;
}

function update_points(){
    if ( human_choice == computer_choice){
        alert("Computer chose "+computer_choice+", It's a Draw");
        alert("human : "+human_points+" "+"computer :"+computer_points)
    }
    else {
        if ( human_choice == "rock" && computer_choice != "paper")
        {
            human_points += 1;
            alert("Computer chose "+computer_choice+", You win");
            alert("human : "+human_points+" "+"computer :"+computer_points)
        }
        else if( computer_choice == "rock" && human_choice != "paper")
        {
            computer_points += 1;
            alert("Computer chose "+computer_choice+", Computer wins");
            alert("human : "+human_points+" "+"computer :"+computer_points)
        }
        else if( human_choice == "scissor" && computer_choice !="rock")
        {
            human_points += 1;
            alert("Computer chose "+computer_choice+", You win");
            alert("human : "+human_points+" "+"computer :"+computer_points)
        }
        else 
        {
            computer_points += 1;
            alert("Computer chose "+computer_choice+", Computer wins");
            alert("human : "+human_points+" "+"computer :"+computer_points)
        }
    }
}

function game(){

    start();

    for (let i = 0; i < 5; i++)
    {
        human_choice = get_human_choice(human_choice);
        computer_choice = get_computer_choice(computer_choice);
        update_points(human_choice,computer_choice,computer_points,human_points);
    }
     
    if (computer_points > human_points)
    {
        alert("Bad Luck, Computer Wins")
    }
    else if (human_points > computer_points)
    {
        alert("Congratulations, You win")
    }
    else
    {
        alert("well, It's a Draw")
    }
}

game();