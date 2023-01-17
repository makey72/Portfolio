let links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        cursorFollower.classList.add('active');
    })
})

links.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
        cursorFollower.classList.remove('active');
    })
})

let linkBtn = document.querySelectorAll('.link-btn');

linkBtn.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('active-btn');
        cursorFollower.classList.add('active-btn');
    })
})

linkBtn.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('active-btn');
        cursorFollower.classList.remove('active-btn');
    })
})

let buttons = document.querySelectorAll('.button');

buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        cursorFollower.classList.add('button');
    })
})

buttons.forEach(btn => {
    btn.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
        cursorFollower.classList.remove('button');
    })
})

let modalBtn = document.querySelectorAll('.modal-btn');

modalBtn.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        cursor.classList.add('modal-btn');
        cursorFollower.classList.add('modal-btn');
    })
})

modalBtn.forEach(btn => {
    btn.addEventListener('mouseleave', () => {
        cursor.classList.remove('modal-btn');
        cursorFollower.classList.remove('modal-btn');
    })
})

let inputs = document.querySelectorAll('.input');

inputs.forEach(inp => {
    inp.addEventListener('mouseenter', () => {
        cursor.classList.add('input-active');
        cursorFollower.classList.add('input-active');
    })
})

inputs.forEach(inp => {
    inp.addEventListener('mouseleave', () => {
        cursor.classList.remove('input-active');
        cursorFollower.classList.remove('input-active');
    })
})