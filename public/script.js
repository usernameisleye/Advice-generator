const generateAdviceBtn = document.querySelector('button');
const advice = document.querySelector('.advice');
const adviceNum = document.querySelector('header span')

generateAdviceBtn.addEventListener('click', generateAdvice);

function generateAdvice(){
    fetch('https://api.adviceslip.com/advice').then(res => res.json()).then(newAdvice =>{
        advice.innerHTML = newAdvice.slip.advice;
        adviceNum.innerHTML = newAdvice.slip.id;
    })
}

0px 0px 18px rgba(255, 255, 255, 0.3)
0px 0px 18px hsl(150, 100%, 66%)
