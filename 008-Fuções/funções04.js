function fatorial(n){
    let fat = 1
    for (let c= n; c > 1; c--){
        fat *=c
    }
    return fat
}
console.log(fatorial(5))
// 5! = 5 x 4 x 3 x 2 x 1 = 120
/*no for estou declarando que o (c) vai receber o (n) no casso o (n) vai ser o valor que irei declarar

*/