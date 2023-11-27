let a = prompt('nhập a :')
let b = prompt('nhập b :')


if (a == 0 && b == 0) {
    alert('phương trình có vô số nghiệm')
}else if (a == 0 && b != 0){
    alert('phương trình vô nghiệm')
}else if (a != 0 && b != 0){
    alert('phương trình có 1 nghiệm duy nhất' + (-b) / a)
}else {
    alert('nghiệm bằng 0')
}