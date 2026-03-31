let manHinh = document.getElementById("manHinh");

function nhap(giaTri) {
    manHinh.value = manHinh.value + giaTri;
}

function xoa() {
    manHinh.value = "";
}

function tinhToan() {
    try {
        let ketQua = eval(manHinh.value);
        manHinh.value = ketQua;
    } catch (error) {
        manHinh.value = "Lỗi";
    }
}