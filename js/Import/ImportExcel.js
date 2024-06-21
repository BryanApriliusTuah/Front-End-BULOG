const CHUNK_SIZE = 100; // Example: Process 100 rows at a time
async function uploadExcel() {
    const fileInput = document.getElementById('excelFile');
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = async function(event) {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);

        // Send JSON data to server
        for (let i = 0; i < json.length; i += CHUNK_SIZE) {
            const chunk = json.slice(i, i + CHUNK_SIZE);
            await ImportDataAnggota(json)
        }
    };

    reader.readAsArrayBuffer(file);
}