// Laporan
function data_anggota(code){
    const body = document.querySelector(".body")
    const text = `
        <div class="container">
            <div class="title">
                <h1>Laporan</h1>
                <label>Data Anggota</label>
            </div>
            <div class="table">
                <div class="table-title">
                    <label>Laporan Data Anggota</label>
                </div>
                <div class="fiture">        
                    <div class="search"><input type="text" placeholder="[ID Anggota]" onchange="Find(value)"></div>
                    <div class="print" onclick="form_cetak_table_laporan()"><img src="img/printer.gif"><label>Cetak</label></div>
                </div>
                <div class="table-content">
                <table class="table2">
                    <tbody>
                        <tr class="head">
                            <td>No</td>
                            <td>ID Anggota</td>
                            <td>Nama Anggota</td>
                            <td>L/P</td>
                            <td>Jabatan</td>
                            <td>Alamat</td>
                            <td>Status</td>
                            <td>Tgl Registrasi</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>  
    `
    body.innerHTML = text

    GetDataAnggota()
    .then((data) => {
        let No = 1
        let text2 = ""
        if(code){
            for (const content of data) {
                if(content.ID_Anggota == code){
                    text2 += `
                    <tr>
                        <td>${No++}</td>
                        <td>${content.ID_Anggota}</td>
                        <td>
                            <table class="table3">
                                <tbody>
                                    <tr>
                                        <td>Nama</td>
                                        <td>:</td>
                                        <td>${content.Nama_Lengkap}</td>
                                    </tr>
                                    <tr>
                                        <td>Asal, Tanggal Lahir</td>
                                        <td>:</td>
                                        <td>Kalbar, 24 September 1989</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>${content.JK}</td>
                        <td>${content.Jabatan}</td>
                        <td>
                            <table class="table3">
                                <tbody>
                                    <tr>
                                        <td>Alamat</td>
                                        <td>:</td>
                                        <td>${content.Alamat}</td>
                                    </tr>
                                    <tr>
                                        <td>Telp. </td>
                                        <td>:</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>${content.Aktif_Keanggotaan}</td>
                        <td>${content.Tgl_Registrasi}</td>
                    </tr>
                    `
                }
            }
        }else{
            for (const content of data) {
                text2 += `
                <tr>
                    <td>${No++}</td>
                    <td>${content.ID_Anggota}</td>
                    <td>
                        <table class="table3">
                            <tbody>
                                <tr>
                                    <td>Nama</td>
                                    <td>:</td>
                                    <td>${content.Nama_Lengkap}</td>
                                </tr>
                                <tr>
                                    <td>Asal, Tanggal Lahir</td>
                                    <td>:</td>
                                    <td>Kalbar, 24 September 1989</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td>${content.JK}</td>
                    <td>${content.Jabatan}</td>
                    <td>
                        <table class="table3">
                            <tbody>
                                <tr>
                                    <td>Alamat</td>
                                    <td>:</td>
                                    <td>${content.Alamat}</td>
                                </tr>
                                <tr>
                                    <td>Telp. </td>
                                    <td>:</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td>${content.Aktif_Keanggotaan}</td>
                    <td>${content.Tgl_Registrasi}</td>
                </tr>
                `
            }
        }
        const tablecontent = document.querySelector(".table2 tbody")
        tablecontent.insertAdjacentHTML('beforeend', text2)
    })
}
function kas_anggota(code){
    const body = document.querySelector(".body")
    const text = `
        <div class="container">
            <div class="title">
                <h1>Laporan</h1>
                <label>Data Kas Anggota</label>
            </div>
            <div class="table">
                <div class="table-title">
                    <label>Laporan Kas Anggota</label>
                </div>
                <div class="fiture">
                    <div class="search"><input type="text" placeholder="[ID Anggota]" onchange="Find(value)"></div>  
                    <div class="print" onclick="form_cetak_table_laporan()"><img src="img/printer.gif"><label>Cetak</label></div>   
                </div>
                <div class="table-content">
                <table class="table2">
                    <tbody>
                        <tr class="head">
                            <td>No</td>
                            <td>Identitas</td>
                            <td>Saldo Simpanan</td>
                            <td>Tagihan Kredit</td>
                            <td>Keterangan</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>  
    `
    body.innerHTML = text

    GetDataAnggota()
    .then(async (data) => {
        const dataSetoranAnggota = await GetSetoranAnggota()
        const dataPenarikanSimpanan = await GetPenarikanSimpanan()
        const dataPinjaman = await GetDataPinjaman()

        let No = 1
        let text2 = ``
        if(code){
            for (const dataAnggota of data) {
                if(dataAnggota.ID_Anggota == code){
                    // Saldo Simpanan
                    let Simpanan_Sukarela = 0
                    let Simpanan_Pokok = 0
                    let Simpanan_Wajib = 0
                    let Simpanan_Khusus = 0
                    for (const DataSetoran of dataSetoranAnggota) {
                        if(dataAnggota.ID_Anggota == DataSetoran.ID_Anggota){
                            let Jenis_Simpanan_Setoran = DataSetoran.Jenis_Simpanan
                            Jenis_Simpanan_Setoran == 'Simpanan Sukarela' ? Simpanan_Sukarela += DataSetoran.Jumlah : 
                            Jenis_Simpanan_Setoran == 'Simpanan Pokok' ? Simpanan_Pokok += DataSetoran.Jumlah : 
                            Jenis_Simpanan_Setoran == 'Simpanan Wajib' ? Simpanan_Wajib += DataSetoran.Jumlah : 
                            Jenis_Simpanan_Setoran == 'Simpanan Khusus' ? Simpanan_Khusus += DataSetoran.Jumlah : ''
                        }
                    }
                    for (const DataPenarikan of dataPenarikanSimpanan) {
                        if(dataAnggota.ID_Anggota == DataPenarikan.ID_Anggota){
                            let Jenis_Simpanan_Penarikan = DataPenarikan.Jenis_Simpanan
                            Jenis_Simpanan_Penarikan == 'Simpanan Sukarela' ? Simpanan_Sukarela -= DataPenarikan.Jumlah  : 
                            Jenis_Simpanan_Penarikan == 'Simpanan Pokok' ? Simpanan_Pokok -= DataPenarikan.Jumlah  : 
                            Jenis_Simpanan_Penarikan == 'Simpanan Wajib' ? Simpanan_Wajib -= DataPenarikan.Jumlah  : 
                            Jenis_Simpanan_Penarikan == 'Simpanan Khusus' ? Simpanan_Khusus -= DataPenarikan.Jumlah  : ''
                        }
                    }
                    let Total_Simpanan = Simpanan_Sukarela + Simpanan_Pokok + Simpanan_Wajib + Simpanan_Khusus
        
                    // Tagihan Kredit
                    let Pokok_Pinjaman = 0
                    let Denda = 0
                    let Bunga = 0
                    let Total_Pinjaman = 0
                    let Dibayar = 0
                    let Sisa_Tagihan = 0
                    let Total_Pagu = await GetBagiHasil().then((data) => {return data[0].Limit_Pagu_Pinjaman})
                    for (const DataPinjaman of dataPinjaman) {
                        if(dataAnggota.ID_Anggota == DataPinjaman.ID_Anggota){
                            const dataBagiHasil = await GetBagiHasil()
        
                            const Pokok_Angsuran = DataPinjaman.Nominal / DataPinjaman.Lama_Angsuran
                            const PersenBunga = dataBagiHasil[0].Suku_Bunga
        
                            Pokok_Pinjaman += DataPinjaman.Nominal
                            Denda += DataPinjaman.Jumlah_Denda
                            Bunga += Pokok_Angsuran * PersenBunga
                            Total_Pinjaman += Pokok_Angsuran + Bunga + dataBagiHasil[0].Biaya_Administrasi
                            Dibayar += DataPinjaman.Sudah_Dibayar
                            Sisa_Tagihan += DataPinjaman.Sisa_Tagihan
        
                            Pokok_Pinjaman = Math.round(Pokok_Pinjaman)
                            Denda = Math.round(Denda)
                            Bunga = Math.round(Bunga)
                            Total_Pinjaman = Math.round(Total_Pinjaman)
                            Dibayar = Math.round(Dibayar)
                            Sisa_Tagihan = Math.round(Sisa_Tagihan)
                        }
                    }
        
                    // Keterangan
                    let Jumlah_Pinjam = 0
                    let Pinjaman_Lunas = 0
                    for (const DataPinjaman of dataPinjaman) {
                        if(dataAnggota.ID_Anggota == DataPinjaman.ID_Anggota){
                            Jumlah_Pinjam++
                            if(DataPinjaman.Lunas != 'Belum') Pinjaman_Lunas++
                        }
                    }
                    
                    text2 = `
                    <td>${No++}</td>
                    <td>
                        <table class="table3">
                            <tbody>
                                <tr>
                                    <td>ID Anggota</td>
                                    <td>:</td>
                                    <td>${dataAnggota.ID_Anggota}</td>
                                </tr>
                                <tr>
                                    <td>Username</td>
                                    <td>:</td>
                                    <td>${dataAnggota.Username}</td>
                                </tr>
                                <tr>
                                    <td>Nama</td>
                                    <td>:</td>
                                    <td>${dataAnggota.Nama_Lengkap}</td>
                                </tr>
                                <tr>
                                    <td>Jenis Kelamin</td>
                                    <td>:</td>
                                    <td>${dataAnggota.JK}</td>
                                </tr>
                                <tr>
                                    <td>Jabatan</td>
                                    <td>:</td>
                                    <td>${dataAnggota.Jabatan}</td>
                                </tr>
                                <tr>
                                    <td>Alamat</td>
                                    <td>:</td>
                                    <td>${dataAnggota.Alamat}</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <table class="table3">
                            <tbody>
                                <tr>
                                    <td>Simpanan Sukarela</td>
                                    <td>:</td>
                                    <td>${Simpanan_Sukarela.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Simpanan Pokok</td>
                                    <td>:</td>
                                    <td>${Simpanan_Pokok.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Simpanan Wajib</td>
                                    <td>:</td>
                                    <td>${Simpanan_Wajib.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Simpanan Khusus</td>
                                    <td>:</td>
                                    <td>${Simpanan_Khusus.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Total Simpanan</td>
                                    <td>:</td>
                                    <td>${Total_Simpanan.toLocaleString()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <table class="table3">
                            <tbody>
                                <tr>
                                    <td>Pokok Pinjaman</td>
                                    <td>:</td>
                                    <td>${Pokok_Pinjaman.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Denda</td>
                                    <td>:</td>
                                    <td>${Denda.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Bunga</td>
                                    <td>:</td>
                                    <td>${Bunga.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Total Pinjaman</td>
                                    <td>:</td>
                                    <td>${Total_Pinjaman.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Dibayar</td>
                                    <td>:</td>
                                    <td>${Dibayar.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Sisa Tagihan</td>
                                    <td>:</td>
                                    <td>${Sisa_Tagihan.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Total Pagu</td>
                                    <td>:</td>
                                    <td>${Total_Pagu.toLocaleString()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <table class="table3">
                            <tbody>
                                <tr>
                                    <td>Jumlah Pinjaman</td>
                                    <td>:</td>
                                    <td>${Jumlah_Pinjam}</td>
                                </tr>
                                <tr>
                                    <td>Pinjaman Lunas</td>
                                    <td>:</td>
                                    <td>${Pinjaman_Lunas}</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    `
                    const tablecontent = document.querySelector(".table2 tbody")
                    tablecontent.insertAdjacentHTML('beforeend', text2)
                }
            }
        }else{
            for (const dataAnggota of data) {
                // Saldo Simpanan
                let Simpanan_Sukarela = 0
                let Simpanan_Pokok = 0
                let Simpanan_Wajib = 0
                let Simpanan_Khusus = 0
                let Simpanan_Biasa = 0
                for (const DataSetoran of dataSetoranAnggota) {
                    if(dataAnggota.ID_Anggota == DataSetoran.ID_Anggota){
                        let Jenis_Simpanan_Setoran = DataSetoran.Jenis_Simpanan
                        Jenis_Simpanan_Setoran == 'Simpanan Sukarela' ? Simpanan_Sukarela += DataSetoran.Jumlah : 
                        Jenis_Simpanan_Setoran == 'Simpanan Pokok' ? Simpanan_Pokok += DataSetoran.Jumlah : 
                        Jenis_Simpanan_Setoran == 'Simpanan Wajib' ? Simpanan_Wajib += DataSetoran.Jumlah : 
                        Jenis_Simpanan_Setoran == 'Simpanan Khusus' ? Simpanan_Khusus += DataSetoran.Jumlah :
                        Simpanan_Biasa += DataSetoran.Jumlah
                    }
                }
                for (const DataPenarikan of dataPenarikanSimpanan) {
                    if(dataAnggota.ID_Anggota == DataPenarikan.ID_Anggota){
                        let Jenis_Simpanan_Penarikan = DataPenarikan.Jenis_Simpanan
                        Jenis_Simpanan_Penarikan == 'Simpanan Sukarela' ? Simpanan_Sukarela -= DataPenarikan.Jumlah  : 
                        Jenis_Simpanan_Penarikan == 'Simpanan Pokok' ? Simpanan_Pokok -= DataPenarikan.Jumlah  : 
                        Jenis_Simpanan_Penarikan == 'Simpanan Wajib' ? Simpanan_Wajib -= DataPenarikan.Jumlah  : 
                        Jenis_Simpanan_Penarikan == 'Simpanan Khusus' ? Simpanan_Khusus -= DataPenarikan.Jumlah  :
                        Simpanan_Biasa -= DataPenarikan.Jumlah
                    }
                }
                let Total_Simpanan = Simpanan_Sukarela + Simpanan_Pokok + Simpanan_Wajib + Simpanan_Khusus + Simpanan_Biasa
    
                // Tagihan Kredit
                let Pokok_Pinjaman = 0
                let Denda = 0
                let Bunga = 0
                let Total_Pinjaman = 0
                let Dibayar = 0
                let Sisa_Tagihan = 0
                let Total_Pagu = await GetBagiHasil().then((data) => {return data[0].Limit_Pagu_Pinjaman})
                for (const DataPinjaman of dataPinjaman) {
                    if(dataAnggota.ID_Anggota == DataPinjaman.ID_Anggota){
                        const dataBagiHasil = await GetBagiHasil()
    
                        const Pokok_Angsuran = DataPinjaman.Nominal / DataPinjaman.Lama_Angsuran
                        const PersenBunga = dataBagiHasil[0].Suku_Bunga
    
                        Pokok_Pinjaman += DataPinjaman.Nominal
                        Denda += DataPinjaman.Jumlah_Denda
                        Bunga += Pokok_Angsuran * PersenBunga
                        Total_Pinjaman += Pokok_Angsuran + Bunga + dataBagiHasil[0].Biaya_Administrasi
                        Dibayar += DataPinjaman.Sudah_Dibayar
                        Sisa_Tagihan += DataPinjaman.Sisa_Tagihan
    
                        Pokok_Pinjaman = Math.round(Pokok_Pinjaman)
                        Denda = Math.round(Denda)
                        Bunga = Math.round(Bunga)
                        Total_Pinjaman = Math.round(Total_Pinjaman)
                        Dibayar = Math.round(Dibayar)
                        Sisa_Tagihan = Math.round(Sisa_Tagihan)
                    }
                }
    
                // Keterangan
                let Jumlah_Pinjam = 0
                let Pinjaman_Lunas = 0
                for (const DataPinjaman of dataPinjaman) {
                    if(dataAnggota.ID_Anggota == DataPinjaman.ID_Anggota){
                        Jumlah_Pinjam++
                        if(DataPinjaman.Lunas != 'Belum') Pinjaman_Lunas++
                    }
                }
                
                text2 = `
                <td>${No++}</td>
                <td>
                    <table class="table3">
                        <tbody>
                            <tr>
                                <td>ID Anggota</td>
                                <td>:</td>
                                <td>${dataAnggota.ID_Anggota}</td>
                            </tr>
                            <tr>
                                <td>Username</td>
                                <td>:</td>
                                <td>${dataAnggota.Username}</td>
                            </tr>
                            <tr>
                                <td>Nama</td>
                                <td>:</td>
                                <td>${dataAnggota.Nama_Lengkap}</td>
                            </tr>
                            <tr>
                                <td>Jenis Kelamin</td>
                                <td>:</td>
                                <td>${dataAnggota.JK}</td>
                            </tr>
                            <tr>
                                <td>Jabatan</td>
                                <td>:</td>
                                <td>${dataAnggota.Jabatan}</td>
                            </tr>
                            <tr>
                                <td>Alamat</td>
                                <td>:</td>
                                <td>${dataAnggota.Alamat}</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td>
                    <table class="table3">
                        <tbody>
                            <tr>
                                <td>Simpanan Sukarela</td>
                                <td>:</td>
                                <td>${Simpanan_Sukarela.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>Simpanan Pokok</td>
                                <td>:</td>
                                <td>${Simpanan_Pokok.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>Simpanan Wajib</td>
                                <td>:</td>
                                <td>${Simpanan_Wajib.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>Simpanan Khusus</td>
                                <td>:</td>
                                <td>${Simpanan_Khusus.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>Simpanan Biasa</td>
                                <td>:</td>
                                <td>${Simpanan_Biasa.toLocaleString()}</td>
                            </tr>
                            <tr style="font-weight:bold">
                                <td>Total Simpanan</td>
                                <td>:</td>
                                <td>${Total_Simpanan.toLocaleString()}</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td>
                    <table class="table3">
                        <tbody>
                            <tr>
                                <td>Pokok Pinjaman</td>
                                <td>:</td>
                                <td>${Pokok_Pinjaman.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>Denda</td>
                                <td>:</td>
                                <td>${Denda.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>Bunga</td>
                                <td>:</td>
                                <td>${Bunga.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>Total Pinjaman</td>
                                <td>:</td>
                                <td>${Total_Pinjaman.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>Dibayar</td>
                                <td>:</td>
                                <td>${Dibayar.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>Sisa Tagihan</td>
                                <td>:</td>
                                <td>${Sisa_Tagihan.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>Total Pagu</td>
                                <td>:</td>
                                <td>${Total_Pagu.toLocaleString()}</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td>
                    <table class="table3">
                        <tbody>
                            <tr>
                                <td>Jumlah Pinjaman</td>
                                <td>:</td>
                                <td>${Jumlah_Pinjam}</td>
                            </tr>
                            <tr>
                                <td>Pinjaman Lunas</td>
                                <td>:</td>
                                <td>${Pinjaman_Lunas}</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                `
                const tablecontent = document.querySelector(".table2 tbody")
                tablecontent.insertAdjacentHTML('beforeend', text2)
            }
        }
    })
}
function laporan_pemasukan(start, end, code){
    const body = document.querySelector(".body")
    let text = ''
    if(start && end){
        text = `
            <div class="container">
                <div class="title">
                    <h1>Laporan</h1>
                    <label>Pemasukan Kas Tunai</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Laporan Transaksi Pemasukan Kas</label>
                    </div>
                    <div class="fiture">
                        <input type="text" class="date" placeholder="${start} - ${end}">
                        <div class="search"><input type="text" placeholder="[Kode]" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_laporan()"><img src="img/printer.gif"><label>Cetak</label></div>       
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Tanggal</td>
                                <td>Kode Akun</td>
                                <td>Nama Akun</td>
                                <td>Uraian</td>
                                <td>Jumlah</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>  
        `
    }else if(code){
        text = `
            <div class="container">
                <div class="title">
                    <h1>Laporan</h1>
                    <label>Pemasukan Kas Tunai</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Laporan Transaksi Pemasukan Kas</label>
                    </div>
                    <div class="fiture">
                        <input type="text" class="date" placeholder="Select The Date">
                        <div class="search"><input type="text" placeholder="${code}" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_laporan()"><img src="img/printer.gif"><label>Cetak</label></div>       
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Tanggal</td>
                                <td>Kode Akun</td>
                                <td>Nama Akun</td>
                                <td>Uraian</td>
                                <td>Jumlah</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>  
        `
    }else{
        text = `
            <div class="container">
                <div class="title">
                    <h1>Laporan</h1>
                    <label>Pemasukan Kas Tunai</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Laporan Transaksi Pemasukan Kas</label>
                    </div>
                    <div class="fiture">
                        <input type="text" class="date" placeholder="Select The Date">
                        <div class="search"><input type="text" placeholder="[Kode]" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_laporan()"><img src="img/printer.gif"><label>Cetak</label></div>       
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Tanggal</td>
                                <td>Kode Akun</td>
                                <td>Nama Akun</td>
                                <td>Uraian</td>
                                <td>Jumlah</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>  
        `
    }
    
    body.innerHTML = text
    date()

    GetPemasukan()
    .then(async (data) => {
        const dataJenisAkun = await GetJenisAkun()

        let KodeAkun 
        let text2 = ``
        let No = 1
        if(start && end){
            for (const DataPemasukan of data) {
                if(DataPemasukan.Tanggal_Transaksi >= start && DataPemasukan.Tanggal_Transaksi <= end){
                    for (const DataJenisAkun of dataJenisAkun) {
                        if(DataPemasukan.Dari_Akun == DataJenisAkun.Jenis_Transaksi && DataJenisAkun.Pengeluaran == 'Y'){
                            KodeAkun = DataJenisAkun.Kode_Aktiva
                            text2 += `
                            <tr>
                                <td>${No++}</td>
                                <td>${DataPemasukan.Tanggal_Transaksi}</td>
                                <td>${KodeAkun}</td>
                                <td>${DataJenisAkun.Jenis_Transaksi}</td>
                                <td>${DataPemasukan.Uraian}</td>
                                <td>${DataPemasukan.Jumlah}</td>
                            </tr>
                            `
                        }
                    }
                }
            }
        }else if(code){
            for (const DataPemasukan of data) {
                for (const DataJenisAkun of dataJenisAkun) {
                    if(DataJenisAkun.Kode_Aktiva == code){
                        if(DataPemasukan.Dari_Akun == DataJenisAkun.Jenis_Transaksi && DataJenisAkun.Pengeluaran == 'Y'){
                            KodeAkun = DataJenisAkun.Kode_Aktiva
                            text2 += `
                            <tr>
                                <td>${No++}</td>
                                <td>${DataPemasukan.Tanggal_Transaksi}</td>
                                <td>${KodeAkun}</td>
                                <td>${DataJenisAkun.Jenis_Transaksi}</td>
                                <td>${DataPemasukan.Uraian}</td>
                                <td>${DataPemasukan.Jumlah}</td>
                            </tr>
                            `
                        }
                    }
                }
            }
        }else{
            for (const DataPemasukan of data) {
                for (const DataJenisAkun of dataJenisAkun) {
                    if(DataPemasukan.Dari_Akun == DataJenisAkun.Jenis_Transaksi && DataJenisAkun.Pengeluaran == 'Y'){
                        KodeAkun = DataJenisAkun.Kode_Aktiva
                        text2 += `
                        <tr>
                            <td>${No++}</td>
                            <td>${DataPemasukan.Tanggal_Transaksi}</td>
                            <td>${KodeAkun}</td>
                            <td>${DataJenisAkun.Jenis_Transaksi}</td>
                            <td>${DataPemasukan.Uraian}</td>
                            <td>${DataPemasukan.Jumlah}</td>
                        </tr>
                        `
                    }
                }
            }
        }
        const tablecontent = document.querySelector(".table2 tbody")
        tablecontent.insertAdjacentHTML('beforeend', text2)
    })
}
function laporan_pengeluaran(start, end, code){
    const body = document.querySelector(".body")
    let text = ''
    if(start && end){
        text = `
            <div class="container">
                <div class="title">
                    <h1>Laporan</h1>
                    <label>Pengeluaran Kas Tunai</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Laporan Transaksi Pengeluaran Kas</label>
                    </div>
                    <div class="fiture">
                        <input type="text" class="date" placeholder="${start} - ${end}">
                        <div class="search"><input type="text" placeholder="[Kode Akun]" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_laporan()"><img src="img/printer.gif"><label>Cetak</label></div>       
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Tanggal</td>
                                <td>Kode Akun</td>
                                <td>Nama Akun</td>
                                <td>Uraian</td>
                                <td>Jumlah</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>  
        `
    }else if(code){
        text = `
            <div class="container">
                <div class="title">
                    <h1>Laporan</h1>
                    <label>Pengeluaran Kas Tunai</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Laporan Transaksi Pengeluaran Kas</label>
                    </div>
                    <div class="fiture">
                        <input type="text" class="date" placeholder="Select The Date">
                        <div class="search"><input type="text" placeholder="${code}" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_laporan()"><img src="img/printer.gif"><label>Cetak</label></div>       
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Tanggal</td>
                                <td>Kode Akun</td>
                                <td>Nama Akun</td>
                                <td>Uraian</td>
                                <td>Jumlah</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>  
        `
    }else{
        text = `
            <div class="container">
                <div class="title">
                    <h1>Laporan</h1>
                    <label>Pengeluaran Kas Tunai</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Laporan Transaksi Pengeluaran Kas</label>
                    </div>
                    <div class="fiture">
                        <input type="text" class="date" placeholder="Select The Date">
                        <div class="search"><input type="text" placeholder="[Kode Akun]" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_laporan()"><img src="img/printer.gif"><label>Cetak</label></div>       
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Tanggal</td>
                                <td>Kode Akun</td>
                                <td>Nama Akun</td>
                                <td>Uraian</td>
                                <td>Jumlah</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>  
        `
    }

    body.innerHTML = text
    date()

    GetPengeluaran()
    .then(async (data) => {
        const dataJenisAkun = await GetJenisAkun()

        let KodeAkun 
        let text2 = ``
        let No = 1

        if(start && end){
            for (const DataPengeluaran of data) {
                if(DataPengeluaran.Tanggal_Transaksi >= start && DataPengeluaran.Tanggal_Transaksi <= end){
                    for (const DataJenisAkun of dataJenisAkun) {
                        if(DataPengeluaran.Dari_Akun == DataJenisAkun.Jenis_Transaksi && DataJenisAkun.Pengeluaran == 'Y'){
                            KodeAkun = DataJenisAkun.Kode_Aktiva
                            text2 += `
                            <tr>
                                <td>${No++}</td>
                                <td>${DataPengeluaran.Tanggal_Transaksi}</td>
                                <td>${KodeAkun}</td>
                                <td>${DataJenisAkun.Jenis_Transaksi}</td>
                                <td>${DataPengeluaran.Uraian}</td>
                                <td>${DataPengeluaran.Jumlah}</td>
                            </tr>
                            `
                        }
                    }
                }
            }
        }else if(code){
            for (const DataPengeluaran of data) {
                for (const DataJenisAkun of dataJenisAkun) {
                    if(DataJenisAkun.Kode_Aktiva == code){
                        if(DataPengeluaran.Dari_Akun == DataJenisAkun.Jenis_Transaksi && DataJenisAkun.Pengeluaran == 'Y'){
                            KodeAkun = DataJenisAkun.Kode_Aktiva
                            text2 += `
                            <tr>
                                <td>${No++}</td>
                                <td>${DataPengeluaran.Tanggal_Transaksi}</td>
                                <td>${KodeAkun}</td>
                                <td>${DataJenisAkun.Jenis_Transaksi}</td>
                                <td>${DataPengeluaran.Uraian}</td>
                                <td>${DataPengeluaran.Jumlah}</td>
                            </tr>
                            `
                        }
                    }
                }
            }
        }else{
            for (const DataPengeluaran of data) {
                for (const DataJenisAkun of dataJenisAkun) {
                    if(DataPengeluaran.Dari_Akun == DataJenisAkun.Jenis_Transaksi && DataJenisAkun.Pengeluaran == 'Y'){
                        KodeAkun = DataJenisAkun.Kode_Aktiva
                        text2 += `
                        <tr>
                            <td>${No++}</td>
                            <td>${DataPengeluaran.Tanggal_Transaksi}</td>
                            <td>${KodeAkun}</td>
                            <td>${DataJenisAkun.Jenis_Transaksi}</td>
                            <td>${DataPengeluaran.Uraian}</td>
                            <td>${DataPengeluaran.Jumlah}</td>
                        </tr>
                        `
                    }
                }
            }
        }

        const tablecontent = document.querySelector(".table2 tbody")
        tablecontent.insertAdjacentHTML('beforeend', text2)
    })
}
function jurnal_umum(start, end, code){
    const body = document.querySelector(".body")
    let text = ''
    if(start && end){
        text = `
            <div class="container">
                <div class="title">
                    <h1>Laporan</h1>
                    <label>Jurnal Umum</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Laporan Jurnal Umum</label>
                    </div>
                    <div class="fiture">
                        <input type="text" class="date" placeholder="${start} - ${end}">
                        <div class="search"><input type="text" placeholder="[Kode Akun]" onchange="Find(value)"></div> 
                        <div class="print" onclick="form_cetak_table_laporan()"><img src="img/printer.gif"><label>Cetak</label></div>
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Tanggal</td>
                                <td>Kode Akun</td>
                                <td>Nama Akun</td>
                                <td>Uraian</td>
                                <td>Debet</td>
                                <td>Kredit</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>  
        `
    }else if(code){
        text = `
            <div class="container">
                <div class="title">
                    <h1>Laporan</h1>
                    <label>Jurnal Umum</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Laporan Jurnal Umum</label>
                    </div>
                    <div class="fiture">
                        <input type="text" class="date" placeholder="Select The Date">
                        <div class="search"><input type="text" placeholder="${code}" onchange="Find(value)"></div> 
                        <div class="print" onclick="form_cetak_table_laporan()"><img src="img/printer.gif"><label>Cetak</label></div>
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Tanggal</td>
                                <td>Kode Akun</td>
                                <td>Nama Akun</td>
                                <td>Uraian</td>
                                <td>Debet</td>
                                <td>Kredit</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>  
        `
    }else{
        text = `
            <div class="container">
                <div class="title">
                    <h1>Laporan</h1>
                    <label>Jurnal Umum</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Laporan Jurnal Umum</label>
                    </div>
                    <div class="fiture">
                        <input type="text" class="date" placeholder="Select The Date">
                        <div class="search"><input type="text" placeholder="[Kode Akun]" onchange="Find(value)"></div> 
                        <div class="print" onclick="form_cetak_table_laporan()"><img src="img/printer.gif"><label>Cetak</label></div>
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Tanggal</td>
                                <td>Kode Akun</td>
                                <td>Nama Akun</td>
                                <td>Uraian</td>
                                <td>Debet</td>
                                <td>Kredit</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>  
        `
    }

    body.innerHTML = text
    date()

    GetJurnalUmum()
    .then((data) => {
        let No = 1
        let text2 = ``

        if(start && end){
            for (const content of data) {
                if(content.Tanggal >= start && content.Tanggal <= end){
                    text2 += `
                    <tr>
                        <td>${No++}</td>
                        <td>${content.Tanggal}</td>
                        <td>${content.Kode_Akun}</td>
                        <td>${content.Nama_Akun}</td>
                        <td>${content.Uraian}</td>
                        <td>${content.Debet.toLocaleString()}</td>
                        <td>${content.Kredit.toLocaleString()}</td>
                    </tr>
                    `
                }
            }
        }else if(code){
            for (const content of data) {
                if(content.Kode_Akun == code){
                    text2 += `
                    <tr>
                        <td>${No++}</td>
                        <td>${content.Tanggal}</td>
                        <td>${content.Kode_Akun}</td>
                        <td>${content.Nama_Akun}</td>
                        <td>${content.Uraian}</td>
                        <td>${content.Debet.toLocaleString()}</td>
                        <td>${content.Kredit.toLocaleString()}</td>
                    </tr>
                    `
                }
            }
        }else{
            for (const content of data) {
                text2 += `
                <tr>
                    <td>${No++}</td>
                    <td>${content.Tanggal}</td>
                    <td>${content.Kode_Akun}</td>
                    <td>${content.Nama_Akun}</td>
                    <td>${content.Uraian}</td>
                    <td>${content.Debet.toLocaleString()}</td>
                    <td>${content.Kredit.toLocaleString()}</td>
                </tr>
                `
            }
        }
        
        const tablecontent = document.querySelector(".table2 tbody")
        tablecontent.insertAdjacentHTML('beforeend', text2)
    })
}
function laba_rugi(start, end){
    const body = document.querySelector(".body")
    let text = ''
    if(start && end){
        text = `
            <div class="container">
                <div class="title">
                    <h1>Laporan</h1>
                    <label>Laba Rugi</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Laporan Laba Rugi</label>
                    </div>
                    <div class="fiture">
                        <input type="text" class="date" placeholder="${start} - ${end}">
                        <div class="print" onclick="form_cetak_table_laporan()"><img src="img/printer.gif"><label>Cetak</label></div>      
                    </div>
                    <div class="table-content">
                        <table class="table2 pertama">
                            <tbody>
                                <tr class="head">
                                    <td colspan="4" class="head_laba_rugi">Pendapatan</td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="table2 kedua">
                            <tbody>
                                <tr class="head">
                                    <td colspan="4" class="head_laba_rugi">Beban</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>  
        `
    }else{
        text = `
            <div class="container">
                <div class="title">
                    <h1>Laporan</h1>
                    <label>Laba Rugi</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Laporan Laba Rugi</label>
                    </div>
                    <div class="fiture">
                        <input type="text" class="date" placeholder="Select The Date">
                        <div class="print" onclick="form_cetak_table_laporan()"><img src="img/printer.gif"><label>Cetak</label></div>      
                    </div>
                    <div class="table-content">
                        <table class="table2 pertama">
                            <tbody>
                                <tr class="head">
                                    <td colspan="4" class="head_laba_rugi">Pendapatan</td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="table2 kedua">
                            <tbody>
                                <tr class="head">
                                    <td colspan="4" class="head_laba_rugi">Beban</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>  
        `
    }
    body.innerHTML = text
    date()

    const TotalLabaRugi = 0

    GetPemasukan()
    .then(async (data) => {
        const dataPengeluaran = await GetPengeluaran()
        let No = 1
        let text2 = ``
        let TotalPemasukan = 0
        let TotalPengeluaran = 0

        if(start&& end){
            for (const dataPemasukan of data) {
                if(dataPemasukan.Tanggal_Transaksi >= start & dataPemasukan.Tanggal_Transaksi <= end){
                    TotalPemasukan += dataPemasukan.Jumlah
                    text2+= `
                    <tr>
                        <td>${No++}</td>
                        <td>${dataPemasukan.Dari_Akun}</td>
                        <td>${dataPemasukan.Uraian}</td>
                        <td>${dataPemasukan.Jumlah}</td>
                    </tr>
                    `
                }
            }
            let tablecontent = document.querySelector(".pertama tbody")
            tablecontent.insertAdjacentHTML('beforeend', text2)
    
            text2 = ``
    
            for (const dataP of dataPengeluaran) {
                if(dataP.Tanggal_Transaksi >= start & dataP.Tanggal_Transaksi <= end){
                    TotalPengeluaran += dataP.Jumlah
                    text2+= `
                    <tr>
                        <td>${No++}</td>
                        <td>${dataP.Dari_Akun}</td>
                        <td>${dataP.Uraian}</td>
                        <td>${dataP.Jumlah}</td>
                    </tr>
                    `
                }
            }
            tablecontent = document.querySelector(".kedua tbody")
            tablecontent.insertAdjacentHTML('beforeend', text2)
            
            text2 = `
            <table class="table2 ketiga">
                <tbody>
                    <tr class="head">
                        <td colspan="4">Total</td>
                        <td>${TotalPemasukan - TotalPengeluaran}</td>
                    </tr>
                </tbody>
            </table>
            `
            tablecontent = document.querySelector(".table-content")
            tablecontent.insertAdjacentHTML('beforeend', text2)
        }else{
            for (const dataPemasukan of data) {
                TotalPemasukan += dataPemasukan.Jumlah
                text2+= `
                <tr>
                    <td>${No++}</td>
                    <td>${dataPemasukan.Dari_Akun}</td>
                    <td>${dataPemasukan.Uraian}</td>
                    <td>${dataPemasukan.Jumlah}</td>
                </tr>
                `
            }
            let tablecontent = document.querySelector(".pertama tbody")
            tablecontent.insertAdjacentHTML('beforeend', text2)
    
            text2 = ``
    
            for (const dataP of dataPengeluaran) {
                TotalPengeluaran += dataP.Jumlah
                text2+= `
                <tr>
                    <td>${No++}</td>
                    <td>${dataP.Dari_Akun}</td>
                    <td>${dataP.Uraian}</td>
                    <td>${dataP.Jumlah}</td>
                </tr>
                `
            }
            tablecontent = document.querySelector(".kedua tbody")
            tablecontent.insertAdjacentHTML('beforeend', text2)
            
            text2 = `
            <table class="table2 ketiga">
                <tbody>
                    <tr class="head">
                        <td colspan="4">Total</td>
                        <td>${TotalPemasukan - TotalPengeluaran}</td>
                    </tr>
                </tbody>
            </table>
            `
            tablecontent = document.querySelector(".table-content")
            tablecontent.insertAdjacentHTML('beforeend', text2)
        }
    })
}
function neraca_saldo(start, end){
    const body = document.querySelector(".body")
    let text = ''
    if(start && end){
        text = `
            <div class="container">
                <div class="title">
                    <h1>Laporan</h1>
                    <label>Necara Saldo</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Laporan Neraca Saldo</label>
                    </div>
                    <div class="fiture">        
                        <input type="text" class="date" placeholder="${start} - ${end}">    
                        <div class="print" onclick="form_cetak_table_laporan()"><img src="img/printer.gif"><label>Cetak</label></div>                
                    </div>
                    <div class="table-content">
                        <table class="table2 satu">
                            <tbody class="tbody_neraca_saldo">
                                <tr class="head">
                                    <td>Aktiva</td>
                                    <td>Nama Akun</td>
                                    <td>Debet</td>
                                    <td>Kredit</td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="table2 dua">
                            <tbody class="tbody_neraca_saldo">
                                <tr class="head">
                                    <td>Pasiva</td>
                                    <td>Nama Akun</td>
                                    <td>Debet</td>
                                    <td>Kredit</td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="table2 tiga">
                            <tbody class="tbody_neraca_saldo">
                                <tr class="head">
                                    <td>Modal</td>
                                    <td>Nama Akun</td>
                                    <td>Debet</td>
                                    <td>Kredit</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>  
        `
    }else{
        text = `
            <div class="container">
                <div class="title">
                    <h1>Laporan</h1>
                    <label>Necara Saldo</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Laporan Neraca Saldo</label>
                    </div>
                    <div class="fiture">        
                        <input type="text" class="date" placeholder="Select The Date">    
                        <div class="print" onclick="form_cetak_table_laporan()"><img src="img/printer.gif"><label>Cetak</label></div>                
                    </div>
                    <div class="table-content">
                        <table class="table2 satu">
                            <tbody class="tbody_neraca_saldo">
                                <tr class="head">
                                    <td>Aktiva</td>
                                    <td>Nama Akun</td>
                                    <td>Debet</td>
                                    <td>Kredit</td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="table2 dua">
                            <tbody class="tbody_neraca_saldo">
                                <tr class="head">
                                    <td>Pasiva</td>
                                    <td>Nama Akun</td>
                                    <td>Debet</td>
                                    <td>Kredit</td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="table2 tiga">
                            <tbody class="tbody_neraca_saldo">
                                <tr class="head">
                                    <td>Modal</td>
                                    <td>Nama Akun</td>
                                    <td>Debet</td>
                                    <td>Kredit</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>  
        `
    }
    body.innerHTML = text
    date()

    GetJenisAkun()
    .then(async(data) => {
        const dataJurnalUmum = await GetJurnalUmum()
        let No = 1
        let textAktiva = ''
        let textPasiva = ''

        let AktivaDebet = 0
        let AktivaKredit = 0
        let TotalAktivaDebet = 0
        let TotalAktivaKredit = 0

        let PasivaDebet = 0
        let PasivaKredit = 0
        let TotalPasivaDebet = 0
        let TotalPasivaKredit = 0

        if(start && end){
            for (const dataJA of data) {
                AktivaDebet = 0
                AktivaKredit = 0
                for (const dataJU of dataJurnalUmum) {
                    if(dataJU.Tanggal >= start && dataJU.Tanggal <= end){
                        if(dataJA.Akun == 'Aktiva' && dataJA.Kode_Aktiva == dataJU.Kode_Akun){
                            AktivaDebet += dataJU.Debet
                            AktivaKredit += dataJU.Kredit
                        }
                        if(dataJA.Akun == 'Pasiva' && dataJA.Kode_Aktiva == dataJU.Kode_Akun){
                            PasivaDebet += dataJU.Debet
                            PasivaKredit += dataJU.Kredit
                        }
                    }
                }
                TotalAktivaDebet += AktivaDebet
                TotalAktivaKredit += AktivaKredit
                TotalPasivaDebet += PasivaDebet
                TotalPasivaKredit += PasivaKredit
    
                if(AktivaDebet != 0 || AktivaKredit != 0){
                    textAktiva = `
                        <tr>
                            <td></td>
                            <td>${dataJA.Kode_Aktiva}</td>
                            <td>${AktivaDebet.toLocaleString()}</td>
                            <td>${AktivaKredit.toLocaleString()}</td>
                        </tr>
                    `
                    const tablecontent = document.querySelector(".satu tbody")
                    tablecontent.insertAdjacentHTML('beforeend', textAktiva)
                }
                if(PasivaDebet != 0 || PasivaKredit != 0){
                    textPasiva = `
                    <tr>
                        <td></td>
                        <td>${dataJA.Kode_Aktiva}</td>
                        <td>${PasivaDebet.toLocaleString()}</td>
                        <td>${PasivaKredit.toLocaleString()}</td>
                    </tr>
                `
    
                const tablecontent2 = document.querySelector(".dua tbody")
                tablecontent2.insertAdjacentHTML('beforeend', textPasiva)
                }
            }
        }else{
            for (const dataJA of data) {
                AktivaDebet = 0
                AktivaKredit = 0
                for (const dataJU of dataJurnalUmum) {
                    if(dataJA.Akun == 'Aktiva' && dataJA.Kode_Aktiva == dataJU.Kode_Akun){
                        AktivaDebet += dataJU.Debet
                        AktivaKredit += dataJU.Kredit
                    }
                    if(dataJA.Akun == 'Pasiva' && dataJA.Kode_Aktiva == dataJU.Kode_Akun){
                        PasivaDebet += dataJU.Debet
                        PasivaKredit += dataJU.Kredit
                    }
                }
                TotalAktivaDebet += AktivaDebet
                TotalAktivaKredit += AktivaKredit
                TotalPasivaDebet += PasivaDebet
                TotalPasivaKredit += PasivaKredit
    
                if(AktivaDebet != 0 || AktivaKredit != 0){
                    textAktiva = `
                        <tr>
                            <td></td>
                            <td>${dataJA.Kode_Aktiva}  ${dataJA.Jenis_Transaksi}</td>
                            <td>${AktivaDebet.toLocaleString()}</td>
                            <td>${AktivaKredit.toLocaleString()}</td>
                        </tr>
                    `
                    const tablecontent = document.querySelector(".satu tbody")
                    tablecontent.insertAdjacentHTML('beforeend', textAktiva)
                }
                if(PasivaDebet != 0 || PasivaKredit != 0){
                    textPasiva = `
                        <tr>
                            <td></td>
                            <td>${dataJA.Kode_Aktiva}  ${dataJA.Jenis_Transaksi}</td>
                            <td>${PasivaDebet.toLocaleString()}</td>
                            <td>${PasivaKredit.toLocaleString()}</td>
                        </tr>
                    `
    
                const tablecontent2 = document.querySelector(".dua tbody")
                tablecontent2.insertAdjacentHTML('beforeend', textPasiva)
                }
            }
        }

        if(TotalAktivaDebet != 0 || TotalAktivaKredit != 0){
        const textTotalAktiva = `
            <tr style='font-weight:bold;'>
                <td></td>
                <td>Total</td>
                <td>${TotalAktivaDebet.toLocaleString()}</td>
                <td>${TotalAktivaKredit.toLocaleString()}</td>
            </tr>
        `
        const tablecontent = document.querySelector(".satu tbody")
        tablecontent.insertAdjacentHTML('beforeend', textTotalAktiva)
        }
        if(TotalPasivaDebet != 0 || TotalPasivaKredit != 0){
            const textTotalPasiva = `
                <tr style='font-weight:bold;'>
                    <td></td>
                    <td>Total</td>
                    <td>${TotalPasivaDebet.toLocaleString()}</td>
                    <td>${TotalPasivaKredit.toLocaleString()}</td>
                </tr>
            `
            const tablecontent = document.querySelector(".dua tbody")
            tablecontent.insertAdjacentHTML('beforeend', textTotalPasiva)
        }
    })
    
    // Generated Untuk Modal Belum
}

// Ubah parameter code jadi Date aja
function kas_simpanan(start, end, code){
    const body = document.querySelector(".body")
    let text = ''
    if(start && end){
        text = `
        <div class="container">
            <div class="title">
                <h1>Laporan</h1>
                <label>Kas Simpanan</label>
            </div>
            <div class="table">
                <div class="table-title">
                    <label>Laporan Transaksi Simpanan Kas</label>
                </div>
                <div class="fiture">
                    <input type="text" class="date" placeholder="${start} - ${end}">
                    <div class="search"><input type="text" placeholder="[Jenis Akun]" onchange="Find(value)"></div>        
                    <div class="print" onclick="form_cetak_table_laporan()"><img src="img/printer.gif"><label>Cetak Laporan</label></div>       
                </div>
                <div class="table-content">
                <table class="table2">
                    <tbody>
                        <tr class="head">
                            <td>No</td>
                            <td>Jenis Akun</td>
                            <td>Simpanan</td>
                            <td>Penarikan</td>
                            <td>Jumlah</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>  
    `
    }else if(code){
        text = `
            <div class="container">
                <div class="title">
                    <h1>Laporan</h1>
                    <label>Kas Simpanan</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Laporan Transaksi Simpanan Kas</label>
                    </div>
                    <div class="fiture">
                        <input type="text" class="date" placeholder="Select The Date">
                        <div class="search"><input type="text" placeholder="${code}" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_laporan()"><img src="img/printer.gif"><label>Cetak Laporan</label></div>       
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Jenis Akun</td>
                                <td>Simpanan</td>
                                <td>Penarikan</td>
                                <td>Jumlah</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>  
        `
    }else{
        text = `
            <div class="container">
                <div class="title">
                    <h1>Laporan</h1>
                    <label>Kas Simpanan</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Laporan Transaksi Simpanan Kas</label>
                    </div>
                    <div class="fiture">
                    <input type="text" class="date" placeholder="Select The Date">
                        <div class="search"><input type="text" placeholder="[Jenis Akun]" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_laporan()"><img src="img/printer.gif"><label>Cetak Laporan</label></div>       
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Jenis Akun</td>
                                <td>Simpanan</td>
                                <td>Penarikan</td>
                                <td>Jumlah</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>  
        `
    }
    
    body.innerHTML = text
    date()

    GetJenisSimpanan().then(async (data) => {
        const dataSetoranAnggota = await GetSetoranAnggota()
        const dataPenarikanSimpanan = await GetPenarikanSimpanan()
        let text2 = ''
        let No = 1
        let Simpanan = 0
        let Penarikan = 0

        let TotalSimpanan = 0
        let TotalPenarikan = 0

        if(start && end){
            for (const DataJS of data) {
                for (const DataSA of dataSetoranAnggota) {
                    if(DataSA.Tanggal_Transaksi >= start && DataSA.Tanggal_Transaksi <= end){
                        if(DataJS.Jenis_Simpanan == DataSA.Jenis_Simpanan){
                            Simpanan += DataSA.Jumlah
                            TotalSimpanan += DataSA.Jumlah
                        }
                    }
                }
                for (const DataPS of dataPenarikanSimpanan) {
                    if(DataPS.Tanggal_Transaksi >= start && DataPS.Tanggal_Transaksi <= end){
                        if(DataJS.Jenis_Simpanan == DataPS.Jenis_Simpanan){
                            Penarikan += DataPS.Jumlah
                            TotalPenarikan += DataPS.Jumlah
                        }
                    }
                }
    
                text2 += `
                <tr>
                    <td>${No++}</td>
                    <td>${DataJS.Jenis_Simpanan}</td>
                    <td>${Simpanan}</td>
                    <td>${Penarikan}</td>
                    <td>${Simpanan - Penarikan}</td>
                </tr>
                `
            }
        }else if(code){
            for (const DataJS of data) {
                if(DataJS.Jenis_Simpanan == code){
                    for (const DataSA of dataSetoranAnggota) {
                        if(DataJS.Jenis_Simpanan == DataSA.Jenis_Simpanan){
                            Simpanan += DataSA.Jumlah
                            TotalSimpanan += DataSA.Jumlah
                        }
                    }
                    for (const DataPS of dataPenarikanSimpanan) {
                        if(DataJS.Jenis_Simpanan == DataPS.Jenis_Simpanan){
                            Penarikan += DataPS.Jumlah
                            TotalPenarikan += DataPS.Jumlah
                        }
                    }
        
                    text2 += `
                    <tr>
                        <td>${No++}</td>
                        <td>${DataJS.Jenis_Simpanan}</td>
                        <td>${Simpanan}</td>
                        <td>${Penarikan}</td>
                        <td>${Simpanan - Penarikan}</td>
                    </tr>
                    `
                }
            }
        }else{
            for (const DataJS of data) {
                for (const DataSA of dataSetoranAnggota) {
                    if(DataJS.Jenis_Simpanan == DataSA.Jenis_Simpanan){
                        Simpanan += DataSA.Jumlah
                        TotalSimpanan += DataSA.Jumlah
                    }
                }
                for (const DataPS of dataPenarikanSimpanan) {
                    if(DataJS.Jenis_Simpanan == DataPS.Jenis_Simpanan){
                        Penarikan += DataPS.Jumlah
                        TotalPenarikan += DataPS.Jumlah
                    }
                }
    
                text2 += `
                <tr>
                    <td>${No++}</td>
                    <td>${DataJS.Jenis_Simpanan}</td>
                    <td>${Simpanan}</td>
                    <td>${Penarikan}</td>
                    <td>${Simpanan - Penarikan}</td>
                </tr>
                `
            }
        }

        const textTotal = `
        <tr style="font-weight:bold">
            <td colspan="2">Jumlah Total</td>
            <td>${TotalSimpanan}</td>
            <td>${TotalPenarikan}</td>
            <td>${TotalSimpanan - TotalPenarikan}</td>
        </tr>
        `

        const tablecontent = document.querySelector(".table2 tbody")
        tablecontent.insertAdjacentHTML('beforeend', text2)
        tablecontent.insertAdjacentHTML('beforeend', textTotal)
    })
}
function kas_pinjaman(start, end){
    const body = document.querySelector(".body")
    let text = ''
    if(start && end){
        text = `
            <div class="container">
                <div class="title">
                    <h1>Laporan</h1>
                    <label>Kas Pinjaman</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Laporan Kas Pinjaman</label>
                    </div>
                    <div class="fiture">
                        <input type="text" class="date" placeholder="${start} - ${end}">
                        <div class="print" onclick="form_cetak_table_laporan()"><img src="img/printer.gif"><label>Cetak Laporan</label></div>       
                    </div>
                    <div class="table-content">
                        <div class="detail-table">

                        </div>
                        <table class="table2">
                            <tbody>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>  
        `
    }else{
        text = `
            <div class="container">
                <div class="title">
                    <h1>Laporan</h1>
                    <label>Kas Pinjaman</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Laporan Kas Pinjaman</label>
                    </div>
                    <div class="fiture">
                        <input type="text" class="date" placeholder="Select The Date">
                        <div class="print" onclick="form_cetak_table_laporan()"><img src="img/printer.gif"><label>Cetak Laporan</label></div>       
                    </div>
                    <div class="table-content">
                        <div class="detail-table">

                        </div>
                        <table class="table2">
                            <tbody>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>  
        `
    }
    body.innerHTML = text
    date()

    GetDataPinjaman()
    .then(async (data) => {
        const dataBagiHasil = await GetBagiHasil().then((data) => {return data[0]})
        let No = 1
        let PokokPinjaman = 0
        let TagihanPinjaman = 0
        let TagihanDenda = 0
        let TagihanSudahDibayar = 0
        let SisaTagihan = 0

        let JumlahPeminjam = 0
        let PeminjamLunas = 0
        let PeminjamBelumLunas = 0

        if(start && end){
            for (const DataP of data) {
                if(DataP.Tanggal_Pinjam >= start && DataP.Tanggal_Pinjam <= end){
                    JumlahPeminjam += 1
                    DataP.Lunas == 'Belum' ? PeminjamBelumLunas += 1 : PeminjamLunas += 1
                    
                    const PokokAngsuran = DataP.Nominal / DataP.Lama_Angsuran
                    const BungaPinjaman = PokokAngsuran * (dataBagiHasil.Suku_Bunga / 100)
                    const BiayaAdmin = dataBagiHasil.Biaya_Administrasi
                    const JumlahAngsuran = PokokAngsuran + BungaPinjaman + BiayaAdmin
                    const TotalTagihan = JumlahAngsuran * DataP.Lama_Angsuran
                    
                    PokokPinjaman += DataP.Nominal
                    TagihanPinjaman += TotalTagihan
                    TagihanDenda += DataP.Jumlah_Denda
                    TagihanSudahDibayar += DataP.Sudah_Dibayar
                    SisaTagihan += DataP.Sisa_Tagihan
                }
            }
        }else{
            for (const DataP of data) {
                JumlahPeminjam += 1
                DataP.Lunas == 'Belum' ? PeminjamBelumLunas += 1 : PeminjamLunas += 1
                
                const PokokAngsuran = DataP.Nominal / DataP.Lama_Angsuran
                const BungaPinjaman = PokokAngsuran * (dataBagiHasil.Suku_Bunga / 100)
                const BiayaAdmin = dataBagiHasil.Biaya_Administrasi
                const JumlahAngsuran = PokokAngsuran + BungaPinjaman + BiayaAdmin
                const TotalTagihan = JumlahAngsuran * DataP.Lama_Angsuran
                
                PokokPinjaman += DataP.Nominal
                TagihanPinjaman += TotalTagihan
                TagihanDenda += DataP.Jumlah_Denda
                TagihanSudahDibayar += DataP.Sudah_Dibayar
                SisaTagihan += DataP.Sisa_Tagihan
            }
        }

        let detailTable = `
        <div class="detail-table-label">
            <label class="first">Jumlah Peminjam</label>
            <label>:</label>
            <label>&nbsp ${JumlahPeminjam}</label>
        </div>
        <div class="detail-table-label">
            <label class="first">Peminjam Lunas</label>
            <label>: </label>
            <label>&nbsp ${PeminjamLunas}</label>
        </div>
        <div class="detail-table-label">
            <label class="first">Peminjam Belum Lunas</label>
            <label>:</label>
            <label>&nbsp ${PeminjamBelumLunas}</label>
        </div>
        `  
        let tablecontent = document.querySelector(".detail-table")
        tablecontent.insertAdjacentHTML('beforeend', detailTable)

        let text2 = `
        <tr class="head">
            <td>No</td>
            <td>Keterangan</td>
            <td>Jumlah</td>
        </tr>
        <tr>
            <td>1</td>
            <td>Pokok Pinjaman</td>
            <td>${PokokPinjaman.toLocaleString()}</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Tagihan Pinjaman</td>
            <td>${Math.round(TagihanPinjaman).toLocaleString()}</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Tagihan Denda</td>
            <td>${TagihanDenda.toLocaleString()}</td>
        </tr>
        <tr style="font-weight:bold; background:#EFEFEF;">
            <td></td>
            <td>Jumlah Tagihan + Denda</td>
            <td></td>
        </tr>
        <tr>
            <td>4</td>
            <td>Tagihan Sudah Dibayar</td>
            <td>${TagihanSudahDibayar.toLocaleString()}</td>
        </tr>
        <tr style="background:#98FB98;">
            <td>5</td>
            <td>Sisa Tagihan</td>
            <td>${SisaTagihan.toLocaleString()}</td>
        </tr>
        `
        tablecontent = document.querySelector(".table2 tbody")
        tablecontent.insertAdjacentHTML('beforeend', text2)

    })
}
async function shu(start, end){
    const body = document.querySelector(".body")
    let text = ''
    if(start && end){
        text = `
            <div class="container">
                <div class="title">
                    <h1>Laporan</h1>
                    <label>Sisa Hasil Usaha</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Laporan SHU</label>
                    </div>
                    <div class="fiture">
                        <input type="text" class="date" placeholder="${start} - ${end}">
                        <div class="print" onclick="form_cetak_table_laporan()"><img src="img/printer.gif"><label>Cetak Laporan</label></div>       
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>  
        `
    }else{
        text = `
        <div class="container">
            <div class="title">
                <h1>Laporan</h1>
                <label>Sisa Hasil Usaha</label>
            </div>
            <div class="table">
                <div class="table-title">
                    <label>Laporan SHU</label>
                </div>
                <div class="fiture">
                    <input type="text" class="date" placeholder="Select The Date">
                    <div class="print" onclick="form_cetak_table_laporan()"><img src="img/printer.gif"><label>Cetak Laporan</label></div>       
                </div>
                <div class="table-content">
                <table class="table2">
                    <tbody>
                    </tbody>
                </table>
                </div>
            </div>
        </div>  
    `
    }
    body.innerHTML = text
    date()

    const Total = await GetPemasukan()
    .then(async (data) => {
        const dataPengeluaran = await GetPengeluaran()
        let TotalPemasukan = 0
        let TotalPengeluaran = 0
        if(start && end){
            for (const dataPemasukan of data) {
                if(dataPemasukan.Tanggal_Transaksi >= start && dataPemasukan.Tanggal_Transaksi <= end){
                    TotalPemasukan += dataPemasukan.Jumlah
                }
            }
            for (const dataP of dataPengeluaran) {
                if(dataP.Tanggal_Transaksi >= start && dataP.Tanggal_Transaksi <= end){
                    TotalPengeluaran += dataP.Jumlah
                }
            }
            return TotalPemasukan - TotalPengeluaran
        }else{
            for (const dataPemasukan of data) {
                TotalPemasukan += dataPemasukan.Jumlah
            }
            for (const dataP of dataPengeluaran) {
                TotalPengeluaran += dataP.Jumlah
            }
            return TotalPemasukan - TotalPengeluaran
        }
    })

    GetBagiHasil()
    .then((data) => {
        data = data[0]
        const text2 = `
        <tr class="head">
            <td class="left">SHU Sebelum Pajak</td>
            <td colspan="2">${Total.toLocaleString()}</td>
        </tr>
        <tr class="head">
            <td class="left">Pajak PPh</td>
            <td colspan="2">${data.Pajak_PPh}%</td>
        </tr>
        <tr class="head">
            <td class="left">SHU Setelah Pajak</td>
            <td colspan="2">${(Total * (1 - data.Pajak_PPh / 100)).toLocaleString()}</td>
        </tr>
        <tr style="font-weight:bold">
            <td class="left">PEMBAGIAN SHU UNTUK DANA - DANA</td>
            <td colspan="2"></td>
        </tr>
        <tr>
            <td class="left">Dana Cadangan</td>
            <td>${data.Dana_Cadangan}%</td>
            <td>${(Total * data.Dana_Cadangan / 100).toLocaleString()}</td>
        </tr>
        <tr>
            <td class="left">Jasa Anggota</td>
            <td>${data.Jasa_Anggota}%</td>
            <td>${(Total * data.Jasa_Anggota / 100).toLocaleString()}</td>
        </tr>
        <tr>
            <td class="left">Dana Pengurus</td>
            <td>${data.Dana_Pengurus}%</td>
            <td>${(Total * data.Dana_Pengurus / 100).toLocaleString()}</td>
        </tr>
        <tr>
            <td class="left">Dana Karyawan</td>
            <td>${data.Dana_Karyawan}%</td>
            <td>${(Total * data.Dana_Karyawan / 100).toLocaleString()}</td>
        </tr>
        <tr>
            <td class="left">Dana Pendidikan</td>
            <td>${data.Dana_Pendidikan}%</td>
            <td>${(Total * data.Dana_Pendidikan / 100).toLocaleString()}</td>
        </tr>
        <tr>
            <td class="left">Dana Sosial</td>
            <td>${data.Dana_Sosial}%</td>
            <td>${(Total * data.Dana_Sosial / 100).toLocaleString()}</td>
        </tr>
        `
        
        const tablecontent = document.querySelector(".table2 tbody")
        tablecontent.insertAdjacentHTML('beforeend', text2)

    })
}
function jatuh_tempo(start, end){
    const body = document.querySelector(".body")
    let text = ''
    if(start && end){
        text = `
            <div class="container">
                <div class="title">
                    <h1>Laporan</h1>
                    <label>Jatuh Tempo</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Jatuh Tempo Pembayaran Kredit</label>
                    </div>
                    <div class="fiture">
                        <input type="text" class="date" placeholder="${start} - ${end}">
                        <div class="print" onclick="form_cetak_table_laporan()"><img src="img/printer.gif"><label>Cetak</label></div>       
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Kode Pinjam</td>
                                <td>Nama Anggota</td>
                                <td>Tanggal Pinjam</td>
                                <td>Tanggal Tempo</td>
                                <td>Lama Pinjam</td>
                                <td>Dibayar</td>
                                <td>Jumlah Tagihan</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>  
        `
    }else{
        text = `
            <div class="container">
                <div class="title">
                    <h1>Laporan</h1>
                    <label>Jatuh Tempo</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Jatuh Tempo Pembayaran Kredit</label>
                    </div>
                    <div class="fiture">
                        <input type="text" class="date" placeholder="Select The Date">
                        <div class="print" onclick="form_cetak_table_laporan()"><img src="img/printer.gif"><label>Cetak</label></div>       
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Kode Pinjam</td>
                                <td>Nama Anggota</td>
                                <td>Tanggal Pinjam</td>
                                <td>Tanggal Tempo</td>
                                <td>Lama Pinjam</td>
                                <td>Dibayar</td>
                                <td>Jumlah Tagihan</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>  
        `
    }
    body.innerHTML = text
    date()

    GetBayarAngsuran().then((data) => {
        let text = ``
        let No = 1
        let Total = 0

        let today = new Date()
        let day = String(today.getDate()).padStart(2, '0');
        let month = String(today.getMonth() + 1).padStart(2, '0');
        let year = today.getFullYear()
        let CurrentTime = `${year}-${month}-${day}`

        if(start && end){
            for (const DataBA of data) {
                if(DataBA.Bulan >= start && DataBA.Bulan <= end){
                    if(DataBA.Bulan <= CurrentTime && DataBA.Bayar == 'Belum'){
                        Notif++
                        Total += DataBA.Angsuran_Per_Bulan
                        text += `
                            <tr>
                                <td>${No++}</td>
                                <td>${DataBA.Uniq_Kode}</td>
                                <td>${DataBA.Nama}</td>
                                <td>${DataBA.Tanggal_Pinjam}</td>
                                <td>${DataBA.Bulan}</td>
                                <td>${DataBA.Lama_Pinjam}</td>
                                <td>${DataBA.Bayar}</td>
                                <td>Rp. ${DataBA.Angsuran_Per_Bulan.toLocaleString()}</td>
                            </tr>
                        `
                    }
                }
            }
            const tablecontent = document.querySelector(".table2 tbody")
            tablecontent.insertAdjacentHTML('beforeend', text)
    
            text = `
            <tr style="font-weight:bold">
                <td colspan="7">Jumlah Total</td>
                <td>Rp. ${Total.toLocaleString()}</td>
            </tr>
            `
            tablecontent.insertAdjacentHTML('beforeend',text)
        }else{
            for (const DataBA of data) {
                if(DataBA.Bulan <= CurrentTime && DataBA.Bayar == 'Belum'){
                    Notif++
                    Total += DataBA.Angsuran_Per_Bulan
                    text += `
                        <tr>
                            <td>${No++}</td>
                            <td>${DataBA.Uniq_Kode}</td>
                            <td>${DataBA.Nama}</td>
                            <td style="color : green; font-weight : bold;">${DataBA.Tanggal_Pinjam}</td>
                            <td style="color : red; font-weight : bold">${DataBA.Bulan}</td>
                            <td>${DataBA.Lama_Pinjam}</td>
                            <td>${DataBA.Bayar}</td>
                            <td>Rp. ${DataBA.Angsuran_Per_Bulan.toLocaleString()}</td>
                        </tr>
                    `
                }
            }
            const tablecontent = document.querySelector(".table2 tbody")
            tablecontent.insertAdjacentHTML('beforeend', text)
    
            text = `
            <tr style="font-weight:bold">
                <td colspan="7">Jumlah Total</td>
                <td>Rp. ${Total.toLocaleString()}</td>
            </tr>
            `
            tablecontent.insertAdjacentHTML('beforeend',text)
        }

    })
}
function kredit_macet(){
    const body = document.querySelector(".body")
    const text = `
        <div class="container">
            <div class="title">
                <h1>Laporan</h1>
                <label>Kredit Macet</label>
            </div>
            <div class="table">
                <div class="table-title">
                    <label>Cetak Kredit Macet</label>
                </div>
                <div class="fiture">
                    <div class="date"></div>
                    <div class="print"  onclick="form_cetak_table_laporan()"><img src="img/printer.gif"><label>Cetak</label></div>       
                </div>
                <div class="table-content">
                <table class="table2">
                    <tbody>
                        <tr class="head">
                            <td>No</td>
                            <td>Kode Pinjam</td>
                            <td>Nama Anggota</td>
                            <td>Tanggal Pinjam</td>
                            <td>Tanggal Tempo</td>
                            <td>Lama Pinjam</td>
                            <td>Jumlah Tagihan</td>
                            <td>Dibayar</td>
                            <td>Sisa Tagihan</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                        </tr>
                        <tr style="font-weight:bold">
                            <td colspan="6">Jumlah Total</td>
                            <td>---</td>
                            <td>---</td>
                            <td>---</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>  
    `
    body.innerHTML = text
}

// <input type="text" class="date" placeholder="${start} - ${end}">
// if(start && end){

// }else if(code){

// }else{
    
// }

// if(code){

// }else{
    
// }