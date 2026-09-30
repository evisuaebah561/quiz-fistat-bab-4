# Kuis Fisika Statistik: Bab 4 (Menentukan Parameter β dan α)

20 soal pilihan ganda dari diktat *Pengantar Fisika Statistik untuk Mahasiswa* (M. Abdullah, ITB, 2007), Bab 4.
Halaman statis (`index.html`), hasil dikirim ke Google Sheets lewat Apps Script (`Code.gs`).

## 1. Siapkan penyimpanan hasil (Google Drive)
1. Buat Google Sheet baru di Drive, misalnya "Hasil Kuis Bab 4".
2. Menu **Extensions > Apps Script**, hapus isi bawaan, tempel isi `Code.gs`, simpan.
3. **Deploy > New deployment > Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Setujui izin akses, lalu salin URL Web App (berakhiran `/exec`).
5. Buka `index.html`, isi `CONFIG.ENDPOINT` dengan URL tersebut.

Setiap pengiriman menambah satu baris (Waktu, Nama, NIM, Benar, Skor, Q1..Q20).
Untuk file Excel: di Google Sheet pilih **File > Download > Microsoft Excel (.xlsx)**.

## 2. Publikasikan di GitHub
1. Buat repository baru, unggah `index.html` (dan `README.md`).
2. **Settings > Pages > Deploy from a branch > main / (root)**.
3. Tautan kuis: `https://<username>.github.io/<nama-repo>/`

## Catatan
- Kunci jawaban ada di kode halaman, jadi peserta yang membuka *view source* bisa melihatnya. Cukup untuk kuis latihan; untuk ujian resmi gunakan penilaian di sisi server.
- Setiap kali `Code.gs` diubah, buat **New deployment** (atau Manage deployments > Edit > New version) agar perubahan berlaku.
- Jika endpoint belum diisi, peserta tetap bisa mengerjakan dan mengunduh hasil sebagai CSV.
