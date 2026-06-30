let total = 0;
let keranjang = [];

function tambahKeranjang(nama, harga){

    keranjang.push({
        nama:nama,
        harga:harga
    });

    total += harga;

    tampilkanKeranjang();
}

function tampilkanKeranjang(){

    const list = document.getElementById("listKeranjang");

    list.innerHTML = "";

    keranjang.forEach(item => {

        const li = document.createElement("li");

        li.innerHTML =
            item.nama +
            " - Rp " +
            item.harga.toLocaleString("id-ID");

        list.appendChild(li);

    });

    document.getElementById("total").innerText =
        total.toLocaleString("id-ID");
}

function checkout(){

    if(keranjang.length === 0){
        alert("Keranjang masih kosong");
        return;
    }

    alert(
        "Pesanan berhasil!\nTotal Rp " +
        total.toLocaleString("id-ID")
    );

    keranjang = [];
    total = 0;

    tampilkanKeranjang();
}