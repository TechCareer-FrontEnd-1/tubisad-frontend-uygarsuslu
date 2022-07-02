// çalıştırmak için index.html sayfasında 41. satırdaki "<script src="./odev-2.js"></script>" tagini yorum satırından çıkartın

// if-else

// 1-10 arasında rastgele sayı olsun biz de tahmin etmeye çalışalım. bizim tahmin sayımız "5" olsun. eğer bizim tahminimiz sayıdan büyükse "büyük tahmin", bizim tahminimiz sayıdan küçükse "küçük tahmin" yazsın. eğer tahmini bulursak kaçıncı tahminde bulunduğumuzu söylesin.  

var random = Math.round(Math.random() * 9 + 1)
document.write(`random sayi= ${random}`)
document.write("<br>")

var tahmin = 5
document.write(`tahmin sayisi= ${tahmin}`)
document.write("<br>")

if (random < tahmin) {
    document.write("büyük tahmin")
}
else if (random > tahmin) {
    document.write("küçük tahmin")
}
else {
    document.write("doğru tahmin")
}