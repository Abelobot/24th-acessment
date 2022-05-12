var firstRandomNum = Math.floor(Math.random() * 6) + 1

const firstDiceImg = 'images/dice' + firstRandomNum + ".png";
document.querySelectorAll('img')[0].setAttribute('src', firstDiceImg);

var secondRandomNum = Math.floor(Math.random() * 6) + 1

const secondDiceImg = 'images/dice' + secondRandomNum + ".png";
document.querySelectorAll('img')[1].setAttribute('src', secondDiceImg);

if (firstRandomNum > secondRandomNum){
    document.getElementById('refresh').innerHTML = "player 1 win this round..."
}

else if (firstRandomNum < secondRandomNum){
    document.getElementById('refresh').innerHTML = "player 2 wins this round..."
}
else {
    document.getElementById('refresh').innerHTML = "both players got a draw this time..."
}
