export function encodeSpace(input: string): string {
    let regexp = /\s/g;
    return input.replace(regexp, '%20');
}
// console.log(encodeSpace('Hello World'));
