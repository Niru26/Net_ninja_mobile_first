let n = 140;
console.log(n);
let m = 175;
console.log(m);
let count = m * n;
console.log(count);

while (m != n) {
    if (n > m) {
        n = n - m;
    }
    else {
        m = m - n;
    }
    console.log("In code:");
    console.log(`n:${n} and m:${m}`);

}

console.log(count / n);
