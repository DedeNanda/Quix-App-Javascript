//tombol selesai pada file soal_5.html
function Selesai(nextPage) {
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
    // Simpan jawaban soal ke-5
    localStorage.setItem(`soal_5`, jawaban);
    // Arahkan ke halaman info_skor.html untuk menampilkan skor
    window.location.href = nextPage;
  } else {
    alert("Pilih jawaban terlebih dahulu!");
  }
}
