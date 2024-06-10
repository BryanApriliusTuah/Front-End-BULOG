function numberToWordsIndonesian(number) {
    const units = ['', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan'];
    const teens = ['Sepuluh', 'Sebelas', 'Dua Belas', 'Tiga Belas', 'Empat Belas', 'Lima Belas', 'Enam Belas', 'Tujuh Belas', 'Delapan Belas', 'Sembilan Belas'];
    const tens = ['', '', 'Dua Puluh', 'Tiga Puluh', 'Empat Puluh', 'Lima Puluh', 'Enam Puluh', 'Tujuh Puluh', 'Delapan Puluh', 'Sembilan Puluh'];
    const thousands = ['Ribu', 'Juta', 'Miliar', 'Triliun'];

    if (number === 0) return 'Nol';
    if (number < 0) return 'Minus ' + numberToWordsIndonesian(Math.abs(number));

    let words = '';

    const getHundreds = (n) => {
        let str = '';
        if (n === 100) {
            return 'Seratus';
        }
        if (n > 99) {
            str += units[Math.floor(n / 100)] + ' Ratus ';
            n %= 100;
        }
        if (n > 9 && n < 20) {
            return str + teens[n - 10];
        }
        if (n > 19) {
            str += tens[Math.floor(n / 10)] + ' ';
            n %= 10;
        }
        if (n > 0) {
            str += units[n] + ' ';
        }
        return str.trim();
    };

    const parts = [];
    let unitIndex = 0;
    while (number > 0) {
        const chunk = number % 1000;
        if (chunk > 0) {
            let chunkStr = getHundreds(chunk);
            if (unitIndex > 0 && chunkStr) {
                chunkStr += ' ' + thousands[unitIndex - 1];
            }
            parts.unshift(chunkStr);
        }
        number = Math.floor(number / 1000);
        unitIndex++;
    }

    return parts.join(' ').trim();
}
function convertFormattedNumber(formattedNumber) {
    // Remove commas from the formatted number string
    const numberString = formattedNumber.replace(/,/g, '');
    // Convert the string to a number
    return Number(numberString);
}
// console.log(numberToWordsIndonesian(10000)); // Output: Sepuluh Ribu
