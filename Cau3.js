// Câu 3: Nhập tháng/năm (định dạng MM/yyyy) và đếm số ngày trong tháng

function tinhSoNgay(thangNam) {
    // Tách chuỗi theo dấu "/" để lấy tháng và năm
    let parts = thangNam.split("/");
    let thang = parseInt(parts[0]);
    let nam = parseInt(parts[1]);

    // Kiểm tra năm nhuận
    let laNamNhuan = (nam % 4 === 0 && nam % 100 !== 0) || (nam % 400 === 0);

    let soNgay = 0;
    switch (thang) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            soNgay = 31;
            break;
        case 4: case 6: case 9: case 11:
            soNgay = 30;
            break;
        case 2:
            soNgay = laNamNhuan ? 29 : 28;
            break;
        default:
            return "Tháng không hợp lệ!";
    }

    return "Tháng " + thang + "/" + nam + " có " + soNgay + " ngày.";
}

// Chạy thử kiểm tra:
console.log(tinhSoNgay("02/2024")); // 2024 là năm nhuận -> 29 ngày
console.log(tinhSoNgay("02/2023")); // 2023 là năm thường -> 28 ngày
console.log(tinhSoNgay("10/2024")); // 31 ngày
