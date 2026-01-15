let board = ["","","","","","","","",""];

let currentPlayer = "X";

let gameOVer = false;




function checkWin(){

const combos = [
  [0,1,2],[3,4,5],[6,7,8], // rows
 [0,3,6],[1,4,7],[2,5,8], // columns
 [0,4,8],[2,4,6] //
]


for(let combo of combos ){

  let index1 = combo[0]
  let index2 = combo[1]
  let index3 = combo[2]


  let val1 = board[index1]
  let val2 = board[index2]
  let val3 = board[index3]


  if(val1 !== "" && val1 === val2 && val1 === val3){

    gameOVer = true;

    alert(`Player ${currentPlayer} wins!`)
    return;
  }

 

}

 if(!board.includes("")){
    gameOVer = true;

    alert("It is a draw!")
  }


}


function makeMove(cellIndex){

  if(!gameOVer && board[cellIndex] ===""){

    board[cellIndex] = currentPlayer;


    document.getElementById(`cell${cellIndex}`).textContent = currentPlayer;

    checkWin()

    changePlayer();

  }

}



function changePlayer(){

  if(currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
}