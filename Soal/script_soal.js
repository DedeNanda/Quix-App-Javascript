//untuk next page pada setiap klik next
function simpanJawabanDanLanjut(nextPage) {
  // Mengecek pilihan yang dipilih
  let jawaban = null;
  if (document.getElementById("radioA").checked) {
    jawaban = "A";
  } else if (document.getElementById("radioB").checked) {
    jawaban = "B";
  } else if (document.getElementById("radioC").checked) {
    jawaban = "C";
  } else if (document.getElementById("radioD").checked) {
    jawaban = "D";
  }

  if (jawaban) {
    const soalNumber = nextPage.split("_")[1].split(".")[0] - 1; // Ambil nomor soal dari nama file
    localStorage.setItem(`soal_${soalNumber}`, jawaban); // Simpan jawaban di localStorage
    window.location.href = nextPage; // Arahkan ke soal berikutnya
  } else {
    alert("Pilih jawaban terlebih dahulu!");
  }
}

//skor
function hitungSkor() {
  const kunciJawaban = {
    soal_1: "D", // Jawaban benar untuk soal 1
    soal_2: "D", // Jawaban benar untuk soal 2
    soal_3: "B", // Jawaban benar untuk soal 3
    soal_4: "C", // Jawaban benar untuk soal 4
    soal_5: "A", // Jawaban benar untuk soal 5
  };

  let skor = 0;
  for (let i = 1; i <= 5; i++) {
    const jawabanUser = localStorage.getItem(`soal_${i}`);
    if (jawabanUser === kunciJawaban[`soal_${i}`]) {
      skor += 20; // Setiap jawaban benar bernilai 20
    }
  }

  //menghitung skor dan menampilkan skor dan detail_info
  const nilai_skor = document.getElementById("skor");
  const detailElement = document.getElementById("detail_info");
  nilai_skor.style.fontWeight = "bold";
  nilai_skor.style.fontSize = "30px";
  detailElement.style.fontWeight = "bold";

  let detail_info;
  if (skor <= 100 && skor >= 80) {
    detail_info = "Selamat Anda lulus";
    detailElement.style.color = "green";
  } else {
    detail_info = "Anda tidak lulus";
    detailElement.style.color = "red";
  }

  //menampilkan skor dan detail_info
  nilai_skor.textContent = `${skor}`;
  detailElement.textContent = `${detail_info}`;
}

window.onload = hitungSkor;
