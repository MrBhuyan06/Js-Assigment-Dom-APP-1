//  Make the Variables for the initialization the variable

let totalRound=3;
let userScore=0;
let compScore=0;

// Let grap The Score Value
const userScoreVal=document.querySelector("#userScoreVal");
const compScoreVal=document.querySelector("#compScoreVal");

// Lets grap the results Display part 

const resultUserStart=document.querySelector("#result-user-stat");
const resultCompStart=document.querySelector("#result-comp-stat");
const resultFinalStart=document.querySelector("#result-final-stat");

// lets grap the choice it will return us the HtmlCollection 

let choiced=document.querySelectorAll(".choice");




// lets make a function to add the event in each chioce

function choise()
{
    choiced.forEach((ele) =>{
        ele.addEventListener("click",() =>
        {
            gameLogic(ele.firstElementChild.getAttribute("alt"));
        })
    });
}

// Lets Define game logic here
 function gameLogic(userChosed)
 {

    // logic to genrate teh random value for the compu
    const  comptChosed=choiced[Math.floor(Math.random( ) * 3)].firstElementChild.getAttribute("alt");

    // let display the choose by the user and the  comp
    resultUserStart.textContent="User :" + userChosed.toUpperCase();
    resultCompStart.textContent="Computer :" + comptChosed.toUpperCase();


    // Game Logic Start With Here

    if(userChosed === comptChosed)

    {
        userChosed++
        comptChosed++
        return;
    }
    if(
      
      (userChosed === "rock" && comptChosed == "scissors")||
      (userChosed === "paper" && comptChosed == "rock")||
      (userChosed === "scissors" && comptChosed == "paper")
    )
    {
        userScore++;
        if(userScore == totalRound)
        {
            resultFinalStart.textContent="Winner : User";
            userScoreVal.textContent=0
            compScoreVal.textContent=0
            userScore=0
            compScore=0;
            return;
        }
        else
        {
            return (userScoreVal.textContent=userScore)
        }

     }

    if(
        (userChosed === "scissors" && comptChosed == "rock")||
        (userChosed === "rock" && comptChosed == "paper")||
        (userChosed === "paper" && comptChosed == "scissors")
        )
     {
        compScore++;
        if(compScore == totalRound)
        {
            resultFinalStart.textContent="Winner : Computer";
            userScoreVal.textContent=0
            compScoreVal.textContent=0
            userScore=0
            compScore=0;

        }
        else{
            return (compScoreVal.textContent=compScore)
        }
     }

 }



 // Lets call the choise function
 choise();