/* Strings
*/

let sapa = "Good Morning";
console.log(typeof(sapa))
/* output: string */

/*Tidak ada perbedaan antara menggunakan petik satu atau petik dua. dapat menggunakan tanda petik secara bergantian, khususnya jika Anda memiliki teks yang mengandung tanda petik. */

const tanya = '"How are you today?" Claude asked';
console.log(tanya)

//kedua tanda petik akan menghasilkan error, untuk mencoba, hilangkan syntax komentar di line 14
// const jawab = '"I think it's awesome!" he answered confidently';

// Solusinya, gunakan backslash(\) 
const jawab = '"I think it\'s awesome!" I answered confidently';
console.log(jawab);

// operator plus (+) pada string (string concatenation), menggunakan variabel sapa dari line 4
let sapaLagi = sapa + sapa;
console.log(sapaLagi);

//string interpolation
const nama = "Kotaro Minami";
console.log(`Hello, my name is ${nama}.`);
