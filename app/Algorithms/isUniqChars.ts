export function isUniqChars(input: string): boolean {1
    let arInput: any[] = input.split('');
    let arOuput: string[] = [];
    for (let ch of arInput) {
        if (!arOuput[ch.toString()]) {
            arOuput[ch.toString()] = ch;
        }
        else {
            return false;
        }
    }
    return true;
}

// isUniqChars('abcdeag');