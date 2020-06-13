const playBtn = document.querySelector(".intro button");
const introScreen = document.querySelector(".intro");
const match = document.querySelector(".match");
const playerHand = document.querySelector(".player-hand");
const computerHand = document.querySelector(".computer-hand");
const totalturns = document.getElementById("enter-text");
const form = document.getElementById("form");
const round = document.getElementById("round");
const display = document.getElementById("display");
var result = document.querySelector("result");
var Round = round.innerHTML;

playBtn.addEventListener("click", function(){
        introScreen.classList.add("fadeOut");
        form.style.opacity = "1";
        });

form.addEventListener("submit", function(e){
    const turns = totalturns.value;
    form.style.opacity = "0";
    form.classList.add("fadeOut");
    match.classList.add("fadeIn");
    e.preventDefault();
    playgame();
    Round++;
});

const options = document.querySelectorAll(".options button");
const computerOptions = ["Rock", "Paper", "Scissors"];
var pScore = 0;
var cScore = 0; 
var i = 0;

function playgame (){
    options.forEach(function(option){
        option.addEventListener("click", function(){
            const turns = totalturns.value;
                if(i < turns - 1){
                    const computerNumber = Math.floor(Math.random() * 3);
                    const computerChoice = computerOptions[computerNumber];
                    const playerChoice = this.innerHTML;
                    round.textContent = Round++;

                    playerHand.style.animation = "shakePlayer 2s linear";
                    computerHand.style.animation = "shakeComputer 2s linear";

                    playerHand.src = `./assets/rock.png`
                    computerHand.src = `./assets/rock.png`

                    setTimeout(function(){
                    removeAnimation();
                    playerHand.src = `./assets/${playerChoice}.png`
                    computerHand.src = `./assets/${computerChoice}.png` 

                    values = compareHands(playerChoice, computerChoice);
                
                    document.querySelector(".player-score p").innerHTML = values.PScore;
                    document.querySelector(".computer-score p").innerHTML = values.CScore;
                    document.querySelector(".winner").innerHTML = values.Winner;
                    },2000);
                  }

                  else{
                    const computerNumber = Math.floor(Math.random() * 3);
                    const computerChoice = computerOptions[computerNumber];
                    const playerChoice = this.innerHTML;
                    round.textContent = Round++;

                    playerHand.style.animation = "shakePlayer 2s linear";
                    computerHand.style.animation = "shakeComputer 2s linear";

                    playerHand.src = `./assets/rock.png`
                    computerHand.src = `./assets/rock.png`

                    setTimeout(function(){
                    removeAnimation();
                    playerHand.src = `./assets/${playerChoice}.png`
                    computerHand.src = `./assets/${computerChoice}.png` 

                    values = compareHands(playerChoice, computerChoice);
                
                    document.querySelector(".player-score p").innerHTML = values.PScore;
                    document.querySelector(".computer-score p").innerHTML = values.CScore;
                    document.querySelector(".winner").innerHTML = values.Winner;
                    },2000);
                    setTimeout(function(){
                    match.style.opacity = "0";
                    display.classList.remove("nothing");
                    display.classList.add("show");

                    if(pScore > cScore){
                        display.textContent = "Player Wins!!";
                    }
                    else if(pScore < cScore){
                        display.textContent = "Computer Wins!!";
                    }
                    else{
                        display.textContent =  "It is a Tie!!";
                    }
                    },3000);
                    
                  }

                });
            });
      }
        

function removeAnimation(){
    i++;
    playerHand.style.animation = "";
    computerHand.style.animation = "";
}

function compareHands(playerChoice, computerChoice){
    if (playerChoice === computerChoice) {
            winner =  "It is a tie";
            return  {
                Winner : winner,
                PScore : pScore,
                CScore : cScore
            };
        }       
    else if (playerChoice === "Rock") {
        if (computerChoice == "Scissors") {
            winner =  "Player Wins";
                return {
                    Winner : winner,
                    PScore : ++pScore,
                    CScore : cScore
                };
        } else {
            winner =  "Computer Wins";
                return {
                    Winner : winner,
                    PScore : pScore,
                    CScore : ++cScore
                };
        }
    }
    else if (playerChoice === "Paper") {
        if (computerChoice == "Scissors") {
            winner =  "Computer Wins";
                return {
                    Winner : winner,
                    PScore : pScore,
                    CScore : ++cScore
                };
        } else {
            winner =  "Player Wins";
                return {
                    Winner : winner,
                    PScore : ++pScore,
                    CScore : cScore
                };
            }
        }
    else if (playerChoice === "Scissors") {
        if (computerChoice == "Rock") {
            winner =  "Computer Wins";
                return {
                    Winner : winner,
                    PScore : pScore,
                    CScore : ++cScore
                };
        } else {
            winner =  "Player Wins";
                return{
                    PScore : ++pScore,
                    Winner : winner,
                    CScore : cScore
                };
            }
        }
    }