let total = 0;

function tambahPesanan(nama, harga) {
    total = total + harga;

    document.getElementById("isi-keranjang").innerHTML +=
        "<p>" + nama + " - Rp" + harga + "</p>";

    document.getElementById("total").innerHTML = "Rp" + total;
}

function checkout() {
    if (total == 0) {
        alert("Keranjang masih kosong!");
    } else {
        alert("Pesanan berhasil! Total pembayaran: Rp" + total);

        total = 0;
        document.getElementById("isi-keranjang").innerHTML = "";
        document.getElementById("total").innerHTML = "Rp0";
    }
}
