function Click_Menu(){
    const text = `
        <div class="menu-mobile2">
            <ul>
                <li onclick="beranda()">
                    <img src="img/house.gif" alt="">
                    <label>Beranda</label>
                </li>
                <li onclick="transaksi_kas()">
                    <img src="img/invoice.gif" alt="">
                    <label>Transaksi Kas</label>
                </li>
                <li onclick="simpanan()">
                    <img src="img/money-bag.gif" alt="">
                    <label>Simpanan</label>
                </li>
                <li onclick="pinjaman()">
                    <img src="img/discount-bag.gif" alt="">
                    <label>Pinjaman</label>
                </li>
                <li onclick="laporan()">
                    <img src="img/report.gif" alt="">
                    <label>Laporan</label>
                </li>
                <li onclick="master_data()">
                    <img src="img/folder.gif" alt="">
                    <label>Master Data</label>
                </li>
                <li onclick="settings()">
                    <img src="img/setting.gif" alt="">
                    <label>Settings</label>
                </li>
            </ul>
        </div>
    `
    const body = document.querySelector(".body")
    body.innerHTML = text


    // document.querySelector('.menu-mobile').style.left = "0";
    // document.querySelector('.menu-mobile').style.right = "0";
    // document.querySelector('.menu-mobile').style.margin = "auto";
    // document.querySelector('.menu-mobile').style.width = "90%";
    // document.querySelector('.menu-mobile').style.height = "60vh";
    // document.querySelector('.menu-mobile').style.gap = "2vh";
    
    // document.querySelector('.exit').style.display = "block";
    // document.querySelector('.sub-menu-mobile').style.display = "flex";
    // document.querySelector('.sub-menu-mobile').style.flexDirection = "column";
    // document.querySelector('.sub-menu-mobile').style.gap = "2vh";
}

// function Exit_Menu(event){
//     event.stopPropagation();

//     document.querySelector(".exit").style.display = "none";
//     document.querySelector(".sub-menu-mobile").style.display = "none";
    
//     const screen1 = screen.width;
//     const left = screen1 <= 425 ? document.querySelector('.menu-mobile').style.left = "3vh" : document.querySelector('.menu-mobile').style.left = "8vh"

//     document.querySelector('.menu-mobile').style.right = "";
//     document.querySelector('.menu-mobile').style.margin = "";
//     document.querySelector('.menu-mobile').style.width = "6vh";
//     document.querySelector('.menu-mobile').style.height = "6vh";
// }

