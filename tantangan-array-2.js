// 2. Melakukan Looping Data Array
function dataHandling(masukan) {
    for (i = 0; i < masukan.length; i++) {
        var temp = ['Nomor ID: ', 'Nama Lengkap: ', 'TTL: ', 'Hobi: '];
        var num = 0;
        for (j = 0; j < temp.length; j++) {
            if (j == 2) {
                temp[j] += masukan[i][num] + ' ' + masukan[i][num + 1];
                console.log(temp[j]);
                num += 2
            } else {
                temp[j] += masukan[i][num];
                console.log(temp[j]);
                num++
            }
        }
        console.log('\n')
    }
}

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

dataHandling(input)
