// I will be using querySelector to return the element that mataches a css selector
// using constant to declare variables su to there is no mutuation will be taken.
//turn status and reset button
const actionDiv = document.querySelector('.container-action');
// reset button 
const resetDiv = document.querySelector('.restart');
//individual 9 boxes 
const boxDivs = document.querySelectorAll('.game-box')



let gameLetsAGo = true;
let marioTurn = true;

// game constants (here i will try to manipulate text to image)
const xRepresent = 'Mario';
const oRepresent = 'Bowser';

// I want to use a if conditional ut its not working, used mdn, got terinary operator to work intead with the property
// const characterLogo(logo)=> {
//     if (logo === 'mariopic')
//     return xRepresent;

// }else{
//     return oRepresent;
// };
// used a ternary operator
function characterLogo (logo) {
// if logo is mario it will represent x othwrwise it will o to represent broswer
 return (logo === 'mariopic' ? xRepresent : oRepresent);
}

const givenWinner = (logo) => {
  gameLetsAGo = false;
  if (logo === 'mariopic') {
    actionDiv.innerHTML = `${characterLogo(logo)} is the winner !`;
  } else {
    actionDiv.innerHTML = `${characterLogo(logo)} is the winner !`;
  }
};

//created a function to have update of game 
// using a constant variable due to that once moved made it is immutable. (Each turn). using 9 variables to see if there is mario pic or bowser pic in each gamebox.
//using [2] lets console know if its a mario pic or bowser pic (xRpresent, oRepresent)
const updateGamePlay = () => {
    const topFirst = boxDivs[0].classList[2];
    const topSecond = boxDivs[1].classList[2];
    const topThird = boxDivs[2].classList[2];
    const middleFirst = boxDivs[3].classList[2];
    const middleSecond= boxDivs[4].classList[2];
    const middleThird = boxDivs[5].classList[2];
    const bottomFirst = boxDivs[6].classList[2];
    const bottomSecond = boxDivs[7].classList[2];
    const bottomThird = boxDivs[8].classList[2];


// conditons in which how you win game
    //top first row matches 3 in a row
    if (topFirst && topFirst === topSecond && topFirst === topThird){
        givenWinner(topFirst);   /*top row is the winning 3row */
        boxDivs[0].classList.add('gameWon');
        boxDivs[1].classList.add('gameWon');
        boxDivs[2].classList.add('gameWon');
      } else if (middleFirst && middleFirst === middleSecond && middleFirst === middleThird) {
        givenWinner(middleFirst);     /*middle row is the winning 3row */
        boxDivs[3].classList.add('gameWon');
        boxDivs[4].classList.add('gameWon');
        boxDivs[5].classList.add('gameWon');
      } else if (bottomFirst && bottomFirst === bottomSecond && bottomFirst === bottomThird) {
        givenWinner(bottomFirst);    /*last row is the winning 3row */
        boxDivs[6].classList.add('gameWon');
        boxDivs[7].classList.add('gameWon');
        boxDivs[8].classList.add('gameWon');
      } else if (topFirst && topFirst=== middleFirst && topFirst === bottomFirst) {
        givenWinner(topFirst);       /*left(1st) column is the winner */
        boxDivs[0].classList.add('gameWon');
        boxDivs[3].classList.add('gameWon');
        boxDivs[6].classList.add('gameWon');
      } else if (topSecond && topSecond === middleSecond && topSecond === bottomSecond) {
        givenWinner(topSecond);     /*middle(2nd) column is the winner */
        boxDivs[1].classList.add('gameWon');
        boxDivs[4].classList.add('gameWon');
        boxDivs[7].classList.add('gameWon');
      } else if (topThird && topThird === middleThird && topThird === bottomThird) {
        givenWinner(topThird);        /*last(3rd) column is the winner*/
        boxDivs[2].classList.add('gameWon');
        boxDivs[5].classList.add('gameWon');
        boxDivs[8].classList.add('gameWon');
      } else if (topFirst && topFirst === middleSecond && topFirst === bottomThird) {
        givenWinner(topFirst);           /*diagonal left top corner winner */
        boxDivs[0].classList.add('gameWon');
        boxDivs[4].classList.add('gameWon');
        boxDivs[8].classList.add('gameWon');
      } else if (topThird && topThird === middleSecond && topThird === bottomFirst) {
        givenWinner(topThird);           /*diagonal left top corner winner */
        boxDivs[2].classList.add('gameWon');
        boxDivs[4].classList.add('gameWon');
        boxDivs[6].classList.add('GameWon');
      } else if (topFirst && topSecond && topThird && middleFirst && middleSecond && middleThird &&bottomFirst && bottomSecond && bottomThird) {
        gameLetsAGo = false;
        actionDiv.innerHTML = 'Game is a tie!';
      } else {   /* */
        marioTurn = !marioTurn;
        if (marioTurn) {
          actionDiv.innerHTML = `${xRepresent} is next` ;
        } else {
          actionDiv.innerHTML = `${oRepresent} is next` ;
        }
      }
    };

// Reset button for game
const buttonReset = () => {
    marioTurn = true;
    actionDiv.innerHTML = `${xRepresent} is next`;
    for (const boxDiv of boxDivs) {
      boxDiv.classList.remove('mariopic');
      boxDiv.classList.remove('browserpic');
      boxDiv.classList.remove('gameWon');
    }
    gameLetsAGo = true;
  };
        
// //function defined for event listener
// const actionReset = (e) => {
    
// };
const actionBoxClick = (e) => {
    const classList = e.target.classList; /*declared a variable class list for traget of each boxDiv*/
    //dont need bottom
    // const location = classList[1];  /*extract elements of each box and give location on gameboard*/
    // // console.log("location", location);
    
    /* bottom first if statement runs nothing when indicated gamebox is already filled up.*/
    if( !gameLetsAGo || classList[2] === 'mariopic' || classList[2] === 'bowserpic'){
        return;  /*function ends returns nothing*/
    }
    if (marioTurn) {
        classList.add('mariopic');
        /*invoking updateGamePlay function to if conditional within box click function */
        updateGamePlay(); 
    }else{
       classList.add('bowserpic');
       updateGamePlay();
   
    }
    
};

// adding event listeners to attaches handler to specified element W3schools
//in simple terms i will be attaching the reset div to an on-click animation 
resetDiv.addEventListener('click', buttonReset);

// using FOR OF loop. To loop of each of boxdiv
for (const boxDiv of boxDivs){   
    boxDiv.addEventListener('click', actionBoxClick)
}


// Challenges I wish to fix or update. 
// Reset button, functionality of nintendo switch buttons, more animation, modal box for start game/instructions