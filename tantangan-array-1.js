// Mengakses Nilai Dalam Array
function balikString(words) {
    var temp = '';
    var num = 1;
    for (i = 0; i < words.length; i++) {
        temp += words[words.length - num]
        num++
    }
    return temp
}

var kata = 'Hello World!';
var balik = balikString(kata)
console.log(balik)