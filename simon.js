let gameSeq=[];
let userSeq=[];
let btns=["red","yellow","green", "purple"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
    }
    levelUp();
});

function flashBtn(btn) {
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash')
    },250);

}
function UserflashBtn(btn) {
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash')
    },250);

}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randIdx=Math.floor(Math.random()*4);
    let randclr=btns[randIdx];
    let randbtn=document.querySelector(`.${randclr}`);
    // console.log(randIdx);
    // console.log(randclr);
    // console.log(randbtn);
    gameSeq.push(randclr);
    console.log(gameSeq);

    flashBtn(randbtn);
}
function checkans(idx) {
    // let idx=level-1;
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000)
        }
        // console.log("same value")
    }
    else {
        h2.innerHTML=`Game over ! yourscore was <b>${level}  <b> <br> press any key to start`;
        let bod=document.querySelector("body");
        bod.style.backgroundColor="blue";
        setTimeout(function(){
            bod.style.backgroundColor="white";
        },1000);
        reset();
    }
}
function btnPress(){
    // console.log("button is clicked");
    // console.log(this);
    let btn=this;
    let usercolor= btn.getAttribute("id");
    UserflashBtn(btn);

    userSeq.push(usercolor);
    // console.log(userSeq);

    checkans(userSeq.length-1);

}
let allbtn=document.querySelectorAll(".btn");
for( bt of allbtn){
    bt.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];

}