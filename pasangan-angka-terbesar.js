// Bandingkan pasangan angka terbesar
function pasanganTerbesar(num) {
    // you can only write your code here!
    var temp = []
    var strNum = String(num)
    for (i = 0; i < strNum.length -1; i++) {
        temp.push(strNum[i] + strNum[i + 1])
    }
    temp.sort()
    return temp[temp.length -1]   
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
