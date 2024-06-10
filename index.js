const displayResult=document.getElementById("result");
const displayModal=document.getElementById("modal");
const displayHeads=document.getElementById("head");
const displayTails=document.getElementById("tails");



const score=JSON.parse(localStorage.getItem('score'))||{
    heads:0,
    tails:0
};

displayHeads.textContent=score.heads;
displayTails.textContent=score.tails;

function appendToDisplay(){
    displayModal.style.display='flex';
    const randomNumber=Math.random();
    const result=flip(randomNumber);
    displayResult.textContent=''+result;
    if(result==='Heads'){
        score.heads++
    }else score.tails++;
    
    displayHeads.textContent=score.heads;
    displayTails.textContent=score.tails;
    localStorage.setItem('score',JSON.stringify(score));
    
}

function flip(randomNumber){
    if(randomNumber>0.5){
        return 'Heads'
    }else{
        return 'Tails'
    }
}

function hideModal(){
    displayModal.style.display='none';
}

function reset(){
    score.heads=0;
    score.tails=0;
    displayHeads.textContent=score.heads;
    displayTails.textContent=score.tails;
}