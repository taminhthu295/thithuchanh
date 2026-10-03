// Câu 1: Nhập mảng số nguyên (<= 50 phần tử), hiển thị mảng và tính trung bình cộng các số chia hết cho 3

function cau1(arr) {
    let tong = 0;
    let dem = 0;

    // Duyệt qua từng phần tử của mảng
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            tong += arr[i];
            dem++;
        }
    }

    console.log("Mảng vừa nhập: " + arr.join(", "));

    if (dem === 0) {
        console.log("Không có số nào chia hết cho 3 trong mảng.");
    } else {
        let tbc = tong / dem;
        console.log("Trung bình cộng các số chia hết cho 3 là: " + tbc);
    }
}

// Chạy thử với mảng ví dụ:
let mang = [3, 9, 5, 6, 8, 12];
cau1(mang);
