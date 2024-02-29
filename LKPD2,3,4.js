
//LKPD 2
//NO. 1
let nama = "Gina";
let gaji_pokok = 5000000;
let tunj = 20/100 * gaji_pokok;
let pjk = 15/100 * gaji_pokok + tunj;
let gaji_bersih = gaji_pokok + tunj - pjk;

console.log (`
    Nama karyawan ${nama}
    Tunjangan ${tunj}
    Pajak ${pjk}
    Gaji bersih ${gaji_bersih}
`)

//NO. 2
let j = 2;
let m = 24;
let d = 8;
let total_detik = j * 3600 + m * 60 + d;

console.log (`
Total detik ${total_detik}
`)

//NO.3
let detik = 7320;
let jam = detik / 3600;
let menit = jam / 60;
let dtk = menit / 60;

console.log (`
    jam ${jam}
    menit ${menit}
    detik ${dtk}
`)


//LKPD 3
//NO. 1
let gram = 3000;
let harga = gram * 500;
let diskon = gram * 5/100;
let hasil = harga - diskon;

console.log(`
    harga sebelum diskon adalah ${harga}
    diskonnya adalah ${diskon}
    harga setelah diskon adalah ${hasil}
`)

//NO. 2
let bilang = 577;
let satu = Math.floor(bilang % 10)
let puluh = Math.floor(bilang % 100 / 10)
let ratus = Math.floor(bilang % 1000 / 100)

console.log(`
    ${satu} satuan
    ${puluh} puluhan
    ${ratus} ratusan
`)

//NO. 3
let suhu = 23;
let celcius = 5/9 * (suhu - 32);
if(celcius >= 300){
    result = `panas`
} else {celcius <300 && celcius >=250
    result = `sedang`
} {suhu <250 && suhu >0
    result = `dingin`
}

console.log(celcius + result)


let pabp = 86;
let math = 82;
let DPK = 77;
let rata  = (pabp + math + DPK )/3;

//proses
if(rata >=80 && rata <=100) {
    grade = "A"
} else  { rata >=75 && rata <80  
    grade = "B"
} { rata >=65 && rata <75
    grade = "C"
} { rata >=45 && rata <65 
    grade = "D"
} { rata >=0 && rata <45
    grade = "E"
}

console.log(rata)

//LKPD 4
//NO. 1
let kode = 12310198128;
let g = Math.floor (kode % 100000000000 / 10000000000);
let dd = Math.floor (kode % 10000000000 / 100000000)
let mm = Math.floor (kode % 100000000 / 1000000)
let yyyy = Math.floor (kode % 10000000 / 100)
let nn = Math.floor (kode % 100)

console.log(`
    bergolongan ${g}
    tanggal ${dd}
    bulan ${mm}
    tahun ${yyyy}
    nomor urut ${nnn}
`)

//NO.2
const input = Number(prompt(`masuka kode pegawai (11 digit) : `))
const golongan = Math.floor (input % 1000000000000 / 10000000000)
const tgl = Math.floor (input % 100000000000 / 1000000000)
const bln = Math.floor (input % 10000000000 / 100000000)
const thn = Math.floor (input % 1000000000 / 100)
const nnn = Math.floor (input % 10000)

if (golongan >=1 && golongan <=4) {
    let bulanName;
    switch(bln) {
        case 1: bulanName = `JAN`; break;
        case 2: bulanName = `FEB`; break;
        case 3: bulanName = `MAR`; break;
        case 4: bulanName = `APR`; break;
        case 5: bulanName = `MEI`; break;
        case 6: bulanName = `JUN`; break;
        case 7: bulanName = `JUL`; break;
        case 8: bulanName = `AGU`; break;
        case 9: bulanName = `SEP`; break;
        case 10: bulanName = `OKT`; break;
        case 11: bulanName = `NOV`; break;
        case 12: bulanName = `DES`; break;
    } console.log(`${input} adalah seorang pegawai bergolongan ${golongan}, lahir pada tanggal ${tgl} ${bulanName} ${thn} dan bernomor urut ${3}`)
} else {
    console.log(`golongan tidak valid`)
}


//NO. 3
let hh = 2;
let mi = 40;
let ss = 50;
let hasiLl = ss + 1;
if(hasilL > 59) {
    ss = 0;
    mi = mi + 1;
    if(mi >59) {
    mi = 0;
    hh = hh +1;
        if(hh > 23){
            ss = 0;
            mi = 0;
            hh = 0;
        }
    }
    console.log(`${hh} jam ${mi} menit ${ss} detik`)
}   else {
    console.log(`${hh} jam ${mi} menit ${hasil} detik`)
}


