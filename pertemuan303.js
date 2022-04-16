/* Increment dan Decrement
Jika dituliskan setelah variabel (x++), expression akan menghasilkan nilai variabel sebelum ditingkatkan nilainya.
Jika dituliskan sebelum variabel (++x), expression akan menghasilkan nilai variabel setelah ditingkatkan nilainya.
*/

let postfix = 5;
console.log(postfix++);
/* output: 5 */

console.log(postfix);
/* output: 6 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */

console.log(--prefix);
/* output: 5 karena hasil dari line 14 dikurangi 1 */