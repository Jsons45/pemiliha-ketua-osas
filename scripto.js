var angka = 0


function tambah(){
    angka += 1
    document.getElementById("displayangka").innerText = angka
}
function kurangi(){
    angka -= 1
    document.getElementById("displayangka").innerText = angka
}

function save(){
    var angkasave = angka + "  |  "
    document.getElementById("save").textContent += angkasave
    displayangka.innerText = 0
    angka = 0
}

