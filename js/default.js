var number = Math.floor(Math.random()*3);
var answer = parseInt(window.prompt('数あてゲーム。0~2の数字を入力してください!'));

var message;
if(answer === number) {
  message = 'あたり!';
}else if (answer < number){
  message = '残念、それより大きい数字です';
}else if(number < answer){
  message = '残念、それより小さい数字です';
}else{
  message = '0~3の数字を入力してくれよぉ';
}

document.getElementById('choice').textContent = message;
