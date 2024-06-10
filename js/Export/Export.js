function Export(name){    
    const filename = `Master-Data ${name}.xlsx`
    const origin = document.querySelector(".table2").outerHTML
    const table = document.querySelector(".table2")
    const rows = table.querySelectorAll("tr")
    rows.forEach(row => {
        row.removeChild(row.querySelector(".edit"));
        row.removeChild(row.querySelector(".delete"));
    });

    console.log(table)
    console.log(origin)

    const wb = XLSX.utils.table_to_book(table)
    XLSX.writeFile(wb, filename)

    document.querySelector(".table2").outerHTML = origin
}