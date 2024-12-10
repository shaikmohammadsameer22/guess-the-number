let user = 0;
let comp =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#userscore");
const compscorepara = document.querySelector("#compscore");


const gencompchoice = () => {
    const options = ["rock","paper","scissor"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};
const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        user++;
        userscorepara.innerText = user;
        msg.innerText = (`you win,your ${userchoice} beats ${compchoice}`);
        msg.style.backgroundColor = "green";

       }else {
        comp++;
        compscorepara.innerText = comp;
        msg.innerText = (`you lose, ${compchoice} beats your ${userchoice}`);
        msg.style.backgroundColor = "red";

    }
}
 const drawgame = () =>{
    console.log("game was draw");
    msg.innerText = "game was draw.play again!";
    msg.style.backgroundColor = "pink";
    
 };

const playgame =(userchoice) => {
    console.log("user choice = " ,userchoice);
    const compchoice = gencompchoice();
    console.log("computer choice = " ,compchoice);

    if(userchoice === compchoice){
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        }else if (userchoice === "paper"){
            userwin = compchoice === "scissor" ? false : true;
        }else{
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};
 




choices.forEach(choice=>{
    choice.addEventListener("click", ()=>{
        const userchoice = choice.getAttribute("id");
        
        playgame(userchoice);
    }); 
});