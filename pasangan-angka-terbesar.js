// Pasangan Angka Terbesar
function pasanganTerbesar(num) {
    // you can only write your code here!
    var temp = []
    var strNum = String(num)
    for (i = 0; i < strNum.length -1; i++) {
        temp.push(strNum[i] + strNum[i + 1])
    }

    var check = true;
    var pasanganAngka1 = 0;
    var pasanganAngka2 = 0;
    var num1 = 0;
    var num2 = 1;
    var arrEleminasi = []
    var angkaTerbesar = 0;
    while (check) {
        pasanganAngka1 += Number(temp[num1])
        pasanganAngka2 += Number(temp[num2])    
        if (pasanganAngka1 > pasanganAngka2) {
            arrEleminasi.push(pasanganAngka2)
            angkaTerbesar = 0;
            angkaTerbesar += pasanganAngka1
            num2 += 1
            pasanganAngka2 = 0;
            pasanganAngka1 = 0;
        } else if(pasanganAngka1 < pasanganAngka2) {
            arrEleminasi.push(pasanganAngka1)
            angkaTerbesar = 0;
            angkaTerbesar += pasanganAngka2
            pasanganAngka1 = 0;
            pasanganAngka2 = 0;
            num1 = num2
            num2 += 1
        }

        if (arrEleminasi.length === temp.length - 1) {
            return angkaTerbesar
            check = false; 
        }
    }
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
