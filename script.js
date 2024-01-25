function kirimReservasi() {
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var pesan = document.getElementById('pesan').value;

    // Ganti nomor WhatsApp dan pesan sesuai kebutuhan
    var nomorWhatsApp = '6281234567890';
    var pesanWhatsApp = 'Reservasi dari ' + nama + ' (' + email + '): ' + pesan;

    // Membuat link WhatsApp dengan parameter pesan
    var linkWhatsApp = 'https://wa.me/' + nomorWhatsApp + '?text=' + encodeURIComponent(pesanWhatsApp);

    // Arahkan pengguna ke WhatsApp
    window.location.href = linkWhatsApp;
}
