let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let player = document.getElementById("player-choice");
let computer = document.getElementById("computer-choice");
let winner = document.getElementById("winner");
let play_again = document.getElementById("play");
let computer_choice = Math.floor(Math.random()*3);


rock.addEventListener("click",()=>{
    computer_choice = Math.ceil(Math.random()*3);
    player.innerHTML = "Player : ✊"; 
    switch (computer_choice){

        case 1:
            computer.innerHTML = "Computer : ✊";
            winner.innerHTML = "Winner: It's a tie";
            break;

        case 2:
            computer.innerHTML = "Computer : 🖐";
            winner.innerHTML = "Winner : Computer Wins!";
            break;

        case 3:
            computer.innerHTML = "Computer: ✌";
            winner.innerHTML = "Winner: Player Wins!";
            break;
        
    }
})

paper.addEventListener("click",()=>{
    player.innerHTML = "Player : 🖐";
    computer_choice = Math.ceil(Math.random()*3); 

    switch (computer_choice){

        case 1:
            computer.innerHTML = "Computer: ✊";
            winner.innerHTML = "Winner : Player Wins!";
            break;

        case 2:
            computer.innerHTML = "Computer : 🖐";
            winner.innerHTML = "Winner : Tie!";
            break;

        case 3:
            computer.innerHTML = "Computer : ✌";
            winner.innerHTML = "Winner : Computer Wins!";
            break;
        
    }
})

scissors.addEventListener("click",()=>{
    player.innerHTML = "Player : ✌"; 
    computer_choice = Math.ceil(Math.random()*3);
    switch (computer_choice){

        case 1:
            computer.innerHTML = "Computer : ✊";
            winner.innerHTML = "Winner : Computer Wins!";
            break;

        case 2:
            computer.innerHTML = "Computer : 🖐";
            winner.innerHTML = "Winner : Player Wins!";
            break;

        case 3:
            computer.innerHTML = "Computer : ✌";
            winner.innerHTML = "Winner : It's a tie";
            break;
        
    }
})
