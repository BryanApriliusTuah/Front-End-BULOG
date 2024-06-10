// Settings
function identitas_koperasi(){
    const body = document.querySelector(".body")
    GetIdentitasKoperasi()
    .then((data) => {
        let text = ``
        if(data[0]){
            data = data[0]
            text = 
            `
                <div class="form">
                    <div class="title2">Update Data Koperasi</div>
                    <div class="form-input">
                        <div class="a nama_koperasi">
                            <label>Nama Koperasi</label>
                            <input type="text" value="${data.Nama_Koperasi}">
                        </div>
                        <div class="a nama_pimpinan">
                            <label>Nama Pimpinan</label>
                            <input type="text" value="${data.Nama_Pimpinan}">
                        </div>
                        <div class="a no_hp">
                            <label>No. HP</label>
                            <input type="text" value="${data.No_HP}">
                        </div>
                        <div class="a alamat">
                            <label>Alamat</label>
                            <input type="text" value="${data.Alamat}">
                        </div>
                        <div class="a telepon">
                            <label>Telepon</label>
                            <input type="text" value="${data.Telepon}">
                        </div>
                        <div class="a kota">
                            <label>Kota/Kabupaten</label>
                            <input type="text" value="${data.Kota}">
                        </div>
                        <div class="a email">
                            <label>Email</label>
                            <input type="text" value="${data.Email}">
                        </div>
                        <div class="a website">
                            <label>Website</label>
                            <input type="text" value="${data.Website}">
                        </div>
                        <div class="a button">
                            <button onclick="Update_Identitas_Koperasi(event)">Update</button>
                        </div>
                    </div>
                </div>
            `
        }else{
            text = 
            `
                <div class="form">
                    <div class="title2">Update Data Koperasi</div>
                    <div class="form-input">
                        <div class="a nama_koperasi">
                            <label>Nama Koperasi</label>
                            <input type="text">
                        </div>
                        <div class="a nama_pimpinan">
                            <label>Nama Pimpinan</label>
                            <input type="text">
                        </div>
                        <div class="a no_hp">
                            <label>No. HP</label>
                            <input type="text">
                        </div>
                        <div class="a alamat">
                            <label>Alamat</label>
                            <input type="text">
                        </div>
                        <div class="a telepon">
                            <label>Telepon</label>
                            <input type="text">
                        </div>
                        <div class="a kota">
                            <label>Kota/Kabupaten</label>
                            <input type="text">
                        </div>
                        <div class="a email">
                            <label>Email</label>
                            <input type="text">
                        </div>
                        <div class="a website">
                            <label>Website</label>
                            <input type="text">
                        </div>
                        <div class="a button">
                            <button onclick="Add_Identitas_Koperasi(event)">Simpan</button>
                        </div>
                    </div>
                </div>
            `
        }
        return text
    })
    .then((data) => body.innerHTML = data)
}
function bagi_hasil(){
    const body = document.querySelector(".body")
    GetBagiHasil()
    .then((data) => {
        let text = ``
        if(data[0]){
            data = data[0]
            text = 
            `
                <div class="form">
                    <div class="title2">Update Data Koperasi</div>
                    <div class="form-input">
                        <div class="a tipe_pinjaman_bunga">
                            <label>Tipe Pinjaman Bunga</label>
                            <select name="" id="Suku-Bunga">
                                <option value="${data.Tipe_Pinjaman_Bunga}" selected hidden>${data.Tipe_Pinjaman_Bunga}</option>
                                <option value="A: Persen Bunga Dikali Angsuran Bulan">A: Persen Bunga Dikali Angsuran Bulan</option>
                                <option value="B: Persen Bunga Dikali Total Pinjaman">B: Persen Bunga Dikali Total Pinjaman</option>
                            </select>
                        </div>
                        <div class="a suku_bunga">
                            <label>Suku Bunga Hasil Pinjaman (Bunga)(%)</label>
                            <input type="text" value="${data.Suku_Bunga}">
                        </div>
                        <div class="a biaya_administrasi">
                            <label>Biaya Administrasi (%)</label>
                            <input type="text" value="${data.Biaya_Administrasi}">
                        </div>
                        <div class="a biaya_denda">
                            <label>Biaya Denda (Rp)</label>
                            <input type="text" value="${data.Biaya_Denda}">
                        </div>
                        <div class="a tempo">
                            <label>Tempo Tanggal Pembayaran</label>
                            <input type="text" value="${data.Tempo_Tanggal_Pembayaran}">
                        </div>
                        <div class="a kota">
                            <label>Kota/Kabupaten</label>
                            <input type="text" value="${data.Kota}">
                        </div>
                        <div class="a jasa_anggota">
                            <label>Jasa Anggota (%)</label>
                            <input type="text" value="${data.Jasa_Anggota}">
                        </div>
                        <div class="a Dana_Cadangan">
                            <label>Dana Cadangan (%)</label>
                            <input type="text" value="${data.Dana_Cadangan}">
                        </div>
                        <div class="a Dana_Pengurus">
                            <label>Dana Pengurus (%)</label>
                            <input type="text" value="${data.Dana_Pengurus}">
                        </div>
                        <div class="a Dana_Karyawan">
                            <label>Dana Karyawan (%)</label>
                            <input type="text" value="${data.Dana_Karyawan}">
                        </div>
                        <div class="a Dana_Pendidikan">
                            <label>Dana Pendidikan (%)</label>
                            <input type="text" value="${data.Dana_Pendidikan}">
                        </div>
                        <div class="a Dana_Sosial">
                            <label>Dana Sosial (%)</label>
                            <input type="text" value="${data.Dana_Sosial}">
                        </div>
                        <div class="a Jasa_Usaha">
                            <label>Jasa Usaha (%)</label>
                            <input type="text" value="${data.Jasa_Usaha}">
                        </div>
                        <div class="a Jasa_Modal_Anggota">
                            <label>Jasa Modal Anggota (%)</label>
                            <input type="text" value="${data.Jasa_Modal_Anggota}">
                        </div>
                        <div class="a Pajak_PPh">
                            <label>Pajak PPh (%)</label>
                            <input type="text" value="${data.Pajak_PPh}">
                        </div>
                        <div class="a Dana_Pengawas">
                            <label>Dana Pengawas (%)</label>
                            <input type="text" value="${data.Dana_Pengawas}">
                        </div>
                        <div class="a Dana_Asuransi">
                            <label>Dana Asuransi (%)</label>
                            <input type="text" value="${data.Dana_Asuransi}">
                        </div>
                        <div class="a Limit_Pagu_Pinjaman">
                            <label>Limit/Pagu Pinjaman (%)</label>
                            <input type="text" value="${data.Limit_Pagu_Pinjaman}">
                        </div>
                        <div class="a button">
                            <button onclick="Update_Bagi_Hasil(event)">Update</button>
                        </div>
                    </div>
                </div>
            `
        }else{
            text = 
            `
                <div class="form">
                    <div class="title2">Update Data Koperasi</div>
                    <div class="form-input">
                        <div class="a tipe_pinjaman_bunga">
                            <label>Tipe Pinjaman Bunga</label>
                            <select name="" id="Suku-Bunga">
                                <option value="A: Persen Bunga Dikali Angsuran Bulan">A: Persen Bunga Dikali Angsuran Bulan</option>
                                <option value="B: Persen Bunga Dikali Total Pinjaman">B: Persen Bunga Dikali Total Pinjaman</option>
                            </select>
                        </div>
                        <div class="a suku_bunga">
                            <label>Suku Bunga Hasil Pinjaman (Bunga)(%)</label>
                            <input type="text">
                        </div>
                        <div class="a biaya_administrasi">
                            <label>Biaya Administrasi (%)</label>
                            <input type="text">
                        </div>
                        <div class="a biaya_denda">
                            <label>Biaya Denda (Rp)</label>
                            <input type="text">
                        </div>
                        <div class="a tempo">
                            <label>Tempo Tanggal Pembayaran</label>
                            <input type="text">
                        </div>
                        <div class="a kota">
                            <label>Kota/Kabupaten</label>
                            <input type="text">
                        </div>
                        <div class="a jasa_anggota">
                            <label>Jasa Anggota (%)</label>
                            <input type="text">
                        </div>
                        <div class="a Dana_Cadangan">
                            <label>Dana Cadangan (%)</label>
                            <input type="text">
                        </div>
                        <div class="a Dana_Pengurus">
                            <label>Dana Pengurus (%)</label>
                            <input type="text">
                        </div>
                        <div class="a Dana_Karyawan">
                            <label>Dana Karyawan (%)</label>
                            <input type="text">
                        </div>
                        <div class="a Dana_Pendidikan">
                            <label>Dana Pendidikan (%)</label>
                            <input type="text">
                        </div>
                        <div class="a Dana_Sosial">
                            <label>Dana Sosial (%)</label>
                            <input type="text">
                        </div>
                        <div class="a Jasa_Usaha">
                            <label>Jasa Usaha (%)</label>
                            <input type="text">
                        </div>
                        <div class="a Jasa_Modal_Anggota">
                            <label>Jasa Modal Anggota (%)</label>
                            <input type="text">
                        </div>
                        <div class="a Pajak_PPh">
                            <label>Pajak PPh (%)</label>
                            <input type="text">
                        </div>
                        <div class="a Dana_Pengawas">
                            <label>Dana Pengawas (%)</label>
                            <input type="text">
                        </div>
                        <div class="a Dana_Asuransi">
                            <label>Dana Asuransi (%)</label>
                            <input type="text">
                        </div>
                        <div class="a Limit_Pagu_Pinjaman">
                            <label>Limit/Pagu Pinjaman (%)</label>
                            <input type="text">
                        </div>
                        <div class="a button">
                            <button onclick="Add_Bagi_Hasil(event)">Simpan</button>
                        </div>
                    </div>
                </div>
            `
        }
        return text
    })
    .then((data) => body.innerHTML = data)
}