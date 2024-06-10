function Open(){
    const Pw = document.querySelector('.Password input')
    if (Pw.type === "password") {
        Pw.type = "text";
    } else {
        Pw.type = "password";
    }
}