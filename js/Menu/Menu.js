async function beranda(){
    function getFirstAndLastDayOfCurrentMonth() {
        const currentDate = new Date()
        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
        const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
        const formatDate = (date) => {
            const year = date.getFullYear()
            const month = String(date.getMonth() + 1).padStart(2, '0')
            const day = String(date.getDate()).padStart(2, '0')
            return `${year}-${month}-${day}`
        }
    
        let monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        monthNames = monthNames[currentDate.getMonth()]
        return {
            firstDay: formatDate(firstDay),
            lastDay: formatDate(lastDay),
            month: `${monthNames} ${currentDate.getFullYear()}`
        };
    }
    const {firstDay , lastDay, month} = getFirstAndLastDayOfCurrentMonth()
    const DataPinjaman = await GetDataPinjaman()
    .then(async (data) => {
        let JumlahTransaksi = 0
        let JumlahTagihan = 0
        let SisaTagihan = 0

        for (const DataP of data) {
            if(DataP.Tanggal_Pinjam >= firstDay && DataP.Tanggal_Pinjam <= lastDay){
                JumlahTransaksi++
                JumlahTagihan += await GetBayarAngsuran()
                .then((data) => {
                    let JumlahTagihanBayarAngsuran = 0
                    for (const DataBA of data) {
                        if(DataBA.Uniq_Kode == DataP.Uniq_Kode){
                            JumlahTagihanBayarAngsuran += DataBA.Angsuran_Per_Bulan
                        }
                    }
                    return JumlahTagihanBayarAngsuran
                })
                SisaTagihan += DataP.Sisa_Tagihan
            }
        }

        return [JumlahTransaksi, JumlahTagihan, SisaTagihan]
    })
    const DataSimpanan = await GetJenisSimpanan()
    .then(async (data) => {
        const dataSetoranAnggota = await GetSetoranAnggota()
        const dataPenarikanSimpanan = await GetPenarikanSimpanan()
        let SimpananAnggota = 0
        let TotalSimpanan = 0
        let TotalPenarikan = 0

        for (const DataJS of data) {
            for (const DataSA of dataSetoranAnggota) {
                if(DataSA.Tanggal_Transaksi >= firstDay && DataSA.Tanggal_Transaksi <= lastDay){
                    if(DataJS.Jenis_Simpanan == DataSA.Jenis_Simpanan){
                        SimpananAnggota++
                        TotalSimpanan += DataSA.Jumlah
                    }
                }
            }
            for (const DataPS of dataPenarikanSimpanan) {
                if(DataPS.Tanggal_Transaksi >= firstDay && DataPS.Tanggal_Transaksi <= lastDay){
                    if(DataJS.Jenis_Simpanan == DataPS.Jenis_Simpanan){
                        TotalPenarikan += DataPS.Jumlah
                    }
                }
            }
        }

        return [TotalPenarikan, TotalSimpanan, SimpananAnggota]
    })
    const DataJurnalUmum = await GetJurnalUmum()
    .then((data) => {
        let Debet = 0
        let Kredit = 0

        for (const DataJU of data) {
            if(DataJU.Tanggal >= firstDay && DataJU.Tanggal <= lastDay){
                Debet += DataJU.Debet
                Kredit += DataJU.Kredit
            }
        }

        return [Debet, Kredit, (Debet - Kredit)]
    })
    const DataAnggota = await GetDataAnggota()
    .then((data) => {
        let AnggotaAktif = 0
        let AnggotaTidakAktif = 0

        for (const DataA of data) {
            if(DataA.Aktif_Keanggotaan == 'Aktif'){
                AnggotaAktif++
            }else{
                AnggotaTidakAktif++
            }
        }

        return [AnggotaAktif, AnggotaTidakAktif, (AnggotaAktif - AnggotaTidakAktif)]
    })
    const DataPeminjam = await GetDataPinjaman()
    .then((data) => {
        let Peminjam = 0
        let SudahLunas = 0
        let BelumLunas = 0

        for (const DataP of data) {
            Peminjam++
            if(DataP.Lunas == 'Lunas'){
                SudahLunas++
            }else{
                BelumLunas++
            }
        }

        return [Peminjam, SudahLunas, BelumLunas]
    })
    const DataPengguna = await GetLogin()
    .then((data) => {
        let UserAktif = 0
        let UserTidakAktif = 0

        for (const DataP of data) {
            if(DataP.Aktif == 'Aktif'){
                UserAktif++
            }else{
                UserTidakAktif++
            }
        }

        return [UserAktif, UserTidakAktif, (UserAktif + UserTidakAktif)]
    })
    const text = `
    <div class="box">
        <div class="judul">Pinjaman Kredit ${month}</div>
        <div class="detail">
            <div class="angka">
                <div class="angka2">${DataPinjaman[0]}</div>
                <div class="angka2">${DataPinjaman[1].toLocaleString()}</div>
                <div class="angka2">${DataPinjaman[2].toLocaleString()}</div>
            </div>
            <div class="text">
                <div class="text2">Transaksi</div>
                <div class="text2">Jml Tagihan Bulan Ini</div>
                <div class="text2">Sisa Tagihan Bulan Ini</div>
            </div>
        </div>
        <div class="more-info" onclick="kas_pinjaman('${firstDay}' , '${lastDay}')">More - Info</div>
    </div>
    <div class="box">
        <div class="judul">Simpanan ${month}</div>
        <div class="detail">
            <div class="angka">
                <div class="angka2">${DataSimpanan[2]}</div>
                <div class="angka2">${DataSimpanan[0].toLocaleString()}</div>
                <div class="angka2">${DataSimpanan[1].toLocaleString()}</div>
            </div>
            <div class="text">
                <div class="text2">Simpanan Anggota</div>
                <div class="text2">Penarikan Tunai</div>
                <div class="text2">Jumlah Simpanan</div>
            </div>
        </div>
        <div class="more-info" onclick="kas_simpanan()">More - Info</div>
    </div>
    <div class="box">
        <div class="judul">Kas Bulan ${month}</div>
        <div class="detail">
            <div class="angka">
                <div class="angka2">${DataJurnalUmum[0].toLocaleString()}</div>
                <div class="angka2">${DataJurnalUmum[1].toLocaleString()}</div>
                <div class="angka2">${DataJurnalUmum[2].toLocaleString()}</div>
            </div>
            <div class="text">
                <div class="text2">Debet</div>
                <div class="text2">Kredit</div>
                <div class="text2">Jumlah</div>
            </div>
        </div>
        <div class="more-info" onclick="jurnal_umum('${firstDay}' , '${lastDay}')">More - Info</div>
    </div>
    <div class="box">
        <div class="judul">Data Anggota</div>
        <div class="detail">
            <div class="angka">
                <div class="angka2">${DataAnggota[0]}</div>
                <div class="angka2">${DataAnggota[1]}</div>
                <div class="angka2">${DataAnggota[2]}</div>
            </div>
            <div class="text">
                <div class="text2">Anggota Aktif</div>
                <div class="text2">Anggota Tidak Aktif</div>
                <div class="text2">Jumlah Anggota</div>
            </div>
        </div>
        <div class="more-info" onclick="data_anggota()">More - Info</div>
    </div>
    <div class="box">
        <div class="judul">Data Peminjam</div>
        <div class="detail">
            <div class="angka">
                <div class="angka2">${DataPeminjam[0]}</div>
                <div class="angka2">${DataPeminjam[1]}</div>
                <div class="angka2">${DataPeminjam[2]}</div>
            </div>
            <div class="text">
                <div class="text2">Peminjam</div>
                <div class="text2">Sudah Lunas</div>
                <div class="text2">Belum Lunas</div>
            </div>
        </div>
        <div class="more-info" onclick="data_pinjaman()">More - Info</div>
    </div>
    <div class="box">
        <div class="judul">Data Pengguna</div>
        <div class="detail">
            <div class="angka">
                <div class="angka2">${DataPengguna[0]}</div>
                <div class="angka2">${DataPengguna[1]}</div>
                <div class="angka2">${DataPengguna[2]}</div>
            </div>
            <div class="text">
                <div class="text2">User Aktif</div>
                <div class="text2">User Non-Aktif</div>
                <div class="text2">Jumlah User</div>
            </div>
        </div>
        <div class="more-info" onclick="data_pengguna()">More - Info</div>
    </div>
    `
    const body = document.querySelector(".body")
    body.innerHTML = text

    return text
}

function transaksi_kas(){
    const body = document.querySelector(".body")
    const text = `
        <div class="menu-content" onclick="pemasukan()">
            <h3>PEMASUKAN</h3>
            <label>Data Transaksi Pemasukan Kas</label>
        </div>
        <div class="menu-content" onclick="pengeluaran()">
            <h3>PENGELUARAN</h3>
            <label>Data Transaksi Pengeluaran Kas</label>
        </div>
        <div class="menu-content" onclick="transfer()">
            <h3>TRANSFER</h3>
            <label>Data Transaksi Transfer AntarKas</label>
        </div>
    `

    body.innerHTML = text
}

function simpanan (){
    const body = document.querySelector(".body")
    const text = `
        <div class="menu-content" onclick="setoran_anggota()">
            <h3>SETORAN ANGGOTA</h3>
            <label>Data Transaksi Setoran Tunai</label>
        </div>
        <div class="menu-content" onclick="penarikan_simpanan()">
            <h3>PENARIKAN SIMPANAN</h3>
            <label>Data Transaksi Penarikan</label>
        </div>
    `

    body.innerHTML = text
}

function pinjaman (){
    const body = document.querySelector(".body")
    // <div class="menu-content" onclick="data_pengajuan()">
    //     <h3>DATA PENGAJUAN</h3>
    //     <label>Data Pengajuan Pinjaman</label>
    // </div>
    const text = `
        <div class="menu-content" onclick="data_pinjaman()">
            <h3>DATA PINJAMAN</h3>
            <label>Data Pinjaman Anggota</label>
        </div>
        <div class="menu-content" onclick="bayar_angsuran()">
            <h3>BAYAR ANGSURAN</h3>
            <label>Data Pembayaran Angsuran</label>
        </div>
        <div class="menu-content" onclick="pinjaman_lunas()">
            <h3>PINJAMAN LUNAS</h3>
            <label>Data Pelunasan Pinjaman</label>
        </div>
    `

    body.innerHTML = text
}

function laporan (){
    const body = document.querySelector(".body")
    // <div class="menu-content" onclick="kredit_macet()">
    //     <h3>KREDIT MACET</h3>
    //     <label>Kredit Macet</label>
    // </div>
    const text = `
        <div class="menu-content" onclick="data_anggota()">
            <h3>DATA ANGGOTA</h3>
            <label>Data Anggota</label>
        </div>
        <div class="menu-content" onclick="kas_anggota()">
            <h3>KAS ANGGOTA</h3>
            <label> Data Kas Anggota</label>
        </div>
        <div class="menu-content" onclick="laporan_pemasukan()">
            <h3>LAPORAN PEMASUKAN</h3>
            <label>Data Transaksi Pemasukan Kas</label>
        </div>
        <div class="menu-content" onclick="laporan_pengeluaran()">
            <h3>LAPORAN PENGELUARAN</h3>
            <label>Data Transaksi Pengeluaran Kas</label>
        </div>
        <div class="menu-content" onclick="jurnal_umum()">
            <h3>JURNAL UMUM</h3>
            <label>Jurnal Umum</label>
        </div>
        <div class="menu-content" onclick="laba_rugi()">
            <h3>LABA RUGI</h3>
            <label>Laba Rugi</label>
        </div>
        <div class="menu-content" onclick="neraca_saldo()">
            <h3>NERACA SALDO</h3>
            <label>Neraca Saldo</label>
        </div>
        <div class="menu-content" onclick="kas_simpanan()">
            <h3>KAS SIMPANAN</h3>
            <label>Data Simpanan</label>
        </div>
        <div class="menu-content" onclick="kas_pinjaman()">
            <h3>KAS PINJAMAN</h3>
            <label>Data Pinjaman</label>
        </div>
        <div class="menu-content" onclick="shu()">
            <h3>SHU</h3>
            <label>Sisa Hasil Usaha</label>
        </div>
        <div class="menu-content" onclick="jatuh_tempo()">
            <h3>JATUH TEMPO</h3>
            <label>Pembayaran Kredit</label>
        </div>
    `

    body.innerHTML = text
}

function master_data (){
    const body = document.querySelector(".body")
    const text = `
        <div class="menu-content" onclick="jenis_simpanan()">
            <h3>JENIS SIMPANAN</h3>
            <label>Data Jenis Simpanan</label>
        </div>
        <div class="menu-content" onclick="jenis_akun()">
            <h3>JENIS AKUN</h3>
            <label>Data Jenis Akun Transaksi</label>
        </div>
        <div class="menu-content" onclick="data_kas()">
            <h3>DATA KAS</h3>
            <label>Data Jenis Kas</label>
        </div>
        <div class="menu-content" onclick="lama_angsuran()">
            <h3>LAMA ANGSURAN</h3>
            <label>Data Jenis Angsuran</label>
        </div>
        <div class="menu-content" onclick="data_departemen()">
            <h3>DATA DEPARTEMEN</h3>
            <label>Data Jenis Deperteman</label>
        </div>
        <div class="menu-content" onclick="data_pekerjaan()">
            <h3>DATA PEKERJAAN</h3>
            <label>Data Jenis Pekerjaan</label>
        </div>
        <div class="menu-content" onclick="data_barang()">
            <h3>DATA BARANG</h3>
            <label>Data Barang</label>
        </div>
        <div class="menu-content" onclick="data_anggota_masterdata()">
            <h3>DATA ANGGOTA</h3>
            <label>Data Anggota</label>
        </div>
        <div class="menu-content" onclick="data_pengguna()">
            <h3>DATA PENGGUNA</h3>
            <label>Data User</label>
        </div>
    `

    body.innerHTML = text
}

function settings (){
    const body = document.querySelector(".body")
    const text = `
        <div class="menu-content" onclick="identitas_koperasi()">
            <h3>IDENTITAS KOPERASI</h3>
            <label>Data Profil</label>
        </div>
        <div class="menu-content" onclick="bagi_hasil()">
            <h3>BAGI HASIL</h3>
            <label>Biaya dan Administrasi</label>
        </div>

    `

    body.innerHTML = text
}