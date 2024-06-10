function date(){
    let Start, End
    $('.date').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });
  
    $('.date').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('YYYY/MM/DD') + ' - ' + picker.endDate.format('YYYY/MM/DD'));
        Start = picker.startDate
        End = picker.endDate
        ChangeDate(Start.format('YYYY-MM-DD'), End.format('YYYY-MM-DD'))
    });
  
    $('.date').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('Please Select The Date');
        Start = picker.startDate
        End = picker.endDate
        ChangeDate(null, null)

    });
}
function takedatetime(ref){
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    if(ref == 'time'){
        return `${year}${month}${day}_${hours}${minutes}${seconds}`;

    }else{
        return `${year}-${month}-${day} / ${hours}:${minutes}`;
    }

}
function ChangeDate(S,E){
    const table = document.querySelector('.table-title label').textContent
    table == 'Data Transaksi Pemasukan Kas' ? pemasukan(S, E) : 
    table == 'Data Transaksi Pengeluaran Kas' ? pengeluaran(S, E) :
    table == 'Data Transaksi Transfer AntarKas' ? transfer(S, E) : 
    table == 'Data Transaksi Setoran Tunai' ? setoran_anggota(S, E) : 
    table == 'Data Pinjaman' ? data_pinjaman(S, E) : 
    table == 'Bayar Angsuran' ? bayar_angsuran(S, E) : 
    table == 'Laporan Transaksi Pemasukan Kas' ? laporan_pemasukan(S, E) : 
    table == 'Laporan Transaksi Pengeluaran Kas' ? laporan_pengeluaran(S, E) : 
    table == 'Laporan Jurnal Umum' ? jurnal_umum(S, E) : 
    table == 'Laporan Laba Rugi' ? laba_rugi(S, E) : 
    table == 'Laporan Neraca Saldo' ? neraca_saldo(S, E) : 
    table == 'Laporan Transaksi Simpanan Kas' ? kas_simpanan(S, E) : 
    table == 'Laporan Kas Pinjaman' ? kas_pinjaman(S, E) : 
    table == 'Laporan SHU' ? shu(S, E) : 
    table == 'Jatuh Tempo Pembayaran Kredit' ? jatuh_tempo(S, E) : 
    // table == 'Data Transaksi Pemasukan Kas' ? kas_simpanan(S, E) : 
    table == 'Data Transaksi Penarikan' ? penarikan_simpanan(S, E) : ''
}