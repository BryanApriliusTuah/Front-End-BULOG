// Pinjaman
function data_pengajuan(){
    const body = document.querySelector(".body")
    const text = `
        <div class="container">
            <div class="title">
                <h1>Pinjaman</h1>
                <label>Pengajuan Pinjaman</label>
            </div>
            <div class="table">
                <div class="table-title">
                    <label>Data Pengajuan</label>
                </div>
                <div class="fiture">
                    <div class="date"></div>
                    <div class="search"><input type="text" placeholder="[Status]"></div>        
                    <div class="print" onclick="form_cetak_table_pinjaman()"><img src="img/printer.gif"><label>Cetak</label></div>       
                </div>
                <div class="table-content">
                <table class="table2">
                    <tbody>
                        <tr class="head">
                            <td>No</td>
                            <td>ID Ajuan</td>
                            <td>Tanggal Pengajuan</td>
                            <td>Anggota</td>
                            <td>Jenis</td>
                            <td>Jumlah</td>
                            <td>Bln</td>
                            <td>Keterangan</td>
                            <td>Status</td>
                            <td>Sisa Pinjaman</td>
                            <td class="cetak">Aksi</td>
                        </tr>
                        <tr class="form_add">
                            <td></td>
                            <td><input type="text"></td>
                            <td><input type="text"></td>
                            <td><input type="text"></td>
                            <td><input type="text"></td>
                            <td><input type="text"></td>
                            <td><input type="text"></td>
                            <td><input type="text"></td>
                            <td><input type="text"></td>
                            <td><input type="text"></td>
                            <td class="delete" onclick="form_delete()">
                                <img src="img/bin.gif" alt="">
                            </td>
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
                            <td>Test</td>
                            <td class="cetak">
                                <img src="img/printer.gif" alt="" onclick="cetak_data_pengajuan(event)">
                            </td>
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
                            <td>Test</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>  
    `
    body.innerHTML = text
    date()
}
function data_pinjaman(start, end, code){
    const body = document.querySelector(".body")
    let text = ''
    if(start && end){
        text = `
            <div class="container">
                <div class="title">
                    <h1>Pinjaman</h1>
                    <label>Pinjaman Anggota</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Data Pinjaman</label>
                    </div>
                    <div class="fiture">
                        <div class="add" onclick="Add_P_Data_Pinjaman()">
                            <img src="img/plus.gif" alt="">
                            <label>Add</label>
                        </div>
                        <input type="text" class="date" placeholder="${start} - ${end}">
                        <div class="search"><input type="text" placeholder="[Status]" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_pinjaman()"><img src="img/printer.gif"><label>Cetak</label></div>       
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Kode</td>
                                <td>Tanggal Pinjam</td>
                                <td>Nama Anggota</td>
                                <td>Hitungan</td>
                                <td>Total Tagihan</td>
                                <td>Kas</td>

                                <td>Lunas</td>
                                <td>User</td>
                                <td class="cetak">Aksi</td>
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
                    <h1>Pinjaman</h1>
                    <label>Pinjaman Anggota</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Data Pinjaman</label>
                    </div>
                    <div class="fiture">
                        <div class="add" onclick="Add_P_Data_Pinjaman()">
                            <img src="img/plus.gif" alt="">
                            <label>Add</label>
                        </div>
                        <input type="text" class="date" placeholder="Select The Date">
                        <div class="search"><input type="text" placeholder="${code}" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_pinjaman()"><img src="img/printer.gif"><label>Cetak</label></div>       
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Kode</td>
                                <td>Tanggal Pinjam</td>
                                <td>Nama Anggota</td>
                                <td>Hitungan</td>
                                <td>Total Tagihan</td>
                                <td>Kas</td>

                                <td>Lunas</td>
                                <td>User</td>
                                <td class="cetak">Aksi</td>
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
                    <h1>Pinjaman</h1>
                    <label>Pinjaman Anggota</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Data Pinjaman</label>
                    </div>
                    <div class="fiture">
                        <div class="add" onclick="Add_P_Data_Pinjaman()">
                            <img src="img/plus.gif" alt="">
                            <label>Add</label>
                        </div>
                        <input type="text" class="date" placeholder="Select The Date">
                        <div class="search"><input type="text" placeholder="[Kode Transaksi]" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_pinjaman()"><img src="img/printer.gif"><label>Cetak</label></div>       
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Kode</td>
                                <td>Tanggal Pinjam</td>
                                <td>Nama Anggota</td>
                                <td>Hitungan</td>
                                <td>Total Tagihan</td>
                                <td>Kas</td>
                                <td>Lunas</td>
                                <td>User</td>
                                <td class="cetak">Aksi</td>
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

    GetDataPinjaman()
    .then(async (data) => {
        let No = 1;
        let text2 = ''
        const dataBiayaAdmin = await GetBagiHasil()
        let BiayaAdmin = dataBiayaAdmin[0].Biaya_Administrasi
        let SukuBunga = dataBiayaAdmin[0].Suku_Bunga / 100
        if(start && end){
            for (const content of data){
                if(content.Tanggal_Pinjam >= start && content.Tanggal_Pinjam <= end){
                    const PokokAngsuran = content.Nominal / content.Lama_Angsuran
                    const BungaPinjaman = (content.Nominal / content.Lama_Angsuran) * SukuBunga
                    let JumlahAngsuran = (content.Nominal / content.Lama_Angsuran) + ((content.Nominal / content.Lama_Angsuran) * SukuBunga) + BiayaAdmin
                    const TotalTagihan = JumlahAngsuran * content.Lama_Angsuran
                    JumlahAngsuran = Math.round(JumlahAngsuran)
                    const FormatPokokAngsuran = Math.round(PokokAngsuran).toLocaleString()
                    const FormatBungaPinjaman = Math.round(BungaPinjaman).toLocaleString()
                    text2 += 
                    `
                    <tr>
                        <td>${No}</td>
                        <td>${content.Kode_Pinjam}</td>
                        <td>${content.Tanggal_Pinjam}</td>
                        <td>
                            <table class="table3">
                                <tbody>
                                    <tr>
                                        <td>ID Anggota</td>
                                        <td>:</td>
                                        <td id="ID-Anggota">${content.ID_Anggota}</td>
                                    </tr>
                                    <tr>
                                        <td>Nama Anggota</td>
                                        <td>:</td>
                                        <td>${content.Nama_Anggota}</td>
                                    </tr>
                                    <tr>
                                        <td>Jabatan</td>
                                        <td>:</td>
                                        <td id="Jabatan">${content.Jabatan}</td>
                                    </tr>
                                    <tr>
                                        <td>Alamat</td>
                                        <td>:</td>
                                        <td id="Alamat">${content.Alamat}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>
                            <table class="table3 ta-4">
                                <tbody>
                                    <tr>
                                        <td>Item</td>
                                        <td>:</td>
                                        <td>${content.Item}</td>
                                    </tr>
                                    <tr>
                                        <td>Nominal</td>
                                        <td>:</td>
                                        <td>${content.Nominal.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Lama Angsuran</td>
                                        <td>:</td>
                                        <td>${content.Lama_Angsuran}</td>
                                    </tr>
                                    <tr>
                                        <td>Pokok Angsuran</td>
                                        <td>:</td>
                                        <td>${FormatPokokAngsuran.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Bunga Pinjaman</td>
                                        <td>:</td>
                                        <td>${FormatBungaPinjaman.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Asuransi</td>
                                        <td>:</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Biaya Admin</td>
                                        <td>:</td>
                                        <td>${BiayaAdmin.toLocaleString()}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>
                            <table class="table3 ta-4">
                                <tbody>
                                    <tr>
                                        <td>Jumlah Angsuran</td>
                                        <td>:</td>
                                        <td>${JumlahAngsuran.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Jumlah Denda</td>
                                        <td>:</td>
                                        <td>${content.Jumlah_Denda.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Total Tagihan</td>
                                        <td>:</td>
                                        <td>${TotalTagihan.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Sudah Dibayar</td>
                                        <td>:</td>
                                        <td>${content.Sudah_Dibayar.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Sisa Angsuran</td>
                                        <td>:</td>
                                        <td>${content.Sisa_Angsuran.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Sisa Tagihan</td>
                                        <td>:</td>
                                        <td>${content.Sisa_Tagihan.toLocaleString()}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>${content.Ambil_Dari_Kas}</td>

                        <td>${content.Lunas}</td>
                        <td>${content.User}</td>
                        <td class="cetak">
                            <img src="img/printer.gif" alt="" onclick="cetak_data_pinjaman(event)">
                            <img src="img/edit.gif" alt="">
                            <img src="img/bin.gif" alt="" onclick="Delete(event)">
                        </td>
                    </tr>
                    `
                    No++;
                }
            }
        }else if(code){
            for (const content of data){
                if(content.Kode_Pinjam == code){
                    const PokokAngsuran = content.Nominal / content.Lama_Angsuran
                    const BungaPinjaman = (content.Nominal / content.Lama_Angsuran) * SukuBunga
                    let JumlahAngsuran = (content.Nominal / content.Lama_Angsuran) + ((content.Nominal / content.Lama_Angsuran) * SukuBunga) + BiayaAdmin
                    const TotalTagihan = JumlahAngsuran * content.Lama_Angsuran
                    JumlahAngsuran = Math.round(JumlahAngsuran)
                    const FormatPokokAngsuran = Math.round(PokokAngsuran).toLocaleString()
                    const FormatBungaPinjaman = Math.round(BungaPinjaman).toLocaleString()
                    text2 += 
                    `
                    <tr>
                        <td>${No}</td>
                        <td>${content.Kode_Pinjam}</td>
                        <td>${content.Tanggal_Pinjam}</td>
                        <td>
                            <table class="table3 ta-4">
                                <tbody>
                                    <tr>
                                        <td>ID Anggota</td>
                                        <td>:</td>
                                        <td id="ID-Anggota">${content.ID_Anggota}</td>
                                    </tr>
                                    <tr>
                                        <td>Nama Anggota</td>
                                        <td>:</td>
                                        <td>${content.Nama_Anggota}</td>
                                    </tr>
                                    <tr>
                                        <td>Jabatan</td>
                                        <td>:</td>
                                        <td id="Jabatan">${content.Jabatan}</td>
                                    </tr>
                                    <tr>
                                        <td>Alamat</td>
                                        <td>:</td>
                                        <td id="Alamat">${content.Alamat}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>
                            <table class="table3 ta-4">
                                <tbody>
                                    <tr>
                                        <td>Item</td>
                                        <td>:</td>
                                        <td>${content.Item}</td>
                                    </tr>
                                    <tr>
                                        <td>Nominal</td>
                                        <td>:</td>
                                        <td>${content.Nominal.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Lama Angsuran</td>
                                        <td>:</td>
                                        <td>${content.Lama_Angsuran}</td>
                                    </tr>
                                    <tr>
                                        <td>Pokok Angsuran</td>
                                        <td>:</td>
                                        <td>${FormatPokokAngsuran.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Bunga Pinjaman</td>
                                        <td>:</td>
                                        <td>${FormatBungaPinjaman.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Asuransi</td>
                                        <td>:</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Biaya Admin</td>
                                        <td>:</td>
                                        <td>${BiayaAdmin.toLocaleString()}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>
                            <table class="table3 ta-4">
                                <tbody>
                                    <tr>
                                        <td>Jumlah Angsuran</td>
                                        <td>:</td>
                                        <td>${JumlahAngsuran.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Jumlah Denda</td>
                                        <td>:</td>
                                        <td>${content.Jumlah_Denda.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Total Tagihan</td>
                                        <td>:</td>
                                        <td>${TotalTagihan.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Sudah Dibayar</td>
                                        <td>:</td>
                                        <td>${content.Sudah_Dibayar.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Sisa Angsuran</td>
                                        <td>:</td>
                                        <td>${content.Sisa_Angsuran.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Sisa Tagihan</td>
                                        <td>:</td>
                                        <td>${content.Sisa_Tagihan.toLocaleString()}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>${content.Ambil_Dari_Kas}</td>

                        <td>${content.Lunas}</td>
                        <td>${content.User}</td>
                        <td class="cetak">
                            <img src="img/printer.gif" alt="" onclick="cetak_data_pinjaman(event)">
                            <img src="img/edit.gif" alt="">
                            <img src="img/bin.gif" alt="" onclick="Delete(event)">
                        </td>
                    </tr>
                    `
                    No++;
                }
            }
        }else{
            for (const content of data){
                const PokokAngsuran = content.Nominal / content.Lama_Angsuran
                const BungaPinjaman = (content.Nominal / content.Lama_Angsuran) * SukuBunga
                let JumlahAngsuran = (content.Nominal / content.Lama_Angsuran) + ((content.Nominal / content.Lama_Angsuran) * SukuBunga) + BiayaAdmin
                JumlahAngsuran = Math.round(JumlahAngsuran)
                const TotalTagihan = JumlahAngsuran * content.Lama_Angsuran
                const FormatPokokAngsuran = Math.round(PokokAngsuran).toLocaleString()
                const FormatBungaPinjaman = Math.round(BungaPinjaman).toLocaleString()
                text2 += 
                `
                <tr>
                    <td>${No++}</td>
                    <td>${content.Kode_Pinjam}</td>
                    <td>${content.Tanggal_Pinjam}</td>
                    <td>
                        <table class="table3 ta-4">
                            <tbody>
                                <tr>
                                    <td>ID Anggota</td>
                                    <td>:</td>
                                    <td id="ID-Anggota">${content.ID_Anggota}</td>
                                </tr>
                                <tr>
                                    <td>Nama Anggota</td>
                                    <td>:</td>
                                    <td>${content.Nama_Anggota}</td>
                                </tr>
                                <tr>
                                    <td>Jabatan</td>
                                    <td>:</td>
                                    <td id="Jabatan">${content.Jabatan}</td>
                                </tr>
                                <tr>
                                    <td>Alamat</td>
                                    <td>:</td>
                                    <td id="Alamat">${content.Alamat}</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <table class="table3 ta-4">
                            <tbody>
                                <tr>
                                    <td>Item</td>
                                    <td>:</td>
                                    <td>${content.Item}</td>
                                </tr>
                                <tr>
                                    <td>Nominal</td>
                                    <td>:</td>
                                    <td>${content.Nominal.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Lama Angsuran</td>
                                    <td>:</td>
                                    <td>${content.Lama_Angsuran}</td>
                                </tr>
                                <tr>
                                    <td>Pokok Angsuran</td>
                                    <td>:</td>
                                    <td>${FormatPokokAngsuran}</td>
                                </tr>
                                <tr>
                                    <td>Bunga Pinjaman</td>
                                    <td>:</td>
                                    <td>${FormatBungaPinjaman}</td>
                                </tr>
                                <tr>
                                    <td>Asuransi</td>
                                    <td>:</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Biaya Admin</td>
                                    <td>:</td>
                                    <td>${BiayaAdmin.toLocaleString()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <table class="table3 ta-4">
                            <tbody>
                                <tr>
                                    <td>Jumlah Angsuran</td>
                                    <td>:</td>
                                    <td>${JumlahAngsuran.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Jumlah Denda</td>
                                    <td>:</td>
                                    <td>${content.Jumlah_Denda.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Total Tagihan</td>
                                    <td>:</td>
                                    <td>${TotalTagihan.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Sudah Dibayar</td>
                                    <td>:</td>
                                    <td>${content.Sudah_Dibayar.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Sisa Angsuran</td>
                                    <td>:</td>
                                    <td>${content.Sisa_Angsuran.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Sisa Tagihan</td>
                                    <td>:</td>
                                    <td>${content.Sisa_Tagihan.toLocaleString()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td>${content.Ambil_Dari_Kas}</td>
                    <td>${content.Lunas}</td>
                    <td>${content.User}</td>
                    <td class="cetak" >
                        <img src="img/printer.gif" alt="" onclick="cetak_data_pinjaman(event)">
                        <img src="img/edit.gif" alt="" onclick="Update_Data_Pinjaman(event)">
                        <img src="img/bin.gif" alt="" onclick="Delete(event)">
                    </td>
                </tr>
                `
            }
        }
        const tablecontent = document.querySelector(".table2 tbody")
        tablecontent.insertAdjacentHTML('beforeend', text2);
    })
    .catch((err) => console.log(err))
}
function bayar_angsuran(start, end, code){
    const body = document.querySelector(".body")
    let text = ''
    if(start && end){
        text = `
            <div class="container">
                <div class="title">
                    <h1>Pinjaman</h1>
                    <label>Pembayaran Angsuran</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Bayar Angsuran</label>
                    </div>
                    <div class="fiture">
                        <input type="text" class="date" placeholder="${start} - ${end}">
                        <div class="search"><input type="text" placeholder="[Status]" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_pinjaman2()"><img src="img/printer.gif"><label>Cetak</label></div>       
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Kode</td>
                                <td>Tanggal<br>Pinjam</td>
                                <td>Nama<br>Anggota</td>
                                <td>Pokok<br>Pinjaman</td>
                                <td>Lama<br>Pinjaman</td>
                                <td>Angsuran<br>Pokok</td>
                                <td>Bunga<br>Angsuran</td>
                                <td>Biaya<br>Admin</td>
                                <td>Angsuran<br>Per Bulan</td>
                                <td>Bayar</td>
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
                <h1>Pinjaman</h1>
                <label>Pembayaran Angsuran</label>
            </div>
            <div class="table">
                <div class="table-title">
                    <label>Bayar Angsuran</label>
                </div>
                <div class="fiture">
                    <input type="text" class="date" placeholder=Select The Date">
                    <div class="search"><input type="text" placeholder="${code}" onchange="Find(value)"></div>        
                    <div class="print" onclick="form_cetak_table_pinjaman2()"><img src="img/printer.gif"><label>Cetak</label></div>       
                </div>
                <div class="table-content">
                <table class="table2">
                    <tbody>
                        <tr class="head">
                            <td>No</td>
                            <td>Kode</td>
                            <td>Tanggal<br>Pinjam</td>
                            <td>Nama<br>Anggota</td>
                            <td>Pokok<br>Pinjaman</td>
                            <td>Lama<br>Pinjaman</td>
                            <td>Angsuran<br>Pokok</td>
                            <td>Bunga<br>Angsuran</td>
                            <td>Biaya<br>Admin</td>
                            <td>Angsuran<br>Per Bulan</td>
                            <td>Bayar</td>
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
                    <h1>Pinjaman</h1>
                    <label>Pembayaran Angsuran</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Bayar Angsuran</label>
                    </div>
                    <div class="fiture">
                        <input type="text" class="date" placeholder="Select The Date">
                        <div class="search"><input type="text" placeholder="[Status]" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_pinjaman2()"><img src="img/printer.gif"><label>Cetak</label></div>       
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Kode</td>
                                <td>Tanggal<br>Pinjam</td>
                                <td>Nama<br>Anggota</td>
                                <td>Pokok<br>Pinjaman</td>
                                <td>Lama<br>Pinjaman</td>
                                <td>Angsuran<br>Pokok</td>
                                <td>Bunga<br>Angsuran</td>
                                <td>Biaya<br>Admin</td>
                                <td>Angsuran<br>Per Bulan</td>
                                <td>Bayar</td>
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
    
    GetBayarAngsuran()
    .then((data) => {
        let text1 = ""
        let text2 = ""
        let No = 1
        let UniqKode

        if(start && end){
            for (const element of data) {
                if(element.Tanggal_Pinjam >= start && element.Tanggal_Pinjam <= end){
                    if(element.Kode_Pinjam == UniqKode){
                        if(element.Bayar == 'Sudah'){
                            text1 = `
                            <tr class="Bulan-Sudah">
                                <td>${element.Bulan}</td>
                                <td>:</td>
                                <td style="cursor : pointer"><img src="img/done.png" alt="" id="done-remove"> ${element.Bayar}</td>
                            </tr>
                            `
                        }else{
                            text1 = `
                            <tr class="Bulan" onclick="Update_Bayar_Angsuran(event)">
                                <td>${element.Bulan}</td>
                                <td>:</td>
                                <td style="cursor : pointer"><img src="img/remove.png" alt="" id="done-remove"> ${element.Bayar}</td>
                            </tr>`
                        }
                        const table3content = document.querySelector(`.t-${No} tbody`)
                        table3content.insertAdjacentHTML('beforeend', text1);
                    }else{
                        UniqKode = element.Kode_Pinjam
                        if(element.Bayar == 'Sudah'){
                            text1 = `
                            <tr class="Bulan-Sudah">
                                <td>${element.Bulan}</td>
                                <td>:</td>
                                <td style="cursor : pointer"><img src="img/done.png" alt="" id="done-remove"> ${element.Bayar}</td>
                            </tr>
                            `
                        }else{
                            text1 = `
                            <tr class="Bulan" onclick="Update_Bayar_Angsuran(event)">
                                <td>${element.Bulan}</td>
                                <td>:</td>
                                <td style="cursor : pointer"><img src="img/remove.png" alt="" id="done-remove"> ${element.Bayar}</td>
                            </tr>`
                        }
                        text2 = `
                        <tr>
                            <td>${No++}</td>
                            <td>${element.Kode_Pinjam}</td>
                            <td>${element.Tanggal_Pinjam}</td>
                            <td>${element.Nama}</td>
                            <td>Rp. ${element.Pokok_Pinjaman.toLocaleString()}</td>
                            <td>${element.Lama_Pinjam}</td>
                            <td>Rp. ${element.Angsuran_Pokok.toLocaleString()}</td>
                            <td>Rp. ${element.Bunga_Angsuran.toLocaleString()}</td>
                            <td>Rp. ${element.Biaya_Admin.toLocaleString()}</td>
                            <td>Rp. ${element.Angsuran_Per_Bulan.toLocaleString()}</td>
                            <td>
                                <table class="table3 t-${No}">
                                    <tbody>
                                        
                                    </tbody>   
                                </table>
                            </td>
                        </tr>
                        `
                        const tablecontent = document.querySelector(".table2 tbody")
                        tablecontent.insertAdjacentHTML('beforeend', text2);
    
                        const table3content = document.querySelector(`.t-${No} tbody`)
                        table3content.insertAdjacentHTML('beforeend', text1);
                    }
                }
            }
        }else if(code){
            for (const element of data) {
                if(element.Kode_Pinjam == code){
                    if(element.Kode_Pinjam == UniqKode){
                        if(element.Bayar == 'Sudah'){
                            text1 = `
                            <tr class="Bulan-Sudah">
                                <td>${element.Bulan}</td>
                                <td>:</td>
                                <td style="cursor : pointer"><img src="img/done.png" alt="" id="done-remove"> ${element.Bayar}</td>
                            </tr>
                            `
                        }else{
                            text1 = `
                            <tr class="Bulan" onclick="Update_Bayar_Angsuran(event)">
                                <td>${element.Bulan}</td>
                                <td>:</td>
                                <td style="cursor : pointer"><img src="img/remove.png" alt="" id="done-remove"> ${element.Bayar}</td>
                            </tr>`
                        }
                        const table3content = document.querySelector(`.t-${No} tbody`)
                        table3content.insertAdjacentHTML('beforeend', text1);
                    }else{
                        UniqKode = element.Kode_Pinjam
                        if(element.Bayar == 'Sudah'){
                            text1 = `
                            <tr class="Bulan-Sudah">
                                <td>${element.Bulan}</td>
                                <td>:</td>
                                <td style="cursor : pointer"><img src="img/done.png" alt="" id="done-remove"> ${element.Bayar}</td>
                            </tr>
                            `
                        }else{
                            text1 = `
                            <tr class="Bulan" onclick="Update_Bayar_Angsuran(event)">
                                <td>${element.Bulan}</td>
                                <td>:</td>
                                <td style="cursor : pointer"><img src="img/remove.png" alt="" id="done-remove"> ${element.Bayar}</td>
                            </tr>`
                        }
                        text2 = `
                        <tr>
                            <td>${No++}</td>
                            <td>${element.Kode_Pinjam}</td>
                            <td>${element.Tanggal_Pinjam}</td>
                            <td>${element.Nama}</td>
                            <td>Rp. ${element.Pokok_Pinjaman.toLocaleString()}</td>
                            <td>${element.Lama_Pinjam}</td>
                            <td>Rp. ${element.Angsuran_Pokok.toLocaleString()}</td>
                            <td>Rp. ${element.Bunga_Angsuran.toLocaleString()}</td>
                            <td>Rp. ${element.Biaya_Admin.toLocaleString()}</td>
                            <td>Rp. ${element.Angsuran_Per_Bulan.toLocaleString()}</td>
                            <td>
                                <table class="table3 t-${No}">
                                    <tbody>
                                        
                                    </tbody>   
                                </table>
                            </td>
                        </tr>
                        `
                        const tablecontent = document.querySelector(".table2 tbody")
                        tablecontent.insertAdjacentHTML('beforeend', text2);
    
                        const table3content = document.querySelector(`.t-${No} tbody`)
                        table3content.insertAdjacentHTML('beforeend', text1);
                    }
                }
            } 
        }else{
            for (const element of data) {
                if(element.Kode_Pinjam == UniqKode){
                    if(element.Bayar == 'Sudah'){
                        text1 = `
                        <tr class="Bulan-Sudah">
                            <td>${element.Bulan}</td>
                            <td>:</td>
                            <td style="cursor : pointer"><img src="img/done.png" alt="" id="done-remove"> ${element.Bayar}</td>
                        </tr>
                        `
                    }else{
                        text1 = `
                        <tr class="Bulan" onclick="Update_Bayar_Angsuran(event)">
                            <td>${element.Bulan}</td>
                            <td>:</td>
                            <td style="cursor : pointer"><img src="img/remove.png" alt="" id="done-remove"> ${element.Bayar}</td>
                        </tr>`
                    }
                    const table3content = document.querySelector(`.t-${No} tbody`)
                    table3content.insertAdjacentHTML('beforeend', text1);
                }else{
                    UniqKode = element.Kode_Pinjam
                    if(element.Bayar == 'Sudah'){
                        text1 = `
                        <tr class="Bulan-Sudah">
                            <td>${element.Bulan}</td>
                            <td>:</td>
                            <td style="cursor : pointer"><img src="img/done.png" alt="" id="done-remove"> ${element.Bayar}</td>
                        </tr>
                        `
                    }else{
                        text1 = `
                        <tr class="Bulan" onclick="Update_Bayar_Angsuran(event)">
                            <td>${element.Bulan}</td>
                            <td>:</td>
                            <td style="cursor : pointer"><img src="img/remove.png" alt="" id="done-remove"> ${element.Bayar}</td>
                        </tr>`
                    }
                    text2 = `
                    <tr>
                        <td>${No++}</td>
                        <td>${element.Kode_Pinjam}</td>
                        <td>${element.Tanggal_Pinjam}</td>
                        <td>${element.Nama}</td>
                        <td>Rp. ${element.Pokok_Pinjaman.toLocaleString()}</td>
                        <td>${element.Lama_Pinjam}</td>
                        <td>Rp. ${element.Angsuran_Pokok.toLocaleString()}</td>
                        <td>Rp. ${element.Bunga_Angsuran.toLocaleString()}</td>
                        <td>Rp. ${element.Biaya_Admin.toLocaleString()}</td>
                        <td>Rp. ${element.Angsuran_Per_Bulan.toLocaleString()}</td>
                        <td>
                            <table class="table3 t-${No}">
                                <tbody>
                                    
                                </tbody>   
                            </table>
                        </td>
                    </tr>
                    `
                    const tablecontent = document.querySelector(".table2 tbody")
                    tablecontent.insertAdjacentHTML('beforeend', text2);

                    const table3content = document.querySelector(`.t-${No} tbody`)
                    table3content.insertAdjacentHTML('beforeend', text1);
                }
            }   
        }
    })
}
function pinjaman_lunas(start, end, code){
    const body = document.querySelector(".body")
    let text = ''
    if(start && end){
        text = `
            <div class="container">
                <div class="title">
                    <h1>Pinjaman</h1>
                    <label>Pembayaran Angsuran</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Data Pinjaman</label>
                    </div>
                    <div class="fiture">
                        <input type="text" class="date" placeholder="${start} - ${end}">
                        <div class="search"><input type="text" placeholder="[Kode]" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_pinjaman()"><img src="img/printer.gif"><label>Cetak</label></div>       
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Kode</td>
                                <td>Nama Anggota</td>
                                <td>ID Anggota</td>
                                <td>Tanggal Pinjam</td>
                                <td>Tanggal Tempo</td>
                                <td>Lama Pinjam</td>
                                <td>Total Tagihan</td>
                                <td>Total Denda</td>
                                <td>Dibayar</td>
                                <td>Keterangan</td>
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
                    <h1>Pinjaman</h1>
                    <label>Pembayaran Angsuran</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Data Pinjaman</label>
                    </div>
                    <div class="fiture">
                        <input type="text" class="date" placeholder="Select The Date">
                        <div class="search"><input type="text" placeholder="${code}" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_pinjaman()"><img src="img/printer.gif"><label>Cetak</label></div>       
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Kode</td>
                                <td>Nama Anggota</td>
                                <td>ID Anggota</td>
                                <td>Tanggal Pinjam</td>
                                <td>Tanggal Tempo</td>
                                <td>Lama Pinjam</td>
                                <td>Total Tagihan</td>
                                <td>Total Denda</td>
                                <td>Dibayar</td>
                                <td>Keterangan</td>
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
                    <h1>Pinjaman</h1>
                    <label>Pembayaran Lunas</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Data Pinjaman</label>
                    </div>
                    <div class="fiture">
                        <input type="text" class="date" placeholder="Select The Date">
                        <div class="search"><input type="text" placeholder="[Kode]" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_pinjaman()"><img src="img/printer.gif"><label>Cetak</label></div>       
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Kode</td>
                                <td>Nama Anggota</td>
                                <td>ID Anggota</td>
                                <td>Tanggal Pinjam</td>
                                <td>Tanggal Tempo</td>
                                <td>Lama Pinjam</td>
                                <td>Total Tagihan</td>
                                <td>Total Denda</td>
                                <td>Dibayar</td>
                                <td>Keterangan</td>
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

    GetDataPinjaman()
    .then(async (data) => {
        let text2 = ''
        let No = 1

        if(start && end){
            for (const content of data) {
                if(content.Tanggal_Pinjam >= start && content.Tanggal_Pinjam <= end){
                    if(content.Lunas == "Lunas"){
                        const newDate = new Date(content.Tanggal_Pinjam);
                        newDate.setMonth(newDate.getMonth() + 1);
                        const newYear = newDate.getFullYear();
                        const newMonth = newDate.getMonth() + content.Lama_Angsuran;
                        const newDay = newDate.getDate();
                        const Bulan = `${newYear}-${newMonth.toString().padStart(2, '0')}-${newDay.toString().padStart(2, '0')}`;
        
                        const dataBagiHasil = await GetBagiHasil()
                        const SukuBunga = dataBagiHasil[0].Suku_Bunga / 100
                        const BiayaAdministrasi = dataBagiHasil[0].Biaya_Administrasi
                        const PokokAngsuran = content.Nominal / content.Lama_Angsuran
                        const BungaPinjaman = PokokAngsuran * SukuBunga
                        const JumlahAngsuran = PokokAngsuran + BungaPinjaman + BiayaAdministrasi
                        const TotalTagihan = JumlahAngsuran * content.Lama_Angsuran
        
                        text2 += `
                        <tr>
                            <td>${No++}</td>
                            <td>${content.Kode}</td>
                            <td>${content.Nama_Anggota}</td>
                            <td>${content.ID_Anggota}</td>
                            <td>${content.Tanggal_Pinjam}</td>
                            <td>${Bulan}</td>
                            <td>${content.Lama_Angsuran} Bulan</td>
                            <td>Rp. ${TotalTagihan.toLocaleString()}</td>
                            <td>Rp. ${content.Jumlah_Denda.toLocaleString()}</td>
                            <td>Rp. ${content.Sudah_Dibayar.toLocaleString()}</td>
                            <td>${content.Keterangan}</td>
                        </tr>
                        `
                    }
                }
            }
        }else if(code){
            for (const content of data) {
                if(content.Kode == code){
                    if(content.Lunas == "Lunas"){
                        const newDate = new Date(content.Tanggal_Pinjam);
                        newDate.setMonth(newDate.getMonth() + 1);
                        const newYear = newDate.getFullYear();
                        const newMonth = newDate.getMonth() + content.Lama_Angsuran;
                        const newDay = newDate.getDate();
                        const Bulan = `${newYear}-${newMonth.toString().padStart(2, '0')}-${newDay.toString().padStart(2, '0')}`;
        
                        const dataBagiHasil = await GetBagiHasil()
                        const SukuBunga = dataBagiHasil[0].Suku_Bunga / 100
                        const BiayaAdministrasi = dataBagiHasil[0].Biaya_Administrasi
                        const PokokAngsuran = content.Nominal / content.Lama_Angsuran
                        const BungaPinjaman = PokokAngsuran * SukuBunga
                        const JumlahAngsuran = PokokAngsuran + BungaPinjaman + BiayaAdministrasi
                        const TotalTagihan = JumlahAngsuran * content.Lama_Angsuran
        
                        text2 += `
                        <tr>
                            <td>${No++}</td>
                            <td>${content.Kode}</td>
                            <td>${content.Nama_Anggota}</td>
                            <td>${content.ID_Anggota}</td>
                            <td>${content.Tanggal_Pinjam}</td>
                            <td>${Bulan}</td>
                            <td>${content.Lama_Angsuran} Bulan</td>
                            <td>Rp. ${TotalTagihan.toLocaleString()}</td>
                            <td>Rp. ${content.Jumlah_Denda.toLocaleString()}</td>
                            <td>Rp. ${content.Sudah_Dibayar.toLocaleString()}</td>
                            <td>${content.Keterangan}</td>
                        </tr>
                        `
                    }
                }
            }
        }else{
            for (const content of data) {
                if(content.Lunas == "Lunas"){
                    const newDate = new Date(content.Tanggal_Pinjam);
                    newDate.setMonth(newDate.getMonth() + 1);
                    const newYear = newDate.getFullYear();
                    const newMonth = newDate.getMonth() + content.Lama_Angsuran;
                    const newDay = newDate.getDate();
                    const Bulan = `${newYear}-${newMonth.toString().padStart(2, '0')}-${newDay.toString().padStart(2, '0')}`;
    
                    const dataBagiHasil = await GetBagiHasil()
                    const SukuBunga = dataBagiHasil[0].Suku_Bunga / 100
                    const BiayaAdministrasi = dataBagiHasil[0].Biaya_Administrasi
                    const PokokAngsuran = content.Nominal / content.Lama_Angsuran
                    const BungaPinjaman = PokokAngsuran * SukuBunga
                    const JumlahAngsuran = PokokAngsuran + BungaPinjaman + BiayaAdministrasi
                    const TotalTagihan = JumlahAngsuran * content.Lama_Angsuran
    
                    text2 += `
                    <tr>
                        <td>${No++}</td>
                        <td>${content.Kode}</td>
                        <td>${content.Nama_Anggota}</td>
                        <td>${content.ID_Anggota}</td>
                        <td>${content.Tanggal_Pinjam}</td>
                        <td>${Bulan}</td>
                        <td>${content.Lama_Angsuran} Bulan</td>
                        <td>Rp. ${TotalTagihan.toLocaleString()}</td>
                        <td>Rp. ${content.Jumlah_Denda.toLocaleString()}</td>
                        <td>Rp. ${content.Sudah_Dibayar.toLocaleString()}</td>
                        <td>${content.Keterangan}</td>
                    </tr>
                    `
                }
            }
        }
        const tablecontent = document.querySelector(".table2 tbody")
        tablecontent.insertAdjacentHTML('beforeend', text2)
    })
}