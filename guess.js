const number=(Math.round(Math.random()*20)+1);
let score=20;
let highscore=0;

document.querySelector(".box").textContent='?';
document.querySelector("#check").addEventListener("click",function(){
   var guess=Number( document.querySelector(".text").value);
  //console.log(guess);
  if(!guess){
    (document.querySelector(".message").textContent="no number!");
    (document.body.style.backgroundColor="darkblue");
  }
  else if(number==guess){
    var audio = new Audio('');
    
    audio.play();
    (document.querySelector(".message").textContent="correct number");
    (document.querySelector("body").style.backgroundColor="green");
    document.querySelector(".box").textContent=number;
    if(score>highscore){
      highscore=score;
      (document.querySelector(".highScore").textContent=`Highscore is ${highscore}`);
    }
    
    score ++;
    (document.querySelector(".crtScore").textContent=`score is ${score}`);

    
}
else if(number>guess){
  if(score>1){
    var audio = new Audio('');
    
    audio.play();
  
    (document.querySelector(".message").textContent="number is high");
    
    score--;
    (document.querySelector(".crtscore").textContent= `Score is ${score}` );
    (document.body.style.backgroundColor="red");
}
else{
  (document.querySelector(".message").textContent="you lost the game");
  (document.body.style.backgroundColor="purple");
  var audio= new Audio("");
  audio.play();
}

}
else {
  var audio = new Audio('');
    
    audio.play();
    (document.querySelector(".message").textContent=" number is low");
    score--;
    (document.querySelector(".crtscore").textContent= `score is ${score}`);
    (document.body.style.backgroundColor="red");
}

});
document.querySelector(".again").addEventListener("click",function(){
 const number=(Math.round(Math.random()*20)+1);
 score=20;


(document.querySelector(".message").textContent="start guessing------");
(document.querySelector(".box").textContent="?");
(document.querySelector(".crtscore").textContent="score is 20");
(document.querySelector("body").style.backgroundColor="black");


   

});