async function Delete(event){
    async function Delete2(event){

        const arr = []
        const tr = event.target.parentElement.parentElement
        const td = tr.querySelectorAll("td:not([class])")
        td.forEach(element => {
            arr.push(element.textContent)
        });
    
        console.log(arr)
    
        const targetheader = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
        const header = targetheader.querySelector(".table-title label").textContent
        // console.log(header)
        header == 'Data Transaksi Pemasukan Kas' ? (await DeletePemasukan(arr),pemasukan()): 
        header == 'Data Transaksi Pengeluaran Kas' ? (await DeletePengeluaran(arr),pengeluaran()): 
        header == 'Data Transaksi Transfer AntarKas' ? (await DeleteTransfer(arr),transfer()): 
        header == 'Data Transaksi Setoran Tunai' ? (await DeleteSetoranAnggota(arr),setoran_anggota()): 
        header == 'Data Transaksi Penarikan' ? (await DeletePenarikanSimpanan(arr),penarikan_simpanan()): 
        header == 'Data Pinjaman' ? (await DeleteDataPinjaman(arr),data_pinjaman()): 
        header == 'Jenis Simpanan' ? (await DeleteJenisSimpanan(arr),jenis_simpanan()): 
        header == 'Jenis Akun' ? (await DeleteJenisAkun(arr), jenis_akun()): 
        header == 'Jenis Kas' ? (await DeleteDataKas(arr),data_kas()): 
        header == 'Lama Angsuran' ? (await DeleteLamaAngsuran(arr),lama_angsuran()): 
        header == 'Jenis Departemen' ? (await DeleteDataDepartemen(arr),console.log('Departemen'),data_departemen()):
        header == 'Jenis Pekerjaan' ? (await DeleteDataPekerjaan(arr),data_pekerjaan()):
        header == 'Jenis Barang' ? (await DeleteDataBarang(arr),data_barang()): 
        header == 'Data Anggota' ? (await DeleteDataAnggota(arr),data_anggota_masterdata()):
        header == 'Data User' ? (await DeleteLogin(arr),data_pengguna()): ''
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
        title: "Are you sure?",
        text: "Once clicked, it cannot be recover again!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete"
    }).then(async (result) => {
        if(result.isConfirmed){
            await Delete2(event)
            Toast.fire({
                icon: "success",
                title: "Data Deleted Successfully"
            });
        }
    })
}