function Find(val){
    const title = document.querySelector('.table-title label').textContent
    title == 'Data Transaksi Pemasukan Kas' ? pemasukan(null, null, val) : 
    title == 'Data Transaksi Pengeluaran Kas' ? pengeluaran(null, null, val) : 
    title == 'Data Transaksi Transfer AntarKas' ? transfer(null, null, val) : 
    title == 'Data Transaksi Setoran Tunai' ? setoran_anggota(null, null, val) : 
    title == 'Data Pinjaman' ? data_pinjaman(null, null, val) : 
    title == 'Bayar Angsuran' ? bayar_angsuran(null, null, val) : 
    title == 'Laporan Data Anggota' ? data_anggota(val) : 
    title == 'Laporan Kas Anggota' ? kas_anggota(val) : 
    title == 'Laporan Transaksi Pemasukan Kas' ? laporan_pemasukan(null, null, val) : 
    title == 'Laporan Transaksi Pengeluaran Kas' ? laporan_pengeluaran(null, null, val) : 
    title == 'Laporan Jurnal Umum' ? jurnal_umum(null, null, val) : 
    title == 'Laporan Transaksi Simpanan Kas' ? kas_simpanan(val) : 
    title == 'Data Transaksi Penarikan' ? penarikan_simpanan(null, null, val) : ''
}