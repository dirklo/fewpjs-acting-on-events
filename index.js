const dodger = document.querySelector('#dodger')
document.addEventListener('keydown', (e) => {
    if (e.key == "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key == "ArrowRight") {
        moveDodgerRight();
    } 
});

function moveDodgerLeft() {
    dodger.style.left = parseInt(dodger.style.left) - 5 + 'px'
}
function moveDodgerRight() {
    dodger.style.left = parseInt(dodger.style.left) + 5 + 'px'
}