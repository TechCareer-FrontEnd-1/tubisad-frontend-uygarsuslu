// çalıştırmak için index.html sayfasında 48. satırdaki "<script src="./odev-9.js"></script>" tagini yorum satırından çıkartın

// 1 - 10 arasındaki random 5 tane sayının
var dizi = [];
while (dizi.length < 5) {
    var r = Math.round(Math.random() * 9 + 1);
    if (dizi.indexOf(r) === -1) dizi.push(r);
}
document.write("5 random sayi= " + dizi);
document.write("<br>");

// 1 - toplamı
var toplam = 0;
for (var i = 0; i < dizi.length; i++) {
    if (isNaN(dizi[i])) {
        continue;
    }

    toplam += Number(dizi[i]);
}
document.write("toplam = " + toplam);
document.write("<br>");

// 2 - ortalaması
document.write("ortalama = " + toplam / dizi.length);
document.write("<br>");

// 3 - en küçük sayı
dizi.sort(function (a, b) { return a - b });
document.write("en küçük random sayi= " + dizi[0]);
document.write("<br>");

// 4 - en büyük sayı
dizi.sort(function (a, b) { return b - a });
document.write("en büyük random sayi= " + dizi[0]);
