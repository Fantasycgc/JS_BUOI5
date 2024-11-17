function showConnect() {
    const customer = document.getElementById("selCustomer").value;
    document.getElementById("inputConnect").style.display = "company" == customer ? "block" : "none"
}