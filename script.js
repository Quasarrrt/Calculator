let sum = 0;
let cur;
let oper;
let output = document.querySelector('.output');
document.querySelector(".one").addEventListener('click', click);
document.querySelector(".two").addEventListener('click', click);
document.querySelector(".three").addEventListener('click', click);
document.querySelector(".four").addEventListener('click', click);
document.querySelector(".five").addEventListener('click', click);
document.querySelector(".six").addEventListener('click', click);
document.querySelector(".seven").addEventListener('click', click);
document.querySelector(".eight").addEventListener('click', click);
document.querySelector(".nine").addEventListener('click', click);
document.querySelector(".null").addEventListener('click', click);
document.querySelector(".er").addEventListener('click', clickEr);
document.querySelector(".plus").addEventListener('click', plus);
document.querySelector(".minus").addEventListener('click', minus);
document.querySelector(".division").addEventListener('click', div);
document.querySelector(".mult").addEventListener('click', multi);
document.querySelector(".strelka").addEventListener('click', strel);
document.querySelector(".ravno").addEventListener('click', ravno);

function clickEr() {
    output.innerHTML = 0;
};

function click() {
    if (output.innerText == 0) {
        output.innerHTML = "";
    }
    output.innerHTML += this.innerHTML;
};

function plus() {

    cur = +output.innerHTML;
    output.innerHTML = "";
    oper = '+';
};

function minus() {
    cur = +output.innerHTML;
    output.innerHTML = "";
    oper = '-';
};

function multi() {
    cur = +output.innerHTML;
    output.innerHTML = "";
    oper = '*';
};

function div() {
    cur = +output.innerHTML;
    output.innerHTML = "";
    oper = '/';
};

function strel() {
    output.innerHTML = output.innerHTML.slice(0, -1);
};

function ravno() {
    switch (oper) {
        case '+':
            sum = cur + (+output.innerHTML);

            output.innerHTML = sum;
            break;
        case '-':
            sum = cur - (+output.innerHTML);
            output.innerHTML = sum;
            break;
        case '*':
            sum = cur * (+output.innerHTML);
            output.innerHTML = sum;
            break;
        case '/':
            sum = cur / (+output.innerHTML);
            output.innerHTML = sum;
            break;
    }

};