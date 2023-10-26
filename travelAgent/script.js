document.getElementById("travelForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const kotaAsal = document.getElementById("kotaAsal").value;
    const tujuan = document.getElementById("tujuan").value;
    const hargaDewasa = parseFloat(document.getElementById("hargaDewasa").value);
    const hargaAnak = parseFloat(document.getElementById("hargaAnak").value);
    const jumlahDewasa = parseInt(document.getElementById("jumlahDewasa").value);
    const jumlahAnak = parseInt(document.getElementById("jumlahAnak").value);
    const member = document.getElementById("member").checked;
    const diskonKode = document.getElementById("diskonKode").value;

    let diskon = 0;
    diskon = 50; // Diskon 50%

    let totalHargaDewasa = hargaDewasa * jumlahDewasa;
    let totalHargaAnak = hargaAnak * jumlahAnak;
    let totalHarga = totalHargaDewasa + totalHargaAnak;

    if (member && jumlahAnak === 0) {
        const diskonAmount = (diskon / 100) * totalHarga;
        totalHarga -= diskonAmount;
    }

    if (diskonKode.toLowerCase() === "mahasiswa" && jumlahAnak === 0) {
        totalHarga *= 0.5;
    }

    document.getElementById("hargaTotal").value = totalHarga;
});
