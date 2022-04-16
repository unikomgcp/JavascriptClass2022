
function faktorial(x) {
    hasil=1;
    for (i=1;i<=x;i++){
        hasil *= i;
    }

    return hasil;
}

let n = 10;
let hasil2 = faktorial(n);
console.log(hasil2);