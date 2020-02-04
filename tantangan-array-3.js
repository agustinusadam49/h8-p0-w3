function arrayBaru(ipt) {
    ipt.splice(4, 0, 'Pria')
    ipt.splice(5, 1, 'SMA Internasional Metro')
    ipt.splice(1, 1, 'Roman Alamsyah Elsharawy')
    ipt.splice(2, 1, 'Provinsi Bandar Lampung')
    return ipt
}

function namaBulan(newArr) {
    var tanggal = newArr[3].split('/')
    switch(tanggal[1]) {
        case '01': {var bulan = 'Januari'; break;}
        case '02': {var bulan = 'Februari'; break;}
        case '03': {var bulan = 'Maret'; break;}
        case '04': {var bulan = 'April'; break;}
        case '05': {var bulan = 'Mei'; break;}
        case '06': {var bulan = 'Juni'; break;}
        case '07': {var bulan = 'Juli'; break;}
        case '08': {var bulan = 'Agustus'; break;}
        case '09': {var bulan = 'September'; break;}
        case '10': {var bulan = 'Oktober'; break;}
        case '11': {var bulan = 'November'; break;}
        case '12': {var bulan = 'Desember'; break;}
        default: {var bulan = 'Tidak valid!'; break;}
    }
    return bulan
}

function sortingBulan(newArr) {
    var tanggal = newArr[3].split('/')
    var temp1 = []
    for (i = 0; i < tanggal.length; i++) {
        temp1.push(Number(tanggal[i]))
    }
    temp1.sort()
    var completeDate = []
    for (i = 0; i < temp1.length; i++) {
        completeDate.push(String(temp1[i]))
    }
    completeDate.splice(2 ,1, '05')
    return completeDate
}

function joinTanggal(newArr) {
    var tanggal = newArr[3].split('/')
    return tanggal.join('-')
}

function nameLimit(newArr) {
    return newArr[1].slice(0,15)
}

function dataHandling2(masukan) {
    var arrayYangBaru = arrayBaru(masukan)
    var monthName = namaBulan(arrayYangBaru)
    var dateInsort = sortingBulan(arrayYangBaru)
    var joinedDate = joinTanggal(arrayYangBaru)
    var limitasiNama = nameLimit(arrayYangBaru)
    var allOutput = [arrayYangBaru, monthName, dateInsort, joinedDate, limitasiNama]
    for (i = 0; i < allOutput.length; i++) {
        console.log(allOutput[i])
        console.log('')
    }
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);


