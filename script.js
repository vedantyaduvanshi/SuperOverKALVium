let randomRun = [0, 1, 2, 3, 4, 5, 6, "W"];

let BatButton = document.getElementById("strike");
let ResetButton = document.getElementById("reset");

var ScroreCard = document.getElementsByClassName("ball");

var scoreShowT1 = document.getElementById("score-team1");

var Team1Wickets = document.getElementById("wickets-team1");

var scoreShowT2 = document.getElementById("score-team2");

var Team2Wickets = document.getElementById("wickets-team2");

//Uni Team

let CurrentRun;

//TEAM 1
let TotalRunOfTeam1 = 0;
let Team1ScoreBoard = [];
let CurrentWicketDownTeam1 = 0;

//Team2
let TotalRunOfTeam2 = 0;
let Team2ScoreBoard = [];
let CurrentWicketDownTeam2 = 0;


ResetButton.addEventListener("click", function handleClick() {
  reset()
})


BatButton.addEventListener("click", function handleClick() {
  const randomElement = randomRun[Math.floor(Math.random() * randomRun.length)];
  CurrentRun = randomElement;

  if (CurrentWicketDownTeam1 < 2 && Team1ScoreBoard.length < 6) {
    if (CurrentRun !== "W") {
      TotalRunOfTeam1 = CurrentRun + TotalRunOfTeam1;
      ScroreCard[Team1ScoreBoard.length].textContent = CurrentRun;
      Team1ScoreBoard.push(CurrentRun);
      scoreShowT1.textContent = TotalRunOfTeam1;
    //   console.log(Team1ScoreBoard);
    } else if (CurrentRun === "W") {
      CurrentWicketDownTeam1++;
      ScroreCard[Team1ScoreBoard.length].textContent = CurrentRun;
      Team1ScoreBoard.push("B");
      Team1Wickets.textContent = CurrentWicketDownTeam1;
    //   console.log(Team1ScoreBoard);
    }
  } else if (CurrentWicketDownTeam2 < 2 && Team2ScoreBoard.length < 6) {
    if (CurrentRun !== "W") {
      TotalRunOfTeam2 = CurrentRun + TotalRunOfTeam2;
      ScroreCard[Team2ScoreBoard.length + 6].textContent = CurrentRun;
      Team2ScoreBoard.push(CurrentRun);
      scoreShowT2.textContent = TotalRunOfTeam2;
    //   console.log(Team2ScoreBoard);
    } else if (CurrentRun === "W") {
      CurrentWicketDownTeam2++;
      ScroreCard[Team2ScoreBoard.length + 6].textContent = CurrentRun;
      Team2ScoreBoard.push("B");
      Team2Wickets.textContent = CurrentWicketDownTeam2;
    //   console.log(Team2ScoreBoard);
    }
  }else if(TotalRunOfTeam1 > TotalRunOfTeam2){
     window.alert("India Won")
  }else if(TotalRunOfTeam2 > TotalRunOfTeam1){
    window.alert("Pakistan Won")
  }
});




function reset(){
    //TEAM 1
TotalRunOfTeam1 = 0;
Team1ScoreBoard = [];
CurrentWicketDownTeam1 = 0;

//Team2
TotalRunOfTeam2 = 0;
Team2ScoreBoard = [];
CurrentWicketDownTeam2 = 0;




scoreShowT1.innerText="0"
Team1Wickets.innerText="0"
scoreShowT2.innerText="0"
Team2Wickets.innerText="0"

for (let i = 0; i <= 12; i++) {
    ScroreCard[i].innerText=""
  }

}