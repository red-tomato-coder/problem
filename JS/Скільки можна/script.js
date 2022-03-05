function getSumOfDigits(value) {
    return String(value).split('').reduce((acc, curr) => {
        return acc + Number(curr);
    }, 0);
}

let a = prompt();

console.log(getSumOfDigits(a));