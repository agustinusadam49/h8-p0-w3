function cariMean(arr) {
    // you can only write your code here!
    var jumlah = 0;
    for (i = 0; i < arr.length; i++) {
        jumlah += arr[i];
    }
    var mean = jumlah / arr.length

    if (jumlah % arr.length == 0) {
        return mean
    } else {
        mean = String(mean)
        var afterComa = Number(mean[2])
        if (afterComa < 5) {
            var bulat = String(mean[0])
            bulat = Number(bulat)
            return bulat
        } else {
            var bulat = String(mean[0])
            bulat = Number(bulat)
            bulat += 1
            return bulat
        }
    }
  }
  
  // TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7