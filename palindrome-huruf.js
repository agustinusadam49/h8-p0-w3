// Palindrome Huruf (kata jika dibalik cara bacanya tetap sama)
function palindrome(kataAsli) {
    // you can only write your code here!
    var kataYangDiBalik = '';
    var num = 1;
    var panjangKata = kataAsli.length
    for (i = 0; i < kataAsli.length; i++) {
        kataYangDiBalik += kataAsli[panjangKata - num]
        num++
    }

    if (kataYangDiBalik === kataAsli) {
        return true
    } else {
        return false
    }
  }
  
//   // TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false