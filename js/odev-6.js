// çalıştırmak için index.html sayfasında 45. satırdaki "<script src="./odev-6.js"></script>" tagini yorum satırından çıkartın

//ÖDEV-1
//y=3x+4k ==> 1.dereceden 2 bilinmeyenli denklem
//Kullanıcı tarafından alınan x ve k değerlerini hesaplayan algoritma yazınız

// var x = Number(prompt("Lütfen bir sayı giriniz"))
// var k = Number(prompt("Lütfen bir sayı giriniz"))
// var y = (3 * x) + (4 * k)
// document.write(y)

//ÖDEV-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül:(z*9/5)+32

// var z = Number(prompt("Lütfen bir sayı giriniz"))
// var f = (z * 9 / 5) + 32
// document.write(f)

//ÖDEV-3 verilen bir sayının negatif mi pozitif mi olduğunu bulan algoritma ?

// var sayi = Number(prompt("Lütfen bir sayı giriniz"))
// if (sayi < 0) {
//     document.write("sayi negatif")
// }
// else if (sayi == 0) {
//     document.write("sayi nötr")
// }
// else {
//     document.write("sayi pozitif")
// }

//ÖDEV-4 Kullanıcı tarafından aldığımız password ile repassword girilsin doğru ve yanlışı göstersin ?

var password = prompt("Lütfen şifrenizi giriniz")
var repassword = prompt("Lütfen şifrenizi tekrar giriniz")
if (password == repassword) {
    document.write(`şifreyi doğru girdiniz. şifreniz = ${password}`)
}
else {
    document.write(`şifreyi yanlış girdiniz. doğru şifreniz = ${password}`)
}