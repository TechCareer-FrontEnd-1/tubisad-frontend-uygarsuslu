//  çalıştırmak için index.html sayfasında 42. satırdaki "<script src="./odev-3.js"></script>" tagini yorum satırından çıkartın

// kullanıcıdan aldığımız verinin ilk harfi ve son harfi görünsün geriye kalan karakter kadar "*" olsun
// örneğin => alınan = Uygar / çıktı = U***r

// function / string replace / loop

function userName() {
    let firstName = prompt("lütfen isminizi giriniz")

    // let length = firstName.length;
    let changed = firstName.substring(1, firstName.length - 1)
    let rp = changed.replace(changed, "***")
    let length = firstName.length
    document.write(firstName[0] + rp + firstName[length - 1])
}
userName()