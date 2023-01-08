let p1Counter = 0;
let p2Counter = 0;
let screen1 = document.getElementsByClassName('Screen1');
let screen2 = document.getElementsByClassName('Screen2');

console.log(screen1);
console.log(screen2);

function p1inc () {
    p1Counter++;
    render(1);
}

function p1dec () {
    p1Counter--;
    render(1);
}

function p2inc () {
    p2Counter++;
    render(2);
}

function p2dec () {
    p2Counter--;
    render(2);
}

function res () {
    p2Counter = 0;
    p1Counter = 0;
    render(3);
}

function render (player) {
    switch (player) {
        case 1:
            screen1[0].innerHTML=`${p1Counter}`;
            break;
        case 2:
            screen2[0].innerHTML=`${p2Counter}`;
            break;
        case 3:
            screen1[0].innerHTML=`${p1Counter}`;
            screen2[0].innerHTML=`${p2Counter}`;
            break;    

    }
}