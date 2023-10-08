let nilai = 80;

if (nilai >= 90) {
  console.log("Selamat! Anda mendapatkan nilai A.");
} else if (nilai >= 80) {
  console.log("Anda mendapatkan nilai B.");
} else {
  console.log("Anda mendapatkan nilai C.");
}

let cuaca = "cerah";
let suhu = 28;

if (cuaca === "cerah") {
  if (suhu > 25) {
    console.log("Hari cerah dan panas.");
  } else {
    console.log("Hari cerah, tapi sejuk.");
  }
} else {
  console.log("Tidak ada info cuaca.");
}


let hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari kerja, mulai bekerja.");
    break;
  case "Selasa":
    console.log("Hari kerja, rapat pagi.");
    break;
  case "Rabu":
    console.log("Hari kerja, pelatihan.");
    break;
  default:
    console.log("Hari libur.");
}


for (let i = 1; i <= 5; i++) {
    console.log("Iterasi ke-" + i);
  }

  
  let counter = 0;

while (counter < 5) {
  console.log("Iterasi ke-" + counter);
  counter++;
}

let nilaiRandom;
do {
  nilaiRandom = Math.random();
  console.log("Nilai acak: " + nilaiRandom);
} while (nilaiRandom < 0.5);


function tambah(a, b) {
    return a + b;
  }
  
  function kali(a, b) {
    return a * b;
  }
  
  let hasilTambah = tambah(3, 4);
  console.log("Hasil penjumlahan: " + hasilTambah);
  
  let hasilKali = kali(2, 5);
  console.log("Hasil perkalian: " + hasilKali);
  