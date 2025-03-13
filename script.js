const bird = document.getElementById('bird');
const pipe = document.getElementById('pipe');
const pipe2 = document.getElementById('pipe2');
let birdY = window.innerHeight / 2;
let birdVelocity = 0;
let gravity = 0.5;
let pipeX = window.innerWidth;
let pipeSpeed = 2;

document.addEventListener('keydown', () => {
    birdVelocity = -10;
});

function gameLoop() {
    birdVelocity += gravity;
    birdY += birdVelocity;
    bird.style.top = birdY + 'px';
    
    pipeX -= pipeSpeed;
    if (pipeX < -60) {
        pipeX = window.innerWidth;
    }
    pipe.style.right = pipeX + 'px';
    pipe2.style.right = pipeX + 'px';

    if (birdY > window.innerHeight || birdY < 0) {
        alert('Game Over');
        birdY = window.innerHeight / 2;
        birdVelocity = 0;
        pipeX = window.innerWidth;
    }

    requestAnimationFrame(gameLoop);
}

gameLoop();
