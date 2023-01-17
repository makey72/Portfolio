let cursor = document.querySelector('.cursor'),
    cursorFollower = document.querySelector('.cursor-follower');
document.addEventListener('mousemove', (e) => {
    let posX = e.clientX,
        posY = e.clientY;
    cursor.style.left = posX +'px';
    cursor.style.top = posY +'px';

    let mouseX = e.clientX - 10,
        mouseY = e.clientY - 10;

    setTimeout(follower, 10)

    function follower() {
        cursorFollower.style.left = mouseX +'px';
        cursorFollower.style.top = mouseY +'px';
    }

})
