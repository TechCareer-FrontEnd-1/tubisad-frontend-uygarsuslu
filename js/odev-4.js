// kullanıcı tarafından sayı girelim (prompt)
// 1 <= x <= sayı
// eğer sayı 44 ise toplama yapmadan çıksın (break)
// eğer sayı 1 veya negatifse kullanıcıyı uyarsın (break) ve kullanıcıdan tekrar sayı istesin (sonsuz)
// eğer toplanacak sayılarda 7 varsa toplamaya dahil edilmesin (continue)
// bu sayıların toplamını yapan program yapalım

function numberUser() {
    var value = Number(prompt("Lütfen bir sayı giriniz"))

    sum = 0;
    var sum;

    if (value < 1) {
        alert("1'den küçük sayı giremezsiniz")
    }
    else {
        for (let i = 0; i <= value; i++) {
            if (value == 44) {
                alert("44 secretKey çıkış yapıldı")
                break
            }
            if (i == 7) {
                alert("7 toplanmayacak")
                continue
            }
            sum += i
        }
        document.write(sum)
    }
}
numberUser()