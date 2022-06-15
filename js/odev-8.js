//  çalıştırmak için index.html sayfasında 47. satırdaki "<script src="./odev-8.js"></script>" tagini yorum satırından çıkartın

// Zamanın dinamik olarak alıp hangi gün olduğunu gösteren arrow function algoritmasını yazalım switch-case 
// new Date().getDay()

let nowDateDay = () => {
    let nowDay = (new Date().getDay() + 1);
    switch (nowDay) {
        case 0:
            document.write('<br>' + 'Günlerden Pazar')
            break;
        case 1:
            document.write('<br>' + 'Günlerden Pazartesi')
            break;
        case 2:
            document.write('<br>' + 'Günlerden Salı')
            break;
        case 3:
            document.write('<br>' + 'Günlerden Çarşamba')
            break;
        case 4:
            document.write('<br>' + 'Günlerden Perşembe')
            break;
        case 5:
            document.write('<br>' + 'Günlerden Cuma')
            break;
        case 6:
            document.write('<br>' + 'Günlerden Cumartesi')
            break;

        default:
            document.write('<br>' + 'Günlerden belirtilen aralıkta giriniz')
            break;
    }
}
nowDateDay();

////////////////////////////////////////////////////////////////////////////////////////////////////

// Zamanın dinamik olarak alıp hangi gün olduğunu gösteren Immedia function algoritmasını yazalım switch-case
// new Date().getDay()

(() => {
    let nowDay2 = new Date().getDay()
    switch (nowDay2) {
        case 0:
            document.write('<br>' + 'Günlerden Pazar')
            break;
        case 1:
            document.write('<br>' + 'Günlerden Pazartesi')
            break;
        case 2:
            document.write('<br>' + 'Günlerden Salı')
            break;
        case 3:
            document.write('<br>' + 'Günlerden Çarşamba')
            break;
        case 4:
            document.write('<br>' + 'Günlerden Perşembe')
            break;
        case 5:
            document.write('<br>' + 'Günlerden Cuma')
            break;
        case 6:
            document.write('<br>' + 'Günlerden Cumartesi')
            break;

        default:
            document.write('<br>' + 'Günlerden belirtilen aralıkta giriniz')
            break;
    }
})()