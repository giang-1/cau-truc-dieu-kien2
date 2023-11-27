let a = parseFloat(prompt('nhập a: '));
let b = parseFloat(prompt('nhập b: '));
let c = parseFloat(prompt('nhập c: '));
//let d = 
if ((a > 0 && a < (b + c)) && (b > 0 && b < (c + a)) && (c > 0 && c < (b + a))) {
    alert('đây là 3 cạnh của 1 tam giác')
} else {
    alert('hong bé ơi')
}