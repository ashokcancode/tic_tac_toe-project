
function gameobject(){
    return {gameboard: [1,2,3,4,5,6,7,8,9], player1score:1, player2score:2}
}
game = gameobject()
console.log(game.gameboard)
function check(game){
//check for rows
if(game.gameboard[0]==game.gameboard[1]&&game.gameboard[1]==game.gameboard[2]){
    console.log("winner")
    return true
}else if(game.gameboard[3]==game.gameboard[4]&&game.gameboard[4]==game.gameboard[5]){
    console.log("winner")
    return true
}else if(game.gameboard[6]==game.gameboard[7]&&game.gameboard[7]==game.gameboard[8]){
    console.log("winner")
    return true
}else if(game.gameboard[0]==game.gameboard[3]&&game.gameboard[3]==game.gameboard[6]){
    console.log("winner")
    return true
}else if(game.gameboard[1]==game.gameboard[4]&&game.gameboard[4]==game.gameboard[7]){
    console.log("winner")
    return true
}else if(game.gameboard[2]==game.gameboard[5]&&game.gameboard[5]==game.gameboard[8]){
    console.log("winner")
    return true
}else if(game.gameboard[0]==game.gameboard[4]&&game.gameboard[8]==game.gameboard[4]){
    console.log("winner")
    return true
}else if(game.gameboard[2]==game.gameboard[4]&&game.gameboard[4]==game.gameboard[6]){
    console.log("winner")
    return true
 }
else{return false}
}
function gameflow(game){
i=0
turn = 1
while (i < 9){
if (turn == 1){
val = prompt("")
game.gameboard[i]=val
console.log(game.gameboard)
turn = 2
i=i+1
if(check(game)){
    break
}
}else if(turn == 2){
    val = prompt("")
    game.gameboard[i]=val
    console.log(game.gameboard)
    turn = 1
    i=i+1
    if(check(game)){
        break
    }
}
}
}
gameflow(game)
