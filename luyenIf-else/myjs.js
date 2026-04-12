//bai1
/*
let a = +prompt("Nhập số a: ");
let b = +prompt("Nhập số b: ");

if(isNaN(a) || isNaN(b)) {
    document.write("Lỗi: Vui lòng nhập số, không được nhập chữ");
}
else if(b === 0){
  document.write("Lỗi: Không thể chia hết cho 0!")
} else if (a % b === 0) {
    document.write(a+" chia hết cho " + b)
} else {
    document.write(a+ " không chia hết cho " + b)
}
*/

//bai2
/*
let old = +prompt("Hãy nhập tuổi của bạn: ");

if (isNaN(old) || old <= 0) {
    document.write("Tuổi không hợp lệ. Vui lòng nhập số nguyên dương.");
} else{
    dieuKien(old);
}

function dieuKien(old) {
    if (old === 15) {
        document.write(`Học sinh ${old} đủ điều kiện vào lớp 10.(đúng độ tuổi chuẩn)`);
    }else if (old === 16 || old === 17) {
        document.write(`Học sinh ${old} đủ điều kiện vào lớp 10.(lưu ban hoặc học muộn)`);
    }else if (old >= 18 || old <= 21) {
        document.write(`Học sinh ${old} đủ có thể vào lớp 10 nếu được cơ quan có thẩm quyền cấp phép.(Trường hợp đặc biệt)`);
    }else if (old < 15) {
        document.write(`Học sinh ${old} chưa đủ tuổi vào lớp 10. Cần đủ 15 tuổi.`);
    }else{
        document.write(` Học sinh ${old} tuổi VƯỢT QUÁ độ tuổi cho phép vào lớp 10 (tối đa 21 tuổi).`)
    }
}

 */

//bai3
/*
let number = +prompt("Hãy nhập 1 số nguyên bất kỳ: ");

if(isNaN(number)){
    document.write("LỖI: Vui lòng nhập 1 số hợp lệ!");
} else if(number < 0) {
    document.write(`${number} vừa nhập nhỏ hơn 0`);
}else if (number > 0) {
    document.write(`${number} vừa nhập lớn hơn 0`);
}else {
    document.write("Số vừa nhập bằng 0");
}

*/

//bai 4
/*
let a = +prompt("Hãy nhập 1 số nguyên bất kỳ: ");
let b = +prompt("Hãy nhập 1 số nguyên bất kỳ: ");
let c = +prompt("Hãy nhập 1 số nguyên bất kỳ: ");


if(isNaN(a) || isNaN(b) || isNaN(c)) {
    document.write("Lỗi: Vui lòng nhập lại!");
}else {
    let max = a;
    if(b> max){
        max = b;
    }if(c>max){
        max = c;
    }
}

document.write(`${max} là số lớn nhất`);
*/

//bai 5
/*
let diemKT = +prompt("Nhập điểm kiểm tra (0-10): ");
let diemGT = +prompt("Nhập điểm giữa kỳ (0-10): ");
let diemCT = +prompt("Nhập điểm cuối kỳ (0-10): ");

if (isNaN(diemCT) || isNaN(diemKT) || isNaN(diemGT)) {
    document.write("LỖI: Vui lòng nhập lại");
}else if(diemKT < 0 || diemKT > 10 || diemGT < 0 || diemGT > 10 || diemCT < 0 || diemCT > 10) {
    document.write("LỖI: Điểm số phải nằm trong khoảng từ 0 đến 10");
}else{
    let dtb = (diemKT + diemGT * 2 + diemCT * 3)/6;
    document.write(`Điểm trung bình của bạn là: ${dtb.toFixed(1)} <br>`);

    if (dtb >= 8.0) {
        document.write("Xếp loại: Học sinh Giỏi ");
    }
    else if (dtb >= 6.5) {
        document.write("Xếp loại: Học sinh Khá ");
    }
    else if (dtb >= 5.0) {
        document.write("Xếp loại: Học sinh Trung bình ");
    }
    else {
        document.write("Xếp loại: Học sinh Yếu ");
    }
}

 */

//bai6
/*
let doanhSo;
do {
    doanhSo = +prompt("Hãy nhập số tiền mà bạn bán được");
    if(isNaN(doanhSo) || doanhSo < 0) {
        alert("LỖI: Hãy nhập số tiền mà bạn nhận được (VNĐ)")
    }
}while (isNaN(doanhSo) || doanhSo < 0);

let hoaHong = 0;
if (doanhSo > 500000) {
        hoaHong = doanhSo * 0.10;
}else if(doanhSo >= 200000) {
        hoaHong = doanhSo * 0.05;
}
else {
        hoaHong = doanhSo * 0.02;
}
let strDoanhSo = doanhSo.toLocaleString("vi-VN");
let strHoaHong = hoaHong.toLocaleString("vi-VN");
    document.write(`Doanh số của bạn: <b>${strDoanhSo} VNĐ</b> <br>`);
    document.write(`Số tiền hoa hồng mà bạn nhận được là: <b style="color: red;">${strHoaHong} VNĐ</b>`);

*/
// bai8

let soPhut = +prompt("Nhập số phút gọi trong một tháng: ");

if(isNaN(soPhut) || soPhut < 0) {
    alert("LỖI: Số phút gọi phải là một số dương hợp lệ!");
}else{
    const PHI_CO_DINH = 25000;
    let cuocGoi = 0;
    if(soPhut <= 50) {
        cuocGoi = soPhut * 600;
    }else if(soPhut <= 200) {
        cuocGoi = (50 * 600)+((soPhut - 50) * 400);
    }else{
        cuocGoi = (50 * 600)+(150 *400) + ((soPhut - 200) * 200);
    }
    let tongTien = PHI_CO_DINH + cuocGoi;

    document.write(`Thời lượng gọi: <b>${soPhut} phút</b> <br>`);
    document.write(`Phí thuê bao: ${PHI_CO_DINH.toLocaleString('vi-VN')} VNĐ <br>`);
    document.write(`Cước phí gọi: ${cuocGoi.toLocaleString('vi-VN')} VNĐ <br>`);
    document.write(`<b>Tổng hóa đơn: <span style="color: red;">${tongTien.toLocaleString('vi-VN')} VNĐ</span></b>`);
}


