function kiemTraBMI(){
    let weight = +document.getElementById("weight").value;
    let height = +document.getElementById("height").value;

    if(weight === 0 || height === 0) {
        document.getElementById("ketQua").innerHTML = "Hãy nhập đầy đủ cân nặng và chiều cao!";
        return;
    }
    let heightInMeter = height / 100;
    let BMI = weight/(heightInMeter*heightInMeter);

    let phanLoai = ""

    if (BMI < 18.5){
        phanLoai = "Thiếu cân";
    }else if (BMI < 25.0){
        phanLoai = "Bình thường";
    }else if (BMI < 30.0){
        phanLoai = "Thừa cân";
    }else {
        phanLoai = "Béo phì";
    }
    document.getElementById("ketQua").innerHTML = "Chỉ số BMI của bạn là: <strong>" +BMI.toFixed(2) + "</strong><br>"
    +"Đánh giá thể trạng: <strong>" +phanLoai + "</strong>";
}


