//  çalıştırmak için index.html sayfasında 46. satırdaki "<script src="./odev-7.js"></script>" tagini yorum satırından çıkartın

// userEmail, userPassword kullanıcıdan aldığımız değeri db ile karşılaştıracak eğer doğru ise adminFunction'a gönderecek
// 4 kalan haktan aşağı doğru düşecek eğer kalan hak sayımız 0 olursa kullanıcı bloke olsun
// dbUserEmail= "deneme@gmail.com"
// dbUserPassword= "root"

let adminPage = () => {
    document.writeln('Admin sayfası')
}

let login = () => {
    let dbUserEmail = 'deneme@gmail.com';
    let dbUserPassword = 'root';
    let userEmail, userPassword;
    let count = 4;

    while (count > 0) {
        userEmail = prompt('email giriniz')
        userPassword = prompt('şifre giriniz')
        if (userEmail === dbUserEmail && userPassword === dbUserPassword)
            return adminPage()
        else {
            count--;
            alert(`kalan hakkınız: ${count}`)
        }
    }
    alert('hakkınız kalmadı iyi günler')
}
login()