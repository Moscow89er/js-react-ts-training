function getPrimeNumber(n) {
    let arr = [];

    label:   
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue label;
        }
        arr.push(i);
    }
    
    console.log(arr);
}

getPrime(55);