function targetTerdekat(arr) {
    // you can only write your code here!
    
    // 1. Cari index o 
    function cariIndexO(arr) {
        var indexO = 0;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] === 'o') {
                indexO += i
            }
        }
        return indexO
    }
    
    // 2. Check jarak ke kanan sampai menemukan x kalau tidak maka 0
    function cariJarakKanan(arr) {
        var indexO = cariIndexO(arr)
        var countToRight = 0;
        var num = indexO
        for (j = 0; j < arr.length; j++) {
            if (num <= arr.length) {
                if (arr[num] == 'x') {
                    return countToRight
                } else {
                    num += 1
                    countToRight += 1
                }
            } else if (num > arr.length) {
                countToRight = 0
                return countToRight
            }
        }
    }

    // 3. Chek jarak ke kiri sampai menemukan x kalau tidak 0
    function cariJarakKiri(arr) {
        var indexO = cariIndexO(arr);
        var countToLeft = 0;
        var num = indexO;
        for (j = 0; j < arr.length; j++) {
            if (num >= 0) {
                if (arr[num] == 'x') {
                    return countToLeft;
                } else {
                    num -= 1;
                    countToLeft += 1;
                }
            } else if (num < 0)  {
                countToLeft = 0
                return countToLeft;
            }
        }
    }

    // 4. Bandingkan jarak kanan dan kiri
    var jarakKanan = cariJarakKanan(arr)
    var jarakKiri = cariJarakKiri(arr)

    if (jarakKanan && jarakKiri === 0) {
        return jarakKanan
    } else if (jarakKiri && jarakKanan === 0) {
        return jarakKiri
    } else if (jarakKanan < jarakKiri) {
        return jarakKanan
    } else if (jarakKanan > jarakKiri) {
        return jarakKiri
    } else if (jarakKanan == 0 && jarakKiri == 0) {
        return 0
    }
}

// TEST CASES
console.log('HACKTIV8 TEST CASES')
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2