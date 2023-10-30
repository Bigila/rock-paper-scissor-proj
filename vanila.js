
let score = JSON.parse(localStorage.getItem('score'));

if (score === null) {
  score = {
    win:0,
    lose:0,
    tie:0
    
  };
}


function2();
document.getElementById("showtime").innerHTML = `Scores - win: ${score.win}, lose: ${score.lose}, tie: ${score.tie}` ;
console.log(document.getElementById("showtime").innerHTML);


function computerMove() {
const value = Math.random();
 console.log(value);         
 let moves = '' ;
     
    if(value >= 0 && value < 1/3 ) {
     moves+= 'Rock';
     console.log('R');
        
    } else if (value > 1/3 && value < 1/2 ) 
    {
     moves+= 'Paper';
     console.log('L');
    
    } else if (value > 1/2 && value <= 1 )
    {
      moves+= 'Scissor';
     console.log('M');
    }
   return(moves); 
   }

 
   function playGame(playermove) {

    const computerPick = computerMove();

    let result = '' ;
    if (playermove === 'Rock') {
      if (computerPick === 'Rock') {
        result = 'The Tie' ;
       } else if (computerPick === 'Paper') {
        result = 'You Won';
       } else if (computerPick === 'Scissor') {
        result = 'You Lose';
       }

      
    } else if (playermove === 'Paper') {
          if (computerPick === 'Rock') {
            result = 'You Won';
            console.log('apun win');
          } else if (computerPick === 'Paper') {
            result = 'The Tie';
            console.log('apun tied');
          } else if (computerPick === 'Scissor') {
            result = 'You Lose';
            
          }
    } else if (playermove === 'Scissor') {
      if (computerPick === 'Rock') {
        result = 'You Lose';
       } else if (computerPick === 'Paper') {
        result = 'You Won';
       } else if (computerPick === 'Scissor') {
        result = 'The Tie' ;
       }
    }

    
    if (result === 'You Won') {
      score.win+= 1 ;
    } else if (result === 'You Lose') {
      score.lose+= 1;
    } else if (result === 'The Tie') {
      score.tie+= 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

  
    
    function2();
    
    document.getElementById("showparty").innerHTML =` ${result} `;
    document.getElementById("showbig").innerHTML = ` you pick <img class="timed1" src="images/${playermove}.png "> Computer pick <img class="timed1" src="images/${computerPick}.png "> ` ;
    ; 
   
   }


  function function2() {
    document.getElementById("showtime").innerHTML = `Scores - win: ${score.win}, lose: ${score.lose}, tie: ${score.tie}` 
  }

 function function3() {
  document.getElementById("showparty").innerHTML = '' ;
  document.getElementById("showbig").innerHTML =  '' ;
 }


 
 let isautoPlay = false ;    
 let valueID;
 console.log(valueID);
 function autoPlay() {
  

     if(!isautoPlay) {
      valueID =  setInterval(() => {
        const playermove = computerMove();
        playGame(playermove);
        
       }, 1000);
       isautoPlay = true ;
     } else {
      clearInterval(valueID);
      isautoPlay = false ;
     }

     
    
 
 } 


        

   