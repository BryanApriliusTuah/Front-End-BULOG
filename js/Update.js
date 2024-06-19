async function Update(event){
    async function Update2(event){
        // Store Data
        const NewArrayValue = []
        const parent = event.target.parentElement.parentElement
        const inputvalue = parent.querySelectorAll(".input")
        inputvalue.forEach((input)=>{
            if(input.querySelector('input') !== null){
                NewArrayValue.push(input.querySelector('input').value);
            }else if(input.querySelector('select') !== null){
                NewArrayValue.push(input.querySelector('select').value);
            }else {}
        })
        const ArrayOldValue = window.valueArrayToUpdate;
        console.log("New Value : ", NewArrayValue)
        console.log("Old Value : ", ArrayOldValue)
    
    
        const header = parent.querySelector("header").textContent
        
        header == 'Transaksi Kas - Pemasukan' ? (await UpdatePemasukan(NewArrayValue,ArrayOldValue),pemasukan()) : 
        header == 'Transaksi Kas - Pengeluaran' ? (await UpdatePengeluaran(NewArrayValue,ArrayOldValue),pengeluaran()) : 
        header == 'Transaksi Kas - Transfer' ? (await UpdateTransfer(NewArrayValue,ArrayOldValue),transfer()) : 
        header == 'Simpanan - Setoran Anggota' ? (await UpdateSetoranAnggota(NewArrayValue,ArrayOldValue),setoran_anggota()) : 
        header == 'Simpanan - Penarikan Simpanan' ? (await UpdatePenarikanSimpanan(NewArrayValue, ArrayOldValue),penarikan_simpanan()) : 
        header == 'Pinjaman - Data Pinjaman' ? (await UpdateDataPinjaman(NewArrayValue, ArrayOldValue),data_pinjaman()) : 
        header == 'Pinjaman - Bayar Angsuran' ? (await UpdateBayarAngsuran(NewArrayValue, ArrayOldValue),bayar_angsuran()) : 
        header == 'Master Data - Jenis Simpanan' ? (await UpdateJenisSimpanan(NewArrayValue,ArrayOldValue),jenis_simpanan()) : 
        header == 'Master Data - Jenis Akun' ? (await UpdateJenisAkun(NewArrayValue,ArrayOldValue),jenis_akun()) : 
        header == 'Master Data - Data Kas' ? (await UpdateDataKas(NewArrayValue,ArrayOldValue),data_kas()) : 
        header == 'Master Data - Lama Angsuran' ? (await UpdateLamaAngsuran(NewArrayValue,ArrayOldValue),lama_angsuran()) : 
        header == 'Master Data - Data Departemen' ? (await UpdateDataDepartemen(NewArrayValue,ArrayOldValue),data_departemen()) : 
        header == 'Master Data - Data Pekerjaan' ? (await UpdateDataPekerjaan(NewArrayValue,ArrayOldValue),data_pekerjaan()) : 
        header == 'Master Data - Data Barang' ? (await UpdateDataBarang(NewArrayValue,ArrayOldValue),data_barang()) : 
        header == 'Master Data - Data Anggota' ? (await UpdateDataAnggota(NewArrayValue,ArrayOldValue),data_anggota_masterdata()) : 
        header == 'Master Data - Data Pengguna' ? (await UpdateLogin(NewArrayValue,ArrayOldValue),data_pengguna()) : ''
    }

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

    Swal.fire({
        title: "Confirm?",
        text: "Make sure everything is correct!",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Update"
    }).then(async (result) => {
        if(result.isConfirmed){
            await Update2(event)
            Toast.fire({
                icon: "success",
                title: "Data Updated Successfully"
            });
        }
    })
}

// Transaksi Kas
function Update_TR_Pemasukan(event){
    // Store Data
    const valueArray = []
    const parent = event.target.parentElement.parentElement
    const inputvalue = parent.querySelectorAll("td:not([class])")
    inputvalue.forEach(element => {
        valueArray.push(element.innerHTML)
    });
    // console.log(valueArray)
    window.valueArrayToUpdate = valueArray;

    const addtext = document.querySelector(".body")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Transaksi Kas - Pemasukan</header>
            <div class="input">
                <label>Tanggal Transaksi</label>
                <input type="date" value="${valueArray[2]}">
            </div>
            <div class="input">
                <label>Jumlah</label>
                <input type="text" value="${valueArray[6]}">
            </div>
            <div class="input">
                <label>Keterangan</label>
                <input type="text" value="${valueArray[3]}">
            </div>
            <div class="input">
                <label>Dari Akun</label>
                <select name="" id="Dari-Akun">
                    <option value="${valueArray[5]}" selected hidden>${valueArray[5]}</option>
                </select>
            </div>
            <div class="input">
                <label>Untuk Kas</label>
                <select name="" id="Untuk-Kas">
                    <option value="${valueArray[4]}" selected hidden>${valueArray[4]}</option>
                </select>
            </div>
            <div class="input">
                <label>User</label>
                <select name="" id="User">
                    <option value="${valueArray[7]}" selected hidden>${valueArray[7]}</option>
                </select>
            </div>
            <div class="submit">
                <button type="button" onclick="pemasukan()">Batal</button>
                <button type="button" onclick="Update(event)">Simpan</button>
            </div>
        </form>
    `

    const GeneratedDariAkun = document.querySelector("#Dari-Akun")
    const GeneratedUntukKas = document.querySelector("#Untuk-Kas")
    const GeneratedUser = document.querySelector("#User")
    GetJenisAkun()
    .then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Pemasukan == 'Y'){
                content += `<option value="${element.Jenis_Transaksi}">${element.Jenis_Transaksi}</option>`
            }
        })
        return content
    })
    .then((data) => {GeneratedDariAkun.insertAdjacentHTML('beforeend', data)})

    GetDataKas()
    .then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Pemasukan_Kas == 'Y'){
                content += `<option value="${element.Nama_Kas}">${element.Nama_Kas}</option>`
            }
        })
        return content
    })
    .then((data) => {GeneratedUntukKas.insertAdjacentHTML('beforeend', data)})
    GetLogin()
    .then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Aktif == 'Aktif'){
                content += `<option value="${element.Username} - ${element.Level}">${element.Username} - ${element.Level}</option>`
            }
        })
        return content
    })
    .then((data) => {GeneratedUser.insertAdjacentHTML('beforeend', data)})
}
function Update_TR_Pengeluaran(event){
    // Store Data
    const valueArray = []
    const parent = event.target.parentElement.parentElement
    const inputvalue = parent.querySelectorAll("td:not([class])")
    inputvalue.forEach(element => {
        valueArray.push(element.innerHTML)
    });
    // console.log(valueArray)
    window.valueArrayToUpdate = valueArray;

    const addtext = document.querySelector(".body")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Transaksi Kas - Pengeluaran</header>
            <div class="input">
                <label>Tanggal Transaksi</label>
                <input type="date" value="${valueArray[2]}">
            </div>
            <div class="input">
                <label>Jumlah</label>
                <input type="text" value="${valueArray[6]}">
            </div>
            <div class="input">
                <label>Keterangan</label>
                <input type="text" value="${valueArray[3]}">
            </div>
            <div class="input">
                <label>Dari Akun</label>
                <select name="" id="Dari-Akun">
                    <option value="${valueArray[5]}" selected hidden>${valueArray[5]}</option>
                </select>
            </div>
            <div class="input">
                <label>Untuk Kas</label>
                <select name="" id="Untuk-Kas">
                    <option value="${valueArray[4]}" selected hidden>${valueArray[4]}</option>
                </select>
            </div>
            <div class="input">
                <label>User</label>
                <select name="" id="User">
                    <option value="${valueArray[7]}" selected hidden>${valueArray[7]}</option>
                </select>
            </div>
            <div class="submit">
                <button type="button" onclick="pengeluaran()">Batal</button>
                <button type="button" onclick="Update(event)">Simpan</button>
            </div>
        </form>
    `
    const GeneratedDariAkun = document.querySelector("#Dari-Akun")
    const GeneratedUntukKas = document.querySelector("#Untuk-Kas")
    const GeneratedUser = document.querySelector("#User")
    GetJenisAkun()
    .then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Pemasukan == 'Y'){
                content += `<option value="${element.Jenis_Transaksi}">${element.Jenis_Transaksi}</option>`
            }
        })
        return content
    })
    .then((data) => {GeneratedDariAkun.insertAdjacentHTML('beforeend', data)})

    GetDataKas()
    .then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Pemasukan_Kas == 'Y'){
                content += `<option value="${element.Nama_Kas}">${element.Nama_Kas}</option>`
            }
        })
        return content
    })
    .then((data) => {GeneratedUntukKas.insertAdjacentHTML('beforeend', data)})
    GetLogin()
    .then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Aktif == 'Aktif'){
                content += `<option value="${element.Username} - ${element.Level}">${element.Username} - ${element.Level}</option>`
            }
        })
        return content
    })
    .then((data) => {GeneratedUser.insertAdjacentHTML('beforeend', data)})
}
function Update_TR_Transfer(event){
    // Store Data
    const valueArray = []
    const parent = event.target.parentElement.parentElement
    const inputvalue = parent.querySelectorAll("td:not([class])")
    inputvalue.forEach(element => {
        valueArray.push(element.innerHTML)
    });
    // console.log(valueArray)
    window.valueArrayToUpdate = valueArray;

    const addtext = document.querySelector(".body")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Transaksi Kas - Transfer</header>
            <div class="input">
                <label>Tanggal Transaksi</label>
                <input type="date" value="${valueArray[2]}">
            </div>
            <div class="input">
                <label>Jumlah</label>
                <input type="text" value="${valueArray[6]}">
            </div>
            <div class="input">
                <label>Keterangan</label>
                <input type="text" value="${valueArray[3]}">
            </div>
            <div class="input">
                <label>Dari Akun</label>
                <select name="" id="Dari-Akun">
                    <option value="${valueArray[5]}" selected hidden>${valueArray[5]}</option>
                </select>
            </div>
            <div class="input">
                <label>Untuk Kas</label>
                <select name="" id="Untuk-Kas">
                    <option value="${valueArray[4]}" selected hidden>${valueArray[4]}</option>
                </select>
            </div>
            <div class="input">
                <label>User</label>
                <select name="" id="User">
                    <option value="${valueArray[7]}" selected hidden>${valueArray[7]}</option>
                </select>
            </div>
            <div class="submit">
                <button type="button" onclick="transfer()">Batal</button>
                <button type="button" onclick="Update(event)">Simpan</button>
            </div>
        </form>
    `
    const GeneratedDariAkun = document.querySelector("#Dari-Akun")
    const GeneratedUntukKas = document.querySelector("#Untuk-Kas")
    const GeneratedUser = document.querySelector("#User")
    GetJenisAkun()
    .then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Pemasukan == 'Y'){
                content += `<option value="${element.Jenis_Transaksi}">${element.Jenis_Transaksi}</option>`
            }
        })
        return content
    })
    .then((data) => {GeneratedDariAkun.insertAdjacentHTML('beforeend', data)})

    GetDataKas()
    .then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Pemasukan_Kas == 'Y'){
                content += `<option value="${element.Nama_Kas}">${element.Nama_Kas}</option>`
            }
        })
        return content
    })
    .then((data) => {GeneratedUntukKas.insertAdjacentHTML('beforeend', data)})
    GetLogin()
    .then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Aktif == 'Aktif'){
                content += `<option value="${element.Username} - ${element.Level}">${element.Username} - ${element.Level}</option>`
            }
        })
        return content
    })
    .then((data) => {GeneratedUser.insertAdjacentHTML('beforeend', data)})
}

// Simpanan
function Update_S_SetoranAnggota(event){
    // Store Data
    const valueArray = []
    const parent = event.target.parentElement.parentElement
    const inputvalue = parent.querySelectorAll("td:not([class])")
    inputvalue.forEach(element => {
        valueArray.push(element.innerHTML)
    });
    // console.log(valueArray)
    window.valueArrayToUpdate = valueArray;

    const addtext = document.querySelector(".body")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Simpanan - Setoran Anggota</header>
            <div class="input">
                <label>Tanggal Transaksi</label>
                <input type="date" value="${valueArray[2]}">
            </div>
            <div class="input">
                <label>Nama Anggota</label>
                <select name="" id="Nama-Anggota">
                    <option value="${valueArray[4]}" selected hidden>${valueArray[4]}</option>
                </select>
            </div>
            <div class="input">
                <label>Jenis Simpanan</label>
                <select name="" id="Jenis-Simpanan">
                    <option value="${valueArray[6]}" selected hidden>${valueArray[6]}</option>
                </select>
            </div>
            <div class="input">
                <label>Jumlah Simpanan</label>
                <input type="text" value="${valueArray[7]}">
            </div>
            <div class="input">
                <label>Keterangan</label>
                <input type="text" value="${valueArray[8]}">
            </div>
            <div class="input">
                <label>Simpan Ke Kas</label>
                <select name="" id="Jenis-Akun">
                    <option value="${valueArray[9]}" selected hidden>${valueArray[9]}</option>
                </select>
            </div>
            <div class="input">
                <label>User</label>
                <select name="" id="User">
                    <option value="${valueArray[10]}" selected hidden>${valueArray[10]}</option>
                </select>
            </div>
            <div class="submit">
                <button type="button" onclick="setoran_anggota()">Batal</button>
                <button type="button" onclick="Update(event)">Simpan</button>
            </div>
        </form>
    `

    const GeneratedNamaAnggota = document.querySelector("#Nama-Anggota")
    const GeneratedJenisSimpanan = document.querySelector("#Jenis-Simpanan")
    const GeneratedJenisAkun = document.querySelector("#Jenis-Akun")
    const GeneratedUser = document.querySelector("#User")
    GetDataAnggota()
    .then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Aktif_Keanggotaan == 'Aktif'){
                content += `<option value="${element.Nama_Lengkap}">${element.Username} - ${element.Nama_Lengkap}</option>`
            }
        })
        return content
    })
    .then((data) => {GeneratedNamaAnggota.insertAdjacentHTML('beforeend', data)})

    GetJenisSimpanan()
    .then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Tampil == 'Y'){
                content += `<option value="${element.Jenis_Simpanan}">${element.Jenis_Simpanan}</option>`
            }
        })
        return content
    })
    .then((data) => {GeneratedJenisSimpanan.insertAdjacentHTML('beforeend', data)})

    GetJenisAkun()
    .then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Pemasukan == 'Y'){
                content += `<option value="${element.Jenis_Transaksi}">${element.Jenis_Transaksi}</option>`
            }
        })
        return content
    })
    .then((data) => {GeneratedJenisAkun.insertAdjacentHTML('beforeend', data)})

    GetLogin()
    .then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Aktif == 'Aktif'){
                content += `<option value="${element.Username} - ${element.Level}">${element.Username} - ${element.Level}</option>`
            }
        })
        return content
    })
    .then((data) => {GeneratedUser.insertAdjacentHTML('beforeend', data)})
}
function Update_S_PenarikanSimpanan(event){
    // Store Data
    const valueArray = []
    const parent = event.target.parentElement.parentElement
    const inputvalue = parent.querySelectorAll("td:not([class])")
    inputvalue.forEach(element => {
        valueArray.push(element.innerHTML)
    });
    // console.log(valueArray)
    window.valueArrayToUpdate = valueArray;

    const addtext = document.querySelector(".body")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Simpanan - Penarikan Simpanan</header>
            <div class="input">
                <label>Tanggal Transaksi</label>
                <input type="date" value="${valueArray[2]}">
            </div>
            <div class="input">
                <label>Nama Anggota</label>
                <select name="" id="Nama-Anggota">
                    <option value="${valueArray[4]}" selected hidden>${valueArray[4]}</option>
                </select>
            </div>
            <div class="input">
                <label>Jenis Simpanan</label>
                <select name="" id="Jenis-Simpanan">
                    <option value="${valueArray[6]}" selected hidden>${valueArray[6]}</option>
                </select>
            </div>
            <div class="input">
                <label>Saldo Sekarang</label>
                <input type="text">
            </div>
            <div class="input">
                <label>Jumlah Penarikan</label>
                <input type="text" value="${valueArray[7]}">
            </div>
            <div class="input">
                <label>Keterangan</label>
                <input type="text" value="${valueArray[8]}">
            </div>
            <div class="input">
                <label>Ambil Dari Kas</label>
                <select name="" id="Jenis-Akun">
                    <option value="${valueArray[9]}" selected hidden>${valueArray[9]}</option>
                </select>
            </div>
            <div class="input">
                <label>User</label>
                <select name="" id="User">
                    <option value="${valueArray[10]}" selected hidden>${valueArray[10]}</option>
                </select>
            </div>
            <div class="submit">
                <button type="button" onclick="penarikan_simpanan()">Batal</button>
                <button type="button" onclick="Update(event)">Simpan</button>
            </div>
        </form>
    `

    const GeneratedNamaAnggota = document.querySelector("#Nama-Anggota")
    const GeneratedJenisSimpanan = document.querySelector("#Jenis-Simpanan")
    const GeneratedJenisAkun = document.querySelector("#Jenis-Akun")
    const GeneratedUser = document.querySelector("#User")
    GetDataAnggota()
    .then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Aktif_Keanggotaan == 'Aktif'){
                content += `<option value="${element.Nama_Lengkap}">${element.Username} - ${element.Nama_Lengkap}</option>`
            }
        })
        return content
    })
    .then((data) => {GeneratedNamaAnggota.insertAdjacentHTML('beforeend', data)})

    GetJenisSimpanan()
    .then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Tampil == 'Y'){
                content += `<option value="${element.Jenis_Simpanan}">${element.Jenis_Simpanan}</option>`
            }
        })
        return content
    })
    .then((data) => {GeneratedJenisSimpanan.insertAdjacentHTML('beforeend', data)})

    GetJenisAkun()
    .then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Pemasukan == 'Y'){
                content += `<option value="${element.Jenis_Transaksi}">${element.Jenis_Transaksi}</option>`
            }
        })
        return content
    })
    .then((data) => {GeneratedJenisAkun.insertAdjacentHTML('beforeend', data)})

    GetLogin()
    .then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Aktif == 'Aktif'){
                content += `<option value="${element.Username} - ${element.Level}">${element.Username} - ${element.Level}</option>`
            }
        })
        return content
    })
    .then((data) => {GeneratedUser.insertAdjacentHTML('beforeend', data)})
}

// Pinjaman
async function Update_Data_Pinjaman(event){
    // Store Data
    const valueArray = []
    const parent = event.target.parentElement.parentElement
    const inputvalue = parent.querySelectorAll("td:not([class])")
    inputvalue.forEach(element => {
        valueArray.push(element.innerHTML)
    });
    window.valueArrayToUpdate = valueArray;

    const addtext = document.querySelector(".body")
    const SukuBunga = await GetBagiHasil().then((data) => {return data[0].Suku_Bunga})
    const BiayaAdmin = await GetBagiHasil().then((data) => {return data[0].Biaya_Administrasi})
    addtext.innerHTML = 
    `
        <form class="form">
        <header>Pinjaman - Data Pinjaman</header>
            <div class="input">
                <label>Tanggal Pinjam</label>
                <input type="date" value="${valueArray[2]}">
            </div>
            <div class="input">
                <label>Nama Anggota</label>
                <select name="" id="Nama-Anggota">
                    <option value="${valueArray[9]}" selected hidden>${valueArray[9]}</option>
                </select>
            </div>
            <div class="input">
                <label>Nama Barang</label>
                <select name="" id="Nama-Barang" onchange="GantiHarga()">
                    <option value="${valueArray[19]}" selected hidden>${valueArray[19]}</option>
                </select>
            </div>
            <div class="input">
                <label>Harga Barang</label>
                <input type="text"  id="Harga-Barang" value="${valueArray[22]}" readonly="true" style="background:#2B4769; color:white;">
            </div>
            <div class="input">
                <label>Lama Angsuran</label>
                <select name="" id="Lama-Angsuran">
                    <option value="${valueArray[25]}" selected hidden>${valueArray[25]}</option>
                </select>
            </div>
            <div class="input">
                <label>Bunga (%)</label>
                <input type="text" value="${SukuBunga}%" readonly="true" style="background:#2B4769; color:white;">
            </div>
            <div class="input">
                <label>Biaya Admin (Rp)</label>
                <input type="text" value="${BiayaAdmin}" readonly="true" style="background:#2B4769; color:white;">
            </div>
            <div class="input">
                <label>Ambil Dari Kas </label>
                <select name="" id="Ambil-Dari-Kas">
                    <option value="${valueArray[57]}" selected hidden>${valueArray[57]}</option>
                </select>
            </div>
            <div class="input">
                <label>Keterangan</label>
                <input type="text" value="">
            </div>
            <div class="input">
                <label>User</label>
                <select name="" id="User">
                    <option value="${valueArray[58]}" selected hidden>${valueArray[58]}</option>
                </select>
            </div>
            <div class="submit">
                <button type="button" onclick="data_pinjaman()">Batal</button>
                <button type="button" onclick="Update(event)">Simpan</button>
            </div>
        </form>
    `
    
    const NamaAnggota = document.querySelector("#Nama-Anggota")
    const NamaBarang = document.querySelector("#Nama-Barang")
    const LamaAngsuran = document.querySelector("#Lama-Angsuran")
    const AmbilDariKas = document.querySelector("#Ambil-Dari-Kas")
    const User = document.querySelector("#User")

    GetDataAnggota()
    .then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Aktif_Keanggotaan == 'Aktif'){
                content += `<option value="${element.Nama_Lengkap}">${element.Username} - ${element.Nama_Lengkap}</option>`
            }
        })
        return content
    })
    .then((data) => {NamaAnggota.insertAdjacentHTML('beforeend', data)})

    GetDataBarang()
    .then((data) => {
        let content = ''
        data.forEach(element => {
            content += `<option value="${element.Nama_Barang}">${element.Nama_Barang} - ${element.Harga}</option>`
        })
        return content
    })
    .then((data) => {NamaBarang.insertAdjacentHTML('beforeend', data)})

    GetLamaAngsuran()
    .then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Aktif = "Y"){
                content += `<option value="${element.Lama_Angsuran}">${element.Lama_Angsuran}</option>`
            }
        })
        return content
    })
    .then((data) => {LamaAngsuran.insertAdjacentHTML('beforeend', data)})

    GetJenisAkun()
    .then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Pemasukan == 'Y'){
                content += `<option value="${element.Jenis_Transaksi}">${element.Jenis_Transaksi}</option>`
            }
        })
        return content
    })
    .then((data) => {AmbilDariKas.insertAdjacentHTML('beforeend', data)})

    GetLogin()
    .then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Aktif == 'Aktif'){
                content += `<option value="${element.Username} - ${element.Level}">${element.Username} - ${element.Level}</option>`
            }
        })
        return content
    })
    .then((data) => {User.insertAdjacentHTML('beforeend', data)})
}

async function Update_Bayar_Angsuran(event){
    // Store Data
    const valueArray = []
    const parent = event.currentTarget.parentElement.parentElement.parentElement.parentElement
    const inputvalue = parent.querySelectorAll("td:not([class])")
    inputvalue.forEach(element => {
        valueArray.push(element.innerHTML)
    });
    // console.log(valueArray)

    const UniqKode = event.currentTarget.parentElement.parentElement.parentElement.parentElement.querySelector('td:nth-child(2)').textContent
    const Bulan = event.currentTarget.querySelector('td:first-child').textContent
    valueArray.push(UniqKode, Bulan)
    window.valueArrayToUpdate = valueArray;

    const addtext = document.querySelector(".body")
    addtext.innerHTML = `
    <form class="form">
        <header>Pinjaman - Bayar Angsuran</header>
        <div class="input">
            <label>Tanggal Pinjam</label>
            <input type="date" value="${valueArray[2]}" readonly="true" style="background:#2B4769; color:white;">
        </div>
        <div class="input">
            <label>Nama Anggota</label>
            <input type="text" value="${valueArray[3]}" readonly="true" style="background:#2B4769; color:white;">
        </div>
        <div class="input">
            <label>Angsuran</label>
            <input type="text" value="${valueArray[9]}" readonly="true" style="background:#2B4769; color:white;">
        </div>
        <div class="input">
            <label>Bulan</label>
            <input type="date" value="${Bulan}" readonly="true" style="background:#2B4769; color:white;">
        </div>
        <div class="input">
                <label>Simpan Ke Kas</label>
                <select name="" id="Untuk-Kas">
                    <option value="" selected hidden>Pilih Kas :</option>
                </select>
            </div>
        <div class="submit">
            <button type="button" onclick="bayar_angsuran()">Batal</button>
            <button type="button" onclick="Update(event)">Bayar</button>
        </div>
    </form>
    `

    const GeneratedUntukKas = document.querySelector("#Untuk-Kas")
    GetDataKas()
    .then((data) => {
        let content = ''
        data.forEach(element => {
            if(element.Pemasukan_Kas == 'Y'){
                content += `<option value="${element.Nama_Kas}">${element.Nama_Kas}</option>`
            }
        })
        return content
    })
    .then((data) => {GeneratedUntukKas.insertAdjacentHTML('beforeend', data)})
    // let Arr = []
    // Arr.push(UniqKode,Bulan)
    // await UpdateBayarAngsuran(Arr)
    // bayar_angsuran()
}

// Master Data
function Update_MD_Jenis_Simpanan(event){
    // Store Data
    const valueArray = []
    const parent = event.target.parentElement.parentElement
    const inputvalue = parent.querySelectorAll("td:not([class])")
    inputvalue.forEach(element => {
        valueArray.push(element.innerHTML)
    });
    // console.log(valueArray)
    window.valueArrayToUpdate = valueArray;

    const addtext = document.querySelector(".body")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Master Data - Jenis Simpanan</header>
            <div class="input">
                <label>Jenis Simpanan</label>
                <input type="text" value="${valueArray[1]}">
            </div>
            <div class="input">
                <label>Jumlah</label>
                <input type="text" value="${valueArray[2]}">
            </div>
            <div class="input">
                <label>Tampil</label>
                <select name="" id="">
                    <option value="" disabled selected hidden>Pilih Tampil : </option>
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="submit">
                <button type="button" onclick="jenis_simpanan()">Batal</button>
                <button type="button" onclick="Update(event)">Simpan</button>
            </div>
        </form>
    `
}
function Update_MD_Jenis_Akun(event){
    // Store Data
    const valueArray = []
    const parent = event.target.parentElement.parentElement
    const inputvalue = parent.querySelectorAll("td:not([class])")
    inputvalue.forEach(element => {
        valueArray.push(element.innerHTML)
    });
    console.log(valueArray)
    window.valueArrayToUpdate = valueArray;

    const addtext = document.querySelector(".body")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Master Data - Jenis Akun</header>
            <div class="input">
                <label>Kode Aktiva</label>
                <input type="text" value="${valueArray[1]}">
            </div>
            <div class="input">
                <label>Jenis Transaksi</label>
                <input type="text" value="${valueArray[2]}">
            </div>
            <div class="input">
                <label>Akun</label>
                <select name="" id="">
                    <option value="${valueArray[3]}" selected hidden>${valueArray[3]}</option>
                    <option value="Aktiva">Aktiva</option>
                    <option value="Pasiva">Pasiva</option>
                </select>
            </div>
            <div class="input">
                <label>Pemasukan</label>
                <select name="" id="">
                    <option value="${valueArray[4]}" selected hidden>${valueArray[4]}</option>
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="input">
                <label>Pengeluaran</label>
                <select name="" id="">
                    <option value="${valueArray[5]}" selected hidden>${valueArray[5]}</option>
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="input">
                <label>Aktif</label>
                <select name="" id="">
                    <option value="${valueArray[6]}" selected hidden>${valueArray[6]}</option>
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="input">
                <label>Laba Rugi</label>
                <select name="" id="">
                    <option value="${valueArray[7]}" selected hidden>${valueArray[7]}</option>
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="submit">
                <button type="button" onclick="jenis_akun()">Batal</button>
                <button type="button" onclick="Update(event)">Simpan</button>
            </div>
        </form>
    `
}
function Update_MD_Data_Kas(event){
    // Store Data
    const valueArray = []
    const parent = event.target.parentElement.parentElement
    const inputvalue = parent.querySelectorAll("td:not([class])")
    inputvalue.forEach(element => {
        valueArray.push(element.innerHTML)
    });
    // console.log(valueArray)
    window.valueArrayToUpdate = valueArray;

    const addtext = document.querySelector(".body")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Master Data - Data Kas</header>
            <div class="input">
                <label>Nama Kas</label>
                <input type="text" value="${valueArray[1]}">
            </div>
            <div class="input">
                <label>Aktif</label>
                <select name="" id="">
                    <option value="${valueArray[2]}" selected hidden>${valueArray[2]}</option>
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="input">
                <label>Simpanan</label>
                <select name="" id="">
                    <option value="${valueArray[3]}" selected hidden>${valueArray[3]}</option>
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="input">
                <label>Penarikan</label>
                <select name="" id="">
                    <option value="${valueArray[4]}" selected hidden>${valueArray[4]}</option>
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="input">
                <label>Pinjaman</label>
                <select name="" id="">
                    <option value="${valueArray[5]}" selected hidden>${valueArray[5]}</option>
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="input">
                <label>Angsuran</label>
                <select name="" id="">
                    <option value="${valueArray[6]}" selected hidden>${valueArray[6]}</option>
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="input">
                <label>Pemasukan Kas</label>
                <select name="" id="">
                    <option value="${valueArray[7]}" selected hidden>${valueArray[7]}</option>
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="input">
                <label>Pengeluaran Kas</label>
                <select name="" id="">
                    <option value="${valueArray[8]}" selected hidden>${valueArray[8]}</option>
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="input">
                <label>Transfer Kas</label>
                <select name="" id="">
                    <option value="${valueArray[9]}" selected hidden>${valueArray[9]}</option>
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="submit">
                <button type="button" onclick="data_kas()">Batal</button>
                <button type="button" onclick="Update(event)">Simpan</button>
            </div>
        </form>
    `
}
function Update_MD_Lama_Angsuran(event){
    // Store Data
    const valueArray = []
    const parent = event.target.parentElement.parentElement
    const inputvalue = parent.querySelectorAll("td:not([class])")
    inputvalue.forEach(element => {
        valueArray.push(element.innerHTML)
    });
    // console.log(valueArray)
    window.valueArrayToUpdate = valueArray;

    const addtext = document.querySelector(".body")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Master Data - Lama Angsuran</header>
            <div class="input">
                <label>Lama Angsuran</label>
                <input type="text" value="${valueArray[1]}">
            </div>
            <div class="input">
                <label>Aktif</label>
                <select name="" id="">
                    <option value="${valueArray[2]}" selected hidden>${valueArray[2]}</option>
                    <option value="Y">Y</option>
                    <option value="T">T</option>
                </select>
            </div>
            <div class="submit">
                <button type="button" onclick="lama_angsuran()">Batal</button>
                <button type="button" onclick="Update(event)">Simpan</button>
            </div>
        </form>
    `
}
function Update_MD_Data_Departemen(event){
    // Store Data
    const valueArray = []
    const parent = event.target.parentElement.parentElement
    const inputvalue = parent.querySelectorAll("td:not([class])")
    inputvalue.forEach(element => {
        valueArray.push(element.innerHTML)
    });
    // console.log(valueArray)
    window.valueArrayToUpdate = valueArray;

    const addtext = document.querySelector(".body")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Master Data - Data Departemen</header>
            <div class="input">
                <label>Nama Pekerjaan</label>
                <input type="text" value="${valueArray[1]}">
            </div>
            <div class="submit">
                <button type="button" onclick="data_departemen()">Batal</button>
                <button type="button" onclick="Update(event)">Simpan</button>
            </div>
        </form>
    `
}
function Update_MD_Data_Pekerjaan(event){
    // Store Data
    const valueArray = []
    const parent = event.target.parentElement.parentElement
    const inputvalue = parent.querySelectorAll("td:not([class])")
    inputvalue.forEach(element => {
        valueArray.push(element.innerHTML)
    });
    // console.log(valueArray)
    window.valueArrayToUpdate = valueArray;

    const addtext = document.querySelector(".body")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Master Data - Data Pekerjaan</header>
            <div class="input">
                <label>Nama Pekerjaan</label>
                <input type="text" value="${valueArray[1]}">
            </div>
            <div class="submit">
                <button type="button" onclick="data_pekerjaan()">Batal</button>
                <button type="button" onclick="Update(event)">Simpan</button>
            </div>
        </form>
    `
}
function Update_MD_Data_Barang(event){
    // Store Data
    const valueArray = []
    const parent = event.target.parentElement.parentElement
    const inputvalue = parent.querySelectorAll("td:not([class])")
    inputvalue.forEach(element => {
        valueArray.push(element.innerHTML)
    });
    // console.log(valueArray)
    window.valueArrayToUpdate = valueArray;

    const addtext = document.querySelector(".body")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Master Data - Data Barang</header>
            <div class="input">
                <label>Nama Barang</label>
                <input type="text" value="${valueArray[1]}">
            </div>
            <div class="input">
                <label>Type</label>
                <input type="text" value="${valueArray[2]}">
            </div>
            <div class="input">
                <label>Merk</label>
                <input type="text" value="${valueArray[3]}">
            </div>
            <div class="input">
                <label>Harga</label>
                <input type="text" value="${valueArray[4]}">
            </div>
            <div class="input">
                <label>Jumlah Barang</label>
                <input type="text" value="${valueArray[5]}">
            </div>
            <div class="input">
                <label>Keterangan</label>
                <input type="text" value="${valueArray[6]}">
            </div>
            <div class="submit">
                <button type="button" onclick="data_barang()">Batal</button>
                <button type="button" onclick="Update(event)">Simpan</button>
            </div>
        </form>
    `
}
function Update_MD_Data_Anggota(event){
    // Store Data
    const valueArray = []
    const parent = event.target.parentElement.parentElement
    const inputvalue = parent.querySelectorAll("td:not([class])")
    inputvalue.forEach(element => {
        valueArray.push(element.innerHTML)
    });
    // console.log(valueArray)
    window.valueArrayToUpdate = valueArray;

    const addtext = document.querySelector(".body")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Master Data - Data Anggota</header>
            <div class="input">
                <label>Username</label>
                <input type="text" value="${valueArray[2]}">
            </div>
            <div class="input">
                <label>Nama Lengkap</label>
                <input type="text" value="${valueArray[3]}">
            </div>
            <div class="input">
                <label>Jenis Kelamin</label>
                <select name="" id="">
                    <option value="${valueArray[4]}" selected hidden>${valueArray[4]}</option>
                    <option value="Laki-Laki">Laki-Laki</option>
                    <option value="Perempuan">Perempuan</option>
                </select>
            </div>
            <div class="input">
                <label>Alamat</label>
                <input type="text" value="${valueArray[5]}">
            </div>
            <div class="input">
                <label>Kota</label>
                <input type="text" value="${valueArray[6]}">
            </div>
            <div class="input">
                <label>Jabatan</label>
                <input type="text" value="${valueArray[7]}">
            </div>
            <div class="input">
                <label>Departemen</label>
                <input type="text" value="${valueArray[8]}">
            </div>
            <div class="input">
                <label>Tanggal Registrasi</label>
                <input type="date" value="${valueArray[9]}">
            </div>
            <div class="input">
                <label>Keaktifan</label>
                <select name="" id="">
                    <option value="${valueArray[10]}" selected hidden>${valueArray[10]}</option>
                    <option value="Aktif">Aktif</option>
                    <option value="Non Aktif">Non Aktif</option>
                </select>
            </div>
            <div class="submit">
                <button type="button" onclick="data_anggota_masterdata()">Batal</button>
                <button type="button" onclick="Update(event)">Simpan</button>
            </div>
        </form>
    `
}
function Update_MD_Data_Pengguna(event){
    // Store Data
    const valueArray = []
    const parent = event.target.parentElement.parentElement
    const inputvalue = parent.querySelectorAll("td:not([class])")
    inputvalue.forEach(element => {
        valueArray.push(element.innerHTML)
    });
    // console.log(valueArray)
    window.valueArrayToUpdate = valueArray;

    const addtext = document.querySelector(".body")
    addtext.innerHTML = 
    `
        <form class="form">
            <header>Master Data - Data Pengguna</header>
            <div class="input">
                <label>Username</label>
                <input type="text" value="${valueArray[1]}">
            </div>
            <div class="input">
                <label>Password</label>
                <input type="text" placeholder="Insert New Password">
            </div>
            <div class="input">
                <label>Level</label>
                <select name="" id="">
                    <option value="${valueArray[2]}" selected hidden>${valueArray[2]}</option>
                    <option value="Admin">Admin</option>
                    <option value="Operator">Operator</option>
                    <option value="Pinjaman">Pinjaman</option>
                </select>
            </div>
            <div class="input">
                <label>Aktif</label>
                <select name="" id="">
                    <option value="${valueArray[3]}" selected hidden>${valueArray[3]}</option>
                    <option value="Aktif">Aktif</option>
                    <option value="Non Aktif">Non Aktif</option>
                </select>
            </div>
            <div class="submit">
                <button type="button" onclick="data_pengguna()">Batal</button>
                <button type="button" onclick="Update(event)">Simpan</button>
            </div>
        </form>
    `
}

// Settings
async function Update_Identitas_Koperasi(event){
    const valueArray = []
    const parent = event.target.parentElement.parentElement
    const inputvalue = parent.querySelectorAll(".a")
    inputvalue.forEach(element => {
        if( element.querySelector("input") !== null){
            const Value = element.querySelector("input")
            valueArray.push(Value.value)
        }
    })
    
    await UpdateIdentitasKoperasi(valueArray)
    identitas_koperasi()
}
async function Update_Bagi_Hasil(event){
    const valueArray = []
    const parent = event.target.parentElement.parentElement
    const inputvalue = parent.querySelectorAll(".a")
    inputvalue.forEach(element => {
        if( element.querySelector("select") !== null){
            const Value = element.querySelector("select")
            valueArray.push(Value.value)
        }
        if( element.querySelector("input") !== null){
            const Value = element.querySelector("input")
            valueArray.push(Value.value)
        }
    })
    await UpdateBagiHasil(valueArray)
    bagi_hasil()
}