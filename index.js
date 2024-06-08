const displayResult=document.getElementById("input");

function appendToDisplay(){
    const randomNumber=Math.random();
    const result=flip(randomNumber);
    console.log(randomNumber);
    displayResult.value=result;
}

function flip(randomNumber){
    if(randomNumber>0.5){
        return 'Heads'
    }else{
        return 'Tails'
    }
}

