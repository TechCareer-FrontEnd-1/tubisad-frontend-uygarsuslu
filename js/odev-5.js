// çalıştırmak için index.html sayfasında 44. satırdaki "<script src="./odev-5.js"></script>" tagini yorum satırından çıkartın

// ÖDEV-5 (if-else for break continue)
// Fonksiyonlarla yapılsın

// kullanıcının vereceği (prompt) bitiş sayısını belirleyelim Exam 1<=X<=100
// Eğer bitiş sayısı 100'den fazla ise 100'e kadar olanlar toplansın  (break)
// Eğer kullanıcı başlangıç sayısından küçük girerse uyaralım başlangıçtan büyük girmesini isteyelim
// Eğer verilen sayılarda 7 sayısı varsa bunu eklemesin (continue)
// Eğer kullanıcı secret-key girerse yani 44 sayısını girerse program çalışmayı direk durdursun

// 1.adım: kaç tane sayı var ?
// 2.adım: sayı toplamları ?
function sum() {
    var value = Number(prompt("Lütfen bir sayı giriniz"))

    sum = 0;
    var sum;
    var adet = 0;

    if (value < 1) {
        alert("1'den küçük sayı giremezsiniz")
    }
    else {
        for (let i = 0; i <= value; i++) {
            if (i > 100) {
                alert("100'den sonrası toplanmayacak")
                break
            }
            if (value == 44) {
                alert("44 secretKey çıkış yapıldı")
                break
            }
            if (i == 7) {
                alert("7 toplanmayacak")
                continue
            }
            sum += i
            adet++
        }
        document.write(`sayı toplamları =  ${sum} <br> sayı adeti =  ${adet}`)
    }
}
// sum()

// 3.adım: kaç tane tek sayı var ?
// 4.adım: tek sayılar toplamı ?
// 5.adım: tek sayıları gösterelim ?
function single() {
    var value = Number(prompt("Lütfen bir sayı giriniz"))
    var tek = 0;
    var tadet = 0
    var sayilar

    if (value < 1) {
        alert("1'den küçük sayı giremezsiniz")
    }
    else {
        for (let i = 1; i <= value; i++) {
            if (i > 100) {
                alert("100'den sonrası toplanmayacak")
                break
            }
            if (value == 44) {
                alert("44 secretKey çıkış yapıldı")
                break
            }
            if (i == 7) {
                alert("7 toplanmayacak")
                continue
            }
            if (i % 2 == 1) {
                sayilar = i++
                tek += i;
                tadet++;
            }
            document.write(`${sayilar} `)
        }
        document.write(`<br> tek sayı toplamları =  ${tek} <br> tek sayı adeti =  ${tadet}`)
    }
}
// single()

// 6.adım: kaç tane çift sayı var ?
// 7.adım: çift sayılar toplamı ?
// 8.adım: çift sayıları gösterelim ?
function dual() {
    var value = Number(prompt("Lütfen bir sayı giriniz"))
    var cift = 0;
    var cadet = 0;
    var sayilar

    if (value < 1) {
        alert("1'den küçük sayı giremezsiniz")
    }
    else {
        for (let i = 0; i <= value; i++) {
            if (i > 100) {
                alert("100'den sonrası toplanmayacak")
                break
            }
            if (value == 44) {
                alert("44 secretKey çıkış yapıldı")
                break
            }
            if (i % 2 == 0) {
                sayilar = i++
                cift += i;
                cadet++;
            }
            document.write(`${sayilar} `)
        }
        document.write(`<br> çift sayı toplamları =  ${cift} <br> cift sayı adeti =  ${cadet}`)
    }
}
dual()