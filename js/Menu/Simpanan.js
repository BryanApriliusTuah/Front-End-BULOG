// Simpanan
function setoran_anggota(start, end, code){
    const body = document.querySelector(".body")
    let text = ''
    if(start && end){
        text = `
            <div class="container">
                <div class="title">
                    <h1>Simpanan</h1>
                    <label>Setoran Anggota</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Data Transaksi Setoran Tunai</label>
                    </div>
                    <div class="fiture">
                        <div class="add" onclick="Add_S_Setoran_Anggota()">
                            <img src="img/plus.gif" alt="">
                            <label>Add</label>
                        </div>
                        <input type="text" class="date" placeholder="${start} - ${end}">
                        <div class="search"><input type="text" placeholder="[Kode Transaksi]" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_simpanan()"><img src="img/printer.gif"><label>Cetak Laporan</label></div>       
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Kode Transaksi</td>
                                <td>Tanggal Transaksi</td>
                                <td>ID Anggota</td>
                                <td>Nama Anggota</td>
                                <td>Dept</td>
                                <td>Jenis Simpanan</td>
                                <td>Jumlah</td>
                                <td>Keterangan</td>
                                <td>Simpan Ke Kas</td>
                                <td>User</td>
                                <td class="cetak">Cetak Nota</td>
                                <td class="edit">Edit</td>
                                <td class="delete">Delete</td>
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
                    <h1>Simpanan</h1>
                    <label>Setoran Anggota</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Data Transaksi Setoran Tunai</label>
                    </div>
                    <div class="fiture">
                        <div class="add" onclick="Add_S_Setoran_Anggota()">
                            <img src="img/plus.gif" alt="">
                            <label>Add</label>
                        </div>
                        <input type="text" class="date" placeholder="Select The Date">
                        <div class="search"><input type="text" placeholder="${code}" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_simpanan()"><img src="img/printer.gif"><label>Cetak Laporan</label></div>       
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Kode Transaksi</td>
                                <td>Tanggal Transaksi</td>
                                <td>ID Anggota</td>
                                <td>Nama Anggota</td>
                                <td>Dept</td>
                                <td>Jenis Simpanan</td>
                                <td>Jumlah</td>
                                <td>Keterangan</td>
                                <td>Simpan Ke Kas</td>
                                <td>User</td>
                                <td class="cetak">Cetak Nota</td>
                                <td class="edit">Edit</td>
                                <td class="delete">Delete</td>
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
                <h1>Simpanan</h1>
                <label>Setoran Anggota</label>
            </div>
            <div class="table">
                <div class="table-title">
                    <label>Data Transaksi Setoran Tunai</label>
                </div>
                <div class="fiture">
                    <div class="add" onclick="Add_S_Setoran_Anggota()">
                        <img src="img/plus.gif" alt="">
                        <label>Add</label>
                    </div>
                    <input type="text" class="date" placeholder="Select The Date">
                    <div class="search"><input type="text" placeholder="[Kode Transaksi]" onchange="Find(value)"></div>        
                    <div class="print" onclick="form_cetak_table_simpanan()"><img src="img/printer.gif"><label>Cetak Laporan</label></div>       
                </div>
                <div class="table-content">
                <table class="table2">
                    <tbody>
                        <tr class="head">
                            <td>No</td>
                            <td>Kode Transaksi</td>
                            <td>Tanggal Transaksi</td>
                            <td>ID Anggota</td>
                            <td>Nama Anggota</td>
                            <td>Dept</td>
                            <td>Jenis Simpanan</td>
                            <td>Jumlah</td>
                            <td>Keterangan</td>
                            <td>Simpan Ke Kas</td>
                            <td>User</td>
                            <td class="cetak">Cetak Nota</td>
                            <td class="edit">Edit</td>
                            <td class="delete">Delete</td>
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

    GetSetoranAnggota()
    .then((data) => {
        let No = 1;
        let text2 = ''
        if(start && end){
            for (const content of data) {
                if(content.Tanggal_Transaksi >= start && content.Tanggal_Transaksi <= end){
                    text2 += 
                    `
                    <tr>
                        <td>${No}</td>
                        <td>${content.Kode_Transaksi}</td>
                        <td>${content.Tanggal_Transaksi}</td>
                        <td>${content.ID_Anggota}</td>
                        <td>${content.Nama}</td>
                        <td>${content.Dept}</td>
                        <td>${content.Jenis_Simpanan}</td>
                        <td>${content.Jumlah}</td>
                        <td>${content.Keterangan}</td>
                        <td>${content.Simpan_Ke_Kas}</td>
                        <td>${content.User}</td>
                        <td class="cetak" onclick="cetak_simpanan(event, 'setoran_anggota')">
                            <img src="img/printer.gif" alt="">
                        </td>
                        <td class="edit">
                            <img src="img/edit.gif" alt="" onclick="Update_S_SetoranAnggota(event)">
                        </td>
                        <td class="delete">
                            <img src="img/bin.gif" alt="" onclick="Delete(event)">
                        </td>
                    </tr>
                    `
                    No++;
                }
            }
        }else if(code){
            for (const content of data) {
                if(content.Kode_Transaksi == code){
                    text2 += 
                    `
                    <tr>
                        <td>${No}</td>
                        <td>${content.Kode_Transaksi}</td>
                        <td>${content.Tanggal_Transaksi}</td>
                        <td>${content.ID_Anggota}</td>
                        <td>${content.Nama}</td>
                        <td>${content.Dept}</td>
                        <td>${content.Jenis_Simpanan}</td>
                        <td>${content.Jumlah}</td>
                        <td>${content.Keterangan}</td>
                        <td>${content.Simpan_Ke_Kas}</td>
                        <td>${content.User}</td>
                        <td class="cetak" onclick="cetak_simpanan(event, 'setoran_anggota')">
                            <img src="img/printer.gif" alt="">
                        </td>
                        <td class="edit">
                            <img src="img/edit.gif" alt="" onclick="Update_S_SetoranAnggota(event)">
                        </td>
                        <td class="delete">
                            <img src="img/bin.gif" alt="" onclick="Delete(event)">
                        </td>
                    </tr>
                    `
                    No++;
                }
            }
        }else{
            for (const content of data) {
                text2 += 
                `
                <tr>
                    <td>${No}</td>
                    <td>${content.Kode_Transaksi}</td>
                    <td>${content.Tanggal_Transaksi}</td>
                    <td>${content.ID_Anggota}</td>
                    <td>${content.Nama}</td>
                    <td>${content.Dept}</td>
                    <td>${content.Jenis_Simpanan}</td>
                    <td>${content.Jumlah}</td>
                    <td>${content.Keterangan}</td>
                    <td>${content.Simpan_Ke_Kas}</td>
                    <td>${content.User}</td>
                    <td class="cetak" onclick="cetak_simpanan(event, 'setoran_anggota')">
                        <img src="img/printer.gif" alt="">
                    </td>
                    <td class="edit">
                        <img src="img/edit.gif" alt="" onclick="Update_S_SetoranAnggota(event)">
                    </td>
                    <td class="delete">
                        <img src="img/bin.gif" alt="" onclick="Delete(event)">
                    </td>
                </tr>
                `
                No++;
            }
        }
        const tablecontent = document.querySelector(".table2 tbody")
        tablecontent.insertAdjacentHTML('beforeend', text2)
    })
    .catch((err) => console.log(err))
}
function penarikan_simpanan(start, end, code){
    const body = document.querySelector(".body")
    let text = ''
    if(start && end){
        text = `
            <div class="container">
                <div class="title">
                    <h1>Simpanan</h1>
                    <label>Penarikan Simpanan</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Data Transaksi Penarikan</label>
                    </div>
                    <div class="fiture">
                        <div class="add" onclick="Add_S_Penarikan_Simpanan()">
                            <img src="img/plus.gif" alt="">
                            <label>Add</label>
                        </div>
                        <input type="text" class="date" placeholder="${start} - ${end}">
                        <div class="search"><input type="text" placeholder="[Kode Transaksi]" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_simpanan()"><img src="img/printer.gif"><label>Cetak Laporan</label></div>       
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Kode Transaksi</td>
                                <td>Tanggal Transaksi</td>
                                <td>ID Anggota</td>
                                <td>Nama Anggota</td>
                                <td>Dept</td>
                                <td>Jenis Simpanan</td>
                                <td>Jumlah</td>
                                <td>Keterangan</td>
                                <td>Ambil Dari Kas</td>
                                <td>User</td>
                                <td class="cetak">Cetak Nota</td>
                                <td class="edit">Edit</td>
                                <td class="delete">Delete</td>
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
                    <h1>Simpanan</h1>
                    <label>Penarikan Simpanan</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Data Transaksi Penarikan</label>
                    </div>
                    <div class="fiture">
                        <div class="add" onclick="Add_S_Penarikan_Simpanan()">
                            <img src="img/plus.gif" alt="">
                            <label>Add</label>
                        </div>
                        <input type="text" class="date" placeholder="Select The Date">
                        <div class="search"><input type="text" placeholder="${code}" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_simpanan()"><img src="img/printer.gif"><label>Cetak Laporan</label></div>       
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Kode Transaksi</td>
                                <td>Tanggal Transaksi</td>
                                <td>ID Anggota</td>
                                <td>Nama Anggota</td>
                                <td>Dept</td>
                                <td>Jenis Simpanan</td>
                                <td>Jumlah</td>
                                <td>Keterangan</td>
                                <td>Ambil Dari Kas</td>
                                <td>User</td>
                                <td class="cetak">Cetak Nota</td>
                                <td class="edit">Edit</td>
                                <td class="delete">Delete</td>
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
                <h1>Simpanan</h1>
                <label>Penarikan Simpanan</label>
            </div>
            <div class="table">
                <div class="table-title">
                    <label>Data Transaksi Penarikan</label>
                </div>
                <div class="fiture">
                    <div class="add" onclick="Add_S_Penarikan_Simpanan()">
                        <img src="img/plus.gif" alt="">
                        <label>Add</label>
                    </div>
                    <input type="text" class="date" placeholder="Select The Date">
                    <div class="search"><input type="text" placeholder="[Kode Transaksi]" onchange="Find(value)"></div>        
                    <div class="print" onclick="form_cetak_table_simpanan()"><img src="img/printer.gif"><label>Cetak Laporan</label></div>       
                </div>
                <div class="table-content">
                <table class="table2">
                    <tbody>
                        <tr class="head">
                            <td>No</td>
                            <td>Kode Transaksi</td>
                            <td>Tanggal Transaksi</td>
                            <td>ID Anggota</td>
                            <td>Nama Anggota</td>
                            <td>Dept</td>
                            <td>Jenis Simpanan</td>
                            <td>Jumlah</td>
                            <td>Keterangan</td>
                            <td>Ambil Dari Kas</td>
                            <td>User</td>
                            <td class="cetak">Cetak Nota</td>
                            <td class="edit">Edit</td>
                            <td class="delete">Delete</td>
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
    
    GetPenarikanSimpanan()
    .then((data) => {
        let No = 1
        let text2 = ''
        if(start && end){
            for (const content of data) {
                if(content.Tanggal_Transaksi >= start && content.Tanggal_Transaksi <= end){
                    text2 += 
                    `
                    <tr>
                        <td>${No}</td>
                        <td>${content.Kode_Transaksi}</td>
                        <td>${content.Tanggal_Transaksi}</td>
                        <td>${content.ID_Anggota}</td>
                        <td>${content.Nama}</td>
                        <td>${content.Dept}</td>
                        <td>${content.Jenis_Simpanan}</td>
                        <td>${content.Jumlah}</td>
                        <td>${content.Keterangan}</td>
                        <td>${content.Ambil_Dari_Kas}</td>
                        <td>${content.User}</td>
                        <td class="cetak" onclick="cetak_simpanan(event, 'penarikan_simpanan')">
                            <img src="img/printer.gif" alt="">
                        </td>
                        <td class="edit">
                            <img src="img/edit.gif" alt="" onclick="Update_S_PenarikanSimpanan(event)">
                        </td>
                        <td class="delete">
                            <img src="img/bin.gif" alt="" onclick="Delete(event)">
                        </td>
                    </tr>
                    `
                    No++;
                }
            }
        }else if(code){
            for (const content of data) {
                if(content.Kode_Transaksi == code){
                    text2 += 
                    `
                    <tr>
                        <td>${No}</td>
                        <td>${content.Kode_Transaksi}</td>
                        <td>${content.Tanggal_Transaksi}</td>
                        <td>${content.ID_Anggota}</td>
                        <td>${content.Nama}</td>
                        <td>${content.Dept}</td>
                        <td>${content.Jenis_Simpanan}</td>
                        <td>${content.Jumlah}</td>
                        <td>${content.Keterangan}</td>
                        <td>${content.Ambil_Dari_Kas}</td>
                        <td>${content.User}</td>
                        <td class="cetak" onclick="cetak_simpanan(event, 'penarikan_simpanan')">
                            <img src="img/printer.gif" alt="">
                        </td>
                        <td class="edit">
                            <img src="img/edit.gif" alt="" onclick="Update_S_PenarikanSimpanan(event)">
                        </td>
                        <td class="delete">
                            <img src="img/bin.gif" alt="" onclick="Delete(event)">
                        </td>
                    </tr>
                    `
                    No++;
                }
            }
        }else{
            for (const content of data) {
                text2 += 
                `
                <tr>
                    <td>${No}</td>
                    <td>${content.Kode_Transaksi}</td>
                    <td>${content.Tanggal_Transaksi}</td>
                    <td>${content.ID_Anggota}</td>
                    <td>${content.Nama}</td>
                    <td>${content.Dept}</td>
                    <td>${content.Jenis_Simpanan}</td>
                    <td>${content.Jumlah}</td>
                    <td>${content.Keterangan}</td>
                    <td>${content.Ambil_Dari_Kas}</td>
                    <td>${content.User}</td>
                    <td class="cetak" onclick="cetak_simpanan(event, 'penarikan_simpanan')">
                        <img src="img/printer.gif" alt="">
                    </td>
                    <td class="edit">
                        <img src="img/edit.gif" alt="" onclick="Update_S_PenarikanSimpanan(event)">
                    </td>
                    <td class="delete">
                        <img src="img/bin.gif" alt="" onclick="Delete(event)">
                    </td>
                </tr>
                `
                No++;
            }
        }
        const tablecontent = document.querySelector(".table2 tbody")
        tablecontent.insertAdjacentHTML('beforeend', text2)
    })
    .catch((err) => console.log(err))
}