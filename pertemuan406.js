/* function dasar
pembuatan function
*/

function tambah(a, b){

    let hasil;
    hasil = a + b;

    return hasil;
}

let nilaiA = 5;
let nilaiB = 6;
let a;
let b;

let hasilTambah = tambah(nilaiA, nilaiB);
console.log('hasil penambahan ' + nilaiA + ' dengan ' + b + ' adalah ' + hasilTambah);
console.log(`hasil penambahan ${a} dengan ${b} adalah ${hasilTambah}`);