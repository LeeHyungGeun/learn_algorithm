export function isAnagram(inputA: string, inputB: string): boolean {
    inputA = inputA.toLowerCase().split('').sort().join('');
    inputB = inputB.toLowerCase().split('').sort().join('');

    if (inputA === inputB) {
        return true;
    }
    else {
        return false;
    }
}

// console.log(isAnagram('ab cd e ', 'e dc ba '));