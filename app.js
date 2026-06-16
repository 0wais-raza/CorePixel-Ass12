var p1 = document.getElementById('p1');

var p1Left = 250;
var p1Top = 400;

var p1Hp = 100;
var p2Hp = 100;

p1.style.left = p1Left + 'px';
p1.style.top = p1Top + 'px';

var speed = 30;

window.addEventListener('keydown', (event) => {
     if (event.key === 'd' && p1Left < window.innerWidth - 200) {
          p1Left += speed;
          p1.src = "p1 walk.gif";
          setTimeout(() => {
               p1.src = "p1 stand.gif";
          }, 500);
     } else if (event.key === 'a' && p1Left > 0) {
          p1Left -= speed;
          p1.src = "p1 walk B.gif";
          setTimeout(() => {
               p1.src = "p1 stand.gif";
          }, 500);
     } else if (event.key === 'w' && p1Top > 0) {
          p1Top -= speed;
          p1.src = "p1 walk.gif";
          setTimeout(() => {
               p1.src = "p1 stand.gif";
          }, 500);
     } else if (event.key === 's' && p1Top < window.innerHeight - 330) {
          p1Top += speed;
          p1.src = "p1 stand.gif";
          setTimeout(() => {
               p1.src = "p1 stand.gif";
          }, 500);
     } else if (event.key === ' ') {
          p1.src = "p1 attack.gif";
          p2.src = "p2 charge.gif";
          p2.style.filter = "hue-rotate(120deg) saturate(5) brightness(0.8) drop-shadow(0 0 10px red)";
          p2Hp -= 10;
          document.getElementById('p2-bar').style.width = p2Hp + "%";
          document.getElementById('p2P').innerText = "Gunter " + p2Hp;
          if (p2Hp <= 0) {
               alert('Player 1 Wins!!!!');
          }
          setTimeout(() => {
               p1.src = "p1 stand.gif";
               p2.src = "p2 stand.gif";
               p2.style.filter = "none";
          }, 500);
     }

     p1.style.left = p1Left + 'px';
     p1.style.top = p1Top + 'px';
});

var p2 = document.getElementById('p2');

var p2Left = 1100;
var p2Top = 600;

p2.style.left = p2Left + 'px';
p2.style.top = p2Top + 'px';

window.addEventListener('keydown', (event) => {
     if (event.key === 'ArrowRight' && p2Left < window.innerWidth - 200) {
          p2Left += speed;
          p2.src = "p2 charge.gif";
          p2.style.transform = "scaleX(1)";
          setTimeout(() => {
               p2.src = "p2 stand.gif";
          }, 500);
     } else if (event.key === 'ArrowLeft' && p2Left > 0) {
          p2Left -= speed;
          p2.src = "p2 charge.gif";
          p2.style.transform = "scaleX(-1)"
          setTimeout(() => {
               p2.src = "p2 stand.gif";
          }, 500);
     } else if (event.key === 'ArrowUp' && p2Top > 0) {
          p2.src = "p2 charge.gif";
          setTimeout(() => {
               p2.src = "p2 stand.gif";
          }, 500);
     } else if (event.key === 'ArrowDown' && p2Top < window.innerHeight - 200) {
          p2.src = "p2 charge.gif";
          setTimeout(() => {
               p2.src = "p2 stand.gif";
          }, 500);
     } else if (event.key === '0') {
          p2.src = "p2 attack.gif";
          p1.src = "p1 walk B.gif";
          p1.style.filter = "hue-rotate(120deg) saturate(5) brightness(0.8) drop-shadow(0 0 10px red)";
          p1Hp -= 10;
          document.getElementById('p1-bar').style.width = p1Hp + "%";
          document.getElementById('p1P').innerText = "Good Man " + p1Hp;
          if (p1Hp <= 0) {
               alert('Player 2 Wins!!!!');
          }
          setTimeout(() => {
               p2.src = "p2 stand.gif";
               p1.src = "p1 stand.gif";
               p1.style.filter = "none";
          }, 500);
     }
     var p2Bar = document.getElementById('p2-bar');

     if (p2Hp <= 30) {
          p2Bar.style.backgroundColor = "red";
     }
     var p1Bar = document.getElementById('p1-bar');

     if (p1Hp <= 30) {
          p1Bar.style.backgroundColor = "red";
     }
     p2.style.left = p2Left + 'px';
     p2.style.top = p2Top + 'px';
});