const displayResult=document.getElementById("result");
const displayModal=document.getElementById("modal");


function appendToDisplay(){
    displayModal.style.display='flex';
    const randomNumber=Math.random();
    const result=flip(randomNumber);
    displayResult.textContent=''+result;
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

