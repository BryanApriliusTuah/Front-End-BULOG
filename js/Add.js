
async function Simpan(event){
    async function Simpan2(event){
        // Store Data
        const valueArray = []
    
        const parent = event.target.parentElement.parentElement
        const inputvalue = parent.querySelectorAll(".input")
    
        inputvalue.forEach((input)=>{
            if(input.querySelector('input') !== null){
                valueArray.push(input.querySelector('input').value);
            }else if(input.querySelector('select') !== null){
                valueArray.push(input.querySelector('select').value);
            }else {}
        })
    
        const header = parent.querySelector("header").textContent
        
        header == "Transaksi Kas - Pemasukan" ? (await PostPemasukan(valueArray),pemasukan()) : 
        header == "Transaksi Kas - Pengeluaran" ? (await PostPengeluaran(valueArray),pengeluaran()) : 
        header == "Transaksi Kas - Transfer" ? (await PostTransfer(valueArray),transfer()) : 
        header == "Simpanan - Setoran Anggota" ? (await PostSetoranAnggota(valueArray),setoran_anggota()) : 
        header == "Simpanan - Penarikan Simpanan" ? (await PostPenarikanSimpanan(valueArray),penarikan_simpanan()) : 
        header == "Pinjaman - Data Pinjaman" ? (await PostDataPinjaman(valueArray),data_pinjaman()) : 
        header == "Master Data - Jenis Simpanan" ? (await PostJenisSimpanan(valueArray[0], valueArray[1], valueArray[2]),jenis_simpanan()) : 
        header == "Master Data - Jenis Akun" ? (await PostJenisAkun(valueArray[0], valueArray[1], valueArray[2], valueArray[3], valueArray[4], valueArray[5], valueArray[6]),jenis_akun()) : 
        header == "Master Data - Data Kas" ? (await PostDataKas(valueArray[0], valueArray[1], valueArray[2], valueArray[3], valueArray[4], valueArray[5], valueArray[6], valueArray[7], valueArray[8]),data_kas()) : 
        header == "Master Data - Lama Angsuran" ? (await PostLamaAngsuran(valueArray[0], valueArray[1]),lama_angsuran()) : 
        header == "Master Data - Data Departemen" ? (await PostDataDepartemen(valueArray[0]),data_departemen()) : 
        header == "Master Data - Data Pekerjaan" ? (await PostDataPekerjaan(valueArray[0]),data_pekerjaan()) : 
        header == "Master Data - Data Barang" ? (await PostDataBarang(valueArray[0], valueArray[1], valueArray[2], valueArray[3], valueArray[4], valueArray[5]),data_barang()) : 
        header == "Master Data - Data Anggota" ? (await PostDataAnggota(valueArray[0],valueArray[1],valueArray[2],valueArray[3],valueArray[4],valueArray[5],valueArray[6],valueArray[7],valueArray[8]),data_anggota_masterdata()) : 
        header == "Master Data - Data Pengguna" ? (await PostLogin(valueArray[0],valueArray[1],valueArray[2],valueArray[3]),data_pengguna()) : ''
    }

    await Simpan2(event)
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
    icon: "success",
    title: "Data Added Successfully"
    });
}

// Transaksi Kas
function Add_TR_Pemasukan(){
    const addtext = document.querySelector(".body")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Transaksi Kas - Pemasukan</header>
            <div class="input">
                <label>Tanggal Transaksi</label>
                <input type="date">
            </div>
            <div class="input">
                <label>Jumlah</label>
                <input type="text">
            </div>
            <div class="input">
                <label>Keterangan</label>
                <input type="text">
            </div>
            <div class="input">
                <label>Dari Akun</label>
                <select name="" id="Dari-Akun">
                    <option value="" hidden>Pilih Dari Akun :</option>
                </select>
            </div>
            <div class="input">
                <label>Untuk Kas</label>
                <select name="" id="Untuk-Kas">
                    <option value="" hidden>Pilih Untuk Kas :</option>
                </select>
            </div>
            <div class="input">
                <label>User</label>
                <select name="" id="User">
                    <option value="" hidden>Pilih User :</option>
                </select>
            </div>
            <div class="submit">
                <button type="button" onclick="pemasukan()">Batal</button>
                <button type="button" onclick="Simpan(event)">Simpan</button>
            </div>
        </form>
    `
    GetJenisAkun().then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Pemasukan == 'Y'){
                content += `<option value="${element.Jenis_Transaksi}">${element.Jenis_Transaksi}</option>`
            }
        })
        const GeneratedDariAkun = document.querySelector("#Dari-Akun")
        GeneratedDariAkun.insertAdjacentHTML('beforeend', content)
    })
    GetDataKas().then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Pemasukan_Kas == 'Y'){
                content += `<option value="${element.Nama_Kas}">${element.Nama_Kas}</option>`
            }
        })
        const GeneratedUntukKas = document.querySelector("#Untuk-Kas")
        GeneratedUntukKas.insertAdjacentHTML('beforeend', content)
    })
    GetLogin().then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Aktif == 'Aktif'){
                content += `<option value="${element.Username} - ${element.Level}">${element.Username} - ${element.Level}</option>`
            }
        })
        const GeneratedUser = document.querySelector("#User")
        GeneratedUser.insertAdjacentHTML('beforeend', content)
    })
}
function Add_TR_Pengeluaran(){
    const addtext = document.querySelector(".body")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Transaksi Kas - Pengeluaran</header>
            <div class="input">
                <label>Tanggal Transaksi</label>
                <input type="date">
            </div>
            <div class="input">
                <label>Jumlah</label>
                <input type="text">
            </div>
            <div class="input">
                <label>Keterangan</label>
                <input type="text">
            </div>
            <div class="input">
                <label>Dari Akun</label>
                <select name="" id="Dari-Akun">
                    <option value="Generated" hidden>Pilih Dari Akun :</option>
                </select>
            </div>
            <div class="input">
                <label>Untuk Kas</label>
                <select name="" id="Untuk-Kas">
                    <option value="Generated" hidden>Pilih Untuk Kas :</option>
                </select>
            </div>
            <div class="input">
                <label>User</label>
                <select name="" id="User">
                    <option value="" hidden>Pilih User :</option>
                </select>
            </div>
            <div class="submit">
                <button type="button" onclick="pengeluaran()">Batal</button>
                <button type="button" onclick="Simpan(event)">Simpan</button>
            </div>
        </form>
    `
    GetJenisAkun().then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Pemasukan == 'Y'){
                content += `<option value="${element.Jenis_Transaksi}">${element.Jenis_Transaksi}</option>`
            }
        })
        const GeneratedDariAkun = document.querySelector("#Dari-Akun")
        GeneratedDariAkun.insertAdjacentHTML('beforeend', content)
    })
    GetDataKas().then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Pemasukan_Kas == 'Y'){
                content += `<option value="${element.Nama_Kas}">${element.Nama_Kas}</option>`
            }
        })
        const GeneratedUntukKas = document.querySelector("#Untuk-Kas")
        GeneratedUntukKas.insertAdjacentHTML('beforeend', content)
    })
    GetLogin().then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Aktif == 'Aktif'){
                content += `<option value="${element.Username} - ${element.Level}">${element.Username} - ${element.Level}</option>`
            }
        })
        const GeneratedUser = document.querySelector("#User")
        GeneratedUser.insertAdjacentHTML('beforeend', content)
    })
}
function Add_TR_Transfer(){
    const addtext = document.querySelector(".body")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Transaksi Kas - Transfer</header>
            <div class="input">
                <label>Tanggal Transaksi</label>
                <input type="date">
            </div>
            <div class="input">
                <label>Jumlah</label>
                <input type="text">
            </div>
            <div class="input">
                <label>Keterangan</label>
                <input type="text">
            </div>
            <div class="input">
                <label>Dari Akun</label>
                <select name="" id="Dari-Akun">
                    <option value="" hidden>Pilih Dari Akun :</option>
                </select>
            </div>
            <div class="input">
                <label>Untuk Kas</label>
                <select name="" id="Untuk-Kas">
                    <option value="" hidden>Pilih Untuk Kas :</option>
                </select>
            </div>
            <div class="input">
                <label>User</label>
                <select name="" id="User">
                    <option value="" hidden>Pilih User :</option>
                </select>
            </div>
            <div class="submit">
                <button type="button" onclick="transfer()">Batal</button>
                <button type="button" onclick="Simpan(event)">Simpan</button>
            </div>
        </form>
    `
    GetJenisAkun().then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Pemasukan == 'Y'){
                content += `<option value="${element.Jenis_Transaksi}">${element.Jenis_Transaksi}</option>`
            }
        })
        const GeneratedDariAkun = document.querySelector("#Dari-Akun")
        GeneratedDariAkun.insertAdjacentHTML('beforeend', content)
    })
    GetDataKas().then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Pemasukan_Kas == 'Y'){
                content += `<option value="${element.Nama_Kas}">${element.Nama_Kas}</option>`
            }
        })
        const GeneratedUntukKas = document.querySelector("#Untuk-Kas")
        GeneratedUntukKas.insertAdjacentHTML('beforeend', content)
    })
    GetLogin().then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Aktif == 'Aktif'){
                content += `<option value="${element.Username} - ${element.Level}">${element.Username} - ${element.Level}</option>`
            }
        })
        const GeneratedUser = document.querySelector("#User")
        GeneratedUser.insertAdjacentHTML('beforeend', content)
    })
}

// Simpanan
function Add_S_Setoran_Anggota(){
    const addtext = document.querySelector(".body")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Simpanan - Setoran Anggota</header>
            <div class="input">
                <label>Tanggal Transaksi</label>
                <input type="date">
            </div>
            <div class="input">
                <label>Nama Anggota</label>
                <select name="" id="Nama-Anggota">
                    <option value="" hidden>Pilih Nama Anggota</option>
                </select>
            </div>
            <div class="input">
                <label>Jenis Simpanan</label>
                <select name="" id="Jenis-Simpanan">
                    <option value="" hidden>Pilih Jenis Simpanan</option>
                </select>
            </div>
            <div class="input">
                <label>Jumlah Simpanan</label>
                <input type="text">
            </div>
            <div class="input">
                <label>Keterangan</label>
                <input type="text">
            </div>
            <div class="input">
                <label>Simpan Ke Kas</label>
                <select name="" id="Jenis-Akun">
                    <option value="" hidden>Pilih Simpan Kas :</option>
                </select>
            </div>
            <div class="input">
                <label>User</label>
                <select name="" id="User">
                    <option value="" hidden>Pilih User :</option>
                </select>
            </div>
            <div class="submit">
                <button type="button" onclick="setoran_anggota()">Batal</button>
                <button type="button" onclick="Simpan(event)">Simpan</button>
            </div>
        </form>
    `
    GetDataAnggota().then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Aktif_Keanggotaan == 'Aktif'){
                content += `<option value="${element.Nama_Lengkap}">${element.Username} - ${element.Nama_Lengkap}</option>`
            }
        })
        const GeneratedNamaAnggota = document.querySelector("#Nama-Anggota")
        GeneratedNamaAnggota.insertAdjacentHTML('beforeend', content)
    })
    GetJenisSimpanan().then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Tampil == 'Y'){
                content += `<option value="${element.Jenis_Simpanan}">${element.Jenis_Simpanan}</option>`
            }
        })
        const GeneratedJenisSimpanan = document.querySelector("#Jenis-Simpanan")
        GeneratedJenisSimpanan.insertAdjacentHTML('beforeend', content)
    })
    GetJenisAkun().then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Pemasukan == 'Y'){
                content += `<option value="${element.Jenis_Transaksi}">${element.Jenis_Transaksi}</option>`
            }
        })
        const GeneratedJenisAkun = document.querySelector("#Jenis-Akun")
        GeneratedJenisAkun.insertAdjacentHTML('beforeend', content)
    })
    GetLogin().then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Aktif == 'Aktif'){
                content += `<option value="${element.Username} - ${element.Level}">${element.Username} - ${element.Level}</option>`
            }
        })
        const GeneratedUser = document.querySelector("#User")
        GeneratedUser.insertAdjacentHTML('beforeend', content)
    })

}
function Add_S_Penarikan_Simpanan(){
    const addtext = document.querySelector(".body")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Simpanan - Penarikan Simpanan</header>
            <div class="input">
                <label>Tanggal Transaksi</label>
                <input type="date">
            </div>
            <div class="input">
                <label>Nama Anggota</label>
                <select name="" id="Nama-Anggota">
                    <option value="" hidden>Piih Nama Anggota :</option>
                </select>
            </div>
            <div class="input">
                <label>Jenis Simpanan</label>
                <select name="" id="Jenis-Simpanan">
                    <option value="" hidden>Pilih Jenis Simpanan :</option>
                </select>
            </div>
            <div class="input">
                <label>Jumlah Penarikan</label>
                <input type="text">
            </div>
            <div class="input">
                <label>Keterangan</label>
                <input type="text">
            </div>
            <div class="input">
                <label>Ambil Dari Kas</label>
                <select name="" id="Jenis-Akun">
                    <option value="" hidden>Pilih Jenis Kas :</option>
                </select>
            </div>
            <div class="input">
                <label>User</label>
                <select name="" id="User">
                    <option value="" hidden>Pilih User :</option>
                </select>
            </div>
            <div class="submit">
                <button type="button" onclick="penarikan_simpanan()">Batal</button>
                <button type="button" onclick="Simpan(event)">Simpan</button>
            </div>
        </form>
    `
    GetDataAnggota().then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Aktif_Keanggotaan == 'Aktif'){
                content += `<option value="${element.Nama_Lengkap}">${element.Username} - ${element.Nama_Lengkap}</option>`
            }
        })
        const GeneratedNamaAnggota = document.querySelector("#Nama-Anggota")
        GeneratedNamaAnggota.insertAdjacentHTML('beforeend', content)
    })
    GetJenisSimpanan().then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Tampil == 'Y'){
                content += `<option value="${element.Jenis_Simpanan}">${element.Jenis_Simpanan}</option>`
            }
        })
        const GeneratedJenisSimpanan = document.querySelector("#Jenis-Simpanan")
        GeneratedJenisSimpanan.insertAdjacentHTML('beforeend', content)
    })
    GetJenisAkun().then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Pemasukan == 'Y'){
                content += `<option value="${element.Jenis_Transaksi}">${element.Jenis_Transaksi}</option>`
            }
        })
        const GeneratedJenisAkun = document.querySelector("#Jenis-Akun")
        GeneratedJenisAkun.insertAdjacentHTML('beforeend', content)
    })
    GetLogin().then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Aktif == 'Aktif'){
                content += `<option value="${element.Username} - ${element.Level}">${element.Username} - ${element.Level}</option>`
            }
        })
        const GeneratedUser = document.querySelector("#User")
        GeneratedUser.insertAdjacentHTML('beforeend', content)
    })
}

// Pinjaman
function Add_P_Data_Pinjaman(){
    const addtext = document.querySelector(".body")
    addtext.innerHTML = 
    `
        <form class="form">
        <header>Pinjaman - Data Pinjaman</header>
            <div class="input">
                <label>Tanggal Pinjam</label>
                <input type="date">
            </div>
            <div class="input">
                <label>Nama Anggota</label>
                <select name="" id="Nama-Anggota">
                    <option value="" selected hidden>Pilih Nama Anggota :</option>
                </select>
            </div>
            <div class="input">
                <label>Nama Barang</label>
                <select name="" id="Nama-Barang" onchange="GantiHarga()">
                    <option value="" selected hidden>Pilih Nama Barang :</option>
                </select>
            </div>
            <div class="input">
                <label>Harga Barang</label>
                <input type="text"  id="Harga-Barang" value="" readonly="true" style="background:#2B4769; color:white;">
            </div>
            <div class="input">
                <label>Lama Angsuran</label>
                <select name="" id="Lama-Angsuran">
                    <option value="" selected hidden>Pilih Lama Angsuran :</option>
                </select>
            </div>
            <div class="input">
                <label>Bunga (%)</label>
                <input type="text" value="2%" readonly="true" style="background:#2B4769; color:white;">
            </div>
            <div class="input">
                <label>Biaya Admin (Rp)</label>
                <input type="text" value="20000" id="Biaya-Admin"readonly="true" style="background:#2B4769; color:white;">
            </div>
            <div class="input">
                <label>Ambil Dari Kas </label>
                <select name="" id="Ambil-Dari-Kas">
                    <option value="" selected hidden>Pilih Kas :</option>
                </select>
            </div>
            <div class="input">
                <label>Keterangan</label>
                <input type="text">
            </div>
            <div class="input">
                <label>User</label>
                <select name="" id="User">
                    <option value="" selected hidden>Pilih User :</option>
                </select>
            </div>
            <div class="submit">
                <button type="button" onclick="data_pinjaman()">Batal</button>
                <button type="button" onclick="Simpan(event)">Simpan</button>
            </div>
        </form>
    `

    GetBagiHasil().then((data) => {
        data = data[0]
        const BiayaAdmin = document.querySelector('#Biaya-Admin')
        BiayaAdmin.value = data.Biaya_Administrasi
    })
    GetDataAnggota().then((data) => {
        let content = ''
        const NamaAnggota = document.querySelector("#Nama-Anggota")
        data.forEach(element => {
            if(element.Aktif_Keanggotaan == 'Aktif'){
                content += `<option value="${element.Nama_Lengkap}">${element.Username} - ${element.Nama_Lengkap}</option>`
            }
        })
        NamaAnggota.insertAdjacentHTML('beforeend', content)
    })
    GetDataBarang().then((data) => {
        let content = ''
        const NamaBarang = document.querySelector("#Nama-Barang")
        data.forEach(element => {
            content += `<option value="${element.Nama_Barang}">${element.Nama_Barang} - Rp. ${element.Harga}</option>`
        })
        NamaBarang.insertAdjacentHTML('beforeend', content)
    })
    GetLamaAngsuran().then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Aktif = "Y"){
                content += `<option value="${element.Lama_Angsuran}">${element.Lama_Angsuran}</option>`
            }
        })
        const LamaAngsuran = document.querySelector("#Lama-Angsuran")
        LamaAngsuran.insertAdjacentHTML('beforeend', content)
    })
    GetJenisAkun().then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Pemasukan == 'Y'){
                content += `<option value="${element.Jenis_Transaksi}">${element.Jenis_Transaksi}</option>`
            }
        })
        const AmbilDariKas = document.querySelector("#Ambil-Dari-Kas")
        AmbilDariKas.insertAdjacentHTML('beforeend', content)
    })
    GetLogin().then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Aktif == 'Aktif'){
                content += `<option value="${element.Username} - ${element.Level}">${element.Username} - ${element.Level}</option>`
            }
        })
        const User = document.querySelector("#User")
        User.insertAdjacentHTML('beforeend', content)
    })
}
function GantiHarga(){
    const HargaBarang = document.querySelector("#Harga-Barang") 
    const NamaBarang = document.querySelector("#Nama-Barang").value

    GetDataBarang().then((data) => {
        data.forEach(element => {
            if(element.Nama_Barang == NamaBarang){
                HargaBarang.value = element.Harga
            }
        });
    })
}

// Master Data
function Add_MD_Jenis_Simpanan(){
    const addtext = document.querySelector(".body")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Master Data - Jenis Simpanan</header>
            <div class="input">
                <label>Jenis Simpanan</label>
                <input type="text">
            </div>
            <div class="input">
                <label>Kode Akun</label>
                <input type="text" placeholder="Contoh : 110-12">
            </div>
            <div class="input">
                <label>Tampil</label>
                <select name="" id="">
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="submit">
                <button type="button" onclick="jenis_simpanan()">Batal</button>
                <button type="button" onclick="Simpan(event)">Simpan</button>
            </div>
        </form>
    `
}
function Add_MD_Jenis_Akun(){
    const addtext = document.querySelector(".body")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Master Data - Jenis Akun</header>
            <div class="input">
                <label>Kode Aktiva</label>
                <input type="text">
            </div>
            <div class="input">
                <label>Jenis Transaksi</label>
                <input type="text">
            </div>
            <div class="input">
                <label>Akun</label>
                <select name="" id="">
                    <option value="Aktiva">Aktiva</option>
                    <option value="Pasiva">Pasiva</option>
                </select>
            </div>
            <div class="input">
                <label>Pemasukan</label>
                <select name="" id="">
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="input">
                <label>Pengeluaran</label>
                <select name="" id="">
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="input">
                <label>Aktif</label>
                <select name="" id="">
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="input">
                <label>Laba Rugi</label>
                <select name="" id="">
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="submit">
                <button type="button" onclick="jenis_akun()">Batal</button>
                <button type="button" onclick="Simpan(event)">Simpan</button>
            </div>
        </form>
    `
}
function Add_MD_Data_Kas(){
    const addtext = document.querySelector(".body")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Master Data - Data Kas</header>
            <div class="input">
                <label>Nama Kas</label>
                <input type="text">
            </div>
            <div class="input">
                <label>Aktif</label>
                <select name="" id="">
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="input">
                <label>Simpanan</label>
                <select name="" id="">
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="input">
                <label>Penarikan</label>
                <select name="" id="">
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="input">
                <label>Pinjaman</label>
                <select name="" id="">
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="input">
                <label>Angsuran</label>
                <select name="" id="">
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="input">
                <label>Pemasukan Kas</label>
                <select name="" id="">
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="input">
                <label>Pengeluaran Kas</label>
                <select name="" id="">
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="input">
                <label>Transfer Kas</label>
                <select name="" id="">
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="submit">
                <button type="button" onclick="data_kas()">Batal</button>
                <button type="button" onclick="Simpan(event)">Simpan</button>
            </div>
        </form>
    `
}
function Add_MD_Lama_Angsuran(){
    const addtext = document.querySelector(".body .container")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Master Data - Lama Angsuran</header>
            <div class="input">
                <label>Lama Angsuran</label>
                <input type="text">
            </div>
            <div class="input">
                <label>Aktif</label>
                <select name="" id="">
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="submit">
                <button type="button" onclick="lama_angsuran()">Batal</button>
                <button type="button" onclick="Simpan(event)">Simpan</button>
            </div>
        </form>
    `
}
function Add_MD_Data_Departemen(){
    const addtext = document.querySelector(".body")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Master Data - Data Departemen</header>
            <div class="input">
                <label>Nama Pekerjaan</label>
                <input type="text">
            </div>
            <div class="submit">
                <button type="button" onclick="data_departemen()">Batal</button>
                <button type="button" onclick="Simpan(event)">Simpan</button>
            </div>
        </form>
    `
}
function Add_MD_Data_Pekerjaan(){
    const addtext = document.querySelector(".body .container")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Master Data - Data Pekerjaan</header>
            <div class="input">
                <label>Nama Pekerjaan</label>
                <input type="text">
            </div>
            <div class="submit">
                <button type="button" onclick="data_pekerjaan()">Batal</button>
                <button type="button" onclick="Simpan(event)">Simpan</button>
            </div>
        </form>
    `
}
function Add_MD_Data_Barang(){
    const addtext = document.querySelector(".body")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Master Data - Data Barang</header>
            <div class="input">
                <label>Nama Barang</label>
                <input type="text">
            </div>
            <div class="input">
                <label>Type</label>
                <input type="text">
            </div>
            <div class="input">
                <label>Merk</label>
                <input type="text">
            </div>
            <div class="input">
                <label>Harga</label>
                <input type="text">
            </div>
            <div class="input">
                <label>Jumlah Barang</label>
                <input type="text">
            </div>
            <div class="input">
                <label>Keterangan</label>
                <input type="text">
            </div>
            <div class="submit">
                <button type="button" onclick="data_barang()">Batal</button>
                <button type="button" onclick="Simpan(event)">Simpan</button>
            </div>
        </form>
    `
}
function Add_MD_Data_Anggota(){
    const addtext = document.querySelector(".body .container ")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Master Data - Data Anggota</header>
            <div class="input">
                <label>Username</label>
                <input type="text" placeholder="Nama Panggilan">
            </div>
            <div class="input">
                <label>Nama Lengkap</label>
                <input type="text">
            </div>
            <div class="input">
                <label>Jenis Kelamin</label>
                <select name="" id="">
                    <option value="Laki-Laki">Laki-Laki</option>
                    <option value="Perempuan">Perempuan</option>
                </select>
            </div>
            <div class="input">
                <label>Alamat</label>
                <input type="text">
            </div>
            <div class="input">
                <label>Kota</label>
                <input type="text">
            </div>
            <div class="input">
                <label>Jabatan</label>
                <select name="" id="Jabatan">
                    <option value="" selected hidden>Pilih Jabatan :</option>
                </select>
            </div>
            <div class="input">
                <label>Departemen</label>
                <select name="" id="Departemen">
                    <option value="" selected hidden>Pilih Departemen : </option>
                </select>
            </div>
            <div class="input">
                <label>Tanggal Registrasi</label>
                <input type="date">
            </div>
            <div class="input">
                <label>Keaktifan</label>
                <select name="" id="">
                    <option value="Aktif">Aktif</option>
                    <option value="Non Aktif">Non Aktif</option>
                </select>
            </div>
            <div class="submit">
                <button type="button" onclick="data_anggota_masterdata()">Batal</button>
                <button type="button" onclick="Simpan(event)">Simpan</button>
            </div>
        </form>
    `
    GetDataPekerjaan().then((data) => {
        let content = ''
        data.forEach(element => {
            content += `<option value="${element.Nama_Pekerjaan}">${element.Nama_Pekerjaan}</option>`
        })
        const GeneratedDariAkun = document.querySelector("#Jabatan")
        GeneratedDariAkun.insertAdjacentHTML('beforeend', content)
    })
    GetDataDepartemen().then((data) => {
        let content = ''
        data.forEach(element => {
            content += `<option value="${element.Nama_Departemen}">${element.Nama_Departemen}</option>`
        })
        const GeneratedDariAkun = document.querySelector("#Departemen")
        GeneratedDariAkun.insertAdjacentHTML('beforeend', content)
    })
}
function Add_MD_Data_Pengguna(){
    const addtext = document.querySelector(".body .container")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Master Data - Data Pengguna</header>
            <div class="input">
                <label>Username</label>
                <input type="text">
            </div>
            <div class="input">
                <label>Password</label>
                <input type="text">
            </div>
            <div class="input">
                <label>Level</label>
                <select name="" id="">
                    <option value="Admin">Admin</option>
                    <option value="Operator">Operator</option>
                    <option value="Pinjaman">Pinjaman</option>
                </select>
            </div>
            <div class="input">
                <label>Aktif</label>
                <select name="" id="">
                    <option value="Aktif">Aktif</option>
                    <option value="Non Aktif">Non Aktif</option>
                </select>
            </div>
            <div class="submit">
                <button type="button" onclick="data_pengguna()">Batal</button>
                <button type="button" onclick="Simpan(event)">Simpan</button>
            </div>
        </form>
    `
}

async function Add_Identitas_Koperasi(event){
    const valueArray = []

    const parent = event.target.parentElement.parentElement
    const inputvalue = parent.querySelectorAll(".a")

    inputvalue.forEach((input)=>{
        if(input.querySelector('input') !== null){
            valueArray.push(input.querySelector('input').value);
        }
    })
    await PostIdentitasKoperasi(valueArray)
    beranda()
}

async function Add_Bagi_Hasil(event){
    const valueArray = []

    const parent = event.target.parentElement.parentElement
    const inputvalue = parent.querySelectorAll(".a")

    inputvalue.forEach((input)=>{
        if(input.querySelector('input') !== null){
            valueArray.push(input.querySelector('input').value);
        }
    })
    await PostBagiHasil(valueArray)
    beranda()
}