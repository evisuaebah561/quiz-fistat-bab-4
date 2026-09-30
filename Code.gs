/**
 * Penerima hasil kuis -> Google Sheets (tersimpan di Google Drive).
 * Pasang lewat: Google Sheet > Extensions > Apps Script (skrip terikat ke spreadsheet).
 */
const SHEET_NAME = 'Hasil Kuis Bab 4';
const JUMLAH_SOAL = 20;

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    const d = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    if (sh.getLastRow() === 0) {
      const head = ['Waktu', 'Nama', 'NIM', 'Benar', 'Skor'];
      for (let i = 1; i <= JUMLAH_SOAL; i++) head.push('Q' + i);
      sh.appendRow(head);
      sh.setFrozenRows(1);
    }

    // NIM disimpan sebagai teks agar angka nol di depan tidak hilang
    const row = [new Date(), String(d.nama || ''), "'" + String(d.nim || ''),
                 Number(d.benar), Number(d.skor)].concat(d.jawaban || []);
    sh.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return ContentService.createTextOutput('Endpoint kuis aktif.');
}
