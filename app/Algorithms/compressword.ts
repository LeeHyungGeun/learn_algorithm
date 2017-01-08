export function compressword(input: string) {
    let arInput: string[] = input.split('');
    let result: string = '';
    let arReItem: string[] = [];
    let arReCount: number[] = [];

    let last: string = '';
    let count: number = 0;
    for (let item of arInput) {
        if (item === last) {
            arReCount[arReCount.length - 1] = arReCount[arReCount.length - 1] + 1;
        }
        else {
            arReItem.push(item);
            arReCount.push(1);
        }

        last = item;
    }
    arReItem.forEach((value, index, arr) => {
        result += value + arReCount[index];
    });

    console.log(result);
}

// let input: string = 'aaabcdddddddddddddddddddddddcccaa';
// compressword(input);
