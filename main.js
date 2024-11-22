function clicks() {
    $('#div1').hide();
    $('#div2').show();
    $('#div2').addClass("fadeinv2");
        
    var typed = new Typed('.katakata', {
        strings: ["Cuma mau bilang", "Selamat Siang", "Jangan Lupa makan nanti sakit", "Semoga Engga", "Makasih."],
        typeSpeed: 70
    });
}
