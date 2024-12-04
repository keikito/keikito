function startAnimation() {
    // Ocultar el botón y el mensaje, y mostrar las flores
    document.getElementById("startButtonContainer").style.display = "none";
    document.getElementById("messageContainer").style.display = "none";
    document.getElementById("flowerContainer").classList.remove("hidden");
    document.getElementById("lyricsContainer").classList.remove("hidden");

    var audio = document.getElementById("music");
    audio.play(); // Reproducir el audio

    // Iniciar la animación de las flores
    document.body.classList.remove("container");
    // Animar las frases de la canción, una por una
    setTimeout(function() {
        document.getElementById("line1").style.animation = "fadeInLeft 3s forwards";
    }, 1000);

    setTimeout(function() {
        document.getElementById("line2").style.animation = "fadeInRight 3s forwards";
    }, 4000);

    setTimeout(function() {
        document.getElementById("line3").style.animation = "fadeInLeft 3s forwards";
    }, 7000);

    setTimeout(function() {
        document.getElementById("line4").style.animation = "fadeInRight 3s forwards";
    }, 10000);

    setTimeout(function() {
        document.getElementById("line5").style.animation = "fadeInLeft 3s forwards";
    }, 13000);

    setTimeout(function() {
        document.getElementById("line6").style.animation = "fadeInRight 3s forwards";
    }, 16000);

    setTimeout(function() {
        document.getElementById("line7").style.animation = "fadeInLeft 3s forwards";
    }, 19000);

    setTimeout(function() {
        document.getElementById("line8").style.animation = "fadeInRight 3s forwards";
    }, 22000);

    setTimeout(function() {
        document.getElementById("line9").style.animation = "fadeInLeft 3s forwards";
    }, 25000);

    setTimeout(function() {
        document.getElementById("line10").style.animation = "fadeInRight 3s forwards";
    }, 28000);

    setTimeout(function() {
        document.getElementById("line11").style.animation = "fadeInLeft 3s forwards";
    }, 31000);

    setTimeout(function() {
        document.getElementById("line12").style.animation = "fadeInRight 3s forwards";
    }, 34000);

    setTimeout(function() {
        document.getElementById("line13").style.animation = "fadeInLeft 3s forwards";
    }, 37000);

    setTimeout(function() {
        document.getElementById("line14").style.animation = "fadeInRight 3s forwards";
    }, 40000);

    setTimeout(function() {
        document.getElementById("line15").style.animation = "fadeInLeft 3s forwards";
    }, 43000);

    setTimeout(function() {
        document.getElementById("line16").style.animation = "fadeInRight 3s forwards";
    }, 46000);

    setTimeout(function() {
        document.getElementById("line17").style.animation = "fadeInLeft 3s forwards";
    }, 49000);

    setTimeout(function() {
        document.getElementById("line18").style.animation = "fadeInRight 3s forwards";
    }, 52000);

    setTimeout(function() {
        document.getElementById("line19").style.animation = "fadeInLeft 3s forwards";
    }, 55000);

    setTimeout(function() {
        document.getElementById("line20").style.animation = "fadeInRight 3s forwards";
    }, 58000);

    setTimeout(function() {
        document.getElementById("line21").style.animation = "fadeInLeft 3s forwards";
    }, 61000);

    setTimeout(function() {
        document.getElementById("line22").style.animation = "fadeInRight 3s forwards";
    }, 64000);

    setTimeout(function() {
        document.getElementById("line23").style.animation = "fadeInLeft 3s forwards";
    }, 67000);

    setTimeout(function() {
        document.getElementById("line24").style.animation = "fadeInRight 3s forwards";
    }, 70000);

    setTimeout(function() {
        document.getElementById("line25").style.animation = "fadeInLeft 3s forwards";
    }, 73000);

    setTimeout(function() {
        document.getElementById("line26").style.animation = "fadeInRight 3s forwards";
    }, 76000);

    setTimeout(function() {
        document.getElementById("line27").style.animation = "fadeInLeft 3s forwards";
    }, 79000);

}

