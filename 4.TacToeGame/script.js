let boxes =document.querySelectorAll(".box");
let resetButton=document.querySelector("#reset-button");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let newGameContainer=document.querySelector(".newGame");
let msg=document.querySelector("#msg");

let turnO=true; //playerX, PlayerO
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turnO=true;
    enabelBoxes();
    msgContainer.classList.add("hide");
    newGameContainer.classList.add("hide");
}

let count=0;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box clicked");
        if(turnO)
        {
            box.innerText="O";
            turnO=false;  
        }else{
            box.innerText="x";
            turnO=true; 
        }
        count++;
        box.disabled=true;
        checkWinner();
        
    })
})
console.log(count);

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabelBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congrulations, Winner ${winner}`;
    msgContainer.classList.remove("hide");
    newGameContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        
            let pos1Val=boxes[pattern[0]].innerText;
            let pos2Val=boxes[pattern[1]].innerText;
            let pos3Val=boxes[pattern[2]].innerText;
            // console.dir(pos1Val,pos2Val,pos3Val);

     if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val===pos2Val &&pos2Val ===pos3Val){
            showWinner(pos1Val);
        }
     }

    }
}


resetButton.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);