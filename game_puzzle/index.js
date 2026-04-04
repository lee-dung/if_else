let trangThai = {
    1: Math.floor(Math.random() * 3) + 1,
    2: Math.floor(Math.random() * 3) + 1,
    3: Math.floor(Math.random() * 3) + 1,
    4: Math.floor(Math.random() * 3) + 1
};

const danhSachAnh = {
    1: [
        "images/dog-1.png",
        "images/dog-2.png",
        "images/dog-3.png",
        "images/dog-4.png"
    ],
    2: [
        "images/cat-1.png",
        "images/cat-2.png",
        "images/cat-3.png",
        "images/cat-4.png"
    ],
    3: [
        "images/bear-1.png",
        "images/bear-2.png",
        "images/bear-3.png",
        "images/bear-4.png"
    ]
};

function layDuongLinkAnh(loaiTranh, viTriManh) {
    return danhSachAnh[loaiTranh][viTriManh - 1];
}

function capNhatManHinh() {
    document.getElementById("part1").src = layDuongLinkAnh(trangThai[1], 1);
    document.getElementById("part2").src = layDuongLinkAnh(trangThai[2], 2);
    document.getElementById("part3").src = layDuongLinkAnh(trangThai[3], 3);
    document.getElementById("part4").src = layDuongLinkAnh(trangThai[4], 4);

    kiemTraThang();
}

function doiAnh(viTriManh) {
    trangThai[viTriManh]++;

    if (trangThai[viTriManh] > 3) {
        trangThai[viTriManh] = 1;
    }

    capNhatManHinh();
}

function kiemTraThang() {
    let khungGame = document.getElementById("game-board");
    let thongBao = document.getElementById("thongBao");

    if (trangThai[1] === trangThai[2] &&
        trangThai[2] === trangThai[3] &&
        trangThai[3] === trangThai[4]) {

        khungGame.classList.add("win-effect");
        thongBao.innerHTML = "🎉 Tuyệt vời! Bạn đã ghép đúng bức tranh!";
    } else {
        khungGame.classList.remove("win-effect");
        thongBao.innerHTML = "";
    }
}

capNhatManHinh();