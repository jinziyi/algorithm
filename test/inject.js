function sort(arr = []) {
    if (arr.length < 2) {
        return arr;
    }
    let i = 1;
    let c = 0;
    let t = Date.now();
    while (i < arr.length - 1) {
        let j = i - 1;
        let curr = arr[i];
        while (j > -1) {
            c++;
            if (arr[j] > curr) {
                let tmp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = tmp;
            }else {
                break;
            }
            j--;
        }
        i++;
    }
    console.log(Date.now() - t, c, arr);
}

console.log(sort(
    Array(100000).fill().map((e, i) => i)
));
console.log(sort(
    Array(100000).fill().map((e, i) => 1000 - i)
));