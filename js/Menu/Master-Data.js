// Master Data
function jenis_simpanan(){
    const body = document.querySelector(".body")
    const text = `
        <div class="container">
            <div class="title">
                <h1>Master Data</h1>
                <label>Jenis Simpanan</label>
            </div>
            <div class="table">
                <div class="table-title">
                    <label>Jenis Simpanan</label>
                </div>
                <div class="fiture">
                    <div class="add" onclick="Add_MD_Jenis_Simpanan()">
                        <img src="img/plus.gif" alt="">
                        <label>Tambah Jenis Simpanan</label>
                    </div>
                    <div class="print" onclick="Export('Jenis-Simpanan')"><img src="img/printer.gif"><label>Ekspor</label></div>       
                    <div class="print" onclick="form_cetak_table_masterdata()"><img src="img/printer.gif"><label>Cetak</label></div>       
                </div>
                <div class="table-content">
                <table class="table2">
                    <tbody>
                        <tr class="head">
                            <td>No</td>
                            <td>Jenis Simpanan</td>
                            <td>Kode Akun</td>
                            <td>Tampil</td>
                            <td class="edit">Edit</td>
                            <td class="delete">Delete</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>  
    `
    body.innerHTML = text

    const tablecontent = document.querySelector(".table2 tbody")
    let text2 = ""
    GetJenisSimpanan()
    .then((data) => {
        let No = 1;
        for (const content of data) {
            text2 += 
            `
            <tr>
                <td>${No}</td>
                <td>${content.Jenis_Simpanan}</td>
                <td>${content.Kode_Akun}</td>
                <td>${content.Tampil}</td>
                <td class="edit">
                    <img src="img/edit.gif" alt="" onclick="Update_MD_Jenis_Simpanan(event)">
                </td>
                <td class="delete">
                    <img src="img/bin.gif" alt="" onclick="Delete(event)">
                </td>
            </tr>
            `
            No++;
        }
        return text2
    })
    .then((data) => tablecontent.insertAdjacentHTML('beforeend', data))
    .catch((err) => console.log(err))
}
function jenis_akun(){
    const body = document.querySelector(".body")
    const text = `
        <div class="container">
            <div class="title">
                <h1>Master Data</h1>
                <label>Jenis Akun</label>
            </div>
            <div class="table">
                <div class="table-title">
                    <label>Jenis Akun</label>
                </div>
                <div class="fiture">
                    <div class="add" onclick="Add_MD_Jenis_Akun()">
                        <img src="img/plus.gif" alt="">
                        <label>Tambah Jenis Akun</label>
                    </div>
                    <div class="print" onclick="Export('Jenis-Akun')"><img src="img/printer.gif"><label>Ekspor</label></div>       
                    <div class="print" onclick="form_cetak_table_masterdata()"><img src="img/printer.gif"><label>Cetak</label></div>       
                </div>
                <div class="table-content">
                <table class="table2">
                    <tbody>
                        <tr class="head">
                            <td>ID(untuk import XLS)</td>
                            <td>Kode Aktiva</td>
                            <td>Jenis Transaksi</td>
                            <td>Akun</td>
                            <td>Pemasukan</td>
                            <td>Pengeluaran</td>
                            <td>Aktif</td>
                            <td>Laba/Rugi</td>
                            <td class="edit">Edit</td>
                            <td class="delete">Delete</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>  
    `
    body.innerHTML = text

    const tablecontent = document.querySelector(".table2 tbody")
    let text2 = ""
    GetJenisAkun()
    .then((data) => {
        for (const content of data) {
            text2 += 
            `
            <tr>
                <td>${content.ID}</td>
                <td>${content.Kode_Aktiva}</td>
                <td>${content.Jenis_Transaksi}</td>
                <td>${content.Akun}</td>
                <td>${content.Pemasukan}</td>
                <td>${content.Pengeluaran}</td>
                <td>${content.Aktif}</td>
                <td>${content.Laba_Rugi}</td>
                <td class="edit">
                    <img src="img/edit.gif" alt="" onclick="Update_MD_Jenis_Akun(event)">
                </td>
                <td class="delete">
                    <img src="img/bin.gif" alt="" onclick="Delete(event)">
                </td>
            </tr>
            `
        }
        return text2
    })
    .then((data) => tablecontent.insertAdjacentHTML('beforeend', data))
    .catch((err) => console.log(err))
}
function data_kas(){
    const body = document.querySelector(".body")
    const text = `
        <div class="container">
            <div class="title">
                <h1>Master Data</h1>
                <label>Data Kas</label>
            </div>
            <div class="table">
                <div class="table-title">
                    <label>Jenis Kas</label>
                </div>
                <div class="fiture">
                    <div class="add" onclick="Add_MD_Data_Kas()">
                        <img src="img/plus.gif" alt="">
                        <label>Tambah Jenis Kas</label>
                    </div>
                    <div class="print" onclick="Export('Data-Kas')"><img src="img/printer.gif"><label>Ekspor</label></div>       
                    <div class="print" onclick="form_cetak_table_masterdata()"><img src="img/printer.gif"><label>Cetak</label></div>       
                </div>
                <div class="table-content">
                <table class="table2">
                    <tbody>
                        <tr class="head">
                            <td>No</td>
                            <td>Nama Kas</td>
                            <td>Aktif</td>
                            <td>Simpanan</td>
                            <td>Penarikan</td>
                            <td>Pinjaman</td>
                            <td>Angsuran</td>
                            <td>Pemasukan Kas</td>
                            <td>Pengeluaran Kas</td>
                            <td>Transfer Kas</td>
                            <td class="edit">Edit</td>
                            <td class="delete">Delete</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>  
    `
    body.innerHTML = text

    const tablecontent = document.querySelector(".table2 tbody")
    let text2 = ""
    GetDataKas()
    .then((data) => {
        let No = 1;
        for (const content of data) {
            text2 += 
            `
            <tr>
                <td>${No}</td>
                <td>${content.Nama_Kas}</td>
                <td>${content.Aktif}</td>
                <td>${content.Simpanan}</td>
                <td>${content.Penarikan}</td>
                <td>${content.Pinjaman}</td>
                <td>${content.Angsuran}</td>
                <td>${content.Pemasukan_Kas}</td>
                <td>${content.Pengeluaran_Kas}</td>
                <td>${content.Transfer_Kas}</td>
                <td class="edit">
                    <img src="img/edit.gif" alt="" onclick="Update_MD_Data_Kas(event)">
                </td>
                <td class="delete">
                    <img src="img/bin.gif" alt="" onclick="Delete(event)">
                </td>
            </tr>
            `
            No++;
        }
        return text2
    })
    .then((data) => tablecontent.insertAdjacentHTML('beforeend', data))
    .catch((err) => console.log(err))
}
function lama_angsuran(){
    const body = document.querySelector(".body")
    const text = `
        <div class="container">
            <div class="title">
                <h1>Master Data</h1>
                <label>Lama Angsuran</label>
            </div>
            <div class="table">
                <div class="table-title">
                    <label>Lama Angsuran</label>
                </div>
                <div class="fiture">
                    <div class="add" onclick="Add_MD_Lama_Angsuran()">
                        <img src="img/plus.gif" alt="">
                        <label>Tambah Jenis Angsuran</label>
                    </div>
                    <div class="print" onclick="Export('Lama-Angsuran')"><img src="img/printer.gif"><label>Ekspor</label></div>       
                    <div class="print" onclick="form_cetak_table_masterdata()"><img src="img/printer.gif"><label>Cetak</label></div>       
                </div>
                <div class="table-content">
                <table class="table2">
                    <tbody>
                        <tr class="head">
                            <td>No</td>
                            <td>Lama Angsuran (Bulan)</td>
                            <td>Aktif</td>
                            <td class="edit">Edit</td>
                            <td class="delete">Delete</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>  
    `
    body.innerHTML = text
    const tablecontent = document.querySelector(".table2 tbody")
    let text2 = ""
    GetLamaAngsuran()
    .then((data) => {
        let No = 1;
        for (const content of data) {
            text2 += 
            `
            <tr>
                <td>${No}</td>
                <td>${content.Lama_Angsuran}</td>
                <td>${content.Aktif}</td>
                <td class="edit">
                    <img src="img/edit.gif" alt="" onclick="Update_MD_Lama_Angsuran(event)">
                </td>
                <td class="delete">
                    <img src="img/bin.gif" alt="" onclick="Delete(event)">
                </td>
            </tr>
            `
            No++;
        }
        return text2
    })
    .then((data) => tablecontent.insertAdjacentHTML('beforeend', data))
    .catch((err) => console.log(err))
}
function data_departemen(){
    const body = document.querySelector(".body")
    const text = `
        <div class="container">
            <div class="title">
                <h1>Master Data</h1>
                <label>Data Departemen</label>
            </div>
            <div class="table">
                <div class="table-title">
                    <label>Jenis Departemen</label>
                </div>
                <div class="fiture">
                    <div class="add" onclick="Add_MD_Data_Departemen()">
                        <img src="img/plus.gif" alt="">
                        <label>Tambah Jenis Departemen</label>
                    </div>
                    <div class="print" onclick="Export('Data-Departement')"><img src="img/printer.gif"><label>Ekspor</label></div>       
                    <div class="print" onclick="form_cetak_table_masterdata()"><img src="img/printer.gif"><label>Cetak</label></div>       
                </div>
                <div class="table-content">
                <table class="table2">
                    <tbody>
                        <tr class="head">
                            <td>No</td>
                            <td>Nama Departemen</td>
                            <td class="edit">Edit</td>
                            <td class="delete">Delete</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>  
    `
    body.innerHTML = text
    const tablecontent = document.querySelector(".table2 tbody")
    let text2 = ""
    GetDataDepartemen().then((data) => {
        let No = 1;
        for (const content of data) {
            text2 += 
            `
            <tr>
                <td>${No}</td>
                <td>${content.Nama_Departemen}</td>
                <td class="edit">
                    <img src="img/edit.gif" alt="" onclick="Update_MD_Data_Departemen(event)">
                </td>
                <td class="delete">
                    <img src="img/bin.gif" alt="" onclick="Delete(event)">
                </td>
            </tr>
            `
            No++;
        }
        return text2
    })
    .then((data) => tablecontent.insertAdjacentHTML('beforeend', data))
    .catch((err) => console.log(err))
}
function data_pekerjaan(){
    const body = document.querySelector(".body")
    const text = `
        <div class="container">
            <div class="title">
                <h1>Master Data</h1>
                <label>Data Pekerjaan</label>
            </div>
            <div class="table">
                <div class="table-title">
                    <label>Jenis Pekerjaan</label>
                </div>
                <div class="fiture">
                    <div class="add" onclick="Add_MD_Data_Pekerjaan()">
                        <img src="img/plus.gif" alt="">
                        <label>Tambah Jenis Departemen</label>
                    </div>
                    <div class="print" onclick="Export('Data-Pekerjaan')"><img src="img/printer.gif"><label>Ekspor</label></div>       
                    <div class="print" onclick="form_cetak_table_masterdata()"><img src="img/printer.gif"><label>Cetak</label></div>       
                </div>
                <div class="table-content">
                <table class="table2">
                    <tbody>
                        <tr class="head">
                            <td>No</td>
                            <td>Nama Pekerjaan</td>
                            <td class="edit">Edit</td>
                            <td class="delete">Delete</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>  
    `
    body.innerHTML = text

    const tablecontent = document.querySelector(".table2 tbody")
    let text2 = ""
    GetDataPekerjaan()
    .then((data) => {
        let No = 1;
        for (const content of data) {
            text2 += 
            `
            <tr>
                <td>${No}</td>
                <td>${content.Nama_Pekerjaan}</td>
                <td class="edit">
                    <img src="img/edit.gif" alt="" onclick="Update_MD_Data_Pekerjaan(event)">
                </td>
                <td class="delete">
                    <img src="img/bin.gif" alt="" onclick="Delete(event)">
                </td>
            </tr>
            `
            No++;
        }
        return text2
    })
    .then((data) => tablecontent.insertAdjacentHTML('beforeend', data))
    .catch((err) => console.log(err))
}
function data_barang(){
    const body = document.querySelector(".body")
    const text = `
        <div class="container">
            <div class="title">
                <h1>Master Data</h1>
                <label>Data Barang</label>
            </div>
            <div class="table">
                <div class="table-title">
                    <label>Jenis Barang</label>
                </div>
                <div class="fiture">
                    <div class="add" onclick="Add_MD_Data_Barang()">
                        <img src="img/plus.gif" alt="">
                        <label>Tambah Data Barang</label>
                    </div>
                    <div class="print" onclick="Export('Data-Barang')"><img src="img/printer.gif"><label>Ekspor</label></div>       
                    <div class="print" onclick="form_cetak_table_masterdata()"><img src="img/printer.gif"><label>Cetak</label></div>       
                </div>
                <div class="table-content">
                <table class="table2">
                    <tbody>
                        <tr class="head">
                            <td>No</td>
                            <td>Nama Barang</td>
                            <td>Type</td>
                            <td>Merk</td>
                            <td>Harga</td>
                            <td>Jumlah Barang</td>
                            <td>Ket</td>
                            <td class="edit">Edit</td>
                            <td class="delete">Delete</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>  
    `
    body.innerHTML = text

    const tablecontent = document.querySelector(".table2 tbody")
    let text2 = ""
    GetDataBarang()
    .then((data) => {
        let No = 1;
        for (const content of data) {
            text2 += 
            `
            <tr>
                <td>${No}</td>
                <td>${content.Nama_Barang}</td>
                <td>${content.Type}</td>
                <td>${content.Merk}</td>
                <td>${content.Harga}</td>
                <td>${content.Jumlah_Barang}</td>
                <td>${content.Ket}</td>
                <td class="edit">
                    <img src="img/edit.gif" alt="" onclick="Update_MD_Data_Barang(event)">
                </td>
                <td class="delete">
                    <img src="img/bin.gif" alt="" onclick="Delete(event)">
                </td>
            </tr>
            `
            No++;
        }
        return text2
    })
    .then((data) => tablecontent.insertAdjacentHTML('beforeend', data))
    .catch((err) => console.log(err))
}
function data_anggota_masterdata(){
    const body = document.querySelector(".body")
    const text = `
        <div class="container">
            <div class="title">
                <h1>Master Data</h1>
                <label>Data Anggota</label>
            </div>
            <div class="table">
                <div class="table-title">
                    <label>Data Anggota</label>
                </div>
                <div class="fiture">
                    <div class="add" onclick="Add_MD_Data_Anggota()">
                        <img src="img/plus.gif" alt="">
                        <label>Tambah Data Anggota</label>
                    </div>
                    <div class="print" onclick="Export('Data-Anggota')"><img src="img/printer.gif"><label>Ekspor</label></div>  
                    <div class='import'>
                        <input type="file" id="excelFile">
                        <button type="button" onclick="uploadExcel()">Import</button>
                    </div>     
                    <div class="print" onclick="form_cetak_table_masterdata()"><img src="img/printer.gif"><label>Cetak</label></div>       
                </div>
                <div class="table-content">
                <table class="table2">
                    <tbody>
                        <tr class="head">
                            <td>No</td>
                            <td>ID Anggota</td>
                            <td>Username</td>
                            <td>Nama Lengkap</td>
                            <td>Jenis Kelamin</td>
                            <td>Alamat</td>
                            <td>Kota</td>
                            <td>Jabatan</td>
                            <td>Departemen</td>
                            <td>Tanggal Registrasi</td>
                            <td>Aktif Keanggotaan</td>
                            <td class="edit">Edit</td>
                            <td class="delete">Delete</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>  
    `
    body.innerHTML = text

    const tablecontent = document.querySelector(".table2 tbody")
    let text2 = ""
    GetDataAnggota()
    .then((data) => {
        let No = 1;
        for (const content of data) {
            text2 += 
            `
            <tr>
                <td>${No}</td>
                <td>${content.ID_Anggota}</td>
                <td>${content.Username}</td>
                <td>${content.Nama_Lengkap}</td>
                <td>${content.JK}</td>
                <td>${content.Alamat}</td>
                <td>${content.Kota}</td>
                <td>${content.Jabatan}</td>
                <td>${content.Departemen}</td>
                <td>${content.Tgl_Registrasi}</td>
                <td>${content.Aktif_Keanggotaan}</td>
                <td class="edit">
                    <img src="img/edit.gif" alt="" onclick="Update_MD_Data_Anggota(event)">
                </td>
                <td class="delete">
                    <img src="img/bin.gif" alt="" onclick="Delete(event)">
                </td>
            </tr>
            `
            No++;
        }
        return text2
    })
    .then((data) => tablecontent.insertAdjacentHTML('beforeend', data))
    .catch((err) => console.log(err))
}
function data_pengguna(){
    let text2 = ""
    const body = document.querySelector(".body")
    const text = `
        <div class="container">
            <div class="title">
                <h1>Master Data</h1>
                <label>Data Pengguna</label>
            </div>
            <div class="table">
                <div class="table-title">
                    <label>Data User</label>
                </div>
                <div class="fiture">
                    <div class="add" onclick="Add_MD_Data_Pengguna()">
                        <img src="img/plus.gif" alt="">
                        <label>Tambah Data User</label>
                    </div>
                    <div class="print" onclick="Export('Data-Pengguna')"><img src="img/printer.gif"><label>Ekspor</label></div>       
                    <div class="print" onclick="form_cetak_table_masterdata()"><img src="img/printer.gif"><label>Cetak</label></div>       
                </div>
                <div class="table-content">
                <table class="table2">
                    <tbody>
                        <tr class="head">
                            <td>No</td>
                            <td>Username</td>
                            <td>Level</td>
                            <td>Aktif</td>
                            <td class="edit">Edit</td>
                            <td class="delete">Delete</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>  
    `
    body.innerHTML = text
    
    const tablecontent = document.querySelector(".table2 tbody")
    GetLogin()
    .then((data) => {
        let No = 1;
        for (const content of data) {
            text2 += 
            `
            <tr>
                <td>${No}</td>
                <td>${content.Username}</td>
                <td>${content.Level}</td>
                <td>${content.Aktif}</td>
                <td class="edit">
                    <img src="img/edit.gif" alt="" onclick="Update_MD_Data_Pengguna(event)">
                </td>
                <td class="delete">
                    <img src="img/bin.gif" alt="" onclick="Delete(event)">
                </td>
            </tr>
            `
            No++;
        }
        return text2
    })
    .then((data) => tablecontent.insertAdjacentHTML('beforeend', data))
    .catch((err) => console.log(err))
}