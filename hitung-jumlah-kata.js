// Menghitung Jumlah Kata
function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var kalimatArr = kalimat.split(' ')
    return kalimatArr.length
    
}
  
  // TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
