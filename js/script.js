
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("year").textContent =
        new Date().getFullYear();

    const tombolWA = document.getElementById("whatsappButton");

    const nomorWhatsApp = "6282340029572";

    tombolWA.addEventListener("click", function (event) {
        event.preventDefault();

        const pesan = encodeURIComponent(
            "Halo Banelle, saya ingin bertanya tentang keripik pisang manis dan asin."
        );

        const linkWA =
            "https://wa.me/" + nomorWhatsApp + "?text=" + pesan;

        window.open(linkWA, "_blank");
    });

});