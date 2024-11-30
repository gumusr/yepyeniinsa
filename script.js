// Sabit veriyi burada tanımlıyoruz
const kisiVerileri = [
    { "İsim": "Ahmet", "Soyisim": "Yılmaz", "Email": "ahmet@example.com", "Telefon": "555-1234" },
    { "İsim": "Mehmet", "Soyisim": "Öztürk", "Email": "mehmet@example.com", "Telefon": "555-5678" },
    { "İsim": "Ayşe", "Soyisim": "Kaya", "Email": "ayse@example.com", "Telefon": "555-8765" },
    { "İsim": "Fatma", "Soyisim": "Demir", "Email": "fatma@example.com", "Telefon": "555-4321" }
];

// Arama fonksiyonu
function ara() {
    let isim = document.getElementById('isim').value.trim().toLowerCase();
    let soyisim = document.getElementById('soyisim').value.trim().toLowerCase();

    if (!isim || !soyisim) {
        alert('Lütfen hem isim hem soyisim giriniz.');
        return;
    }

    // Veritabanında arama yap
    let sonuc = "Eşleşen Kişi Bulunamadı.";

    // Sabit veriler arasında döngü ile arama yapıyoruz
    for (let i = 0; i < kisiVerileri.length; i++) {
        let row = kisiVerileri[i];
        if (row["İsim"].toLowerCase() === isim && row["Soyisim"].toLowerCase() === soyisim) {
            sonuc = `Eşleşen Kişi: ${row["İsim"]} ${row["Soyisim"]}<br>Email: ${row["Email"]}<br>Telefon: ${row["Telefon"]}`;
            break; // Bulduktan sonra döngüyü sonlandırıyoruz
        }
    }

    // Sonucu ekranda göster
    document.getElementById('sonuc').innerHTML = sonuc;
}
