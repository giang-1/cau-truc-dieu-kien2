let a = +prompt('nhập lương vào đây anh tính cho: ')
let tienThue

if (a > 0 && a < 500) {
    tienThue = (a*5)/100;   
}else if (a >= 500 && a < 1000) {
    tienThue = (a*10)/100;
}else if (a >= 1000 && a < 2000) {
    tienThue = (a*20)/100;
}else if (a >= 2000 && a < 3000) {
    tienThue = (a*30)/100;
}else{
    tienThue = (a*35)/100;
}

alert('tiền thuế chú nộp là :' + tienThue + 'tiền lương sau thuế: ' + (a - tienThue));