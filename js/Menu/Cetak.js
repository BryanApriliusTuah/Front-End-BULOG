// Fiture
async function header(){
    const IdentitasKoperasi = await GetIdentitasKoperasi()
    .then((data) => {
        const identitas = {
            Nama_Koperasi: data[0].Nama_Koperasi,
            Nama_Pimpinan: data[0].Nama_Pimpinan,
            No_HP: data[0].No_HP,
            Alamat: data[0].Alamat,
            Telepon: data[0].Telepon,
            Kota: data[0].Kota,
            Email: data[0].Email,
            Website: data[0].Website
        }

        return identitas;
    })

    return `
        <header >
            <div class="logo">
                <img src="img/eKoperasi.png" alt="">
            </div>
            <div class="information">
                <div class="title_header">E-KOPERASI</div>
                <div class="detail_header">
                    ${IdentitasKoperasi.Alamat}, ${IdentitasKoperasi.Kota} Tel.${IdentitasKoperasi.Telepon}<br>
                    Email : ${IdentitasKoperasi.Email}<br>
                    Web : ${IdentitasKoperasi.Website}
                </div>
            </div>
        </header>
    `
}
function cetak_simpanan(event,ref){
    var textArray = []
    var trElement = event.target.closest('tr');
    var tdElements = trElement.querySelectorAll('td:not(.cetak):not(.edit):not(.delete)');

    tdElements.forEach(function(td) {
        textArray.push(td.textContent.trim());
    });

    console.log(textArray)
    let text = ''
    if(ref == 'setoran_anggota'){
        text = `
        <div class="print-simpanan-header">
            <div class="bukti-simpanan">BUKTI SETORAN TUNAI</div>
            <div class="title-simpanan">
                <div class="koperasi-simpanan">KOPERASI BERKAH SUKSES MANDIRI</div>
                <div class="alamat-simpanan">PULO GADUNG JAKARTA TIMUR</div>
            </div>
        </div>
        <div class="simpanan-body">
            <table>
                <tr>
                    <td>Tanggal Transaksi</td>
                    <td>:</td>
                    <td>${textArray[2]}</td>
                </tr>
                <tr>
                    <td>Nomor Transaksi</td>
                    <td>:</td>
                    <td>${textArray[1]}</td>
                </tr>
                <tr>
                    <td>ID Anggota</td>
                    <td>:</td>
                    <td>${textArray[3]}</td>
                </tr>
                <tr>
                    <td>Nama Anggota</td>
                    <td>:</td>
                    <td>${textArray[4]}</td>
                </tr>
                <tr>
                    <td>Dept</td>
                    <td>:</td>
                    <td>${textArray[5]}</td>
                </tr>
                <tr>
                    <td>Nama Penyetor</td>
                    <td>:</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Alamat</td>
                    <td>:</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Jenis Simpanan</td>
                    <td>:</td>
                    <td>${textArray[6]}</td>
                </tr>
                <tr>
                    <td>Jumlah Setoran</td>
                    <td>:</td>
                    <td>Rp. ${textArray[7]}</td>
                </tr>
                <tr>
                    <td>Terbilang</td>
                    <td>:</td>
                    <td>${numberToWordsIndonesian(textArray[7])} Rupiah</td>
                </tr>
            </table>
            <div class="table2">
                <table>
                    <tr>
                        <td>Tanggal Cetak</td>
                        <td>:</td>
                        <td>${takedatetime()}</td>
                    </tr>
                    <tr>
                        <td>User Akun</td>
                        <td>:</td>
                        <td>${textArray[8]}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>:</td>
                        <td>SUKSES</td>
                    </tr>
                </table>
                <div class="paraf-simpanan">
                    <p>Paraf, </p>
                    <div class="ttd-simpanan"></div>
                </div>
            </div>
        </div>
        <div class="simpanan-footer">
            Ref. ${takedatetime("time")} <br>
            Informasi Hubungi Call Center : 0123456789 <br>
            atau dapat diakses melalui : www.helloworld.com <br><br>
            ** Tanda terima ini sah jika telah dibubuhi cap dan tanda tangan oleh Admin **
        </div>
        `
    }else if(ref == 'penarikan_simpanan'){
        text = `
        <div class="print-simpanan-header">
            <div class="bukti-simpanan">BUKTI SETORAN TUNAI</div>
            <div class="title-simpanan">
                <div class="koperasi-simpanan">KOPERASI BERKAH SUKSES MANDIRI</div>
                <div class="alamat-simpanan">PULO GADUNG JAKARTA TIMUR</div>
            </div>
        </div>
        <div class="simpanan-body">
            <table>
                <tr>
                    <td>Tanggal Transaksi</td>
                    <td>:</td>
                    <td>${textArray[2]}</td>
                </tr>
                <tr>
                    <td>Nomor Transaksi</td>
                    <td>:</td>
                    <td>${textArray[1]}</td>
                </tr>
                <tr>
                    <td>ID Anggota</td>
                    <td>:</td>
                    <td>${textArray[3]}</td>
                </tr>
                <tr>
                    <td>Nama Anggota</td>
                    <td>:</td>
                    <td>${textArray[4]}</td>
                </tr>
                <tr>
                    <td>Dept</td>
                    <td>:</td>
                    <td>${textArray[5]}</td>
                </tr>
                <tr>
                    <td>Nama Penyetor</td>
                    <td>:</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Alamat</td>
                    <td>:</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Jenis Simpanan</td>
                    <td>:</td>
                    <td>${textArray[6]}</td>
                </tr>
                <tr>
                    <td>Jumlah Setoran</td>
                    <td>:</td>
                    <td>Rp. ${textArray[7]}</td>
                </tr>
                <tr>
                    <td>Terbilang</td>
                    <td>:</td>
                    <td>${numberToWordsIndonesian(textArray[7])} Rupiah</td>
                </tr>
            </table>
            <div class="table2">
                <table>
                    <tr>
                        <td>Tanggal Cetak</td>
                        <td>:</td>
                        <td>${takedatetime()}</td>
                    </tr>
                    <tr>
                        <td>User Akun</td>
                        <td>:</td>
                        <td>${textArray[10]}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>:</td>
                        <td>SUKSES</td>
                    </tr>
                </table>
                <div class="paraf-simpanan">
                    <p>Paraf, </p>
                    <div class="ttd-simpanan"></div>
                </div>
            </div>
        </div>
        <div class="simpanan-footer">
            Ref. ${takedatetime("time")} <br>
            Informasi Hubungi Call Center : 0123456789 <br>
            atau dapat diakses melalui : www.helloworld.com <br><br>
            ** Tanda terima ini sah jika telah dibubuhi cap dan tanda tangan oleh Admin **
        </div>
        `
    }
    
    const originbody = document.querySelector("body").innerHTML
    document.querySelector("body").innerHTML = text
    window.print();
    document.querySelector("body").innerHTML = originbody
}
function cetak_data_pengajuan(event){
    var textArray = []
    var trElement = event.target.closest('tr');
    var tdElements = trElement.querySelectorAll('td:not(.cetak):not(.edit):not(.delete)');

    tdElements.forEach(function(td) {
        textArray.push(td.textContent.trim());
    });

    console.log(textArray)
    const text =
    `
        <div class="print-pinjaman-header">
            <div class="title-pinjaman">
                <div class="koperasi-pinjaman">KOPERASI BERKAH SUKSES MANDIRI</div>
                <div class="alamat-pinjaman">PALANGKA RAYA, KALIMANTAN TENGAH, Telp. 08123456789</div>
            </div>
            <div class="bukti-pinjaman">
                <div class="bukti-pengajuan-pinjaman">BUKTI PENGAJUAN DANA KREDIT</div>
                <div class="ref-pinjaman">Ref. ${takedatetime("time")}</div>
            </div>
        </div>
        <div class="pinjaman-body">
            <div class="table1-pinjaman">
                <label>Identitas Anggota</label>
                <table>
                    <tr>
                        <td>Id Anggota</td>
                        <td>:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Nama Anggota</td>
                        <td>:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Departement</td>
                        <td>:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Alamat</td>
                        <td>:</td>
                        <td></td>
                    </tr>
                </table>
            </div>
            <div class="table2-pinjaman">
                <label>Rincian Pengajuan</label>
                <table>
                    <tr>
                        <td>ID Ajuan</td>
                        <td>:</td>
                        <td>${textArray[0]}</td>
                    </tr>
                    <tr>
                        <td>Tanggal Pengajuan</td>
                        <td>:</td>
                        <td>${textArray[1]}</td>
                    </tr>
                    <tr>
                        <td>Jumlah Pinjaman</td>
                        <td>:</td>
                        <td>${textArray[4]}</td>
                    </tr>
                    <tr>
                        <td>Status Ajuan</td>
                        <td>:</td>
                        <td>${textArray[7]}</td>
                    </tr>
                    <tr>
                        <td>Tanggal Pencairan</td>
                        <td>:</td>
                        <td>${textArray[1]}</td>
                    </tr>
                    <tr>
                        <td>Lama Angsuran</td>
                        <td>:</td>
                        <td>${textArray[5]}</td>
                    </tr>

                </table>
            </div>
        </div>
        <div class="pinjaman-footer">
            <div class="paraf-pinjaman">
                <p>Palangka Raya , ${takedatetime("tanggal")}</p>
                <p>KOPEL. DIVREKALTENG@GMAIL.COM</p>
            </div>
            <p>** Tanda terima ini sah jika telah dibubuhi cap dan tanda tangan oleh Admin **</p>
        </div>
    `
    const originbody = document.querySelector("body").innerHTML
    document.querySelector("body").innerHTML = text
    window.print();
    document.querySelector("body").innerHTML = originbody
}
function cetak_data_pinjaman(event){
    var textArray = []
    var trElement = event.target.closest('tr');
    var tdElements = trElement.querySelectorAll('td:not(.cetak):not(.edit):not(.delete)');

    tdElements.forEach(function(td) {
        textArray.push(td.textContent.trim());
    });

    console.log(textArray)
    const text =
    `
        <div class="print-pinjaman-header">
            <div class="title-pinjaman">
                <div class="koperasi-pinjaman">KOPERASI BERKAH SUKSES MANDIRI</div>
                <div class="alamat-pinjaman">PALANGKA RAYA, KALIMANTAN TENGAH, Telp. 08123456789</div>
            </div>
            <div class="bukti-pinjaman">
                <div class="bukti-pengajuan-pinjaman">BUKTI PENCAIRAN DANA KREDIT</div>
                <div class="ref-pinjaman">Ref. ${takedatetime("time")}</div>
            </div>
        </div>
        <div class="pinjaman-body">
            <div class="table1-pinjaman">
                <label>Identitas Anggota</label>
                <table>
                    <tr>
                        <td>Id Anggota</td>
                        <td>:</td>
                        <td>${textArray[6]}</td>
                    </tr>
                    <tr>
                        <td>Nama Anggota</td>
                        <td>:</td>
                        <td>${textArray[9]}</td>
                    </tr>
                    <tr>
                        <td>Departement</td>
                        <td>:</td>
                        <td>${textArray[12]}</td>
                    </tr>
                    <tr>
                        <td>Alamat</td>
                        <td>:</td>
                        <td>${textArray[15]}</td>
                    </tr>
                    <tr>
                        <td>Tanggal Pinjam</td>
                        <td>:</td>
                        <td>${textArray[2]}</td>
                    </tr>
                    <tr>
                        <td>Tanggal Tempo</td>
                        <td>:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Lama Pinjam</td>
                        <td>:</td>
                        <td>${textArray[25]}</td>
                    </tr>
                </table>
            </div>
            <div class="table2-pinjaman">
                <label>Rincian Pengajuan</label>
                <table>
                    <tr>
                        <td>Total Pinjaman</td>
                        <td>:</td>
                        <td>Rp. ${textArray[47]}</td>
                    </tr>
                    <tr>
                        <td>Pokok Pinjaman</td>
                        <td>:</td>
                        <td>Rp. ${textArray[22]}</td>
                    </tr>
                    <tr>
                        <td>Angsuran Pokok</td>
                        <td>:</td>
                        <td>Rp. ${textArray[28]}</td>
                    </tr>
                    <tr>
                        <td>Biaya Admin</td>
                        <td>:</td>
                        <td>Rp. ${textArray[37]}</td>
                    </tr>
                    <tr>
                        <td>Angsuran Bagi Hasil (Bunga)</td>
                        <td>:</td>
                        <td>Rp. ${textArray[31]}</td>
                    </tr>
                    <tr>
                        <td>Asuransi</td>
                        <td>:</td>
                        <td>Rp. ${textArray[34]}</td>
                    </tr>
                    <tr>
                        <td>Jumlah Angsuran</td>
                        <td>:</td>
                        <td>Rp. ${textArray[41]}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="pinjaman-footer">
            <div class="paraf-pinjaman">
                <p>Palangka Raya , ${takedatetime("tanggal")}</p>
                <p>Admin</p>
            </div>
            <p>** Tanda terima ini sah jika telah dibubuhi cap dan tanda tangan oleh Admin **</p>
        </div>
    `
    const originbody = document.querySelector("body").innerHTML
    document.querySelector("body").innerHTML = text
    window.print();
    document.querySelector("body").innerHTML = originbody
}
async function form_cetak_table_transaksi(){
    let printtable = document.querySelector(".container")
    const originbody = document.querySelector("body").innerHTML
    const a = `${await header()}${printtable.outerHTML}`
    document.querySelector("body").innerHTML = a
    window.print();
    document.querySelector("body").innerHTML = originbody
}
async function form_cetak_table_simpanan(){
    let printtable = document.querySelector(".container")
    const originbody = document.querySelector("body").innerHTML
    const a = `${await header()}${printtable.outerHTML}`
    document.querySelector("body").innerHTML = a
    window.print();
    document.querySelector("body").innerHTML = originbody
}
async function form_cetak_table_pinjaman(){
    let printtable = document.querySelector(".container")
    const originbody = document.querySelector("body").innerHTML
    const a = `${await header()}${printtable.outerHTML}`
    document.querySelector("body").innerHTML = a
    window.print();
    document.querySelector("body").innerHTML = originbody
}
async function form_cetak_table_pinjaman2(){
    let printtable = document.querySelector(".container")
    const originbody = document.querySelector("body").innerHTML
    const a = `${await header()}${printtable.outerHTML}`
    document.querySelector("body").innerHTML = a
    window.print();
    document.querySelector("body").innerHTML = originbody
}
async function form_cetak_table_laporan(){
    let printtable = document.querySelector(".container")
    const originbody = document.querySelector("body").innerHTML
    const a = `${await header()}${printtable.outerHTML}`
    document.querySelector("body").innerHTML = a
    window.print();
    document.querySelector("body").innerHTML = originbody
}
async function form_cetak_table_masterdata(){
    let printtable = document.querySelector(".container")
    const originbody = document.querySelector("body").innerHTML
    const a = `${await header()}${printtable.outerHTML}`
    document.querySelector("body").innerHTML = a
    window.print();
    document.querySelector("body").innerHTML = originbody

}

