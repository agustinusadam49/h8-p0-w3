// Palindrome Angka
function angkaPalindrome(num) {
    // you can only write your code here!
    function angkaYangSudahDibalik(num) {
        var nomorYangDiBalik = '';
        var nomor = String(num);
        var count = 1;
        var panjangNomor = nomor.length
        for (i = 0; i < nomor.length; i++) {
            nomorYangDiBalik += nomor[panjangNomor - count]
            count++
        }
        return nomorYangDiBalik
    }

    num++
    var check = true;
    while (true) {
        if (num == angkaYangSudahDibalik(num)) {
            return num
            check = false;
        } else {
            num++
        }
    }
}
  
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001