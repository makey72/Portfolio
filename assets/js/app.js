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
var scroll = new SmoothScroll('a[href*="#"]');
let burgerBtn = document.getElementById('burger-menu'),
    burgerMenu = document.querySelector('.burger-menu__nav');

burgerBtn.addEventListener('click', ()=>{
    if (!burgerMenu.classList.contains('open')) {
        burgerBtn.classList.add('open');
        burgerMenu.classList.add('open');
    } else {
        burgerBtn.classList.remove('open');
        burgerMenu.classList.remove('open');
    }



})

let items = document.querySelectorAll('.project__item'),
    projectBlog = document.querySelectorAll('.project__blog'),
    blogItem = document.querySelectorAll('.project__blog-item');

items.forEach((item, index) => {
    item.addEventListener('click', e => {
        projectBlog.forEach((item, index) => {
            if (item.classList.contains('show')) item.classList.remove('show');
            items.forEach(item => {
                if (item.classList.contains('active')) item.classList.remove('active');
            })
        })
        if (!item.classList.contains('active')) item.classList.add('active');
        if (!projectBlog[index].classList.contains('show')) {
            projectBlog[index].classList.add('show');
        }
    })
})

blogItem.forEach(item => {
    item.addEventListener('click', () => {
        if (!item.classList.contains('active')) {
            item.classList.add('active');
        } else if (item.classList.contains('active')) {
            item.classList.remove('active');
        }
    })
})
let btn = document.getElementById('modal-btn'),
    modal = document.querySelector('.modal')

btn.addEventListener('click', () => {
    if (!modal.classList.contains('open')) {
        modal.classList.add('open');
    }
})

document.addEventListener('click', (e) => {
    if (e.target.className === 'modal__overlay' || e.target.className === 'modal__close modal-btn') {
        modal.classList.remove('open');
    }
})
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        // when window width is >= 320px
        768: {
            slidesPerView: 2,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.slider__button-next',
        prevEl: '.slider__button-prev',
    },

})
var element = document.querySelector('.phone__input');
var maskOptions = {
    mask: '+{7}(000)000-00-00'
};
var mask = IMask(element, maskOptions);
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
window.addEventListener("load", windowLoadHandler, false);

//for debug messages
var Debugger = function() { };
Debugger.log = function(message) {
    try {
        console.log(message);
    }
    catch (exception) {
        return;
    }
}

function windowLoadHandler() {
    canvasApp();
}

// function canvasSupport() {
// 	return Modernizr.canvas;
// }

function canvasApp() {
    // if (!canvasSupport()) {
    // 	return;
    // }

    var theCanvas = document.getElementById("canvasOne");
    var context = theCanvas.getContext("2d");

    var displayWidth;
    var displayHeight;
    var timer;
    var wait;
    var count;
    var numToAddEachFrame;
    var particleList;
    var recycleBin;
    var particleAlpha;
    var r,g,b;
    var fLen;
    var m;
    var projCenterX;
    var projCenterY;
    var zMax;
    var turnAngle;
    var turnSpeed;
    var sphereRad, sphereCenterX, sphereCenterY, sphereCenterZ;
    var particleRad;
    var zeroAlphaDepth;
    var randAccelX, randAccelY, randAccelZ;
    var gravity;
    var rgbString;
    //we are defining a lot of variables used in the screen update functions globally so that they don't have to be redefined every frame.
    var p;
    var outsideTest;
    var nextParticle;
    var sinAngle;
    var cosAngle;
    var rotX, rotZ;
    var depthAlphaFactor;
    var i;
    var theta, phi;
    var x0, y0, z0;

    init();

    function init() {
        wait = 1;
        count = wait - 1;
        numToAddEachFrame = 8;

        //particle color
        r = 255;
        g = 255;
        b = 255;

        rgbString = "rgba("+r+","+g+","+b+","; //partial string for color which will be completed by appending alpha value.
        particleAlpha = 1; //maximum alpha

        displayWidth = theCanvas.width;
        displayHeight = theCanvas.height;

        fLen = 320; //represents the distance from the viewer to z=0 depth.

        //projection center coordinates sets location of origin
        projCenterX = displayWidth/2;
        projCenterY = displayHeight/2;

        //we will not draw coordinates if they have too large of a z-coordinate (which means they are very close to the observer).
        zMax = fLen-2;

        particleList = {};
        recycleBin = {};

        //random acceleration factors - causes some random motion
        randAccelX = 0.1;
        randAccelY = 0.1;
        randAccelZ = 0.1;

        gravity = 0; //try changing to a positive number (not too large, for example 0.3), or negative for floating upwards.

        particleRad = 2.5;
        sphereRad = 280;
        sphereCenterX = 0;
        sphereCenterY = 0;
        sphereCenterZ = -3 - sphereRad;

        //alpha values will lessen as particles move further back, causing depth-based darkening:
        zeroAlphaDepth = -750;

        turnSpeed = 2*Math.PI/1600; //the sphere will rotate at this speed (one complete rotation every 1600 frames).
        turnAngle = 0; //initial angle

        timer = setInterval(onTimer, 1000/24);
    }

    function onTimer() {
        //if enough time has elapsed, we will add new particles.
        count++;
        if (count >= wait) {

            count = 0;
            for (i = 0; i < numToAddEachFrame; i++) {
                theta = Math.random()*2*Math.PI;
                phi = Math.acos(Math.random()*2-1);
                x0 = sphereRad*Math.sin(phi)*Math.cos(theta);
                y0 = sphereRad*Math.sin(phi)*Math.sin(theta);
                z0 = sphereRad*Math.cos(phi);

                //We use the addParticle function to add a new particle. The parameters set the position and velocity components.
                //Note that the velocity parameters will cause the particle to initially fly outwards away from the sphere center (after
                //it becomes unstuck).
                var p = addParticle(x0, sphereCenterY + y0, sphereCenterZ + z0, 0.002*x0, 0.002*y0, 0.002*z0);

                //we set some "envelope" parameters which will control the evolving alpha of the particles.
                p.attack = 50;
                p.hold = 50;
                p.decay = 160;
                p.initValue = 0;
                p.holdValue = particleAlpha;
                p.lastValue = 0;

                //the particle will be stuck in one place until this time has elapsed:
                p.stuckTime = 80 + Math.random()*20;

                p.accelX = 0;
                p.accelY = gravity;
                p.accelZ = 0;
            }
        }

        //update viewing angle
        turnAngle = (turnAngle + turnSpeed) % (2*Math.PI);
        sinAngle = Math.sin(turnAngle);
        cosAngle = Math.cos(turnAngle);

        //background fill
        context.fillStyle = "#1f1f1f";
        context.fillRect(0,0,displayWidth,displayHeight);

        //update and draw particles
        p = particleList.first;
        while (p != null) {
            //before list is altered record next particle
            nextParticle = p.next;

            //update age
            p.age++;

            //if the particle is past its "stuck" time, it will begin to move.
            if (p.age > p.stuckTime) {
                p.velX += p.accelX + randAccelX*(Math.random()*2 - 1);
                p.velY += p.accelY + randAccelY*(Math.random()*2 - 1);
                p.velZ += p.accelZ + randAccelZ*(Math.random()*2 - 1);

                p.x += p.velX;
                p.y += p.velY;
                p.z += p.velZ;
            }

            /*
            We are doing two things here to calculate display coordinates.
            The whole display is being rotated around a vertical axis, so we first calculate rotated coordinates for
            x and z (but the y coordinate will not change).
            Then, we take the new coordinates (rotX, y, rotZ), and project these onto the 2D view plane.
            */
            rotX = cosAngle*p.x + sinAngle*(p.z - sphereCenterZ);
            rotZ = -sinAngle*p.x + cosAngle*(p.z - sphereCenterZ) + sphereCenterZ;
            m = fLen/(fLen - rotZ);
            p.projX = rotX*m + projCenterX;
            p.projY = p.y*m + projCenterY;

            //update alpha according to envelope parameters.
            if (p.age < p.attack+p.hold+p.decay) {
                if (p.age < p.attack) {
                    p.alpha = (p.holdValue - p.initValue)/p.attack*p.age + p.initValue;
                }
                else if (p.age < p.attack+p.hold) {
                    p.alpha = p.holdValue;
                }
                else if (p.age < p.attack+p.hold+p.decay) {
                    p.alpha = (p.lastValue - p.holdValue)/p.decay*(p.age-p.attack-p.hold) + p.holdValue;
                }
            }
            else {
                p.dead = true;
            }

            //see if the particle is still within the viewable range.
            if ((p.projX > displayWidth)||(p.projX<0)||(p.projY<0)||(p.projY>displayHeight)||(rotZ>zMax)) {
                outsideTest = true;
            }
            else {
                outsideTest = false;
            }

            if (outsideTest||p.dead) {
                recycle(p);
            }

            else {
                //depth-dependent darkening
                depthAlphaFactor = (1-rotZ/zeroAlphaDepth);
                depthAlphaFactor = (depthAlphaFactor > 1) ? 1 : ((depthAlphaFactor<0) ? 0 : depthAlphaFactor);
                context.fillStyle = rgbString + depthAlphaFactor*p.alpha + ")";

                //draw
                context.beginPath();
                context.arc(p.projX, p.projY, m*particleRad, 0, 2*Math.PI, false);
                context.closePath();
                context.fill();
            }

            p = nextParticle;
        }
    }

    function addParticle(x0,y0,z0,vx0,vy0,vz0) {
        var newParticle;
        var color;

        //check recycle bin for available drop:
        if (recycleBin.first != null) {
            newParticle = recycleBin.first;
            //remove from bin
            if (newParticle.next != null) {
                recycleBin.first = newParticle.next;
                newParticle.next.prev = null;
            }
            else {
                recycleBin.first = null;
            }
        }
        //if the recycle bin is empty, create a new particle (a new ampty object):
        else {
            newParticle = {};
        }

        //add to beginning of particle list
        if (particleList.first == null) {
            particleList.first = newParticle;
            newParticle.prev = null;
            newParticle.next = null;
        }
        else {
            newParticle.next = particleList.first;
            particleList.first.prev = newParticle;
            particleList.first = newParticle;
            newParticle.prev = null;
        }

        //initialize
        newParticle.x = x0;
        newParticle.y = y0;
        newParticle.z = z0;
        newParticle.velX = vx0;
        newParticle.velY = vy0;
        newParticle.velZ = vz0;
        newParticle.age = 0;
        newParticle.dead = false;
        if (Math.random() < 0.5) {
            newParticle.right = true;
        }
        else {
            newParticle.right = false;
        }
        return newParticle;
    }

    function recycle(p) {
        //remove from particleList
        if (particleList.first == p) {
            if (p.next != null) {
                p.next.prev = null;
                particleList.first = p.next;
            }
            else {
                particleList.first = null;
            }
        }
        else {
            if (p.next == null) {
                p.prev.next = null;
            }
            else {
                p.prev.next = p.next;
                p.next.prev = p.prev;
            }
        }
        //add to recycle bin
        if (recycleBin.first == null) {
            recycleBin.first = p;
            p.prev = null;
            p.next = null;
        }
        else {
            p.next = recycleBin.first;
            recycleBin.first.prev = p;
            recycleBin.first = p;
            p.prev = null;
        }
    }
}
let form = document.querySelector('#form');
let inputForm = document.querySelectorAll('._rq');
let inputFormTel = document.querySelector('._rq-tel');
let sending = document.querySelector('.form__sending');
let success = document.querySelector('.form__success');
let err = document.querySelector('.form__err');
let minSymbol = 3;
let minTel = 16;
form.addEventListener('submit', formSend);
let error = 0;

async function formSend(e) {
    e.preventDefault();

    let formData = new FormData(form);
    if (error === validationErr(e)) {
        sending.classList.add('_load');
        let response = await fetch('form.php', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            sending.classList.remove('_load');
            success.classList.add('_success');
            inputFormTel.value = '';
            inputForm.forEach(input => {
                input.value = '';
            })
            setTimeout(e => success.classList.remove('_success'), 2000)
        } else {
            sending.classList.remove('_load');
            err.classList.add('_err');
            inputForm.forEach(input => {
                input.value = '';
            })
            inputFormTel.value = '';
            setTimeout(e => err.classList.remove('_err'), 2000)
        }
    } else {

    }
}

function validationErr(e) {
    let err = 0;

    for (let i = 0; i < inputForm.length; i++) {
        if (inputForm[i].value.length < minSymbol) {
            inputForm[i].classList.add('_rq-err')
            err++
        } else {
            inputForm[i].classList.remove('_rq-err')
        }

    }
    if (inputFormTel.value.length < minTel) {
        inputFormTel.classList.add('_rq-err')
        err++
    } else {
        inputFormTel.classList.remove('_rq-err')
    }
    return err
}
window.addEventListener('DOMContentLoaded', function () {

    if (pageYOffset > 0) {
        showBlock(document.querySelector('#about'));
        showBlock(document.querySelector('#project'));
        showBlock(document.querySelector('#feedback'));
        showBlock(document.querySelector('#reviews'));
    }
    window.addEventListener('scroll', (e) => {
        showBlock(document.querySelector('#about'));
        showBlock(document.querySelector('#project'));
        showBlock(document.querySelector('#feedback'));
        showBlock(document.querySelector('#reviews'));
        console.log(window.screen.height, pageYOffset)
    })

    function showBlock(block) {
        if (pageYOffset >= block.offsetTop - window.screen.height*0.9) block.classList.add('show');
    }

})