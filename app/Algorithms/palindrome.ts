export function palindrome(inputA: string, inputB: string): boolean {
    inputB = inputB.split('').reverse().join('');

    if (inputA === inputB) {
        return true;
    }
    else {
        return false;
    }
}
// console.log(palindrome('12321', '12321'));