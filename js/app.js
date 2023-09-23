
let canvas = document.getElementById("canvas");

let ctx = canvas.getContext('2d');

function circle (pos_x, pos_y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(pos_x, pos_y, radius, 0, Math.PI*2, true); 
    ctx.fill();
}

function block (pos_x, pos_y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(pos_x, pos_y, width, height);
}

let x_circle = 500, y_circle = 250;
let move_right = true, move_top = true;

let y_block_1 = 200, height_block_1 = 100;
let y_block_2 = 200, height_block_2 = 100;

let score2 = 0;
let score1 = 0;

document.addEventListener('keydown', function(event) {
    console.log(event.code);
    if (event.code == "ArrowDown" && y_block_1 + height_block_1 !== 500) {
        y_block_2 += 60;

    } else if (event.code == "ArrowUp" && y_block_1 != 0) {
      y_block_2 -= 60;
    }
});
let lastPos = 0

document.addEventListener('mousemove', function(event) {
  y_block_1 = event.screenY - 100;
});

const scoreBlock1 = document.querySelector('.score1')
const scoreBlock2 = document.querySelector('.score2')

let playGame = setInterval(function () {
    ctx.clearRect(0, 0, 1200, 500);
    
    if (y_circle >= y_block_1 && y_circle <= y_block_1 + height_block_1 && x_circle == 1150) {
        move_right = false;
        
    }

    if (y_circle >= y_block_2 && y_circle <= y_block_2 + height_block_2 && x_circle == 110) {
      move_right = true;
      
  }

    if (y_circle - 25 == 0) {
        move_top = false;
    } else if (y_circle + 25 == 500) {
        move_top = true;
    }

    if (x_circle - 25 == 0) {
        move_right = true;
    } else if (x_circle + 25 == 1200) {
        move_right = false;
    }

    if (move_right == true) {
        x_circle++;
    } else {
        x_circle--;
    }

    if (move_top == true) {
        y_circle--;
    } else {
        y_circle++;
    }

    circle(x_circle, y_circle, 10, "black");
    block(1150, y_block_1, 10, height_block_1, "black");

    block(100, y_block_2, 10, height_block_2, "black");

    if ((y_circle <= y_block_1 || y_circle >= y_block_1 + height_block_1) && x_circle > 1160) {
      move_right = false
        x_circle = 500, y_circle = 250;
        score2++;
        scoreBlock2.innerHTML = score2
    }

    if ((y_circle <= y_block_2 || y_circle >= y_block_2 + height_block_2) && x_circle < 95) {
      move_right = true
        x_circle = 500, y_circle = 250;
        score1++;
        scoreBlock1.innerHTML = score1
    }

}, 1);


