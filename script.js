let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");

const userScore = document.querySelector("#user-score")
const compScore = document.querySelector("#comp-score")



const roimg = document.querySelector("#rockimg")
const paimg = document.querySelector("#paperimg")
const scimg = document.querySelector("#scissorimg")


const genCompchoice = () => {
    const options = [ "rock", "scissor", "paper" ]
    const randidx = Math.floor(Math.random() * 3)
    return options[ randidx ]
}

const showWinner = (userwin, userchoice, compChoice) => {
    if (userwin) {
        userscore++;
        userScore.innerText = userscore;

        // console.log("you win!")
        msg.innerText = `you win!! your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    }
    else {
        compscore++;
        compScore.innerText = compscore;
        // console.log("you lose!")
        msg.innerText = `you lose.. ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}
const drawgame = (userchoice,compChoice) => {
    console.log("game was draw!!! ,Play again")
    msg.innerText = "game was draw.."
    msg.style.backgroundColor = "#071952";
    if (userchoice === "rock" && compChoice==="rock") {
        roimg.src = imgchange.rowin;
        document.getElementById("rock").style.backgroundColor = "blue";
        document.getElementById("paper").style.backgroundColor = "transparent";
        document.getElementById("scissor").style.backgroundColor = "transparent";
    }
    else if(userchoice === "paper" && compChoice==="paper"){
        paimg.src = imgchange.pawin;
        document.getElementById("rock").style.backgroundColor = "transparent";
        document.getElementById("paper").style.backgroundColor = "blue";
        document.getElementById("scissor").style.backgroundColor = "transparent";
    }
    else{
        scimg.src = imgchange.scwin;
        document.getElementById("rock").style.backgroundColor = "transparent";
        document.getElementById("paper").style.backgroundColor = "transparent";
        document.getElementById("scissor").style.backgroundColor = "blue";
    }
}


const playGame = (userchoice) => {
    console.log("user choice = ", userchoice)

    const compChoice = genCompchoice()
    console.log("comp choice = ", compChoice)

    if (userchoice === compChoice) {
        drawgame(userchoice,compChoice);
    }
    else {
        let userwin = true
        if (userchoice === "rock") {
            if(compChoice==="paper"){
                userwin = false;
                roimg.src = userwin ? imgchange.rowin : imgchange.rolose;
                paimg.src = userwin ? imgchange.palose : imgchange.pawin;
                scimg.src = imgchange.scissor;
                document.getElementById("rock").style.backgroundColor = "red";
                document.getElementById("paper").style.backgroundColor = "green";
                document.getElementById("scissor").style.backgroundColor = "transparent";
            }
            else{
                compChoice==="scissor";
                roimg.src = userwin ? imgchange.rowin : imgchange.rolose;
                scimg.src = userwin ? imgchange.sclose : imgchange.scwin;
                paimg.src = imgchange.paper;
                document.getElementById("rock").style.backgroundColor = "green";
                document.getElementById("scissor").style.backgroundColor = "red";
                document.getElementById("paper").style.backgroundColor = "transparent";
            }
        }
        else if (userchoice === "scissor") {
            if(compChoice==="rock"){
                userwin = false;
                scimg.src = userwin ? imgchange.scwin : imgchange.sclose;
                roimg.src = userwin ? imgchange.rolose : imgchange.rowin;
                paimg.src = imgchange.paper;
                document.getElementById("scissor").style.backgroundColor = "red";
                document.getElementById("rock").style.backgroundColor = "green";
                document.getElementById("paper").style.backgroundColor = "transparent";
            }
            else{
                compChoice==="paper";
                scimg.src = userwin ? imgchange.scwin : imgchange.sclose;
                paimg.src = userwin ? imgchange.palose : imgchange.pawin;
                roimg.src = imgchange.rock;
                document.getElementById("scissor").style.backgroundColor = "green";
                document.getElementById("paper").style.backgroundColor = "red";
                document.getElementById("rock").style.backgroundColor = "transparent";
            }
        }
        else {
            if(compChoice==="scissor"){
                userwin = false;
                paimg.src = userwin ? imgchange.pawin : imgchange.palose;
                scimg.src = userwin ? imgchange.sclose : imgchange.scwin;
                roimg.src = imgchange.rock;
                document.getElementById("paper").style.backgroundColor = "red";
                document.getElementById("scissor").style.backgroundColor = "green";
                document.getElementById("rock").style.backgroundColor = "transparent";
            }
            else{
                compChoice==="paper";
                paimg.src = userwin ? imgchange.pawin : imgchange.palose;
                roimg.src = userwin ? imgchange.rolose : imgchange.rowin;
                scimg.src = imgchange.scissor;
                document.getElementById("paper").style.backgroundColor = "green";
                document.getElementById("rock").style.backgroundColor = "red";
                document.getElementById("scissor").style.backgroundColor = "transparent";
            }
        }
        showWinner(userwin, userchoice, compChoice)
    }
}


var imgchange ={
    rock: "image/rock.jpg", 
    paper: "image/paper.jpg",
    scissor: "image/scissor.jpg",
    rowin: "image/rock_win.jpg",
    rolose:"image/rock_lose.jpg",
    scwin: "image/scissor_win.jpg",
    sclose: "image/scissor_lose.jpg",
    pawin: "image/paper_win.jpg",
    palose: "image/paper_lose.jpg"
}



choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice)
    });
})

const btn = document.getElementById("btn").addEventListener("click",function(){
    userscore = 0;
    compscore = 0;
    userScore.innerText = userscore;
    compScore.innerText = compscore;
    msg.innerText = "play your move";
    roimg.src = imgchange.rock;
    paimg.src = imgchange.paper;
    scimg.src = imgchange.scissor;
    msg.style.backgroundColor = "#6528F7";
    document.getElementById("rock").style.backgroundColor = "transparent";
    document.getElementById("paper").style.backgroundColor = "transparent";
    document.getElementById("scissor").style.backgroundColor = "transparent";
});


