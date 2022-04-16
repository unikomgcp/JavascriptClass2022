// program to find the factorial of a number
function faktorial(x) {
    let hasil=1;

    for (let i=1;i<=x;i++) {
        hasil*=i;         
    }
    return hasil;
}

// take input from the user
const x = prompt('Masukan nilai bilangan: ');

// calling factorial() if num is positive
if (x >= 0) {
    const result = faktorial(x);
    console.log(`The factorial of ${x} is ${result}`);
    // alert(`The factorial of ${x} is ${result}`);
}
else {
    console.log('Enter a positive number.');
}