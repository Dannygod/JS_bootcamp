let answer = Math.ceil(Math.random() * 100);
console.log(answer);

let guess = 0;
let up = 100;
let down = 1;
let count = 0;
while (guess != answer) {
  guess = prompt("請猜一個" + down + "~" + up + "的數字");
  count++;
  if (guess < down || guess > up) {
    alert("輸入錯誤，再試一次");
    continue;
  } else if (guess > answer) {
    up = guess;
  } else if (guess < answer) {
    down = guess;
  } else if (answer == guess) {
    count--;
    alert("恭喜你答對了，神奇數字是" + answer + "\n你猜錯了" + count + "次");
    break;
  }
}
