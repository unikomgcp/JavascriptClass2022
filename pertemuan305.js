/* BigInt
Untuk nilai di luar Number (karena besar/size tipe data number terbatas), kita bisa menggunakan tipe BigInt. Untuk membedakan tipe BigInt dan Number, tambahkan karakter n di akhir angka
*/

const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

// BigInt tetap bisa digunakan untuk nilai yang lebih kecil.
const bigIntButSmall = 7n;

// dapat digunakan dalam operasi aritmetika
console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);


