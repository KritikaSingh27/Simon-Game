let gameSeq = [];
let userSeq = [];

let btns = ["red","green","yellow","blue"];

let started = false;
let level = 0;

let h = document.querySelector("h2");
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelUp();
    }
    
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },150);
}

function levelUp(){
    userSeq = [];
    level++;
    h.innerText = `Level ${level}`;
 
    let randIdx = Math.floor(Math.random()* 3);
    let randColor = btns[randIdx];
    let randBtn = document.getElementById(randColor);

    gameSeq.push(randColor);
    console.log(gameSeq);

    btnFlash(randBtn);
    
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h.innerHTML = `Tumhara Khel Khatam! <br> <b> Your Score was ${level-1} </b>`;
        h3.innerText = "Press any key to start again";
        
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);

        reset();
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    h3.innerText = "";
}