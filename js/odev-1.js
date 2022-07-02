//  çalıştırmak için index.html sayfasında 40. satırdaki "<script src="./odev-1.js"></script>" tagini yorum satırından çıkartın

// Kullanıcı tarafından aldığımız 2 tane sayının
var result1 = Number(prompt("lütfen 1 sayı giriniz"))
var result2 = Number(prompt("lütfen 1 sayı giriniz"))

// 1- en küçüğü
var min = Math.min(result1, result2)
document.write("min: " + min + "<br>")

// 2- en büyüğü
var max = Math.max(result1, result2)
document.write("max: " + max + "<br>")

// 3- en büyüğünün karekökü
var sqrt = Math.sqrt(Math.abs(max)) // kullanıcının negatif sayı girme ihtimaline karşı mutlağını aldım
document.write("max-sqrt: " + sqrt + "<br>")

// 4- en büyüğünün karekökünü üste yuvarla
var ceil = Math.ceil(sqrt)
document.write("max-sqrt-ceil: " + ceil + "<br>")

// 5- en küçüğünün mutlağı
var abs = Math.abs(min)
document.write("min-abs: " + abs + "<br>")

// 6- en küçüğünün alt taban en büyüğünü üst taban olarak düşünüp üstünü al
var minAbs = Math.abs(min) // kullanıcının negatif sayı girme ihtimaline karşı önce mutlağını aldım
var maxAbs = Math.abs(max) // kullanıcının negatif sayı girme ihtimaline karşı önce mutlağını aldım
var pow = Math.pow(minAbs, maxAbs) // daha sonra üstünü aldım
document.write("pow: " + pow + "<br>")