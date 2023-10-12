function makeBubble()
{
    var clutter = "";

for (var i = 1; i <= 65; i++)
{
    var randm = (Math.floor(Math.random()*10)+1)
    clutter += ` <div class="bubble">${randm}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();

var timer = 60;
 function runTimer()
{
    var timerint = setInterval(function()
    {
     if(timer>0)
     {
     timer--;
     document.querySelector('#timerval').textContent = timer;
     }
     else {
        clearInterval(timerint);
        document.querySelector('#pbtm').innerHTML = `<h1>Game Over The Totall Score is:- ${score}</h1>`;
     }
    },1000)
}
runTimer();

var hitrn = 0;
function hitValue()
{
    hitrn = (Math.floor(Math.random()*10)+1);
  document.querySelector('#hitval').textContent = hitrn;
}
hitValue();

var score = 0;
function increaseScore()
{
    score += 10;
    document.querySelector('#score').textContent = score;
}

document.querySelector('#pbtm').addEventListener('click', function(detaile){
var num = Number(detaile.target.textContent);
if(hitrn === num){
    increaseScore();
    makeBubble();
    hitValue();
}
});
