// Transaksi Kas - Pemasukan
async function GetPemasukan(){
    let response = await fetch(`https://kbmskalteng.my.id:5500/TRPemasukan`,{
        method : "GET"
    })

    let result = await response.json()
    return result
}
async function PostPemasukan(Arr){
    let data = {
        Tanggal_Transaksi : Arr[0],
        Jumlah : Arr[1],
        Uraian : Arr[2],
        Dari_Akun : Arr[3],
        Untuk_Kas : Arr[4],
        User : Arr[5]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/TRPemasukan2", {
        method : "POST",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}
async function UpdatePemasukan(New,Old){
    let data = {
        Tanggal_Transaksi_New : New[0],
        Jumlah_New : New[1],
        Uraian_New : New[2],
        Dari_Akun_New : New[3],
        Untuk_Kas_New : New[4],
        User_New : New[5],
        Tanggal_Transaksi_Old : Old[2],
        Jumlah_Old : Old[6],
        Uraian_Old : Old[3],
        Dari_Akun_Old : Old[5],
        Untuk_Kas_Old : Old[4],
        User_Old : Old[7],

        Kode_Transaksi_Old : Old[1]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/TRPemasukan3", {
        method : "PUT",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}
async function DeletePemasukan(Arr){
    let data = {
        Tanggal_Transaksi : Arr[2],
        Jumlah : Arr[6],
        Uraian : Arr[3],
        Dari_Akun : Arr[5],
        Untuk_Kas : Arr[4],
        User : Arr[7]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/TRPemasukan4", {
        method : "DELETE",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}

// Transaksi Kas - Pengeluaran
async function GetPengeluaran(){
    let response = await fetch(`https://kbmskalteng.my.id:5500/TRPengeluaran`,{
        method : "GET"
    })

    let result = await response.json()
    return result
}
async function PostPengeluaran(Arr){
    let data = {
        Tanggal_Transaksi : Arr[0],
        Jumlah : Arr[1],
        Uraian : Arr[2],
        Dari_Akun : Arr[3],
        Untuk_Kas : Arr[4],
        User : Arr[5]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/TRPengeluaran2", {
        method : "POST",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)
}
async function UpdatePengeluaran(New,Old){
    let data = {
        Tanggal_Transaksi_New : New[0],
        Jumlah_New : New[1],
        Uraian_New : New[2],
        Dari_Akun_New : New[3],
        Untuk_Kas_New : New[4],
        User_New : New[5],
        Tanggal_Transaksi_Old : Old[2],
        Jumlah_Old : Old[6],
        Uraian_Old : Old[3],
        Dari_Akun_Old : Old[5],
        Untuk_Kas_Old : Old[4],
        User_Old : Old[7]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/TRPengeluaran3", {
        method : "PUT",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)
}
async function DeletePengeluaran(Arr){
    let data = {
        Tanggal_Transaksi : Arr[2],
        Jumlah : Arr[6],
        Uraian : Arr[3],
        Dari_Kas : Arr[5], // 
        Untuk_Akun : Arr[4], // 
        User : Arr[7]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/TRPengeluaran4", {
        method : "DELETE",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)
}

// Transaksi Kas - Transfer
async function GetTransfer(){
    let response = await fetch(`https://kbmskalteng.my.id:5500/TRTransfer`,{
        method : "GET"
    })

    let result = await response.json()
    return result
}
async function PostTransfer(Arr){
    let data = {
        Tanggal_Transaksi : Arr[0],
        Jumlah : Arr[1],
        Uraian : Arr[2],
        Dari_Kas : Arr[3],
        Untuk_Akun : Arr[4],
        User : Arr[5]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/TRTransfer2", {
        method : "POST",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)
}
async function UpdateTransfer(New,Old){
    let data = {
        Tanggal_Transaksi_New : New[0],
        Jumlah_New : New[1],
        Uraian_New : New[2],
        Dari_Kas_New : New[3],
        Untuk_Akun_New : New[4],
        User_New : New[5],
        Tanggal_Transaksi_Old : Old[2],
        Jumlah_Old : Old[6],
        Uraian_Old : Old[3],
        Dari_Kas_Old : Old[5],
        Untuk_Akun_Old : Old[4],
        User_Old : Old[7]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/TRTransfer3", {
        method : "PUT",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)
}
async function DeleteTransfer(Arr){
    let data = {
        Tanggal_Transaksi : Arr[2],
        Jumlah : Arr[6],
        Uraian : Arr[3],
        Dari_Kas : Arr[5],
        Untuk_Akun : Arr[4],
        User : Arr[7]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/TRTransfer4", {
        method : "DELETE",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)
}

// Simpanan - Setoran Anggota
async function GetSetoranAnggota(){
    let response = await fetch(`https://kbmskalteng.my.id:5500/SSetoranAnggota`,{
        method : "GET"
    })

    let result = await response.json()
    return result
}
async function PostSetoranAnggota(Arr){
    let data = {
        Tanggal_Transaksi : Arr[0],
        Nama : Arr[1],
        Jenis_Simpanan : Arr[2],
        Jumlah : Arr[3],
        Keterangan : Arr[4],
        Simpan_Ke_Kas : Arr[5],
        User : Arr[6]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/SSetoranAnggota2", {
        method : "POST",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)
}
async function UpdateSetoranAnggota(New, Old){
    let data = {
        Tanggal_Transaksi_New : New[0],
        Nama_New : New[1],
        Jenis_Simpanan_New : New[2],
        Jumlah_New : New[3],
        Keterangan_New : New[4],
        Simpan_Ke_Kas_New : New[5],
        User_New : New[6],

        Tanggal_Transaksi_Old : Old[2],
        Nama_Old : Old[4],
        Jenis_Simpanan_Old : Old[6],
        Jumlah_Old : Old[7],
        Keterangan_Old : Old[8],
        Simpan_Ke_Kas_Old : Old[9],
        User_Old : Old[10]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/SSetoranAnggota3", {
        method : "PUT",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)
}
async function DeleteSetoranAnggota(Arr){
    let data = {
        Tanggal_Transaksi : Arr[2],
        Nama : Arr[4],
        Jenis_Simpanan : Arr[6],
        Jumlah : Arr[7],
        Keterangan : Arr[8],
        Simpan_Ke_Kas : Arr[9],
        User : Arr[10]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/SSetoranAnggota4", {
        method : "DELETE",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)
}

// Simpanan - Penarikan Simpanan
async function GetPenarikanSimpanan(){
    let response = await fetch(`https://kbmskalteng.my.id:5500/SPenarikanSimpanan`,{
        method : "GET"
    })

    let result = await response.json()
    return result
}
async function PostPenarikanSimpanan(Arr){
    let data = {
        Tanggal_Transaksi : Arr[0],
        Nama : Arr[1],
        Jenis_Simpanan : Arr[2],
        Jumlah : Arr[3],
        Keterangan : Arr[4],
        Ambil_Dari_Kas : Arr[5],
        User : Arr[6]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/SPenarikanSimpanan2", {
        method : "POST",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)
}
async function UpdatePenarikanSimpanan(New, Old){
    let data = {
        Tanggal_Transaksi_New : New[0],
        Nama_New : New[1],
        Jenis_Simpanan_New : New[2],
        Jumlah_New : New[4],
        Keterangan_New : New[5],
        Simpan_Ke_Kas_New : New[6],
        User_New : New[7],

        Tanggal_Transaksi_Old : Old[2],
        Nama_Old : Old[4],
        Jenis_Simpanan_Old : Old[6],
        Jumlah_Old : Old[7],
        Keterangan_Old : Old[8],
        Simpan_Ke_Kas_Old : Old[9],
        User_Old : Old[10]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/SPenarikanSimpanan3", {
        method : "PUT",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)
}
async function DeletePenarikanSimpanan(Arr){
    let data = {
        Tanggal_Transaksi : Arr[2],
        Nama : Arr[4],
        Jenis_Simpanan : Arr[6],
        Jumlah : Arr[7],
        Keterangan : Arr[8],
        Ambil_Dari_Kas : Arr[9],
        User : Arr[10]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/SPenarikanSimpanan4", {
        method : "DELETE",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)
}

// Pinjaman - Data Pinjaman
async function GetDataPinjaman(){
    let response = await fetch(`https://kbmskalteng.my.id:5500/PDataPinjaman`,{
        method : "GET"
    })

    let result = await response.json()
    return result
}
async function PostDataPinjaman(Arr){
    let data = {
        Tanggal_Pinjam : Arr[0],
        Nama_Anggota : Arr[1],
        Item : Arr[2],
        Nominal : Arr[3],
        Lama_Angsuran : Arr[4],
        Bunga : Arr[5],
        Biaya_Admin : Arr[6],
        Ambil_Dari_Kas : Arr[7],
        Keterangan : Arr[8],
        Sisa_Angsuran : Arr[4],
        User : Arr[9]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/PDataPinjaman2", {
        method : "POST",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)
}
async function UpdateDataPinjaman(New, Old){
    let data = {
        Tanggal_Pinjam_New : New[0],
        Nama_Anggota_New : New[1],
        Item_New : New[2],
        Nominal_New : New[3],
        Lama_Angsuran_New : New[4],
        Bunga_New : New[5],
        Biaya_Admin_New : New[6],
        Ambil_Dari_Kas_New : New[7],
        Keterangan_New : New[8],
        Sisa_Angsuran_New : New[4],
        User_New : New[9],

        Sisa_Angsuran : Old[53] - New[4],

        Kode_Old : Old[1], //Unique Key (Uniq_kode)

        Tanggal_Pinjam_Old : Old[2],
        Nama_Anggota_Old : Old[9],
        Item_Old : Old[19],
        Nominal_Old : Old[22],
        Lama_Angsuran_Old : Old[25],
        Bunga_Old : New[5],
        Biaya_Admin_Old : Old[37],
        Ambil_Dari_Kas_Old : Old[57],
        Keterangan_Old : '',
        Sisa_Angsuran_Old : Old[53],
        User_Old : Old[59],
        Jumlah_Denda_Old : Old[44],
        Sudah_Dibayar_Old : Old[50],
        Sisa_Angsuran_Old : Old[53],
        Sisa_Tagihan_Old : Old[56],
        Lunas_Old : Old[58]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/PDataPinjaman3", {
        method : "PUT",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)
}
async function DeleteDataPinjaman(Arr){
    let data = {
        Uniq_Kode : Arr[1],
        Tanggal_Pinjam : Arr[2],
        Nominal : parseInt(Arr[22].replace(/,/g, ''), 10),
        Lama_Angsuran : Arr[25],
        Ambil_Dari_Kas : Arr[57]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/PDataPinjaman4", {
        method : "DELETE",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)
}

// Pinjaman - Bayar Angsuran
async function GetBayarAngsuran(){
    let response = await fetch(`https://kbmskalteng.my.id:5500/PBayarAngsuran`,{
        method : "GET"
    })

    let result = await response.json()
    return result
}
async function UpdateBayarAngsuran(New, Old){
    let data = {
        Uniq_Kode : Old[1],
        Bulan : New[3],
        Simpan_Ke_Kas : New[4]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/PBayarAngsuran3", {
        method : "PUT",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)
}

// Laporan - Jurnal Umum
async function GetJurnalUmum(){
    let response = await fetch(`https://kbmskalteng.my.id:5500/LJurnalUmum`,{
        method : "GET"
    })

    let result = await response.json()
    return result
}

// Master Data - Jenis Simpanan
async function GetJenisSimpanan(){
    let response = await fetch(`https://kbmskalteng.my.id:5500/MDJenisSimpanan`,{
        method : "GET"
    })

    let result = await response.json()
    return result
}
async function PostJenisSimpanan(Jenis_Simpanan, Kode_Akun, Tampil){
    let data = {
        Jenis_Simpanan : Jenis_Simpanan,
        Kode_Akun : Kode_Akun,
        Tampil : Tampil
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/MDJenisSimpanan2", {
        method : "POST",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}
async function UpdateJenisSimpanan(New,Old){
    let data = {
        Jenis_Simpanan_New : New[0],
        Jumlah_New : New[1],
        Tampil_New : New[2],
        Jenis_Simpanan_Old : Old[1],
        Jumlah_Old : Old[2],
        Tampil_Old : Old[3]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/MDJenisSimpanan3", {
        method : "PUT",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}
async function DeleteJenisSimpanan(Arr){
    let data = {
        Jenis_Simpanan : Arr[1],
        Kode_Akun : Arr[2],
        Tampil : Arr[3]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/MDJenisSimpanan4", {
        method : "DELETE",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}

// Master Data - Jenis Akun
async function GetJenisAkun(){
    let response = await fetch(`https://kbmskalteng.my.id:5500/MDJenisAkun`,{
        method : "GET"
    })

    let result = await response.json()
    return result
}
async function PostJenisAkun(Kode_Aktiva, Jenis_Transaksi, Akun, Pemasukan, Pengeluaran, Aktif, Laba_Rugi){
    let data = {
        Kode_Aktiva : Kode_Aktiva,
        Jenis_Transaksi : Jenis_Transaksi,
        Akun : Akun,
        Pemasukan : Pemasukan,
        Pengeluaran : Pengeluaran,
        Aktif : Aktif,
        Laba_Rugi : Laba_Rugi
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/MDJenisAkun2", {
        method : "POST",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}
async function UpdateJenisAkun(New,Old){
    let data = {
        Kode_Aktiva_New : New[0],
        Jenis_Transaksi_New : New[1],
        Akun_New : New[2],
        Pemasukan_New : New[3],
        Pengeluaran_New : New[4],
        Aktif_New : New[5],
        Laba_Rugi_New: New[6],
        
        Kode_Aktiva_Old : Old[1],
        Jenis_Transaksi_Old : Old[2],
        Akun_Old : Old[3],
        Pemasukan_Old : Old[4],
        Pengeluaran_Old : Old[5],
        Aktif_Old : Old[6],
        Laba_Rugi_Old: Old[7]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/MDJenisAkun3", {
        method : "PUT",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}
async function DeleteJenisAkun(Arr){
    let data = {
        Kode_Aktiva : Arr[1],
        Jenis_Transaksi : Arr[2],
        Akun : Arr[3],
        Pemasukan : Arr[4],
        Pengeluaran : Arr[5],
        Aktif : Arr[6],
        Laba_Rugi: Arr[7]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/MDJenisAkun4", {
        method : "DELETE",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}

// Master Data - Data Kas
async function GetDataKas(){
    let response = await fetch(`https://kbmskalteng.my.id:5500/MDDataKas`,{
        method : "GET"
    })

    let result = await response.json()
    return result
}
async function PostDataKas(Nama_Kas, Aktif, Simpanan, Penarikan, Pinjaman, Angsuran, Pemasukan_Kas, Pengeluaran_Kas, Transfer_Kas){
    let data = {
        Nama_Kas : Nama_Kas,
        Aktif : Aktif,
        Simpanan : Simpanan,
        Penarikan : Penarikan,
        Pinjaman : Pinjaman,
        Angsuran : Angsuran,
        Pemasukan_Kas : Pemasukan_Kas,
        Pengeluaran_Kas : Pengeluaran_Kas,
        Transfer_Kas : Transfer_Kas
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/MDDataKas2", {
        method : "POST",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}
async function UpdateDataKas(New,Old){
    let data = {
        Nama_Kas_New : New[0],
        Aktif_New : New[1],
        Simpanan_New : New[2],
        Penarikan_New : New[3],
        Pinjaman_New : New[4],
        Angsuran_New : New[5],
        Pemasukan_Kas_New : New[6],
        Pengeluaran_Kas_New : New[7],
        Transfer_Kas_New : New[8],
        
        Nama_Kas_Old : Old[1],
        Aktif_Old : Old[2],
        Simpanan_Old : Old[3],
        Penarikan_Old : Old[4],
        Pinjaman_Old : Old[5],
        Angsuran_Old : Old[6],
        Pemasukan_Kas_Old : Old[7],
        Pengeluaran_Kas_Old : Old[8],
        Transfer_Kas_Old : Old[9],
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/MDDataKas3", {
        method : "PUT",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}
async function DeleteDataKas(Arr){
    let data = {
        Nama_Kas : Arr[1],
        Aktif : Arr[2],
        Simpanan : Arr[3],
        Penarikan : Arr[4],
        Pinjaman : Arr[5],
        Angsuran : Arr[6],
        Pemasukan_Kas : Arr[7],
        Pengeluaran_Kas : Arr[8],
        Transfer_Kas : Arr[9]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/MDDataKas4", {
        method : "DELETE",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}

// Master Data - Lama Angsuran
async function GetLamaAngsuran(){
    let response = await fetch(`https://kbmskalteng.my.id:5500/MDLamaAngsuran`,{
        method : "GET"
    })

    let result = await response.json()
    return result
}
async function PostLamaAngsuran(Lama_Angsuran, Aktif){
    let data = {
        Lama_Angsuran : Lama_Angsuran,
        Aktif : Aktif
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/MDLamaAngsuran2", {
        method : "POST",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}
async function UpdateLamaAngsuran(New,Old){
    let data = {
        Lama_Angsuran_New : New[0],
        Aktif_New : New[1],
        Lama_Angsuran_Old : Old[1],
        Aktif_Old : Old[2],
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/MDLamaAngsuran3", {
        method : "PUT",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}
async function DeleteLamaAngsuran(Arr){
    let data = {
        Lama_Angsuran : Arr[1],
        Aktif : Arr[2]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/MDLamaAngsuran4", {
        method : "DELETE",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}

// Master Data - Data Departemen
async function GetDataDepartemen(){
    let response = await fetch(`https://kbmskalteng.my.id:5500/MDJenisDepartemen`,{
        method : "GET"
    })

    let result = await response.json()
    return result
}
async function PostDataDepartemen(Nama_Departemen){
    let data = {
        Nama_Departemen : Nama_Departemen
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/MDJenisDepartemen2", {
        method : "POST",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}
async function UpdateDataDepartemen(New,Old){
    let data = {
        Nama_Departemen_New : New[0],
        Nama_Departemen_Old : Old[1]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/MDJenisDepartemen3", {
        method : "PUT",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}
async function DeleteDataDepartemen(Arr){
    let data = {
        Nama_Departemen : Arr[1]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/MDJenisDepartemen4", {
        method : "DELETE",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}

// Master Data - Data Pekerjaan
async function GetDataPekerjaan(){
    let response = await fetch(`https://kbmskalteng.my.id:5500/MDDataPekerjaan`,{
        method : "GET"
    })

    let result = await response.json()
    return result
}
async function PostDataPekerjaan(Nama_Pekerjaan){
    let data = {
        Nama_Pekerjaan : Nama_Pekerjaan
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/MDDataPekerjaan2", {
        method : "POST",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}
async function UpdateDataPekerjaan(New,Old){
    let data = {
        Nama_Pekerjaan_New : New[0],
        Nama_Pekerjaan_Old : Old[1]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/MDDataPekerjaan3", {
        method : "PUT",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}
async function DeleteDataPekerjaan(Arr){
    let data = {
        Nama_Pekerjaan : Arr[1]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/MDDataPekerjaan4", {
        method : "DELETE",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}

// Master Data - Data Barang
async function GetDataBarang(){
    let response = await fetch(`https://kbmskalteng.my.id:5500/MDDataBarang`,{
        method : "GET"
    })

    let result = await response.json()
    return result
}
async function PostDataBarang(Nama_Barang, Type, Merk, Harga, Jumlah_Barang, Ket){
    let data = {
        Nama_Barang : Nama_Barang,
        Type : Type,
        Merk : Merk,
        Harga : Harga,
        Jumlah_Barang : Jumlah_Barang,
        Ket : Ket
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/MDDataBarang2", {
        method : "POST",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}
async function UpdateDataBarang(New,Old){
    let data = {
        Nama_Barang_New : New[0],
        Type_New : New[1],
        Merk_New : New[2],
        Harga_New : New[3],
        Jumlah_Barang_New : New[4],
        Ket_New : New[5],
        Nama_Barang_Old : Old[1],
        Type_Old : Old[2],
        Merk_Old : Old[3],
        Harga_Old : Old[4],
        Jumlah_Barang_Old : Old[5],
        Ket_Old : Old[6]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/MDDataBarang3", {
        method : "PUT",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}
async function DeleteDataBarang(Arr){
    let data = {
        Nama_Barang : Arr[1],
        Type : Arr[2],
        Merk : Arr[3],
        Harga : Arr[4],
        Jumlah_Barang : Arr[5],
        Ket : Arr[6]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/MDDataBarang4", {
        method : "DELETE",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}

// Master Data - Data Anggota
async function GetDataAnggota(){
    let response = await fetch(`https://kbmskalteng.my.id:5500/MDDataAnggota`,{
        method : "GET"
    })

    let result = await response.json()
    return result
}
async function PostDataAnggota(Username, Nama_Lengkap, JK, Alamat, Kota, Jabatan, Departemen, Tgl_Registrasi, Aktif_Keanggotaan){
    let data = {
        Username : Username,
        Nama_Lengkap : Nama_Lengkap,
        JK : JK,
        Alamat : Alamat,
        Kota : Kota,
        Jabatan : Jabatan,
        Departemen : Departemen,
        Tgl_Registrasi : Tgl_Registrasi,
        Aktif_Keanggotaan : Aktif_Keanggotaan
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/MDDataAnggota2", {
        method : "POST",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}
async function UpdateDataAnggota(New,Old){
    let data = {
        Username_New : New[0],
        Nama_Lengkap_New : New[1],
        JK_New : New[2],
        Alamat_New : New[3],
        Kota_New : New[4],
        Jabatan_New : New[5],
        Departemen_New : New[6],
        Tgl_Registrasi_New : New[7],
        Aktif_Keanggotaan_New : New[8],

        Username_Old : Old[2],
        Nama_Lengkap_Old : Old[3],
        JK_Old : Old[4],
        Alamat_Old : Old[5],
        Kota_Old : Old[6],
        Jabatan_Old : Old[7],
        Departemen_Old : Old[8],
        Tgl_Registrasi_Old : Old[9],
        Aktif_Keanggotaan_Old : Old[10]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/MDDataAnggota3", {
        method : "PUT",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}
async function DeleteDataAnggota(Arr){
    let data = {
        Username : Arr[2],
        Nama_Lengkap : Arr[3],
        JK : Arr[4],
        Alamat : Arr[5],
        Kota : Arr[6],
        Jabatan : Arr[7],
        Departemen : Arr[8],
        Tgl_Registrasi : Arr[9],
        Aktif_Keanggotaan : Arr[10]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/MDDataAnggota4", {
        method : "DELETE",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}

// Master Data - Data Pengguna
function check_login(){
    GetLogin().then((data)=>{
        let username = document.querySelector(".Username input").value;
        let password = document.querySelector(".Password input").value;
        let checking = false
        for (const Database of data) {
            if(username == Database.Username && password == Database.Password){
                checking = true
            }
        }
        if(checking){
            window.location.href = "Beranda.html"
        }else{
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
            icon: "error",
            title: "Username atau password salah!"
            });
        }
    })   
}
async function GetLogin(){
    let response = await fetch(`https://kbmskalteng.my.id:5500/MDDataPengguna`,{
        method : "GET"
    })

    let result = await response.json()
    return result
}
async function PostLogin(Username,Password,Level,Aktif){
    let data = {
        Username : Username,
        Level : Level,
        Password : Password,
        Aktif : Aktif
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/MDDataPengguna2", {
        method : "POST",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}
async function UpdateLogin(New,Old){
    let data = {
        Username_New : New[0],
        Level_New : New[2],
        Password_New : New[1],
        Aktif_New : New[3],
        Username_Old : Old[1],
        Level_Old : Old[2],
        Aktif_Old : Old[3]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/MDDataPengguna3", {
        method : "PUT",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}
async function DeleteLogin(Arr){
    let data = {
        Username : Arr[1],
        Level : Arr[2],
        Aktif : Arr[3]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/MDDataPengguna4", {
        method : "DELETE",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}

// Settings - Identitas Koperasi
async function GetIdentitasKoperasi(){
    let response = await fetch(`https://kbmskalteng.my.id:5500/STIdentitasKoperasi`,{
        method : "GET"
    })

    let result = await response.json()
    return result
}
async function PostIdentitasKoperasi(arr){
    let data = {
        Nama_Koperasi : arr[0],
        Nama_Pimpinan : arr[1],
        No_HP : arr[2],
        Alamat : arr[3],
        Telepon : arr[4],
        Kota : arr[5],
        Email : arr[6],
        Website : arr[7]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/STIdentitasKoperasi2", {
        method : "POST",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}
async function UpdateIdentitasKoperasi(New){
    let data = {
        Nama_Koperasi : New[0],
        Nama_Pimpinan : New[1],
        No_HP : New[2],
        Alamat : New[3],
        Telepon : New[4],
        Kota : New[5],
        Email : New[6],
        Website : New[7],
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/STIdentitasKoperasi3", {
        method : "PUT",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}

// Settings - Bagi Hasil
async function GetBagiHasil(){
    let response = await fetch(`https://kbmskalteng.my.id:5500/STBagiHasil`,{
        method : "GET"
    })

    let result = await response.json()
    return result
}
async function PostBagiHasil(arr){
    let data = {
        Suku_Bunga : arr[0],
        Biaya_Administrasi : arr[1],
        Biaya_Denda : arr[2],
        Tempo_Tanggal_Pembayaran : arr[3],
        Kota : arr[4],
        Jasa_Anggota : arr[5],
        Dana_Cadangan : arr[6],
        Dana_Pengurus : arr[7],
        Dana_Karyawan : arr[8],
        Dana_Pendidikan : arr[9],
        Dana_Sosial : arr[10],
        Jasa_Usaha : arr[11],
        Jasa_Modal_Anggota : arr[12],
        Pajak_PPh : arr[13],
        Dana_Pengawas : arr[14],
        Dana_Asuransi : arr[15],
        Limit_Pagu_Pinjaman : arr[16]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/STBagiHasil2", {
        method : "POST",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}
async function UpdateBagiHasil(New){
    let data = {
            Tipe_Pinjaman_Bunga : New[0],
            Suku_Bunga : New[1],
            Biaya_Administrasi : New[2],
            Biaya_Denda : New[3],
            Tempo_Tanggal_Pembayaran : New[4],
            Kota : New[5],
            Jasa_Anggota : New[6],
            Dana_Cadangan : New[7],
            Dana_Pengurus : New[8],
            Dana_Karyawan : New[9],
            Dana_Pendidikan : New[10],
            Dana_Sosial : New[11],
            Jasa_Usaha : New[12],
            Jasa_Modal_Anggota : New[13],
            Pajak_PPh : New[14],
            Dana_Pengawas : New[15],
            Dana_Asuransi : New[16],
            Limit_Pagu_Pinjaman : New[17]
    }

    let response = await fetch("https://kbmskalteng.my.id:5500/STBagiHasil3", {
        method : "PUT",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}