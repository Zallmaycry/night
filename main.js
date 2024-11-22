function clicks() {

    // Play musik saat tombol diklik
    const music = new Audio('Starla.mp3'); // Ganti dengan nama file musik Anda
    music.loop = true; // Agar musik terus berulang
    music.volume = 0.5; // Atur volume (0.0 sampai 1.0)
    music.play();

    $('#div1').hide();
    $('#div2').show();
    $('#div2').addClass("fadeinv2");
        
    var typed = new Typed('.katakata', {
        strings: ["Cuma mau bilang", "Selamat Siang", "Jangan Lupa makan", "Semoga gak sakit :v", "Terima Kasih"],
        typeSpeed: 70
    });
}

// ❤️