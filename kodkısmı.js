avaScript

// 1. Karşılama Mesajı
var saat = new Date().getHours();
var mesaj = "";

if (saat < 12) {
    mesaj = "Günaydın!";
} else if (saat < 18) {
    mesaj = "İyi günler!";
} else {
    mesaj = "İyi akşamlar!";
}

alert(mesaj + " Web sayfama hoş geldiniz.");


// 2. Menüdeki Aktif Sayfayı Renklendirme
var linkler = document.querySelectorAll("nav ul li a");

for (var i = 0; i < linkler.length; i++) {
    
    if (window.location.href.includes(linkler[i].getAttribute("href"))) {
        linkler[i].style.color = "#3be303"; 
        linkler[i].style.textDecoration = "underline"; 
    }
}


// 3. İletişim Formu Kontrolü
function formuKontrolEt() {
    alert("Mesajınız iletildi! En kısa sürede dönüş yapacağım.");
    return true; 
}