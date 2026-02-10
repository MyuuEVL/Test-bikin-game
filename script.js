const kataList = [
  "BUNGA", "BUKIT", "KURSI", "LAPAR", "MERAH",
  "HUTAN", "SAKIT", "TENDA", "BATAS", "PINTU"
];

const kataRahasia = kataList[Math.floor(Math.random() * kataList.length)];
const maxTebakan = 6;
let baris = 0;

const grid = document.getElementById("grid");
const input = document.getElementById("input");
const pesan = document.getElementById("pesan");
const btnTebak = document.getElementById("btnTebak");

// Buat grid
for (let i = 0; i < maxTebakan * 5; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  grid.appendChild(box);
}

btnTebak.addEventListener("click", tebak);

function tebak() {
  const tebakan = input.value.toUpperCase();

  if (tebakan.length !== 5) {
    tampilPesan("❌ Kata harus 5 huruf!");
    return;
  }

  const startIndex = baris * 5;
  const kataArray = kataRahasia.split("");

  for (let i = 0; i < 5; i++) {
    const box = grid.children[startIndex + i];
    box.textContent = tebakan[i];

    if (tebakan[i] === kataRahasia[i]) {
      box.classList.add("benar");
    } else if (kataArray.includes(tebakan[i])) {
      box.classList.add("salah-posisi");
    } else {
      box.classList.add("tidak-ada");
    }
  }

  if (tebakan === kataRahasia) {
    tampilPopup("Gokil tebakan lu bener bro🎉", "Kata berhasil ditebak!");
selesai();

    return;
  }

  baris++;
  input.value = "";

  if (baris === maxTebakan) {
    tampilPopup("Haha nt bro😅", "Kata yang benar: " + kataRahasia);
selesai();

  }
}

function tampilPesan(teks) {
  pesan.textContent = teks;
}

function selesai() {
  input.disabled = true;
  btnTebak.disabled = true;
}

function tampilPopup(judul, teks) {
  document.getElementById("popup-title").textContent = judul;
  document.getElementById("popup-text").textContent = teks;
  document.getElementById("popup").style.display = "flex";
}

function cobaLagi() {
  location.reload();
}
