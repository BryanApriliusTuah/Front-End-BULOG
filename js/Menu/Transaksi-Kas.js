// Transaksi Kas
function pemasukan(start, end, code){
    const body = document.querySelector(".body")
    let text = ''
    if(start && end){
        text = `
            <div class="container">
                <div class="title">
                    <h1>Transaksi</h1>
                    <label>Pemasukan Kas Tunai</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Data Transaksi Pemasukan Kas</label>
                    </div>
                    <div class="fiture">
                        <div class="add" onclick="Add_TR_Pemasukan()">
                            <img src="img/plus.gif" alt="">
                            <label>Add</label>
                        </div>
                        <input type="text" class="date" placeholder="${start} - ${end}">
                        <div class="search"><input type="text" placeholder="[Kode Transaksi]" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_transaksi()"><img src="img/printer.gif"><label>Cetak</label></div>        
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Kode Transaksi</td>
                                <td>Tanggal Transaksi</td>
                                <td>Uraian</td>
                                <td>Untuk Kas</td>
                                <td>Dari Akun</td>
                                <td>Jumlah</td>
                                <td>User</td>
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
                    <h1>Transaksi</h1>
                    <label>Pemasukan Kas Tunai</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Data Transaksi Pemasukan Kas</label>
                    </div>
                    <div class="fiture">
                        <div class="add" onclick="Add_TR_Pemasukan()">
                            <img src="img/plus.gif" alt="">
                            <label>Add</label>
                        </div>
                        <input type="text" class="date"/ placeholder="Select The Date">
                        <div class="search"><input type="text" placeholder="${code}" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_transaksi()"><img src="img/printer.gif"><label>Cetak</label></div>        
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Kode Transaksi</td>
                                <td>Tanggal Transaksi</td>
                                <td>Uraian</td>
                                <td>Untuk Kas</td>
                                <td>Dari Akun</td>
                                <td>Jumlah</td>
                                <td>User</td>
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
                    <h1>Transaksi</h1>
                    <label>Pemasukan Kas Tunai</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Data Transaksi Pemasukan Kas</label>
                    </div>
                    <div class="fiture">
                        <div class="add" onclick="Add_TR_Pemasukan()">
                            <img src="img/plus.gif" alt="">
                            <label>Add</label>
                        </div>
                        <input type="text" class="date"/ placeholder="Select The Date">
                        <div class="search"><input type="text" placeholder="[Kode Transaksi]" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_transaksi()"><img src="img/printer.gif"><label>Cetak</label></div>        
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Kode Transaksi</td>
                                <td>Tanggal Transaksi</td>
                                <td>Uraian</td>
                                <td>Untuk Kas</td>
                                <td>Dari Akun</td>
                                <td>Jumlah</td>
                                <td>User</td>
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

    GetPemasukan()
    .then((data) => {
        let text2 = ""
        let No = 1;
        if(start && end){
            for (const content of data) {
                if(content.Tanggal_Transaksi >= start && content.Tanggal_Transaksi <= end){
                    text2 += 
                    `
                    <tr>
                        <td>${No}</td>
                        <td>${content.Kode_Transaksi}</td>
                        <td>${content.Tanggal_Transaksi}</td>
                        <td>${content.Uraian}</td>
                        <td>${content.Untuk_Kas}</td>
                        <td>${content.Dari_Akun}</td>
                        <td>${content.Jumlah}</td>
                        <td>${content.User}</td>
                        <td class="edit">
                            <img src="img/edit.gif" alt="" onclick="Update_TR_Pemasukan(event)">
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
            if(code){
                for (const content of data) {
                    if(content.Kode_Transaksi == code){
                        text2 += 
                        `
                        <tr>
                            <td>${No}</td>
                            <td>${content.Kode_Transaksi}</td>
                            <td>${content.Tanggal_Transaksi}</td>
                            <td>${content.Uraian}</td>
                            <td>${content.Untuk_Kas}</td>
                            <td>${content.Dari_Akun}</td>
                            <td>${content.Jumlah}</td>
                            <td>${content.User}</td>
                            <td class="edit">
                                <img src="img/edit.gif" alt="" onclick="Update_TR_Pemasukan(event)">
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
                        <td>${content.Uraian}</td>
                        <td>${content.Untuk_Kas}</td>
                        <td>${content.Dari_Akun}</td>
                        <td>${content.Jumlah}</td>
                        <td>${content.User}</td>
                        <td class="edit">
                            <img src="img/edit.gif" alt="" onclick="Update_TR_Pemasukan(event)">
                        </td>
                        <td class="delete">
                            <img src="img/bin.gif" alt="" onclick="Delete(event)">
                        </td>
                    </tr>
                    `
                    // 
                    No++;
                }
            }
        }
        const tablecontent = document.querySelector(".table2 tbody")
        tablecontent.insertAdjacentHTML('beforeend', text2)
    })
    .catch((err) => console.log(err))
}
function pengeluaran(start, end, code){
    const body = document.querySelector(".body")
    let text = ''
    if(start && end){
        text = `
            <div class="container">
                <div class="title">
                    <h1>Transaksi</h1>
                    <label>Pengeluaran Kas Tunai</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Data Transaksi Pengeluaran Kas</label>
                    </div>
                    <div class="fiture">
                        <div class="add" onclick="Add_TR_Pengeluaran()">
                            <img src="img/plus.gif" alt="">
                            <label>Tambah</label>
                        </div>
                        <input type="text" class="date"/ placeholder="${start} - ${end}">
                        <div class="search"><input type="text" placeholder="[Kode Transaksi]" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_transaksi()"><img src="img/printer.gif"><label>Cetak</label></div>       
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Kode Transaksi</td>
                                <td>Tanggal Transaksi</td>
                                <td>Uraian</td>
                                <td>Untuk Kas</td>
                                <td>Dari Akun</td>
                                <td>Jumlah</td>
                                <td>User</td>
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
                        <h1>Transaksi</h1>
                        <label>Pengeluaran Kas Tunai</label>
                    </div>
                    <div class="table">
                        <div class="table-title">
                            <label>Data Transaksi Pengeluaran Kas</label>
                        </div>
                        <div class="fiture">
                            <div class="add" onclick="Add_TR_Pengeluaran()">
                                <img src="img/plus.gif" alt="">
                                <label>Tambah</label>
                            </div>
                            <input type="text" class="date"/ placeholder="Select The Date">
                            <div class="search"><input type="text" placeholder="${code}" onchange="Find(value)"></div>        
                            <div class="print" onclick="form_cetak_table_transaksi()"><img src="img/printer.gif"><label>Cetak</label></div>       
                        </div>
                        <div class="table-content">
                        <table class="table2">
                            <tbody>
                                <tr class="head">
                                    <td>No</td>
                                    <td>Kode Transaksi</td>
                                    <td>Tanggal Transaksi</td>
                                    <td>Uraian</td>
                                    <td>Untuk Kas</td>
                                    <td>Dari Akun</td>
                                    <td>Jumlah</td>
                                    <td>User</td>
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
                    <h1>Transaksi</h1>
                    <label>Pengeluaran Kas Tunai</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Data Transaksi Pengeluaran Kas</label>
                    </div>
                    <div class="fiture">
                        <div class="add" onclick="Add_TR_Pengeluaran()">
                            <img src="img/plus.gif" alt="">
                            <label>Tambah</label>
                        </div>
                        <input type="text" class="date"/ placeholder="Select The Date">
                        <div class="search"><input type="text" placeholder="[Kode Transaksi]" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_transaksi()"><img src="img/printer.gif"><label>Cetak</label></div>       
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Kode Transaksi</td>
                                <td>Tanggal Transaksi</td>
                                <td>Uraian</td>
                                <td>Untuk Kas</td>
                                <td>Dari Akun</td>
                                <td>Jumlah</td>
                                <td>User</td>
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

    GetPengeluaran()
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
                        <td>${content.Uraian}</td>
                        <td>${content.Untuk_Kas}</td>
                        <td>${content.Dari_Akun}</td>
                        <td>${content.Jumlah}</td>
                        <td>${content.User}</td>
                        <td class="edit">
                            <img src="img/edit.gif" alt="" onclick="Update_TR_Pengeluaran(event)">
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
                        <td>${content.Uraian}</td>
                        <td>${content.Untuk_Kas}</td>
                        <td>${content.Dari_Akun}</td>
                        <td>${content.Jumlah}</td>
                        <td>${content.User}</td>
                        <td class="edit">
                            <img src="img/edit.gif" alt="" onclick="Update_TR_Pengeluaran(event)">
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
                        <td>${content.Uraian}</td>
                        <td>${content.Untuk_Kas}</td>
                        <td>${content.Dari_Akun}</td>
                        <td>${content.Jumlah}</td>
                        <td>${content.User}</td>
                        <td class="edit">
                            <img src="img/edit.gif" alt="" onclick="Update_TR_Pengeluaran(event)">
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
function transfer(start, end, code){
    const body = document.querySelector(".body")
    let text = ''
    if(start && end){
        text = `
            <div class="container">
                <div class="title">
                    <h1>Transaksi</h1>
                    <label>Pengeluaran Kas Tunai</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Data Transaksi Transfer AntarKas</label>
                    </div>
                    <div class="fiture">
                        <div class="add" onclick="Add_TR_Transfer()">
                            <img src="img/plus.gif" alt="">
                            <label>Add</label>
                        </div>
                        <input type="text" class="date"/ placeholder="${start} - ${end}">
                        <div class="search"><input type="text" placeholder="[Kode Transaksi]" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_transaksi()"><img src="img/printer.gif"><label>Cetak</label></div>      
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Kode Transaksi</td>
                                <td>Tanggal Transaksi</td>
                                <td>Uraian</td>
                                <td>Untuk Kas</td>
                                <td>Dari Akun</td>
                                <td>Jumlah</td>
                                <td>User</td>
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
                    <h1>Transaksi</h1>
                    <label>Pengeluaran Kas Tunai</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Data Transaksi Transfer AntarKas</label>
                    </div>
                    <div class="fiture">
                        <div class="add" onclick="Add_TR_Transfer()">
                            <img src="img/plus.gif" alt="">
                            <label>Add</label>
                        </div>
                        <input type="text" class="date"/ placeholder="Select The Date">
                        <div class="search"><input type="text" placeholder="${code}" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_transaksi()"><img src="img/printer.gif"><label>Cetak</label></div>      
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Kode Transaksi</td>
                                <td>Tanggal Transaksi</td>
                                <td>Uraian</td>
                                <td>Untuk Kas</td>
                                <td>Dari Akun</td>
                                <td>Jumlah</td>
                                <td>User</td>
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
                    <h1>Transaksi</h1>
                    <label>Pengeluaran Kas Tunai</label>
                </div>
                <div class="table">
                    <div class="table-title">
                        <label>Data Transaksi Transfer AntarKas</label>
                    </div>
                    <div class="fiture">
                        <div class="add" onclick="Add_TR_Transfer()">
                            <img src="img/plus.gif" alt="">
                            <label>Add</label>
                        </div>
                        <input type="text" class="date"/ placeholder="Select The Date">
                        <div class="search"><input type="text" placeholder="[Kode Transaksi]" onchange="Find(value)"></div>        
                        <div class="print" onclick="form_cetak_table_transaksi()"><img src="img/printer.gif"><label>Cetak</label></div>      
                    </div>
                    <div class="table-content">
                    <table class="table2">
                        <tbody>
                            <tr class="head">
                                <td>No</td>
                                <td>Kode Transaksi</td>
                                <td>Tanggal Transaksi</td>
                                <td>Uraian</td>
                                <td>Untuk Kas</td>
                                <td>Dari Akun</td>
                                <td>Jumlah</td>
                                <td>User</td>
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
    
    GetTransfer()
    .then((data) => {
        let No = 1;
        let text2 = ""
        if(start && end){
            for (const content of data) {
                if(content.Tanggal_Transaksi >= start && content.Tanggal_Transaksi <= end){
                    text2 += `
                        <tr>
                            <td>${No}</td>
                            <td>${content.Kode_Transaksi}</td>
                            <td>${content.Tanggal_Transaksi}</td>
                            <td>${content.Uraian}</td>
                            <td>${content.Untuk_Akun}</td>
                            <td>${content.Dari_Kas}</td>
                            <td>${content.Jumlah}</td>
                            <td>${content.User}</td>
                            <td class="edit">
                                <img src="img/edit.gif" alt="" onclick="Update_TR_Transfer(event)">
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
                    text2 += `
                        <tr>
                            <td>${No}</td>
                            <td>${content.Kode_Transaksi}</td>
                            <td>${content.Tanggal_Transaksi}</td>
                            <td>${content.Uraian}</td>
                            <td>${content.Untuk_Akun}</td>
                            <td>${content.Dari_Kas}</td>
                            <td>${content.Jumlah}</td>
                            <td>${content.User}</td>
                            <td class="edit">
                                <img src="img/edit.gif" alt="" onclick="Update_TR_Transfer(event)">
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
                text2 += `
                    <tr>
                        <td>${No}</td>
                        <td>${content.Kode_Transaksi}</td>
                        <td>${content.Tanggal_Transaksi}</td>
                        <td>${content.Uraian}</td>
                        <td>${content.Untuk_Akun}</td>
                        <td>${content.Dari_Kas}</td>
                        <td>${content.Jumlah}</td>
                        <td>${content.User}</td>
                        <td class="edit">
                            <img src="img/edit.gif" alt="" onclick="Update_TR_Transfer(event)">
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