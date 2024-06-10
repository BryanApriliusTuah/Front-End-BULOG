function Notif(){
    GetBayarAngsuran().then((data) => {
        let Notif = 0
        let today = new Date()
        let day = String(today.getDate()).padStart(2, '0');
        let month = String(today.getMonth() + 1).padStart(2, '0');
        let year = today.getFullYear()
        let CurrentTime = `${year}-${month}-${day}`

        for (const DataBA of data) {
            if(DataBA.Bulan <= CurrentTime && DataBA.Bayar == 'Belum'){
                Notif++
            }
        }

        let text = document.querySelector('.number')
        text.textContent = Notif
        let imgNotif = document.querySelector('.shape')

        text.textContent == 0 ? (
            imgNotif.src = 'img/alarm2.png',
            imgNotif.style.width = '1.75vw',
            text.style.display = 'none'
        ) : ''
    })
}

// setInterval(Notif, 500)
Notif()