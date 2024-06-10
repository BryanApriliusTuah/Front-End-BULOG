function updateDateTime() {
    const tanggal1 = document.querySelector('.tanggal');
    const jam1 = document.querySelector('.jam')
    const currentTime = new Date();

    // Define arrays for days of the week and months to format the day and month names.
    const daysOfWeek = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const dayOfWeek = daysOfWeek[currentTime.getDay()];


    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const month = months[currentTime.getMonth()];

    const day = currentTime.getDate();
    const year = currentTime.getFullYear();

    // Calculate and format hours (in 12-hour format), minutes, seconds, and AM/PM.
    let hours = currentTime.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');

    // Construct the date and time string in the desired format.
    const tanggal = `${dayOfWeek}, ${day} ${month} ${year}`
    const jam = `${hours}:${minutes}:${seconds}`
    // const dateTimeString = `${dayOfWeek}, ${month} ${day}, ${year} ${hours}:${minutes}:${seconds} ${ampm}`;
    tanggal1.textContent = tanggal
    jam1.textContent = jam

}
setInterval(updateDateTime, 1000);
updateDateTime();