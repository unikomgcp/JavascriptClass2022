/* If Else Statement - Truthy & Falsy 
Setiap nilai pada JavaScript pada dasarnya juga mewarisi sifat boolean. Nilai ini dikenal dengan truthy atau falsy. Nilai truthy berarti nilai yang ketika dievaluasi akan menghasilkan nilai true, begitu pula falsy bernilai false.

Tipe data Truthy & Falsy:

- Number 0
- BigInt 0n
- String kosong seperti “” atau ‘’
- null
- undefined
- NaN, atau Not a Number
*/

let nama =null;

if (nama) {
    console.log(`Halo, ${nama}`); //jika null maka akan dianggap falsy
} else {
    console.log("Nama masih kosong");
}
