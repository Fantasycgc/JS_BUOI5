function showConnect() {

    const customer = document.getElementById("selCustomer").value;
    document.getElementById("inputConnect").style.display = "company" == customer ? "block" : "none"
}
document.onkeydown = function (e) {
    e = e || window.event;

    if (
        e.keyCode === 123 ||
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
        (e.ctrlKey && e.keyCode === 85)
    ) {
        e.preventDefault();
        return false;
    }
};