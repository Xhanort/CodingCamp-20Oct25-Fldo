/* ================== Bagian 1: Welcome Message (Poin 4) ================== */
/* Ini adalah fungsi Anda, sudah benar! 
   Ini akan langsung berjalan saat file script.js dimuat
*/
welcomeSpeech();

function welcomeSpeech() {
    /// Show prompt to ask for user's name
    let name = prompt("Enter your name:");

    // Cek jika user mengisi nama
    if (name) {
        // Greet the user with their name
        document.getElementById('greet-name').innerHTML = `Hi ${name}, `;
    } else {
        // Jika user tidak mengisi, pakai 'Guest'
        document.getElementById('greet-name').innerHTML = 'Hi Guest, ';
    }
}


/* ================== Bagian 2: Form Validation (Poin 5) ================== */
/* Bagian ini akan meng-handle semua logika untuk form "Message Us".
   Kita akan cari form-nya dan tambahkan "pendengar"
*/

// 1. Cari elemen <form> berdasarkan ID-nya
let messageForm = document.getElementById("message-form");

// 2. Tambahkan "pendengar" (event listener) untuk event "submit"
messageForm.addEventListener("submit", function(event) {
    
    // 3. MENCEGAH HALAMAN REFRESH! (Ini penting)
    event.preventDefault();

    // 4. Ambil semua nilai (value) dari setiap input
    //    (Perhatikan, kita pakai ID dari HTML, bukan 'email-input')
    let name = document.getElementById("name-input").value;
    let birthDate = document.getElementById("birth-date-input").value;
    let message = document.getElementById("message-input").value;
    
    // 4a. Ambil radio button yang sedang dicentang
    let genderRadio = document.querySelector('input[name="gender"]:checked');

    // 5. VALIDASI: Cek jika ada yang kosong
    if (name === "" || birthDate === "" || !genderRadio || message === "") {
        // Jika ada yang kosong, tampilkan alert dan hentikan fungsi
        alert("Semua field wajib diisi!");
        return; 
    }
    
    // 6. JIKA LOLOS VALIDASI:
    //    Ambil nilai 'value' dari gender (setelah yakin tidak null)
    let gender = genderRadio.value;

    // 7. Ambil div output
    let outputDiv = document.getElementById("form-output");
    
    // 8. Ambil waktu saat ini
    let currentTime = new Date().toLocaleString("id-ID");

    // 9. INI ADALAH "SHOW VALUE" (Poin 5)
    //    Masukkan HTML baru ke dalam div output, BUKAN alert
    outputDiv.innerHTML = `
        <p><strong>Current time:</strong> ${currentTime}</p>
        <hr>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${birthDate}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;

    // 10. (Opsional) Kosongkan form setelah berhasil submit
    messageForm.reset();
});