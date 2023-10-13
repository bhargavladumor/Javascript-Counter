var current = document.getElementById('current');
var next = document.getElementById('next');
var current1 = document.getElementById('current1');
var next1 = document.getElementById('next1');
var current2 = document.getElementById('current2');
var next2 = document.getElementById('next2');
var point = document.querySelector('.point');
var point1 = document.querySelector('.point1');

var start = document.getElementById('start');
var restart = document.getElementById('restart');
var stop = document.getElementById('stop');
var continueB = document.getElementById('continueB');
var myInterval;
var myTimeOut;

var i = 1;
var j = 1;
var k = 1;

var check;

function startCount() {
    check = true;
    start.style.display = "none";
    restart.style.display = "block";
    myInterval = setInterval(countStart, 1000);
}

function countStart() {
    {
        if (i == 60) {
            setTimeout(() => {
                i = 0;
            }, 500)
            increments();
        }
        myTimeOut = setTimeout(() => {
            next.classList.add('animate');
            if (i <= 9) {
                next.innerHTML = "0" + i;
            }
            else {
                next.innerHTML = i;
            }
            i++;
            point.style.opacity = 0;
            point1.style.opacity = 0;
        }, 500);
        
        if (i <= 9) {
            current.innerHTML = "0" + (i - 1);
        }
        else {
            current.innerHTML = i - 1;
        }
        point.style.opacity = 1;
        point1.style.opacity = 1;
        next.classList.remove('animate');
    }
}

function increments() {
    if (j == 60) {
        setTimeout(() => {
            j = 0;
        }, 500)
        increments1();
    }
    setTimeout(() => {
        next1.classList.add('animate');
        if (j <= 9) {
            next1.innerHTML = "0" + j;
        }
        else {
            next1.innerHTML = j;
        }
        j++;
    }, 500);

    if (j <= 9) {
        current1.innerHTML = "0" + (j - 1);
    }
    else {
        current1.innerHTML = j - 1;
    }
    next1.classList.remove('animate');
}

function increments1() {
    setTimeout(() => {
        next2.classList.add('animate');
        if (k <= 9) {
            next2.innerHTML = "0" + k;
        }
        else {
            next2.innerHTML = k;
        }
        k++;
    }, 500);

    if (k <= 9) {
        current2.innerHTML = "0" + (k - 1);
    }
    else {
        current2.innerHTML = k - 1;
    }
    next2.classList.remove('animate');
}

function restartCount() {
    i = 1;
    j = 1;
    k = 1;
    clearInterval(myInterval);
    clearTimeout(myTimeOut);
    next.classList.remove('animate');
    current.innerHTML = "00";
    next.innerHTML = "00";
    current1.innerHTML = "00";
    next1.innerHTML = "00";
    current2.innerHTML = "00";
    next2.innerHTML = "00";
    startCount();
}

function stopCount() {
    if (check) {
        stop.style.display = "none";
        continueB.style.display = "block";
        clearInterval(myInterval);
        clearTimeout(myTimeOut);
        next.classList.remove('animate');
    }
}

function continueCount() {
    continueB.style.display = "none";
    stop.style.display = "block";
    myInterval = setInterval(countStart, 1000);
    countStart();
}

function clearAll() {
    i = 1;
    j = 1;
    k = 1;
    clearInterval(myInterval);
    clearTimeout(myTimeOut);
    next.classList.remove('animate');
    current.innerHTML = "00";
    next.innerHTML = "00";
    current1.innerHTML = "00";
    next1.innerHTML = "00";
    current2.innerHTML = "00";
    next2.innerHTML = "00";
    start.style.display = "block";
    restart.style.display = "none";
    stop.style.display = "block";
    continueB.style.display = "none";
}